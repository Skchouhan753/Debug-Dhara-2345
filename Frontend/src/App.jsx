import Footer from "./components/Footer";
import OurPhilospy from "./components/Homepage/OurPhilospy";
import QA from "./components/Homepage/QA";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Footer />
         <OurPhilospy/>
        <QA/>
      </div>
    </>
  );
}

export default App;
