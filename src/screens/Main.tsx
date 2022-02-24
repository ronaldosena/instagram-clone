import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PostFeed } from '~/shared';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  tempNav: {
    width: '100%',
    height: 75,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(233,233,233)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.tempNav}>
        <Text>Instagram</Text>
      </View> */}
      <PostFeed />
    </View>
  );
};

export default Main;
