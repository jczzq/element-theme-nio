<template>
  <div id="app">
    <h1>element-theme-nio</h1>
    <el-tabs tab-position="left">
      <el-tab-pane label="Tab">
        <h3>
          默认 Tabs 选中条加了指示三角
        </h3>
        <el-tabs value="first" class="m-b" tab-position="left">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"
            >定时任务补偿</el-tab-pane
          >
        </el-tabs>
        <el-tabs value="first" class="m-b">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"
            >定时任务补偿</el-tab-pane
          >
        </el-tabs>

        <hr />
        <h3>
          type 为 card 的 Tabs 风格调整
        </h3>
        <el-tabs class="m-b" type="card">
          <el-tab-pane label="用户管理" name="first">
            <span v-for="item in 50" :key="item">用户管理</span>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"
            >定时任务补偿</el-tab-pane
          >
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="Color">
        <h3>
          color-primary: #00BCBC
        </h3>
        <el-button type="primary">primary</el-button>
        <h3>
          color-info: #333
        </h3>
        <el-button type="info">info</el-button>
      </el-tab-pane>
      <el-tab-pane label="BorderRadius">
        <h3>
          基础的 border-radius 设置为2px
        </h3>
        <div class="m-b">
          <el-button>default</el-button>
          <el-button type="primary">primary</el-button>
          <el-button type="info">info</el-button>
          <el-button type="warning">warning</el-button>
          <el-button type="danger">danger</el-button>
        </div>

        <div class="m-b">
          <el-button size="small">default</el-button>
          <el-button size="small" type="primary">primary</el-button>
          <el-button size="small" type="info">info</el-button>
          <el-button size="small" type="warning">warning</el-button>
          <el-button size="small" type="danger">danger</el-button>
        </div>

        <div class="m-b">
          <el-button size="mini">default</el-button>
          <el-button size="mini" type="primary">primary</el-button>
          <el-button size="mini" type="info">info</el-button>
          <el-button size="mini" type="warning">warning</el-button>
          <el-button size="mini" type="danger">danger</el-button>
        </div>
      </el-tab-pane>

      <el-tab-pane label="Dialog">
        <h3>
          Dialog 缩小了内边距
        </h3>
        <el-button type="text" @click="dialogVisible = true"
          >点击打开 Dialog</el-button
        >

        <el-dialog
          title="提示这是一段信息这是"
          width="70%"
          :visible.sync="dialogVisible"
        >
          <div class="m-b">
            这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息
          </div>
          <el-table class="m-b" :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table>
          <div>
            这是第二段信息这是第二段信息这是第二段信息这是第二段信息这是第二段信息这是第二段信息这是第二段信息这是第二段信息这是第二段信息
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button size="small" @click="dialogVisible = false"
              >取 消</el-button
            >
            <el-button
              size="small"
              type="primary"
              @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      dialogVisible: false
    };
  },
  mounted() {
    this.$notify({
      title: "提示",
      message: "这是一条不会自动关闭的消息",
      duration: 0
    });
  }
};
</script>

<style lang="scss">
.m-b {
  margin-bottom: 16px;
}
body {
  margin: 0;
}
#app {
  padding: 0 8px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
