import React from 'react';
import 'styles/components/header.less';
import { UserInfo } from 'types';

export default class Header extends React.Component<{viewer: UserInfo}> {
    render() {
        return (
            <>
                <div className="banner"></div>
            </>
        )
    }
}
