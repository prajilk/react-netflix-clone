import NavBar from './Components/NavBar/NavBar'
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';
import useMediaQuery from './Components/MediaQuery/UseMediaQuery';
import { action, adventures, anime, comedies, hindi, horror, onlyOnNetflix, scifi, thrillers, trending } from './Components/Urls';

function App() {
  const Genre = [
    {'Trending Now': trending},
    {'Hindi Movies & TV': hindi},
    {'Action Movies': action},
    {'Sci-Fi Movies': scifi},
    {'Only on Netflix': onlyOnNetflix},
    {'Animes': anime},
    {'Comedy Movies': comedies},
    {'Thriller Movies': thrillers},
    {'Adventure Movies': adventures},
    {'Horror Movies': horror}
  ]
  const is1024px = useMediaQuery('(min-width: 1024px)');
  return (
    <div className="App">
      <NavBar />
      {is1024px && <Banner />}

      {Genre.map((obj,index)=>
        <RowPost title={Object.keys(obj)[0]} genre={Object.values(obj)[0]} key={index} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
