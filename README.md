# webpack-react-ts

### 安装环境

* node.js ``` v8+ ``` [https://nodejs.org](https://nodejs.org)
* yarn ``` v1+ ```  [https://yarnpkg.com](https://yarnpkg.com)

### 编辑器

* 强烈推荐 **WebStorm**
	1. 如果使用 WebStorm , .editorconfig 将自动与其关联
	2. 打开 Setting => Languages & Frameworks => TypeScript => TSLint ,将 Enable 选中, tslint.json 即可与 WebStorm 正常关联
	3. 打开 Setting => Languages & Frameworks => Stylesheets => Stylelint ,将 Enable 选中, .stylelintrc 即可与 WebStorm 正常关联


* 如果是其他编辑器
	1. 为使 ```.editorconfig``` 正常使用，请 [点击链接](http://editorconfig.org/#download) 查看本编辑器是否需要下载插件，如需下载，请按要求安装
	2. 为使 ```tslint.json``` 与编辑器正常关联，请 [点击链接](https://palantir.github.io/tslint/usage/third-party-tools/) 查看本编辑器与 tslint.json 的集成方法
	3. 为使 ```.stylelintrc``` 与编辑器正常关联，请 [点击链接](https://stylelint.io/user-guide/complementary-tools/) 查看本编辑器与 .stylelintrc 的集成方法

### 启动项目

* 进入项目根目录，安装项目依赖

```sh
yarn
```

* 运行项目

```sh
yarn start
```

* 打包项目

```sh
yarn build
```

* 代码检查（如果无法commit代码，请执行该命令，查看不合格代码）

```sh
yarn lint
```

### 风格指南

* 请严格按照以下规范进行开发(否则将无法向版本库提交代码)
* 参考链接
	1. [tslint](https://palantir.github.io/tslint/rules/)
	2. [tslint-react](https://github.com/palantir/tslint-react)
	3. [style-lint](https://stylelint.io/user-guide/rules/)


 // "mockjs": "1.0.1-beta3",
 // "reflect-metadata": "0.1.10"
 //"@types/jquery": "2.0.40",
