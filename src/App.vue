<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="testless">testLess</div>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>
<!-- 可以通过这种写法来引入外部的样式文件 自己编写的放到这里 因为需要编译 -->
<!-- 外部引入的比如bootstrap是不需要在这里引入的 在index.html引入即可 -->
<style src='./main.less' lang='less'></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
