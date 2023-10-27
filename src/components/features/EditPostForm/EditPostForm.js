import PostForm from '../PostForm/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { getPostsById } from '../../../redux/store';
import { editPost } from '../../../redux/postsRedux';

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
			titlee={postData.title}
			authorr={postData.author}
			publishedDatee={postData.publishedDate}
			descriptionn={postData.shortDescription}
			mainContentt={postData.content}
		/>
	);
};

export default EditPostForm;