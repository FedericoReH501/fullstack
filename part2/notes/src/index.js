import ReactDOM from "react-dom/client"
import App from "./App"
import axios from 'axios'


axios
.get('http://localhost:3001/notes')
.then(response=>{
  const notes = response
})





ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
)