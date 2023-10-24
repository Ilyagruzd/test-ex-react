import { FC } from "react";
import { IPost } from "../../api/postAPI";

interface PostCardProps {
    post: IPost,
}

const PostCard: FC<PostCardProps> = ({ post }) => {
    return (
      <>
        <p>{ post?.id }</p>
        <p>{ post?.title }</p>
        <p>{ post?.body }</p>
      </>
    )
}

export default PostCard