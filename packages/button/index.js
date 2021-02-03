import IOTButton from './src/button';

/* istanbul ignore next */
IOTButton.install = function(Vue) {
  Vue.component(IOTButton.name, IOTButton);
};

export default IOTButton;