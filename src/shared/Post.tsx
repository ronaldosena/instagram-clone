import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import config from '~/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 20,
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
  userBar: {
    width: '100%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  contentImage: {
    height: 400,
    // width: '100%',
  },
  iconBar: {
    width: '100%',
    height: config.styleConstants.rowHeight,
    borderColor: 'rgb(233,233,233)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingHorizontal: 10,
  },
  icon: {
    // height: 40,
    // width: 40,
    // paddingHorizontal: 10,
    marginLeft: 5,
  },
  commentBar: {
    width: '100%',
    height: config.styleConstants.rowHeight,
    borderColor: 'rgb(233,233,233)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
});

interface Props {
  contentImage: string;
  profilePicture: string;
}

const Post: React.FC<Props> = ({ contentImage, profilePicture }) => {
  // const screenHeight = useWindowDimensions().height;
  const screenWidth = useWindowDimensions().width;
  const [liked, setliked] = useState(false);
  const heartIconColor = liked ? 'rgb(252,61,57)' : undefined;

  // this is a (poorly done) hack to resize the images to fit the device screen size
  contentImage = contentImage.slice(0, 48) + `w_${Math.floor(screenWidth * 1.1)},c_scale/` + contentImage.slice(48);

  return (
    <View>
      <View style={styles.userBar}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
          <Text>Instagram</Text>
        </View>
        <View />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>...</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => setliked(!liked)} activeOpacity={0.9}>
        <Image source={{ uri: contentImage }} style={[styles.contentImage, { width: screenWidth }]} />
      </TouchableOpacity>
      <View style={styles.iconBar}>
        <TouchableOpacity onPress={() => setliked(!liked)}>
          <Image style={[styles.icon, { height: 40, width: 40, tintColor: heartIconColor }]} source={config.images.heartIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={[styles.icon, { height: 34, width: 34 }]} source={config.images.chatIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={[styles.icon, { height: 30, width: 30 }]} source={config.images.shareIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.commentBar}>
        <Image style={[styles.icon, { height: 20, width: 20 }]} source={config.images.heartIcon} />
        <Text>{Math.floor(Math.random() * 500)} likes</Text>
      </View>
    </View>
  );
};

export default Post;
