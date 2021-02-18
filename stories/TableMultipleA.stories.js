
import IotTableMultipleA from '@iot-component-library/table-multiple-a';

export default {
  title: "IOTLIB/Table-Multiple-A",
  component: IotTableMultipleA,
  argTypes: {
    loading: {
      control: { type: "boolean" }
    },
    columnAlign: {
      control: { type: "select", options: ["left", "center", "right"] },
    },
    columnL1Width: {
      control: {
        type: "text"
      }
    },
    columnL2Width: {
      control: {
        type: "text"
      }
    },
    data: {
      control: {
        type: "object"
      }
    },
    form: {
      control: {
        type: "object"
      }
    },
    onClick: { actions: 'clicked' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IotTableMultipleA },
  template: '<iot-table-multiple-a @cellClick="onClick"  v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {
  loading: false,
  columnAlign: "center",
  columnL1Width: "160",
  columnL2Width: "160",
  form: [
    {
      label: "部门",
      value: "deptName",
    },
    {
      label: "团队",
      value: "teamName",
    },
  ],
  data: [
    {
      deptName: "部门1",
      teamName: "团队1"
    }
  ]
}

export const TwoLevel = Template.bind({});
TwoLevel.args = {
  loading: false,
  columnAlign: "center",
  columnL1Width: "160",
  columnL2Width: "160",
  form: [
    {
      label: "项目概算",
      align: 'left',
      children: [
        { label: "预估项目收入(不含税)", value: "gsIncome", align: 'right', width:'600' },
        { label: "项目销售毛利", value: "gsGrossprofit" },
        { label: "项目销售毛利率", value: "gsGrossprofitRate" },
        { label: "项目营业利润", value: "gsProfit" },
        { label: "项目营业利润率", value: "gsProfitRate" },
      ]
    },
  ],
  data: [
    {
      gsIncome: '1',
      gsGrossprofit: '2',
      gsGrossprofitRate: '3',
      gsProfit: '4',
      gsProfitRate: '5'
    },
    {
      gsIncome: '1',
      gsGrossprofit: '2',
      gsGrossprofitRate: '3',
      gsProfit: '4',
      gsProfitRate: '5'
    }
  ]
}

export const CustomizeColor = Template.bind({});
CustomizeColor.args = {
  loading: false,
  columnAlign: "center",
  columnL1Width: "160",
  columnL2Width: "160",
  form: [
    {
      label: "部门",
      value: "deptName",
      attrs: {
        labelClassName: "el-table__label--basic",
        className: "el-table__column--basic",
      }
    },
    {
      label: "团队",
      value: "teamName",
      attrs: {
        labelClassName: "el-table__label--basic",
        className: "el-table__column--blue",
      }
    },
  ],
  data: [
    {
      deptName: "部门1",
      teamName: "团队1"
    }
  ]
}

export const Fixed = Template.bind({});
Fixed.args = {
  loading: false,
  columnAlign: "center",
  columnL1Width: "160",
  columnL2Width: "160",
  form: [{
    label: "部门",
    value: "deptName",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--basic",
      fixed: "left",
    },
  },
  {
    label: "团队",
    value: "teamName",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--basic",
      fixed: "left",
    },
  },
  {
    label: "项目名称",
    value: "projectName",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--basic",
      fixed: "left",
    },
  },
  {
    label: "项目编码",
    value: "projectCode",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue",
    },
  },
  {
    label: "项目经理",
    value: "managerName",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue",
    },
  },
  {
    label: "项目开始时间",
    value: "projectStartTime",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue",
    },
  },
  {
    label: "项目所处阶段",
    value: "projectPhase",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue",
    },
  },
  {
    label: "项目所处阶段开始时间",
    value: "projectPhaseStartdate",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue",
    },
  },
  {
    label: "项目概算",
    children: [
      { label: "预估项目收入(不含税)", value: "gsIncome" },
      { label: "项目销售毛利", value: "gsGrossprofit" },
      { label: "项目销售毛利率", value: "gsGrossprofitRate" },
      { label: "项目营业利润", value: "gsProfit" },
      { label: "项目营业利润率", value: "gsProfitRate" },
    ],
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue_gray",
    },
  },],
  data: [
  ]
}

export const Tooltip = Template.bind({});
Tooltip.args = {
  loading: false,
  columnAlign: "center",
  columnL1Width: "160",
  columnL2Width: "160",
  form: [{
    label: "实际毛利是否达预期",
    value: "grossprofitComplete",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--pink",
      renderHeader: {
        type: "tooltip",
        message:
          "备注：1、当执行毛利率大于概算毛利率时显示绿灯，小于概算毛利率时显示红灯；2、当项目预算为空或为0时，不显示红绿灯。",
      },
    },
  },],
  data: [],
}

export const MultipleLine = Template.bind({});
MultipleLine.args = {
  loading: false,
  columnAlign: "center",
  columnL1Width: "160",
  columnL2Width: "160",
  form: [{
    label: "实际毛利是否达预期|(换行显示)",
    value: "grossprofitComplete",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--pink",
      renderHeader: {
        type: "multipleLine",
      },
    },
  },],
  data: [],
}


export const Slot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IotTableMultipleA },
  template: `<iot-table-multiple-a @cellClick="onClick" v-bind="$props">
              <template v-slot:zxOperateCostA="scope">
                <el-popover
                  placement="top"
                  title="运营成本详情A"
                  width="1200"
                  trigger="click"
                >
                  <span>运营成本详情A {{JSON.stringify(scope)}}</span>
                  <el-button
                    type="text"
                    slot="reference"
                    >{{scope.row.zxOperateCostA}}</el-button
                  >
                </el-popover>
              </template>
              <template v-slot:zxOperateCost="scope">
                <el-popover
                  placement="top"
                  title="运营成本详情"
                  width="1200"
                  trigger="click"
                >
                  <span>运营成本详情 {{JSON.stringify(scope)}}</span>
                  <el-button
                    type="text"
                    slot="reference"
                    >{{scope.row.zxOperateCost}}</el-button
                  >
                </el-popover>
              </template>
            </iot-table-multiple-a>`,
});
Slot.args = {
  loading: false,
  columnAlign: "center",
  columnL1Width: "160",
  columnL2Width: "160",
  form: [{
    label: "运营成本A",
    value: "zxOperateCostA",
    isSlot: true
  },{
    label: "实际执行",
    children: [
      { label: "运营成本", value: "zxOperateCost", isSlot: true },
      { label: "其他", value: "other", isSlot: true },
    ],
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--red",
    },
  },],
  data: [{
    zxOperateCostA: "321",
    zxOperateCost: '123',
    other: "other"
  }],
}

export const Complex = Template.bind({});
Complex.args = {
  loading: false,
  columnAlign: "center",
  columnL1Width: "160",
  columnL2Width: "160",
  data: [{ "id": 60936, "incomeMonth": "2021-01", "deptCode": "0390100583", "deptName": "解决方案部", "teamCode": null, "teamName": "湖南区域", "projectCode": "I19371010750116", "projectName": "371010-物联网开放平台支撑项目", "managerCode": "03902404", "managerName": "肖继", "projectPhase": null, "gsIncome": "0.00", "gsGrossprofit": "0.00", "gsGrossprofitRate": "0 %", "gsProfit": "0.00", "gsProfitRate": "0 %", "ysIncome": "0.00", "ysGrossprofit": "0.00", "ysGrossprofitRate": "0 %", "ysProfit": "0.00", "ysProfitRate": "0 %", "zxIncome": "68,926,642.31", "zxGrossprofit": "4,565,554.86", "zxGrossprofitRate": "6.62 %", "zxOperateCost": "423,489.39", "zxProfit": "4,142,065.47", "zxProfitRate": "6.01 %", "grossprofitComplete": null, "zxProfitStatus": null, "dictPhase1Date": null, "dictPhase2Date": null, "dictPhase3Date": null, "dictPhase4Date": null, "dictPhase5Date": null, "dictPhase6Date": null, "dictPhase7Date": null, "dictPhase8Date": null, "dictPhase9Date": null, "dictPhase10Date": null, "ownLaborCost": "420,484.80", "cooperationLaborCost": "0.00", "tripCostDepreciation": "2,225.26", "tripCostTicket": "779.33", "resourcePoolCost": "0.00", "hemuCloud": "0.00", "advanceMoney": "0.00", "projectStartTime": "2019-06-19", "projectPhaseStartdate": null, "idToString": "60936", "new": false }, { "id": 61412, "incomeMonth": "2021-01", "deptCode": "0390100583", "deptName": "解决方案部", "teamCode": null, "teamName": "湖南区域", "projectCode": "I19371010750306", "projectName": "371010-衡阳市“雪亮工程”（城南片区）ICT项目安装集成及运维服务项目", "managerCode": "03902404", "managerName": "肖继", "projectPhase": null, "gsIncome": "0.00", "gsGrossprofit": "0.00", "gsGrossprofitRate": "0 %", "gsProfit": "0.00", "gsProfitRate": "0 %", "ysIncome": "0.00", "ysGrossprofit": "0.00", "ysGrossprofitRate": "0 %", "ysProfit": "0.00", "ysProfitRate": "0 %", "zxIncome": "41,270,948.20", "zxGrossprofit": "267,472.47", "zxGrossprofitRate": "0.65 %", "zxOperateCost": "14,133,703.22", "zxProfit": "-13,866,230.75", "zxProfitRate": "-33.6 %", "grossprofitComplete": null, "zxProfitStatus": null, "dictPhase1Date": null, "dictPhase2Date": null, "dictPhase3Date": null, "dictPhase4Date": null, "dictPhase5Date": null, "dictPhase6Date": null, "dictPhase7Date": null, "dictPhase8Date": null, "dictPhase9Date": null, "dictPhase10Date": null, "ownLaborCost": "12,040.68", "cooperationLaborCost": "0.00", "tripCostDepreciation": "14,121,662.54", "tripCostTicket": "0.00", "resourcePoolCost": "0.00", "hemuCloud": "0.00", "advanceMoney": "0.00", "projectStartTime": "2019-12-26", "projectPhaseStartdate": null, "idToString": "61412", "new": false }, { "id": 61460, "incomeMonth": "2021-01", "deptCode": "0390100583", "deptName": "解决方案部", "teamCode": null, "teamName": "湖南区域", "projectCode": "I20371010750054", "projectName": "371010-湖南日报社专有云空间及设施ICT项目采购项目", "managerCode": "03902221", "managerName": "赵廷喆", "projectPhase": null, "gsIncome": "0.00", "gsGrossprofit": "0.00", "gsGrossprofitRate": "0 %", "gsProfit": "0.00", "gsProfitRate": "0 %", "ysIncome": "0.00", "ysGrossprofit": "0.00", "ysGrossprofitRate": "0 %", "ysProfit": "0.00", "ysProfitRate": "0 %", "zxIncome": "16,535,800.00", "zxGrossprofit": "976,608.15", "zxGrossprofitRate": "5.91 %", "zxOperateCost": "12,618.32", "zxProfit": "963,989.83", "zxProfitRate": "5.83 %", "grossprofitComplete": null, "zxProfitStatus": null, "dictPhase1Date": null, "dictPhase2Date": null, "dictPhase3Date": null, "dictPhase4Date": null, "dictPhase5Date": null, "dictPhase6Date": null, "dictPhase7Date": null, "dictPhase8Date": null, "dictPhase9Date": null, "dictPhase10Date": null, "ownLaborCost": "12,618.32", "cooperationLaborCost": "0.00", "tripCostDepreciation": "0.00", "tripCostTicket": "0.00", "resourcePoolCost": "0.00", "hemuCloud": "0.00", "advanceMoney": "0.00", "projectStartTime": "2020-01-10", "projectPhaseStartdate": null, "idToString": "61460", "new": false }, { "id": 61047, "incomeMonth": "2021-01", "deptCode": "0390100583", "deptName": "解决方案部", "teamCode": null, "teamName": "湖南区域", "projectCode": "I19371010750270", "projectName": "371010-湖南移动行业解决方案驻点支撑服务项目", "managerCode": "03902404", "managerName": "肖继", "projectPhase": null, "gsIncome": "0.00", "gsGrossprofit": "0.00", "gsGrossprofitRate": "0 %", "gsProfit": "0.00", "gsProfitRate": "0 %", "ysIncome": "0.00", "ysGrossprofit": "0.00", "ysGrossprofitRate": "0 %", "ysProfit": "0.00", "ysProfitRate": "0 %", "zxIncome": "5,095,332.42", "zxGrossprofit": "1,486,116.10", "zxGrossprofitRate": "29.17 %", "zxOperateCost": "283,939.34", "zxProfit": "1,202,176.76", "zxProfitRate": "23.59 %", "grossprofitComplete": null, "zxProfitStatus": null, "dictPhase1Date": null, "dictPhase2Date": null, "dictPhase3Date": null, "dictPhase4Date": null, "dictPhase5Date": null, "dictPhase6Date": null, "dictPhase7Date": null, "dictPhase8Date": null, "dictPhase9Date": null, "dictPhase10Date": null, "ownLaborCost": "213,698.66", "cooperationLaborCost": "68,020.80", "tripCostDepreciation": "921.00", "tripCostTicket": "1,298.88", "resourcePoolCost": "0.00", "hemuCloud": "0.00", "advanceMoney": "0.00", "projectStartTime": "2019-09-04", "projectPhaseStartdate": null, "idToString": "61047", "new": false }, { "id": 61809, "incomeMonth": "2021-01", "deptCode": "0390100583", "deptName": "解决方案部", "teamCode": null, "teamName": "湖南区域", "projectCode": "I19371010750117", "projectName": "371010-自治州经信委智慧工业管理平台服务项目", "managerCode": "03902428", "managerName": "刘亮", "projectPhase": null, "gsIncome": "0.00", "gsGrossprofit": "0.00", "gsGrossprofitRate": "0 %", "gsProfit": "0.00", "gsProfitRate": "0 %", "ysIncome": "0.00", "ysGrossprofit": "0.00", "ysGrossprofitRate": "0 %", "ysProfit": "0.00", "ysProfitRate": "0 %", "zxIncome": "2,776,500.00", "zxGrossprofit": "224,896.23", "zxGrossprofitRate": "8.1 %", "zxOperateCost": "5,569.36", "zxProfit": "219,326.87", "zxProfitRate": "7.9 %", "grossprofitComplete": null, "zxProfitStatus": null, "dictPhase1Date": null, "dictPhase2Date": null, "dictPhase3Date": null, "dictPhase4Date": null, "dictPhase5Date": null, "dictPhase6Date": null, "dictPhase7Date": null, "dictPhase8Date": null, "dictPhase9Date": null, "dictPhase10Date": null, "ownLaborCost": "5,516.97", "cooperationLaborCost": "0.00", "tripCostDepreciation": "0.00", "tripCostTicket": "52.39", "resourcePoolCost": "0.00", "hemuCloud": "0.00", "advanceMoney": "0.00", "projectStartTime": "2019-06-19", "projectPhaseStartdate": null, "idToString": "61809", "new": false }, { "id": 62028, "incomeMonth": "2021-01", "deptCode": "0390100583", "deptName": "解决方案部", "teamCode": null, "teamName": "湖南区域", "projectCode": "I19371010750115", "projectName": "371010-NB-IOT物联网运营推广项目", "managerCode": "03902404", "managerName": "肖继", "projectPhase": null, "gsIncome": "0.00", "gsGrossprofit": "0.00", "gsGrossprofitRate": "0 %", "gsProfit": "0.00", "gsProfitRate": "0 %", "ysIncome": "0.00", "ysGrossprofit": "0.00", "ysGrossprofitRate": "0 %", "ysProfit": "0.00", "ysProfitRate": "0 %", "zxIncome": "2,547,169.80", "zxGrossprofit": "571,918.39", "zxGrossprofitRate": "22.45 %", "zxOperateCost": "120,785.01", "zxProfit": "451,133.38", "zxProfitRate": "17.71 %", "grossprofitComplete": null, "zxProfitStatus": null, "dictPhase1Date": null, "dictPhase2Date": null, "dictPhase3Date": null, "dictPhase4Date": null, "dictPhase5Date": null, "dictPhase6Date": null, "dictPhase7Date": null, "dictPhase8Date": null, "dictPhase9Date": null, "dictPhase10Date": null, "ownLaborCost": "103,275.16", "cooperationLaborCost": "15,336.00", "tripCostDepreciation": "1,162.48", "tripCostTicket": "1,011.37", "resourcePoolCost": "0.00", "hemuCloud": "0.00", "advanceMoney": "0.00", "projectStartTime": "2019-06-19", "projectPhaseStartdate": null, "idToString": "62028", "new": false }],
  form: [{
    label: "部门",
    value: "deptName",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--basic",
      fixed: "left",
    },
  },
  {
    label: "团队",
    value: "teamName",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--basic",
      fixed: "left",
    },
  },
  {
    label: "项目名称",
    value: "projectName",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--basic",
      fixed: "left",
    },
  },
  {
    label: "项目编码",
    value: "projectCode",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue",
    },
  },
  {
    label: "项目经理",
    value: "managerName",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue",
    },
  },
  {
    label: "项目开始时间",
    value: "projectStartTime",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue",
    },
  },
  {
    label: "项目所处阶段",
    value: "projectPhase",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue",
    },
  },
  {
    label: "项目所处阶段开始时间",
    value: "projectPhaseStartdate",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue",
    },
  },
  {
    label: "项目概算",
    children: [
      { label: "预估项目收入(不含税)", value: "gsIncome" },
      { label: "项目销售毛利", value: "gsGrossprofit" },
      { label: "项目销售毛利率", value: "gsGrossprofitRate" },
      { label: "项目营业利润", value: "gsProfit" },
      { label: "项目营业利润率", value: "gsProfitRate" },
    ],
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--blue_gray",
    },
  },
  {
    label: "项目预算",
    children: [
      { label: "预估项目收入(不含税)", value: "ysIncome" },
      { label: "项目销售毛利", value: "ysGrossprofit" },
      { label: "项目销售毛利率", value: "ysGrossprofitRate" },
      { label: "项目营业利润", value: "ysProfit" },
      { label: "项目营业利润率", value: "ysProfitRate" },
    ],
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--orange",
    },
  },
  {
    label: "实际执行",
    children: [
      { label: "项目收入（不含税）", value: "zxIncome" },
      { label: "项目销售毛利", value: "zxGrossprofit" },
      { label: "项目销售毛利率", value: "zxGrossprofitRate" },
      { label: "运营成本", value: "zxOperateCost", isSlot: true },
      { label: "项目营业利润", value: "zxProfit" },
      { label: "项目营业利润率", value: "zxProfitRate" },
    ],
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--red",
    },
  },
  {
    label: "实际毛利是否达预期",
    value: "grossprofitComplete",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--pink",
      renderHeader: {
        type: "tooltip",
        message:
          "备注：1、当执行毛利率大于概算毛利率时显示绿灯，小于概算毛利率时显示红灯；2、当项目预算为空或为0时，不显示红绿灯。",
      },
    },
  },
  {
    label: "实际营业利润是否为正",
    value: "zxProfitStatus",
    attrs: {
      labelClassName: "el-table__label--basic",
      className: "el-table__column--pink",
      renderHeader: {
        type: "tooltip",
        message: "备注：营业利润为正则绿灯，为负则红灯",
      },
    },
  },]
};



