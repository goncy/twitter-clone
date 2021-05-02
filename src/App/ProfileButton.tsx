import React from "react";
import {Stack, Icon, Text, Image, StackProps} from "@chakra-ui/react";
import {BsThreeDots} from "react-icons/bs";

const ProfileButton: React.FC<StackProps> = (props) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      padding={4}
      {...props}
    >
      <Stack alignItems="center" direction="row" spacing={3}>
        <Image
          borderRadius="50%"
          height={10}
          src="https://pbs.twimg.com/profile_images/1199686661954818050/IRXOiWJY_normal.jpg"
          width={10}
        />
        <Stack spacing={0}>
          <Text fontSize="sm" fontWeight="bold" lineHeight="normal">
            goncy.tsx
          </Text>
          <Text fontSize="xs" lineHeight="normal" textStyle="translucid">
            @goncy
          </Text>
        </Stack>
      </Stack>
      <Icon as={BsThreeDots} />
    </Stack>
  );
};

export default ProfileButton;
