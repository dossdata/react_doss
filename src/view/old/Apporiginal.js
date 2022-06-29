
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Button, CardContent,Card, Grid, Paper,Box, InputLabel, NativeSelect, FormControl, FormControlLabel, Checkbox } from "@mui/material";
import ResponsiveAppBar from "./Navebar";
import MultipleSelectCheckmarks from './Select_form';
import StickyHeadTable from './Table_form';
import GridExemple from './Table_ag_grid';

function App() {
  
  const pages = ['Statistques','Situation tva', 'Declaration'];
  const settings = ['Profile', 'Message','Admin','Deconnexion'];

  const portfeuil = [
    'ABOQ',
    'FCO',
    'NL',
    'MLEM',
    'JHA',
    'JGA',
    'DSE',
    'PEG',
    'OCO',
    'ACO',
  ];

  
  const exercice = [
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2023',
  ];

  return (
    <div className="App" style={{background: "#efe7e7"}}>
      <ResponsiveAppBar pages={pages} settings={settings} />      
      <CardContent width={"100%"}>
        
        <Box 
        display="flex" 
        width={"100%"} height={90} 
        bgcolor="#e5e5e5"
        alignItems="center"
        justifyContent="center"
      >
        <Card >
         <Grid container spacing={1}>
                      
         <Grid item>
          <MultipleSelectCheckmarks names={portfeuil} tag="Cdm" />
         </Grid>

          <Grid item>
          <FormControl>
            Dernier Exercice <Checkbox />
          </FormControl>
          </Grid>

          <Grid item>
            <MultipleSelectCheckmarks names={exercice}  tag="Exo"/>
          </Grid>

          <Grid item>
            <br/>
            <Button 
            size='20'
            variant='outlined' color={"primary"}>
              Valider
            </Button>&nbsp;
          </Grid>        

          </Grid>
        </Card>
      </Box>
          {/* <StickyHeadTable /> */}
          < GridExemple/>
      </CardContent>
    </div>
  );
}

export default App;
