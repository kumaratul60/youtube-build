import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;

/****
 Header
 Body
  Sidebar
    MenuItems
  MainContainer
    ButtonList
    VideoContainer
      VideoCard
 Footer
*/
