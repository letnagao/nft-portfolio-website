import './App.css';
import Collection from './components/collection/Collection';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Section2 from './components/section2/Section2';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Nav />
      <Section2 />
      <Collection />
      {/* <Contact /> */}
    </div> 
  );
}

export default App;
