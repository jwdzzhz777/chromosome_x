import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        // 可以包装 app 为高阶组件
        // const originalRenderPage = ctx.renderPage;
        // ctx.renderPage = () => {
        //     return originalRenderPage({
        //         enhanceApp: App => props => <App {...props}/>
        //     });
        // }
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html>
                <Head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/github.min.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
