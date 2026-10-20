import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import PracticeTracker from "./PracticeTracker";
import Stopwatch from "./Stopwatch";
import useStopwatch from "./useStopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const seconds = useStopwatch(isRunning);

  const handleSolve = () => setSolved((s) => s + 1);
  const handleReset = () => setSolved(0);
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab Timer and Practice Tracker</Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch seconds={seconds} isRunning={isRunning} />

      <View style={styles.row}>
        <Button title="Start" onPress={handleStart} />
        <Button title="Stop" onPress={handleStop} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 70, paddingHorizontal: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  row: { flexDirection: "row", gap: 12 },
});