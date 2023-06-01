import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff"
  },
  imageBox:{
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  loginBox: {
    flex: 5,
    gap: 10,
    marginTop: 10
  },
  loginImg: {
    width: 200,
    height: 200
  },
  loginName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10
  },
  button: {
    padding: 10,
    gap: 20,
    marginTop: 10
  },
  optionLabel: {
    textAlign: "center",
  },
  agreement: { lineHeight: 25, marginTop: 10 }
})