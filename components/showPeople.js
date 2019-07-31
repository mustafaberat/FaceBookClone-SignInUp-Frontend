import React from 'react';
import { StyleSheet, ScrollView, Text, View} from 'react-native';
import axios from 'axios';
import { Table, Row, Rows} from 'react-native-table-component';


export default class showPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people:[],
            pageTitle: 'Facebook Users',
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

    render() {

        let peopleComponentMap = this.state.people.map((personInformation, personIndex) => {
            return (
                <Rows key={personIndex}
                      data={[[personInformation.name,personInformation.email,"BUTTON","BUTTON"]]}
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
        borderWidth: 4,
        borderColor: 'yellow',
    },

    firstRow : {
        height: 50,
        backgroundColor: '#eee',

    },

    otherRows : {
        height: 30
    }


  });