import React from "react";
import { Avatar, Button, Card } from "antd";

const Profile = () => {
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
        <Button>로그아웃</Button>
      </Card>
    </div>
  );
};

export default Profile;
