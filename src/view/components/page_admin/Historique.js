import { Card, InputLabel } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import ResponsiveAppBar from '../asset/Navebar';

export default function Historique() {
  const pages = ['Statistques','Declaration Periodique','Situation dossiers'];
  const settings = ['Profile', 'Message','Admin','Deconnexion'];

  return (
    <div>Historique
< ResponsiveAppBar pages={pages} settings ={settings}/>
      <Card variant="outlined" >        
        <InputLabel  variant="standard" component="h4" style={{textAlign:"center"}}>
        Historique 
        </InputLabel>
      </Card>
    </div>
  )
}
