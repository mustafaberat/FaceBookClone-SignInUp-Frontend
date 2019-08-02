import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import portFinder from './portFinder';

export default class signIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        signInEmail : '',
        signInPassword : '',
     };

     this.handleChangeEmail = this.handleChangeEmail.bind(this);
     this.handleChangePassword = this.handleChangePassword.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkInformations = () => {
    axios.post( portFinder.getBackEndUrl() + '/signIn', {
      email: this.state.signInEmail,
      password: this.state.signInPassword,
    })
    .then(function (response) {
        if (response.data == 'Correct'){ //Correct informations
            document.getElementById('signInPassword').style.border= '1px solid #ddd';
            document.getElementById('signInEmail').style.border= '1px solid #ddd';
            console.log("Welcome to facebook"); //For looking is that correct
            //GO TO ANOTHER PAGE
        } else if(response.data == 'FailEmail') { //Not correct email
            document.getElementById('signInEmail').style.border= '1px solid red';
            document.getElementById('signInEmail').focus();
        } else if(response.data == 'FailPassword') { //Not correct password
            document.getElementById('signInPassword').style.border= '1px solid red';
            document.getElementById('signInPassword').focus();
        }
    })
    .catch(function (error) {
      console.log(error);
    });
}

  handleChangeEmail=(event)=>{
    this.setState({
      signInEmail: event.target.value,
    });
  }

  handleChangePassword=(event)=>{
    this.setState({
      signInPassword: event.target.value,
    });
  }

  handleSubmit=(event)=>{
    if(this.state.signInEmail.includes('@') && this.state.signInEmail.includes('.')){ //CORRECT EMAIL
      this.fixBorder('signInEmail');
      if(this.checkMyPassword()){ //CORRECT PASSWORD
        this.fixBorder('signInPassword');
        this.checkInformations();
      }
      else{this.borderAndFocus('signInPassword');} //INCORRECT PASSWORD
    }
    else{ this.borderAndFocus('signInEmail');} //INCORRECT EMAIL
  }

  checkMyPassword = () => {
    var upperLetterRegex = new RegExp("[A-Z]");
    var lowerLetterRegex = new RegExp("[a-z]");
    var numberRegex = new RegExp("[0-9]");
    if(this.state.signInPassword.match(upperLetterRegex) &&
    this.state.signInPassword.match(lowerLetterRegex) &&
    this.state.signInPassword.match(numberRegex) &&
    this.state.signInPassword.length >= 6){ //True password type
      this.fixBorder('signInPassword');
      return true;
    }else{ //False password type
      this.borderAndFocus('signInPassword');
      return false;
    }
  }

  borderAndFocus = (idName) => {
    document.getElementById(idName).style.border= '1px solid red';
    document.getElementById(idName).focus();
}

  fixBorder = (idName) => {
    document.getElementById(idName).style.border= '1px solid #ddd';
}

  render() {
    return (
      <View style={{flex: 1,backgroundColor:'#3b5999'}}>
      <View style={styles.titleArea}>
        <Text style={styles.facebookTitle}>facebook</Text>
      </View>

        <View style={styles.inputsArea}>
          <TextInput id={'signInEmail'} className={'signInEmail'} placeholder={"Email or phone number"} style={styles.inputEmailorPhone} onChange={this.handleChangeEmail}></TextInput>

         <TextInput id={'signInPassword'} className={'signInPassword'} placeholder={"Password"} secureTextEntry={true} style={styles.inputPassword} onChange={this.handleChangePassword}></TextInput>
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
