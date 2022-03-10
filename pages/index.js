import React from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = props => {
	return (
		<>
			<Hero />
			<Head>
				<title>Shah's Blog</title>
				<meta name='description' content='Writing posts about programming and  web development' />
			</Head>
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
