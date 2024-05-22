import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/jpp.jpeg")} style={styles.image} />
      <Text style={styles.header}>João Pedro</Text>
      <Text style={styles.subheader}>
        Estudante de análise e desenvolvimento de sistemas
      </Text>
      <Text style={styles.paragraph}>
        Olá! Meu nome é João Pedro, tenho 19 anos e estudo no Senac através do programa do Embarque Digital
      </Text>
      <Text style={styles.paragraph}>
        Linguagens de programação:
      </Text>
      <Text style={styles.listItem}>
        • Python, HTML, CSS, Javascript, MySQL e C.
      </Text>
      <Text style={styles.paragraph}>
        Atualmente procurando trabalho na área de UX Design
      </Text>
      <Text style={styles.paragraph}>
        Veja meus projetos no GitHub {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/Joa1pedr1")}
        >
          https://github.com/Joa1pedr1
        </Text>
        .
      </Text>
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Experiência</Text>
      <Text style={styles.subheader}>
        PIBIC-EM
      </Text>
      <Text style={styles.paragraph}>• Agosto 2020 - Agosto 2022</Text>
      <Text style={styles.paragraph}>
        • Conquistei uma bolsa de iniciação à iniciação científica na UFPE, cujo objetivo da minha pesquisa era o de desenvolver um dosador automático de álcool em gel.
      </Text>
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Educação</Text>
      <Text style={styles.subheader}>
        Curso de análise e desenvolvimento de sistema
      </Text>
      <Text style={styles.paragraph}>
        Senac, Mar 2023 - Present.
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "accessibility" : "accessibility-outline";
            } else if (route.name === "Experience") {
              iconName = focused ? "code-slash" : "code-slash-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "desktop" : "desktop-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#0CC0DF",
          tabBarInactiveTintColor: "#38B6FF",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#DBF5F6",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#008080",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
  },
});
