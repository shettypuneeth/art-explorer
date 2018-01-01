// @flow
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

type Props = {
  header: string,
  value: string
};

const Field = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        { props.header }
      </Text>
      <Text style={styles.value}>
        { props.value || 'Not Available' }
      </Text>
    </View>
  );
};

Field.propTypes = {};

export default Field;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  header: {
    color: '#999',
    fontSize: 18
  },
  value: {
    color: '#2c3e50',
    fontSize: 18
  }
});