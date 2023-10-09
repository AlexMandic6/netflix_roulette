import "./Button.css";

const Button = ({
	buttonText,
	buttonClass,
	buttonType = "button",
	onClick,
}) => {
	return (
		<button onClick={onClick} className={buttonClass} type={buttonType}>
			{buttonText}
		</button>
	);
};

export default Button;
