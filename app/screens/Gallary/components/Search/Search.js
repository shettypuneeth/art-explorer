// @flow
import React, { Component } from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';

type Props = {
  onSubmit: (query: string) => void,
  query: string
};
type State = {
  query: string
};

class Search extends Component<Props, State> {
  handleChange: Function;
  handleSubmit: Function;
  constructor(props: Props) {
    super(props);
    this.state = {
      query: props.query
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(text: string) {
    this.setState({
      query: text
    });
  }

  handleSubmit() {
    if (!this.state.query.trim()) return this.setState({ query: '' });

    this.props.onSubmit(this.state.query);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSubmit}
          placeholder='Search by keyword, title, artist'
          value={this.state.query}
          underlineColorAndroid='transparent'
        />
      </View>
    );
  }
}

Search.propTypes = {};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 14,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#34495e'
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }
});