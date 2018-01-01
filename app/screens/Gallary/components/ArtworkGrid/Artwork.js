// @flow
import React, { PureComponent } from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import PropTypes from 'prop-types';

import { getArtistName } from '../../../../utils/helpers';

import type { ArtworkType } from '../../../types/Gallary';

type Props = {
  artwork: ArtworkType,
  onPress: (ArtworkType) => void
};

const window = Dimensions.get('window');
const HEIGHT = window.height;
const ARTWORK_IMAGE_HEIGHT = Math.round(HEIGHT * 0.51);

class Artwork extends PureComponent<Props> {
  _onPress: Function
  constructor() {
    super();
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    const { artwork, onPress} = this.props;
    onPress(artwork);
  }
  
  render() {
    const {
      artwork: {
        century,
        primaryimageurl,
        people = [],
        medium,
        title
      }
    } = this.props;
    const artist = getArtistName(people);

    return (
      <TouchableOpacity
       style={styles.container}
       onPress={this._onPress}
      >
        <Image
          style={styles.artworkImage}
          source={{uri: primaryimageurl}}
          resizeMode='cover'
        />
        <View style={styles.metaContainer}>
          <Text style={styles.metaPrimary}>
            {
              title
            }
          </Text>
          <Text style={styles.metaPrimary}>
            {
              artist
            }
          </Text>
          <Text style={styles.metaSecondary}>
            {
              medium
            }
          </Text>
          <Text style={styles.metaSecondary}>
            {
              century
            }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Artwork.propTypes = {};

export default Artwork;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#2c3e50',
  },
  artworkImage: {
    height: ARTWORK_IMAGE_HEIGHT,
    width: undefined
  },
  metaContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14
  },
  metaPrimary: {
    color: '#2c3e50',
    marginBottom: 5,
    fontSize: 18
  },
  metaSecondary: {
    color: '#95a5a6',
    fontSize: 16,
    marginBottom: 2
  }
})