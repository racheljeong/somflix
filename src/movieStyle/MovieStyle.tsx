import styled from "styled-components";
import {motion} from "framer-motion";


export const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: absolute;
    width: 100%;
    height: 80%;
    gap: 30px;
    top: 150px;
 

`;

export const BackRow = styled.div`
  position: relative;
  top: -100px;
  margin: 100px;
  margin-top: 150px;
  justify-content: center;
  align-items: center;
`;


export const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 230px;
  border-radius: 20px;
  cursor: pointer;
  //position: relative;
  //font-size: 66px;

  //호버시 요소의 첫번째는 가운도 + 오른쪽, 마지막요소는 가운데 +왼쪽으로만 커지게 세팅
  //-> 호버시 이미지 짤리는것 방지
  /* &:first-child {
    transform-origin : center left;
  }
  &:last-child {
    transform-origin : center right;
  } */



`;


export const Wrapper = styled.div`
  background: black;
  padding-bottom: 200px;
`;


// const Banner = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 60px;
  
//   background-size: cover;
// `;

// const ModalVariants = {
  
// }
export const BoxVariants = {
    normal : {
        scale : 1,
    },
    hover : {
        scale : 1.3,
        y : -80,//호버시 살짝 위로 올라감
        transition: {
          delay: 0.5,
          duaration: 0.1,
          type: "tween",
        },
    },
    
};


export const Info = styled(motion.div)`
    padding: 10px;
    background-color: ${(props) => props.theme.black.darker};
    //background-color: linear-gradient(black,grey);
    opacity: 0;
    position: absolute;
    width: 100%;
    bottom: 0;
    h4 {
        text-align: center;
        font-size: 18px;
    }

`;

export const infoVariants = {
//자식요소는 부모요소의 variants를 물려받는다
//BOX의 motion 속성들이 자동으로 자식인 info에도 적용되므로
//자식요소의 motion을 별도로 만들어줌

    hover : {
        opacity : 1,
        transition : {
            delay : 0.5,
            duration : 0.1,
            type : "tween",  //default = spring 통통튀는느낌
        },
    },

}



export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
`;

export const BigMovie = styled(motion.div)`
    position: absolute;
    width: 40vw;
    height: 80vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: ${(props)=> props.theme.black.darker};
    border-radius: 15px;
    overflow: hidden;

`;

export const BigCover = styled.div`
    width: 100%;
    background-size: cover;
    background-position: center center;
    height: 400px;
    
`;

export const BigTitle = styled.h3`
    color: ${(props) => props.theme.white.lighter};
    font-weight: bold;
    font-size: 35px;
    padding: 10px;
    position: relative;
    top: -90px;


`;

export const BigOverview = styled.div`
    padding : 0 5px;
    //width : 80%;
    //text-align: center;
    justify-content: center;
    position: relative;
    top: -80px;
    color: ${(props) => props.theme.white.lighter};
    //p 줄 수 제한하기
    display: -webkit-box;
    // (또는 -webkit-inline-box)
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  
`;

export const BigReleaseDate = styled.h4`
    position: relative;
    top: -50px;
    margin: 0;
    padding: 5px;
`;

export const BigRate = styled.h4`
    position: relative;
    top: -50px;
    padding: 5px;
`;

export const Slider = styled.div`
  position: relative;
  top: -100px;
`;

export const Genre = styled.h4`
     position: relative;
`;

// export const HashTag = styled(FontAwesomeIcon)`
//     color: white;
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   font-size: 25px;
// `;


