import App from 'next/app';
import Layout from 'components/layout/index';

import fetch, { USER_DATA } from 'api';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps? await Component.getInitialProps(ctx) : {};
        let [data, error] = await fetch(USER_DATA);
        return { pageProps: {...pageProps, viewer: data}, error: error.message || error.msg || '' };
    }
    render() {
        const { Component, pageProps, error } = this.props as any;
        return (
            <Layout error={error} viewer={pageProps.viewer}>
                <Component {...pageProps} />
            </Layout>
        );
    }
}
