import { Form, Button } from 'react-bootstrap';
import styles from './PostForm.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { dateToStr } from '../../../utils/dateToStr';

const PostForm = ({
	id,
	action,
	actionText,
	titlee = '',
	authorr = '',
	publishedDatee = new Date(),
	descriptionn = '',
	mainContentt = '',
}) => {
	const [formData, setFormData] = useState({
		title: titlee,
		author: authorr,
		publishedDate: publishedDatee,
		description: descriptionn,
		mainContent: mainContentt,
	});
	const [content, setContent] = useState(mainContentt);
	const [startDate, setStartDate] = useState(publishedDatee);

	const postArrLength = useSelector(state => state.posts.length);
	const newPostId = postArrLength + 1 + '';

	const handleSubmit = e => {
		e.preventDefault();
		action({
			id: actionText === 'Edit post' ? id : newPostId,
			title: formData.title,
			author: formData.author,
			publishedDate: dateToStr(startDate),
			shortDescription: formData.description,
			content: content,
		});
	};

	console.log(new Date(startDate));

	return (
		<Form className="mt-4" onSubmit={handleSubmit}>
			<Form.Group className="mb-3">
				<Form.Label>Title:</Form.Label>
				<Form.Control
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
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Author:</Form.Label>
				<Form.Control
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
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Published:</Form.Label>
				{<br></br>}
				<DatePicker
					selected={startDate}
					onChange={date => setStartDate(date)}
					dateFormat={`dd/MM/yyy`}
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Short description:</Form.Label>
				<Form.Control
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
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Main content:</Form.Label>
				<ReactQuill
					className={styles.textareaMain}
					value={content}
					onChange={setContent}
					placeholder="Enter post content..."
				/>
			</Form.Group>

			<Button variant="primary" type="submit" className="mt-5">
				{actionText}
			</Button>
		</Form>
	);
};

export default PostForm;
