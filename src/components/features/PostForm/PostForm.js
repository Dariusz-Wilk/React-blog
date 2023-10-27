import { Form, Button } from 'react-bootstrap';
import styles from './PostForm.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const PostForm = ({
	id,
	action,
	actionText,
	titlee = '',
	authorr = '',
	publishedDatee = '',
	descriptionn = '',
	mainContentt = '',
}) => {
	const [title, setTitle] = useState(titlee);
	const [author, setAuthor] = useState(authorr);
	const [publishedDate, setPublishedDate] = useState(publishedDatee);
	const [description, setDescription] = useState(descriptionn);
	const [mainContent, setMainContent] = useState(mainContentt);

	const postArrLength = useSelector(state => state.posts.length);
	const newPostId = postArrLength + 1 + '';

	const handleSubmit = e => {
		e.preventDefault();
		action({
			id: actionText === 'Edit post' ? id : newPostId,
			title,
			author,
			publishedDate,
			shortDescription: description,
			content: mainContent,
		});
	};

	return (
		<Form className="mt-4" onSubmit={handleSubmit}>
			<Form.Group className="mb-3">
				<Form.Label>Title:</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter title..."
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Author:</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter author..."
					value={author}
					onChange={e => setAuthor(e.target.value)}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Published:</Form.Label>
				<Form.Control
					type="date"
					placeholder="Enter published date..."
					value={publishedDate}
					onChange={e => setPublishedDate(e.target.value)}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Short description:</Form.Label>
				<Form.Control
					className={styles.textareaDescription}
					onChange={e => setDescription(e.target.value)}
					value={description}
					as="textarea"
					placeholder="Enter post description..."
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Main content:</Form.Label>
				<Form.Control
					className={styles.textareaMain}
					value={mainContent}
					onChange={e => setMainContent(e.target.value)}
					as="textarea"
					placeholder="Enter post content..."
				/>
			</Form.Group>

			<Button variant="primary" type="submit">
				{actionText}
			</Button>
		</Form>
	);
};

export default PostForm;
