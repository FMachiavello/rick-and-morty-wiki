import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import StateDot from './StateDot';

const Post = ({ characters }) => {

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          <Image style={styles.postImage} source={{ uri: item.image }}/>
          <Text style={styles.postTitle} >{item.name}</Text>
          <StateDot status={item.status}/>
          <Text style={styles.postMeta}>Last seen:</Text>
          <Text style={styles.postDescription} >{item.location.name}</Text>
          <Text style={styles.postMeta}>First seen:</Text>
          <Text style={styles.postDescription} >{item.origin.name}</Text>
        </View>
        )}
      />
  );
};

const styles = StyleSheet.create({
  postContainer: {
    maxWidth: 800,
    margin: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
  }},
  postImage: {
    padding: 30,
    width: 300,
    height:300,
    borderRadius: 8,
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop:5,
    paddingBottom:10

  },
  postMeta: {
    fontSize: 14,
    color: '#777',
  },
});

export default Post;
