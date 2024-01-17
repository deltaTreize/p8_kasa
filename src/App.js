import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import { HomePage } from "./components/homePage";
import { Location } from "./components/location";
import { ErrorPage } from "./components/errorPage";
import { Root } from "./components/root";
import { About } from "./components/about";
import "./style/App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
      {
        path: "/homePage",
        element: <HomePage />
      },
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/location/:targetId",
				element: <Location />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}/>
}

export default App;
