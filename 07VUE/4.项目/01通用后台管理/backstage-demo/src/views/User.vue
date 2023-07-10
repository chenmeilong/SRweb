<template>
  <div class="manage">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      
      <!-- 用户表单信息 -->
      <el-form ref="form" :model="form" label-width="80px" :inline="true" :rules='rules'>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期" prop="birth">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.birth" style="width: 100%;"
            value-format = "yyyy-MM-DD">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="地址" prop="addr">
            <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="handleAdd">
        + 新增
      </el-button>
      <!-- form搜索区 -->
      <el-form :model="userForm" :inline="true">
        <el-form-item>
          <el-input v-model="userForm.name" placeholder="请输入名称"></el-input>
        </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="common-table">
      <el-table
        stripe
        height="90%"
        :data="tableData"
        style="width: 100%">
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="age" label="年龄"> </el-table-column>
          <el-table-column prop="sex" label="性别"> 
            <template slot-scope="scope">
              <span style="margin-left:10px">{{scope.row.sex==1?'男':'女'}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="birth" label="出生日期"> </el-table-column>
          <el-table-column prop="addr" label="地址"> </el-table-column>
          <el-table-column prop="" label="操作"> 
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
      </el-table>
      <div class="pager">
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          @current-change="handlePage">
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
import {getUser,addUser,editUser,delUser} from '../api'
export default {
  data(){
    return {
      dialogVisible:false,
      form: {
        name: '',
        age:'',
        sex:'',
        birth:'',
        addr:'',
      },
      rules:{
        name:[
          {required:true,message:'请输入姓名'}
        ],
        age:[
          {required:true,message:'请输入年龄'}
        ],
        sex:[
          {required:true,message:'请选择性别'}
        ],
        birth:[
          {required:true,message:'请选择出生日期'}
        ],
        addr:[
          {required:true,message:'请输入地址'}
        ]
      },
      tableData:[],
      modalType:0, //0表示新增 1表示编辑
      total:0,   //当前的总条数 
      pageData:{
        page:1,  //默认选第一页
        limit:10  //默认显示10条数据
      },
      userForm:{
        name:''
      }
    }
  },
  methods:{
    submit(){
      this.$refs.form.validate((valid)=>{
        //valid 为校检通过的标志
        if(valid){
          if(this.modalType === 0){
            //新增
            addUser(this.form).then(()=>{
              //刷新当前table
              this.getList()
            })
          }else{
            editUser(this.from).then(()=>{
              //刷新当前table
              this.getList()
            })
          }
          //后续对表单数据的处理
          //拿到用户的输入信息，关闭弹窗,清除数据
          this.$refs.form.resetFields()
          this.dialogVisible = false
        }
      })
    },
    //弹窗关闭的时候触发
    handleClose(){
      // console.log(this.$refs.form)
      this.$refs.form.resetFields()
      this.dialogVisible = false 
    },
    //取消按钮事件
    cancel(){
      this.handleClose()
    },
    handleEdit(row){
      this.modalType = 1
      this.dialogVisible = true
      //内容回显 注意需要深拷贝,否则会出错
      this.form = JSON.parse(JSON.stringify(row))
    },
    handleDelete(row){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            delUser({id: row.id}).then(()=>{  //参数是id
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            //更新列表
            this.getList()
          })  

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
      });
    },
    // 获取的列表数据
    getList(){
      getUser({...this.pageData,...this.userForm}).then(({data})=>{
        this.tableData = data.list
        this.total = data.count || 0
      })
    },
    handleAdd(){
      this.dialogVisible = true
      this.modalType = 0
    },
    handlePage(val){
      console.log('###',val)
      this.pageData.page = val
      this.getList()
    },
    //列表查询
    onSubmit(){
      this.getList()
    }
  },
  mounted(){
    this.getList()
  },
}
</script>

<style lang="less" scoped>
.manage{
  height: 90%;
  .manage-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .common-table{
    position: relative;
    // 高度計算方法
    height: calc(100% - 62px);       //使用calc动态就算 左右两边要留空格
    .pager{
      position: absolute;
      bottom:0;
      right:20px;
    }
  }
}

</style>