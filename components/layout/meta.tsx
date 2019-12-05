import Head from 'next/head'
import React from 'react';
import 'styles/global.less';

export default () => {
    return (
        <>
            <Head>
                <title>chromosome</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                /** Roboto 字体 */
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>
            <style jsx global>{`

            `}</style>
        </>
    )
}
