import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff"
  },
  imageBox:{
    flex: 3.0,
    alignItems: "center",
    justifyContent: "center"
  },
  loginBox: {
    flex: 5,
    gap: 10,
    marginTop: 20
  },
  loginImg: {
    width: 200,
    height: 200
  },
  loginName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e1e1",
    padding: 5
  },
  forgotPassword: {
    color: "#3577f2",
    textAlign: "right"
  },
  button: {
    padding: 10,
    gap: 20
  },
  optionLabel: {
    textAlign: "center",
  }
})