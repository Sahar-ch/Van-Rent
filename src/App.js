import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/header/Header";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VanDetails, { loader as vanDetailLoader } from "./pages/vans/VanDetails";
import Error from "./components/Error";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard, {
  loader as hostDashboardLoader,
} from "./pages/host/Dashboard";
import Income, { loader as hostIncomeLoader } from "./pages/host/Income";
import Reviews, { loader as hostReviewLoader } from "./pages/host/Reviews";
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans";
import HostVansDetails, {
  loader as hostVansDetailLoader,
} from "./pages/host/HostVansDetails";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />}></Route>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="login"
          element={<Login />}
          loader={loginLoader}
          action={loginAction}
        />
        <Route
          path="vans"
          element={<Vans />}
          loader={vansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          loader={vanDetailLoader}
          element={<VanDetails />}
        />
        <Route path="host" element={<HostLayout />}>
          <Route index loader={hostDashboardLoader} element={<Dashboard />} />
          <Route path="income" loader={hostIncomeLoader} element={<Income />} />
          <Route
            path="reviews"
            loader={hostReviewLoader}
            element={<Reviews />}
          />
          <Route path="vans" loader={hostVansLoader} element={<HostVans />} />
          <Route
            path="vans/:id"
            loader={hostVansDetailLoader}
            element={<HostVansDetails />}
          >
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
