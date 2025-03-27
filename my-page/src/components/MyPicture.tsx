import Image from "next/image";

export const MyPicture = () => {
  return (
    <Image
      src="/images/profile.jpg"
      height={144}
      width={144}
      alt="Alexander_Delisle"
    />
  );
};
