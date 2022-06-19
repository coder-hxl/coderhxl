# <div id="cn">coderhxl</div>

coderhxl 是一个快速搭建和开发前端项目的 CLI 。

语言: 简体中文 | <a href="#en" style="color: #2177b8; text-decoration: none">English</a>

## 为什么要使用 coderhxl
* 无需每次创建项目都要从零配置, 通过 coderhxl 创建的项目是基于 vite , 并且做了很多配置, 比如: 对 axios 进行封装, 动态导入路由配置，详情在 <a href="#cn-create" style="color: #2f90b9; text-decoration: none">创建项目</a> 部分 。
* 在一个项目中, 必定要创建很多组件, 同时也需要配置对应的路由。比如有 15 个,  一步一步创建组件再配置路由必然是个重复工作, 效率低。 而通过 coderhxl 的一条命令，一键创建一个组件并自动配置路由再搭配 coderhxl 配置的自动导入路由功能给 vue-router 导入所有路由配置, 效率高。
* 更多优点请看 <a href="#cn-function" style="color: #2f90b9; text-decoration: none">功能</a> 部分。

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

## <h2 id="cn-create">创建项目</h2>
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

## <h2 id="cn-function">功能</h2>

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

### 创建 Pinia store
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
coderhxl add-page2 main # 组件默认创建到 src/views/main , 路由配置默认创建到 src/router/main
coderhxl add-page2 main -d src/views/main # 指定将组件创建到 src/views/main , 路由配置创建到 src/router/main
```

## 详情
详情请在命令行工具中运行:
```shell
coderhxl -h
```





------





# <div id="en">coderhxl</div>

coderhxl is a CLI for quickly building and developing front-end projects.

langue: <a href="#cn" style="color: #2177b8; text-decoration: none">简体中文</a> | English

## Why use coderhxl
* There is no need to configure from zero every time you create a project. The project created by coderhxl is based on vite, and has done a lot of configuration, such as: encapsulate axios, dynamically import routing configuration, the details are in the <a href="#en-create" style="color: #2f90b9; text-decoration: none">Create</a> project section 。
* In a project, many components must be created, and corresponding routes also need to be configured. For example, if there are 15, creating a component step by step and then configuring a route is bound to be a repetitive task, which is inefficient. And through a command of coderhxl, one-click to create a component and automatically configure routing and then use the automatic import routing function of codehxl configuration to import all routing configurations to vue-router, which is efficient.
* See the <a href="#en-function" style="color: #2f90b9; text-decoration: none">Function</a> section for more benfits。

## Install
Using NPM: 

```shell
npm install coderhxl -g
```

Using Yarn:
```shell
yarn add coderhxl -g
```

Using PNPM：
```shell
pnpm add coderhxl -g
```

## <h2 id="en-create">Create project</h2>
coderhxl currently supports Vue projects, and will consider React projects in the future.

### Vue3

The configuration done by coderhxl for the Vue3 project module:

* Common directory structure
* vite.config.js (config alias)
* axios (installation and configuration of axios, secondary packaging)
* vue-router (installation and configuration of vue-router, using dynamic import routing)
* Pinia (installation and configuration of Pinia)

Create a Vue3 project

```shell
coderhxl create <project>
```

## <h2 id="en-function">Function</h2>

Commands provided by coderhxl:

* add-cpn: create a Vue component (setup)
* add-page: Create Vue components in the directory and configure routing (lazy loading)
* add-page2: Create Vue components in the directory, configure routing in src/router (lazy loading)
* add-pinia: Jian Jian Pinia Store

### Create Vue components
```shell
coderhxl add-cpn <name> 
coderhxl add-cpn main # Create to src/components by default
coderhxl add-cpn main -d src/components # Specify to create to src/components
```

### Create Pinia store
```shell
coderhxl add-pinia <name> 
coderhxl add-pinia main # Create to src/store/main by default
coderhxl add-pinia main -d src/store/main # Specify to create to src/store/main
```

### Create Vue components and configure routing

```shell
coderhxl add-page <name> 
coderhxl add-page main # Create to src/views by default
coderhxl add-page main -d src/views # Specify to create to src/views
```

### Create Vue components and configure routing
```shell
coderhxl add-page2 <name>
coderhxl add-page2 main # Components are created to src/views/main by default, and routing configuration is created to src/router/main by default
coderhxl add-page2 main -d src/views/main # Specify that components are created to src/views/main and routing configuration is created to src/router/main
```

## Details
For details, run the command line tool:

```shell
coderhxl -h
```
