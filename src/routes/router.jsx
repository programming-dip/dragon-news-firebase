import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";
import CategoryPage from "../components/CategoryPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path:"/",
                Component: Home
            },
            {
                path: "/category/:id",
                Component:CategoryPage,
                loader: ()=>fetch("/news.json")
            }
        ]
    }
]);

export default router;