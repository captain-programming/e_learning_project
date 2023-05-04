import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import UserTable from './UserTable';

const UserDisplayTable = ({data}) => {

  return (
    <>
      <View style={styles.item}>
        <Text style={styles.firstHeading}>Name</Text>
        <Text style={styles.secondHeading}>Email</Text>
        <Text style={styles.thirdHeading}>More</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <UserTable item={item} />}
        keyExtractor={(item) => item._id}
      />
    </>
  )
}

export default UserDisplayTable

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 20
  },
  firstHeading: {
    flex: 2,
    fontWeight: 'bold',
  },
  secondHeading: {
    flex: 3,
    fontWeight: 'bold',
  },
  thirdHeading: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'right',
  }
});
