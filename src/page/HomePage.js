import React, { Component } from 'react';
import Layout from './Layout'

export default class componentName extends Component {
    render() {
        return (
            <Layout showTopBar={false} showBottomBar={true}>
                <div>
                    <h3>HomePage</h3>
                </div>
            </Layout>
        );
    }
}