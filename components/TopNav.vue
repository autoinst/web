<template>
  <div class="wrapper">
    <!-- 页面头部部分 -->
    <div class="header">
      <div class="logo">AutoInstall</div>
      <!-- 水平一级菜单 -->
      <div style="float:left;">
        <el-menu 
          mode="horizontal"
          text-color="#000000"
          active-text-color="#3989fa"
          :default-active="toIndex" 
          @select="handleSelect">
          <el-menu-item v-for="(item, index) in itemList" :index="item.path" :key="index">
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
 
  </div>
</template>
 
<script>
export default {
  data(){
    return{
      itemList: [    // 水平一级菜单栏的菜单
        { path: '/Home', title: '首页' },
        { path: '/test1', title: '一级菜单1' },
        { path: '/test2', title: '一级菜单2' },
        { path: '/test3', title: '一级菜单3' },
        // { path: '/i18n', title: '国际化组件' }
      ],
    }
  },
  computed: {
    toIndex(){  // 根据路径绑定到对应的一级菜单，防止页面刷新重新跳回第一个
      return '/' + this.$route.path.split('/')[1];
    },
  },
  created() {
    
  },
  methods: {
    handleSelect(path){  // 切换菜单栏
      this.$router.push({
        path: path
      });
    },
  }
}
</script>
 
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
}
.header .logo {
  float: left;
  margin-left: 60px;
  margin-top: 17.5px;
  height: 29px;
  width: 160px;
  vertical-align: middle;
}
/* --------------- 水平一级菜单栏的样式--------------------- */
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
  float: left;
  margin-left: 50px;
  background: transparent;
}
.el-menu--horizontal > .el-menu-item.is-active {
  /* border-bottom: 2px solid #3989fa;
  color: #3989fa; */
  font-weight: bold;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 16px;
  margin: 0 15px;
}
</style>