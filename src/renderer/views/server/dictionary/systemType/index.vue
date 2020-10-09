<template>
  <div class="app-container">
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

      <el-table-column min-width="300px" label="名称">
        <template slot-scope="{ row }">
          <template v-if="row.edit">
            <el-input v-model="row.name" class="edit-input" size="small" />
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
            >
              cancel
            </el-button>
          </template>
          <span v-else>{{ row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="开发商">
        <template slot-scope="{ row }">
          <span>{{ row.developer }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="版本">
        <template slot-scope="{ row }">
          <span>{{ row.version }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="排序号">
        <template slot-scope="{ row }">
          <span>{{ row.orderName }}</span>
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
  </div>
</template>

<script>
import { fetchSystemTypeList } from "@/api/server";

export default {
  name: "InlineEditTable",
  data() {
    return {
      list: null,
      listLoading: true,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.listLoading = true;
      const { data } = await fetchSystemTypeList();
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
      this.$message({
        message: "The title has been edited",
        type: "success",
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
