import React, { Component, PropTypes } from 'react';
import { ScrollView, Platform } from 'react-native';

import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  handleThemesPress = () => {
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
    console.log('press site');
  };

  render() {
    return (
      <ScrollView>
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
        />
        <Separator />
        <ListItem
          text="Site"
          onPress={this.handleSitePress}
        />
      </ScrollView>
    );
  }
}

export default Options;
