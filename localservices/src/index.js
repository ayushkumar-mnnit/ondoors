
import React from "react";
import App from "./App";
// import ReactDOM  from "react-dom";
import "./index.css";


import { createRoot } from 'react-dom/client';



// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(<App />);




// ReactDOM.render(
// <React.StrictMode>
// <App/>
// </React.StrictMode>,
// document.getElementById('root')

// )