# 知乎日报

## 声明
api来自知乎( [知乎Zhihu](http://www.zhihu.com/) ), 项目中所有内容的一切权利属于知乎, 本项目所有内容及代码仅供私下学习参考, 不得作为其他用途

## 简介
学习Vuejs蛮久的了, 也看了不少别人写的知乎日报, 干脆自己也拿日报练练手, 该项目使用vue-cli构建、打包, 配合vue全家桶（vue、vuex、vue-router）进行编码、使用axios进行资源请求

api使用node.js进行二次封装解决跨域问题, node使用[Heroku](https://www.heroku.com/)进行部署

使用sketch设计页面, 向着简约的方向做了一版

图片盗链问题使用以下meta标签解决

``` bash
<meta name="referrer" content="never">
```
欢迎issue, fork, star

## 预览

![预览](https://github.com/walleeeee/daily-zhihu/edit/master/)

## Demo

建议在手机或F12手机模式下浏览[Demo](https://walleeeee.github.io/daily-zhihu/static/demo.jpg)

## 运行方法

``` bash
npm install
npm run dev

```
## License

[MIT](https://opensource.org/licenses/MIT)
