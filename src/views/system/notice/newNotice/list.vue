<template>
<div class="notice">
  <el-card class="box-card">
    <div slot="header" class="notice-title">
      <span><i class="el-icon-warning"></i>公告</span>
    </div>
    <div class="notice-content">
      <div v-if="!content" class="title">暂无公告</div>
      <div v-else class="content">{{content}}</div>
    </div>
  </el-card>
</div>
</template>

<script>
  export default {
    data() {
      return {
        content: 'value'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .notice{
    padding: 50px;
  }
  .box-card{
    .notice-title{
      height: 80px;
      font-size: 56px;
      text-align: center;
      color: #0061A5;
    }
    min-height: 440px;
  }
  .notice-content{
    .title{
      font-size: 24px;
      color:#ccc;
      text-align: center;
    }
    .content{
      color: #555;
    }
  }
</style>