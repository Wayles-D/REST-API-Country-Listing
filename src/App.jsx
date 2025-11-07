import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Navigation/Header";
import Homepage from "./Homepage";
import Footer from "./Navigation/Footer";
import Detail from "./Pages/Detail";

const App = () => {
  return (
  <>
    <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  </>
  )
};

export default App;
