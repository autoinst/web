<template>
  <div class="error-page">
    <el-empty description="404 - 页面未找到">
      <el-button type="primary" @click="goHome">返回首页</el-button>
    </el-empty>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.el-empty {
  font-size: 18px;
}
</style>