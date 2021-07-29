<template>
  <div class="dialog">
    <el-form  :model="formInline"  label-width="80px" :label-position="labelPosition">
      <el-row :gutter="80">
        <el-col :span="12">
          <el-form-item label="参数代码">
            <el-input  placeholder="" v-model='formInline.parameterCode' :disabled="isDisabled"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="参数值">
            <el-input  placeholder="" v-model="formInline.parameterValue" :disabled="isDisabled"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="参数详情">
            <el-select v-model="formInline.parameterDetails" placeholder="" :disabled="isDisabled">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='10' :offset='10'>
          <el-button type="primary">修改</el-button>
          <el-button type="primary" @click="cancel">取消</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'Comp',
  props:['currentRow'],
  data() {
    return {
      isDisabled:false,
      labelPosition:'left',
      formInline: {
        parameterCode: '',
        parameterValue: '',
        parameterDetails:'',
      }
    }
  },
  watch: {
    currentRow:{
      handler(newValue, oldValue) {
          this.formInline=newValue;
      },
      immediate: true
    }
  },
 methods: {
   cancel() {
     this.$emit('dialogClose')
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