import React, {Component} from 'react';
import {Text, View, SafeAreaView, Button} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex:1}}>
        <SafeAreaView>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:2}}>
              <Button title="Menu" onPress={() => navigation.openDrawer()} />
            </View>
            <View style={{flex: 5, alignItems: 'center', alignSelf: 'center'}}>
              <Text>Weather App</Text>
            </View>
            <View style={{flex: 2}} />
          </View>
          <View>
            <Text>Hola {navigation.getParam('name', 'NO NAME')}</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
