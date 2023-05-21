import './App.css';
import {Route, Routes} from "react-router-dom";
import {BreweriesPage} from "./pages/BreweriesPage";
import {BreweryDetailsPage} from "./pages/BreweryDetailsPage";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<BreweriesPage/>}/>
                <Route path='brewery_details/:id' element={<BreweryDetailsPage/>}/>
            </Routes>
        </>
    );
}

export default App;
