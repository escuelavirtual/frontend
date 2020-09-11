import styled, { keyframes } from "styled-components";

const BackLoader = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const StyledLoader = styled.div`
  position: relative;
  width: 75px;
  height: 100px;
`;

const BallAnimation = keyframes`
  @keyframes ball {
    0% {
      transform: translate(0, 0);
    }
    5% {
      transform: translate(8px, -14px);
    }
    10% {
      transform: translate(15px, -10px);
    }
    17% {
      transform: translate(23px, -24px);
    }
    20% {
      transform: translate(30px, -20px);
    }
    27% {
      transform: translate(38px, -34px);
    }
    30% {
      transform: translate(45px, -30px);
    }
    37% {
      transform: translate(53px, -44px);
    }
    40% {
      transform: translate(60px, -40px);
    }
    50% {
      transform: translate(60px, 0);
    }
    57% {
      transform: translate(53px, -14px);
    }
    60% {
      transform: translate(45px, -10px);
    }
    67% {
      transform: translate(37px, -24px);
    }
    70% {
      transform: translate(30px, -20px);
    }
    77% {
      transform: translate(22px, -34px);
    }
    80% {
      transform: translate(15px, -30px);
    }
    87% {
      transform: translate(7px, -44px);
    }
    90% {
      transform: translate(0, -40px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes barUp1 {
    0% {
      transform: scale(1, 0.2);
    }
    40% {
      transform: scale(1, 0.2);
    }
    50% {
      transform: scale(1, 1);
    }
    90% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 0.2);
    }
  }
  @keyframes barUp2 {
    0% {
      transform: scale(1, 0.4);
    }
    40% {
      transform: scale(1, 0.4);
    }
    50% {
      transform: scale(1, 0.8);
    }
    90% {
      transform: scale(1, 0.8);
    }
    100% {
      transform: scale(1, 0.4);
    }
  }
  @keyframes barUp3 {
    0% {
      transform: scale(1, 0.6);
    }
    100% {
      transform: scale(1, 0.6);
    }
  }
  @keyframes barUp4 {
    0% {
      transform: scale(1, 0.8);
    }
    40% {
      transform: scale(1, 0.8);
    }
    50% {
      transform: scale(1, 0.4);
    }
    90% {
      transform: scale(1, 0.4);
    }
    100% {
      transform: scale(1, 0.8);
    }
  }
  @keyframes barUp5 {
    0% {
      transform: scale(1, 1);
    }
    40% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 0.2);
    }
    90% {
      transform: scale(1, 0.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }`;

const LoaderBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 10px;
  height: 50%;
  background: $pColor;
  transform-origin: center bottom;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);

  @for $i from 1 through 5 {
    &:nth-child(#{$i}) {
      left: ($i - 1) * 15px;
      transform: scale(1, $i * 0.2);
      animation: barUp#{$i} 4s infinite;
    }
  }
`;

const Ball = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 10px;
  height: 10px;
  background: $pColor;
  border-radius: 50%;
  animation: ${BallAnimation} 4s infinite;
`;

export { LoaderBar, Ball, BackLoader, StyledLoader };
