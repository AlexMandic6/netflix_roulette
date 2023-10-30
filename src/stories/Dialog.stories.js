import Dialog from "components/Dialog/Dialog";
import { PortalWithState } from "react-portal";

export default {
	title: "Components/Dialog",
	component: Dialog,
};

const Template = ({ ...args }) => (
	<PortalWithState closeOnOutsideClick closeOnEsc>
		{({ openPortal, closePortal, isOpen, portal }) => (
			<>
				<button onClick={openPortal} className="dialog-btn">
					{args.dialogBtnText}
				</button>
				{isOpen &&
					portal(
						<Dialog
							title={args.dialogTitle}
							closePortal={closePortal}
						>
							<p className="dialog__text">{args.dialogText}</p>
						</Dialog>
					)}
			</>
		)}
	</PortalWithState>
);

export const Default = Template.bind({});
Default.args = {
	dialogBtnText: "Open Dialog",
	dialogTitle: "This is a simple dialog.",
	dialogText:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellendus obcaecati asperiores voluptatem iste a culpa.",
};
