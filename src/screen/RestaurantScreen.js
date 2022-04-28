import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import useSingleRestaurant from "../hooks/useSingleRestaurant";

function RestaurantScreen({ navigation }) {
  const [{data,loading,error},searchSingleRestaurant] = useSingleRestaurant()
  const id = navigation.getParam("id");
  

  useEffect(() => {
    searchSingleRestaurant(id);
  }, []);

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;

  

  if (loading)
    return (
      <View>
        <Text>Inside loading</Text>
      </View>
    );

  if (error)
    return (
      <View>
        <Text>Inside error</Text>
      </View>
    );

  return (
    <View>
      {data && (
        <FlatList
          data={data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return (
              <Image
                style={{ height: imageHeight, width: imageWidth }}
                source={{ uri: item }}
              />
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default RestaurantScreen;
