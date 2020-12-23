import '../styles/globals.css'
import React from "react";

export default class MyApp extends React.Component<{ Component, pageProps }, any> {
    render() {
        const Component = this.props.Component;
        const pageProps = this.props.pageProps;

        return <Component {...pageProps} />
    }
}
