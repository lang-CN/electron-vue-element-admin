<template>
  <el-container>
    <el-header>
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="步骤1" description="选择需要检查的服务器"></el-step>
        <el-step title="步骤2" description="检查中"></el-step>
        <el-step title="步骤3" description="检查警告安排处理"></el-step>
        <el-step title="步骤4" description="发送检查报告"></el-step>
      </el-steps>
    </el-header>
    <el-main>
      <div>
        <el-row :gutter="20">
          <el-col
            :span="6"
            :style="{ margin: '5px 0px' }"
            v-for="(item, index) in serverList"
            :key="index"
          >
            <el-card :body-style="getCardBodyStyle(item)">
              <div style="padding: 14px">
                <span>{{ item.name }}</span>
                <el-tag>{{ item.company.name }}</el-tag>
                <el-tag>{{ item.system.name }}</el-tag>
                <el-tag>{{ item.ip }}</el-tag>
                <el-button
                  v-if="item.delete"
                  class="button"
                  :type="active === 0 ? 'success' : 'info'"
                  icon="el-icon-plus"
                  circle
                  @click="active === 0 ? (item.delete = !item.delete) : ''"
                ></el-button>

                <el-button
                  v-else
                  class="button"
                  :type="active === 0 ? 'danger' : 'info'"
                  icon="el-icon-delete"
                  circle
                  @click="active === 0 ? (item.delete = !item.delete) : ''"
                ></el-button>
                <div
                  v-if="active === 1 && !item.delete"
                  class="box clearfix"
                  v-loading="item.isloading"
                  element-loading-text="拼命检测中..."
                  element-loading-spinner="el-icon-loading"
                  element-loading-background="rgba(0, 0, 0, 0.8)"
                >
                  <!-- 加载中
                  <div v-if="item.isloading" style="line-height: 80px">
                    <i class="el-icon-loading" style="font-size: 30px"></i>
                  </div> -->
                  <!-- 加载完成 -->
                  <div v-if="!item.isloading">
                    <!-- C盘 -->
                    <el-row :style="{ margin: '5px 0px' }">
                      <el-col :span="4"><el-tag>C</el-tag></el-col>
                      <el-col :span="20">
                        <el-progress
                          :text-inside="true"
                          :stroke-width="26"
                          :percentage="90"
                          status="exception"
                        ></el-progress>
                      </el-col>
                    </el-row>
                    <el-row :style="{ margin: '5px 0px' }">
                      <el-col :span="4"><el-tag>D</el-tag></el-col>
                      <el-col :span="20">
                        <el-progress
                          :text-inside="true"
                          :stroke-width="26"
                          :percentage="80"
                          status="warning"
                        ></el-progress>
                      </el-col>
                    </el-row>
                    <el-row :style="{ margin: '5px 0px' }">
                      <el-col :span="4"><el-tag>E</el-tag></el-col>
                      <el-col :span="20">
                        <el-progress
                          :text-inside="true"
                          :stroke-width="26"
                          :percentage="60"
                        ></el-progress>
                      </el-col>
                    </el-row>
                    <el-row :style="{ margin: '5px 0px' }">
                      <el-col :span="4"><el-tag>F</el-tag></el-col>
                      <el-col :span="20">
                        <el-progress
                          :text-inside="true"
                          :stroke-width="26"
                          :percentage="40"
                          status="success"
                        ></el-progress>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer>
      <el-button style="margin-top: 12px" @click="next">下一步</el-button>
    </el-footer>
  </el-container>
</template>

<script>
import { fetchServerList } from "@/api/server";

export default {
  data() {
    return {
      active: 0,
      serverList: null,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    next() {
      if (this.active++ > 3) this.active = 0;
      if (this.active == 1) {
        for (var i = 0; i < this.serverList.length; i++) {
          let server = this.serverList[i];
          (function (i, server) {
            setTimeout(function () {
              server.isloading = false;
            }, (i + 1) * 1000);
          })(i, server);
        }
      }
    },
    async getList() {
      const { data } = await fetchServerList();
      const items = data.items;
      this.serverList = items.map((v) => {
        this.$set(v, "delete", false);
        this.$set(v, "isloading", true);
        return v;
      });
    },
    getCardBodyStyle(server) {
      let result = { padding: "0px" };
      if (server.delete) {
        result["background-color"] = "#f0f2f5";
      }
      return result;
    },
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  text-align: center;
}

.el-header {
  margin-top: 10px;
}

.el-main {
  background-color: #f0f2f5;
  margin-top: 20px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 20px;
}

.button {
  padding: 4px;
  float: right;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box {
  min-height: 137px;
  text-align: center;
}
</style>