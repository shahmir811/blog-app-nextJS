import React from 'react';
import Head from 'next/head';
import AllPosts from '../../components/post/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const AllPostsPage = props => {
	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta name='description' content='List of all programming-related posts' />
			</Head>
			<AllPosts posts={props.posts} />
		</>
	);
};

export function getStaticProps() {
	const featuredPosts = getAllPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default AllPostsPage;
