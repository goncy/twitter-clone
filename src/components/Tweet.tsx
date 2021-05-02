import React from "react";
import {Stack, Image, Text, Icon} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineHeart,
  AiOutlineRetweet,
  AiOutlineUpload,
} from "react-icons/ai";

import {Tweet as ITweet} from "../types";

interface Props {
  tweet: ITweet;
  onClick?: VoidFunction;
}

const Tweet: React.FC<Props> = ({tweet, onClick}) => {
  return (
    <Stack
      key={tweet.id}
      animate={{opacity: 1}}
      as={motion.div}
      borderBottomWidth={1}
      direction="row"
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      layoutId={tweet.id}
      padding={4}
      spacing={4}
      width="100%"
      onClick={onClick}
    >
      <Image
        borderRadius="50%"
        height={12}
        src="https://pbs.twimg.com/profile_images/1199686661954818050/IRXOiWJY_normal.jpg"
        width={12}
      />
      <Stack spacing={3} width="100%">
        <Stack spacing={0}>
          <Stack alignItems="flex-end" direction="row">
            <Text fontWeight="bold">goncy.tsx</Text>
            <Text textStyle="translucid">@goncy</Text>
          </Stack>
          <Text lineHeight="20px" whiteSpace="pre-wrap">
            {tweet.text}
          </Text>
        </Stack>
        <Stack
          color="gray.500"
          direction="row"
          fontSize="sm"
          justifyContent="space-between"
          marginTop={6}
          textStyle="translucid"
        >
          <Stack alignItems="center" direction="row" flex={1}>
            <Icon as={AiOutlineComment} height={5} width={5} />
            <Text flex={1}>{tweet.comments || null}</Text>
          </Stack>
          <Stack
            alignItems="center"
            color={tweet.isRetweeted ? "green.500" : "inherit"}
            direction="row"
            flex={1}
          >
            <Icon as={AiOutlineRetweet} height={5} width={5} />
            <Text flex={1}>{tweet.retweets || null}</Text>
          </Stack>
          <Stack
            alignItems="center"
            color={tweet.isLiked ? "red.500" : "inherit"}
            direction="row"
            flex={1}
          >
            <Icon as={tweet.isLiked ? AiFillHeart : AiOutlineHeart} height={5} width={5} />
            <Text flex={1}>{tweet.likes || null}</Text>
          </Stack>
          <Stack alignItems="center" direction="row" flex={1}>
            <Icon as={AiOutlineUpload} height={5} width={5} />
            <Text flex={1}>{null}</Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Tweet;
