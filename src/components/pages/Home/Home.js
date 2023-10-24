import { Button } from 'react-bootstrap';
import Posts from '../../features/Posts/Posts';
import PostAdd from '../PostAdd/PostAdd';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div className="d-flex justify-content-between align-items-center">
				<h1>Home...</h1>
				<Link to={'/post/add'} element={<PostAdd />}>
					<Button variant="outline-success">Add post</Button>
				</Link>
			</div>
			<Posts />
		</div>
	);
};

export default Home;
