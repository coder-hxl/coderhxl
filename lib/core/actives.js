const util = require('util')
const path = require('path')

const download = util.promisify(require('download-git-repo'))
const open = require('open')

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile, writeToFile, createDirSync } = require('../utils/utils')

const createProjectActive = async (project) => {
  console.log('coderhxl help you create you project~')
  // 1.clone项目
  try {
    await download(vueRepo, project, { clone: true })
  } catch (err) {
    console.log(err.message)
    console.log(`从 ${vueRepo.slice(7)} 拷贝失败, 请重试~`)
    return
  }

  // 2.执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3.运行npm run dev
  commandSpawn(command, ['run', 'dev'], { cwd: `./${project}` })

  // 4.打开浏览器
  // open('http://localhost:3000/')
}

const addComponentAction = async (name, dest) => {
  // 1.编译ejs文件
  const result = await compile('vue-component.ejs', {
    name,
    lowerName: name.toLocaleLowerCase(),
  })

  // 2.写入文件的操作
  if (createDirSync(dest)) {
    const targetPath = path.resolve(dest, `${name}.vue`)
    console.log(targetPath)
    writeToFile(targetPath, result)
  }
}

const addPageAndRouteAction = async (name, dest) => {
  const componentResult = await compile('vue-component.ejs', {
    name,
    lowerName: name.toLocaleLowerCase(),
  })
  const routeResult = await compile('vue-route.ejs', {
    name,
    lowerName: name.toLocaleLowerCase(),
    path: name,
  })

  const targetDest = path.resolve(dest, name)
  if (createDirSync(targetDest)) {
    const componentPath = path.resolve(targetDest, `${name}.vue`)
    const routePath = path.resolve(targetDest, 'route.js')
    writeToFile(componentPath, componentResult)
    writeToFile(routePath, routeResult)
  }
}

const addPageAndRouteAction2 = async (name, dest) => {
  const splitDest = dest.split('/')
  if (splitDest[1] === 'views') {
    const componentResult = await compile('vue-component.ejs', {
      name,
      lowerName: name.toLocaleLowerCase(),
    })
    const routeResult = await compile('vue-route.ejs', {
      name,
      lowerName: name.toLocaleLowerCase(),
      path: dest.replace('src', '@') + `/${name}`,
    })

    const routeDest = dest.replace('views', 'router')
    if (createDirSync(dest) && createDirSync(routeDest)) {
      const componentPath = path.resolve(dest, `${name}.vue`)
      const routePath = path.resolve(routeDest, `${name}.js`)
      writeToFile(componentPath, componentResult)
      writeToFile(routePath, routeResult)
    }
  } else {
    addPageAndRouteAction(name, dest)
  }
}

module.exports = {
  createProjectActive,
  addComponentAction,
  addPageAndRouteAction,
  addPageAndRouteAction2,
}
