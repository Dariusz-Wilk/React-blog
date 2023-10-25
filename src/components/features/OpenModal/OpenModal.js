import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';

const OpenModal = ({ show, handleClose, id }) => {
	const dispatch = useDispatch();

	const remove = () => {
		dispatch(removePost(id));
	};
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Are you sure?</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				This operation will completely remove this post from the app.
				<br /> Are you sure you want to do that?
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={remove}>
					Confirm
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default OpenModal;
