# coderhxl

coderhxl 是一个快速搭建和开发前端项目的工具

## 安装
使用 NPM: 

```shell
npm install coderhxl -g
```

使用 Yarn:
```shell
yarn create coderhxl -g
```

使用 PNPM：
```shell
yarn create coderhxl -g
```

## 创建项目
目前支持 Vue 项目

### Vue3
coderhxl 为 Vue3 项目模块做的配置:
* 常见的目录结构
* vite.config.js  (配置别名)
* axios (axios 的安装和配置, 进行了二次封装)
* vue-router (vue-router 的安装和配置, 采用动态导入路由)

创建 Vue3 项目
```shell
coderhxl create <project>
```

## 功能
coderhxl 提供的功能:
* 创建 Vue 组件 (setup)
* 在同目录下创建 Vue 组件, 并配置路由 (懒加载)
* 在指定目录创建 Vue 组件, 在 src/router 配置路由 (懒加载)

### 创建 Vue 组件
```shell
coderhxl add-cpn <name>
```

### 创建 Vue 组件, 并配置路由

```shell
coderhxl add-page <name>
```

## 详情
更多请在命令行工具中运行:
```shell
coderhxl -h
```