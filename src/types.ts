export interface Tweet {
  id: string;
  text: string;
  comments: number;
  retweets: number;
  likes: number;
  isLiked: boolean;
  isRetweeted: boolean;
}
