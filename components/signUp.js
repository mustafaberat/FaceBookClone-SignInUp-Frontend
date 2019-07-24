import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class signUp extends React.Component {
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
        document.getElementById('textInputEmail').style.border= '1px solid #ddd';

      if(this.checkMyPassword()){ //CORRECT PASSWORD
        console.log("Everything is fine!");
      }
      else{ //INCORRECT PASSWORD
          document.getElementById('textInputPassword').style.border= 'red';
          console.warn("Incorect password. Make BORDER!")
        } 
    }
    else{ //INCORRECT EMAIL
        document.getElementById('textInputEmail').style.border= '1px solid red';
        document.getElementById('textInputEmail').focus();
        console.warn("Incorect email. Make BORDER!")
    } 
     console.log(this.state);
  }

  checkMyPassword = () => {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(strongRegex.test(this.state.singInPassword)){
      //True password type
      console.log("True password");
      return true;
    }else{
      //False password type
      console.log("Wrong password");
      return false;
    }
    
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
      
        <View style={styles.inputArea}>
            <View style={styles.nameAndSurname}>
                <TextInput id={'textInputName'} className={'signUpName'} placeholder={"Name"} style={styles.inputNameSurname} onChange={this.handleChangeEmail}></TextInput>          
                <TextInput id={'textInputSurname'} className={'signUpSurname'} placeholder={"Surname"} style={styles.inputNameSurname} onChange={this.handleChangeEmail}></TextInput>          
            </View>

          <TextInput id={'textInputEmail'} className={'singInEmail'} placeholder={"Email or phone number"} style={styles.inputEmailorPhone} onChange={this.handleChangeEmail}></TextInput>          
          <TextInput id={'textInputEmail'} className={'singInEmail'} placeholder={"Email or phone number"} style={styles.inputEmailorPhone} onChange={this.handleChangeEmail}></TextInput>          

          <TextInput id={'textInputPassword'} className={'singInPassword'} placeholder={"Password"} secureTextEntry={true} style={styles.inputPassword} onChange={this.handleChangePassword}></TextInput>

        </View>
            <TouchableOpacity style={styles.buttonTouchableOpacity}>
                <Text style={styles.buttonText} onPress={this.handleSubmit}>
                    Log In
                </Text>
            </TouchableOpacity>

    </View>
    );
  }
}








//CSS
const styles = StyleSheet.create({
  titleArea: {
    height: 120,
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

  nameAndSurname: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
  },

  inputArea : {
    backgroundColor: 'red',
    alignItems: 'center',
  },    

  inputNameSurname: {
    width: '40%',
    height: 50,
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

  inputEmailorPhone: {
    width: '90%',    
    height: 50,
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

});