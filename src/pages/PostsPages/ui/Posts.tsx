import { FC } from "react";
import { useFetchPostsQuery } from "../../../shared/api/postAPI";
import { FixedSizeList } from "react-window";
import { QueryHelper } from "../../../shared/components/QueryHelper/QueryHelper";
import PostRow from "../../../shared/components/PostRow/PostRow";

const Posts: FC = () => {
  const { data: posts, isLoading, isError } = useFetchPostsQuery(0);

  const Row = ({ index, style }: { index: number, style: object}) => (
    <div style={style}>
      { posts && <PostRow post={posts[index]} index={index + 1} key={posts[index].id} /> }
    </div>
  );

  return (
    <>
      <QueryHelper isLoading={isLoading} isError={isError} />
      { posts?.length
        && (
        <FixedSizeList
          height={1000}
          width={1000}
          itemSize={30}
          itemCount={posts.length ?? 0}
        >
          {Row}
        </FixedSizeList>)
      }
    </>
  )
}

export default Posts
