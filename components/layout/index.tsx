import React from 'react';
import Meta from './meta';
import Header from './header';
import { UserInfo } from 'types';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Snackbar, Container } from '@material-ui/core';

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
    clickHandler() {
        location.href = 'http://www.beian.miit.gov.cn/'
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

        const theme = createMuiTheme({
            typography: {
                htmlFontSize: 10,
            },
        });

        return (
            <ThemeProvider theme={theme}>
                <Meta/>
                <Header viewer={viewer}/>
                <Container>
                    {children}
                </Container>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={1500}
                    onClose={this.snakeClose}
                    onExited={this.snakeExited}
                    open={snakeBar.show}
                    message={snakeBar.message}
                />
                <div className="bt" onClick={this.clickHandler}>
                    浙ICP备20002394号-1
                </div>
                <style jsx global>{`
                    @media (min-width: 600px) {
                        .MuiSnackbarContent-root {
                            min-width: initial!important;
                        }
                    }
                    #__next {
                        padding-buttom: 40px;
                    }
                    div.bt {
                        background: #fafafa;
                        color: #999;
                        position: fixed;
                        bottom: 0;
                        width: 100vw;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        cursor: pointer;
                    }
                `}</style>
            </ThemeProvider>
        )
    }
}
