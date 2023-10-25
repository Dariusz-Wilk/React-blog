import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getPostsById } from '../../../redux/store';
import { Button } from 'react-bootstrap';
import EditPost from '../EditPost/EditPost';

const SinglePost = () => {
	const { id } = useParams();
	const postData = useSelector(state => getPostsById(state, id));
	console.log(postData);

	if (!postData) return <Navigate to={'/'} />;
	return (
		<div>
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1>{postData.title}</h1>
				<div className="buttons">
					<Link to={`/post/edit/${id}`} element={<EditPost />}>
						<Button variant="outline-info">Edit</Button>
					</Link>
					<Button variant="outline-danger" className="ms-3">
						Delete
					</Button>
				</div>
			</div>
			<p className="mb-1">
				<b>Author: </b>
				{postData.author}
			</p>
			<p>
				<b>Published: </b>
				{postData.publishedDate}
			</p>
			<article>{postData.content}</article>
		</div>
	);
};

export default SinglePost;
