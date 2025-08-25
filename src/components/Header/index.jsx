import { Search } from "lucide-react";
import { useToDoContext } from "../../Provider";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux/todoslice";
import "./styles.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleQuery = (e) => {
    dispatch(setSearchQuery(e.target.value));
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
