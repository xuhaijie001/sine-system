<template>
  <div class="notices">
    <div class="button">
      <el-button size='small' type="primary" icon="el-icon-circle-plus-outline">新建</el-button>
      <el-button size='small' type="success" icon="el-icon-edit">修改</el-button>
      <el-button size='small' type="danger" icon="el-icon-delete">删除</el-button>
      <el-button size='small' type="warning" icon="el-icon-view">查看</el-button>
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
        property="title"
        label="公告标题">
      </el-table-column>
      <el-table-column
        property="noticeTypeString"
        label="公告类型">
      </el-table-column>
      <el-table-column
        property="date"
        label="发布范围"
        width="noticeRangeString0">
      </el-table-column>
      <el-table-column
        property="creator"
        label="发布人">
      </el-table-column>
      <el-table-column
        property="createorgan"
        label="发布机构">
      </el-table-column>
      <el-table-column
        property="createdate"
        label="发布时间">
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
  </div>
</template>

<script>
  import { listNotice } from "@/api/system/notice";
  export default {
    data(){
      return {
        tableData:[],
        currentPage:1,
        total:0
      }
    },
    methods:{
      handleCurrentChange(){
        alert(1)
      },
      handleSizeChange(){
        alert(2)
      },
      queryData(){
        listNotice().then(function(res){
          this.total=res.total;
          this.tableData=res.list;
          //console.log(res)
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