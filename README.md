# coderhxl

coderhxl 是一个快速搭建和开发前端项目的 CLI 。

## 为什么要使用 coderhxl
* 无需每次创建项目都要从零配置, 通过 coderhxl 创建的项目是基于 vite , 并且做了很多配置, 比如: 对 axios 进行封装, 动态导入路由配置，详情在 <a href="#create" style="color: #2f90b9; text-decoration: none">创建项目</a> 部分 。
* 在一个项目中, 必定要创建很多组件, 同时也需要配置对应的路由。比如有 15 个,  一步一步创建组件再配置路由必然是个重复工作, 效率低。 而通过 coderhxl 的一条命令，一键创建一个组件并自动配置路由再搭配 coderhxl 配置的自动导入路由功能给 vue-router 导入所有路由配置, 效率高。
* 更多优点请看 <a href="#function" style="color: #2f90b9; text-decoration: none">功能</a> 部分。

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

## <h2 id="create">创建项目</h2>
coderhxl 目前支持 Vue 项目, 后续会考虑 React 项目。

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

## <h2 id="function">功能</h2>

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