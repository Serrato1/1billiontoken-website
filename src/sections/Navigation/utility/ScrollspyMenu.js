import React from "react";
import { Link as OnepageLink } from "react-scroll";
import Link from 'next/link';

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const addAllClasses = [""];
  if (props.className) {
    addAllClasses.push(props.className);
  }
  return (
    <ul className={addAllClasses.join(" ")}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
        >
          <OnepageLink
            activeClass="nav-active"
            to={menu.path}
            spy={true}
            smooth={true}
            offset={parseInt(menu.offset)}
            duration={700}
          >
            {menu.name}
          </OnepageLink>
          {menu.subItems !== undefined && (
            <ul key={index} className="dropdown">
              {menu.subItems.map((subItem, i) => (
                  <li key={i}>
                    <Link href={subItem.path}>
                      <a>{subItem.name}</a>
                    </Link>
                  </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      <li>
        <button className="nav__button" onClick={()=>{
          window.location.href = "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x34d74a40b32def4c428e567608c36ed774e801c1";
        }}>
          Buy Now!
        </button>
      </li>
    </ul>

  );
};

export default ScrollspyMenu;
