import { Link } from 'react-router-dom'
import { Typography, Button } from '@mui/material'
import React from 'react'
import './CommentCard.css'
import { Delete } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCommentOnPost } from '../../Actions/Post'
import { getFollowingPosts } from '../../Actions/User'

const CommentCard = ({
    userId,
    name,
    avatar,
    comment,
    commentId,
    postId,
    isAccount,
}) => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const deleteCommentHandle = async () => {
        // console.log('Delete this');
        await dispatch(deleteCommentOnPost(postId, commentId));

        if (isAccount) {
            console.log(`bring me my post`);
        } else {
            dispatch(getFollowingPosts());
        }
    }

    
    return (
        //Thong tin ng comment
        <div className="commentUser">
            <Link to={`/user/${userId}`}>
                <img src={avatar} alt={name} />
                <Typography style={{ minWidth: '6vmax' }}>{name}</Typography>
            </Link>
            <Typography>
                {comment}
            </Typography>
            
            {isAccount ? (
        <Button onClick={deleteCommentHandle}>
          <Delete />
        </Button>
      ) : userId === user.id ? (
        <Button onClick={deleteCommentHandle}>
          <Delete />
        </Button>
      ) : null}

        </div>
    )
}

export default CommentCard