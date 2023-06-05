import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "../components/Loader";
import { HomePageAsync } from "../pages/HomePage/HomePage.async";
import { AboutPage } from "../pages/AboutPage/AboutPage.async";
import { UserPage } from "../pages/UserPage/UserPage.async";
import NotFound from "../pages/NotFound/NotFound";

function MainRoute() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={"/"} element={<HomePageAsync />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/user/:id"} element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default MainRoute;
