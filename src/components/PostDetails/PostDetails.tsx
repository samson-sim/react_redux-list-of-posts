import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsOfPost, deleteComment } from '../../api/comments';
import { getSelectedPost } from '../../api/posts';
import { Comment } from '../../types/Comment';
import { NewCommentForm } from '../NewCommentForm';
import './PostDetails.scss';
import { State } from '../../store';

export const PostDetails: React.FC = () => {
  const dispatch = useDispatch();

  const selectedPost = useSelector((state: State) => state.selectedPost);

  const selectedPostId = useSelector((state: State) => state.selectedPostId);

  const [commentsOfPost, setComments] = useState<Comment[]>([{
    id: 0,
    postId: 0,
    name: '',
    email: '',
    body: '',
  }]);

  const [isCommentsHidden, setIsCommentsHidden] = useState(false);

  const getPostComments = async () => {
    const comments = await getCommentsOfPost(selectedPostId);

    setComments(comments);
  };

  const removeComment = async (id: number) => {
    await deleteComment(id);

    await getPostComments();
  };

  useEffect(() => {
    getPostComments();
    dispatch(getSelectedPost(selectedPostId));
  }, [selectedPostId]);

  return (
    <div className="PostDetails">
      <h2>Post details:</h2>

      <section className="PostDetails__post">
        <p>{selectedPost.title}</p>
      </section>

      <section className="PostDetails__comments">
        {commentsOfPost.length
          && (
            <button
              type="button"
              className="button"
              onClick={() => setIsCommentsHidden(!isCommentsHidden)}
            >
              {!isCommentsHidden ? `Hide ${commentsOfPost.length} comments` : 'Show comments'}
            </button>
          )}

        {!isCommentsHidden && (
          <ul className="PostDetails__list">
            {commentsOfPost.map(comment => (
              <li key={comment.id} className="PostDetails__list-item">
                <button
                  type="button"
                  className="PostDetails__remove-button button"
                  onClick={() => {
                    removeComment(comment.id);
                  }}
                >
                  X
                </button>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <div className="PostDetails__form-wrapper">
          <NewCommentForm
            getPostComments={getPostComments}
          />
        </div>
      </section>
    </div>
  );
};