import Dialog from "../Dialog/Dialog";
import CloseIcon from "../CloseIcon/CloseIcon";
import { PortalWithState } from "react-portal";

export default {
	title: "Components/Dialog",
	component: Dialog,
};

const Template = (args) => (
	<PortalWithState closeOnOutsideClick closeOnEsc>
		{({ openPortal, closePortal, isOpen, portal }) => (
			<>
				<button onClick={openPortal} className="dialog-btn">
					Open Dialog
				</button>
				{isOpen && portal(<Dialog {...args} />)}
			</>
		)}
	</PortalWithState>
);

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<div className="dialog__header">
				<h2 className="dialog__title">This is a simple dialog.</h2>
				<button className="dialog__close-btn">
					<CloseIcon />
				</button>
			</div>
			<p className="dialog__text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Necessitatibus repellendus obcaecati asperiores voluptatem iste
				a culpa sunt placeat molestias porro!
			</p>
		</>
	),
};
