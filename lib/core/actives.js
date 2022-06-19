const util = require('util')
const path = require('path')

const download = util.promisify(require('download-git-repo'))
// const open = require('open')

const { repo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compileAddFileAction, firstToUp } = require('../utils/utils')

const createProjectActive = async (project) => {
  console.log('coderhxl help you create you project~')
  // 1.clone项目
  try {
    await download(repo.vue, project, { clone: true })
  } catch (err) {
    console.log(err.message)
    console.log(`从 ${repo.vue.slice(7)} 拷贝失败, 请重试~`)
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
