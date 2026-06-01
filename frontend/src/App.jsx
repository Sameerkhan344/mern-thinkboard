import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayouts from "./layouts/MainLayouts";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/create", element: <CreatePage /> },
      { path: "/note/:id", element: <NoteDetailsPage /> },
    ],
  },
]);
const App = () => {
  return (
    <div data-theme="forest">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
