import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(/images/login-man.svg);
  background-repeat: no-repeat;
  background-position: left; // 로그인맨 위치
  background-size: 100px 100px; // 로그인맨 키우기
  position: relative;

  form {
    position: absolute;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 34.75px;
    }

    article {
      position: relative;
      width: 500px;

      input {
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-size: 18px;
        letter-spacing: 0.1rem;
        padding: 10px 0 3px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(26, 23, 23, 0.38);
        &:valid ~ label,
        &:focus ~ label {
          color: red;
          transform: translateY(-16px);
          font-size: 0.65em;
        }
      }

      label {
        color: #1a171761;
        position: absolute;
        left: 0;
        padding: 10px 0 3px;
        pointer-events: none;
        letter-spacing: 0.1rem;
        transition: 0.5s;
      }
    }

    button {
      width: 500px;
      height: 48px;
      color: #fff;
      background: #002868;
      border-radius: 5px;
      border: none;
      outline: none;
    }
  }
`;
