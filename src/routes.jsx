import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Jokenpo from './pages/Jokenpo'
import Home from './pages/Home'
import TicTacToe from './pages/TicTacToe'
import PaginaBase from './pages/PaginaBase'
import Pagina404 from './pages/Pagina404'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PaginaBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/jokenpo" element={ <Jokenpo /> }></Route>
                    <Route path="/tictactoe" element={ <TicTacToe /> }></Route>
                    <Route path="*" element={ <Pagina404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes