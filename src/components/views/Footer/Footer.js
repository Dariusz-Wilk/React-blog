const Footer = () => {
	const year = new Date().getFullYear().toString().slice(2);
	return (
		<div>
			<p className="text-secondary text-center py-3 mt-3">
				Copyright © BlogApp '{year}
			</p>
		</div>
	);
};

export default Footer;
