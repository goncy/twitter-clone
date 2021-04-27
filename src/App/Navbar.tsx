import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Icon, Stack, StackProps, Text} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {
  BsEnvelope,
  BsHouse,
  BsHash,
  BsBell,
  BsBookmark,
  BsList,
  BsPerson,
  BsThreeDots,
  BsHouseFill,
  BsBellFill,
  BsEnvelopeFill,
  BsBookmarkFill,
  BsPersonFill,
} from "react-icons/bs";

interface ListLink {
  href: string;
  text: string;
  activeIcon: IconType;
  inactiveIcon: IconType;
}

const LINKS: ListLink[] = [
  {
    href: "/home",
    text: "Inicio",
    activeIcon: BsHouseFill,
    inactiveIcon: BsHouse,
  },
  {
    href: "/explore",
    text: "Explorar",
    activeIcon: BsHash,
    inactiveIcon: BsHash,
  },
  {
    href: "/notifications",
    text: "Notificaciones",
    activeIcon: BsBellFill,
    inactiveIcon: BsBell,
  },
  {
    href: "/messages",
    text: "Messages",
    activeIcon: BsEnvelopeFill,
    inactiveIcon: BsEnvelope,
  },
  {
    href: "/bookmarks",
    text: "Guardados",
    activeIcon: BsBookmarkFill,
    inactiveIcon: BsBookmark,
  },
  {
    href: "/lists",
    text: "Listas",
    activeIcon: BsList,
    inactiveIcon: BsList,
  },
  {
    href: "/profile",
    text: "Perfil",
    activeIcon: BsPersonFill,
    inactiveIcon: BsPerson,
  },
  {
    href: "/options",
    text: "Mas opciones",
    activeIcon: BsThreeDots,
    inactiveIcon: BsThreeDots,
  },
];

const Navbar: React.FC<StackProps> = (props) => {
  const {pathname} = useLocation();

  return (
    <Stack fontSize="xl" fontWeight="bold" spacing={7} {...props}>
      {LINKS.map((link) => (
        <Link key={link.href} to={link.href}>
          <Stack
            alignItems="center"
            color={pathname === link.href ? "primary.500" : "inherit"}
            direction="row"
            spacing={5}
          >
            <Icon
              as={pathname === link.href ? link.activeIcon : link.inactiveIcon}
              height={6}
              width={6}
            />
            <Text>{link.text}</Text>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default Navbar;
