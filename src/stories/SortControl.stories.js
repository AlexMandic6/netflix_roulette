import { action } from "@storybook/addon-actions";
import SortControl from "../SortControl/SortControl";

export default {
	title: "Components/SortControl",
	component: SortControl,
};

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
	handleSelectChange: action("Selected option"),
};
