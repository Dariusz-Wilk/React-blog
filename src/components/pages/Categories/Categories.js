import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Categories = () => {
	const uniqueCategories = useSelector(
		state => new Set(state.posts.map(post => post.category))
	);

	console.log([...uniqueCategories]);

	return (
		<div>
			{[...uniqueCategories].map(category => (
				<Link
					key={category}
					to={`/categories/${category.toLowerCase()}`}
					className="d-block p-2">
					{category}
				</Link>
			))}
		</div>
	);
};

export default Categories;
