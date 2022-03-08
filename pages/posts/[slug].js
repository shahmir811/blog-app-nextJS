import React from 'react';
import PostContent from '../../components/post/post-detail/post-content';
import { getPostsFiles, getPostData } from '../../lib/posts-util';

const PostDetailPage = props => {
	return <PostContent post={props.post} />;
};

export function getStaticProps(ctx) {
	const { params } = ctx;
	const { slug } = params;

	const postData = getPostData(slug);
	return {
		props: { post: postData },
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const postFilenames = getPostsFiles();

	const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

	return {
		paths: slugs.map(slug => ({ params: { slug: slug } })),
		fallback: false,
	};
}

export default PostDetailPage;
