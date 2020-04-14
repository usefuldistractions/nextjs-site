import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../../components/layout';
import css from './[slug].module.styl';

class Index extends React.Component {
	static async getInitialProps(context) {
		const { slug } = context.query;
		const path = context.asPath;
		return { slug, path };
	}
	render() {
		const { slug, path } = this.props;

		return (
			<Layout path={path} className={css.container}>
				<h1>Dynamic Example</h1>
				<h2>
					Passed slug: <em>{slug}</em>
				</h2>
			</Layout>
		);
	}
}

export default withRouter(Index);
