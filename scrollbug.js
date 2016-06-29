/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SwipeableQuickActions from 'SwipeableQuickActions'
import SwipeableQuickActionButton from 'SwipeableQuickActionButton'
import SwipeableListView from 'SwipeableListView'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class scrollbug extends Component {
  constructor (props) {
      super(props)
      this.state = {
          dataSource: SwipeableListView.getNewDataSource()
      }
  }
  renderRow (rowData) {
        return (
              <View>
                <View style={{flexDirection: 'row',backgroundColor: '#CCC', justifyContent: 'center', margin: 5, height: 50}}>
                  <Text>{rowData}</Text>
                </View>
            </View>
          )
  }
  renderQuickActions (rowData) {
        return (
              <SwipeableQuickActions style={{margin: 5}}>
                <View style={{width: 100, backgroundColor: 'yellow'}}><Text>asf</Text></View>
              </SwipeableQuickActions>
        )
  }
  render() {
    let dataSource = this.state.dataSource.cloneWithRowsAndSections({s1: [
      'Test1',
      'Test2',
      'Test3',
      'Test4',
      'Test5',
      'Test6',
      'Test7',
      'Test8',
      'Test9',
      'Test10',
      'Test11',
      'Test12',
      'Test13',
      'Test14',
      'Test15',
      'Test16',
      'Test17',
      'Test18',
      'Test19'
    ]})
    return (
      <View style={styles.container}>

        <SwipeableListView 
                maxSwipeDistance={100}
                removeClippedSubviews={false}
          renderRow={this.renderRow.bind(this)} 
          renderQuickActions={this.renderQuickActions.bind(this)} 
          dataSource={dataSource}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});

export default scrollbug;
