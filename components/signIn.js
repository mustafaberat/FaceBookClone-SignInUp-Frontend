import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        singInEmail : '',
        singInPassword : '',
     };
      
     this.handleChangeEmail = this.handleChangeEmail.bind(this);
     this.handleChangePassword = this.handleChangePassword.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail=(event)=>{
    this.setState({
      singInEmail: event.target.value,
    });
  }

  handleChangePassword=(event)=>{
    this.setState({
      singInPassword: event.target.value,
    });
  }

  handleSubmit=(event)=>{
    if(this.state.singInEmail.includes('@' && '.')){ //CORRECT EMAIL
      if(this.state.singInPassword.checkMyPassword()){ //CORRECT PASSWORD
        console.log("Everything is fine!");
      }
      else{console.error("Incorect password. Make BORDER!")} //INCORRECT PASSWORD
    }
    else{ console.error("Incorect email. Make BORDER!")} //INCORRECT EMAIL
     console.log(this.state);
  }

  checkMyPassword = () => {
    return true
    // let totalScore = 0; 
    // let myPassword = this.state.singInPassword;
    // let lowerCaseLetters = /[a-z]/g;
    // let upperCaseLetters = /[A-Z]/g;
    // let numbers = /[0-9]/g;
    // console.log("My password size: " + myPassword.size + '\n' +
    // "My password length: " + myPassword.length)
    // return true;
  }


  render() {
    return (
      <View style={{flex: 1,backgroundColor:'#3b5999'} }>
      <View style={styles.titleArea}>
        <Text style={styles.facebookTitle}>facebook</Text>
      </View>
      
        <View style={styles.inputsArea}>
          <TextInput className={'singInEmail'} placeholder={"Email or phone number"} style={styles.inputEmailorPhone} onChange={this.handleChangeEmail}></TextInput>          

          <TextInput className={'singInPassword'} placeholder={"Password"} secureTextEntry={true} style={styles.inputPassword} onChange={this.handleChangePassword}></TextInput>
        </View>

      <View style={styles.logInButtonArea}>
            <TouchableOpacity style={styles.buttonTouchableOpacity}>
                <Text style={styles.buttonText} onPress={this.handleSubmit}>
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








//CSS
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
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
