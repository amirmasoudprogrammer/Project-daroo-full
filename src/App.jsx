import React, {useState} from 'react';
import Router from "./router/Router.jsx";



const App = () => {
const [names , setNames] = useState(false)

    return (
        <div>

            <Router/>

        </div>
    );
};

export default App;