import React from 'react'
import { Container } from 'react-bootstrap';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <Header/>
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
