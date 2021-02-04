# This is IOT component library

该组件库是基于`element-ui`的`IOT Vue`组件库，`storybook`已默认使用`element-ui`

## 使用组件库

请首先查看[官方文档]()

```
npm set "@iot-component-library:registry" http://10.12.3.28:4873/
```

## 命令详情

- `npm run bootstrap`: 使用`lerna bootstrap`提取所有`packages`依赖
- `storybook`: 启动`storybook`项目，此是组件库的文档工程
- `build`: 打包所有工程，包括`bundle`，`components`，`bookstory`等等
- `build:component`: 打包`iot`组件
- `build:bundle`: 打包`bundle`，使用时可以直接使用`bundle`注入所有组件到`vue`工程
- `build:storybook`: 打包`storybook`工程 - 项目文档，部署于`10.12.3.28/opt/nginx/micrApp`目录
- `publish:lerna`: 使用`lerna publish`发包到`http://10.12.3.28:4873/`
- `lint`: `eslint`检测代码规范
- `fix`: `eslint --fix`修复代码，并且使用`prettier`格式化代码
- `cz`: `git-cz`标准化`git commit`内容，`commit`请使用`cz`命令，否则将无法`commit`成功