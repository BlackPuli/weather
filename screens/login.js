/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center' }}>Name:</Text>
                <TextInput keyboardType="email-address" value={this.state.email} onChangeText={text => { this.setState({ email: text }); }} />
                <Button onPress={() => { navigate('Home', { name: this.state.email }); }} title="Login" />
            </View>
        );
    }
}
