// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        art explorer
      </Text>
      <Text style={styles.subtitle}>
        powered by Hardward Art Museum
      </Text>
    </View>
  );
};

Header.propTypes = {};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 18,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7'
  },
  logo: {
    color: '#4285f4',
    fontSize: 24
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d'
  }
})