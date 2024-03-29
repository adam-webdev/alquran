import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";
import Bookmark from "./components/bookmark/bookmark";
import DetailSurah from "./components/detail-surah/detail-surah";
import Favorite from "./components/favorite/favorite";
import Hadist from "./components/hadith/hadist";
import DetailHadist from "./components/detail-hadist/detail-hadist";
import Home from "./components/home/home";
import DaftarSurah from "./components/surah/daftar-surah";
import Tersimpan from "./components/tersimpan/tersimpan";
import GlobalStyle from "./globalStyle";
import Doa from "./components/doa/doa";

export const baseUrl = "https://api.myquran.com/v2";
export const baseUrlQuran = "https://api.quran.gading.dev";
export const baseUrlHadith = "https://api.hadith.gading.dev";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tersimpan" component={Tersimpan} />
      <Route path="/daftar-surah/" component={DaftarSurah} />
      <Route path="/detail-surah/:surahId" component={DetailSurah} />
      <Route path="/favorite" component={Favorite} />
      <Route path="/pengaturan" component={Bookmark} />
      <Route exact path="/hadist" component={Hadist} />
      <Route path="/hadist/:books" component={DetailHadist} />
      <Route exact path="/doa" component={Doa} />
    </Switch>
  );
};
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routing />
    </Router>
  );
}

export default App;
