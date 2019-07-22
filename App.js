import React from 'react';
import { StyleSheet, Button, Text, View , TouchableOpacity} from 'react-native';
import { TextInput, RectButton } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
    
  }

  ardacik=()=>{
    alert("INSIDE");
  }

  render() {
    return (
      <View style={{flex: 1,backgroundColor:'#3b5999'} }>
      <View style={styles.titleArea}>
        <Text style={styles.facebookTitle}>facebook</Text>
      </View>
      
        <View style={styles.inputsArea}>
          <TextInput placeholder={"Email or phone number"} style={styles.inputEmailorPhone}></TextInput>          

          <TextInput placeholder={"Password"} secureTextEntry={true} style={styles.inputPassword} ></TextInput>
      </View>

      <View style={styles.logInButtonArea}>
            <TouchableOpacity style={styles.buttonTouchableOpacity}>
                <Text style={styles.buttonText} onPress={this.ardacik}>
                    Log In
                </Text>
            </TouchableOpacity>
      </View>

    <View style={styles.signUpArea}>
      <TouchableOpacity style={styles.signUpArea}>
              <Text style={styles.signUpText}>
                Sign Up for Facebook
              </Text>
          </TouchableOpacity>
    </View>

    </View>
    );
  }
}





const styles = StyleSheet.create({
  titleArea: {
    height: 220,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  facebookTitle: {
    color: '#fefffb',
    fontSize: 54,
    alignItems: 'flex-end',
    textTransform: 'lowercase',
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  inputsArea: {
    height: 120,
    alignItems: 'center',    
  },

  inputEmailorPhone: {
    width: '90%',    
    height: 60,
    fontSize: 18,
    backgroundColor: '#fefffb',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: .9,
    borderBottomColor: '#ddd',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },

  inputPassword: {
    width: '90%',
    height: 60,
    fontSize: 18,
    backgroundColor: '#fefffb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    color: '#333',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },

  logInButtonArea:{
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  
  buttonText : {
    fontSize: 22,
    color: '#d9e8fb',
  },

  buttonTouchableOpacity : {
    flex: 1,   
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E78B6',
    borderRadius: 4,
  },

  signUpArea : {
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpText : {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
  },

});
