import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import { HomePage } from "./components/pageHome";
import { Location } from "./components/pageLocation";
import { ErrorPage } from "./components/pageError";
import { Root } from "./components/root";
import { About } from "./components/pageAbout";
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
