import { BrowserRouter, Route, Routes } from 'react-router'
import LeftMenu from './components/leftMenu/leftMenu'
import './styles/index'
import PageTasks from './components/PageTasks/PageTasks'
import RankPage from './components/rankPage/RankPage'

function App() {
 

  return (
    <BrowserRouter>
    <div>
      <LeftMenu />
      <Routes>
        <Route path='/Today' element={<PageTasks />} />
        <Route path='/Rank' element={<RankPage />} />
        
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
