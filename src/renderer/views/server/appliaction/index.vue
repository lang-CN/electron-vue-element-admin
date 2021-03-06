<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button
        class="filter-item"
        style="margin-left: 10px"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        Add
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" label="名称">
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="容器">
        <template slot-scope="{ row }">
          <el-tooltip class="item" effect="dark" placement="top-start">
            <div slot="content">
              服务IP:{{ row.container.server.ip }}
              <br />
              域名:{{ row.container.server.domain }}
            </div>
            <el-tag>{{ row.container.type.name }}</el-tag>
          </el-tooltip>
        </template>
      </el-table-column>

      <el-table-column nim-width="120px" align="center" label="端口">
        <template slot-scope="{ row }">
          <span v-for="(item, index) in row.ports" :key="index">
            <span v-if="item.name === 'web'">
              <el-tooltip class="item" effect="dark" placement="top-start">
                <div slot="content">http://{{ row.container.server.domain }}:{{ item.port }}</div>
                <el-tag style="margin-left: 10px">{{ item.name }} : {{ item.port }}</el-tag>
              </el-tooltip>
            </span>
            <span v-if="item.name !== 'web'">
              <el-tag style="margin-left: 10px">{{ item.name }} : {{ item.port }}</el-tag>
            </span>
          </span>
        </template>
      </el-table-column>

      <el-table-column nim-width="120px" align="center" label="用户">
        <template slot-scope="{ row }">
          <el-tooltip
            v-for="(item, index) in row.appUsers"
            :key="index"
            class="item"
            effect="dark"
            :content="item.password"
            placement="top-start"
          >
            <el-tag style="margin-left: 10px">
              {{ item.name }}
            </el-tag>
          </el-tooltip>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="{ row }">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
          >
            Ok
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit = !row.edit"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹出新增窗口 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="排序号" prop="orderName">
          <el-input v-model="temp.orderName" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false"> Cancel </el-button>
        <el-button
          type="primary"
          @click="dialogStatus === 'create' ? createData() : updateData()"
        >
          Confirm
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  fetchAppliactionList,
  updateServerType,
  createServerType,
} from "@/api/server";

export default {
  name: "InlineEditTable",
  data() {
    return {
      list: null,
      listLoading: true,
      dialogStatus: "",
      dialogFormVisible: false,
      textMap: {
        update: "编辑",
        create: "新增",
      },
      temp: {
        id: undefined,
        name: "",
        orderName: "",
      },
      rules: {
        name: [
          { required: true, message: "title is required", trigger: "blur" },
        ],
        orderName: [
          { required: true, message: "title is required", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.listLoading = true;
      const { data } = await fetchAppliactionList();
      const items = data.items;
      this.list = items.map((v) => {
        this.$set(v, "edit", false); // https://vuejs.org/v2/guide/reactivity.html
        v.originalName = v.name; //  will be used when user click the cancel botton
        return v;
      });
      this.listLoading = false;
    },
    cancelEdit(row) {
      row.name = row.originalName;
      row.edit = false;
      this.$message({
        message: "The title has been restored to the original value",
        type: "warning",
      });
    },
    async confirmEdit(row) {
      row.edit = false;
      row.originalName = row.name;
      const { data } = await updateServerType(row.id, row);
      console.log(">>>>>>>>>>>>>>>>>>>");
      console.log(data.status);
      console.log(">>>>>>>>>>>>>>>>>>>");
      this.$message({
        message: "The title has been edited",
        type: "success",
      });
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        name: "",
        orderName: "",
      };
    },
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    createData() {
      this.$refs["dataForm"].validate((valid) => {
        if (valid) {
          createServerType(this.temp).then((req) => {
            console.log(">>>>>>>");
            console.log(req.data.id);
            this.temp.id = req.data.id;
            this.list.unshift(this.temp);
            this.dialogFormVisible = false;
            this.$notify({
              title: "Success",
              message: "Created Successfully",
              type: "success",
              duration: 2000,
            });
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
