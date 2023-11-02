import { Form, Button } from 'react-bootstrap';
import styles from './PostForm.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { dateToStr } from '../../../utils/dateToStr';

import { useForm } from 'react-hook-form';

const PostForm = ({
	id,
	action,
	actionText,
	postTitle = '',
	postAuthor = '',
	postPublishedDate = new Date(),
	postDescription = '',
	postMainContent = '',
	postCategory = '',
}) => {
	const [formData, setFormData] = useState({
		title: postTitle,
		author: postAuthor,
		publishedDate: postPublishedDate,
		description: postDescription,
		mainContent: postMainContent,
		category: postCategory,
	});
	const [content, setContent] = useState(postMainContent);
	const [startDate, setStartDate] = useState(postPublishedDate);

	const [contentError, setContentError] = useState(false);

	const postArrLength = useSelector(state => state.posts.length);
	const newPostId = postArrLength + 1 + '';

	const handleSubmit = () => {
		setContentError(!content);
		if (content) {
			action({
				id: actionText === 'Edit post' ? id : newPostId,
				title: formData.title,
				author: formData.author,
				publishedDate: dateToStr(startDate),
				shortDescription: formData.description,
				content: content,
				category: formData.category,
			});
		}
	};

	const {
		register,
		handleSubmit: validate,
		formState: { errors },
	} = useForm();

	return (
		<Form className="mt-4" onSubmit={validate(handleSubmit)}>
			<Form.Group className="mb-3">
				<Form.Label>Title:</Form.Label>
				<Form.Control
					{...register('title', { required: true, minLength: 3 })}
					type="text"
					placeholder="Enter title..."
					value={formData.title}
					onChange={e =>
						setFormData(prevState => ({
							...prevState,
							title: e.target.value,
						}))
					}
				/>
				{errors.title && (
					<small className="d-block form-text text-danger mt-2">
						This field is required with minimum 3 characters
					</small>
				)}
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Author:</Form.Label>
				<Form.Control
					{...register('author', { required: true, minLength: 3 })}
					type="text"
					placeholder="Enter author..."
					value={formData.author}
					onChange={e =>
						setFormData(prevState => ({
							...prevState,
							author: e.target.value,
						}))
					}
				/>
				{errors.author && (
					<small className="d-block form-text text-danger mt-2">
						This field is required with minimum 3 characters
					</small>
				)}
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label className="d-block">Published:</Form.Label>
				<DatePicker
					selected={startDate}
					onChange={date => setStartDate(date)}
					dateFormat={`dd/MM/yyy`}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Category:</Form.Label>
				<Form.Select
					aria-label="Default select example"
					value={formData.category}
					onChange={e =>
						setFormData(prevState => ({
							...prevState,
							category: e.target.value,
						}))
					}>
					<option>Open to select category</option>
					<option value="Sport">Sport</option>
					<option value="News">News</option>
					<option value="Movies">Movies</option>
				</Form.Select>
				{errors.author && (
					<small className="d-block form-text text-danger mt-2">
						This field is required with minimum 3 characters
					</small>
				)}
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Short description:</Form.Label>
				<Form.Control
					{...register('description', { required: true, minLength: 20 })}
					className={styles.textareaDescription}
					onChange={e =>
						setFormData(prevState => ({
							...prevState,
							description: e.target.value,
						}))
					}
					value={formData.description}
					as="textarea"
					placeholder="Enter post description..."
				/>
				{errors.description && (
					<small className="d-block form-text text-danger mt-2">
						This field is required with minimum 20 characters
					</small>
				)}
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Main content:</Form.Label>
				<ReactQuill
					className={styles.textareaMain}
					value={content}
					onChange={setContent}
					placeholder="Enter post content..."
				/>
				{contentError && (
					<small className="d-block form-text text-danger mt-2">
						Content can't be empty
					</small>
				)}
			</Form.Group>

			<Button variant="primary" type="submit" className="mt-5">
				{actionText}
			</Button>
		</Form>
	);
};

export default PostForm;
