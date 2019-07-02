import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator ,TextInput} from 'react-native'
import { connect } from 'react-redux'
import { createAction, NavigationActions } from '../utils'
import { Button,Touchable } from '../components'
@connect(({ app }) => ({ ...app }))
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        phone: '',
        isCanLogin: false
    };
}
  static navigationOptions = {
    title: 'Login',
  }

  onLogin = () => {
    //this.props.dispatch(createAction('app/login')())
    this.props.dispatch(NavigationActions.navigate({ routeName: 'lists' }))
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render() {
    const { fetching } = this.props
    return (
      <View style={styles.container}>
        {fetching ? (
          <ActivityIndicator />
        ) : (
          <View>
          
            <TextInput
            placeholder="请填写昵称"
            style={styles.btn}
            onChangeText={(text) => this.setState({text})}
            value={this.state.name}
          />
           <TextInput
            placeholder="请填写密码"
            style={styles.btn}
            password={true}
            onChangeText={(text) => this.setState({text})}
            value={this.state.phone}
          />
            <Button text="Login" onPress={this.onLogin} />
          </View>
        )}
        {!fetching && (
          <Touchable style={styles.close} text="Close" onPress={this.onClose}>
            <Text>Close</Text>
          </Touchable>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    right: 20,
    top: 40,
  },
  btn: {
    marginBottom:10,
    borderWidth:0.8,
    width:200,
    height:32
  }
})

export default Login
