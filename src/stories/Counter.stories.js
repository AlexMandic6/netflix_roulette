import Counter from "../components/Counter/Counter";

export default {
	component: Counter,
	title: "Components/Counter",
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});

Default.args = {
	initialCount: 0,
};
