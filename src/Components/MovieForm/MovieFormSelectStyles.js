const SelectStyles = {
	control: (baseStyles, state) => ({
		...baseStyles,
		borderColor: state.isFocused ? "grey" : "red",
		border: "none",
		boxShadow: "none",
		outline: state.isFocused ? "2px solid #fff" : "none",
		outlineOffset: "3px",
		background: "#323232",
	}),
	singleValue: (baseStyles) => ({
		...baseStyles,
		color: "#fff",
	}),
	valueContainer: (baseStyles) => ({
		...baseStyles,
		padding: "16px 18px",
	}),
	menu: (baseStyles) => ({
		...baseStyles,
		background: "#323232",
	}),
	menuList: (baseStyles) => ({
		...baseStyles,
		fontSize: "20px",
	}),
	placeholder: (baseStyles) => ({
		...baseStyles,
		fontSize: "20px",
	}),
	option: (baseStyles, state) => ({
		...baseStyles,
		color: "#fff",
		background: state.isFocused ? "#232323" : "#323232",
	}),
};

export default SelectStyles;
