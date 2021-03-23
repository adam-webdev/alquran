import React  from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Bookmark from './components/bookmark/bookmark';
import DetailSurah from './components/detail-surah/detail-surah';
import Favorite from './components/favorite/favorite';
import Header from './components/header/header';
import Home from './components/home/home';
import DaftarSurah from './components/surah/daftar-surah';
import Tersimpan from './components/tersimpan/tersimpan';
import GlobalStyle, { Container } from './globalStyle';


const Routing = () => {
  return(
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/tersimpan'>
        <Tersimpan />
      </Route>
      <Route path='/daftar-surah'>
        <DaftarSurah />
      </Route>
      <Route path='/favorite'>
        <Favorite />
      </Route>
      <Route path='/pengaturan'>
        <Bookmark />
      </Route>
      <Route path='/detail-surah/:id'>
        <DetailSurah />
      </Route>
    </Switch>
  )
}
function App() {

  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Header />
        <Routing />
      </Container>
    </Router>
  );
}

export default App;
