import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Activity, {
  loader as activityLoader,
} from "./features/activity/Activity";
import Archived, {
  loader as archivedLoader,
} from "./features/archived/Archived";
import Call, { loader as callLoader } from "./features/call/Call";
import { action as updateCall } from "./features/call/UpdateCall";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/activity",
        element: <Activity />,
        loader: activityLoader,
      },
      {
        path: "/archived",
        element: <Archived />,
        loader: archivedLoader,
      },
      {
        path: "/activity/:id",
        element: <Call />,
        loader: callLoader,
        action: updateCall,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
