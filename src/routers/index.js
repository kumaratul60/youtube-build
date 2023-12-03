import App from "App";
import Body from "components/Body";
import ChannelDetails from "components/ChannelDetails";
import ErrorPage from "components/Error";
import HistoryPage from "components/History";
import MainContainer from "components/MainContainer";
import SearchPage from "components/SearchPage";
import WatchPage from "components/WatchPage";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Body />,
  // children: [
  //   {
  //     path: "/",
  //     element: <MainContainer />,
  //   },
  //   {
  //     path: "/watch",
  //     element: (
  //       <Suspense>
  //         <WatchPage />
  //       </Suspense>
  //     ),
  //   },
  //   {
  //     path: "/channel/:channelId",
  //     element: (
  //       <Suspense>
  //         <ChannelDetails />
  //       </Suspense>
  //     ),
  //   },
  //   {
  //     path: "/results",
  //     element: (
  //       <Suspense>
  //         <SearchPage />
  //       </Suspense>
  //     ),
  //   },
  //   {
  //     path: "/history",
  //     element: (
  //       <Suspense>
  //         <HistoryPage />
  //       </Suspense>
  //     ),
  //   },
  // ],
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch",
            element: (
              <Suspense>
                <WatchPage />
              </Suspense>
            ),
          },
          {
            path: "/channel/:channelId",
            element: (
              <Suspense>
                <ChannelDetails />
              </Suspense>
            ),
          },
          {
            path: "/results",
            element: (
              <Suspense>
                <SearchPage />
              </Suspense>
            ),
          },
          {
            path: "/history",
            element: (
              <Suspense>
                <HistoryPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default appRouter;
