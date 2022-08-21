import { Form, Input, Checkbox, Button } from "antd";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import useInput from "../../components/hooks/useInput";

const Singup = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <>
      <Head>
        <title>Next-SNS | 회원가입</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user-nick"
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              type="password"
              name="user-password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호</label>
            <br />
            <Input
              type="password"
              name="user-password-check"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div className="text-red-700">비밀번호가 일치하지 않음</div>
            )}
          </div>
          <div className="mt-2">
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              회원가입에 동의합니다.
            </Checkbox>
            {termError && (
              <div className="text-red-700">약관에 동의하셔야 합니다.</div>
            )}
          </div>

          <div className="mt-2">
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Singup;
