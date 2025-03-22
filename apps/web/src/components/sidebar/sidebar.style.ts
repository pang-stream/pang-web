import styled from "styled-components"
import { SidebarItemProps } from "./sidebar.props"
import { theme } from "@repo/ui/theme"

export const ItemIconAndText = styled.div<SidebarItemProps>`
    display: flex;
    margin-left: 13px;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    border-radius: 10px;
    padding: 15px;
    margin-right: 25px;
    color: #ffffff ;
    transition: 0.1s background-color;
    text-align: center;
    cursor: pointer;

    ${({ isSelected }) => isSelected && `
        background-color: ${theme.netural800};
        color: ${theme.primary500} !important;
    ` };

    &:hover{
        background-color: ${(props)=>props.theme.netural800};
    }
`

export const ItemIconAndTextCliped = styled.div<SidebarItemProps>`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
    font-size: 12px;
    text-align: center;
    white-space: pre-wrap;

    color: #989898;
    ${({ isSelected }) => isSelected && `
        color: ${theme.primary500};
    ` };
    cursor: pointer;
`