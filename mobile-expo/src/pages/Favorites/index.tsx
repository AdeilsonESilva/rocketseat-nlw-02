import React, { useCallback } from 'react';
import { View, BackHandler } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

const Favorites: React.FC = () => {
  const { navigate } = useNavigation();

  const handleGoBack = useCallback(() => navigate('Landing'), []);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        handleGoBack();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
};

export default Favorites;
