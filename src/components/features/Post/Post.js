import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Post = props => {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title className="h4">{props.title}</Card.Title>
				<Card.Text className="mb-1">
					<b>Author: </b> {props.author}
				</Card.Text>
				<Card.Text className="mb-1">
					<b>Published: </b> {props.publishedDate}
				</Card.Text>
				<Card.Text className="mb-1">
					<b>Category: </b> {props.category}
				</Card.Text>
				<Card.Text className="my-3">{props.shortDescription}</Card.Text>
				<Link to={'/post/' + props.id}>
					<Button variant="primary">Read more...</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default Post;
