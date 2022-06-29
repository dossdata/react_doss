import React from 'react'
import { Link } from 'react-router-dom'
import { InputLabel,Card } from '@mui/material';
import ResponsiveAppBar from '../asset/Navebar'
export default function Utilisateurs() {
  const pages = ['Statistques','Declaration Periodique','Situation dossiers'];
  const settings = ['Profile', 'Message','Admin','Deconnexion'];

  return (
    <div>
      < ResponsiveAppBar pages={pages} settings ={settings}/>
      <Card variant="outlined" >        
        <InputLabel  variant="standard" component="h4" style={{textAlign:"center"}}>
        Utilisateurs 
        </InputLabel>
      </Card>
      
<Link to="/admin" className="btn btn-primary">dossier re</Link>

    </div>
  )
}
