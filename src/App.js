import NavBar from './Components/NavBar/NavBar'
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
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
