// @flow
import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

type Props = {};
type State = {
  activeLink: string
};
type LINK = {
  id: string,
  label: string
};

const LINKS = [
  {
    id: '__popular__',
    label: 'POPULAR'
  },
  {
    id: '__mylist__',
    label: 'MY LIST'
  },
];
const DEFAULT_LINK = '__popular__';

class Navigation extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeLink: DEFAULT_LINK
    };
    
    (this:any)._renderLinks = this._renderLinks.bind(this);
  }

  _renderLinks(links: Array<Object>) {
    const { activeLink } = this.state;
    return links.map(l => {
      const active = l.id === activeLink;
      
      return (
        <TouchableOpacity style={[styles.link, active && styles.active]}>
          <Text>{l.label}</Text>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={styles.navigation}>
        {
          this._renderLinks(LINKS)
        }
      </View>
    );
  }
}

Navigation.propTypes = {};

export default Navigation;

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    backgroundColor: '#4285f4'
  },
  link: {
    padding: 10,
  },
  active: {
    borderBottom: 1,
    borderColor: '#fff'
  }
});