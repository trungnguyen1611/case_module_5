import './App.css';
import Header from './components/home-header/Header';
import Nav from './components/home-header/Nav';
import Results from './components/home-body/Results';
import Collections from './components/home-body/Collections';
import {Routes, Route} from 'react-router-dom';
import requests from './API/requests';
import {useState} from 'react';

function App() {
    const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

    return (
        <div className="app">
                <Header/>
                <Nav setSelectedOption={setSelectedOption}/>
            <Routes>
                <Route path='/' element={<Results selectedOption={selectedOption}/>}/>
                <Route path='/collections' element={<Collections />}/>
            </Routes>
        </div>
    );
}

export default App;
