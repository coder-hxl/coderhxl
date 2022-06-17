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
pnpm create coderhxl -g
```

## 创建项目
目前支持 Vue 项目

### Vue3
coderhxl 为 Vue3 项目模块做的配置:
* 常见的目录结构
* vite.config.js  (配置别名)
* axios (axios 的安装和配置, 进行了二次封装)
* vue-router (vue-router 的安装和配置, 采用动态导入路由)
* Pinia (Pinia 的安装和配置)

创建 Vue3 项目
```shell
coderhxl create <project>
```

## 功能
coderhxl 提供的功能:
* 创建 Vue 组件 (setup)
* 在目录下创建 Vue 组件, 并配置路由 (懒加载)
* 在目录创建 Vue 组件, 在 src/router 配置路由 (懒加载)
* 创建 Pinia Store

### 创建 Vue 组件
```shell
coderhxl add-cpn <name> 
coderhxl add-cpn main -d src/components # -d 后面跟着指定存放的目录, 不写 -d path 会默认存到 src/components
```

### 创建 Pinia Store
```shell
coderhxl add-pinia <name> 
coderhxl add-pinia main -d src/store/main # -d 后面是指定存放的目录, 不写 -d path 会默认存到 src/store
```

### 创建 Vue 组件, 并配置路由

```shell
coderhxl add-page <name> 
coderhxl add-page main -d src/views # -d 后面是指定存放的目录, 不写 -d path 会默认存到 src/views
```

### 创建 Vue 组件, 并配置路由2
```shell
coderhxl add-page2 <name>
coderhxl add-page2 main -d src/views/main # -d 后面是指定存放的目录, 不写 -d path 组件会默认存到 src/views, route会存到 src/router
```

## 详情
详情请在命令行工具中运行:
```shell
coderhxl -h
```