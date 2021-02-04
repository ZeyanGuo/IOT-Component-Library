import IotButton from "@iot-component-library/button";

export default {
  title: "IOTLIB/Button",
  component: IotButton,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { actions: 'clicked' }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IotButton },
  template: '<iot-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
