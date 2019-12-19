import React from 'react';
import { NextPage } from 'next';
import fetch, { ARTICLE } from 'api';
import 'styles/pages/article.less';
import Highlight from 'react-highlight';
import marked from 'marked';
import Head from 'next/head'
import 'github-markdown-css/github-markdown.css';

interface ArticleContext {
    id: string;
    body: string;
}

const Article: NextPage<{ article: ArticleContext }> = ({ article }) => {
    const a = React.forwardRef((props: any, ref: any) => <article {...props} className="markdown-body" ref={ref}>{props.children}</article>);
    return (
        <div className="pg-article">
            <Head>
                <link rel="stylesheet" href="/node_modules/github-markdown-css/github-markdown.css"/>
            </Head>
            <Highlight element={a} innerHTML>{marked(article.body)}</Highlight>
        </div>
    );
}
Article.getInitialProps = async ({ query }): Promise<{ article: ArticleContext }> => {
    let [article] = await fetch(`${ARTICLE}?number=${query.number}`);
    return { article };
};

export default Article;
