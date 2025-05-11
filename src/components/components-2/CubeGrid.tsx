interface CubeProps {
  className?: string;
}

const Cube = ({ className }: CubeProps) => {
  return (
    <div className={`cube ${className}`}>
      <div className="face left"></div>
      <div className="face right"></div>
      <div className="face bottom"></div>
    </div>
  );
};

const CubeGrid = () => {
  const numberOfCubes = 30;
  const columns = 5; // Customize how many cubes per row you want
  const cubes = Array.from({ length: numberOfCubes }, (_, index) => {
    const row = Math.floor(index / columns);
    const offset = row % 2 === 0 ? "offset-cube" : "";
    return <Cube key={index} className={offset} />;
  });

  return <div className="wrapper-cube w-full h-full">{cubes}</div>;
};

export default CubeGrid;
