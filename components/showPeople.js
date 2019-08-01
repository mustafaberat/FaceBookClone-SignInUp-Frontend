import React from 'react';
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import axios from 'axios';
import { Table, Row, Rows} from 'react-native-table-component';

export default class showPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people :[],
            pageTitle : 'Facebook Users',
            tableTitles : ['Name','Email','Details','Delete'],
         };
         this.getPeople();
    }

    getPeople = () => {
     axios.get('http://10.222.110.26:8080/people')
    .then(obj => {
      this.setState (
          {people: [...obj.data]});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  detailsButton=(personInformation)=>{
    return (
        <Text style={[styles.detailsButtonText, styles.detailsAndDeleteButton]}
        onPress={()=>{
            console.log("Person ID: " + personInformation.id + '\n' +
            "Name: " + personInformation.name + '\n' +
            "Surname: "+ personInformation.surname + '\n'+
            "Email: " + personInformation.email + '\n' +
            "Password: " + personInformation.password)

            alert("Person ID: " + personInformation.id + '\n' +
            "Name: " + personInformation.name + '\n' +
            "Surname: "+ personInformation.surname + '\n'+
            "Email: " + personInformation.email + '\n' +
            "Password: " + personInformation.password)}
        }>
          X
        </Text>
    )
  }


  deleteButton=(personInformation)=>{
    return (
        <Text style={[styles.deleteButtonText, styles.detailsAndDeleteButton]}
        onPress={()=>this.deletePersonById(personInformation.id)}>
          X
        </Text>
    )
  }

  deletePersonById = (id) => {
        axios.delete('http://10.222.110.26:8080/people/' + id)
  }

    render() {

        let peopleComponentMap = this.state.people.map((personInformation, personIndex) => {
            return (
                <Rows key={personIndex}
                      data={[
                          [personInformation.name,
                            personInformation.email,
                            this.detailsButton(personInformation),
                            this.deleteButton(personInformation),]
                        ]}
                      style={styles.otherRows}>
                </Rows>
            );
        });

        let title = (
            <View style={styles.titleArea}>
                <Text style={styles.titleText}>
                    {this.state.pageTitle}
                </Text>
            </View>
        );

        let content = (
            <View style={styles.generalTableView}>
                <Table style={styles.generalTableTable}>
                    <Row data={this.state.tableTitles} style={styles.firstRow}></Row>
                    {peopleComponentMap}
                </Table>
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
        backgroundColor: '#ddd',
        // textAlign: 'center'
    },

    generalTableTable : {
        flex: 1,
        width : '100%',
    },

    firstRow : {
        height: 50,
        backgroundColor: '#eee',

    },

    otherRows : {
        height: 50,
        // cursor: 'pointer',
    },

    detailsAndDeleteButton : {
        display: 'flex',
        textAlign: 'center',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontWeight: 'bold',
    },

    detailsButtonText : {
        backgroundColor: 'yellow',
    },

    deleteButtonText : {
        backgroundColor: 'red',
    },


  });