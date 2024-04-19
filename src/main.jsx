import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx'
import './Style/index.css'
import "./Style/Fonts.css"
import "./Style/App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)
