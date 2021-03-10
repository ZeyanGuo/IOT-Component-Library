
import IotAvatarList from '@iot-component-library/avatar-list';

export default {
  title: "IOTLIB/Avatar-List",
  component: IotAvatarList,
  argTypes: {
    inline: {
      description: "是否跨行显示，true：行内模式展示 / false：块级模式展示",
      default: false,
      control: { type: "boolean" }
    },
    data: {
      description: "所需要展示的信息，信息允许设置deletable以显隐删除按钮",
      default: false,
      control: {
        type: "object"
      }
    },
    onAvatarDelete: { 
      description: "点击删除按钮触发的点击事件，使用v-on:avatar-delete进行绑定",
      actions: 'clicked'
    },
    onAvatarClick: { 
      description: "点击数据项触发的点击事件，使用v-on:avatar-click进行绑定",
      actions: 'clicked'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IotAvatarList },
  template: '<iot-avatar-list @avatar-delete="onAvatarDelete" @avatar-click="onAvatarClick" v-bind="$props" />',
});

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
  data: [{
    id: "1",
    label: "仁同",
    detail: "仁同（详细信息）",
    deletable: true
  },
  {
    id: "2",
    label: "仁同",
    detail: "仁同（详细信息）",
    deletable: false
  },
  {
    id: "3",
    label: "仁同",
    detail: "仁同（详细信息）",
    deletable: false
  }]
}

export const MultipleLine = Template.bind({});
MultipleLine.args = {
  inline: false,
  data: [{
    id: "1",
    label: "仁同",
    detail: "仁同（详细信息）",
    deletable: true
  },
  {
    id: "2",
    label: "仁同",
    detail: "仁同（详细信息）",
    deletable: false
  },
  {
    id: "3",
    label: "仁同",
    detail: "仁同（详细信息）",
    deletable: false
  }]
}

