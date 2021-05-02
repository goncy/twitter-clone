import React from "react";
import {
  Stack,
  StackDivider,
  Textarea,
  Icon,
  CircularProgress,
  IconButton,
  Button,
  useColorModeValue,
  CircularProgressLabel,
} from "@chakra-ui/react";
import {AiOutlineFileImage, AiOutlineGif, AiOutlineSmile, AiOutlineCalendar} from "react-icons/ai";
import {BsPlus} from "react-icons/bs";
import {RiBarChartHorizontalLine} from "react-icons/ri";

import {Tweet} from "../types";

interface Props {
  onSubmit: (tweet: Tweet) => void;
}

interface TweetForm extends HTMLDivElement {
  tweet: HTMLTextAreaElement;
}

const random = {
  get number() {
    return Math.round(Math.random() * 500);
  },
  get boolean() {
    return Math.random() < 0.5;
  },
};

const TweetForm: React.FC<Props> = ({onSubmit}) => {
  const [tweet, setTweet] = React.useState<string>("");
  const progressTrackColor = useColorModeValue("gray.100", "whiteAlpha.300");
  const progressColor =
    tweet.length < 200 ? "primary.400" : tweet.length < 240 ? "yellow.400" : "red.400";

  function handleSubmit(event: React.FormEvent<TweetForm>) {
    event.preventDefault();

    if (!tweet) return;

    onSubmit({
      id: String(+new Date()),
      text: tweet,
      likes: random.number,
      comments: random.number,
      retweets: random.number,
      isLiked: random.boolean,
      isRetweeted: random.boolean,
    });

    setTweet("");
  }

  return (
    <Stack as="form" divider={<StackDivider />} spacing={3} width="100%" onSubmit={handleSubmit}>
      <Textarea
        fontSize="xl"
        maxLength={280}
        overflow="hidden"
        paddingY={4}
        placeholder="¿Qué está pasando?"
        rows={1}
        value={tweet}
        variant="unstyled"
        onChange={(event) => setTweet(event.target.value)}
      />
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Stack color="primary.500" direction="row" spacing={4}>
          <Icon as={AiOutlineFileImage} height={6} width={6} />
          <Icon as={AiOutlineGif} height={6} width={6} />
          <Icon as={RiBarChartHorizontalLine} height={6} width={6} />
          <Icon as={AiOutlineSmile} height={6} width={6} />
          <Icon as={AiOutlineCalendar} height={6} width={6} />
        </Stack>
        <Stack direction="row" spacing={3}>
          <Stack alignItems="center" direction="row" divider={<StackDivider />} spacing={4}>
            <CircularProgress
              color={progressColor}
              size={tweet.length >= 240 ? 8 : 6}
              trackColor={progressTrackColor}
              value={(tweet.length * 100) / 280}
            >
              {tweet.length >= 240 && (
                <CircularProgressLabel color={progressColor} fontSize="11" fontWeight="500">
                  {280 - tweet.length}
                </CircularProgressLabel>
              )}
            </CircularProgress>
            <IconButton
              isRound
              aria-label="Add"
              colorScheme="primary"
              icon={<BsPlus size={24} />}
              size="sm"
              variant="outline"
            />
          </Stack>
          <Button colorScheme="primary" isDisabled={!tweet} type="submit">
            Twittear
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TweetForm;
