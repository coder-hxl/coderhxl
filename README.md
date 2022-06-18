# coderhxl

coderhxl 是一个快速搭建和开发前端项目的CLI

## 安装
使用 NPM: 

```shell
npm install coderhxl -g
```

使用 Yarn:
```shell
yarn add coderhxl -g
```

使用 PNPM：
```shell
pnpm add coderhxl -g
```

## 创建项目
coderhxl 目前支持 Vue 项目, 后续会考虑 React 项目

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
coderhxl 提供的命令:
* add-cpn: 创建 Vue 组件 (setup)
* add-page: 在目录下创建 Vue 组件, 并配置路由 (懒加载)
* add-page2: 在目录创建 Vue 组件, 在 src/router 配置路由 (懒加载)
* add-pinia: 创建 Pinia Store

### 创建 Vue 组件
```shell
coderhxl add-cpn <name> 
coderhxl add-cpn main # 默认创建到 src/components
coderhxl add-cpn main -d src/components # 指定创建到 src/components
```

### 创建 Pinia Store
```shell
coderhxl add-pinia <name> 
coderhxl add-pinia main # 默认创建到 src/store/main 
coderhxl add-pinia main -d src/store/main # 指定创建到 src/store/main
```

### 创建 Vue 组件, 并配置路由

```shell
coderhxl add-page <name> 
coderhxl add-page main # 默认创建到 src/views 
coderhxl add-page main -d src/views # 指定创建到 src/views
```

### 创建 Vue 组件, 并配置路由2
```shell
coderhxl add-page2 <name>
coderhxl add-page2 main # 默认将组件创建到 src/views/main , 路由配置创建到 src/router/main
coderhxl add-page2 main -d src/views/main # 指定将组件创建到 src/views/main , 路由配置创建到 src/router/main
```

## 详情
详情请在命令行工具中运行:
```shell
coderhxl -h
```