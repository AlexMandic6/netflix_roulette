import "./Dialog.css";
import Button from "../Button/Button";
import CloseIcon from "../CloseIcon/CloseIcon";

const Dialog = ({ children, title, closePortal }) => {
	return (
		<div className="dialog">
			<h2 className="dialog__title">{title}</h2>
			<Button
				onClick={closePortal}
				buttonClass="dialog__close-btn"
				buttonText={<CloseIcon />}
			/>
			{children}
		</div>
	);
};

export default Dialog;
