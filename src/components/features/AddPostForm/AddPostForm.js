import { Button, Form } from 'react-bootstrap';
import styles from './AddPostForm.module.scss';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publishedDate, setPublishedDate] = useState('');
	const [description, setDescription] = useState('');
	const [mainContent, setMainContent] = useState('');

	const postArrLength = useSelector(state => state.posts.length);
	const newPostId = postArrLength + 1 + '';

	const addNewPost = e => {
		e.preventDefault();

		dispatch(
			addPost({
				id: newPostId,
				title,
				shortDescription: description,
				content: mainContent,
				publishedDate,
				author,
			})
		);

		setTitle('');
		setAuthor('');
		setPublishedDate('');
		setDescription('');
		setMainContent('');

		navigate('/');
	};

	return (
		<Form className="mt-4" onSubmit={addNewPost}>
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
				Add post
			</Button>
		</Form>
	);
};

export default AddPostForm;
