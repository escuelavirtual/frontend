import React from "react";
import "./styles.css";

type DropdownProps = {
  content: Array<string | JSX.Element>;
};

const Dropdown: React.FC<DropdownProps> = ({ content }) => {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">
          { content[0] }
        </button>
        <div className="dropdown-content">
            {content.map( item => (
                <a href="#">{item}</a>
            ))}
        </div>
      </div>
    </>
  );
}

export default Dropdown;