import NavBar from './Components/NavBar/NavBar'
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';
import useMediaQuery from './Components/MediaQuery/UseMediaQuery';

function App() {
  const is1024px = useMediaQuery('(min-width: 1024px)');
  return (
    <div className="App">
      <NavBar />
      {is1024px && <Banner />}
      <RowPost title={'Trending Now'}/>
      <RowPost title={'Hindi Movies & TV'}/>
      <RowPost title={'Action Movies'}/>
      <RowPost title={'Sci-Fi Movies'}/>
      <RowPost title={'Only on Netflix'}/>
      <RowPost title={'Best Picture Winners'}/>
      <RowPost title={'Bollywood Movies'}/>
      <RowPost title={'Comedies'}/>
      <RowPost title={'TV Thrillers'}/>
      <RowPost title={'Action and Adventures'}/>
      <RowPost title={'Horror Movies'}/>
      <Footer />
    </div>
  );
}

export default App;
