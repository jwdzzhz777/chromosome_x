import React from 'react';
import { UserInfo } from 'types';
import Link from 'next/link';
import { Avatar, Container, Typography } from '@material-ui/core';
import { GitHub, HomeRounded} from '@material-ui/icons';
import 'styles/components/header.less';

export default class Header extends React.Component<{viewer: UserInfo}, {avatar: string}> {
    constructor(props: {viewer: UserInfo}) {
        super(props);
        this.state = {avatar: '/assets/avatar.jpeg'}
        this.toGithub = this.toGithub.bind(this);
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
    toGithub() {
        window.location.href = 'https://github.com/jwdzzhz777';
    }
    render() {
        let { viewer } = this.props as any;
        return (
            <div className="co-header">
                <Container className="banner">
                    <Link href="/home"><HomeRounded className="icon" color="action"/></Link>
                    <GitHub onClick={this.toGithub} className="icon" color="action"/>
                </Container>
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
