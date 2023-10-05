import "./Dialog.css";
import Button from "../Button/Button";
import CloseIcon from "../CloseIcon/CloseIcon";

import FocusTrap from "focus-trap-react";

const Dialog = ({ children, title, closePortal }) => {
	return (
		<FocusTrap>
			<div className="dialog">
				<h2 className="dialog__title">{title}</h2>
				<Button
					onClick={closePortal}
					buttonClass="dialog__close-btn"
					buttonText={<CloseIcon />}
				/>
				{children}
			</div>
		</FocusTrap>
	);
};

export default Dialog;
