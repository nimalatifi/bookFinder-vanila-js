
import basic from "../styles/basic.css"
import loader from "../styles/loader.css"
import indexPage from "../styles/index.css"
import Index from './index.js'
        
const index= new Index();
document.querySelector('.search-btn').addEventListener('click', index.find)
