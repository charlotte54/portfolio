import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
//Components
import Main from './components/Main'
import ProjectPage from './components/ProjectPage'
import MySkillsPage from './components/MySkillsPage'
import { AnimatePresence } from "framer-motion"
import SoundBar from "./subComponents/SoundBar";

function App() {

  const location = useLocation();
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>
    <SoundBar />

{/* For framer-motion animation on page change! */}
<AnimatePresence exitBeforeEnter>
<Switch  location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/project" component={ProjectPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>
    </Switch>
</AnimatePresence>
    
    
    </ThemeProvider>


    
    </>
    
}

export default App