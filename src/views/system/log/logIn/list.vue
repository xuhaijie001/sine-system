<template>
  <div class="notices">
    <div class="button">
      <el-button size='small' type="warning" icon="el-icon-view" @click='exports'>登录日志导出</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        property="createdate"
        label="操作时间">
      </el-table-column>
      <el-table-column
        property="username"
        label="操作用户">
      </el-table-column>
      <el-table-column
        property="realname"
        label="真实姓名">
      </el-table-column>
      <el-table-column
        property="actionflag_disp"
        label="动作">
      </el-table-column>
      <el-table-column
        property="ipaddress"
        label="用户IP">
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
  </div>
</template>

<script>
  import { getLogoInList,logExports } from "@/api/system/log";
  export default {
    data(){
      return {
        tableData:[],
        currentPage:1,
        total:0,
        pageSize:10
      }
    },
    methods:{
      handleCurrentChange(val){
          this.currentPage=val;
          let pageNum=this.currentPage;
          let pageSize=this.pageSize;
          let that=this;
          getLogoInList(pageNum,pageSize).then(function(res){
          that.total=res.total;
          that.tableData=res.list;
        })
      },
      handleSizeChange(val){
        let that=this;
        this.pageSize=val;
        let pageNum=this.currentPage;
        let pageSize=val;
        getLogoInList(pageNum,pageSize).then(function(res){
          that.total=res.total;
          that.tableData=res.list;
        })
      },
      queryData(){
        var that=this;
        getLogoInList().then(function(res){
          that.total=res.total;
          that.tableData=res.list;
        })
      },
      exports(){
        logExports()
      }
    },
    mounted(){
      this.queryData()
    }
  }
</script>

<style lang="scss" scoped>
    .notices{
      .button{
        padding: 10px 5px;
      }
      padding:15px 25px;
      .pagination{
        padding: 10px 10px;
        text-align: right;
      }
    }
</style>