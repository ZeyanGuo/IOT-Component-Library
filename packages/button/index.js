import IotButton from "./src/Button";

IotButton.install = function (Vue) {
  Vue.component(IotButton.name, IotButton);
};

export default IotButton;
