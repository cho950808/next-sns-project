import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../reducers";

import Profile from "../profile";

const Login = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  console.log(isLoggedIn);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }));
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
            <Button type="primary" htmlType="submit" loading={false}>
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
