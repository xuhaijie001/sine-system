<template>
  <div class="dialog">
    <el-form  :model="formInline"  label-width="80px" :label-position="labelPosition">
      <el-row :gutter="80">
        <el-col :span="12">
          <el-form-item label="任务名称">
            <el-input v-model="currentRow.taskName" placeholder="" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="任务分类">
            <el-select v-model="currentRow.taskCategory" placeholder="" :disabled="true">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="运行状态">
            <el-select v-model="currentRow.runStatus" placeholder="" :disabled="true">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开始时间" :disabled="true">
            <el-date-picker
              v-model="currentRow.startTime"
              type="date"
              placeholder="" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="结束时间" :disabled="true">
            <el-date-picker
              v-model="currentRow.endTime"
              type="date"
              placeholder="" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
         <el-form-item label="运行结果">
            <el-select v-model="currentRow.runResult" placeholder="" :disabled="true">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
         <el-form-item label="异常原因">
           <el-input
              type="textarea"
              :autosize="{ minRows: 4}"
              placeholder=""
              v-model="currentRow.exception" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='2' :offset='10'>
          <el-button type="primary" @click="cancel">取消</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { checkTaskLog } from "@/api/system/task";
export default {
  props:['currentRow'],
  data() {
    return {
      labelPosition:'left',
      formInline: {
        taskName: '',
          taskCategory: '',
          runStatus:'',
          startTime:'',
          endTime:'',
          runResult:'',
          exception:''
      }
    }
  },
  methods: {
    cancel() {
      this.$emit('handleClose',false)
    }
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  min-height: 150px;
  padding: 0px 20px 30px 20px;
}
.el-input,.el-select{
  width:100%
}
</style>