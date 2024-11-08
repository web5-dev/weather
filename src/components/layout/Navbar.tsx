'use client'
import { Navbar as NUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from "../Logo";
import Image from "next/image";
import { useContext, useState } from "react";
import SettingsModal from "../modal/Settings";
import { AppContext } from "@/providers/AppProvider";
import SettingsPopup from "../popup/settings";


const menuItems = [
  {
    label: "Activity",
    path: ""
  },
  {
    label: "Today's note",
    path: ""
  },
  {
    label: "My profile",
    path: ""
  },
  {
    label: "Log Out",
    path: ""
  },
];

const Navbar = () => {

  const [openSetting, setOpenSetting] = useState(false)

  return (
    <NUINavbar classNames={{ wrapper: "max-w-screen-2xl" }}>
      <NavbarContent justify="start">
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <Link href="/" className="flex gap-[10px]">
            {/* <Logo /> */}
            <p className="font-bold text-text">Weather</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      
      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
      <SettingsPopup isOpen={openSetting} onClose={() => { setOpenSetting(false) }} />

    </NUINavbar>
  );
}

export default Navbar