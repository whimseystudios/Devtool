"use strict"

module.exports = {
    root: true,
    // parser: "vue-eslint-parser", // 避免 <el-row> 等标签报错
    parserOptions: {
        parser: "babel-eslint", // 最好放在 parserOptions 中 // "@typescript-eslint/parser"
        sourceType: "module",
        ecmaVersion: 2020
    },
    env: { // es6、browser、node、worker、mocha、phantomjs、serviceworker 等
        browser: true,
        node: true
    },
    extends: [
        // "standard",
        // "eslint:recommended",
        // "plugin:vue/essential",
        // "plugin:vue/recommended",
        // "@vue/standard",
        // "plugin:vue/essential",
        // "plugin:vue/recommended", // 避免 <img>、<br> 等标签报错
        // "@vue/typescript/recommended",
        "plugin:@typescript-eslint/recommended",
        // "plugin:@typescript-eslint/eslint-recommended"
    ],
    globals: {
        __static: true // 自定义的 webpack 中的全局变量
    },
    plugins: [ // html、vue、import、@typescript-eslint 等
        "@typescript-eslint"
    ],
    rules: { // 0 == "off"、1 == "warn"、2 == "error"
        "indent": [2, 4], // 缩进风格
        "camelcase": 0, // 强制驼峰法命名
        // "object-curly-spacing": [0, "never"], // 大括号内是否允许不必要的空格
        "prefer-const": 0, // 首选 const
        "import/first": 0, // 可能导致 import 被强制放在 use strict 前
        "no-unused-vars": 0, // 不能有声明后未被使用的变量或参数
        "@typescript-eslint/camelcase": 0, // 强制驼峰法命名
        "@typescript-eslint/no-unused-vars": 0, // 不能有声明后未被使用的变量或参数
        "@typescript-eslint/no-explicit-any": 0, // 不能使用显式的 any
        "@typescript-eslint/no-var-requires": 0, // 不能使用 require 导入库，但 vue.config.js 中用 import 报错只能用 require
        "@typescript-eslint/no-inferrable-types": 0, // 不对初始化为数字、字符串、布尔值的变量或参数进行显式类型声明
        "@typescript-eslint/explicit-module-boundary-types": 0, // 函数参数不能使用显式的 any
        "keyword-spacing": 0, // 关键字后面的空格
        "no-multi-spaces": 0, // 不能用多个连续空格
        "space-before-function-paren": 0, // 函数定义括号前面的空格
        "arrow-parens": 0, // 箭头函数要用小括号括起来
        "generator-star-spacing": 0, // 生成器函数 * 前后的空格
        // "vue/prop-name-casing": 0, // 强制驼峰法属性命名
        // "vue/max-attributes-per-line": 0, // 单行可容纳 HTML 元素属性数量，默认 1 个
        // "vue/no-unused-components": 0, // 不能有未被使用的组件
        "no-template-curly-in-string": 0, // 使用模板文字创建包含变量或表达式的字符串
        "object-curly-newline": 0, // 强制在大括号内执行一致的换行符
        "object-property-newline": 0, // 大括号内对象属性必须换行
        // "no-console": process.env.NODE_ENV === "production" ? 1 : 0, // 禁止使用 console
        // "no-debugger": process.env.NODE_ENV === "production" ? 1 : 0 // 禁止使用 debugger
    }
}

// 需要在 VS Code 的 settings.json 中做一些开启自动修正之类的配置才能生效
