import { useState } from "react";
import { styled, keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  buttonName: string;
  onClick?: () => void;
}

const ButtonConatiner = styled.div`
  width: 100%;
  height: 45px;
  background-color: #FF3B79;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.span`
font-weight: 600;
  font-size: 15px;
`

const SpinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


const Spinning = styled(AiOutlineLoading3Quarters)`
  animation: ${SpinningAnimation} 0.5s linear infinite;

`

export const Button = ({ buttonName, onClick }: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const buttonHandler = async () => {
    // 버튼 클릭 이벤트가 있을시에만 작동
    if (onClick) { 
      // 버튼 로딩 상태 변경
      setIsLoading(true)
      try{
        // 전달받은 이벤트 실행
        await onClick()
      }finally{
        // 모든 이벤트가 종료된 후 상태 변경
        setIsLoading(false)
      }
    }
  }

  return (
    <ButtonConatiner
      onClick={buttonHandler}
    >
      { !isLoading ? 
        <ButtonText>{buttonName}</ButtonText>
       : 
        <Spinning size={18}/>
      } 
    </ButtonConatiner>  
  );
};
