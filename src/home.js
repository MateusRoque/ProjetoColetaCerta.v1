import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View, TouchableOpacity } from "react-native";
import logo from "./assets/logo.png";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import { useState } from "react";
import * as Notifications from "expo-notifications";

export function HomeScreen() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldShowAlert: true,
      shouldSetBadge: true,
    }),
  });
  async function handleCallNotification() {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      alert("Não possui permissão para notificção!");
      return;
    }
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "ATENÇÃO! 👀",
        body: "Não se esqueça! Hoje terá coleta! ♻⏰",
        sound: true,
        autoDismiss: true,
        vibrate: true,
        color: "#D5D95F",
        subtitle: "Coleta Seletiva",
      },

      trigger: {
        seconds: 2,
      },
    });
  }
  let [personsBairro, setBairro] = useState("Selecione o bairro");
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#87A646" />
      {/* <View style={styles.header}>
        <Image source={logo}></Image>
      </View> */}
      <View style={styles.contentContainer}>            
        <Text style={styles.p}>
            {""}
            {""} Preencha os campos abaixo para prosseguirmos!
          </Text>
        <View style={[styles.form, styles.shadowProp]}>
          <View style={styles.sectionOne}>

          </View>

          <Text style={styles.h1}>
            Qual a sua <Text style={{ color: "#87A646" }}>cidade</Text>?
          </Text>

          <Picker style={styles.pickerButton}>
            <Picker.Item
              key={0}
              label="Sapiranga"
              value="Sapiranga"
              style={styles.pickerButtonText}
            />
          </Picker>

          <Text style={styles.h1}>
            Qual o seu <Text style={{ color: "#87A646" }}>bairro</Text>?
          </Text>

          <Picker
            style={styles.pickerButton}
            selectedValue={personsBairro}
            onValueChange={(item) => {
              setBairro(item);
              let chooseBairro = item;
            }}
          >
            <Picker.Item
              key={0}
              label="Amaral Ribeiro"
              value="Amaral Ribeiro"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={1}
              label="Vôo Livre"
              value="Vôo Livre"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={2}
              label="Sete de Setembro"
              value="Sete de Setembro"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={3}
              label="São Jacó"
              value="São Jacó"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={4}
              label="Vila Nova"
              value="Vila Nova"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={5}
              label="Centro"
              value="Centro"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={6}
              label="Piquete"
              value="Piquete"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={7}
              label="Santa Fe"
              value="Santa Fe"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={8}
              label="Vila Irma"
              value="Vila Irma"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={9}
              label="Oeste"
              value="Oeste"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={10}
              label="Centenário"
              value="Centenário"
              style={styles.pickerButtonText}
            />
            <Picker.Item
              key={11}
              label="Novo Centenário"
              value="Novo Centenário"
              style={styles.pickerButtonText}
            />
          </Picker>
          
        </View>
        <TouchableOpacity
            title="Enviar"
            onPress={handleCallNotification}
            style={[styles.buttonSubmit, styles.shadowProp]}
          >
            <Text style={styles.textButtonSubmit}>Avisar-me</Text>
          </TouchableOpacity>
        <Image source={require("./assets/f2.png")} style={{zIndex: -10, position: "relative", top: -50}}>
        </Image>
      </View>
    </View>
  );
}
