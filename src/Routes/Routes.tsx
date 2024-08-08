import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigation,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { DashBoard } from "./DashBoard";
import { Organisation } from "./Oragnisation";
import { MainLayoutRoute } from "./MainLayoutRoute";
import { Squad } from "./Squad";
import { Team } from "./Team";
import { MainLayout } from "./MainLayout";
import { Profile } from "./Profile";
import { AuthProvider } from "./AuthProvider";
import { SignInPage } from "./SignInPage";
export const Routers = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <DashBoard />,
        },
      ],
    },
    {
      path: "team",
      element: <MainLayout />,
      children: [
        {
          path: "/team",
          element: <Team />,
        },
      ],
    },
    {
      path: "squad",
      element: <MainLayout />,
      children: [
        {
          path: "/squad",
          element: <Squad />,
        },
      ],
    },
    {
      path: "squad",
      element: <MainLayout />,
      children: [
        {
          path: "/squad/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/sign",
      element: <SignInPage />,
    },
  ]);
  return (
    <AuthProvider isSigned={true}>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );

  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<MainLayout />}>
  //           <Route index element={<DashBoard />} />
  //           <Route path="organisation" element={<Organisation />} />
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   );
};
