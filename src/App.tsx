import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Index } from "./pages";
import Create from "./pages/empleados/create";
import Manage from "./pages/empleados/manage";
import { useRef } from "react";
import { Toast } from "primereact/toast";

function App() {
  const toast = useRef(null);

  return (
    <Router>
      <Toast ref={toast} />
      <NavigationBar></NavigationBar>
      <Routes>
        <Route index element={<Index></Index>}></Route>
        <Route path="empleados">
          <Route
            path="create"
            element={<Create toast={toast}></Create>}
          ></Route>
          <Route
            path="manage"
            element={<Manage toast={toast}></Manage>}
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
