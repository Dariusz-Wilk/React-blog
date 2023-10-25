import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/store';
import Post from '../Post/Post';

const Posts = () => {
	const posts = useSelector(state => getAllPosts(state));
	console.log(posts);

	return (
		<ul className="d-flex flex-wrap justify-content-start p-0 my-4">
			{posts.map(post => (
				<Post key={post.id} {...post} />
			))}
		</ul>
	);
};

export default Posts;
