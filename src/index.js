import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "error-page";
import MovieListPage from "pages/MovieListPage/MovieListPage";

import Header from "layouts/Header/Header";
import MovieDetails from "components/MovieDetails/MovieDetails";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
	{
		path: "/",
		element: <MovieListPage />,
		errorElement: <ErrorPage />,

		children: [
			{
				path: "/",
				index: true,
				element: <Header />,
			},
			{
				path: "/:movieId",
				element: <MovieDetails />,
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
