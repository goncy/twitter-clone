import React from "react";
import {Link} from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Icon,
  Stack,
  Text,
  StackDivider,
  useColorMode,
} from "@chakra-ui/react";
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
} from "react-icons/bs";

const Layout: React.FC = ({children}) => {
  const {toggleColorMode} = useColorMode();

  return (
    <Container alignSelf="center" height="100%" maxWidth="container.xl" paddingX={0}>
      <Stack direction="row" divider={<StackDivider />} height="100%">
        <Stack minWidth={72} paddingX={6} paddingY={3} spacing={8}>
          <Icon as={FaTwitter} height={7} width={7} onClick={toggleColorMode} />
          <Stack fontSize="xl" fontWeight="bold" spacing={7}>
            <Link to="/home">
              <Stack alignItems="center" direction="row" spacing={5}>
                <Icon as={BsHouse} height={6} width={6} />
                <Text>Inicio</Text>
              </Stack>
            </Link>
            <Stack alignItems="center" direction="row" spacing={5}>
              <Icon as={BsHash} height={6} width={6} />
              <Text>Explorar</Text>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={5}>
              <Icon as={BsBell} height={6} width={6} />
              <Text>Notificaciones</Text>
            </Stack>
            <Link to="/messages">
              <Stack alignItems="center" direction="row" spacing={5}>
                <Icon as={BsEnvelope} height={6} width={6} />
                <Text>Mensajes</Text>
              </Stack>
            </Link>
            <Stack alignItems="center" direction="row" spacing={5}>
              <Icon as={BsBookmark} height={6} width={6} />
              <Text>Guardados</Text>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={5}>
              <Icon as={BsList} height={6} width={6} />
              <Text>Listas</Text>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={5}>
              <Icon as={BsPerson} height={6} width={6} />
              <Text>Perfil</Text>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={5}>
              <Icon as={BsThreeDots} height={6} width={6} />
              <Text>Mas opciones</Text>
            </Stack>
          </Stack>
          <Button colorScheme="primary" size="lg" width="100%">
            Twittear
          </Button>
        </Stack>
        <Box paddingX={4}>{children}</Box>
      </Stack>
    </Container>
  );
};

export default Layout;
