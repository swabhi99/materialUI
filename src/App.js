import { createTheme,ThemeProvider } from '@mui/material/styles'
import purple from '@mui/material/colors/purple';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from "./component/Layout";
import { NoteProvider } from './context/NoteContext'

const theme = createTheme({
  palette: {
    primary: {
      main:'#fefefe'
    },
    secondary :purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
}) 

function App() {
  return (
    <NoteProvider>
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
    </NoteProvider>
  );
}

export default App;
