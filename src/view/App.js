
import React from 'react'
import  {HashRouter as Router, Routes, Route} from 'react-router-dom'

import Utilisateurs from './components/page_admin/Utilisateurs';
import Dossiers from './components/page_admin/Dossiers';
import Acces_pages from './components/page_admin/Acces_pages';
import Historique from './components/page_admin/Historique';
import Access_specification from './components/page_admin/Access_specification';
import List_deroulantes from './components/page_admin/List_deroulantes';
import Equipes from './components/page_admin/Equipes';
import Admin from './components/page_admin/Admin';


export default function App() {
  return (
    <div>
<Router>
      <Routes>
      <Route path='/' element={<Admin />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/user' element={<Utilisateurs />} />
      <Route path='/equipe' element={<Equipes />} />
      <Route path='/dossier' element={<Dossiers />} />
      <Route path='/acces_page' element={<Acces_pages />} />
      <Route path='/access_specf' element={<Access_specification />} />
      <Route path='/list_deroulante' element={<List_deroulantes />} />
      <Route path='/historique' element={<Historique />} />

      </Routes>
  </Router>
 
    </div>
  )
}
