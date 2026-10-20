import { View, Text, Button, StyleSheet } from "react-native";

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View>
      <Text style={styles.count}>Solved: {solved}</Text>

      <View style={styles.row}>
        <Button title="Solve +1" onPress={onSolve} />
        <Button title="Reset" onPress={onReset} />
      </View>

      {solved >= 5 && <Text style={styles.great}>Great job!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  count: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  row: { flexDirection: "row", gap: 12 },
  great: { color: "green", fontSize: 20, fontWeight: "bold", marginTop: 10 },
});