
import IotAvatarList from '@iot-component-library/avatar-list';

export default {
  title: "IOTLIB/Avatar-List",
  component: IotAvatarList,
  argTypes: {
    inline: {
      control: { type: "boolean" }
    },
    data: {
      control: {
        type: "object"
      }
    },
    onAvatarDelete: { actions: 'clicked' },
    onAvatarClick: { actions: 'clicked' }
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

