import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from "./components";

import routes from './routes'; // Route list


const Loading = () => <div>Loading..</div>;

function App() {
  const baseUrl = document.getElementsByTagName('base')[0]?.getAttribute('href');

  return (
    <Router basename={baseUrl}>
      <Navbar />
      <div className="container">
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map(({ component: Component, path, exact }) => (
              <Route exact={exact} path={`/${path}`} key={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
