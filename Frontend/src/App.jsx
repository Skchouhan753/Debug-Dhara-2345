import Footer from "./components/Footer";
import OurPhilospy from "./components/Homepage/OurPhilospy";
import QA from "./components/Homepage/QA";
import TalkWithExpert from "./components/Homepage/TalkWithExpert";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <OurPhilospy />
        <QA />
        <TalkWithExpert />
        <Footer />
      </div>
    </>
  );
}

export default App;
