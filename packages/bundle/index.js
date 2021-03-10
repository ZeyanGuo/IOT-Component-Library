import IotButton from "@iot-component-library/button";
import IotTableMultipleA from "@iot-component-library/table-multiple-a";
import IotTreeFiltrationSelector from "@iot-component-library/tree-filtration-selector";
import IotTreeSelector from "@iot-component-library/tree-selector";
import IotAvatarList from "@iot-component-library/avatar-list";

const components = [
  IotButton,
  IotTableMultipleA,
  IotTreeFiltrationSelector,
  IotTreeSelector,
  IotAvatarList,
];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  name: "iot component library",
  install,
  IotButton,
  IotTableMultipleA,
  IotTreeFiltrationSelector,
  IotTreeSelector,
  IotAvatarList,
};
