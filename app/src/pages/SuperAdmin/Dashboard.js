import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Dashboard = ({navigation}) => {

  return (
    <View style={{flex: 1, backgroundColor: "#fff", width: "100%", alignItems: "center", paddingVertical: 20}}>
      <View style={{ width: '80%', flexDirection: "column", gap: 20}}>
        <TouchableOpacity onPress={() => navigation.navigate("Users")}>
          <View style={styles.list}>
            <Ionicons name={"home-sharp"} size={22} color={'#8A2BE2'}/>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#8A2BE2"}}>User</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
          <View style={styles.list}>
            <Ionicons name={"book-sharp"} size={22} color={'#8A2BE2'}/>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#8A2BE2"}}>Courses</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Branches")}>
          <View style={styles.list}>
            <Ionicons name={"git-branch-sharp"} size={22} color={'#8A2BE2'}/>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#8A2BE2"}}>Branches</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Account Setting")}>
          <View style={styles.list}>
            <Ionicons name={"settings-sharp"} size={22} color={'#8A2BE2'}/>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: "#8A2BE2"}}>Account Setting</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Dashboard;


const styles = StyleSheet.create({
  list: {
    flexDirection: "row", 
    alignItems: "center",
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 16,
    gap: 10,
  }
})