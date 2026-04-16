import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, KeyboardAvoidingView, Platform
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Isi dulu dong bestie 😆💖");
      return;
    }

    const name = email.split("@")[0];
    const finalName = name.charAt(0).toUpperCase() + name.slice(1);

    router.push({
      pathname: "/home",
      params: { name: finalName }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.emoji}>💖✨</Text>
        <Text style={styles.title}>Welcome Back!</Text>

        <TextInput
          placeholder="Email kamu 💌"
          style={styles.input}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password 🔐"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="#ff69b4"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.btnText}>Login 🚀</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={styles.link}>Belum punya akun? Daftar yuk 💕</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeef5",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 25,
    width: "85%",
    alignItems: "center",
    shadowColor: "#ff9ecf",
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8
  },
  emoji: { fontSize: 35, marginBottom: 10 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff1493",
    marginBottom: 15
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ffb6c1",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ffb6c1",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%"
  },
  passwordInput: {
    flex: 1,
    padding: 10
  },
  button: {
    backgroundColor: "#ff69b4",
    padding: 12,
    borderRadius: 10,
    width: "100%",
    marginTop: 10
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  link: {
    marginTop: 10,
    color: "#ff69b4",
    textAlign: "center"
  }
});