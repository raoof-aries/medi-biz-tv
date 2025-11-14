import { lazy } from "react";
import { Routes, Route } from "react-router";

// Main Pages

const HomePage = lazy(() => import("../pages/Home/Home.jsx"));
const Events = lazy(() => import("../pages/Events/Events.jsx"));
const GalleryPage = lazy(() => import("../pages/GalleryPage/GalleryPage.jsx"));
const ArticlesPage = lazy(() =>
  import("../pages/ArticlesPage/ArticlesPage.jsx")
);
const LiveTv = lazy(() => import("../pages/LiveTV/LiveTv.jsx"));

const AppRoutes = () => {
  return (
    // <React.Suspense
    //   fallback={
    //     <Modal>
    //       <Loader />
    //     </Modal>
    //   }
    // >
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/upcoming-events" element={<Events />} exact />
      <Route path="/articles" element={<ArticlesPage />} exact />
      <Route path="/gallery" element={<GalleryPage />} exact />
      <Route path="/live" element={<LiveTv />} exact />

      {/* Unknown Routes */}

      {/* <Route path="*" element={<PageNotFoundEl />} /> */}
    </Routes>
    // </React.Suspense>
  );
};

export default AppRoutes;
