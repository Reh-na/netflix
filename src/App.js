import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Navbar/>
 <Banner fetchUrl={requests.fetchNetflixOriginals}/>
<Row isPoster={true} title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
<Row title="Trend in india" fetchUrl={requests. fetchTrending}/>
<Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
<Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
<Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
<Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
<Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies}/>
<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

 </div>
  );
}

export default App;
