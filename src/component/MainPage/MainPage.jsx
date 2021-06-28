import React, { useState } from "react";
import Modal from "./../Modal/Modal";
import { AiOutlineMenu } from "react-icons/ai";
import "./MainPage.css";
import SliderBar from "./../Slider/Slider";
const MainPage = () => {
  const [modal, setmodal] = useState(false);
  const [sliderShow, setSliderShow] = useState(false);

  return (
    <div className="mainPage w-100 vh-100 d-flex justify-content-center align-items-center bg-light ">
      <button
        onClick={() => {
          setSliderShow((c) => !c);
        }}
        className="text-primary fs-1  fixed-top m-4 border border-0 bg-transparent"
      >
        <AiOutlineMenu />
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => {
          setmodal(true);
        }}
      >
        Show Modal
      </button>
      {modal && <Modal setModal={setmodal} />}
      <SliderBar show={sliderShow} setShow={setSliderShow} />
    </div>
  );
};

export default MainPage;
