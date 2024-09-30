import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import VersionsList from './components/VersionsList';

function App() {
  return (
    <Router>
      <Container>
        <VersionsList />
      </Container>
      <footer>© 2024 Vinícius Pontes Lima</footer>
    </Router>
  );
}

export default App;
