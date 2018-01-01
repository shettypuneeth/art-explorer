// @flow
import React from 'react';
import { View, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

import { getArtistName } from '../../../../utils/helpers';
import type { ArtworkType } from '../../../types/Gallary';

type Props = {
  artwork: ArtworkType
};
type SectionType = {
  id: string,
  title: string,
  fields: Array<{
    id: string,
    title: string,
    key: string | Function
  }>
};

import Field from './Field';
import Section from './Section';

const SECTIONS: Array<SectionType> = [
  {
    id: 'identity',
    title: 'Identification and Creation',
    fields: [
      {
        id: 'header',
        title: 'Artist',
        key: (artwork) => getArtistName(artwork.people)
      },
      {
        id: 'title',        
        title: 'Title',
        key: 'title'
      },
      {
        id: 'classification',
        title: 'Classification',
        key: 'classification'
      },
      {
        id: 'date',        
        title: 'Date',
        key: 'dated'
      },
      {
        id: 'culture',        
        title: 'Culture',
        key: 'culture'
      }
    ]
  },
  {
    id: 'description_physical',
    title: 'Physical Descriptions',
    fields: [
      {
        id: 'medium',
        title: 'Medium',
        key: 'medium'
      },
      {
        id: 'technique',
        title: 'Technique',
        key: 'technique'
      }
    ]
  },
  {
    id: 'description',
    title: 'Descriptions',
    fields: [
      {
        id: 'commentary',
        title: 'Commentary',
        key: 'labeltext'
      }
    ]
  }
]

const Specifications = (props: Props) => {
  const { artwork } = props;

  return (
    <View style={styles.container}>
      {
        SECTIONS.map(s => (
          <Section 
            key={s.id}
            title={s.title}
          >
            {
              s.fields.map(f => (
                <Field 
                  header={f.title}
                  key={f.id}
                  value={typeof f.key === 'function' ? f.key(artwork) : artwork[f.key]}
                />
              ))
            }
          </Section>
        ))
      }
    </View>
  );
};

Specifications.propTypes = {};

export default Specifications;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 8,
    backgroundColor: '#fff'
  }
});