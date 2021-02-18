<template>
  <el-table
    row-key="id"
    :data="data"
    v-loading="loading"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    @cell-click="handleCellClick"
    class="iot-table-multiple-a"
  >
    <el-table-column
      v-for="item in form"
      :key="item.value"
      :prop="item.value"
      :label="item.label"
      :class-name="item.attrs ? item.attrs.className : ''"
      :label-class-name="item.attrs ? item.attrs.labelClassName : ''"
      :fixed="item.attrs ? item.attrs.fixed : false"
      :render-header="
        item.attrs && item.attrs.renderHeader
          ? getRenderHeaderMethod(item.attrs.renderHeader)
          : null
      "
      :align="item.align ? item.align : columnAlign"
      :min-width="item.width ? item.width : columnL1Width"
    >
      <template v-if="item.isSlot" v-slot="scope">
        <slot :name="item.value" :row="scope.row">
          {{ scope.row[item.value] }}
        </slot>
      </template>
      <el-table-column
        v-for="sub in item.children"
        :key="sub.value"
        :prop="sub.value"
        :label="sub.label"
        :class-name="item.attrs ? item.attrs.className : ''"
        :label-class-name="item.attrs ? item.attrs.labelClassName : ''"
        :fixed="item.attrs ? item.attrs.fixed : false"
        :render-header="
          sub.attrs && sub.attrs.renderHeader
            ? getRenderHeaderMethod(sub.attrs.renderHeader)
            : null
        "
        :align="sub.align ? sub.align : columnAlign"
        :min-width="sub.width ? sub.width : columnL2Width"
      >
        <template v-if="sub.isSlot" v-slot="scope">
          <slot :name="sub.value" :row="scope.row">
            {{ scope.row[sub.value] }}
          </slot>
        </template>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>
<script>
  export default {
    name: "iot-table-multiple-a",
    props: {
      data: {
        type: Array,
        // eslint-disable-next-line vue/require-valid-default-prop
        default: () => {
          return [];
        },
      },
      loading: {
        type: Boolean,
        default: false,
      },
      form: {
        type: Array,
        // eslint-disable-next-line vue/require-valid-default-prop
        default: () => {
          return [];
        },
      },
      columnAlign: {
        type: String,
        validator: (columnAlign) => {
          return (
            ["left", "right", "center"].join(",").indexOf(columnAlign) >= 0
          );
        },
        default: "center",
      },
      columnL1Width: {
        type: String,
        default: "160",
      },
      columnL2Width: {
        type: String,
        default: "160",
      },
    },
    methods: {
      handleCellClick(row, column, cell, event) {
        this.$emit("cellClick", row, column, cell, event);
      },
      getRenderHeaderMethod(setting) {
        let renderHeaderMethod = "";
        switch (setting.type) {
          case "tooltip":
            {
              renderHeaderMethod = this.renderHeader_tooltip(setting.message);
            }
            break;
          case "multipleLine":
            {
              renderHeaderMethod = this.renderHeader_multipleLine();
            }
            break;
          default: {
            renderHeaderMethod = "renderHeader_cutomized";
          }
        }
        return renderHeaderMethod;
      },
      renderHeader_multipleLine() {
        return function (h, { column }) {
          return h("span", {}, [
            h("span", {}, column.label.split("|")[0]),
            h("br"),
            h("span", {}, column.label.split("|")[1]),
          ]);
        };
      },
      renderHeader_tooltip(msg) {
        return function (h, { column }) {
          return h(
            "div",
            {
              style: `display:flex; margin:auto; text-align:${this.columnAlign};`,
            },
            [
              h("span", column.label),
              h(
                "el-tooltip",
                {
                  props: {
                    content: msg,
                    placement: "top",
                  },
                },
                [
                  h("i", {
                    class: "el-icon-warning",
                  }),
                ]
              ),
            ]
          );
        };
      },
    },
  };
</script>
<style lang="scss">
  .iot-table-multiple-a {
    td,
    th {
      font-size: 12px;
      padding: 6px 0;
    }
    .el-table__header-wrapper,
    .el-table__fixed-header-wrapper {
      .el-table__column--basic {
        background: #62e709 !important;
      }
      .el-table__column--blue {
        background: #00b1f1 !important;
      }
      .el-table__column--blue_gray {
        background: #9bc3e7 !important;
      }
      .el-table__column--orange {
        background: #ffc100 !important;
      }
      .el-table__column--red {
        background: #e9650e !important;
      }
      .el-table__column--pink {
        background: #ee769a !important;
      }
    }
    .el-table__label--basic {
      color: white;
      // font-size: 12px;
      font-weight: normal;
    }
    .el-table__row--level-1 {
      .el-table__label--clickable {
        color: #00a0ff;
        cursor: pointer;
      }
    }
    .el-table__body-wrapper {
      .el-table__column--basic:first-child {
        text-align: left;
      }
    }
    .el-tooltip {
      padding-left: 5px;
      height: 12px;
      line-height: 23px;
    }
  }
</style>
