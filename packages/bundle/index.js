import IotButton from "@iot-component-library/button";
import IotTableMultipleA from "@iot-component-library/table-multiple-a";

const components = [IotButton, IotTableMultipleA];

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
};
