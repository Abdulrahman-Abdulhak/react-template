import { mergeObjects } from "./utils";

function App() {
  const test1 = mergeObjects({ h: 1 }, { v: 2 });

  return JSON.stringify(test1);
}

export default App;
