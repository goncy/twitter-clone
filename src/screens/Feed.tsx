import React from "react";
import {
  Stack,
  Text,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
  StackDivider,
  Icon,
  Image,
  Textarea,
  Button,
  CircularProgress,
  useColorModeValue,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";
import {BsPlus} from "react-icons/bs";
import {AiOutlineFileImage, AiOutlineSmile, AiOutlineGif, AiOutlineCalendar} from "react-icons/ai";
import {RiBarChartHorizontalLine, RiMagicLine} from "react-icons/ri";

const FeedScreen: React.FC = () => {
  const [tweets, setTweets] = React.useState<string[]>([]);
  const progressColor = useColorModeValue("gray.100", "whiteAlpha.300");

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
          <Stack divider={<StackDivider />} spacing={3} width="100%">
            <Textarea
              fontSize="xl"
              paddingY={4}
              placeholder="¿Qué está pasando?"
              variant="unstyled"
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
                    color="primary.500"
                    size={6}
                    trackColor={progressColor}
                    value={20}
                  />
                  <IconButton
                    isRound
                    aria-label="Add"
                    colorScheme="primary"
                    icon={<BsPlus size={24} />}
                    size="sm"
                    variant="outline"
                  />
                </Stack>
                <Button
                  colorScheme="primary"
                  onClick={() => setTweets((tweets) => tweets.concat(String(+new Date())))}
                >
                  Twittear
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider borderBottomWidth={5} borderTopWidth={5} />
        <Stack
          divider={<StackDivider />}
          flex={1}
          maxHeight="100vh"
          overflowY="auto"
          spacing={0}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <AnimatePresence>
            {tweets.map((id) => (
              <Stack
                key={id}
                animate={{scale: 1}}
                as={motion.div}
                borderBottomWidth={1}
                direction="row"
                exit={{scale: 0}}
                initial={{scale: 0}}
                layoutId={String(id)}
                padding={4}
                spacing={4}
                width="100%"
                onClick={() => setTweets((tweets) => tweets.filter((tweet) => tweet !== id))}
              >
                <SkeletonCircle height={12} minHeight={12} minWidth={12} speed={0} width={12} />
                <Stack spacing={4} width="100%">
                  <Stack alignItems="flex-end" direction="row" spacing={2}>
                    <Skeleton height={6} speed={0} width="120px" />
                    <Skeleton height={3} speed={0} width="80px" />
                  </Stack>
                  <SkeletonText height="100%" noOfLines={6} spacing={2} speed={0} />
                </Stack>
              </Stack>
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
