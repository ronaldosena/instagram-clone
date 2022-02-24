import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { TabsParams } from '~/App';
import { RNCamera, TakePictureOptions } from 'react-native-camera';

import { Cloudinary } from '~/services/cloudinary';
import { Api } from '~/services/api';
import config from '~/config';

interface Props {
  userId: string;
  navigation: StackNavigationProp<TabsParams>;
  route: RouteProp<TabsParams, 'Camera'>;
}

const Camera: React.FC<Props> = ({ navigation }) => {
  const takePicture = async function (camera: RNCamera) {
    const options: TakePictureOptions = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    Cloudinary.uploadImage(data.uri)
      .then((res) => {
        Api.addPhoto(config.cloudinary.userId, res.data)
          .then(() => {
            navigation.navigate('Main');
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        {({ camera, status }) => {
          if (status !== 'READY') return <Text>nem tem</Text>;
          return (
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Camera;
