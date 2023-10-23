import Home from './components/pages/Home/Home';
import PostAdd from './components/pages/PostAdd/PostAdd';
import SinglePost from './components/pages/SinglePost/SinglePost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';

import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import EditPost from './components/pages/EditPost/EditPost';

const App = () => {
	return (
		<Container>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post/add" element={<PostAdd />} />
				<Route path="/post/:id" element={<SinglePost />} />
				<Route path="/post/edit/:id" element={<EditPost />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Container>
	);
};

export default App;
