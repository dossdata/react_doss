
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {Card, InputLabel} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveAppBar from '../asset/Navebar';
import Listitem from '../asset/Listitem';
import MouseOverPopover from '../asset/Popover';
import  {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
import Indication from '../asset/Indication';
import Utilisateurs from './Utilisateurs';
import Dossiers from './Dossiers';
import Acces_pages from './Acces_pages';
import Historique from './Historique';
import Access_specification from './Access_specification';
import Equipes from './Equipes';
import List_deroulantes from './List_deroulantes';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
const centerText = {
  textAlign:'center',
}

const style_indice = {
  color:"#000",
  fontSize:"15px"
}

const list_and_popover = [
  {href_page:"/user",titre:"UTILISATEURS",message:"Création d'utilisateurs et Modification ,la liste complète et les détails de chaque utilisateurs",ex:["Modification nom , mail , etc...","Ajout photo","etc..."]},
  {href_page:"/equipe",titre:"EQUIPES",message:"Ajout Portfeuille et Modification , la liste complète et les détails de chaque Equipes",ex:["Renomage Equipes","Attribution Equipes","etc..."]},
  {href_page:"/dossier",titre:"DOSSIERS",message:"Création et Modification des paramettres du Dossier",ex:["Renomage Dossiers","Attribution Dossiers"],ex:["Statistiques","Situation tva","etc..."]},
  {href_page:"/acces_page",titre:"ACCESS PAGES",message:"Définition des droits des utilisateurs pour chaque page visualisée",ex:["Verouillage page","Deverouillage page","etc..."]},
  {href_page:"/access_specf",titre:"ACCESS SPECIFICATIONS",message:"Attribution des droits au utilisateurs  sur les champs présent",ex:["champ date de cloture","champ situation dossier","etc..."]},
  {href_page:"/list_deroulante",titre:"LISTE DES ROULANTES",message:"Paramétrage des listes déroulantes avec la création, modification et suppression",ex:["Ajout ou modification poste","Ajout ou modification forme jurdiques","etc..."]},
  {href_page:"/historique",titre:"HISTORIQUES",message:"Historique complet des manipulations effectués par l'utilisateur",ex:["Consultation action des utilisateurs","Restoration","etc..."]},
]


export default function Admin() {
  const pages = ['Statistques','Declaration Periodique','Situation dossiers'];
  const settings = ['Profile', 'Message','Admin','Deconnexion'];
  return (
    <div>
    <ThemeProvider theme={darkTheme}>
      <ResponsiveAppBar pages={pages} settings={settings} />
      <Card variant="outlined" >        
        <InputLabel  variant="standard" component="h4" style={centerText}>
          ADMINISTRATOR <SupervisorAccountIcon />
        </InputLabel>
      </Card>
      </ThemeProvider>
      {list_and_popover.map((v,index) =>
        <div key={index}>
          <Link to={v.href_page} className="btn btn-primary">
              <Listitem 
              title={index > 0 ? "": "OPTION"}
              width={500} 
              text={<MouseOverPopover text={v.titre} 
              listexemple={
                <ul>
                  {v.ex.map((z,index) =>
                    <li key={index}>{z}</li>
                  )}
                </ul>
              }
              indice={<Indication 
                text={v.message}
                stylecss={style_indice} />} /> } 
              icon={<SendIcon />} 
              />  
        </Link>
      </div>
      )}
    </div>
  )
}
