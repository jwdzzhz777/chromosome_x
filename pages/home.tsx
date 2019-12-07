import { NextPage } from 'next';
import 'styles/pages/home.less';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <div>
        <p>Hello world! - user agent: {userAgent}</p>
    </div>
);

Home.getInitialProps = async ({req}) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default Home;
