<template>
  <div class="notices">
    <div class="button">
      <el-button size='small' type="warning" icon="el-icon-view">新增任务</el-button>
      <el-button size='small' type="warning" icon="el-icon-view">修改任务</el-button>
      <el-button size='small' type="warning" icon="el-icon-view">删除任务</el-button>
      <el-button size='small' type="warning" icon="el-icon-view">查看任务</el-button>
      <el-button size='small' type="warning" icon="el-icon-view">启用任务</el-button>
      <el-button size='small' type="warning" icon="el-icon-view">停用任务</el-button>
      <el-button size='small' type="warning" icon="el-icon-view">任务参数</el-button>
      <el-button size='small' type="warning" icon="el-icon-view">立即执行</el-button>
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
        property="taskCode"
        label="序号">
      </el-table-column>
      <el-table-column
        property="taskName"
        label="任务名称">
      </el-table-column>
      <el-table-column
        property="taskCategory"
        label="任务分类">
      </el-table-column>
      <el-table-column
        property="jobType"
        label="程序类型">
      </el-table-column>
      <el-table-column
        property="jobCode"
        label="程序名称">
      </el-table-column>
      <el-table-column
        property="repeatType"
        label="执行计划">
      </el-table-column>
      <el-table-column
        property="running"
        label="运行中">
      </el-table-column>
      <el-table-column
        property="enabled"
        label="启用状态">
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
//任务管理
  import { getTaskList } from "@/api/system/task";
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
        let that=this;
        let pageNum=this.currentPage;
        let pageSize=this.pageSize
        getTaskList(pageNum,pageSize).then(function(res){
          that.total=res.result.total;
          that.tableData=res.result.list;
        })
      },
      handleSizeChange(val){
        this.pageSize=val;
        let that=this;
        let pageNum=this.currentPage;
        let pageSize=this.pageSize;
        getTaskList(pageNum,pageSize).then(function(res){
          that.total=res.result.total;
          that.tableData=res.result.list;
        })
      },
      queryData(){
        let that=this;
        getTaskList().then(function(res){
          that.total=res.result.total;
          that.tableData=res.result.list;
        })
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