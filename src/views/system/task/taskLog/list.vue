<template>
  <div class="notices">
    <div class="button">
      <el-button size='small' type="danger" icon="el-icon-delete" @click="del">删除日志</el-button>
      <el-button size='small' type="warning" icon="el-icon-view" @click="check">查看日志</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      highlight-current-row
      @current-change='currentChange'
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
        label="任务分类"
        width="noticeRangeString0">
      </el-table-column>
      <el-table-column
        property="runStatus"
        label="运行状态">
      </el-table-column>
      <el-table-column
        property="startTime"
        label="开始时间">
      </el-table-column>
      <el-table-column
        property="endTime"
        label="结束时间">
      </el-table-column>
      <el-table-column
        property="runResult"
        label="运行结果">
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
    <el-dialog
      title="查看日志"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
     >
        <CHECK :currentRow='currentRow' @handleClose='dialogClose'></CHECK>
    </el-dialog>
  </div>
</template>

<script>
  import { gettaskLogList,deleteTaskLog } from "@/api/system/task";
  import {Message } from 'element-ui'
  import CHECK from './check.vue'
  export default {
    data(){
      return {
        tableData:[],
        currentPage:1,
        total:0,
        pageSize:10,
        logId:'',
        dialogVisible: false,
        currentRow:{}
      }
    },
    components:{
      CHECK
    },
    methods:{
      handleCurrentChange(val){
        this.currentPage=val;
        let pageNum=val;
        let pageSize=this.pageSize;
        let that=this;
        gettaskLogList(pageNum,pageSize).then(function(res){
          that.total=res.result.total;
          that.tableData=res.result.list;
        })
      },
      handleSizeChange(val){
        this.pageSize=val;
        let pageNum=this.currentPage;
        let pageSize=this.pageSize;
        let that=this;
        gettaskLogList(pageNum,pageSize).then(function(res){
          that.total=res.result.total;
          that.tableData=res.result.list;
        })
      },
      queryData(){
        let that=this;
        gettaskLogList().then(function(res){
          that.total=res.result.total;
          that.tableData=res.result.list;
        })
      },
      currentChange(currentRow,oldCurrentRow){
         this.logId=currentRow.logId;
        this.currentRow=currentRow;
      },
      del(){
        let logId=this.logId;
        if(!logId){
          Message({
            message:'请您先选中一行之后在进行删除操作',
            type: 'error',
            duration: 3 * 1000
          })
          return;
        }
        deleteTaskLog(logId).then(res=>{
           Message({
            message:'删除成功',
            type: 'success',
            duration: 3 * 1000
          })
        })
      },
      check(){
        let currentRow=this.currentRow;
        if(!currentRow){
          Message({
            message:'请您先选中一行之后在进行查看操作',
            type: 'error',
            duration: 3 * 1000
          })
          return;
        }
        this.dialogVisible=true;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      dialogClose(val){
        this.dialogVisible=val;
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