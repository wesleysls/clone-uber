import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, Image, KeyboardAvoidingView, TouchableHighlight, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { setEmailField, setPasswordField } from '../actions/AuthActions';

export class Login extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let buttonOpacity = 0.2;
        if (this.props.passwordValid && this.props.emailValid) {
            buttonOpacity = 1;
        }
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <StatusBar backgroundColor='#0A5360' />
                <KeyboardAvoidingView style={styles.keyboardContainer} behavior='padding' enabled>
                    <Text style={styles.header}>Login</Text>
                    <View style={styles.fieldArea}>
                        <Text style={styles.fieldTitle}>E-MAIL</Text>
                        <View style={styles.fieldItemArea}>
                            <TextInput style={styles.fieldItem} value={this.props.email} onChangeText={(text) => this.props.setEmailField(text)} />
                            <View style={styles.fieldItemStatus}>
                                {this.props.emailValid &&
                                    <Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
                                }
                            </View>
                        </View>
                    </View>
                    <View style={styles.fieldArea}>
                        <Text style={styles.fieldTitle}>SENHA</Text>
                        <View style={styles.fieldItemArea}>
                            <TextInput style={styles.fieldItem} value={this.props.password} onChangeText={(text) => this.props.setPasswordField(text)} />
                            <View style={styles.fieldItemStatus}>
                                {this.props.passwordValid &&
                                    <Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
                                }
                            </View>
                        </View>
                    </View>
                    <View style={styles.BArea}>
                        <TouchableHighlight underlayColor={null} onPress={() => { }} style={styles.Btext}>
                            <Text style={styles.BtextInt}>Esqueceu a senha?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={null} onPress={() => { }} style={styles.Btext}>
                            <Text style={styles.BtextInt}>Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>

                    <TouchableHighlight style={[styles.button, { opacity: buttonOpacity }]} onPress={() => { }}>
                        <Text style={styles.textButton}>></Text>
                    </TouchableHighlight>

                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    header: {
        color: '#FFFFFF',
        fontSize: 30,
        marginBottom: 50
    },
    fieldTitle: {
        color: '#FFF',
        fontSize: 16,
    },
    fieldItem: {
        flex: 1,
        fontSize: 17,
        color: '#FFF',
    },
    fieldArea: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFF'
    },
    fieldItemArea: {
        flexDirection: 'row',
        height: 50,
    },
    fieldItemStatus: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fieldItemStatusImg: {
        width: 25,
        height: 25
    },
    keyboardContainer: {
        flex: 1
    },
    button: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 60,
        width: 60,
        borderRadius: 40,
        backgroundColor: '#0A5360',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    BArea:{
        flexDirection:'row',
        paddingRight:50
    },
    Btext:{
        flex:1,
        height:36,
        justifyContent:'center',
        alignItems:'center'
    },
    BtextInt:{
        color:'#fff',
        fontSize:15
    }
});

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        status: state.auth.status,
        password: state.auth.password,
        emailValid: state.auth.emailValid,
        passwordValid: state.auth.passwordValid
    };
}



const LoginConnect = connect(mapStateToProps, { setEmailField, setPasswordField })(Login);
export default LoginConnect;