import Dialog from "components/Dialog/Dialog";
import { PortalWithState } from "react-portal";
import Button from "components/Button/Button";
import MovieForm from "components/MovieForm/MovieForm";

export default {
	title: "Components/Dialog",
	component: Dialog,
};

const Template = ({ ...args }) => (
	<PortalWithState closeOnEsc>
		{({ openPortal, closePortal, isOpen, portal }) => (
			<>
				<Button
					onClick={openPortal}
					buttonClass="dialog-btn"
					buttonText={args.dialogBtnText}
				/>
				{isOpen &&
					portal(
						args.formDialog ? (
							<MovieForm
								closePortal={closePortal}
								title={args.dialogTitle}
							/>
						) : (
							<Dialog
								title={args.dialogTitle}
								closePortal={closePortal}
							>
								<p className="dialog__description">
									{args.dialogDescription}
								</p>
								<Button
									buttonType="button"
									buttonText={args.dialogBtnSubmitText}
									buttonClass="btn-primary"
								/>
							</Dialog>
						)
					)}
			</>
		)}
	</PortalWithState>
);

export const AddMovie = Template.bind({});
AddMovie.args = {
	dialogBtnText: "+ Add movie",
	dialogTitle: "Add Movie",
	formDialog: true,
};

export const EditMovie = Template.bind({});
EditMovie.args = {
	dialogBtnText: "Edit Movie",
	dialogTitle: "Edit Movie",
	formDialog: true,
};

export const DeleteMovie = Template.bind({});
DeleteMovie.args = {
	dialogBtnText: "Delete Movie",
	dialogTitle: "Add Movie",
	dialogDescription: "Are you sure you want to delete this movie?",
	dialogBtnSubmitText: "Confirm",
	formDialog: false,
};
