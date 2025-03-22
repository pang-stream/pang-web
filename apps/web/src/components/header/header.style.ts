import styled from "styled-components";

export const HeaderLogoContainer = styled.div`
    position: absolute;
    z-index: 999;
    display: flex;
    align-items: center;
    top: -64px;
    gap: 18px;
    height: 64px;
    width: 240px;
    border-bottom: 1px solid ${(props)=>props.theme.gray700};
    background-color: ${(props)=> props.theme.netural900};
`

export const BaseHeader = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 25px;
    background-color: ${(props)=> props.theme.netural900};
    border-bottom: 1px solid ${(props)=>props.theme.gray700};
    overscroll-behavior: none;
    display: flex;
    justify-content: space-between;
`;