<template>
    <div class='footer'>
        <span class="scroll"></span>
        AutoInstall是开源的 <el-link href="https://github.com/jdnjk/AutoInstall" target="_blank">Github</el-link>
        <br/>
        <span class="copyright">Copyright © 2024 - 现在 jdnjk. All Rights Reserved.</span>
    </div>
  </template>
  <style>
    .el-divider{
      background-color: rgb(84, 92, 100);
    }
  </style>
  <style scoped>
      .footer{
          height: 250px;
          text-align: center;
          font-size: 16px;
          padding: 0px 100px;
          position: relative;
      }
      .footer{
        cursor: pointer;
      }
      .copyright{
        font-size: 12px;
      }
      .info{
        font-size: 14px;
        color: #72767b;
        line-height: 25px;
      }
  </style>
  <script>
  export default {
    name: 'Footer',
    data () {
      return {
        drawer: false,
        direction: 'btt'
      }
    },
    methods: {
      handleClose (done) {
        done()
      }
    }
  }
  </script>