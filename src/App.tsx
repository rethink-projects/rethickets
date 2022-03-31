import "./App.css";

// SCREENS
import { HomeScreen, LoginScreen } from "./screens";

// COMPONENTS
import { Header, Modal } from "./components";
import { useState } from "react";

function App() {
  const [isModalOpen, toggleModal] = useState(false);
  return (
    <div>
      <Header
        toggleModal={() => toggleModal(!isModalOpen)}
        AcessButtonText='Acessar'
      />

      <Modal
        isModalOpen={isModalOpen}
        toggleModal={() => toggleModal(!isModalOpen)}
      >
        <LoginScreen />
      </Modal>
      <HomeScreen />
      {/* <EventScreen /> */}
    </div>
  );
}

export default App;
