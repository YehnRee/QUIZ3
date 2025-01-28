import Header from "./Components/Navbar";
import { Container } from "react-bootstrap";
import Dashboard from "./Screens/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<Dashboard />} exact />
          </Routes>
        </Container>
    </main>
    </Router>
    
  );
}

export default App;
