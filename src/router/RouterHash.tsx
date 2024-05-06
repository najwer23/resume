import { RouterProvider, ScrollRestoration, createHashRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export const router = createHashRouter([
	{
		path: "/",
		element: (
			<>
				<Home />
				<ScrollRestoration />
			</>
		),
	},
]);

export const RouterHash = () => <RouterProvider router={router} />
