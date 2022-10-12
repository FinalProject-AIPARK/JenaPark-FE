import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 136px);
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

  .registerGirl {
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
    box-sizing: border-box;

    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      padding: 60px;
    }

    article {
      position: relative;
      width: 500px;
      margin: 60px;

      input {
        width: 100%;
        font-size: 18px;
        letter-spacing: 0.1rem;
        padding: 10px 0 3px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(26, 23, 23, 0.38);
      }

      label {
        position: absolute;
        color: #1a171761;
        left: 0;
        padding: 10px 0 3px;
        pointer-events: none;
        font-size: 16px;
        font-weight: 700;
        margin-top: -20px;
      }

      .toggleShowPw {
        position: absolute;
        right: 15px;
        top: 7.5px;
        cursor: pointer;
      }

      span {
        color: #eb5757;
        font-size: 14px;
      }
    }

    .error {
      border-bottom: 2px solid #eb5757;
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
  }
`;
