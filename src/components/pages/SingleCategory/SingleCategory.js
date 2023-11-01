import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Post from '../../features/Post/Post';
import { filterPostsByCategories } from '../../../redux/store';

const SingleCategory = () => {
	const { category } = useParams();

	const categoryPosts = useSelector(state =>
		filterPostsByCategories(state, category)
	);

	return (
		<div>
			<h1 className="mb-4">Category {category} </h1>
			<div className="d-flex">
				{categoryPosts.map(post => (
					<Post key={post.id} {...post} />
				))}
			</div>
		</div>
	);
};

export default SingleCategory;
