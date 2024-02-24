import * as React from "react";
import { HomeScreen } from "./src/home";
import { AboutScreen } from "./src/about";
import { Nav } from "./src/nav";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [showHome, setShowHome] = useState(false);

  const handleButtonClick = () => {
    setShowHome(true);
  }

  const [showPhoto, setShowPhoto] = useState(false);

  const handleSeguirClick = () => {
    setShowPhoto(true);
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" backgroundColor="white" />
      {!showHome ? (
        <View
          style={{
            flex: 1,
            gap: 70,
            backgroundColor: "black",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40,backgroundColor: "white", padding: 50, width: "100%", paddingTop: 70, borderRadius: 40, textAlign: "center"}}>
            Seja bem-vindo!
          </Text>
          <Image source={require("./src/assets/f1.png")} style={{position: 'relative', top: 80, zIndex: -10}}/>         

          <TouchableOpacity
            title="Ir para a Home"
            onPress={handleButtonClick}
            style={{
              position: "relative",
              top: -150,
              backgroundColor: "#2E2E2E",
              padding: 30,
              width: 350,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <Text style={{ color: "white", fontSize: 32 }}>
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
        ) : (
          !showPhoto ? (
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
                <Text style={{fontSize: 30, color: "black", position: "relative", top: 180, textAlign: "center"}}>Agora escolha uma foto para sua identificação.</Text>
              <Image source={require("./src/assets/f3.png")} style={{position: 'relative', top: 200, zIndex: -10, borderRadius: 40}}/>         
              
              <TouchableOpacity
                onPress={handleSeguirClick}
                style={{
                  position: "relative",
                  top: -100,
                  backgroundColor: "#2E2E2E",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                  padding: 20,
                  width: 300
                }}
              >
                <Text style={{ color: "white", fontSize: 32 }}>
                  Selecionar foto
                </Text>
              </TouchableOpacity>
              <Text style={{zIndex: 20, fontSize: 32, color: "white", position:"relative", top: -100}}>OU</Text>
              <TouchableOpacity
                onPress={handleSeguirClick}
                style={{
                  position: "relative",
                  top: -100,
                  backgroundColor: "#2E2E2E",
                  padding: 20,
                  width: 300,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                }}
              >
                <Text style={{ color: "white", fontSize: 32 }}>
                  Pular etapa
                </Text>
              </TouchableOpacity>
            </View>
            ) : (
              <Nav>
                <HomeScreen />
                <AboutScreen />
              </Nav>
            )
        )
      }
    </View>
  );
}
// export default function App() {
//   return (
//     <>
//       <Nav>
//         <HomeScreen />
//         <AboutScreen />
//       </Nav></>
//   );
// }
