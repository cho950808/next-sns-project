import React, { useCallback, useEffect, useRef, useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { addPost } from "../../reducers/post";
import useInput from "../hooks/useInput";

const PostForm = () => {
  const { imagePaths, addPostLoading, addPostDone } = useSelector(
    (state) => state.post
  );
  const [text, onChangeText, setText] = useInput("");
  const dispatch = useDispatch();

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
  }, [text]);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button
          type="primary"
          style={{ float: "right" }}
          htmlType="submit"
          loading={addPostLoading}
        >
          답글
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={"http://localhost:3065/" + v}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
