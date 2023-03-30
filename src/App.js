import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" bgColor">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
