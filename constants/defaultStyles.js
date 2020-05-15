import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans-bold",
    fontSize: Dimensions.get("window").height < 600 ? 14 : 20,
  },
});
