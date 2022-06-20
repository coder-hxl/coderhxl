const util = require('util')
const path = require('path')

const download = util.promisify(require('download-git-repo'))

const { repos } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compileAddFileAction, firstToUp } = require('../utils/utils')

const createProjectActive = async (project) => {
  console.log('coderhxl is helping you create you project~')
  // 1.clone项目
  try {
    await download(repos.vue, project, { clone: true })
  } catch (err) {
    console.log(`从 ${repos.vue.slice(7)} 克隆失败~`)
    console.log('请检查能否能正常连接 Github 或 该文件夹已存在~')
    return
  }

  // 2.执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3.运行npm run dev
  commandSpawn(command, ['run', 'dev'], { cwd: `./${project}` })
}

const addComponentAction = (name, dest) => {
  const compileTemplate = {
    file: 'vue-component.ejs',
    data: {
      name,
      lowerName: name.toLocaleLowerCase(),
    },
  }

  const addFile = {
    dest,
    targetDest: dest,
    name: `${name}.vue`,
  }

  compileAddFileAction([{ compileTemplate, addFile }])
}

const addPiniaAction = (name, dest) => {
  const compileTemplate = {
    file: 'pinia.ejs',
    data: {
      name,
      UpperName: firstToUp(name),
    },
  }

  const addFile = {
    dest,
    targetDest: dest,
    name: `${name}.js`,
  }

  compileAddFileAction([{ addFile, compileTemplate }])
}

const addPageAndRouteAction = (name, dest) => {
  const compileCpnTemplate = {
    file: 'vue-component.ejs',
    data: {
      name,
      lowerName: name.toLocaleLowerCase(),
    },
  }
  const compileRouteTemplate = {
    file: 'vue-route.ejs',
    data: {
      name,
      lowerName: name.toLocaleLowerCase(),
      path: `./${name}`,
    },
  }

  const targetDest = path.resolve(dest, name)
  const addCpnFile = {
    dest: targetDest,
    targetDest,
    name: `${name}.vue`,
  }
  const addRouteFile = {
    dest: targetDest,
    targetDest,
    name: `route.js`,
  }

  const cpnData = {
    compileTemplate: compileCpnTemplate,
    addFile: addCpnFile,
  }
  const routeData = {
    compileTemplate: compileRouteTemplate,
    addFile: addRouteFile,
  }

  compileAddFileAction([cpnData, routeData])
}

const addPageAndRouteAction2 = (name, dest) => {
  const splitDest = dest.split('/')
  if (splitDest[1] === 'views') {
    const compileCpnTemplate = {
      file: 'vue-component.ejs',
      data: {
        name,
        lowerName: name.toLocaleLowerCase(),
      },
    }
    const compileRouteTemplate = {
      file: 'vue-route.ejs',
      data: {
        name,
        lowerName: name.toLocaleLowerCase(),
        path: dest.replace('src', '@') + `/${name}`,
      },
    }

    const routeDest = dest.replace('views', 'router')
    const addCpnFile = {
      dest,
      targetDest: dest,
      name: `${name}.vue`,
    }
    const addRouteFile = {
      dest: routeDest,
      targetDest: routeDest,
      name: `${name}.js`,
    }

    const cpnData = {
      compileTemplate: compileCpnTemplate,
      addFile: addCpnFile,
    }
    const routeData = {
      compileTemplate: compileRouteTemplate,
      addFile: addRouteFile,
    }
    compileAddFileAction([cpnData, routeData])
  } else {
    addPageAndRouteAction(name, dest)
  }
}

module.exports = {
  createProjectActive,
  addComponentAction,
  addPiniaAction,
  addPageAndRouteAction,
  addPageAndRouteAction2,
}
