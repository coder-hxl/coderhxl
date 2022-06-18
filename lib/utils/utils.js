const path = require('path')
const fs = require('fs')

const ejs = require('ejs')

const compile = (template, data) => {
  const templatePosition = `../templates/${template}`
  const templatePath = path.resolve(__dirname, templatePosition)

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
  const First = str.slice(0, 1).toLocaleUpperCase()
  return First + str.slice(1)
}

module.exports = {
  compile,
  writeToFile,
  compileAddFileAction,
  createDirSync,
  firstToUp,
}
