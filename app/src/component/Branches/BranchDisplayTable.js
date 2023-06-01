import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BranchTable from './BranchTable';

const BranchDisplayTable = ({data}) => {

  return (
    <>
      <View style={styles.item}>
        <Text style={styles.firstHeading}>Branch Name</Text>
        <Text style={styles.secondHeading}>Subjects</Text>
        <Text style={styles.thirdHeading}>More</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <BranchTable item={item} />}
        keyExtractor={(item) => item._id}
      />
    </>
  )
}

export default BranchDisplayTable

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
