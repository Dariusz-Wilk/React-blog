import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getPostsById } from '../../../redux/store';
import { Button } from 'react-bootstrap';
import EditPost from '../EditPost/EditPost';
import { useState } from 'react';
import OpenModal from '../../features/OpenModal/OpenModal';

const SinglePost = () => {
	const { id } = useParams();
	const postData = useSelector(state => getPostsById(state, id));

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	if (!postData) return <Navigate to={'/'} />;
	return (
		<div>
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1>{postData.title}</h1>
				<div className="buttons">
					<Link to={`/post/edit/${id}`} element={<EditPost />}>
						<Button variant="outline-info">Edit</Button>
					</Link>
					<Button
						variant="outline-danger"
						className="ms-3"
						onClick={handleShow}>
						Delete
					</Button>
				</div>
			</div>
			<p className="mb-1">
				<b>Author: </b>
				{postData.author}
			</p>
			<p className="mb-1">
				<b>Published: </b>
				{postData.publishedDate}
			</p>
			<p>
				<b>Category: </b>
				{postData.category}
			</p>
			<article dangerouslySetInnerHTML={{ __html: postData.content }}></article>

			<OpenModal show={show} handleClose={handleClose} id={id} />
		</div>
	);
};

export default SinglePost;
