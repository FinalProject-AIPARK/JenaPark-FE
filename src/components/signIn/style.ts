import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 136px); // 100vh - header height
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;

  .wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 740px;
    height: 914px;
  }

  .loginMan {
    position: absolute;
    left: -626px;
    top: -84px;
  }
  form {
    z-index: 9;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    padding: 134px 134px 0;
    box-sizing: border-box;

    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      margin-bottom: 60px;
    }

    .signInput {
      position: relative;
      width: 500px;
      margin-bottom: 48px;

      input {
        width: 100%;
        font-size: 18px;
        letter-spacing: 0.1rem;
        padding: 10px 0 3px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(26, 23, 23, 0.38);
      }

      label {
        color: #1a171761;
        position: absolute;
        left: 0;
        padding: 10px 0 3px;
        pointer-events: none;
        font-size: 18px;
      }

      input:focus + label,
      input:valid + label {
        top: -20px;
      }

      .toggleShowPw {
        position: absolute;
        right: 15px;
        top: 7.5px;
        cursor: pointer;
      }
    }

    p {
      color: #eb5757;
      font-size: 14px;
    }
  }

  button {
    margin: 20px 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    width: 500px;
    height: 48px;
    color: #fff;
    background: #002868;
    border-radius: 5px;
    :hover {
      background: #002848;
    }
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-bottom: 30px;
    cursor: pointer;
  }

  .snsLogin {
    .snsImgBox {
      display: flex;
      gap: 20px;
    }

    h2 {
      padding: 30px 20px;
      border-top: 1px solid #bdbdbd;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      text-align: center;
    }

    img {
      cursor: pointer;
    }
  }

  .terms {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    transform: translateX(-6px);

    span {
      cursor: pointer;
      padding: 0 16px;
      &:first-child {
        border-right: 1px solid rgba(26, 23, 23, 0.38);
        box-sizing: border-box;
      }
    }
  }
`;
