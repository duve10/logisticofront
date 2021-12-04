import Dashboard from "./components/pages/Dashboard";
import { Login } from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/pages/PageNotFound";

import { Provider } from "react-redux";
import store from "./components/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
