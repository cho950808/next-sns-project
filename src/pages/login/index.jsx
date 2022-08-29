import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import useInput from "../../components/hooks/useInput";
import { LOG_IN_REQUEST } from "../../reducers/user";

import Profile from "../profile";
import Router from "next/router";

const Login = () => {
  const dispatch = useDispatch();
  const { me, logInLoading } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
    Router.push("/");
  }, [email, password]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {!me ? (
        <Form onFinish={onSubmitForm}>
          <div>
            <label htmlFor="user-email">이메일</label>
            <br />
            <Input
              name="user-email"
              value={email}
              type="email"
              onChange={onChangeEmail}
              required
            />
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
            <Button type="primary" htmlType="submit" loading={logInLoading}>
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
