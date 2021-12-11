import { Routes, Route, Navigate } from "react-router";
import { Main } from "./containers";
import { publicRoutes } from "./router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
