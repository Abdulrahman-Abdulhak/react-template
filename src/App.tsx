import { useLocaleStorage } from "./hooks";

function App() {
  const [value] = useLocaleStorage("test");

  return value;
}

export default App;
