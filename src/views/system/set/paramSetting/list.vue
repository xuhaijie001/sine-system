<template>
  <div class="notices">
    <div class="button">
      <el-button size='small' type="success" icon="el-icon-edit" @click="update">修改参数</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
      highlight-current-row
       @current-change="handlecheck"
    >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        property="parameterCode"
        label="参数代码">
      </el-table-column>
      <el-table-column
        property="parameterValue"
        label="参数值">
      </el-table-column>
      <el-table-column
        property="parameterDetails"
        label="参数详情"
        width="noticeRangeString0">
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
        title="修改参数"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <Comp :currentRow='currentRow' @dialogClose="dialogClose"></Comp>
    </el-dialog>
  </div>
</template>

<script>
//全局参数配置组件
  import { getSetList, } from "@/api/system/set";
  import Comp from './comp.vue';
  export default {
    components:{
      Comp
    },
    data(){
      return {
        tableData:[],
        currentPage:1,
        total:0,
        pageSize:10,
        currentRow:{},
        dialogVisible:false
      }
    },
    methods:{
      handleCurrentChange(val){
        this.currentPage=val;
        let that =this;
        let pageNum=val;
        let pageSize=this.pageSize;
        getSetList(pageNum,pageSize).then(function(res){
          that.total=res.total;
          that.tableData=res.list;
        })
      },
      handleSizeChange(val){
        this.pageSize=val;
        let that =this;
        let pageSize=val;
        let pageNum=this.currentPage;
        getSetList(pageNum,pageSize).then(function(res){
          that.total=res.total;
          that.tableData=res.list;
        })
      },
      queryData(){
        let that =this;
        getSetList().then(function(res){
          that.total=res.total;
          that.tableData=res.list;
        })
      },
      handlecheck(val){
        this.currentRow = val;
      },
      handleClose(done){
         this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      update(){
        this.dialogVisible=!this.dialogVisible
      },
      dialogClose(){
        this.dialogVisible=false;
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