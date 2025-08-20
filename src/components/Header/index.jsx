import { Search } from "lucide-react";
import { useToDoContext } from "../../Provider";
import "./styles.css";

const Header = () => {
  const { setSearchQuery } = useToDoContext();

  const handleQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="header">
      <div className="search__container">
        <Search className="search" />
      </div>
      <input placeholder="Search" className="input" onChange={handleQuery} />
    </div>
  );
};

export default Header;
