import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { LOG_OUT_REQUEST } from "../../reducers/user";

const Profile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Card
        actions={[
          <div key="twit">
            쨱짹
            <br />
            {me?.Posts.length}
          </div>,
          <div key="followings">
            팔로잉
            <br />
            {me?.Followings.length}
          </div>,
          <div key="followings">
            팔로워
            <br />
            {me?.Followers.length}
          </div>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{me?.nickname[0]}</Avatar>}
          title={me?.nickname}
        />
        <Button onClick={onLogout} loading={logOutLoading}>
          로그아웃
        </Button>
      </Card>
    </div>
  );
};

export default Profile;
