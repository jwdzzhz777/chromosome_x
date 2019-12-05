import React from 'react';
import Meta from './meta';

export default class Layout extends React.Component {
    render() {
        const { children } = this.props
        return (
            <>
                <Meta/>
                {children}
            </>
        )
    }
}
