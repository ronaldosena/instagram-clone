import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import Post from '~/shared/Post';
import uuid from 'react-native-uuid';
import { Api } from '~/services/api';
import config from '~/config';
import { useFocusEffect } from '@react-navigation/native';
const PostFeed = () => {
  const [data, setData] = useState<any[]>([]);
  const scrollRef = useRef<any>();
  useFocusEffect(
    React.useCallback(() => {
      Api.userPhotos(config.cloudinary.userId)
        .then((res) => {
          let itens: any[] = [];
          res.data.forEach((item) => {
            itens.push({
              profilePicture: config.images.profilePic,
              contentImage: item.url,
            });
          });
          setData(itens);
          // temporary fix to empty feed
          try {
            scrollRef.current?.scrollToIndex({
              animated: true,
              index: 0,
            });
          } catch (error) {}
        })
        .catch((err) => console.error(err));
    }, []),
  );

  return (
    <FlatList
      ref={scrollRef}
      data={data}
      renderItem={(list) => <Post contentImage={list.item.contentImage} profilePicture={list.item.profilePicture} />}
      keyExtractor={() => uuid.v4().toString()}
    />
  );
};

export default PostFeed;
