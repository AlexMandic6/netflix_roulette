import Counter from "../Counter/Counter";

export default {
	component: Counter,
	title: "Counter",
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});

Default.args = {
	initialCount: 0,
};
