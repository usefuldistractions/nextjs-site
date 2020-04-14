import React from 'react';
import Layout from '../../components/layout';
import css from './index.module.styl';

class Index extends React.Component {
	render() {
		return (
			<Layout path="/about" className={css.container}>
				<h1>About Page</h1>
				<h2>This is another static page.</h2>
			</Layout>
		);
	}
}

export default Index;
