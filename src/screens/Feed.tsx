import React from "react";
import {Stack, SkeletonCircle, SkeletonText, Skeleton, StackDivider} from "@chakra-ui/react";

const TWEETS = new Array(12).fill(true).map((_, index) => index);

const FeedScreen: React.FC = () => {
  return (
    <Stack
      divider={<StackDivider />}
      flex={1}
      maxHeight="100vh"
      maxWidth={600}
      overflowY="auto"
      spacing={0}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      width="100%"
    >
      {TWEETS.map((index) => (
        <Stack key={index} direction="row" maxWidth={480} padding={4} spacing={4} width="100%">
          <SkeletonCircle height={12} minHeight={12} minWidth={12} width={12} />
          <Stack spacing={4} width="100%">
            <Stack alignItems="flex-end" direction="row" spacing={2}>
              <Skeleton height={6} width="120px" />
              <Skeleton height={3} width="80px" />
            </Stack>
            <SkeletonText height="100%" noOfLines={6} spacing={2} />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default FeedScreen;
