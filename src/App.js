import Post from './components/pages/Post/Post';
import PostAdd from './components/pages/PostAdd/PostAdd';
import SinglePost from './components/pages/SinglePost/SinglePost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';

import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Post />} />
				<Route path="/post/add" element={<PostAdd />} />
				<Route path="/post/:id" element={<SinglePost />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</main>
	);
};

export default App;
