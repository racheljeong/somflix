import styled from "styled-components";
import {motion} from "framer-motion";




export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  //background-color: black;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
  //background-size: cover;


`;


export const Col = styled.div`
    display: flex;
    align-items: center;

`;


export const Items = styled.ul`
    display: flex;
    align-items: center;

`;

export const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;


export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;

export const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`;

export const navVariants = {
    top: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    scroll: {
      backgroundColor: "rgba(0, 0, 0, 1)",
    },
  };

//tip: 정중앙 위치시키기
// absolute + left: 0 + right: 0 + margin: 0 auto;
export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;


export const logoVariants = {
  normal: {
    fillOpacity: 1,
    scale : 1,
  },
  active: {
    fillOpacity: [0, 1, 0], //반복되는 값을 배열로 전달
    scale : 1.3,
    transition: {
      repeat: Infinity,
    },
  },
};

export const Input = styled(motion.input)`
    transform-origin: right center; //변화의 시작 지점
    position: absolute;
    right: 0px;
    padding: 5px 10px;
    padding-left: 40px;
    z-index: -1;
    color: white;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.white.lighter};

`;
