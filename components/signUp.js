import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class signUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpName: '',
      signUpSurname: '',
      signUpEmail : '',
      signUpPassword : '',
      signUpPasswordConfirm : '',
     };

     this.handleChangeName = this.handleChangeName.bind(this);
     this.handleChangeSurname = this.handleChangeSurname.bind(this);
     this.handleChangeEmail = this.handleChangeEmail.bind(this);
     this.handleChangePassword = this.handleChangePassword.bind(this);
     this.handleChangePasswordConfirm = this.handleChangePasswordConfirm.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName=(event)=>{
    this.setState({
      signUpName: event.target.value,
    });
  }

  handleChangeSurname=(event)=>{
    this.setState({
      signUpSurname: event.target.value,
    });
  }

  handleChangeEmail=(event)=>{
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  handleChangePassword=(event)=>{
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  handleChangePasswordConfirm=(event)=>{
    this.setState({
      signUpPasswordConfirm: event.target.value,
    });

  }

  handleSubmit=(event)=>{

    if(this.checkMyNameAndSurname()){ //True name and surname
      if(this.state.signUpEmail.includes('@' && '.')){ //CORRECT EMAIL
        this.fixBorder('signUpEmail');
        console.log('Correct Email');
        if(this.checkMyPassword()){ //CORRECT PASSWORD
        this.fixBorder('signUpPassword');
        console.log('Correct Password');
          if(this.state.signUpPassword === this.state.signUpPasswordConfirm){
            this.fixBorder('signUpPasswordConfirm');
            console.log('Correct Password Confirm');
            console.log("Everything is fine!");
          }
          else{ //INCORRECT PASSWORD CONFIRM
            this.borderAndFocus('signUpPasswordConfirm');
            console.log("Not correct confirm password");
          }
        }
        else{ //INCORRECT PASSWORD
          document.getElementById('textInputPassword').style.border= 'red';
          console.warn("Incorect password. Make BORDER!")
        }
      }
      else{ //INCORRECT EMAIL
        console.warn("Incorect email.");
        this.borderAndFocus('signUpEmail');
      }
      console.log(this.state);
    }

  }

  exactMatch = (reg, str) =>{
    var match = str.match(reg);
    return match[0] === str;
  }

  checkMyNameAndSurname = () => {
    if(this.checkNullOrSpace(this.state.signUpName)){ //Name not includes space or null
      var nameRegex = new RegExp("[A-Za-z]+");
      var Boolname = false;
      if(this.exactMatch(nameRegex,this.state.signUpName)){
        Boolname = true;
        this.fixBorder('textInputName');
        console.log("Correct name")
      }
      else{ //Wrong name
        this.borderAndFocus('textInputName');
        console.log("Wrong Name");
        return ;
      }

      if(this.checkNullOrSpace(this.state.signUpSurname)){ //Surname not includes space or null
        var Boolsurname = false;
        if(this.exactMatch(nameRegex,this.state.signUpSurname)){
          Boolsurname = true;
          this.fixBorder('textInputSurname');
          console.log("Correct Surname");
        }
        else { //Wrong surname
          this.borderAndFocus('textInputSurname');
          console.log("Wrong surname");
          return ;
        }

        // Boolname == false
        // ? document.getElementById('signUpName').style.border = '4px solid red'
        // : document.getElementById('signUpName').style.border = '4px solid blue';
        if(Boolname == false && Boolsurname==false){
          console.log("Name or surname are broken");
          return false;
        }
        else{ //Name and surname are fine
          console.log("Name and surname are greate!");
          return true;
        }
      } else { //Surname includes space or null
        this.borderAndFocus('textInputSurname');
        console.log("Border And Focus Surname");
      }
    } else{ //Name includes space or null
      this.borderAndFocus('textInputName');
      console.log("Border And Focus Name");
    }
  }

  checkNullOrSpace=(checkThat)=>{
    if(checkThat === "" || checkThat.includes(' ')
    || checkThat.includes(
      0 || 1 || 2 ||
      3 || 4 || 5 ||
      6 || 7 || 8 ||
      9 ))
    return false
    else return true;
  }

  checkMyPassword = () => {
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if(this.exactMatch(mediumRegex, this.state.signUpPassword)){
      //True password type
      console.log("True type password");
      return true;
    } else{
      //False password type
      // alert("Password need to at least 1 lowercase, 1 uppercase and 1 numeric");
      this.borderAndFocus('signUpPassword');
      console.log("Password need to at least 1 lowercase, 1 uppercase and 1 numeric");
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
      <View style={{flex: 1,backgroundColor:'#3b5999'} }>
      <View style={styles.titleArea}>
        <Text style={styles.facebookTitle}>facebook</Text>
      </View>

        <View style={styles.inputArea}>
            <View style={styles.nameAndSurname}>
                <TextInput id={'textInputName'} className={'signUpName'} placeholder={"Name"}
                          style={styles.inputNameSurname} onChange={this.handleChangeName}></TextInput>
                <TextInput id={'textInputSurname'} className={'signUpSurname'} placeholder={"Surname"}
                          style={styles.inputNameSurname} onChange={this.handleChangeSurname}></TextInput>
            </View>

          <TextInput id={'signUpEmail'} className={'signUpnEmail'} placeholder={"Email"}
                      style={styles.inputEmailorPhone} onChange={this.handleChangeEmail}></TextInput>
          <TextInput id={'signUpPassword'} className={'signUpEmail'} placeholder={"Password"}
                      secureTextEntry={true} style={styles.inputPassword}
                      onChange={this.handleChangePassword}></TextInput>

          <TextInput id={'signUpPasswordConfirm'} className={'signUpPassword'} placeholder={"Confirm Password"}
                      secureTextEntry={true} style={styles.inputPassword}
                      onChange={this.handleChangePasswordConfirm}></TextInput>

        </View>
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.buttonTouchableOpacity}>
                <Text style={styles.buttonText} onPress={this.handleSubmit}>
                    Sign Up
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
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },

  inputArea : {
    alignItems: 'center',
    marginTop: 20,
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
    borderRadius: 4,
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
    borderRadius: 4,
    marginBottom: 10,
  },

  inputPassword: {
    width: '90%',
    height: 50,
    fontSize: 18,
    backgroundColor: '#fefffb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    color: '#333',
    borderRadius: 4,
    marginBottom: 10,
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
    marginTop: 30,
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E78B6',
    borderRadius: 4,
  },

});