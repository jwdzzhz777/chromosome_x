import React from 'react';
import Meta from './meta';
import Header from './header';
import { UserInfo } from 'types';
import Snackbar from '@material-ui/core/Snackbar';

export default class Layout extends React.Component<{viewer?: UserInfo, error?: string}, any> {
    constructor(props: {viewer?: UserInfo, error?: string}) {
        super(props);
        this.state = {
            snakeBar: {
                show: false,
                message: ''
            }
        };
        this.snakeClose = this.snakeClose.bind(this);
        this.snakeExited = this.snakeExited.bind(this);
    }
    componentDidMount() {
        const { error } = this.props;
        if (error) {
            this.setState({
                snakeBar: {
                    show: true,
                    message: error
                }
            });
        }
    }
    snakeClose() {
        this.setState({
            snakeBar: Object.assign({}, this.state.snakeBar, {show: false})
        });
    }
    snakeExited() {
        this.setState({snakeBar: {message: '', show: false}});
    }
    render() {
        const { children, viewer } = this.props;
        const { snakeBar } = this.state;
        return (
            <>
                <Meta/>
                <Header viewer={viewer}/>
                {children}
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={1500}
                    onClose={this.snakeClose}
                    onExited={this.snakeExited}
                    open={snakeBar.show}
                    message={snakeBar.message}
                />
                <style jsx global>{`
                    @media (min-width: 600px) {
                        .MuiSnackbarContent-root {
                            min-width: initial!important;
                        }
                    }
                `}</style>
            </>
        )
    }
}
