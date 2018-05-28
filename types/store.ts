interface IRootState {
  posts: IPostsState;
}

interface IPostsState {
  item?: IPost;
  items?: IPost[];
}

interface IPost {
  author: string;
  id?: number;
  title: string;
}
