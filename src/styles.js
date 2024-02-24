import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F2F2F0",
  },

  header: {
    height: "15%",
    width: "100%",
    paddingTop: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionOne: {
    width: "100%",
    backgroundColor: "red"
  },
  p: {
    padding: 10,
    fontWeight: "bold",
    paddingTop: 30,
    fontSize: 20,
    textAlign: "center",
    lineHeight: 25,
  },

  h1: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  pickerButton: {
    height: 50,
    width: 180,
    backgroundColor: "#F2F2F0",
    color: "#47591E",
    elevation: 10,
    shadowColor: "#47591E",
  },
  form: {
    alignItems: "center",
    backgroundColor: "#F2F2F0",
    // position: "relative",
    justifyContent: "center",
    // height: "50%",
    borderRadius: 5,
    // left: 29,
    padding: 50,
    position: "relative",
    left: -80,
    width: "100%",
    height: "50%",
    // borderColor: "gray",
    // elevation: 20,
    // shadowColor: "#171717",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 250,
    height: "100%",
    backgroundColor: "#F2F2F0",
    width: "100%"
  },
  pickerButtonText: {
    fontSize: 18,
  },
  buttonSubmit: {
    backgroundColor: "#2E2E2E",
    padding: 25,
    width: "70%",
    // marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "black",
    position: "relative",
    top: 300,
    // left: 180
  },
  textButtonSubmit: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  // shadowProp: {
  //   shadowColor: "black",
  //   shadowOffset: { width: -2, height: 4 },
  //   shadowOpacity: 0.9,
  //   shadowRadius: 3,
  //   elevation: 10,
  // },
});
