import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";

const Profile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Card
        actions={[
          <div key="twit">
            쨱짹
            <br />0
          </div>,
          <div key="followings">
            팔로잉
            <br />0
          </div>,
          <div key="followings">
            팔로워
            <br />0
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>AC</Avatar>} title="test" />
        <Button onClick={onLogOut}>로그아웃</Button>
      </Card>
    </div>
  );
};

export default Profile;
