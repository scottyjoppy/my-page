import React from "react";

interface ShapePropsSize {
  children?:
    | React.ReactNode
    | Partial<Record<"left" | "right" | "top", React.ReactNode>>;
  className?: string;
  size: number | string;
  height?: never;
  lWidth?: never;
  rWidth?: never;
}

interface ShapePropsWH {
  children?:
    | React.ReactNode
    | Partial<Record<"left" | "right" | "top", React.ReactNode>>;
  className?: string;
  lWidth: number | string;
  rWidth: number | string;
  height: number | string;
  size?: never;
}

type ShapeProps = ShapePropsSize | ShapePropsWH;

const IsometricShape: React.FC<ShapeProps> = ({
  children,
  className,
  ...props
}) => {
  let lWidth: number | string;
  let rWidth: number | string;
  let height: number | string;

  if ("size" in props) {
    const size = props.size ?? 100;
    lWidth = rWidth = height = size;
  } else {
    lWidth = props.lWidth ?? 100;
    rWidth = props.rWidth ?? 100;
    height = props.height ?? 100;
  }

  const content: Partial<Record<"left" | "right" | "top", React.ReactNode>> =
    React.isValidElement(children) || typeof children === "string"
      ? { left: children, right: children, top: children }
      : (children as Partial<
          Record<"left" | "right" | "top", React.ReactNode>
        >);

  const leftFaceStyle = {
    width: `${rWidth}px`,
    height: `${height}px`,
    transformOrigin: "0 0",
    transform: "rotate(-30deg) skewX(-30deg) scaleY(0.864)",
  };

  const rightFaceStyle = {
    height: `${lWidth}px`,
    width: `${height}px`,
    transformOrigin: "0 0",
    transform: "rotate(90deg) skewX(-30deg) scaleY(0.864)",
  };

  const topFaceStyle = {
    width: `${lWidth}px`,
    height: `${rWidth}px`,
    transformOrigin: "0 0",
    transform: "rotate(210deg) skew(-30deg) scaleY(0.864)",
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute" style={leftFaceStyle}>
        {content.right && (
          <div className="break-words p-1">{content.right}</div>
        )}
      </div>
      <div className="absolute" style={rightFaceStyle}>
        {content.left && (
          <div
            className="absolute inset-0 p-1 px-2 flex justify-end"
            style={{ writingMode: "sideways-lr", textOrientation: "mixed" }}
          >
            {content.left}
          </div>
        )}
      </div>
      <div className="absolute" style={topFaceStyle}>
        {content.top && (
          <div
            className="absolute inset-0 p-1 px-2 break-words"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {content.top}
          </div>
        )}
      </div>
    </div>
  );
};

export default IsometricShape;
