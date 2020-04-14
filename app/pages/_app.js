import React from 'react';
import '../styles/_shared.styl';
import '../styles/global.styl';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
