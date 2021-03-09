import IotTreeSelector from '@iot-component-library/tree-selector';

export default {
  title: "IOTLIB/Tree-Selector",
  component: IotTreeSelector,
  argTypes: {
    placeholder: {
      control: {type: "text"}
    },
    loading: {
      control: {type: "boolean"}
    },
    data: {
      control: { type: "object" }
    },
    onNodeClick: { actions: 'clicked' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IotTreeSelector },
  template: '<iot-tree-selector @node-click="onNodeClick" v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {
  data: [
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
          "id": 6,
          "label": "智能连接部",
          "children": [
            {
              "id": 440,
              "label": "部门领导"
            },
            {
              "id": 1297,
              "label": "信息安全团队"
            },
            {
              "id": 1298,
              "label": "监控保障团队"
            },
            {
              "id": 1299,
              "label": "网络维护团队"
            },
            {
              "id": 1300,
              "label": "网络业务接入团队"
            },
            {
              "id": 1301,
              "label": "规划支撑团队"
            },
            {
              "id": 1304,
              "label": "IT基础维护团队"
            },
            {
              "id": 1305,
              "label": "IT业务维护团队"
            },
            {
              "id": 1306,
              "label": "CT业务维护团队"
            },
            {
              "id": 1307,
              "label": "项目管理团队"
            },
            {
              "id": 1308,
              "label": "运维开发团队"
            },
            {
              "id": 1309,
              "label": "行业拓展团队一团队"
            },
            {
              "id": 1310,
              "label": "行业拓展团队二团队"
            },
            {
              "id": 231,
              "label": "5G拓展支撑团队"
            },
            {
              "id": 225,
              "label": "省级5G平台产品团队"
            },
            {
              "id": 23,
              "label": "专网产品团队"
            },
            {
              "id": 223,
              "label": "专网研发团队"
            },
            {
              "id": 1018,
              "label": "行业拓展团队"
            },
            {
              "id": 212,
              "label": "行业产品团队"
            },
            {
              "id": 211,
              "label": "支撑运营团队"
            },
            {
              "id": 368,
              "label": "5G专网团队"
            },
            {
              "id": 209,
              "label": "5G终端团队"
            },
            {
              "id": 202,
              "label": "大区支撑团队"
            },
            {
              "id": 218,
              "label": "售前方案团队"
            },
            {
              "id": 213,
              "label": "客户拓展团队"
            },
            {
              "id": 797,
              "label": "市场运营团队"
            },
            {
              "id": 217,
              "label": "售后服务团队"
            },
            {
              "id": 203,
              "label": "大数据产品研发团队"
            },
            {
              "id": 201,
              "label": "大前端团队"
            },
            {
              "id": 219,
              "label": "数据产品运营团队"
            },
            {
              "id": 215,
              "label": "能力开放产品研发团队"
            },
            {
              "id": 200,
              "label": "行业融合产品团队"
            },
            {
              "id": 229,
              "label": "基础平台产品团队"
            },
            {
              "id": 226,
              "label": "网络服务产品团队"
            },
            {
              "id": 216,
              "label": "行业服务产品团队"
            },
            {
              "id": 228,
              "label": "平台测试团队"
            },
            {
              "id": 896,
              "label": "融合能力研发团队"
            },
            {
              "id": 208,
              "label": "业务中台研发团队"
            },
            {
              "id": 230,
              "label": "网络服务研发团队"
            },
            {
              "id": 897,
              "label": "行业服务研发团队"
            },
            {
              "id": 205,
              "label": "国际业务产品团队"
            },
            {
              "id": 206,
              "label": "国际业务市场团队"
            },
            {
              "id": 207,
              "label": "国际业务研发团队"
            },
            {
              "id": 204,
              "label": "党建纪检团队"
            },
            {
              "id": 1013,
              "label": "业务支撑中心"
            }
          ]
        },
        {
          "id": 7,
          "label": "智能模组部",
          "children": [
            {
              "id": 441,
              "label": "部门领导"
            },
            {
              "id": 1001,
              "label": "重客中心"
            },
            {
              "id": 997,
              "label": "销售一中心"
            },
            {
              "id": 998,
              "label": "销售二中心"
            },
            {
              "id": 999,
              "label": "销售三中心"
            },
            {
              "id": 1000,
              "label": "销售四中心"
            },
            {
              "id": 233,
              "label": "产品中心"
            },
            {
              "id": 242,
              "label": "市场运营中心"
            },
            {
              "id": 232,
              "label": "FAE团队"
            },
            {
              "id": 243,
              "label": "研发中心",
              "children": [
                {
                  "id": 1034,
                  "label": "SE架构师组"
                },
                {
                  "id": 468,
                  "label": "品质管理组"
                },
                {
                  "id": 467,
                  "label": "平台与工具开发组"
                },
                {
                  "id": 461,
                  "label": "基带开发组"
                },
                {
                  "id": 462,
                  "label": "射频开发组"
                },
                {
                  "id": 466,
                  "label": "软件测试组"
                },
                {
                  "id": 465,
                  "label": "硬件测试组"
                },
                {
                  "id": 994,
                  "label": "软件一组"
                },
                {
                  "id": 995,
                  "label": "软件二组"
                },
                {
                  "id": 996,
                  "label": "软件三组"
                }
              ]
            },
            {
              "id": 244,
              "label": "供应中心"
            },
            {
              "id": 235,
              "label": "行政中心"
            }
          ]
        },
        {
          "id": 11,
          "label": "数字化产品部",
          "children": [
            {
              "id": 445,
              "label": "部门领导"
            },
            {
              "id": 112,
              "label": "技术服务团队"
            },
            {
              "id": 128,
              "label": "智能安防产品团队"
            },
            {
              "id": 125,
              "label": "智慧出行研发团队"
            },
            {
              "id": 132,
              "label": "智能组网研发团队"
            },
            {
              "id": 108,
              "label": "成都资源池团队"
            },
            {
              "id": 1103,
              "label": "家庭市场团队"
            },
            {
              "id": 1104,
              "label": "行业拓展一中心"
            },
            {
              "id": 1105,
              "label": "行业拓展二中心"
            },
            {
              "id": 116,
              "label": "市场运营团队"
            },
            {
              "id": 1106,
              "label": "产品中台团队"
            },
            {
              "id": 1107,
              "label": "5G行业终端团队"
            },
            {
              "id": 131,
              "label": "智能组网产品团队"
            },
            {
              "id": 126,
              "label": "智慧娱乐产品团队"
            },
            {
              "id": 1108,
              "label": "智慧办公产品团队"
            },
            {
              "id": 124,
              "label": "智慧出行产品团队"
            },
            {
              "id": 24,
              "label": "智慧酒店产品团队"
            },
            {
              "id": 1099,
              "label": "智慧安消产品团队"
            },
            {
              "id": 1102,
              "label": "研发一组"
            },
            {
              "id": 1098,
              "label": "研发二组"
            },
            {
              "id": 1097,
              "label": "研发三组"
            },
            {
              "id": 1096,
              "label": "研发四组"
            },
            {
              "id": 1091,
              "label": "研发五组"
            },
            {
              "id": 122,
              "label": "硬件研发团队"
            },
            {
              "id": 121,
              "label": "硬件测试团队"
            },
            {
              "id": 113,
              "label": "软件测试团队"
            },
            {
              "id": 123,
              "label": "运维团队"
            },
            {
              "id": 120,
              "label": "研发管理团队"
            },
            {
              "id": 1093,
              "label": "交付服务团队"
            },
            {
              "id": 771,
              "label": "供应链团队"
            },
            {
              "id": 110,
              "label": "品质保障团队"
            },
            {
              "id": 114,
              "label": "综合支撑团队"
            }
          ]
        },
        {
          "id": 12,
          "label": "开放平台部",
          "children": [
            {
              "id": 446,
              "label": "部门领导"
            },
            {
              "id": 76,
              "label": "工业互联网团队行业拓展组"
            },
            {
              "id": 85,
              "label": "智慧城市团队",
              "children": [
                {
                  "id": 880,
                  "label": "解决方案组"
                },
                {
                  "id": 878,
                  "label": "项目交付组"
                },
                {
                  "id": 879,
                  "label": "行业产品组"
                }
              ]
            },
            {
              "id": 78,
              "label": "边缘计算团队",
              "children": [
                {
                  "id": 96,
                  "label": "OneEdge-ECM基础能力研发组"
                },
                {
                  "id": 877,
                  "label": "OneEdge-BOX研发组"
                },
                {
                  "id": 952,
                  "label": "OneEdge-UPF研发组"
                },
                {
                  "id": 99,
                  "label": "OneEdge-MEP行业能力研发组"
                },
                {
                  "id": 876,
                  "label": "OneEdge-ECM核心能力研发组"
                },
                {
                  "id": 951,
                  "label": "OneEdge-ECM行业能力组"
                },
                {
                  "id": 790,
                  "label": "OneEdge-MEP通用能力研发组"
                }
              ]
            },
            {
              "id": 89,
              "label": "边缘发展团队"
            },
            {
              "id": 320,
              "label": "边缘使能团队"
            },
            {
              "id": 84,
              "label": "产品架构团队"
            },
            {
              "id": 97,
              "label": "运营团队"
            },
            {
              "id": 949,
              "label": "平台发展团队"
            },
            {
              "id": 86,
              "label": "接入能力团队",
              "children": [
                {
                  "id": 315,
                  "label": "MQTT组"
                },
                {
                  "id": 317,
                  "label": "终端应用组"
                },
                {
                  "id": 316,
                  "label": "NB-IOT组"
                }
              ]
            },
            {
              "id": 92,
              "label": "AI能力团队",
              "children": [
                {
                  "id": 321,
                  "label": "系统组"
                },
                {
                  "id": 322,
                  "label": "算法组"
                }
              ]
            },
            {
              "id": 93,
              "label": "数据使能团队",
              "children": [
                {
                  "id": 326,
                  "label": "数据可视化研发组"
                },
                {
                  "id": 327,
                  "label": "数据能力研发组"
                }
              ]
            },
            {
              "id": 83,
              "label": "应用使能团队",
              "children": [
                {
                  "id": 499,
                  "label": "行业平台研发组"
                },
                {
                  "id": 498,
                  "label": "门户研发组"
                },
                {
                  "id": 497,
                  "label": "应用研发组"
                }
              ]
            },
            {
              "id": 950,
              "label": "和物平台团队"
            },
            {
              "id": 74,
              "label": "自动化运维团队"
            },
            {
              "id": 75,
              "label": "FAE团队"
            },
            {
              "id": 77,
              "label": "UED团队"
            },
            {
              "id": 79,
              "label": "测试团队"
            },
            {
              "id": 88,
              "label": "平台运维团队",
              "children": [
                {
                  "id": 494,
                  "label": "网络运维组"
                },
                {
                  "id": 495,
                  "label": "主机运维组"
                },
                {
                  "id": 496,
                  "label": "业务运维组"
                }
              ]
            },
            {
              "id": 87,
              "label": "工业互联网团队",
              "children": [
                {
                  "id": 1143,
                  "label": "行业拓展组"
                }
              ]
            },
            {
              "id": 91,
              "label": "项目支撑团队",
              "children": [
                {
                  "id": 792,
                  "label": "项目管理组"
                },
                {
                  "id": 791,
                  "label": "工具支撑组"
                },
                {
                  "id": 881,
                  "label": "能力推进组"
                }
              ]
            },
            {
              "id": 100,
              "label": "综合服务团队"
            },
            {
              "id": 90,
              "label": "市场团队",
              "children": [
                {
                  "id": 882,
                  "label": "运营分析组"
                }
              ]
            }
          ]
        },
        {
          "id": 8,
          "label": "解决方案部",
          "children": [
            {
              "id": 442,
              "label": "部门领导"
            },
            {
              "id": 64,
              "label": "重庆区域"
            },
            {
              "id": 66,
              "label": "云南区域"
            },
            {
              "id": 62,
              "label": "湖北区域"
            },
            {
              "id": 63,
              "label": "湖南区域"
            },
            {
              "id": 470,
              "label": "西藏青海区域"
            },
            {
              "id": 67,
              "label": "国土地灾"
            },
            {
              "id": 70,
              "label": "智慧运维"
            },
            {
              "id": 71,
              "label": "行业终端"
            },
            {
              "id": 65,
              "label": "公共安全"
            },
            {
              "id": 72,
              "label": "集团项目"
            },
            {
              "id": 53,
              "label": "产品",
              "children": [
                {
                  "id": 54,
                  "label": "集团项目产品"
                },
                {
                  "id": 55,
                  "label": "行业产品"
                }
              ]
            },
            {
              "id": 58,
              "label": "技术服务",
              "children": [
                {
                  "id": 56,
                  "label": "售前支持"
                },
                {
                  "id": 59,
                  "label": "项目交付"
                },
                {
                  "id": 69,
                  "label": "品控供应链管理"
                }
              ]
            },
            {
              "id": 471,
              "label": "研发管理运维",
              "children": [
                {
                  "id": 473,
                  "label": "运维技术售后"
                },
                {
                  "id": 474,
                  "label": "研发项目管理"
                }
              ]
            },
            {
              "id": 57,
              "label": "平台研发",
              "children": [
                {
                  "id": 475,
                  "label": "架构设计"
                },
                {
                  "id": 476,
                  "label": "平台开发"
                },
                {
                  "id": 477,
                  "label": "APP开发"
                },
                {
                  "id": 478,
                  "label": "软件测试"
                }
              ]
            },
            {
              "id": 472,
              "label": "终端研发",
              "children": [
                {
                  "id": 480,
                  "label": "架构设计"
                },
                {
                  "id": 481,
                  "label": "嵌入式软件"
                },
                {
                  "id": 482,
                  "label": "硬件开发"
                }
              ]
            },
            {
              "id": 60,
              "label": "综合支撑"
            },
            {
              "id": 73,
              "label": "党建人力"
            }
          ]
        },
        {
          "id": 9,
          "label": "信息技术中心",
          "children": [
            {
              "id": 443,
              "label": "部门领导"
            },
            {
              "id": 145,
              "label": "操作系统专项团队",
              "children": [
                {
                  "id": 917,
                  "label": "产品组"
                },
                {
                  "id": 920,
                  "label": "内核组"
                },
                {
                  "id": 923,
                  "label": "组件组"
                },
                {
                  "id": 925,
                  "label": "驱动组"
                },
                {
                  "id": 927,
                  "label": "定位组"
                },
                {
                  "id": 929,
                  "label": "安全组"
                },
                {
                  "id": 932,
                  "label": "测试组"
                }
              ]
            },
            {
              "id": 798,
              "label": "智慧社区专项团队"
            },
            {
              "id": 148,
              "label": "5G智能网联专项团队"
            },
            {
              "id": 161,
              "label": "渠道运营专项团队"
            },
            {
              "id": 799,
              "label": "电动安全产品团队"
            },
            {
              "id": 166,
              "label": "泛终端产品团队"
            },
            {
              "id": 152,
              "label": "网络产品团队"
            },
            {
              "id": 147,
              "label": "产品创新团队"
            },
            {
              "id": 142,
              "label": "5G创新团队"
            },
            {
              "id": 163,
              "label": "四川区域市场团队"
            },
            {
              "id": 159,
              "label": "河南区域市场团队"
            },
            {
              "id": 158,
              "label": "河北区域市场团队"
            },
            {
              "id": 164,
              "label": "西北区域市场团队"
            },
            {
              "id": 153,
              "label": "辽宁区域市场团队"
            },
            {
              "id": 150,
              "label": "市场运营支撑团队"
            },
            {
              "id": 146,
              "label": "测试质量团队"
            },
            {
              "id": 149,
              "label": "大前端技术团队"
            },
            {
              "id": 165,
              "label": "硬件技术团队"
            },
            {
              "id": 162,
              "label": "专业设计团队"
            },
            {
              "id": 144,
              "label": "采购支撑团队"
            },
            {
              "id": 154,
              "label": "综合服务支撑组"
            }
          ]
        },
        {
          "id": 10,
          "label": "智慧网络技术中心",
          "children": [
            {
              "id": 444,
              "label": "部门领导"
            },
            {
              "id": 431,
              "label": "广西支撑团队"
            },
            {
              "id": 175,
              "label": "贵州支撑团队"
            },
            {
              "id": 176,
              "label": "海南支撑团队"
            },
            {
              "id": 181,
              "label": "市场经营团队",
              "children": [
                {
                  "id": 965,
                  "label": "经营分析组"
                },
                {
                  "id": 966,
                  "label": "营销传播组"
                },
                {
                  "id": 967,
                  "label": "业务运营组"
                }
              ]
            },
            {
              "id": 947,
              "label": "产业合作团队"
            },
            {
              "id": 186,
              "label": "网络业务团队",
              "children": [
                {
                  "id": 352,
                  "label": "网络产品方案单元"
                },
                {
                  "id": 353,
                  "label": "网络产品销售单元"
                }
              ]
            },
            {
              "id": 190,
              "label": "创新业务团队",
              "children": [
                {
                  "id": 1076,
                  "label": "方案设计组"
                },
                {
                  "id": 1077,
                  "label": "售前支撑组"
                },
                {
                  "id": 1078,
                  "label": "创新运营组"
                },
                {
                  "id": 1079,
                  "label": "产品项目组"
                }
              ]
            },
            {
              "id": 167,
              "label": "5G行业方案团队1"
            },
            {
              "id": 171,
              "label": "智慧行业终端及方案团队"
            },
            {
              "id": 191,
              "label": "智慧园区行业团队",
              "children": [
                {
                  "id": 1080,
                  "label": "园区产品组"
                },
                {
                  "id": 361,
                  "label": "标准方案组"
                },
                {
                  "id": 362,
                  "label": "售前一组"
                },
                {
                  "id": 170,
                  "label": "售前二组"
                },
                {
                  "id": 806,
                  "label": "售前三组"
                },
                {
                  "id": 807,
                  "label": "售前四组"
                }
              ]
            },
            {
              "id": 184,
              "label": "行业能力中台团队",
              "children": [
                {
                  "id": 959,
                  "label": "产品一组"
                },
                {
                  "id": 961,
                  "label": "产品二组"
                }
              ]
            },
            {
              "id": 183,
              "label": "设计创新团队"
            },
            {
              "id": 168,
              "label": "行业定位方案研发团队",
              "children": [
                {
                  "id": 335,
                  "label": "嵌入式软件组"
                },
                {
                  "id": 337,
                  "label": "平台软件组"
                }
              ]
            },
            {
              "id": 187,
              "label": "智能门锁与智慧楼宇研发团队",
              "children": [
                {
                  "id": 886,
                  "label": "终端产品组"
                },
                {
                  "id": 887,
                  "label": "平台产品组"
                }
              ]
            },
            {
              "id": 189,
              "label": "硬件研发与创新实验室团队",
              "children": [
                {
                  "id": 356,
                  "label": "基带组"
                },
                {
                  "id": 357,
                  "label": "射频组"
                }
              ]
            },
            {
              "id": 169,
              "label": "智慧园区标准化研发团队",
              "children": [
                {
                  "id": 1089,
                  "label": "基础架构组"
                },
                {
                  "id": 339,
                  "label": "后台研发组"
                },
                {
                  "id": 858,
                  "label": "大前端支撑组"
                }
              ]
            },
            {
              "id": 802,
              "label": "智慧园区应用研发团队",
              "children": [
                {
                  "id": 884,
                  "label": "业务开发一组"
                },
                {
                  "id": 885,
                  "label": "业务开发二组"
                }
              ]
            },
            {
              "id": 188,
              "label": "研发质量与安全运维团队"
            },
            {
              "id": 390,
              "label": "交付团队"
            },
            {
              "id": 834,
              "label": "行业支撑团队"
            },
            {
              "id": 185,
              "label": "售后服务团队"
            },
            {
              "id": 173,
              "label": "供应链及品质管理团队",
              "children": [
                {
                  "id": 342,
                  "label": "供应链组"
                },
                {
                  "id": 343,
                  "label": "品质及产线管理组"
                }
              ]
            },
            {
              "id": 182,
              "label": "人力管理团队"
            },
            {
              "id": 179,
              "label": "行政及综合管理团队"
            },
            {
              "id": 1090,
              "label": "智慧园区生态开放研发团队"
            }
          ]
        },
        {
          "id": 13,
          "label": "集成电路创新中心",
          "children": [
            {
              "id": 447,
              "label": "部门领导"
            },
            {
              "id": 45,
              "label": "总监专家"
            },
            {
              "id": 47,
              "label": "市场支撑大组",
              "children": [
                {
                  "id": 282,
                  "label": "eSIM芯片北方市场组"
                },
                {
                  "id": 294,
                  "label": "eSIM芯片南方市场组"
                },
                {
                  "id": 291,
                  "label": "网络终端拓展组"
                },
                {
                  "id": 292,
                  "label": "安全芯片销售组"
                },
                {
                  "id": 293,
                  "label": "行业市场销售组"
                },
                {
                  "id": 296,
                  "label": "5G行业解决方案组"
                },
                {
                  "id": 290,
                  "label": "宣传组"
                },
                {
                  "id": 289,
                  "label": "产品商务组"
                },
                {
                  "id": 979,
                  "label": "供应链管理组"
                },
                {
                  "id": 893,
                  "label": "集团借调组"
                }
              ]
            },
            {
              "id": 46,
              "label": "区域营销大组",
              "children": [
                {
                  "id": 283,
                  "label": "北京区域组"
                },
                {
                  "id": 288,
                  "label": "天津区域组"
                },
                {
                  "id": 285,
                  "label": "吉林区域组"
                },
                {
                  "id": 284,
                  "label": "黑龙江区域组"
                },
                {
                  "id": 286,
                  "label": "内蒙古区域组"
                },
                {
                  "id": 982,
                  "label": "区域支撑组"
                }
              ]
            },
            {
              "id": 48,
              "label": "雄安支撑大组",
              "children": [
                {
                  "id": 300,
                  "label": "雄安智慧城市组"
                },
                {
                  "id": 297,
                  "label": "雄安智慧工地组"
                },
                {
                  "id": 298,
                  "label": "雄安区域支撑组"
                },
                {
                  "id": 299,
                  "label": "雄安研发支撑组"
                }
              ]
            },
            {
              "id": 314,
              "label": "能源行业大组",
              "children": [
                {
                  "id": 845,
                  "label": "能源产品组"
                },
                {
                  "id": 295,
                  "label": "能源售前组"
                }
              ]
            },
            {
              "id": 44,
              "label": "产品运营大组",
              "children": [
                {
                  "id": 279,
                  "label": "平台产品组"
                },
                {
                  "id": 846,
                  "label": "平台开发一组"
                },
                {
                  "id": 847,
                  "label": "平台开发二组"
                },
                {
                  "id": 278,
                  "label": "前端开发组"
                },
                {
                  "id": 848,
                  "label": "软件测试组"
                },
                {
                  "id": 274,
                  "label": "AI技术组"
                },
                {
                  "id": 275,
                  "label": "项目交付组"
                },
                {
                  "id": 277,
                  "label": "行业产品组"
                },
                {
                  "id": 276,
                  "label": "创新产品组"
                },
                {
                  "id": 818,
                  "label": "质量组"
                },
                {
                  "id": 281,
                  "label": "产品供应组"
                },
                {
                  "id": 280,
                  "label": "售后组"
                },
                {
                  "id": 817,
                  "label": "5G产品组"
                }
              ]
            },
            {
              "id": 49,
              "label": "研发技术大组",
              "children": [
                {
                  "id": 306,
                  "label": "数字电路设计组"
                },
                {
                  "id": 304,
                  "label": "模拟电路设计组"
                },
                {
                  "id": 309,
                  "label": "芯片版图设计组"
                },
                {
                  "id": 311,
                  "label": "芯片验证组"
                },
                {
                  "id": 303,
                  "label": "芯片底层组"
                },
                {
                  "id": 990,
                  "label": "芯片协议栈组"
                },
                {
                  "id": 312,
                  "label": "芯片COS组"
                },
                {
                  "id": 302,
                  "label": "安全开发组"
                },
                {
                  "id": 983,
                  "label": "eSIM产品组"
                },
                {
                  "id": 307,
                  "label": "eSIM生产组"
                },
                {
                  "id": 984,
                  "label": "eSIM运营组"
                },
                {
                  "id": 985,
                  "label": "芯片运营组"
                },
                {
                  "id": 308,
                  "label": "芯片FAE组"
                },
                {
                  "id": 313,
                  "label": "芯片AE组"
                },
                {
                  "id": 310,
                  "label": "芯片产品组"
                },
                {
                  "id": 305,
                  "label": "芯片射频组"
                },
                {
                  "id": 301,
                  "label": "硬件测试组"
                },
                {
                  "id": 849,
                  "label": "研发项目管理组"
                },
                {
                  "id": 819,
                  "label": "低功耗实验室"
                }
              ]
            },
            {
              "id": 50,
              "label": "服务支撑组"
            }
          ]
        },
        {
          "id": 14,
          "label": "智能制造创新中心",
          "children": [
            {
              "id": 448,
              "label": "部门领导"
            },
            {
              "id": 256,
              "label": "山东市场拓展组"
            },
            {
              "id": 259,
              "label": "苏沪市场拓展组"
            },
            {
              "id": 265,
              "label": "浙江市场拓展组"
            },
            {
              "id": 255,
              "label": "江西市场拓展组"
            },
            {
              "id": 247,
              "label": "安徽市场拓展组"
            },
            {
              "id": 261,
              "label": "智慧工业行业组"
            },
            {
              "id": 250,
              "label": "智慧交通行业组"
            },
            {
              "id": 246,
              "label": "智慧企务行业组"
            },
            {
              "id": 260,
              "label": "智慧运营商行业组"
            },
            {
              "id": 266,
              "label": "智慧政务行业组"
            },
            {
              "id": 258,
              "label": "技术组"
            },
            {
              "id": 257,
              "label": "软件一组"
            },
            {
              "id": 249,
              "label": "软件二组"
            },
            {
              "id": 263,
              "label": "硬件一组"
            },
            {
              "id": 252,
              "label": "硬件二组"
            },
            {
              "id": 248,
              "label": "项目质量管理室"
            },
            {
              "id": 253,
              "label": "资源统筹组"
            },
            {
              "id": 262,
              "label": "售后交付组"
            },
            {
              "id": 264,
              "label": "运营财经室"
            },
            {
              "id": 251,
              "label": "综合管理室"
            }
          ]
        },
        {
          "id": 19,
          "label": "智能感知产业中心",
          "children": [
            {
              "id": 453,
              "label": "部门领导"
            },
            {
              "id": 432,
              "label": "行业市场团队"
            },
            {
              "id": 193,
              "label": "区域市场团队"
            },
            {
              "id": 192,
              "label": "产品技术团队"
            },
            {
              "id": 196,
              "label": "技术支持团队"
            },
            {
              "id": 195,
              "label": "综合服务团队"
            }
          ]
        },
        {
          "id": 485,
          "label": "行业能力中心",
          "children": [
            {
              "id": 765,
              "label": "部门领导"
            },
            {
              "id": 505,
              "label": "重庆市场团队"
            },
            {
              "id": 521,
              "label": "成都市场团队"
            },
            {
              "id": 500,
              "label": "市场运营团队"
            },
            {
              "id": 964,
              "label": "交付团队"
            },
            {
              "id": 501,
              "label": "标准产品团队"
            },
            {
              "id": 519,
              "label": "行业产品团队"
            },
            {
              "id": 843,
              "label": "硬件产品团队"
            },
            {
              "id": 502,
              "label": "标准产品研发团队",
              "children": [
                {
                  "id": 1312,
                  "label": "产品团队"
                },
                {
                  "id": 1314,
                  "label": "研发团队"
                }
              ]
            },
            {
              "id": 515,
              "label": "视频基础能力研发团队"
            },
            {
              "id": 517,
              "label": "视频行业平台研发团队"
            },
            {
              "id": 835,
              "label": "综合团队"
            }
          ]
        },
        {
          "id": 18,
          "label": "信息安全部",
          "children": [
            {
              "id": 452,
              "label": "部门领导"
            },
            {
              "id": 137,
              "label": "合规管理团队"
            },
            {
              "id": 136,
              "label": "攻防测评团队"
            },
            {
              "id": 133,
              "label": "安全方案团队"
            },
            {
              "id": 840,
              "label": "行业产品团队"
            },
            {
              "id": 865,
              "label": "城市运行安全团队"
            },
            {
              "id": 866,
              "label": "安全开发团队"
            },
            {
              "id": 766,
              "label": "市场拓展团队"
            },
            {
              "id": 483,
              "label": "北京支撑团队"
            },
            {
              "id": 867,
              "label": "南京支撑团队"
            },
            {
              "id": 135,
              "label": "办公系统团队"
            },
            {
              "id": 138,
              "label": "生产系统团队"
            },
            {
              "id": 868,
              "label": "运营系统团队"
            },
            {
              "id": 869,
              "label": "大数据应用团队"
            },
            {
              "id": 870,
              "label": "IT研发运维团队"
            },
            {
              "id": 139,
              "label": "IT质量保障团队"
            }
          ]
        },
        {
          "id": 992,
          "label": "北京支撑中心",
          "children": [
            {
              "id": 1284,
              "label": "北京市场大组",
              "children": [
                {
                  "id": 1288,
                  "label": "客户经理组"
                },
                {
                  "id": 1289,
                  "label": "售前支撑组"
                },
                {
                  "id": 1290,
                  "label": "交付/售后组"
                }
              ]
            },
            {
              "id": 1285,
              "label": "雄安市场大组",
              "children": [
                {
                  "id": 1291,
                  "label": "客户经理组"
                },
                {
                  "id": 1292,
                  "label": "售前支撑组"
                },
                {
                  "id": 1294,
                  "label": "交付/售后组"
                },
                {
                  "id": 1295,
                  "label": "智慧工地产品组"
                }
              ]
            },
            {
              "id": 1286,
              "label": "市场运营组"
            },
            {
              "id": 1287,
              "label": "综合行政组"
            }
          ]
        },
        {
          "id": 993,
          "label": "广州支撑中心",
          "children": [
            {
              "id": 1266,
              "label": "部门领导"
            },
            {
              "id": 1348,
              "label": "标准化产品团队"
            },
            {
              "id": 1267,
              "label": "标准化产品团队2",
              "children": [
                {
                  "id": 1268,
                  "label": "商务合作组"
                },
                {
                  "id": 1269,
                  "label": "运营管理组"
                },
                {
                  "id": 1270,
                  "label": "应用推进组"
                },
                {
                  "id": 1271,
                  "label": "流程规范组"
                }
              ]
            },
            {
              "id": 1272,
              "label": "广东支撑团队",
              "children": [
                {
                  "id": 1273,
                  "label": "西区组"
                },
                {
                  "id": 1274,
                  "label": "东区组"
                }
              ]
            },
            {
              "id": 1275,
              "label": "福建支撑团队"
            },
            {
              "id": 1276,
              "label": "市场团队",
              "children": [
                {
                  "id": 1277,
                  "label": "市场一组"
                },
                {
                  "id": 1278,
                  "label": "市场二组"
                },
                {
                  "id": 1279,
                  "label": "市场三组"
                },
                {
                  "id": 1280,
                  "label": "市场四组"
                },
                {
                  "id": 1281,
                  "label": "经营分析组"
                }
              ]
            },
            {
              "id": 1282,
              "label": "大项目支撑团队"
            },
            {
              "id": 1283,
              "label": "综合运营支撑团队"
            }
          ]
        },
        {
          "id": 3,
          "label": "综合部",
          "children": [
            {
              "id": 437,
              "label": "部门领导"
            },
            {
              "id": 272,
              "label": "综合文秘组"
            },
            {
              "id": 271,
              "label": "宣传分析组"
            },
            {
              "id": 268,
              "label": "法律安保组"
            },
            {
              "id": 269,
              "label": "后勤服务组"
            }
          ]
        },
        {
          "id": 892,
          "label": "法律事务部"
        },
        {
          "id": 457,
          "label": "党委办公室（党群工作部）",
          "children": [
            {
              "id": 841,
              "label": "部门领导"
            }
          ]
        },
        {
          "id": 458,
          "label": "党风廉政办公室"
        },
        {
          "id": 2,
          "label": "人力资源部",
          "children": [
            {
              "id": 436,
              "label": "部门领导"
            },
            {
              "id": 106,
              "label": "专家团队"
            },
            {
              "id": 104,
              "label": "HRBP团队"
            },
            {
              "id": 105,
              "label": "共享服务团队"
            }
          ]
        },
        {
          "id": 4,
          "label": "财务部",
          "children": [
            {
              "id": 438,
              "label": "部门领导"
            },
            {
              "id": 28,
              "label": "财务核算中心"
            },
            {
              "id": 29,
              "label": "预算考核组"
            },
            {
              "id": 27,
              "label": "风控管理组"
            }
          ]
        },
        {
          "id": 15,
          "label": "纪委办公室",
          "children": [
            {
              "id": 449,
              "label": "部门领导"
            },
            {
              "id": 459,
              "label": "综合案管组"
            },
            {
              "id": 51,
              "label": "纪检组"
            },
            {
              "id": 52,
              "label": "内审组"
            }
          ]
        },
        {
          "id": 5,
          "label": "市场运营部",
          "children": [
            {
              "id": 439,
              "label": "部门领导"
            },
            {
              "id": 40,
              "label": "经营管理组"
            },
            {
              "id": 836,
              "label": "区域营销组"
            },
            {
              "id": 22,
              "label": "渠道管理组"
            },
            {
              "id": 37,
              "label": "行业拓展组"
            },
            {
              "id": 34,
              "label": "产品管理组"
            },
            {
              "id": 38,
              "label": "产品创新组"
            },
            {
              "id": 35,
              "label": "对外合作组"
            },
            {
              "id": 844,
              "label": "国际业务组"
            },
            {
              "id": 837,
              "label": "综合支撑组"
            }
          ]
        },
        {
          "id": 16,
          "label": "品质保障部",
          "children": [
            {
              "id": 450,
              "label": "部门领导"
            },
            {
              "id": 103,
              "label": "质量保障组"
            },
            {
              "id": 101,
              "label": "产品品质组"
            },
            {
              "id": 102,
              "label": "服务品质组"
            }
          ]
        },
        {
          "id": 17,
          "label": "供应链服务部",
          "children": [
            {
              "id": 451,
              "label": "部门领导"
            },
            {
              "id": 25,
              "label": "供应链支撑中心"
            },
            {
              "id": 30,
              "label": "采购方案组"
            },
            {
              "id": 32,
              "label": "采购执行组"
            },
            {
              "id": 31,
              "label": "采购运营组"
            }
          ]
        },
        {
          "id": 20,
          "label": "发展战略部",
          "children": [
            {
              "id": 454,
              "label": "部门领导"
            },
            {
              "id": 973,
              "label": "战略管理组"
            },
            {
              "id": 975,
              "label": "计划管理组"
            },
            {
              "id": 976,
              "label": "工程建设组"
            },
            {
              "id": 977,
              "label": "技术管理组"
            },
            {
              "id": 978,
              "label": "研发管理组"
            },
            {
              "id": 974,
              "label": "合规管理组"
            }
          ]
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
  ]
}

