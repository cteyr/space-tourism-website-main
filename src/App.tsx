import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainContainer } from "./containers/MainContainer";
import { Destination } from "./containers/Destination";
import { Crew } from "./containers/Crew";
import { Technology } from "./containers/Technology";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainContainer />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export { App };
