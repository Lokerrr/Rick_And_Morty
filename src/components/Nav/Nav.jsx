import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function Nav({onSearch, logout}){
    
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to="/about">ABOUT</Link>
            </button>
            <button>
                <Link to="/home">HOME</Link>
            </button>

            <button>
                <Link to="/favorites">FAVORITES</Link>
            </button>
            <button onClick={logout}> Log Out </button>
        </nav>     
    )
}
