// @flow
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import Search from './components/Search';
import Header from "../common/Header";
import ArtworkGrid from './components/ArtworkGrid';

import { fetchArtifacts } from "../../api/harvard-art";

import type { ArtworkType } from '../types/Gallary';

type Props = {
  navigation: Object
};
type State = {
  isLoading: boolean,
  error: Object | null,
  artworks: Array<ArtworkType>,
};

class Gallary extends Component<Props, State> {
  handleArtworkPress: Function;
  handleSubmit: Function;
  _fetchItems: Function;
  state = {
    isLoading: false,
    artworks: [],
    error: null
  };
  constructor() {
    super();
    this.handleArtworkPress = this.handleArtworkPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._fetchItems = this._fetchItems.bind(this);
  }

  _fetchItems(options: Object): void {
    this.setState({
      isLoading: true
    });

    fetchArtifacts(options)
      .then(response => {
        const { records } = response;
        this.setState({
          isLoading: false,
          artworks: records
        });
      })
      .catch(error => this.setState({
        isLoading: false,
        error
      }));
  }

  componentDidMount() {
    const options = {};

    this._fetchItems(options);
  }

  handleArtworkPress(artwork: ArtworkType): void {
    const { navigate } = this.props.navigation;

    // $FlowFixMe Add types for navigate method    
    navigate('Exhibit', {
      artwork
    });
  }

  handleSubmit(keyword: string) {
    const options = {
      keyword
    };

    this._fetchItems(options);
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <Search onSubmit={this.handleSubmit} />
        <ArtworkGrid
          error={this.state.error}
          artworks={this.state.artworks}
          onPress={this.handleArtworkPress}
          isLoading={this.state.isLoading}
        />
      </View>
    );
  }
}

Gallary.propTypes = {};

export default Gallary;