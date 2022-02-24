import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TabsParams } from '~/App';
import config from '~/config';
import { Api } from '~/services/api';

interface Props {
  navigation: StackNavigationProp<TabsParams>;
  route: RouteProp<TabsParams, 'Profile'>;
}

const Profile: React.FC<Props> = ({}) => {
  const [photos, setPhotos] = useState<Cloudinary.UploadResult[]>([]);

  useEffect(() => {
    Api.userPhotos(config.cloudinary.userId).then((res) => {
      setPhotos(res.data);
    });
  }, []);

  function renderPhotos() {
    // this is a (poorly done) hack to resize the images to fit the device screen size
    return photos.map((item) => {
      return (
        <Image
          key={item.asset_id}
          source={{
            uri: `${config.cloudinary.baseUrl}/w_${config.dimensions.thirdWidht},h_${config.dimensions.thirdWidht},c_fill/${item.public_id}`,
          }}
          style={styles.picture}
        />
      );
    });
  }

  return (
    <ScrollView>
      <View style={styles.profileInfo}>
        <View style={{ flexDirection: 'row', width: '100%', height: 100 }}>
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{ uri: config.images.profilePic }} style={{ height: 80, width: 80, borderRadius: 40 }} />
          </View>
          <View style={{ flex: 7, height: 100 }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={styles.statCol}>
                <Text>128</Text>
                <Text>Posts</Text>
              </View>
              <View style={styles.statCol}>
                <Text>256</Text>
                <Text>Followers</Text>
              </View>
              <View style={styles.statCol}>
                <Text>184</Text>
                <Text>Following</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'rgb(233,233,233)',
                flexDirection: 'row',
                flex: 1,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>Edit Profile</Text>
            </View>
          </View>
        </View>
        <View style={styles.topBar}>
          <View style={styles.topBarIcon} />
          <View style={styles.topBarIcon} />
          <View style={styles.topBarIcon} />
          <View style={styles.topBarIcon} />
          <View style={styles.topBarIcon} />
        </View>
        <View style={{ flexDirection: 'column', width: '100%' }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>roronalds</Text>
          <Text style={{ fontSize: 14 }}>insira aqui uma descrição sem criatividade</Text>
        </View>
      </View>
      <View style={{ height: '100%', width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.pictureContainer}>{renderPhotos()}</View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  pictureContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  picture: {
    width: config.dimensions.thirdWidht,
    height: 100,
  },
  profileInfo: {
    width: '100%',
    // height: 250,
    display: 'flex',
    flexDirection: 'column',
  },
  statCol: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    height: 50,
    width: '100%',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(233,233,233)',
    flexDirection: 'row',
  },
  topBarIcon: {
    backgroundColor: 'red',
    borderLeftWidth: 1,
    flex: 1,
  },
});
export default Profile;
