import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ComingSeries from "./pages/ComingSeries";
import NowPlaying from "./pages/NowPlaying";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
    {
        //전체 routers들의 컨테이너 같은 역할
        //이 path로 이동한다면 이 element를 render할거야
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/coming-soon",
                element: <ComingSeries />
            },
            {
                path: "/now-playing",
                element: <NowPlaying />
            }
        ]
    }
])


