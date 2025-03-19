import { useState } from "react";
import { styled, keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonContainerProps{
  isLoading?: boolean;
  isDisabled?: boolean;
}

const ButtonConatiner = styled.div<ButtonContainerProps>`
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.theme.primary400};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.3s ease;
  &:hover{
    filter: brightness(0.8);
  }

  ${({ isLoading }) => isLoading && `
    filter: brightness(0.8);
  `}
  ${({ isDisabled }) => isDisabled && `
    filter: brightness(0.8);
  `}
  
`

const ButtonText = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: ${(props)=> props.theme.primaryTextColor}
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

export const Button = ({ label, disabled, onClick }: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const buttonHandler = async () => {
    // 버튼 클릭 이벤트와 비활성화 되지 않았을시에만 작동
    if (onClick && !disabled) { 
      // 이미 버튼이 불러 와졌다면
      if (isLoading)
        return;
      
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
      isLoading={isLoading}
      isDisabled={disabled}
    >
      { !isLoading ? 
        <ButtonText>{label}</ButtonText>
       : 
        <Spinning size={18}/>
      } 
    </ButtonConatiner>  
  );
};
