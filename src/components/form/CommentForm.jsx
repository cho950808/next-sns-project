import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";

import { ADD_COMMENT_REQUEST } from "../../reducers/post";

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentDone, addCommentLoading } = useSelector(
    (state) => state.post
  );
  const [commentText, onChangeCommentText, setCommentText] = useInput("");

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, userId: id, postId: post.id },
    });
  }, [commentText, id]);

  useEffect(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          rows={4}
          value={commentText}
          onChange={onChangeCommentText}
        />
        <Button
          style={{ zIndex: 1, position: "absolute", right: 0, bottom: -40 }}
          type="primary"
          htmlType="submit"
          // loading={addCommentLoading}
        >
          작성
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
