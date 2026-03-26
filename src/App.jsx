import { BrowserRouter, HashRouter, Route, Routes } from 'react-router'
import LeftMenu from './components/leftMenu/leftMenu'
import './styles/index'
import PageTasks from './components/PageTasks/PageTasks'
import RankPage from './components/rankPage/RankPage'

function App() {
 

  return (
    <HashRouter>
    <div>
      <LeftMenu />
      <Routes>
        <Route path='/Today' element={<PageTasks />} />
        <Route path='/Rank' element={<RankPage />} />
        
      </Routes>
    </div>
    </HashRouter>
  )
}

export default App
