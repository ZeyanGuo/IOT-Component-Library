<template>
  <el-dialog
    class="iot-tree-filtration-selector"
    :visible="visible"
    :before-close="handleClose"
  >
    <el-row class="iot-tree-filtration-selector__selection">
      <el-col :span="12">
        <iot-tree
          :data="treedata"
          :placeholder="treeplaceholder"
          v-on="$listeners"
        ></iot-tree>
      </el-col>
      <el-col :span="12">
        <div class="iot-tree-filtration-selector__selection__avator-list">
          <el-input
            :placeholder="searchplaceholder"
            v-model="searchValue"
            @change="handleSearch"
            size="small"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button
              v-if="multiple"
              slot="append"
              icon="el-icon-circle-plus-outline"
              type="primary"
              @click="addAll"
            >
              选择所有
            </el-button>
          </el-input>
          <div
            class="iot-tree-filtration-selector__selection__avator-list__container"
          >
            <iot-avatar-list
              :data="resultdata"
              @avatar-click="avatarClick"
            ></iot-avatar-list>
          </div>
        </div>
      </el-col>
    </el-row>
    <section class="iot-tree-filtration-selector__result">
      <iot-avatar-list
        :inline="true"
        @avatar-delete="avatarDelete"
        :data="value"
      ></iot-avatar-list>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="clear" type="info">清 空</el-button>
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleCommit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
  import IotTree from "@iot-component-library/tree-selector";
  import IotAvatarList from "@iot-component-library/avatar-list";
  export default {
    name: "iot-tree-filtration-selector",
    components: {
      IotTree,
      IotAvatarList,
    },
    props: {
      value: {
        //最终返回值
        type: Array,
        default: () => {
          return [];
        },
      },
      multiple: {
        //是否允许多选
        type: Boolean,
        default: true,
      },
      visible: {
        //是否显示
        type: Boolean,
        default: false,
      },
      treedata: {
        //树形选择栏数据
        type: Array,
        default: () => {
          return [];
        },
      },
      treeplaceholder: {
        //树形选择占位信息
        type: String,
        default: "输入名称进行过滤",
      },
      searchplaceholder: {
        //数据模糊搜索占位信息
        type: String,
        default: "输入名称模糊查询",
      },
      resultdata: {
        //选择后数据信息
        type: Array,
        default: () => {
          return [];
        },
      },
    },
    data() {
      return {
        searchValue: "",
      };
    },
    methods: {
      handleClose() {
        this.$emit("update:visible", false);
      },
      addAll() {
        const valueTemp = this.value.concat([]);
        this.resultdata.forEach((node) => {
          if (
            valueTemp
              .map((item) => item.id)
              .join(",")
              .indexOf(node.id === -1)
          ) {
            valueTemp.push({
              ...node,
              deletable: true,
            });
          }
        });
        this.$emit("input", this.value.concat(valueTemp));
      },
      clear() {
        this.$emit("input", []);
      },
      avatarClick(node) {
        if (this.multiple) {
          // 开启多选 - 逻辑
          if (
            this.value
              .map((item) => item.id)
              .join(",")
              .indexOf(node.id) === -1
          ) {
            this.$emit(
              "input",
              this.value.concat([
                {
                  ...node,
                  deletable: true,
                },
              ])
            );
          }
          console.log(
            this.value,
            node.id,
            this.value
              .map((item) => item.id)
              .join(",")
              .indexOf(node.id) === -1
          );
        } else {
          // 开启单选 - 逻辑
          this.$emit("input", [node.id]);
        }
      },
      avatarDelete(node) {
        this.$emit(
          "input",
          this.value.filter((item) => {
            return item.id !== node.id;
          })
        );
      },
      handleCommit() {
        this.$emit(
          "commit",
          this.value.map((item) => item.id),
          this.value
        );
      },
      handleSearch() {
        this.$emit("search", this.searchValue);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .iot-tree-filtration-selector {
    $color--border: #dcdfe6;
    .iot-tree {
      padding: 0;
      height: 350px;
      outline: 1px solid $color--border;
      outline-offset: -1px;
      box-sizing: border-box;
      overflow: auto;
    }

    &__selection {
      &__avator-list {
        margin-left: -1px;
        outline: 1px solid $color--border;
        outline-offset: -1px;
        height: 350px;
        overflow: auto;
      }
    }
    &__result {
      margin-top: 10px;
      height: 70px;
      overflow: auto;
      width: 100%;
      border: 1px solid $color--border;
    }
  }
</style>
