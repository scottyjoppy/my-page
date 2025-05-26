import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

interface IsoMapProps {
  onActiveIsl: (value: string | null) => void;
}

const IsometricMap: React.FC<IsoMapProps> = ({ onActiveIsl }) => {
  const [activeIsl, setActiveIsl] = useState<string | null>(null);
  const [zoomViewBox, setZoomViewBox] = useState("0 0 1288 1344");
  const [animationTrigger, setAnimationTrigger] = useState<
    "keyboard" | "default" | null
  >(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const toggleIsl = (isl: string) => {
    const newIsl = activeIsl === isl ? null : isl;
    setActiveIsl(newIsl);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIsl !== null) {
        setZoomViewBox((prevZoomViewBox) => {
          const [x, y, w, h] = prevZoomViewBox.split(" ").map(Number);
          let newViewBoxValue: string | null = null;

          switch (e.key) {
            case "Escape":
              setZoomViewBox("0 0 1288 1344");
              setActiveIsl(null);
              setAnimationTrigger("default"); // Escape returns to default, so use 'default' duration
              return prevZoomViewBox; // Return prev here as it's set above
            case "ArrowDown":
              newViewBoxValue = `${x} ${y + 50} ${w} ${h}`;
              break;
            case "ArrowRight":
              newViewBoxValue = `${x + 50} ${y} ${w} ${h}`;
              break;
            case "ArrowLeft":
              newViewBoxValue = `${x - 50} ${y} ${w} ${h}`;
              break;
            case "ArrowUp":
              newViewBoxValue = `${x} ${y - 50} ${w} ${h}`;
              break;
          }

          if (newViewBoxValue) {
            e.preventDefault();
            setAnimationTrigger("keyboard"); // Mark as keyboard-triggered
            return newViewBoxValue;
          }

          return prevZoomViewBox;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIsl]);

  useEffect(() => {
    if (activeIsl === "isl-w") {
      setZoomViewBox("200 300 300 300");
      setAnimationTrigger("default"); // This is a default animation
    } else if (activeIsl === null) {
      setZoomViewBox("0 0 1288 1344");
      setAnimationTrigger("default"); // This is a default animation
    }
    onActiveIsl(activeIsl);
  }, [activeIsl, onActiveIsl]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    gsap.killTweensOf(svg);

    const duration = animationTrigger === "keyboard" ? 0.1 : 1; // Shorter for keyboard, longer for default transitions

    gsap.to(svg, {
      duration: duration,
      ease: "power3.inOut",
      attr: {
        viewBox: zoomViewBox,
      },
      overwrite: true,
    });
  }, [zoomViewBox, animationTrigger]); // Now also depends on animationTrigger

  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 1288 1344"
    //   className="w-full h-full"
    // >
    //   <g id="SquareMask">
    //     <mask
    //       id="mask0_70_132235"
    //       width="1288"
    //       height="1344"
    //       x="0"
    //       y="0"
    //       maskUnits="userSpaceOnUse"
    //       style={{ maskType: "alpha" }}
    //     >
    // <text fontSize="8" fill="black" transform="rotate(-30) skewX(-30) translate(45 80)">
    //               <textPath href="#TextPath">
    //                 DAY 40
    //               </textPath>
    //             </text>
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      // viewBox={zoomViewBox}
      viewBox="0 0 1288 1344"
      className="w-full h-full"
    >
      <g id="SquareMask">
        <mask
          id="mask0_70_132235"
          width="1288"
          height="1344"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <rect id="Rectangle 1" width="1288" height="1344" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_70_132235)">
          <g id="IsometricImage">
            <g id="Landscape">
              <rect
                onClick={() => setActiveIsl(null)}
                id="WaterBottom"
                width="1288"
                height="1344"
                fill="#143D60"
              />
              <g id="IslS" onClick={() => setActiveIsl("isl-s")}>
                <g id="IslSDepth" opacity=".65">
                  <path
                    id="Vector 27"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1190 1263v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 31"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1134 1279v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 33"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1078 1295v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 35"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1022 1311v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 40"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m455 1067 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 41"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m441 1091 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 44"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m469 1155 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 45"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m455 1179 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 46"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m427 1211 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 47"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m385 1251 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 48"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m357 1283 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 49"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m329 1315 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 50"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m315 1339 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 42"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m455 1115 7-4-28-16v8l21 12Z"
                  />
                  <path
                    id="Vector 43"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m469 1139 7-4-28-16v8l21 12Z"
                  />
                  <path
                    id="Vector 37"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M952 1335v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 26"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1267 1171-7-4 28-16v8l-21 12Z"
                  />
                  <path
                    id="Vector 29"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1225 1227-7-4 28-16v8l-21 12Z"
                  />
                  <path
                    id="Vector 28"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1190 1263v-8l42-24v8l-42 24Z"
                  />
                  <path
                    id="Vector 30"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1134 1279v-8l42-24v8l-42 24Z"
                  />
                  <path
                    id="Vector 39"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1239 1203-7-4 42-24v8l-35 20Z"
                  />
                  <path
                    id="Vector 32"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1078 1295v-8l42-24v8l-42 24Z"
                  />
                  <path
                    id="Vector 34"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1022 1311v-8l42-24v8l-42 24Z"
                  />
                  <path
                    id="Vector 36"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M952 1335v-8l56-32v8l-56 32Z"
                  />
                  <path
                    id="Vector 38"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M910 1343h-14l42-24v8l-28 16Z"
                  />
                </g>
                <path
                  id="IslSTop"
                  fill="#A0C878"
                  stroke="#556D3C"
                  strokeLinejoin="round"
                  d="M1288 1039v112l-28 16 14 8-42 24 14 8-28 16 14 8-42 24-14-8-42 24-14-8-42 24-14-8-42 24-14-8-56 32-14-8-42 24H308l14-8-14-8 28-16-14-8 42-24-14-8 42-24-14-8 56-32-14-8 42-24-14-8 28-16-14-8 14-8-28-16 14-8-28-16 14-8-14-8 28-16-14-8 42-24 14 8 56-32 14 8 14-8 28 16 14-8 14 8 70-40 14 8 112-64 14 8 42-24 14 8 28-16 14 8 14-8 28 16 14-8 56 32 14-8 84 48 14-8 112 64Z"
                />
              </g>
              <g id="IslE" onClick={() => setActiveIsl("isl-e")}>
                <g id="IslEDepth" opacity=".65">
                  <path
                    id="Vector 1"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1288 871v-8l-28-16v8l28 16Z"
                  />
                  <path
                    id="Vector 3"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1246 863v-8l-56-32v8l56 32Z"
                  />
                  <path
                    id="Vector 5"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1176 839v-8l-56-32v8l56 32Z"
                  />
                  <path
                    id="Vector 6"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1127 795 7-4-42-24v8l35 20Z"
                  />
                  <path
                    id="Vector 2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1246 863v-8l14-8v8l-14 8Z"
                  />
                  <path
                    id="Vector 4"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M1176 839v-8l14-8v8l-14 8Z"
                  />
                  <path
                    id="Vector 7"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1099 763 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 8"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1113 739 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 9"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1127 715 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 10"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1155 683 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 11"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1155 667 7-4-28-16v8l21 12Z"
                  />
                  <path
                    id="Vector 12"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1141 643 7-4-28-16v8l21 12Z"
                  />
                  <path
                    id="Vector 13"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1127 619 7-4-42-24v8l35 20Z"
                  />
                  <path
                    id="Vector 14"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1099 587 7-4-42-24v8l35 20Z"
                  />
                  <path
                    id="Vector 15"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1071 555 7-4-70-40v8l63 36Z"
                  />
                  <path
                    id="Vector 16"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1015 507 7-4-70-40v8l63 36Z"
                  />
                  <path
                    id="Vector 18"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m917 419 7-4-70-40v8l63 36Z"
                  />
                  <path
                    id="Vector 19"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m861 371 7-4-28-16v8l21 12Z"
                  />
                  <path
                    id="Vector 20"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m847 347 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 21"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m861 323 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 22"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m889 291 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 23"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m917 259 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 24"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m973 211 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 25"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m1029 163 7-4-14-8v8l7 4Z"
                  />
                  <path
                    id="Vector 17"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m959 459 7-4-56-32v8l49 28Z"
                  />
                </g>
                <path
                  id="IslETop"
                  fill="#A0C878"
                  stroke="#556D3C"
                  strokeLinejoin="round"
                  d="m1260 847 28 16V111l-28-16-14 8-28-16-14 8-14-8-28 16-14-8-42 24-14-8-70 40 14 8-70 40 14 8-70 40 14 8-42 24 14 8-42 24 14 8-28 16 14 8-14 8 28 16-14 8 70 40-14 8 56 32-14 8 70 40-14 8 70 40-14 8 42 24-14 8 42 24-14 8 28 16-14 8 28 16-14 8 14 8-42 24 14 8-28 16 14 8-28 16 14 8-14 8 42 24-14 8 56 32 14-8 56 32 14-8Z"
                />
              </g>
            </g>
            <g id="Boat">
              <path
                id="Vector 89"
                fill="#372B16"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m210 1128-7-4 14-8 7 4-14 8Z"
              />
              <path
                id="Vector 88"
                fill="#554222"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m202 1115.5 1 8.5 14-8-1-8.5-14 8Z"
              />
              <path
                id="Vector 91"
                fill="#644D26"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m217 1116-1-8.5 10 5.5-2 7-7-4Z"
              />
              <path
                id="Vector 92 (Stroke)"
                fill="#000"
                d="M215.5 1087.67c0-.37.224-.67.5-.67s.5.3.5.67V1120h-1v-32.33Z"
              />
              <path
                id="Vector 90"
                fill="#675026"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m202 1115.5 10 5.5-2 7-7-4-1-8.5Z"
              />
              <path
                id="Vector 87"
                fill="#70582E"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m210 1128 2-7 14-8-2 7-14 8Z"
              />
              <path
                id="Vector 93"
                fill="#D9D9D9"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m198 1114 18-27v21.07l-18 5.93Z"
              />
            </g>
            <g id="Car">
              <path
                id="Vector 56"
                fill="#102D75"
                stroke="#2B59CF"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m982.572 376.479 1.698 1.205 1.099-.616-1.619-1.619-1.178 1.03Z"
              />
              <path
                id="Vector 55"
                fill="#102D75"
                stroke="#2B59CF"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m973 381.781 2.061 1.178 1.326-.737-2.062-1.325-1.325.884Z"
              />
              <g id="Tire">
                <g id="side-faces">
                  <path
                    id="side-face"
                    fill="#000"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeWidth=".5"
                    d="M981.892 379.642c-.201-.115-.324-.363-.324-.716 0-.705.495-1.563 1.106-1.916.293-.17.56-.192.758-.091l-1.192-.688c-.198-.101-.464-.079-.758.091-.611.353-1.106 1.211-1.106 1.916 0 .353.124.601.324.716l1.192.688Z"
                    clipRule="evenodd"
                  />
                </g>
                <path
                  id="cap-face"
                  fill="#4C4C4C"
                  stroke="#000"
                  strokeWidth=".5"
                  d="M983.78 377.649c0 .705-.495 1.563-1.106 1.916-.611.353-1.106.067-1.106-.639 0-.705.495-1.563 1.106-1.916.611-.353 1.106-.067 1.106.639Z"
                />
              </g>
              <g id="Tire_2">
                <g id="side-faces_2">
                  <path
                    id="side-face_2"
                    fill="#000"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeWidth=".5"
                    d="M972.748 384.958c-.2-.116-.324-.364-.324-.717 0-.705.496-1.563 1.107-1.916.293-.169.56-.191.758-.091l-1.192-.688c-.198-.1-.465-.078-.758.091-.611.353-1.106 1.211-1.106 1.916 0 .353.124.601.324.717l1.191.688Z"
                    clipRule="evenodd"
                  />
                </g>
                <path
                  id="cap-face_2"
                  fill="#4C4C4C"
                  stroke="#000"
                  strokeWidth=".5"
                  d="M974.637 382.964c0 .705-.495 1.563-1.106 1.916-.611.353-1.107.067-1.107-.639 0-.705.496-1.563 1.107-1.916s1.106-.067 1.106.639Z"
                />
              </g>
              <path
                id="Vector 53"
                fill="#3A72FF"
                stroke="#2B59CF"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m981.246 374.712-6.185 3.534-8.246-4.712L973 370l8.246 4.712Z"
              />
              <path
                id="Vector 52"
                fill="#3A72FF"
                stroke="#2B59CF"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m981.246 374.712 4.123.884-8.246-4.712L973 370l8.246 4.712Z"
              />
              <path
                id="Vector 49_2"
                fill="#3A72FF"
                stroke="#2B59CF"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m960.63 380.308 8.247 4.712v1.473l-8.247-4.712v-1.473Z"
              />
              <path
                id="Vector 50_2"
                fill="#3A72FF"
                stroke="#2B59CF"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m960.63 380.308 8.247 4.712 4.123-3.239-8.247-4.713-4.123 3.24Z"
              />
              <path
                id="Vector 51"
                fill="#E3FEFF"
                stroke="#2B59CF"
                strokeLinejoin="round"
                strokeWidth=".5"
                d="m973 381.781 2.061-3.535-8.246-4.712-2.062 3.534 8.247 4.713Z"
              />
              <g id="Subtract">
                <path
                  fill="#3A72FF"
                  d="M985.37 375.596v1.473l-1.037.591c.008-.086.013-.171.013-.254 0-1.091-.71-1.533-1.587-.988-.876.546-1.587 1.872-1.587 2.963l.002.084-5.903 3.373c.003-.044.006-.087.006-.131 0-1.091-.782-1.532-1.746-.987s-1.746 1.872-1.746 2.963c0 .049.003.097.006.143l-2.914 1.666v-1.472l4.123-3.239 2.061-3.535 6.185-3.534 4.124.884Z"
                />
                <path
                  fill="#2B59CF"
                  d="M985.37 375.596h.25a.25.25 0 0 0-.198-.244l-.052.244Zm0 1.473.124.217a.251.251 0 0 0 .126-.217h-.25Zm-1.037.591-.249-.023a.251.251 0 0 0 .113.234c.079.05.179.053.26.007l-.124-.218Zm.013-.254h.25-.25Zm-1.587-.988-.132-.212.132.212Zm-1.587 2.963h-.25.25Zm.002.084.125.217a.249.249 0 0 0 .125-.226l-.25.009Zm-5.903 3.373-.249-.014a.25.25 0 0 0 .373.231l-.124-.217Zm.006-.131h.25-.25Zm-1.746-.987-.123-.218.123.218Zm-1.746 2.963h-.25.25Zm.006.143.124.218a.25.25 0 0 0 .125-.234l-.249.016Zm-2.914 1.666h-.25a.25.25 0 0 0 .374.218l-.124-.218Zm0-1.472-.155-.197a.252.252 0 0 0-.095.197h.25Zm4.123-3.239.154.196a.244.244 0 0 0 .062-.07l-.216-.126Zm2.061-3.535-.124-.217a.259.259 0 0 0-.092.091l.216.126Zm6.185-3.534.052-.244a.25.25 0 0 0-.176.027l.124.217Zm4.124.884h-.25v1.473h.5v-1.473h-.25Zm0 1.473-.124-.217-1.037.591.124.217.124.218 1.037-.592-.124-.217Zm-1.037.591.249.024c.008-.09.014-.184.014-.278h-.5c0 .073-.004.149-.012.231l.249.023Zm.013-.254h.25c0-.591-.192-1.077-.582-1.32-.398-.247-.902-.182-1.387.12l.132.212.132.213c.392-.244.682-.23.859-.12.184.115.346.394.346.895h.25Zm-1.587-.988-.132-.212c-.485.302-.909.808-1.211 1.371-.302.564-.494 1.209-.494 1.804h.5c0-.495.162-1.059.435-1.568.273-.509.643-.939 1.035-1.182l-.133-.213Zm-1.587 2.963h-.25c0 .034.002.078.003.093l.249-.009.25-.009-.002-.075h-.25Zm.002.084-.124-.217-5.903 3.373.124.217.124.217 5.904-3.373-.125-.217Zm-5.903 3.373.25.014c.002-.036.006-.092.006-.145h-.5c0 .034-.003.066-.005.117l.249.014Zm.006-.131h.25c0-.6-.217-1.087-.638-1.325-.419-.236-.954-.178-1.481.12l.123.218.123.218c.437-.248.776-.241.989-.12.211.119.384.399.384.889h.25Zm-1.746-.987-.123-.218c-.529.3-.995.804-1.327 1.368-.333.564-.546 1.212-.546 1.813h.5c0-.49.177-1.051.477-1.559.299-.508.707-.94 1.142-1.186l-.123-.218Zm-1.746 2.963h-.25c0 .058.003.112.006.16l.25-.017.249-.016a1.948 1.948 0 0 1-.005-.127h-.25Zm.006.143-.124-.217-2.914 1.666.124.217.124.218 2.914-1.666-.124-.218Zm-2.914 1.666h.25v-1.472h-.5v1.472h.25Zm0-1.472.154.196 4.123-3.239-.154-.196-.155-.197-4.123 3.239.155.197Zm4.123-3.239.216.126 2.061-3.535-.216-.126-.216-.126-2.061 3.535.216.126Zm2.061-3.535.124.217 6.185-3.534-.124-.217-.124-.217-6.185 3.534.124.217Zm6.185-3.534-.053.245 4.124.883.053-.244.052-.244-4.124-.884-.052.244Z"
                />
              </g>
              <path
                id="Vector 57"
                fill="#FBFF25"
                d="m961.725 382.005-.684-.391a.1.1 0 0 1-.05-.087v-.403a.1.1 0 0 1 .15-.087l.683.391a.101.101 0 0 1 .051.087v.403a.1.1 0 0 1-.15.087Z"
              />
              <path
                id="Vector 58"
                fill="#FBFF25"
                d="m968.393 385.825-.684-.39a.1.1 0 0 1-.05-.087v-.404a.1.1 0 0 1 .15-.086l.683.39a.101.101 0 0 1 .051.087v.403a.1.1 0 0 1-.15.087Z"
              />
            </g>
            <g id="IslWGroup" onClick={() => toggleIsl("isl-w")}>
              <g id="IslW">
                <g id="IslWDepth">
                  <path
                    id="Vector 26_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M14 1007v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 27_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M56 999v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 28_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M112 983v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 29_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M168 967v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 32_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M280 983v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 33_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M322 975v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 41_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M364 967v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 49_3"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M630 735v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 74"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m175.5 315 6.5-4-14-8v8l7.5 4Z"
                  />
                  <path
                    id="Vector 75"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m161.5 339 6.5-4-14-8v8l7.5 4Z"
                  />
                  <path
                    id="Vector 76"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m133.5 371 6.5-4-14-8v8l7.5 4Z"
                  />
                  <path
                    id="Vector 77"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m91.5 411 6.5-4-14-8v8l7.5 4Z"
                  />
                  <path
                    id="Vector 78"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m77.5 435 6.5-4-14-8v8l7.5 4Z"
                  />
                  <path
                    id="Vector 50_3"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M672 727v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 59"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M826 751v-8l-14-8v8l14 8Z"
                  />
                  <path
                    id="Vector 51_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M714 735v-8l-28-16v8l28 16Z"
                  />
                  <path
                    id="Vector 55_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M756 743v-8l-28-16v8l28 16Z"
                  />
                  <path
                    id="Vector 57_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M798 751v-8l-28-16v8l28 16Z"
                  />
                  <path
                    id="Vector 30_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M210 975v-8l-28-16v8l28 16Z"
                  />
                  <path
                    id="Vector 31_2"
                    fill="#6E8B51"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M252 983v-8l-28-16v8l28 16Z"
                  />
                  <path
                    id="Vector 26_3"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M14 1007v-8l28-16v8l-28 16Z"
                  />
                  <path
                    id="Vector 36_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M168 967v-8l14-8v8l-14 8Z"
                  />
                  <path
                    id="Vector 37_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M210 975v-8l14-8v8l-14 8Z"
                  />
                  <path
                    id="Vector 38_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M252 983v-8l14-8v8l-14 8Z"
                  />
                  <path
                    id="Vector 39_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M280 983v-8l28-16v8l-28 16Z"
                  />
                  <path
                    id="Vector 40_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M322 975v-8l28-16v8l-28 16Z"
                  />
                  <path
                    id="Vector 42_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M364 967v-8l42-24v8l-42 24Z"
                  />
                  <path
                    id="Vector 43_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m399 931-7-4 28-16v8l-21 12Z"
                  />
                  <path
                    id="Vector 44_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m413 907-7-4 42-24v8l-35 20Z"
                  />
                  <path
                    id="Vector 45_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m441 875-7-4 42-24v8l-35 20Z"
                  />
                  <path
                    id="Vector 46_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m469 843-7-4 56-32v8l-49 28Z"
                  />
                  <path
                    id="Vector 48_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m567 755-7-4 56-32v8l-49 28Z"
                  />
                  <path
                    id="Vector 62"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m875 691-7-4 56-32v8l-49 28Z"
                  />
                  <path
                    id="Vector 61"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m861 715-7-4 28-16v8l-21 12Z"
                  />
                  <path
                    id="Vector 63"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m917 651-7-4 28-16v8l-21 12Z"
                  />
                  <path
                    id="Vector 64"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m931 627-7-4 28-16v8l-21 12Z"
                  />
                  <path
                    id="Vector 65"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m945 603-7-4 14-8v8l-7 4Z"
                  />
                  <path
                    id="Vector 66"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m931 579-7-4 14-8v8l-7 4Z"
                  />
                  <path
                    id="Vector 67"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m903 547-7-4 14-8v8l-7 4Z"
                  />
                  <path
                    id="Vector 68"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m623 435-7-4 14-8v8l-7 4Z"
                  />
                  <path
                    id="Vector 69"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m609 411-7-4 14-8v8l-7 4Z"
                  />
                  <path
                    id="Vector 70"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m581 379-7-4 14-8v8l-7 4Z"
                  />
                  <path
                    id="Vector 71"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m553 347-7-4 14-8v8l-7 4Z"
                  />
                  <path
                    id="Vector 72"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m511 307-7-4 14-8v8l-7 4Z"
                  />
                  <path
                    id="Vector 73"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m483 275-7-4 14-8v8l-7 4Z"
                  />
                  <path
                    id="Vector 52_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M630 735v-8l28-16v8l-28 16Z"
                  />
                  <path
                    id="Vector 53_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M672 727v-8l14-8v8l-14 8Z"
                  />
                  <path
                    id="Vector 54"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M714 735v-8l14-8v8l-14 8Z"
                  />
                  <path
                    id="Vector 56_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M756 743v-8l14-8v8l-14 8Z"
                  />
                  <path
                    id="Vector 58_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M798 751v-8l14-8v8l-14 8Z"
                  />
                  <path
                    id="Vector 60"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M826 751v-8l42-24v8l-42 24Z"
                  />
                  <path
                    id="Vector 47_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="m511 803-7-4 70-40v8l-63 36Z"
                  />
                  <path
                    id="Vector 34_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M56 999v-8l42-24v8l-42 24Z"
                  />
                  <path
                    id="Vector 35_2"
                    fill="#729053"
                    stroke="#556D3C"
                    strokeLinejoin="round"
                    d="M112 983v-8l42-24v8l-42 24Z"
                  />
                </g>
                <path
                  id="IslWTop"
                  fill="#A0C878"
                  stroke="#556D3C"
                  strokeLinejoin="round"
                  d="m868 719-42 24-14-8-14 8-28-16-14 8-28-16-14 8-28-16-14 8-14-8-28 16-14-8-56 32 14 8-70 40 14 8-56 32 14 8-42 24 14 8-42 24 14 8-28 16 14 8-42 24-14-8-28 16-14-8-28 16-14-8-14 8-28-16-14 8-28-16-14 8-14-8-42 24-14-8-42 24-14-8-28 16-14-8V463l28-16 14 8 42-24-14-8 28-16-14-8 56-32-14-8 42-24-14-8 28-16-14-8 56-32 14 8 42-24 14 8 28-16 14 8 28-16 14 8 28-16 14 8 14-8 56 32-14 8 42 24-14 8 56 32-14 8 42 24-14 8 42 24-14 8 28 16-14 8 28 16 14-8 56 32 14-8 56 32 14-8 28 16 14-8 70 40-14 8 42 24-14 8 28 16-14 8 14 8-28 16 14 8-28 16 14 8-56 32 14 8-28 16 14 8Z"
                />
              </g>
              <g id="Sidewalks">
                <path
                  id="Vector 121"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m0 559-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 129"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m56 527-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 137"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m112 495-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 125"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m28 543-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 130"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m84 511-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 138"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m140 479-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 123"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m14 551-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 131"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m70 519-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 139"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m126 487-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 126"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m42 535-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 132"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m98 503-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 140"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m154 471-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 122"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m7 555-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 133"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m63 523-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 141"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m119 491-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 127"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m35 539-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 134"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m91 507-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 142"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m147 475-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 124"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m21 547-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 135"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m77 515-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 143"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m133 483-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 128"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m49 531-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 136"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m105 499-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 144"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m161 467-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 121_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m168 463-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 129_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m224 431-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 137_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m280 399-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 125_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m196 447-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 130_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m252 415-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 138_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m308 383-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 123_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m182 455-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 131_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m238 423-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 139_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m294 391-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 126_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m210 439-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 132_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m266 407-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 140_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m322 375-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 122_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m175 459-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 133_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m231 427-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 141_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m287 395-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 127_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m203 443-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 134_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m259 411-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 142_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m315 379-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 124_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m189 451-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 135_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m245 419-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 143_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m301 387-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 128_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m217 435-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 136_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m273 403-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 144_2"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m329 371-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 121_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m21 571-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 145"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m14 575-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 146"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m7 579-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 147"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m0 583-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 129_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m77 539-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 137_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m133 507-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 125_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m49 555-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 130_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m105 523-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 138_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m161 491-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 123_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m35 563-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 131_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m91 531-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 139_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m147 499-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 126_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m63 547-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 132_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m119 515-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 140_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m175 483-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 122_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m28 567-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 133_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m84 535-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 141_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m140 503-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 127_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m56 551-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 134_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m112 519-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 142_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m168 487-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 124_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m42 559-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 135_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m98 527-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 143_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m154 495-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 128_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m70 543-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 136_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m126 511-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 121_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m189 475-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 129_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m245 443-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 137_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m301 411-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 125_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m217 459-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 130_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m273 427-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 138_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m329 395-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 123_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m203 467-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 131_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m259 435-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 139_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m315 403-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 126_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m231 451-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 132_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m287 419-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 140_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m343 387-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 122_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m196 471-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 133_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m252 439-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 141_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m308 407-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 127_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m224 455-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 134_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m280 423-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 142_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m336 391-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 124_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m210 463-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 135_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m266 431-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 143_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m322 399-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 128_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m238 447-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 136_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m294 415-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 144_3"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m350 383-7 4 7 4 7-4-7-4Z"
                />
                <path
                  id="Vector 144_4"
                  fill="silver"
                  stroke="#9D9D9D"
                  strokeLinejoin="round"
                  d="m182 479-7 4 7 4 7-4-7-4Z"
                />
              </g>
              <path
                id="Road"
                fill="#1A1A1A"
                stroke="#000"
                strokeLinejoin="round"
                d="M336 375 0 567v16l350-200-14-8Z"
              />
              <g id="TramTracks">
                <path
                  id="Vector 188"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m7 587 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 193"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m35 571 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 198"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m91 539 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 191"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m21 579 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 199"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m77 547 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 194"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m49 563 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 200"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m105 531 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 189"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m0 591 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 195"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m28 575 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 202"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m84 543 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 192"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m14 583 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 203"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m70 551 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 196"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m42 567 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 204"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m98 535 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 190"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="M.5 599.33 7 603l-7 4-6.5-3.67 7-4Z"
                />
                <path
                  id="Vector 188_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m119 523 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 193_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m147 507 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 198_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m203 475 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 191_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m133 515 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 199_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m189 483 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 194_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m161 499 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 200_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m217 467 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 189_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m112 527 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 195_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m140 511 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 202_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m196 479 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 192_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m126 519 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 203_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m182 487 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 196_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m154 503 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 204_2"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m210 471 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 188_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m231 459 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 193_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m259 443 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 198_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m301 419 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 191_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m245 451 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 199_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m287 427 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 194_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m273 435 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 200_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m315 411 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 189_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m224 463 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 195_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m252 447 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 202_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m294 423 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 192_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m238 455 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 203_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m280 431 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 196_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m266 439 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 204_3"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m308 415 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 197"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m63 555 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 202_4"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m175 491 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 201"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m56 559 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 203_4"
                  fill="#9A9A9A"
                  stroke="#7D7D7D"
                  strokeLinejoin="round"
                  d="m168 495 14 8-7 4-14-8 7-4Z"
                />
                <path
                  id="Vector 205"
                  stroke="#2A2A2A"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                  d="m0 599 322-184"
                />
              </g>
              <g id="TramTrain">
                <g id="Tram">
                  <path
                    id="Vector 59_2"
                    fill="#fff"
                    stroke="#DBDBDB"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="M87 544.379h-6.632l-3.315-1.922v-3.845L93.632 529h6.631l3.316 1.922v3.845L87 544.379Z"
                  />
                  <g id="Group 31">
                    <path
                      id="Vector 61_2"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M80.368 555.913v-3.844H87v3.844h-6.632Z"
                    />
                    <path
                      id="Vector 62_2"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M103.579 542.457 87 552.069v3.844l16.579-9.612v-3.844Z"
                    />
                    <path
                      id="Vector 63_2"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m77.053 550.146 3.315 1.923v3.844l-3.315-1.922v-3.845Z"
                    />
                  </g>
                  <g id="Group 32">
                    <path
                      id="Vector 64_2"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M80.368 552.069v-7.69H87v7.69h-6.632Z"
                    />
                    <path
                      id="Vector 65_2"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M103.579 534.767 87 544.379v7.69l16.579-9.612v-7.69Z"
                    />
                    <path
                      id="Vector 66_2"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m77.053 542.457 3.315 1.922v7.69l-3.315-1.923v-7.689Z"
                    />
                  </g>
                  <g id="Group 30">
                    <path
                      id="Vector 69_2"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m92.05 542.457-4.102 2.403v5.766l4.101-2.403v-5.766Z"
                    />
                    <path
                      id="Vector 70_2"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m97.4 539.333-4.103 2.403v5.767L97.4 545.1v-5.767Z"
                    />
                    <path
                      id="Vector 71_2"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m102.749 536.21-4.102 2.402v5.767l4.102-2.403v-5.766Z"
                    />
                    <path
                      id="Vector 67_2"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M86.053 545.34h-4.737v5.767h4.737v-5.767Z"
                    />
                    <path
                      id="Vector 68_2"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m79.73 544.89-2.024-1.232v5.977l2.024 1.232v-5.977Z"
                    />
                  </g>
                  <path
                    id="Vector 72_2"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="m83.684 541.015-3.316-1.922 16.58-9.612 3.315 1.922-16.579 9.612Z"
                  />
                  <path
                    id="Vector 73_2"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="M80.368 540.534v-1.442l3.316 1.923v1.442l-3.316-1.923Z"
                  />
                  <path
                    id="Vector 74_2"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="m100.263 532.845-16.579 9.612v-1.442l16.579-9.612v1.442Z"
                  />
                </g>
                <g id="Tram_2">
                  <path
                    id="Vector 59_3"
                    fill="#fff"
                    stroke="#DBDBDB"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="M62.474 558.583h-6.632l-3.316-1.922v-3.845l16.58-9.612h6.63l3.317 1.923v3.844l-16.58 9.612Z"
                  />
                  <g id="Group 31_2">
                    <path
                      id="Vector 61_3"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M55.842 570.118v-3.845h6.632v3.845h-6.632Z"
                    />
                    <path
                      id="Vector 62_3"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m79.053 556.661-16.58 9.612v3.845l16.58-9.612v-3.845Z"
                    />
                    <path
                      id="Vector 63_3"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m52.526 564.351 3.316 1.922v3.845l-3.316-1.923v-3.844Z"
                    />
                  </g>
                  <g id="Group 32_2">
                    <path
                      id="Vector 64_3"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M55.842 566.273v-7.69h6.632v7.69h-6.632Z"
                    />
                    <path
                      id="Vector 65_3"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m79.053 548.971-16.58 9.612v7.69l16.58-9.612v-7.69Z"
                    />
                    <path
                      id="Vector 66_3"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m52.526 556.661 3.316 1.922v7.69l-3.316-1.922v-7.69Z"
                    />
                  </g>
                  <g id="Group 30_2">
                    <path
                      id="Vector 69_3"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m67.523 556.661-4.102 2.403v5.766l4.102-2.402v-5.767Z"
                    />
                    <path
                      id="Vector 70_3"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m72.873 553.537-4.102 2.403v5.767l4.102-2.403v-5.767Z"
                    />
                    <path
                      id="Vector 71_3"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m78.223 550.414-4.102 2.403v5.766l4.102-2.403v-5.766Z"
                    />
                    <path
                      id="Vector 67_3"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M61.526 559.545H56.79v5.767h4.737v-5.767Z"
                    />
                    <path
                      id="Vector 68_3"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m55.203 559.095-2.024-1.232v5.976l2.024 1.232v-5.976Z"
                    />
                  </g>
                  <path
                    id="Vector 72_3"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="m59.158 555.219-3.316-1.922 16.579-9.612 3.316 1.922-16.58 9.612Z"
                  />
                  <path
                    id="Vector 73_3"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="M55.842 554.739v-1.442l3.316 1.922v1.442l-3.316-1.922Z"
                  />
                  <path
                    id="Vector 74_3"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="m75.737 547.049-16.58 9.612v-1.442l16.58-9.612v1.442Z"
                  />
                </g>
                <g id="Tram_3">
                  <path
                    id="Vector 59_4"
                    fill="#fff"
                    stroke="#DBDBDB"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="M37.947 572.788h-6.631L28 570.865v-3.844l16.579-9.612h6.632l3.315 1.922v3.845l-16.579 9.612Z"
                  />
                  <g id="Group 31_3">
                    <path
                      id="Vector 61_4"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M31.316 584.322v-3.845h6.631v3.845h-6.631Z"
                    />
                    <path
                      id="Vector 62_4"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m54.526 570.865-16.579 9.612v3.845l16.58-9.612v-3.845Z"
                    />
                    <path
                      id="Vector 63_4"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m28 578.555 3.316 1.922v3.845L28 582.4v-3.845Z"
                    />
                  </g>
                  <g id="Group 32_3">
                    <path
                      id="Vector 64_4"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M31.316 580.477v-7.689h6.631v7.689h-6.631Z"
                    />
                    <path
                      id="Vector 65_4"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m54.526 563.176-16.579 9.612v7.689l16.58-9.612v-7.689Z"
                    />
                    <path
                      id="Vector 66_4"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m28 570.865 3.316 1.923v7.689L28 578.555v-7.69Z"
                    />
                  </g>
                  <g id="Group 30_3">
                    <path
                      id="Vector 69_4"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m42.997 570.865-4.102 2.403v5.767l4.101-2.403v-5.767Z"
                    />
                    <path
                      id="Vector 70_4"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m48.347 567.742-4.102 2.403v5.766l4.101-2.403v-5.766Z"
                    />
                    <path
                      id="Vector 71_4"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m53.697 564.618-4.102 2.403v5.767l4.101-2.403v-5.767Z"
                    />
                    <path
                      id="Vector 67_4"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M37 573.749h-4.737v5.767H37v-5.767Z"
                    />
                    <path
                      id="Vector 68_4"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m30.677 573.299-2.024-1.232v5.977l2.024 1.232v-5.977Z"
                    />
                  </g>
                  <path
                    id="Vector 72_4"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="m34.632 569.424-3.316-1.923 16.579-9.612 3.316 1.923-16.58 9.612Z"
                  />
                  <path
                    id="Vector 73_4"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="M31.316 568.943v-1.442l3.316 1.922v1.442l-3.316-1.922Z"
                  />
                  <path
                    id="Vector 74_4"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="m51.21 561.253-16.578 9.612v-1.441l16.579-9.612v1.441Z"
                  />
                </g>
                <g id="Tram_4">
                  <path
                    id="Vector 59_5"
                    fill="#fff"
                    stroke="#DBDBDB"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="M13.421 586.992H6.79l-3.315-1.922v-3.845l16.579-9.612h6.631L30 573.535v3.845l-16.579 9.612Z"
                  />
                  <g id="Group 31_4">
                    <path
                      id="Vector 61_5"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M6.79 598.526v-3.844h6.631v3.844H6.79Z"
                    />
                    <path
                      id="Vector 62_5"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m30 585.07-16.579 9.612v3.844L30 588.914v-3.844Z"
                    />
                    <path
                      id="Vector 63_5"
                      fill="#E90000"
                      stroke="#A00"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m3.474 592.759 3.315 1.923v3.844l-3.315-1.922v-3.845Z"
                    />
                  </g>
                  <g id="Group 32_4">
                    <path
                      id="Vector 64_5"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M6.79 594.682v-7.69h6.631v7.69H6.79Z"
                    />
                    <path
                      id="Vector 65_5"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m30 577.38-16.579 9.612v7.69L30 585.07v-7.69Z"
                    />
                    <path
                      id="Vector 66_5"
                      fill="#fff"
                      stroke="#DBDBDB"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m3.474 585.07 3.315 1.922v7.69l-3.315-1.923v-7.689Z"
                    />
                  </g>
                  <g id="Group 30_4">
                    <path
                      id="Vector 69_5"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m18.47 585.07-4.101 2.403v5.766l4.101-2.403v-5.766Z"
                    />
                    <path
                      id="Vector 70_5"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m23.82 581.946-4.102 2.403v5.767l4.102-2.403v-5.767Z"
                    />
                    <path
                      id="Vector 71_5"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m29.17 578.823-4.102 2.402v5.767l4.102-2.403v-5.766Z"
                    />
                    <path
                      id="Vector 67_5"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M12.474 587.953H7.737v5.767h4.737v-5.767Z"
                    />
                    <path
                      id="Vector 68_5"
                      fill="#EAF1FF"
                      stroke="#B1B6C1"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="m6.15 587.503-2.023-1.232v5.977l2.024 1.232v-5.977Z"
                    />
                  </g>
                  <path
                    id="Vector 72_5"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="m10.105 583.628-3.316-1.923 16.58-9.611 3.315 1.922-16.579 9.612Z"
                  />
                  <path
                    id="Vector 73_5"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="M6.79 583.147v-1.442l3.315 1.923v1.442l-3.316-1.923Z"
                  />
                  <path
                    id="Vector 74_5"
                    fill="#D9D9D9"
                    stroke="#9A9A9A"
                    strokeLinejoin="round"
                    strokeWidth=".5"
                    d="m26.684 575.458-16.579 9.612v-1.442l16.58-9.612v1.442Z"
                  />
                  <g id="extrude-group">
                    <g id="side-faces_3">
                      <path
                        id="side-face_3"
                        fill="#949494"
                        fillRule="evenodd"
                        stroke="#4C4C4C"
                        strokeLinejoin="round"
                        strokeWidth=".5"
                        d="M3.3 594.824c.186-.109.442-.093.726.073.566.331 1.025 1.138 1.025 1.802 0 .332-.115.565-.3.674l.945-.554c.185-.109.3-.342.3-.674 0-.663-.459-1.47-1.025-1.802-.284-.166-.54-.181-.726-.073l-.945.554Z"
                        clipRule="evenodd"
                      />
                    </g>
                    <path
                      id="cap-face_3"
                      fill="#949494"
                      stroke="#4C4C4C"
                      strokeLinejoin="round"
                      strokeWidth=".5"
                      d="M5.051 596.699c0 .663-.459.932-1.025.601-.567-.332-1.026-1.139-1.026-1.803 0-.663.46-.932 1.026-.6.566.331 1.025 1.138 1.025 1.802Z"
                    />
                  </g>
                </g>
              </g>
              <g id="Billboard">
                <path
                  id="Vector 227"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m234 465.5-3.5-2V475l3.5 2v-11.5Z"
                />
                <path
                  id="Vector 228"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m237.5 475-3.5 2v-11.5l3.5-2V475Z"
                />
                <path
                  id="Vector 229"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m234 461.5-3.5 2 3.5 2 3.5-2-3.5-2Z"
                />
                <path
                  id="Vector 227_2"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m258.5 451.5-3.5-2V461l3.5 2v-11.5Z"
                />
                <path
                  id="Vector 228_2"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m262 461-3.5 2v-11.5l3.5-2V461Z"
                />
                <path
                  id="Vector 229_2"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m258.5 447.5-3.5 2 3.5 2 3.5-2-3.5-2Z"
                />
                <path
                  id="Vector 214"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m234 465.5 3.5-6 3.5 2 3.5-6 3.5 2 3.5-6 3.5 2 3.5-6 3.5 2"
                />
                <path
                  id="Vector 207"
                  fill="#D9D9D9"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m262 445.5-28 16v-24l28-16v24Z"
                />
                <path
                  id="Vector 209"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m230.5 459.5 3.5 2v4l-3.5-2v-4Z"
                />
                <path
                  id="Vector 208"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="M234 465.5v-4l28-16v4l-28 16Z"
                />
                <path
                  id="Vector 210"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="M234 437.5v24l-3.5-2v-24l3.5 2Z"
                />
                <path
                  id="Vector 211"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m262 421.5-28 16-3.5-2 28-16 3.5 2Z"
                />
                <path
                  id="Vector 212"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="M230.5 435.5h7v-4h7v-4h7v-4h7v-4"
                />
                <path
                  id="Vector 215"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m230.5 459.5 3.5 6"
                />
                <path
                  id="Vector 217"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m230.5 435.5 3.5 6.5-3.5 2.5 3.5 5.5-3.5 2.5 3.5 5.5-3.5 1.5"
                />
                <path id="TextPath2" stroke="#000" d="M234 452h28" />
                <text
                  fontSize="8"
                  fill="black"
                  transform="rotate(-30) skewX(-30) translate(45 80)"
                >
                  <textPath href="#TextPath2">DAY 40</textPath>
                </text>
              </g>
              <g id="Billboard_2">
                <path
                  id="Vector 227_3"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m269 445.5-3.5-2V455l3.5 2v-11.5Z"
                />
                <path
                  id="Vector 228_3"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m272.5 455-3.5 2v-11.5l3.5-2V455Z"
                />
                <path
                  id="Vector 229_3"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m269 441.5-3.5 2 3.5 2 3.5-2-3.5-2Z"
                />
                <path
                  id="Vector 227_4"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m293.5 431.5-3.5-2V441l3.5 2v-11.5Z"
                />
                <path
                  id="Vector 228_4"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m297 441-3.5 2v-11.5l3.5-2V441Z"
                />
                <path
                  id="Vector 229_4"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m293.5 427.5-3.5 2 3.5 2 3.5-2-3.5-2Z"
                />
                <path
                  id="Vector"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m269 445.5 3.5-6 3.5 2 3.5-6 3.5 2 3.5-6 3.5 2 3.5-6 3.5 2"
                />
                <path
                  id="Vector 207_2"
                  fill="#D9D9D9"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m297 425.5-28 16v-24l28-16v24Z"
                />
                <path
                  id="Vector 209_2"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m265.5 439.5 3.5 2v4l-3.5-2v-4Z"
                />
                <path
                  id="Vector_2"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="M269 445.5v-4l28-16v4l-28 16Z"
                />
                <path
                  id="Vector_3"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="M269 417.5v24l-3.5-2v-24l3.5 2Z"
                />
                <path
                  id="Vector_4"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m297 401.5-28 16-3.5-2 28-16 3.5 2Z"
                />
                <path
                  id="Vector 212_2"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="M265.5 415.5h7v-4h7v-4h7v-4h7v-4"
                />
                <path
                  id="Vector 215_2"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m265.5 439.5 3.5 6"
                />
                <path
                  id="Vector 217_2"
                  stroke="#363636"
                  strokeLinejoin="round"
                  d="m265.5 415.5 3.5 6.5-3.5 2.5 3.5 5.5-3.5 2.5 3.5 5.5-3.5 1.5"
                />
                <path id="TextPath1" d="M269 431.5h28" />
                <a href="/blog">
                  <text
                    fontSize="8"
                    fill="black"
                    transform="rotate(-30) skewX(-30) translate(45 80)"
                    className="hover:fill-red-500"
                  >
                    <textPath href="#TextPath1">DAY 10</textPath>
                  </text>
                </a>
              </g>
              <g id="Blue-B2">
                <path
                  id="Vector 95"
                  fill="#5454DB"
                  stroke="#3F3FAE"
                  strokeLinejoin="round"
                  d="m294 391 28-16V269l-28 16v106Z"
                />
                <path
                  id="Vector 94"
                  fill="#5454DB"
                  stroke="#3F3FAE"
                  strokeLinejoin="round"
                  d="m294 391-28-16V269l28 16v106Z"
                />
                <path
                  id="Vector 97"
                  fill="#2F2F8E"
                  stroke="#3F3FAE"
                  strokeLinejoin="round"
                  d="M301 371v16l7-4v-16l-7 4Z"
                />
                <g id="Group 1">
                  <path
                    id="Vector 98"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M308 357.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 169"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M301 361.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 170"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M294 365.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 171"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M315 353.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 2">
                  <path
                    id="Vector 98_2"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M308 341.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 169_2"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M301 345.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 170_2"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M294 349.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 171_2"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M315 337.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 3">
                  <path
                    id="Vector 98_3"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M308 325.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 169_3"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M301 329.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 170_3"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M294 333.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 171_3"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M315 321.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 4">
                  <path
                    id="Vector 98_4"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M308 309.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 169_4"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M301 313.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 170_4"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M294 317.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 171_4"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M315 305.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 5">
                  <path
                    id="Vector 98_5"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M308 293.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 169_5"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M301 297.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 170_5"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M294 301.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 171_5"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M315 289.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 6">
                  <path
                    id="Vector 98_6"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M280 357.959v-8L273 346v8l7 3.959Z"
                  />
                  <path
                    id="Vector 169_6"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M287 361.959v-8L280 350v8l7 3.959Z"
                  />
                  <path
                    id="Vector 170_6"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M294 365.959v-8L287 354v8l7 3.959Z"
                  />
                  <path
                    id="Vector 171_6"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M273 353.959v-8L266 342v8l7 3.959Z"
                  />
                </g>
                <g id="Group 7">
                  <path
                    id="Vector 98_7"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M280 341.959v-8L273 330v8l7 3.959Z"
                  />
                  <path
                    id="Vector 169_7"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M287 345.959v-8L280 334v8l7 3.959Z"
                  />
                  <path
                    id="Vector 170_7"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M294 349.959v-8L287 338v8l7 3.959Z"
                  />
                  <path
                    id="Vector 171_7"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M273 337.959v-8L266 326v8l7 3.959Z"
                  />
                </g>
                <g id="Group 8">
                  <path
                    id="Vector 98_8"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M280 325.959v-8L273 314v8l7 3.959Z"
                  />
                  <path
                    id="Vector 169_8"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M287 329.959v-8L280 318v8l7 3.959Z"
                  />
                  <path
                    id="Vector 170_8"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M294 333.959v-8L287 322v8l7 3.959Z"
                  />
                  <path
                    id="Vector 171_8"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M273 321.959v-8L266 310v8l7 3.959Z"
                  />
                </g>
                <g id="Group 9">
                  <path
                    id="Vector 98_9"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M280 309.959v-8L273 298v8l7 3.959Z"
                  />
                  <path
                    id="Vector 169_9"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M287 313.959v-8L280 302v8l7 3.959Z"
                  />
                  <path
                    id="Vector 170_9"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M294 317.959v-8L287 306v8l7 3.959Z"
                  />
                  <path
                    id="Vector 171_9"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M273 305.959v-8L266 294v8l7 3.959Z"
                  />
                </g>
                <g id="Group 10">
                  <path
                    id="Vector 98_10"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M280 293.959v-8L273 282v8l7 3.959Z"
                  />
                  <path
                    id="Vector 169_10"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M287 297.959v-8L280 286v8l7 3.959Z"
                  />
                  <path
                    id="Vector 170_10"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M294 301.959v-8L287 290v8l7 3.959Z"
                  />
                  <path
                    id="Vector 171_10"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M273 289.959v-8L266 278v8l7 3.959Z"
                  />
                </g>
                <path
                  id="Vector 167"
                  fill="#5454DB"
                  stroke="#3F3FAE"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m266 261 28 24-28-16v-8Z"
                />
                <path
                  id="Vector 172"
                  fill="#5454DB"
                  stroke="#3F3FAE"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m266 261 28-16 28 24-28 16-28-24Z"
                />
              </g>
              <g id="Blue-B">
                <path
                  id="Vector 95_2"
                  fill="#5454DB"
                  stroke="#3F3FAE"
                  strokeLinejoin="round"
                  d="m259 411 28-16V289l-28 16v106Z"
                />
                <path
                  id="Vector 94_2"
                  fill="#5454DB"
                  stroke="#3F3FAE"
                  strokeLinejoin="round"
                  d="m259 411-28-16V289l28 16v106Z"
                />
                <path
                  id="Vector 97_2"
                  fill="#2F2F8E"
                  stroke="#3F3FAE"
                  strokeLinejoin="round"
                  d="M266 391v16l7-4v-16l-7 4Z"
                />
                <g id="Group 1_2">
                  <path
                    id="Vector 98_11"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M273 377.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 169_11"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M266 381.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 170_11"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M259 385.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 171_11"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M280 373.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 2_2">
                  <path
                    id="Vector 98_12"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M273 361.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 169_12"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M266 365.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 170_12"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M259 369.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 171_12"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M280 357.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 3_2">
                  <path
                    id="Vector 98_13"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M273 345.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 169_13"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M266 349.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 170_13"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M259 353.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 171_13"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M280 341.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 4_2">
                  <path
                    id="Vector 98_14"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M273 329.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 169_14"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M266 333.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 170_14"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M259 337.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 171_14"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M280 325.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 5_2">
                  <path
                    id="Vector 98_15"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M273 313.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 169_15"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M266 317.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 170_15"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M259 321.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 171_15"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M280 309.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 6_2">
                  <path
                    id="Vector 98_16"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M245 377.959v-8L238 366v8l7 3.959Z"
                  />
                  <path
                    id="Vector 169_16"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M252 381.959v-8L245 370v8l7 3.959Z"
                  />
                  <path
                    id="Vector 170_16"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M259 385.959v-8L252 374v8l7 3.959Z"
                  />
                  <path
                    id="Vector 171_16"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M238 373.959v-8L231 362v8l7 3.959Z"
                  />
                </g>
                <g id="Group 7_2">
                  <path
                    id="Vector 98_17"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M245 361.959v-8L238 350v8l7 3.959Z"
                  />
                  <path
                    id="Vector 169_17"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M252 365.959v-8L245 354v8l7 3.959Z"
                  />
                  <path
                    id="Vector 170_17"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M259 369.959v-8L252 358v8l7 3.959Z"
                  />
                  <path
                    id="Vector 171_17"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M238 357.959v-8L231 346v8l7 3.959Z"
                  />
                </g>
                <g id="Group 8_2">
                  <path
                    id="Vector 98_18"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M245 345.959v-8L238 334v8l7 3.959Z"
                  />
                  <path
                    id="Vector 169_18"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M252 349.959v-8L245 338v8l7 3.959Z"
                  />
                  <path
                    id="Vector 170_18"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M259 353.959v-8L252 342v8l7 3.959Z"
                  />
                  <path
                    id="Vector 171_18"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M238 341.959v-8L231 330v8l7 3.959Z"
                  />
                </g>
                <g id="Group 9_2">
                  <path
                    id="Vector 98_19"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M245 329.959v-8L238 318v8l7 3.959Z"
                  />
                  <path
                    id="Vector 169_19"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M252 333.959v-8L245 322v8l7 3.959Z"
                  />
                  <path
                    id="Vector 170_19"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M259 337.959v-8L252 326v8l7 3.959Z"
                  />
                  <path
                    id="Vector 171_19"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M238 325.959v-8L231 314v8l7 3.959Z"
                  />
                </g>
                <g id="Group 10_2">
                  <path
                    id="Vector 98_20"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M245 313.959v-8L238 302v8l7 3.959Z"
                  />
                  <path
                    id="Vector 169_20"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M252 317.959v-8L245 306v8l7 3.959Z"
                  />
                  <path
                    id="Vector 170_20"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M259 321.959v-8L252 310v8l7 3.959Z"
                  />
                  <path
                    id="Vector 171_20"
                    fill="#fff"
                    stroke="#3F3FAE"
                    strokeLinejoin="round"
                    d="M238 309.959v-8L231 298v8l7 3.959Z"
                  />
                </g>
                <path
                  id="Vector 167_2"
                  fill="#5454DB"
                  stroke="#3F3FAE"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m231 281 28 24-28-16v-8Z"
                />
                <path
                  id="Vector 172_2"
                  fill="#5454DB"
                  stroke="#3F3FAE"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m231 281 28-16 28 24-28 16-28-24Z"
                />
              </g>
              <g id="Pruple-B">
                <path
                  id="Vector 156"
                  fill="#9771AA"
                  stroke="#7B5B8B"
                  strokeLinejoin="round"
                  d="m471 294-42 24v-32l42-24v32Z"
                />
                <path
                  id="Vector 157"
                  fill="#9771AA"
                  stroke="#7B5B8B"
                  strokeLinejoin="round"
                  d="m408 306 21 12v-32l-21-12v32Z"
                />
                <path
                  id="Vector 158"
                  fill="#9771AA"
                  stroke="#7B5B8B"
                  strokeLinejoin="round"
                  d="m429 286-21-12 21-20 21 12-21 20Z"
                />
                <path
                  id="Vector 159"
                  fill="#9771AA"
                  stroke="#7B5B8B"
                  strokeLinejoin="round"
                  d="m457 262-7 4-21-12 7-4 21 12Z"
                />
                <path
                  id="Vector 160"
                  fill="#9771AA"
                  stroke="#7B5B8B"
                  strokeLinejoin="round"
                  d="M471 262h-14l-21-12h14l21 12Z"
                />
                <path
                  id="Vector 161"
                  fill="#9771AA"
                  stroke="#7B5B8B"
                  strokeLinejoin="round"
                  d="m450 266-21 20 42-24h-14l-7 4Z"
                />
                <path
                  id="Vector 162"
                  fill="#664C74"
                  stroke="#7B5B8B"
                  strokeLinejoin="round"
                  d="m443 310-7 4v-16l7-4v16Z"
                />
                <path
                  id="Vector 163"
                  fill="#fff"
                  stroke="#7B5B8B"
                  strokeLinejoin="round"
                  d="m429 280-13-7.5 13-12.5 13 7.5-13 12.5Z"
                />
                <path
                  id="Vector 164"
                  stroke="#7B5B8B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m435 264-12 12"
                />
                <path
                  id="Vector 165"
                  stroke="#7B5B8B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m435.5 273.753-13-7.506"
                />
                <path
                  id="Vector 166"
                  fill="#fff"
                  stroke="#7B5B8B"
                  strokeLinejoin="round"
                  d="m461.356 292.062-.035-8.062-13.857 8 .036 8.062 13.856-8Z"
                />
                <g id="Chimney">
                  <path
                    id="Vector_5"
                    fill="#9771AA"
                    fillRule="evenodd"
                    stroke="#7B5B8B"
                    d="M454 257.597c0 .584.244 1.167.732 1.612.977.89 2.559.89 3.536 0a2.174 2.174 0 0 0 .732-1.612v-5.318c0-.583-.244-1.166-.732-1.611-.977-.891-2.559-.891-3.536 0a2.174 2.174 0 0 0-.732 1.611v5.318Z"
                    clipRule="evenodd"
                  />
                  <path
                    id="Ellipse"
                    fill="#50375D"
                    d="M457.561 251.293c.585.39.585 1.024 0 1.414-.586.391-1.536.391-2.122 0-.585-.39-.585-1.024 0-1.414.586-.391 1.536-.391 2.122 0Z"
                  />
                </g>
              </g>
              <g id="Limestone-B">
                <path
                  id="Vector 152"
                  fill="#79BC91"
                  stroke="#679F7B"
                  strokeLinejoin="round"
                  d="M175 347v112l28-16-21-100-7 4Z"
                />
                <path
                  id="Vector 154"
                  fill="#fff"
                  stroke="#679F7B"
                  strokeLinejoin="round"
                  d="M181 372.172V427.5l12-7.5-10-49-2 1.172Z"
                />
                <path
                  id="Vector 151"
                  fill="#79BC91"
                  stroke="#679F7B"
                  strokeLinejoin="round"
                  d="M175 347v112l-28-16 21-100 7 4Z"
                />
                <path
                  id="Vector 153"
                  fill="#79BC91"
                  stroke="#679F7B"
                  strokeLinejoin="round"
                  d="m182 343-7 4-7-4 7-4 7 4Z"
                />
                <path
                  id="Vector 115"
                  fill="#497559"
                  stroke="#679F7B"
                  strokeLinejoin="round"
                  d="M182 439v16l14-8v-16l-14 8Z"
                />
                <path
                  id="Vector 155"
                  fill="#8CDBA8"
                  stroke="#679F7B"
                  strokeLinejoin="round"
                  d="M175 333c-1 0-.926 10-.926 10h1.852s.074-10-.926-10Z"
                />
                <path
                  id="Vector 206"
                  stroke="#679F7B"
                  strokeLinejoin="round"
                  d="m192.5 429 3.5 2-14 8-3.5-2 14-8Z"
                />
              </g>
              <g id="Orange-B2">
                <path
                  id="Vector 95_3"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="m147 475 28-16V355l-28 16v104Z"
                />
                <path
                  id="Vector 94_3"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="m147 475-28-16V355l28 16v104Z"
                />
                <path
                  id="Vector 103"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M154 415v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 106"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M154 399v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 169_21"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M154 383v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 97_3"
                  fill="#9C6326"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M154 455v16l7-4v-16l-7 4Z"
                />
                <path
                  id="Vector 98_21"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M154 447v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 101"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M154 431v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 168"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M147 339v32l28-16-28-16Z"
                />
                <path
                  id="Vector 167_3"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M147 339v32l-28-16 28-16Z"
                />
              </g>
              <g id="Orange-B2_2">
                <path
                  id="Vector 168_2"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m147 403-28-16-28 16 28 16 28-16Z"
                />
                <path
                  id="Vector 95_4"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="m119 491 28-16v-72l-28 16v72Z"
                />
                <path
                  id="Vector 94_4"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="m119 491-28-16v-72l28 16v72Z"
                />
                <path
                  id="Vector 103_2"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M126 431v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 97_4"
                  fill="#9C6326"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M126 471v16l7-4v-16l-7 4Z"
                />
                <path
                  id="Vector 98_22"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M126 463v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 101_2"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M126 447v-8l14-8v8l-14 8Z"
                />
              </g>
              <g id="Orange-B">
                <path
                  id="Vector 95_5"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="m91 507 28-16v-88l-28 16v88Z"
                />
                <path
                  id="Vector 94_5"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="m91 507-28-16v-88l28 16v88Z"
                />
                <path
                  id="Vector 103_3"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M98 447v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 106_2"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M98 431v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 97_5"
                  fill="#9C6326"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M98 487v16l7-4v-16l-7 4Z"
                />
                <path
                  id="Vector 98_23"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M98 479v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 101_3"
                  fill="#fff"
                  stroke="#CE8232"
                  strokeLinejoin="round"
                  d="M98 463v-8l14-8v8l-14 8Z"
                />
                <path
                  id="Vector 168_3"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M91 387v32l28-16-28-16Z"
                />
                <path
                  id="Vector 167_4"
                  fill="#FFA03A"
                  stroke="#CE8232"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M91 387v32l-28-16 28-16Z"
                />
              </g>
              <g id="Cyan-B">
                <path
                  id="Vector 107"
                  fill="#3E9E9E"
                  stroke="#235A5A"
                  strokeLinejoin="round"
                  d="m49 507 21 12v-81l-21-12v81Z"
                />
                <path
                  id="Vector 106_3"
                  fill="#3E9E9E"
                  stroke="#235A5A"
                  strokeLinejoin="round"
                  d="m91 507-21 12v-81l21-12v81Z"
                />
                <path
                  id="Vector 108"
                  fill="#3E9E9E"
                  stroke="#235A5A"
                  strokeLinejoin="round"
                  d="m70 414 21 12-21 12-21-12 21-12Z"
                />
                <path
                  id="Vector 109"
                  fill="#163A3A"
                  stroke="#235A5A"
                  strokeLinejoin="round"
                  d="m84 511-7 4v-16l7-4v16Z"
                />
                <path
                  id="Vector 110"
                  fill="#fff"
                  stroke="#235A5A"
                  strokeLinejoin="round"
                  d="m84 485-7 4v-16l7-4v16Z"
                />
                <path
                  id="Vector 111"
                  fill="#fff"
                  stroke="#235A5A"
                  strokeLinejoin="round"
                  d="m84 458-7 4v-16l7-4v16Z"
                />
              </g>
              <g id="RedPink-B3">
                <path
                  id="Vector 116"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="M56 463v64l14-8v-64l-14 8Z"
                />
                <path
                  id="Vector 115_2"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="M56 463v64l-28-16v-64l28 16Z"
                />
                <path
                  id="Vector 117"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m28 431 28 32-28-16v-16Z"
                />
                <path
                  id="Vector 118"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m42 423 28 32-14 8-28-32 14-8Z"
                />
                <path
                  id="Vector 115_3"
                  fill="#AE3949"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="M60 508.628v16l7-4v-16l-7 4Z"
                />
                <path
                  id="Vector 111_2"
                  fill="#fff"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m67 469.5-7 4V465l7-4v8.5Z"
                />
                <path
                  id="Vector 119"
                  fill="#fff"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m67 484.5-7 4V480l7-4v8.5Z"
                />
                <path
                  id="Vector 120"
                  fill="#fff"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m67 499.5-7 4V495l7-4v8.5Z"
                />
              </g>
              <g id="RedPink-B2">
                <path
                  id="Vector 116_2"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="M42 471v64l14-8v-64l-14 8Z"
                />
                <path
                  id="Vector 115_4"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="M42 471v64l-28-16v-64l28 16Z"
                />
                <path
                  id="Vector 117_2"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m14 439 28 32-28-16v-16Z"
                />
                <path
                  id="Vector 118_2"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m28 431 28 32-14 8-28-32 14-8Z"
                />
                <path
                  id="Vector 115_5"
                  fill="#AE3949"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="M46 516.628v16l7-4v-16l-7 4Z"
                />
                <path
                  id="Vector 111_3"
                  fill="#fff"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m53 477.5-7 4V473l7-4v8.5Z"
                />
                <path
                  id="Vector 119_2"
                  fill="#fff"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m53 492.5-7 4V488l7-4v8.5Z"
                />
                <path
                  id="Vector 120_2"
                  fill="#fff"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m53 507.5-7 4V503l7-4v8.5Z"
                />
              </g>
              <g id="RedPink-B">
                <path
                  id="Vector 116_3"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="M28 479v64l14-8v-64l-14 8Z"
                />
                <path
                  id="Vector 115_6"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="M28 479v64L0 527v-64l28 16Z"
                />
                <path
                  id="Vector 117_3"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m0 447 28 32-28-16v-16Z"
                />
                <path
                  id="Vector 118_3"
                  fill="#EB465C"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m14 439 28 32-14 8-28-32 14-8Z"
                />
                <path
                  id="Vector 115_7"
                  fill="#AE3949"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="M32 524.628v16l7-4v-16l-7 4Z"
                />
                <path
                  id="Vector 111_4"
                  fill="#fff"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m39 485.5-7 4V481l7-4v8.5Z"
                />
                <path
                  id="Vector 119_3"
                  fill="#fff"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m39 500.5-7 4V496l7-4v8.5Z"
                />
                <path
                  id="Vector 120_3"
                  fill="#fff"
                  stroke="#CC3C4F"
                  strokeLinejoin="round"
                  d="m39 515.5-7 4V511l7-4v8.5Z"
                />
              </g>
              <g id="LightBlue-B">
                <path
                  id="Vector 95_6"
                  fill="#5EA0D9"
                  stroke="#5189B9"
                  strokeLinejoin="round"
                  d="m364 449 28-16v-66l-28 16v66Z"
                />
                <path
                  id="Vector 94_6"
                  fill="#5EA0D9"
                  stroke="#5189B9"
                  strokeLinejoin="round"
                  d="m364 449-28-16v-66l28 16v66Z"
                />
                <path
                  id="Vector 97_6"
                  fill="#416D94"
                  stroke="#5189B9"
                  strokeLinejoin="round"
                  d="M371 429v16l7-4v-16l-7 4Z"
                />
                <path
                  id="Vector 167_5"
                  fill="#5EA0D9"
                  stroke="#5189B9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m336 367 28-16 28 16-28 16-28-16Z"
                />
                <path
                  id="Vector 168_4"
                  fill="#5EA0D9"
                  stroke="#5189B9"
                  strokeLinejoin="round"
                  d="m364 380-23-13v-9l23 13v9Z"
                />
                <path
                  id="Vector 169_22"
                  fill="#5EA0D9"
                  stroke="#5189B9"
                  strokeLinejoin="round"
                  d="m364 380 23-13v-9l-23 13v9Z"
                />
                <path
                  id="Vector 184"
                  fill="#5EA0D9"
                  stroke="#5188B9"
                  strokeLinejoin="round"
                  d="m387 358-23 13-23-13 23-13 23 13Z"
                />
                <path
                  id="Vector 186"
                  fill="#5EA0D9"
                  stroke="#5188B9"
                  strokeLinejoin="round"
                  d="M347 358.286 364 368v-8l-17-9.714v8Z"
                />
                <path
                  id="Vector 187"
                  fill="#5EA0D9"
                  stroke="#5188B9"
                  strokeLinejoin="round"
                  d="m347 350 17 10 17-9.786-17-9.714-17 9.5Z"
                />
                <g id="Group 11">
                  <path
                    id="Vector 172_3"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M378 417.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 173"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M371 421.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 174"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M364 425.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 175"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M385 413.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 12">
                  <path
                    id="Vector 172_4"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M378 404.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 173_2"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M371 408.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 174_2"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M364 412.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 175_2"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M385 400.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 13">
                  <path
                    id="Vector 172_5"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M378 391.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 173_3"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M371 395.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 174_3"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M364 399.959v-8l7-3.959v8l-7 3.959Z"
                  />
                  <path
                    id="Vector 175_3"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M385 387.959v-8l7-3.959v8l-7 3.959Z"
                  />
                </g>
                <g id="Group 14">
                  <path
                    id="Vector 172_6"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M350 417.959v-8L343 406v8l7 3.959Z"
                  />
                  <path
                    id="Vector 173_4"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M357 421.959v-8L350 410v8l7 3.959Z"
                  />
                  <path
                    id="Vector 174_4"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M364 425.959v-8L357 414v8l7 3.959Z"
                  />
                  <path
                    id="Vector 175_4"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M343 413.959v-8L336 402v8l7 3.959Z"
                  />
                </g>
                <g id="Group 15">
                  <path
                    id="Vector 172_7"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M350 404.959v-8L343 393v8l7 3.959Z"
                  />
                  <path
                    id="Vector 173_5"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M357 408.959v-8L350 397v8l7 3.959Z"
                  />
                  <path
                    id="Vector 174_5"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M364 412.959v-8L357 401v8l7 3.959Z"
                  />
                  <path
                    id="Vector 175_5"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M343 400.959v-8L336 389v8l7 3.959Z"
                  />
                </g>
                <g id="Group 16">
                  <path
                    id="Vector 172_8"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M350 391.959v-8L343 380v8l7 3.959Z"
                  />
                  <path
                    id="Vector 173_6"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M357 395.959v-8L350 384v8l7 3.959Z"
                  />
                  <path
                    id="Vector 174_6"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M364 399.959v-8L357 388v8l7 3.959Z"
                  />
                  <path
                    id="Vector 175_6"
                    fill="#fff"
                    stroke="#5188B9"
                    strokeLinejoin="round"
                    d="M343 387.959v-8L336 376v8l7 3.959Z"
                  />
                </g>
                <path
                  id="Vector 185"
                  fill="#5EA0D9"
                  stroke="#5188B9"
                  strokeLinejoin="round"
                  d="M381 358.286 364 368v-8l17-9.714v8Z"
                />
              </g>
              <g id="Tree">
                <g id="Log">
                  <path
                    id="Vector 174_7"
                    fill="#6A5228"
                    stroke="#44351A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m210 569 7 4v-16l-7-4v16Z"
                  />
                  <path
                    id="Vector 173_7"
                    fill="#6A5228"
                    stroke="#44351A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m224 569-7 4v-16l7-4v16Z"
                  />
                </g>
                <g id="Leaves">
                  <path
                    id="Vector 175_7"
                    fill="#3D6238"
                    stroke="#2E4B2B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m217 565-21-12v-8l21 12v8Z"
                  />
                  <path
                    id="Vector 176"
                    fill="#3D6238"
                    stroke="#2E4B2B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m217 565 21-12v-8l-21 12v8Z"
                  />
                  <path
                    id="Vector 179"
                    fill="#3D6238"
                    stroke="#2E4B2B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m217 533-21 12 21 12 21-12-21-12Z"
                  />
                  <path
                    id="Vector 178"
                    fill="#3D6238"
                    stroke="#2E4B2B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m217 549 7-4v-8l-7 4v8Z"
                  />
                  <path
                    id="Vector 177"
                    fill="#3D6238"
                    stroke="#2E4B2B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m217 549-7-4v-8l7 4v8Z"
                  />
                  <path
                    id="Vector 180"
                    fill="#3D6238"
                    stroke="#2E4B2B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m217 541-7-4 7-4 7 4-7 4Z"
                  />
                </g>
              </g>
              <g id="Tree2">
                <g id="Log_2">
                  <path
                    id="Vector 174_8"
                    fill="#6A5228"
                    stroke="#44351A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m245 547 7 4v-8l-7-4v8Z"
                  />
                  <path
                    id="Vector 173_8"
                    fill="#6A5228"
                    stroke="#44351A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m259 547-7 4v-8l7-4v8Z"
                  />
                </g>
                <g id="Leaves_2">
                  <path
                    id="Vector 181"
                    fill="#3D6238"
                    stroke="#2E4B2B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m252 543 7-4v-16l-7 4v16Z"
                  />
                  <path
                    id="Vector 182"
                    fill="#3D6238"
                    stroke="#2E4B2B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m252 543-7-4v-16l7 4v16Z"
                  />
                  <path
                    id="Vector 183"
                    fill="#3D6238"
                    stroke="#2E4B2B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m252 527-7-4 7-4 7 4-7 4Z"
                  />
                </g>
              </g>
              <g id="Bush">
                <path
                  id="Vector 181_2"
                  fill="#3D6238"
                  stroke="#2E4B2B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m242 557 7-4v-8l-7 4v8Z"
                />
                <path
                  id="Vector 182_2"
                  fill="#3D6238"
                  stroke="#2E4B2B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m242 557-7-4v-8l7 4v8Z"
                />
                <path
                  id="Vector 183_2"
                  fill="#3D6238"
                  stroke="#2E4B2B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m242 549-7-4 7-4 7 4-7 4Z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IsometricMap;
