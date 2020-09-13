import React from "react";
import NavBar from "../src/NavBar";
import SideNav from "../src/SideNav";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <NavBar onMenuOpen={() => setIsOpen(!isOpen)} />
      <SideNav shown={isOpen} onClose={onClose} />
    </>
  );
}
