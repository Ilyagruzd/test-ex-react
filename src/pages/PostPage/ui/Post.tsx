import { FC } from "react";
import { useFetchPostByIdQuery } from "../../../shared/api/postAPI";
import { useNavigate, useParams } from "react-router-dom";
import { QueryHelper } from "../../../shared/components/QueryHelper/QueryHelper";
import PostCard from "../../../shared/components/PostCard/PostCard";

const Post: FC = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
    
  const { data: post, isLoading, isError } = useFetchPostByIdQuery(postId ?? '');
  
  const handleBack = () => navigate(`/posts`);

  return (
    <>
    <button onClick={handleBack}>Назад</button>
      <QueryHelper isLoading={isLoading} isError={isError} />
      { post && <PostCard post={post} /> }
    </>
  )
}

export default Post
