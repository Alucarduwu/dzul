/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//import './components/Menu';


import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
)



