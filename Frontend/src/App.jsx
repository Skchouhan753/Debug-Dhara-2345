// import Homepage from "./Homepage/Homepage";
// import Footer from "./components/Footer";
// import Login from "./components/LoginPage/Login";
// function App() {
//   return (
//     <>
//       <div>
//         {/* <Navbar /> */}
//         <Homepage/>
//         {/* <Footer /> */}
//       </div>
//     </>
//   );
// }

// export default App;

import AllRoutes from "./AllRoutes/AllRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <AllRoutes />

        <Footer />
      </div>
    </>
  );
}

export default App;
