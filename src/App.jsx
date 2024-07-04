import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/home-page/home-page";
import MainLayout from "./layouts/main-layout/main-layout";
import AboutPage from "./pages/about-page/about-page";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
