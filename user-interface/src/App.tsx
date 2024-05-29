import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import appRoutes from "./appRoutes";
import { Header, Footer, Loading } from "./components";
import HeadManager from "./components/HeadManager/HeadManager";
import useApp from "./useApp";

function App() {
  const { data } = useApp();
  // if data is not available, show loading
  if (!data || Object.keys(data).length === 0) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <div className="App">
      <Router>
        <HeadManager data={data} />
        <Header data={data} />
        <main>
          <Routes>
            {appRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer data={data} />
      </Router>
    </div>
  );
}

export default App;
