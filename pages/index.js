import React from 'react';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = props => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
};

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default HomePage;
