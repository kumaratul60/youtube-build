import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MainContainer from "../components/MainContainer";
import WatchPage from "../components/WatchPage";
import ChannelDetails from "../components/ChannelDetails";

const appRouter = createBrowserRouter([
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
        element: <WatchPage />,
      },
      {
        path: "/channel/:channelId",
        element: <ChannelDetails />,
      },
    ],
  },
]);

export default appRouter;
