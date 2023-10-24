import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getPostsById } from '../../../redux/store';

const SinglePost = () => {
	const { id } = useParams();
	const postData = useSelector(state => getPostsById(state, id));

	if (!postData) return <Navigate to={'/'} />;
	return (
		<div>
			<h1>SinglePost... {id}</h1>
		</div>
	);
};

export default SinglePost;
