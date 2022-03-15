import "./App.css";

// SCREENS
import { HomeScreen } from "./screens";

// COMPONENTS
import { Header } from "./components";

function App() {
  return (
    <div>
      <Header AcessButtonText='Acessar' />
      <HomeScreen />
    </div>
  );
}

export default App;
