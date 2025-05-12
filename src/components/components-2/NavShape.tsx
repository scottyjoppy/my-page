import IsoRect from "./IsoRect";

interface ShapeProps {
  className?: string;
}

const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const NavLinks = () => {
  return (
    <div className="flex gap-[100px]">
      {links.map((link, index) => (
        <IsoRect size={100} className="translate-x-[100px]">
          <a
            key={index}
            href={link.href}
            className="text-white hover:text-gray-200 transition-colors"
          >
            {link.label}
          </a>
        </IsoRect>
      ))}
    </div>
  );
};

const NavShape = ({ className }: ShapeProps) => {
  return (
    <>
      <div className="flex items-center gap-[100px]">
        <IsoRect face="right" lWidth={650} rWidth={100} height={500} />
        <NavLinks />
      </div>
    </>
  );
};

export default NavShape;
