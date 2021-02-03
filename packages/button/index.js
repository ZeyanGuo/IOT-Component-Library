import IotButton from './src/Button';

IotButton.install = function(Vue) {
  Vue.component(IOTButton.name, IotButton);
};

export default IotButton;