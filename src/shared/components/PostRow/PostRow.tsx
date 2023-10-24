import { FC } from "react";
import './PostRow.css'
import { useNavigate } from "react-router-dom";
import { IPost } from "../../api/postAPI";

interface PostRowProps {
    post: IPost,
    index: number
}

const PostRow: FC<PostRowProps> = ({ post, index }) => {
    const { body, title, id } = post;
    const navigate = useNavigate();
    
    const handleRedirect = () => navigate(`/posts/${id}`);

    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <p className="text">{ index }. { title } {body}</p>
            <button onClick={handleRedirect}>Просмотр</button>
        </div>
    );
}

export default PostRow
