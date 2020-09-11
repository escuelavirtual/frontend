import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    background-color: var(--tColor);
    font-family: "Source Sans Pro", sans-serif;
    position: sticky;
    top: 0;
    padding: 20px 40px;
  `,
  Logo = styled.div`
    text-decoration: none;
    color: #000000;

    img {
      vertical-align: middle;
    }

    span {
      font-family: "Source Sans Pro", sans-serif;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      margin-left: 8px;
      vertical-align: middle;
    }
  `,
  NavSearch = styled.input`
    width: 50%;
    min-width: 80%;
    height: 100%;
  `,
  Links = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      a {
        text-decoration: none;
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        line-height: 40px;
        color: #2c312d;
      }
    }

    li:nth-child(1) {
      margin-right: 24px;
    }

    li:nth-child(2) {
      margin-right: 32px;
    }

    li:nth-child(3) {
      margin-right: 16px;
      a {
        color: $pCThree;
      }
    }
  `,
  RegisterButton = styled.button`
    background-color: var(--pColor);
    border: none;
    border-radius: 5px;
    color: #ffffff;
    padding: 10px 16px;
    font-size: 16px;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: bold;
    line-height: 20px;
    cursor: pointer;
  `;

export { Nav, Logo, Links, RegisterButton, NavSearch };
