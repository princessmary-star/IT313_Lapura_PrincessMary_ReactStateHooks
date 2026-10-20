import { View, Text, StyleSheet } from "react-native";

const formatTime = (totalSeconds) => {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
};

export default function Stopwatch({ seconds, isRunning }) {
  return (
    <View style={styles.box}>
      <Text style={styles.time}>{formatTime(seconds)}</Text>
      {isRunning ? (
        <Text style={styles.running}>Running…</Text>
      ) : (
        <Text style={styles.paused}>Paused</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    marginVertical: 20,
    padding: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  time: { fontSize: 48, fontWeight: "bold" },
  running: { color: "green", fontSize: 18 },
  paused: { color: "gray", fontSize: 18 },
});