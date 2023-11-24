// import "./Dialog.css";
import Button from "@/components/Button/Button";
import CloseIcon from "@/components/CloseIcon/CloseIcon";

// import FocusTrap from "focus-trap-react";

const Dialog = ({ children, title, closePortal }) => {
	return (
		// <FocusTrap>
		<div className="dialog">
			<h2 className="dialog__title">{title}</h2>
			<Button
				data-testid="close-button"
				onClick={closePortal}
				buttonClass="dialog__close-btn"
				buttonText={<CloseIcon />}
			/>
			{children}
		</div>
		// </FocusTrap>
	);
};

export default Dialog;
