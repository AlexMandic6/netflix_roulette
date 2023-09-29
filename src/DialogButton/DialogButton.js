import "./DialogButton.css";

const DialogButton = ({ buttonTitle, onClick }) => {
	return (
		<button onClick={onClick} className="dialog-btn">
			{buttonTitle}
		</button>
	);
};

export default DialogButton;
