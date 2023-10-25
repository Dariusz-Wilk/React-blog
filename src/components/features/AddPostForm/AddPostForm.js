import { Button, Form } from 'react-bootstrap';
import styles from './AddPostForm.module.scss';

const AddPostForm = () => {
	return (
		<Form className="mt-4">
			<Form.Group className="mb-3">
				<Form.Label>Title:</Form.Label>
				<Form.Control type="text" placeholder="Enter title..." />
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Author:</Form.Label>
				<Form.Control type="text" placeholder="Enter author..." />
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Published:</Form.Label>
				<Form.Control type="date" placeholder="Enter published date..." />
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Short description:</Form.Label>
				<Form.Control
					className={styles.textareaDescription}
					as="textarea"
					placeholder="Enter post description..."
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Main content:</Form.Label>
				<Form.Control
					className={styles.textareaMain}
					as="textarea"
					placeholder="Enter post content..."
				/>
			</Form.Group>

			<Button variant="primary" type="submit">
				Add post
			</Button>
		</Form>
	);
};

export default AddPostForm;
