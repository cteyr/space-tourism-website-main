import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainContainer } from "./containers/MainContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export { App };
