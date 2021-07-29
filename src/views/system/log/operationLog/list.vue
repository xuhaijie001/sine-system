<template>
  <div class="notices">
    <div class="button">
      <el-button size='small' type="warning" icon="el-icon-view" @click="exports">操作日志导出</el-button>
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
        property="modulename"
        label="模块名称">
      </el-table-column>
      <el-table-column
        property="operate_desc"
        label="操作描述">
      </el-table-column>
      <el-table-column
        property="operate_type"
        label="操作类型">
      </el-table-column>
      <el-table-column
        property="is_succ"
        label="操作结果">
      </el-table-column>
      <el-table-column
        property="operate_obj1"
        label="操作对象">
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
  import { getOperationList ,operationExports} from "@/api/system/log";
  export default {
    data(){
      return {
        tableData:[],
        currentPage:1,
        pageSize:10,
        total:0
      }
    },
    methods:{
      handleCurrentChange(val){
        this.currentPage=val;
        let pageNum=val;
        let pageSize=this.pageSize;
        let that=this;
        getOperationList(pageNum,pageSize).then(function(res){
          that.total=res.total;
          that.tableData=res.list;
        })
      },
      handleSizeChange(val){
        this.pageSize=val;
        let pageNum=this.currentPage;
        let pageSize=val;
        let that=this;
         getOperationList(pageNum,pageSize).then(function(res){
          that.total=res.total;
          that.tableData=res.list;
        })
      },
      queryData(){
        let that=this;
        getOperationList().then(function(res){
          that.total=res.total;
          that.tableData=res.list;
        })
      },
      exports(){
        operationExports()
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