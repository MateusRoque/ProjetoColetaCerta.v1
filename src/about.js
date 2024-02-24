import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";

export function AboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 20,
        backgroundColor: "#FBF7DC",
      }}
    >
      <View style={{width: "100%", paddingTop: 100, borderBottomWidth: 3,borderBottomColor: "#7A7A7A", alignItems: "center", flexDirection: "row"}}>
        <Text style={{position: "relative", left: 5, top:-60, color: "#2E2E2E", fontSize: 15}}>Foto do usuário</Text>
        <Text style={{position: "relative", left: 100,top: -20, color: "#2E2E2E", fontSize: 30}}>Logo</Text>
      </View>

      <StatusBar backgroundColor="#87A646" style="light" />
        <View style={{width: "100%", borderBottomWidth: 3,borderBottomColor: "#7A7A7A", height: "35%", justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "#2E2E2E", fontSize: 40}}>Notícia 1</Text>
        </View>
        <View style={{width: "100%", borderBottomWidth: 3,borderBottomColor: "#7A7A7A", height: "35%", justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "#2E2E2E", fontSize: 40}}>Notícia 2</Text>
        </View>
    </View>
  );
}
