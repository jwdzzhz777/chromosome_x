import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { ArticleType } from 'types';

import 'styles/components/listItem.less';

const ListItem: React.SFC<{ article: ArticleType }> = ({ article }) => {
    return (
        <Link href={{pathname: '/article', query: {number: article.issueNumber}}}>
            <a className="co-list-item">
                <Typography className="time">{new Date(+article.publishedAt).toLocaleString()}</Typography>
                <Typography className="title"variant="h6">{article.title}</Typography>
            </a>
        </Link>
    );
};
export default ListItem;
