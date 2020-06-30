
import style from "../styles/basic.css"
import style1 from "../styles/loader.css"
import style2 from "../styles/index.css"
import Index from './index.js'
        
const index= new Index();
document.querySelector('.search-btn').addEventListener('click', index.find)
