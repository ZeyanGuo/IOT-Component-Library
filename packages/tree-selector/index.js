import IotTreeSelector from "./src/TreeSelector";

IotTreeSelector.install = function (Vue) {
  Vue.component(IotTreeSelector.name, IotTreeSelector);
};

export default IotTreeSelector;
