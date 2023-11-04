import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import store from "./app/store";
import { Outlet, RouterProvider } from "react-router-dom";
import appRouter from "./routers";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      {/* <RouterProvider router={appRouter}/> */}
    </Provider>
  );
}

export default App;

