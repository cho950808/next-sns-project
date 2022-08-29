import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../reducers/user";

import Profile from "../profile";
import Router from "next/router";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoggingIn } = useSelector((state) => state.user);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn } = useSelector((state) => state.user);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginRequestAction({ id, password }));
    Router.push("/");
  }, [id, password]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {!isLoggedIn ? (
        <Form onFinish={onSubmitForm}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} onChange={onChangeId} required />
          </div>

          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              type="password"
              name="user-password"
              value={password}
              onChange={onChangePassword}
              required
            />
          </div>

          <div className="mt-3">
            <Button type="primary" htmlType="submit" loading={isLoggingIn}>
              로그인
            </Button>

            <Link href="/signup">
              <a>
                <Button>회원가입</Button>
              </a>
            </Link>
          </div>
        </Form>
      ) : (
        <Profile />
      )}
    </div>
  );
};

export default Login;
