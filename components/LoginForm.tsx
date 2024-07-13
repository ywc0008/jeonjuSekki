import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="">이메일</label>
        <input type="text" placeholder="이메일 주소" />
        <label htmlFor="">비밀번호</label>
        <input type="text" placeholder="비밀번호" />
      </form>
    </div>
  );
};

export default LoginForm;
