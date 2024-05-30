import React, { useEffect } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'; 
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar, Sidebar, ThemeSettings} from './components';
import {Acceuil, Clients, Login, Home } from './pages';
import {AppContext} from './contexts/contextProvider';
import './app.css';
import Coachs from './pages/Coachs';
//import Axios from 'axios';
const App = () => {
  const {activeMenu, themeSettings,setThemeSettings, currentColor,currentMode } = AppContext();
 // Axios.get("https").then((res)=>{console.log(res.data)}) 
  return (
    <div className={currentMode==='Dark'? 'dark':''}>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4"style={{zIndex: '1000'}}>
          <TooltipComponent content="Settings"position="Top">
            <button type="button" className="text-xl p-3 hover:drop-shadow-xl  "
            onClick={()=>setThemeSettings(true)}
            style={{background:currentColor,borderRadius:'50%'}} ><FiSettings /></button></TooltipComponent></div>
            {activeMenu ?(
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'><Sidebar/></div>):(<div className='w-0 dark:bg-secondary-dark-bg'><Sidebar/> </div>)}
            <div className={` dark:bg-main-dark-bg bg-main-bg min-h-screen w-full {activeMenu ? 'md:ml-72 ' :' flex-2'} `}>
              <div className='fixzd md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'><Navbar/></div>
            <div>{themeSettings && <ThemeSettings/>}
            <Routes>
              {/*dashboard*/}
              <Route path="/" element={< Acceuil />}/>
            <Route path="/acceuil" element={<Acceuil />}/>
            {/*pages*/}
            <Route path="/coachs" element={<Coachs />}/>
            <Route path="/clients" element={<Clients />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/Home" element={<Home />}/>
            </Routes>
            </div></div></div></BrowserRouter>
    </div>
  )
}

export default App