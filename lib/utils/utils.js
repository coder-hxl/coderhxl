import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

import ejs from 'ejs'

const compile = (template, data) => {
  const { dirname } = getCurrentPath(import.meta.url)

  const templatePosition = `../templates/${template}`
  const templatePath = path.resolve(dirname, templatePosition)

  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, res) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      }
      resolve(res)
    })
  })
}

const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content)
}

const compileAddFileAction = async (datasArr) => {
  for (const data of datasArr) {
    const { compileTemplate, addFile } = data

    const templateResult = await compile(
      compileTemplate.file,
      compileTemplate.data
    )

    if (createDirSync(addFile.targetDest)) {
      const filePath = path.resolve(addFile.dest, addFile.name)
      await writeToFile(filePath, templateResult)
      console.log(`${addFile.name} succes add to ${addFile.targetDest}`)
    }
  }
}

function createDirSync(pathName) {
  if (fs.existsSync(pathName)) {
    return true
  } else {
    if (createDirSync(path.dirname(pathName))) {
      fs.mkdirSync(pathName)
      return true
    }
  }
}

function firstToUp(str) {
  const first = str.slice(0, 1).toLocaleUpperCase()
  return first + str.slice(1)
}

function getCurrentPath(fileURL) {
  const filename = fileURLToPath(fileURL)
  const dirname = path.dirname(filename)

  return { filename, dirname }
}

export { compile, writeToFile, compileAddFileAction, createDirSync, firstToUp }
