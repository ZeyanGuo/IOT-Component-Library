<template>
  <div class="iot-tree">
    <el-input :placeholder="placeholder" v-model="filterText" size="small">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-tree
      :data="data"
      :props="defaultProps"
      :filter-node-method="filterNode"
      :expand-on-click-node="false"
      @node-click="nodeClick"
      v-loading="loading"
      node-key="id"
      ref="tree"
    ></el-tree>
  </div>
</template>
<script>
  export default {
    name: "iot-tree-selector",
    props: {
      /**
       * placeholder: 过滤搜索placeholder
       */
      placeholder: {
        type: String,
        default: "",
      },
      /**
       * 树状选择属性
       * id: 选项id
       * label: 选项文本信息
       * children: 子选项信息（children: {id:string, label:string, children: children}）
       */
      data: {
        type: Array,
        default: () => {
          return [];
        },
      },
      /**
       * 是否在进行加载
       */
      loading: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        filterText: "", // Tree过滤字段，用于过滤Tree
        isFirstTimeBindData: true, //是否第一次绑定上数据
        defaultProps: {
          children: "children",
          label: "label",
        },
      };
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      },
    },
    updated() {
      this.setFirstItemSelected();
    },
    methods: {
      nodeClick(dataObj, nodeEle, node) {
        this.$emit("node-click", dataObj, nodeEle, node);
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      setFirstItemSelected() {
        if (this.data.length > 0 && this.isFirstTimeBindData) {
          this.isFirstTimeBindData = false;
          this.$refs.tree.setCurrentKey(this.data[0].id);
        }
      },
    },
  };
</script>
<style lang="scss" scoped>
  /**
 * color variables
 */
  @use "sass:color";
  $--color-basic: #0088cc;
  $--color-basic--lighter: color.adjust($--color-basic, $alpha: -0.5);
  $--color-basic--lightest: color.adjust($--color-basic, $alpha: -0.8);
  $--color-basic--darker: color.adjust($--color-basic, $lightness: -30%);

  $--color-background: #f3f6f8;
  $--color--white: #fff;

  $--color-hover: #f5f7fa;
  $--color-font--danger: #f56c6c;
  $--color-background--danger: #fef0f0;
  $--color-border--danger: #fbc4c4;

  $--color-border--normal: #dcdfe6;
  $--color-border--hover: #c0c4cc;

  $--color-font-contrast: #606226;

  $--color-zebra-crossing--even: #fafafa;
  $--color-zebra-crossing--odd: #ffffff;

  .iot-tree {
    width: 100%;
    height: 100%;
    padding: 10px;
    background: #fff;
    font-size: 14px;
    ::v-deep .el-tree {
      $__border--normal: 1px solid $--color-border--normal;
      $__content: &-node__content;

      background: repeating-linear-gradient(
        180deg,
        $--color-zebra-crossing--even,
        $--color-zebra-crossing--even 2.5em,
        $--color-zebra-crossing--odd 2.5em,
        $--color-zebra-crossing--odd 5em
      );

      border: {
        bottom: #{$__border--normal};
        right: #{$__border--normal};
        left: #{$__border--normal};
      }

      &-node {
        &__content {
          height: 2.5em;
          transition: background 0.3s ease-in;
          &:hover {
            background: $--color-hover;
          }
        }
      }

      &__empty-block {
        min-height: 2.5em;
      }

      &:hover {
        border-color: $--color-border--hover;
      }

      .is-current {
        > .el-tree-node__content {
          background: $--color-basic--lightest;
        }
      }
    }
  }
</style>
