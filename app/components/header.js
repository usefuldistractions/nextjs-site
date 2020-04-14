import React from 'react';
import Link from 'next/link';
import Icon from './icon';
import css from './header.module.styl';

class Header extends React.Component {
	constructor(props) {
		super(props); // call the super-constructor

		this.state = {
			// set up the initial state
			scrolled: false,
		};

		[`handleScroll`].forEach(name => {
			this[name] = this[name].bind(this);
		});
	}

	render() {
		const state = this.state;
		const props = this.props;
		const scrolledClass = state.scrolled ? css.scrolled : css.unscrolled;
		const path = props.path;
		const homeClass = path === `/` ? css.selected : ``;
		const aboutClass = path === `/about` ? css.selected : ``;
		const newClass = path === `/posts/sample` ? css.selected : ``;

		return (
			<div className={[css.container, scrolledClass].join(` `)}>
				<div className={css.background}>
					<Link href="/">
						<a className={css.logo}>
							<Icon icon="evil" className={css.icon} />
							<h1>Hello World</h1>
						</a>
					</Link>
				</div>
				<div className={css.nav}>
					<Link href="/">
						<a className={homeClass}>Home</a>
					</Link>
					<Link href="/about">
						<a className={aboutClass}>About</a>
					</Link>
					<Link href="/posts/sample">
						<a className={newClass}>New</a>
					</Link>
					<a
						href="https://usefuldistractions.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						UD
					</a>
				</div>
			</div>
		);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		this.handleScroll();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		const scrolled = this.state.scrolled;
		const value = window.scrollY > 40;

		if (scrolled !== value) {
			this.setState({
				scrolled: value,
			});
		}
	}
}

export default Header;
