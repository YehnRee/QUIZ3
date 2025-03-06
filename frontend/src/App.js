import Header from "./Components/Navbar";
import { Container } from "react-bootstrap";
import Dashboard from "./Screens/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductScreen from "./Screens/ProductScreen";
import UserScreen from "./Screens/UserScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<Dashboard />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/account/:id' element={<UserScreen />} />
          </Routes>
        </Container>
    </main>
    </Router>
    
  );
}

export default App;
