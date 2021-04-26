import React from "react";
import {Link, useLocation} from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Icon,
  Stack,
  Text,
  StackDivider,
  useColorMode,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {FaTwitter} from "react-icons/fa";
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

const Layout: React.FC = ({children}) => {
  const {toggleColorMode} = useColorMode();
  const {pathname} = useLocation();
  const logoColor = useColorModeValue("primary.500", undefined);

  return (
    <Container alignSelf="center" height="100%" maxWidth="container.xl" paddingX={0}>
      <Stack direction="row" divider={<StackDivider />} height="100%">
        <Stack justifyContent="space-between">
          <Stack minWidth={72} paddingX={6} paddingY={3} spacing={8}>
            <Stack spacing={5}>
              <Icon
                as={FaTwitter}
                color={logoColor}
                height={7}
                width={7}
                onClick={toggleColorMode}
              />
              <Stack fontSize="xl" fontWeight="bold" spacing={6}>
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
            </Stack>
            <Button colorScheme="primary" size="lg" width="100%">
              Twittear
            </Button>
          </Stack>
          <Stack alignItems="center" direction="row" justifyContent="space-between" padding={4}>
            <Stack alignItems="center" direction="row">
              <Image borderRadius="50%" height={10} src="//placehold.it/64x64" width={10} />
              <Stack spacing={0}>
                <Text fontSize="sm" fontWeight="bold">
                  goncy.tsx
                </Text>
                <Text color="gray.500" fontSize="sm">
                  @goncy
                </Text>
              </Stack>
            </Stack>
            <Icon as={BsThreeDots} />
          </Stack>
        </Stack>
        <Box paddingX={4} width="100%">
          {children}
        </Box>
      </Stack>
    </Container>
  );
};

export default Layout;
