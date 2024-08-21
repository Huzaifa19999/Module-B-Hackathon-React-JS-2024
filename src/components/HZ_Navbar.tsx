import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import "./HZ_Navbar.css"

type Navprops = {

  links:any,
  title:string
}

export default function HZ_Navbar(props:Navprops) {

  const {links,title} = props

  let [menu, setMenu] = useState<any>("true");
  let [activeMenu, setActiveMenu] = useState("navLinks");

  useEffect(() => {
    menu ? setActiveMenu("navLinks") : setActiveMenu("navLinks activeMenu");
  }, [menu]);

  return (
    <div className="navBar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          color: "white",
          fontWeight: "bolder",
          fontSize: "xx-large"
        }}
      >
        {title}
      </div>

      <div style={{ marginLeft: "auto", marginRight: "auto"}}>
        <ul className={activeMenu}>
          {links.map((item:any, index:any) => (
            <NavLink
              to={item.to}
              key={index}
              className="link"
              onClick={() => setMenu(!menu)}
            >
              {item.label}
            </NavLink>
          ))}
        </ul>

        <div className="icon">
          {menu ? (
            <MenuIcon onClick={() => setMenu(!menu)} />
          ) : (
            <CloseIcon onClick={() => setMenu(!menu)} />
          )}
        </div>
      </div>
    </div>
  );
}