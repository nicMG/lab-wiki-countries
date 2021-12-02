import { Route, Routes } from "react-router";
import  "./App.css";
import CountriesDetails from "./components/CountriesDetails";
import CountriesList from "./components/CountriesList";
import Nav from "./components/Nav";


function App() {

  return(
     <div  className="App">
       <Nav/>

        <div  className="container">
          <div  className="row">
            <CountriesList/>
            <Routes>
              <Route path=":id" element={<CountriesDetails/>}/>
            </Routes>
          </div>
        </div>
     </div>
  )

}

export  default App;

