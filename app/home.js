import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>💖✨🎀</Text>

        <Text style={styles.title}>Haii 👋</Text>

        <Text style={styles.name}>{name}</Text>

        <Text style={styles.welcome}>
          Welcome to Secure Guard 🛰️💫
        </Text>

        <Text style={styles.message}>
          Semoga harimu menyenangkan yaa 🌸🌈
        </Text>

        <Text style={styles.footer}>
          Jangan lupa senyum hari ini 😊💕
        </Text>
      </View>
    </View>
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
    backgroundColor: "#ffffff",
    padding: 25,
    borderRadius: 25,
    alignItems: "center",
    width: "85%",
    shadowColor: "#ff9ecf",
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8
  },
  emoji: { fontSize: 40, marginBottom: 10 },
  title: { fontSize: 20, color: "#ff69b4" },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff1493",
    marginVertical: 5
  },
  welcome: { fontSize: 16, marginTop: 5, color: "#555" },
  message: { fontSize: 15, marginTop: 10, textAlign: "center" },
  footer: { fontSize: 13, marginTop: 10, color: "#999" }
});