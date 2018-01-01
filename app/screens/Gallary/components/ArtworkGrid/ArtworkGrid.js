// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from "react-native";

import Artwork from './Artwork';

import type { ArtworkType } from "../../../types/Gallary";

type Props = {
  artworks: Array<ArtworkType>,
  error: Object | null,
  isLoading: boolean,
  navigation: Object,
  onPress: (ArtworkType) => void
};

class ArtworkGrid extends Component<Props> {
  handlePress: Function;
  _renderArtwork: Function;
  constructor() {
    super();
    this.handlePress = this.handlePress.bind(this);
    this._renderArtwork = this._renderArtwork.bind(this);
  }
  
  _renderArtwork({ item }: { item: ArtworkType }) {
    return (
      <Artwork
        key={item.objectid}
        artwork={item}
        onPress={this.handlePress}
      />
    );
  }

  // speed up the render
  _getItemLayout(data: ArtworkType, index: number): Object {
    return ({
      length: 542,
      offset: 542 * index,
      index
    });
  }

  // Move to the exhibit screen once the artwork is clicked
  handlePress(artwork: ArtworkType) {
    const { onPress } = this.props;

    onPress(artwork);
  }

  render() {
    const { isLoading, artworks, error } = this.props;
    if (isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.nothingFound}>
          <Text style={styles.error}>
            SOMETHING WENT WRONG. PLEASE TRY AGAIN.
          </Text>
        </View>
      );
    }

    const artworkWithImages = artworks.filter(a => a.primaryimageurl);

    if (artworkWithImages.length === 0) {
      return (
        <View style={styles.nothingFound}>
          <Text style={styles.message}>NOTHING FOUND</Text>
        </View>
      );
    }

    return (
      <View style={styles.scrollContainer}>
        <FlatList
          data={artworkWithImages}
          initialNumToRender={3}
          keyExtractor={item => item.objectid}
          maxToRenderPerBatch={2}
          renderItem={this._renderArtwork}
        />
      </View>
    );
  }
}

ArtworkGrid.propTypes = {};

export default ArtworkGrid;

const styles = StyleSheet.create({
  loader: {
    marginTop: 10
  },
  nothingFound: {
    padding: 20,
    alignItems: 'center'
  },
  error: {
    color: '#e74c3c'
  },
  message: {
    color: '#95a5a6'
  },
  scrollContainer: {
    flex: 1,
    marginTop: 8,
    padding: 14,
    paddingBottom: 8
  }
})