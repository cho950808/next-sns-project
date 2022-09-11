import React, { useEffect, useState } from "react";
import { kakaoInit } from "../util/kakao";
import { Form, Input, Button } from "antd";
import Router from "next/router";

const KaKao = () => {
  return;
  // const kakao = kakaoInit();

  // const [user_id, setUserId] = useState();
  // const [nickName, setNickName] = useState();
  // const [profileImage, setProfileImage] = useState();
  // const [gender, setGender] = useState();
  // const [birthday, setBirthday] = useState();
  // const [email, setEmail] = useState();

  // const getProfile = async () => {
  //   try {
  //     // Kakao SDK API를 이용해 사용자 정보 획득
  //     let data = await window.Kakao.API.request({
  //       url: "/v2/user/me",
  //     });

  //     // 사용자 정보 변수에 저장
  //     setUserId(data.id);
  //     setNickName(data.properties.nickname);
  //     setProfileImage(data.properties.profile_image);
  //     setGender(data.kakao_account.gender);
  //     setBirthday(data.kakao_account.birthday);
  //     setEmail(data.kakao_account.email);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getProfile();
  // }, []);

  // const KakaoLogout = async () => {
  //   // console.log(kakao.Auth.getAccessToken()); // 카카오 접근 토큰 확인 (로그인 후 해당 토큰을 이용하여 추가 기능 수행 가능)

  //   // 카카오 로그인 링크 해제
  //   kakao.API.request({
  //     url: "/v1/user/unlink",
  //     success: (res) => {
  //       // 로그인 성공할 경우 정보 확인 후 / 페이지로 push
  //       console.log(res);
  //       Router.push("/");
  //     },
  //     fail: (error) => {
  //       console.log(error);
  //     },
  //   });
  // };
  // return (
  //   <div className="flex min-h-screen flex-col items-center justify-center py-2">
  //     <p className="text-[50px]">KaKao</p>
  //     <Button className="mt-20" type="primary" onClick={KakaoLogout}>
  //       카카오 로그아웃
  //     </Button>
  //     {/* <p>{kakao}</p> */}

  //     <div className="mt-10">
  //       <h1 className="text-[20px] font-bold">정보</h1>
  //       <h2>아이디 : {user_id}</h2>
  //       <h2>이름 : {nickName}</h2>
  //       <h2>이메일 : {email}</h2>
  //       <h2>성별 : {gender}</h2>
  //       <h2>생일 : {birthday}</h2>
  //       <img src={profileImage}></img>
  //     </div>
  //   </div>
  // );
};

export default KaKao;
