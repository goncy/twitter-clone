import React from "react";
import {Stack, Text, StackDivider, Icon, Image, Divider} from "@chakra-ui/react";
import {AnimatePresence} from "framer-motion";
import {RiMagicLine} from "react-icons/ri";

import TweetForm from "../forms/Tweet";
import Tweet from "../components/Tweet";
import {Tweet as ITweet} from "../types";

const FeedScreen: React.FC = () => {
  const [tweets, setTweets] = React.useState<ITweet[]>([]);

  return (
    <Stack direction="row" divider={<StackDivider />} height="100%" spacing={0}>
      <Stack divider={<StackDivider />} maxWidth={600} spacing={0} width="100%">
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          paddingX={4}
          paddingY={3}
        >
          <Text fontSize="xl" fontWeight="bolder">
            Inicio
          </Text>
          <Icon as={RiMagicLine} color="primary.500" height={5} width={5} />
        </Stack>
        <Stack direction="row" paddingX={4} paddingY={2} spacing={4}>
          <Image
            borderRadius="50%"
            height={12}
            src="https://pbs.twimg.com/profile_images/1199686661954818050/IRXOiWJY_normal.jpg"
            width={12}
          />
          <TweetForm onSubmit={(tweet) => setTweets((tweets) => tweets.concat(tweet))} />
        </Stack>
        <Divider borderBottomWidth={5} borderTopWidth={5} />
        <Stack divider={<StackDivider />} flex={1} maxHeight="100vh" overflowY="auto" spacing={0}>
          <AnimatePresence>
            {tweets.map((tweet) => (
              <Tweet
                key={tweet.id}
                tweet={tweet}
                onClick={() =>
                  setTweets((tweets) => tweets.filter((_tweet) => _tweet.id !== tweet.id))
                }
              />
            ))}
          </AnimatePresence>
        </Stack>
      </Stack>
      <Text maxWidth={350} width="100%">
        {""}
      </Text>
    </Stack>
  );
};

export default FeedScreen;
