import IotTreeFiltrationSelector from '@iot-component-library/tree-filtration-selector';

export default {
  title: "IOTLIB/Tree-Filtration-Selector",
  component: IotTreeFiltrationSelector,
  argTypes: {
    value: {
      control: { type: "object" }
    },
    multiple: {
      control: { type: "boolean" }
    },
    visible: {
      control: { type: "boolean" }
    },
    treedata: {
      control: { type: "object" }
    },
    treeplaceholder: {
      control: { type: "text" }
    },
    resultdata: {
      control: { type: "object" }
    },
    searchplaceholder: {
      control: { type: "text" }
    },
    onTreeNodeClick: {
      control: { actions: "clicked" }
    },
    onCommit: {
      control: { actions: "clicked" }
    },
    onSearch: {
      control: { actions: "clicked" }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IotTreeFiltrationSelector },
  template: '<iot-tree-filtration-selector :visible.sync="visible" v-model="value" @node-click="onTreeNodeClick" @commit="onCommit" @search="onSearch" v-bind="$props" />',
});

export const Single = Template.bind({});
Single.args = {
  value: [],
  multiple: false,
  visible: true,
  treeplaceholder: "输入信息",
  searchplaceholder: "输入信息",
  treedata: [
    {
      "id": 1,
      "label": "中移物联网有限公司",
      "children": [
        {
          "id": 1352,
          "label": "IT支撑部"
        },
        {
          "id": 1322,
          "label": "测试部"
        },
        {
          "id": 456,
          "label": "公司领导"
        },
        {
          "id": 1354,
          "label": "测试部门"
        },
        {
          "id": 457,
          "label": "其他1"
        },
        {
          "id": 1351,
          "label": "其他2"
        }
      ]
    },
    {
      "id": 10000,
      "label": "中移集成有限公司",
      "children": [
        {
          "id": 10001,
          "label": "人事部"
        }
      ]
    },
    {
      "id": 1334,
      "label": "党业融合部"
    }
  ],
  resultdata: [{
    id: "1",
    label: "仁同1",
    detail: "仁同1（详细信息）",
    deletable: true
  },
  {
    id: "2",
    label: "仁同2",
    detail: "仁同2（详细信息）",
    deletable: false
  },
  {
    id: "3",
    label: "仁同3",
    detail: "仁同3（详细信息）",
    deletable: false
  }]
}
export const Multiple = Template.bind({});
Multiple.args = {
  value: [],
  multiple: true,
  visible: true,
  treeplaceholder: "输入信息",
  searchplaceholder: "输入信息",
  treedata: [
    {
      "id": 1,
      "label": "中移物联网有限公司",
      "children": [
        {
          "id": 1352,
          "label": "IT支撑部"
        },
        {
          "id": 1322,
          "label": "测试部"
        },
        {
          "id": 456,
          "label": "公司领导"
        },
        {
          "id": 1354,
          "label": "测试部门"
        }
      ]
    },
    {
      "id": 10000,
      "label": "中移集成有限公司",
      "children": [
        {
          "id": 10001,
          "label": "人事部"
        }
      ]
    },
    {
      "id": 1334,
      "label": "党业融合部"
    }
  ],
  resultdata: [{ "id": 8208, "label": "马念", "detail": "马念(03903682)", "deletable": false }, { "id": 8742, "label": "王壮", "detail": "王壮(03920086)", "deletable": false }, { "id": 4528, "label": "张静", "detail": "张静(03901815)", "deletable": false }]
}

