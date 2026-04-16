import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView, Platform,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    View
} from "react-native";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,}$/;

    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("Isi semua dulu yaa 💕");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Emailnya salah 😅");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Nomor harus angka & min 10 digit 📱");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwordnya beda 😭");
      return;
    }

    router.push({
      pathname: "/home",
      params: { name }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.emoji}>🎀✨</Text>
        <Text style={styles.title}>Daftar Yuk 💖</Text>

        <TextInput placeholder="Nama kamu 🥰" style={styles.input} onChangeText={setName} />
        <TextInput placeholder="Email 💌" style={styles.input} onChangeText={setEmail} />
        <TextInput placeholder="Nomor HP 📱" style={styles.input} keyboardType="numeric" onChangeText={setPhone} />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password 🔐"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#ff69b4" />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm Password 🔒"
            secureTextEntry={!showConfirm}
            style={styles.passwordInput}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            <Ionicons name={showConfirm ? "eye" : "eye-off"} size={24} color="#ff69b4" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.btnText}>Submit 💕</Text>
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
  }
});