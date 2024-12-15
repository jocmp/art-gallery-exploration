import { fetchArtworkSearch, useQuery } from '@/art-gallery-client/ArtGalleryClient';
import { useCallback } from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const fetchFeaturedArt = useCallback(async () => {
    return fetchArtworkSearch("featured_art");
  }, []);

  const { loading, data } = useQuery(fetchFeaturedArt)

  if (loading) {
    return (<ThemedText>Loading...</ThemedText>);
  }

  if (!data) {
    return <ThemedText>Nothing.</ThemedText>;
  }

  const results = Object.values(data).filter((result) => result !== null && typeof result !== 'boolean');
  console.log('results', results)

  return (
    <Animated.ScrollView>
      {results.map((result) => (
        <TouchableHighlight
          key={result.object_id}
          onPress={() => {
            navigation.navigate("artwork", { id: result.object_id })
          }}
        >

          <Image
            source={{ uri: result.media_large_url }}
            style={
              {
                width: '100%',
                aspectRatio: '16/9',
                resizeMode: 'contain'
              }
            }
          />
        </TouchableHighlight>
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
