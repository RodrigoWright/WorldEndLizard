import { createBrowserRouter } from "react-router-dom"
import Game from "../pages/Game"
import Home from "../pages/Home"

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "Game",
        element : <Game />
    }
])

export default router