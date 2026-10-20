# Lab Timer and Practice Tracker

IT313 Laboratory 5: React State & Hooks (Expo / React Native).

## Problem
A small screen for lab sessions. It counts how many practice problems a student
solved and shows a stopwatch for how long they have been working. Both parts stay
in sync through one shared parent.

## Approach
- **LabScreen** owns the state (`solved` and `isRunning`) and calls the custom hook.
  Lifting the state up here lets the two sibling components stay in sync.
- **PracticeTracker** receives `solved`, `onSolve`, and `onReset` as props. It shows
  "Great job!" with conditional rendering once `solved` reaches 5.
- **useStopwatch(isRunning)** is a custom hook. It uses `useState` for seconds and
  `useEffect` with `setInterval`. The cleanup function calls `clearInterval` when
  `isRunning` changes or the component unmounts.
- **Stopwatch** receives `seconds` and `isRunning` as props and shows the time and
  "Running..." or "Paused".
- Solve +1 uses the functional update form: `setSolved(s => s + 1)`.
- Every event handler is passed as a function reference, never called in the JSX.

## How to run
    npm install
    npx expo start
Scan the QR code with Expo Go.