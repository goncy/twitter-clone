import React from "react";
import {Container, Stack, StackDivider, Box, Button} from "@chakra-ui/react";

import Navbar from "./Navbar";
import ProfileButton from "./ProfileButton";
import Logo from "./Logo";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <Container alignSelf="center" height="100%" maxWidth="container.xl" paddingX={0}>
      <Stack direction="row" divider={<StackDivider margin={0} />} height="100%" spacing={0}>
        <Stack justifyContent="space-between" maxWidth={275} width="100%">
          <Stack paddingX={7} paddingY={3} spacing={8}>
            <Stack spacing={7}>
              <Logo />
              <Navbar />
            </Stack>
            <Button colorScheme="primary" size="lg" width="100%">
              Twittear
            </Button>
          </Stack>
          <Box padding={2}>
            <ProfileButton />
          </Box>
        </Stack>
        <Box width="100%">
          <Routes />
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
