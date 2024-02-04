
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import './App.css'
import { Home } from "./components/Home";


function App() {
  return (
    <NextUIProvider>
      <Home />
    </NextUIProvider>
  );
}

export default App
