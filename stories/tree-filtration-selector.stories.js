import IotTreeFiltrationSelector from '@iot-component-library/tree-filtration-selector';

export default {
  title: "IOTLIB/Tree-Filtration-Selector",
  component: IotTreeFiltrationSelector,
 
  argTypes: {
    visible: {
      description: "控制是否显隐，通过v-bind:visible.sync进行绑定",
      default: false,
    },
    value: {
      description: "最终选择项，通过v-model进行绑定",
      default: [],
    },
    multiple: {
      description: "是否开启多选，true: 开启多选 / false: 开启单选",
      default: false,
      control: { type: "boolean" }
    },
    treedata: {
      description: "控制弹出框左侧树形列表数据",
      default: [],
      control: { type: "object" }
    },
    treeplaceholder: {
      description: "左侧树形搜索框placeholder信息",
      default: "",
      control: { type: "text" }
    },
    resultdata: {
      description: "右侧搜索结果数据",
      default: [],
      control: { type: "object" }
    },
    searchplaceholder: {
      description: "右侧搜索框placeholder信息",
      default: [],
      control: { type: "text" }
    },
    onNodeClick: {
      description: "树形列表节点点击事件，使用v-on:node-click进行绑定",
      control: { actions: "clicked" }
    },
    onCommit: {
      description: "弹出框确定按钮点击事件，使用v-on:commit进行绑定",
      control: { actions: "clicked" }
    },
    onSearch: {
      description: "右侧搜索框change事件，使用v-on:search进行绑定",
      control: { actions: "clicked" }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IotTreeFiltrationSelector },
  data(){
    return{
      p_value: [],
      p_visible: false
    }
  },
  template: `
    <div>
      <el-button @click="p_visible = true">点击显示</el-button>
      <iot-tree-filtration-selector :visible.sync="p_visible" v-model="p_value" @node-click="onNodeClick" @commit="onCommit" @search="onSearch" v-bind="$props" />
    </div>
  `,
});

export const Single = Template.bind({});
Single.args = {
  multiple: false,
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
  multiple: true,
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

