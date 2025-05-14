import { spawn } from "child_process";
import IsometricShape from "./IsometricShape";
import SvgCube from "./SvgCube";

const BoxTest = () => {
  //   svg 142 162 === isoshapes size 82
  return (
    <>
      <div className="flex relative items-center justify-center">
        <SvgCube className="absolute"/>
        <IsometricShape size={81} className="absolute ">
          {{ 
            left: <span>Some text</span>,
            top: <span>More text</span>,
            right: <span>Even More text</span>,
         }}
        </IsometricShape>
      </div>
    </>
  );
};

export default BoxTest;
