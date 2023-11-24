import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SearchForm from "../components/SearchForm/SearchForm.js";

const meta: Meta<typeof SearchForm> = {
	title: "Components/SearchForm",
	component: SearchForm,
	argTypes: {
		onSearch: {
			action: "clicked",
			description: "console.log user input when enter key is pressed",
		},
	},
};

export default meta;
type Story = StoryObj<typeof SearchForm>;

const SearchFormWithHooks = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const onSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
	};

	return <SearchForm onSearch={onSearch} searchTerm={searchTerm} />;
};

export const SearchFormStory: Story = {
	render: () => <SearchFormWithHooks />,
};
