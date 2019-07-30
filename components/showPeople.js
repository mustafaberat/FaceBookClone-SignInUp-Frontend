import React from 'react';
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import axios from 'axios';

export default class showPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people:[]
         };
    }

    getPeople = () => {
     axios.get('http://10.222.110.26:8080/people')
    .then(function (response) {
      console.log(response)
      this.setState(
          {people: [...Object.data]}
      )
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    render() {
        let peopleComponentMap = this.state.people.map((personInformation, personIndex) => {
            return (
                <tr key={personIndex}>
                    <td>{personInformation.email}</td>
                    <td>{personInformation.password}</td>
                </tr>
            );
        })

        let title = (
            <View style={styles.titleArea}>
                    <Text style={styles.titleText}>
                        Facebook Users
                    </Text>
                </View>
        );

        let content = (
            <View style={styles.generalTableView}>
                <table style={styles.generalTableTable}>
                    <tr style={styles.generalTableTitle}>
                        <thead style={{display: 'flex',justifyContent: 'space-around'}}>
                            <th>Email</th>
                            <th>Password</th>
                        </thead>
                    </tr>
                    <tbody>
                        {/* {peopleComponentMap} */}
                    </tbody>
                </table>
            </View>
        );

        return ( //Return Of Render
            <ScrollView>
                {title}
                {content}
            </ScrollView>
        );
    }
}



//CSS
const styles = StyleSheet.create({
    titleArea: {
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red',
    },

    titleText : {
        color: 'aqua',
        backgroundColor: '#333',
        width: '50%',
        whiteSpace: 'normal',
        textAlign: 'center',
        fontSize: 25,
    },

    generalTableView : {
        flex: 1,
        backgroundColor: 'tomato',
    },


  });