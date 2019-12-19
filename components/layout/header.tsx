import React from 'react';
import { UserInfo } from 'types';
import { Avatar, Container, Typography } from '@material-ui/core';
import 'styles/components/header.less';

export default class Header extends React.Component<{viewer: UserInfo}, {avatar: string}> {
    constructor(props: {viewer: UserInfo}) {
        super(props);
        this.state = {avatar: props.viewer ? props.viewer.a_s : ''}
    }
    componentDidMount() {
        let { viewer } = this.props;
        if (!viewer) return;

        let img = new Image();
        img.onload = () => {
            this.setState({avatar: viewer.avatarUrl});
        }
        img.src = viewer.avatarUrl;
    }
    render() {
        let { viewer } = this.props as any;
        return (
            <div className="co-header">
                <div className="banner">
                    <div></div>
                    <Typography>blog</Typography>
                    <div></div>
                </div>
                <Container>
                    <Avatar className="avatar" srcSet={this.state.avatar}></Avatar>
                    {
                        viewer && <div className="info">
                            <Typography>{viewer.name}</Typography>
                            <Typography>{viewer.bio}</Typography>
                        </div>
                    }
                </Container>
            </div>
        )
    }
}
