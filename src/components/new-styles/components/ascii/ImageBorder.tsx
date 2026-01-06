import styles from "./Ascii.module.css";

type Props = {
  className?: string;
};

const ImageBorder = ({ className }: Props) => {
  const asciiArt = String.raw`++----------------------------------------------++
++----------------------------------------------++
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
||                                              ||
++----------------------------------------------++
++----------------------------------------------++`;

  return (
    <div className={`${className} absolute`}>
      <div className={styles["ascii-bg"]}>
        <pre>{asciiArt}</pre>
      </div>
    </div>
  );
};

export default ImageBorder;
