import { NextPage } from 'next';
import 'styles/pages/home.less';
import { Typography } from '@material-ui/core';
import fetch, { ARTICLE_LIST } from 'api';
import { ArticleType } from 'types';
import ListItem from 'components/listItem';

const Home: NextPage<{ articles: ArticleType[] }> = ({ articles }) => {
    const list = articles.map(article => <ListItem article={article}/>);
    return (
        (
            <div className="pg-home">
                <div className="head">
                    <Typography variant="h5">All ArticleTypes</Typography>
                </div>
                {list}
            </div>
        )
    );
};

Home.getInitialProps = async (): Promise<{articles: ArticleType[]}> => {
    let [articles] = await fetch(ARTICLE_LIST);
    return { articles: articles || [] };
};

export default Home;
