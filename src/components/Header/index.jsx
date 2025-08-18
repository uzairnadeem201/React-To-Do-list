import { Search } from "lucide-react";
import './styles.css';
const Header = () => {
  return (
    <div className="header">
        <Search className="mt-4"/>
        <input placeholder="Search" className="input" />
      </div>
  )
}

export default Header;