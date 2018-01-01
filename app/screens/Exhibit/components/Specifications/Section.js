// @flow
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

type Props = {
  title: string,
  children?: any
};

const Section = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ props.title }</Text>
      {
        props.children
      }
    </View>
  );
};

Section.propTypes = {};

export default Section;

const styles = StyleSheet.create({
  container: {
  },
  title: {
    color: '#2c3e50',
    borderBottomColor: '#bdc3c7',
    borderBottomWidth: 1,
    fontSize: 20,
    paddingBottom: 10,
    marginTop: 20,
    marginBottom: 20
  },
  content: {

  }
});