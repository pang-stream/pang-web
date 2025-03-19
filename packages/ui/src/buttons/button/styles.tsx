import { styled, keyframes } from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ButtonContainerProps } from "./button.props";

export const ButtonConatiner = styled.div<ButtonContainerProps>`
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

export const ButtonText = styled.span`
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


export const Spinning = styled(AiOutlineLoading3Quarters)`
  animation: ${SpinningAnimation} 0.5s linear infinite;
`
