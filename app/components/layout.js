import React from 'react';
import Header from './header';
import Footer from './footer';
import css from './layout.module.styl';

class Layout extends React.Component {
	render() {
		const props = this.props;

		return (
			<div className={css.container}>
				<Header path={props.path} />
				<section className={[css.body, props.className].join(` `)}>
					{props.children}
				</section>
				<Footer />
			</div>
		);
	}
}

export default Layout;
