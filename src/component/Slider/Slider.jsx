import React, { useState } from "react";
import "./Slider.css";
import { IoMdClose } from "react-icons/io";
import { FaHome, FaFolderOpen, FaCalendarAlt } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";

const SliderBar = ({ show, setShow }) => {
  const [icons] = useState([
    { icon: <FaHome />, link: "/" },
    { icon: <AiOutlineTeam />, link: "/team" },
    { icon: <FaFolderOpen />, link: "/project" },
    { icon: <FaCalendarAlt />, link: "/calender" },
    { icon: <HiDocumentText />, link: "/document" },
  ]);

  return (
    <div className={show ? " slider vh-100 open " : " slider vh-100 close "}>
      <button
        type="button"
        onClick={() => setShow(false)}
        className="position-fixed end-0 text-danger fs-2 btn shadow-none "
      >
        <IoMdClose />
      </button>
      <div className="d-flex flex-column ">
        <div>
          <h2 className="title">
            Coding <span className="text-info">Addict</span>
          </h2>
        </div>
        <div className="d-flex flex-column fs-2 mt-5">
          <ul className="menuSlider list-group list-group-flush">
            {icons.map((e) => {
              return (
                <a
                  href={e.link}
                  className="list-group-item p-2 m-1 text-secondary"
                >
                  {e.icon}
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SliderBar;
