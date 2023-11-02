import PostForm from '../PostForm/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { getPostsById } from '../../../redux/store';
import { editPost } from '../../../redux/postsRedux';
import { createDateFromView } from '../../../utils/createDateToView';

const EditPostForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	const postData = useSelector(state => getPostsById(state, id));
	if (!postData) return <Navigate to={'/'} />;

	const handleSubmit = post => {
		dispatch(editPost(post));
		navigate('/');
	};

	return (
		<PostForm
			id={id}
			action={handleSubmit}
			actionText="Edit post"
			postTitle={postData.title}
			postAuthor={postData.author}
			postPublishedDate={new Date(createDateFromView(postData.publishedDate))}
			postDescription={postData.shortDescription}
			postMainContent={postData.content}
			postCategory={postData.category}
		/>
	);
};

export default EditPostForm;
