<template>
  <div
    class="iot-avatar-list"
    :class="{ 'zebra-crossing-background': !inline }"
  >
    <el-row v-if="data.length === 0">
      <el-col :span="24" class="iot-avatar-list__no-content">
        <span>暂无数据</span>
      </el-col>
    </el-row>
    <el-row
      v-else-if="data.length > 0 && !inline"
      v-for="avatar in data"
      :key="avatar.id"
    >
      <el-col :span="24">
        <div class="iot-avatar-list__item" @click="handleClick(avatar)">
          <span class="iot-avatar-list__item__avatar">
            {{ avatar.label }}
          </span>
          <el-tooltip :content="avatar.detail" placement="top" effect="light">
            <span class="iot-avatar-list__item__detail">
              {{ avatar.detail }}
            </span>
          </el-tooltip>
          <i
            class="iot-avatar-list__item__delete el-icon-error"
            v-if="avatar.deletable"
            @click.stop="handleDelete(avatar)"
          ></i>
        </div>
      </el-col>
    </el-row>
    <el-row v-else>
      <el-col :span="24">
        <div
          class="iot-avatar-list__item--inline"
          v-for="avatar in data"
          :key="avatar.id"
        >
          <el-tooltip :content="avatar.detail" placement="top" effect="light">
            <span
              class="iot-avatar-list__item__avatar"
              @click="handleClick(avatar)"
            >
              {{ avatar.label }}
            </span>
          </el-tooltip>
          <i
            class="iot-avatar-list__item__delete--inline el-icon-error"
            v-if="avatar.deletable"
            @click.stop="handleDelete(avatar)"
          ></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: "iot-avatar-list",
    props: {
      inline: {
        // 是否inline方式内联显示
        type: Boolean,
        default: false,
      },
      data: {
        type: Array,
        default: () => {
          /**
           * avatarlist 显示的信息
           * id: id信息，唯一标识
           * label: avatar所显示的头像
           * detail: 详情信息
           * deletable: 是否可以删除
           */
          return [];
        },
      },
    },
    data() {
      return {};
    },
    methods: {
      handleDelete(avatar) {
        this.$emit("avatar-delete", avatar);
      },
      handleClick(avatar) {
        this.$emit("avatar-click", avatar);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .zebra-crossing-background {
    background: repeating-linear-gradient(
      180deg,
      #fafafa,
      #fafafa 2.5em,
      #ffffff 2.5em,
      #ffffff 5em
    );
  }
  .iot-avatar-list {
    font-size: 14px;
    width: 100%;
    height: 100%;
    &__item,
    &__item--inline {
      cursor: pointer;
      height: 35px;
      line-height: 35px;
      padding: 0 10px;
      transition: background 0.3s ease-in;
      white-space: nowrap;
      &__avatar {
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: inline-block;
        background: #548ef5;
        vertical-align: middle;
        line-height: 32px;
        text-align: center;
        color: white;
        white-space: normal;
      }
      &__detail {
        vertical-align: middle;
        color: #999;
        padding-left: 5px;
      }
      &__delete {
        float: right;
        line-height: 35px;
      }
      &__delete--inline {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 7px;
        color: red;
      }
      &:hover {
        background: #f5f7fa;
      }
    }
    &__item--inline {
      cursor: auto;
      display: inline-block;
      position: relative;
    }
    &__no-content {
      text-align: center;
      line-height: 35px;
    }
  }
</style>
