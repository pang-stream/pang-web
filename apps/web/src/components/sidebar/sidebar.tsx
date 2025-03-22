import { Fragment } from "react";
import {styled} from "styled-components"
import { IoHeartOutline, IoRadioOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { PiList } from "react-icons/pi";
import useSidebarStore from "../../stores/useSidebarStore";
import logo from "../../assets/logo.svg"
import pung from "../../assets/pung.png"
import pung_primary from "../../assets/pung-primary.png"
import pung_gray from "../../assets/pung-gray.png"

import { ItemIconAndTextCliped, ItemIconAndText } from "./sidebar.style"
import { SidebarExplorerItem, SidebarProps } from "./sidebar.props";
import { Link } from 'react-router-dom';

export const SidebarItem = ({ id, icon, isClipped, label, isSelected, to }: SidebarExplorerItem) => {
    const { setSelected } = useSidebarStore();
    
    let displayLabel = label.replace(" ", "\n");
    if (isClipped) {
        return <Fragment>
            <Link to={to} style={{textDecoration:"none"}}>
                <ItemIconAndTextCliped isSelected={isSelected} onClick={() => setSelected(id)}>
                    {icon}
                    <div>
                        {displayLabel}
                    </div>
                </ItemIconAndTextCliped>
            </Link>
        </Fragment>
    }else{
        return <Link to={to} style={{textDecoration:"none"}}>
            <ItemIconAndText isSelected={isSelected} onClick={() => setSelected(id)}>
                {icon} {label.replace(" ", "")}
            </ItemIconAndText>
        </Link>
    };
}



export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
`

const HeaderLogoContainer = styled.div`
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

export const BaseSidebar = styled.div`
    grid-row: span 2;
    color: #fff;
    background-color: ${(props)=> props.theme.netural900};
    height: calc(100% - 64px);
    overscroll-behavior: none;
    position: relative;
    top: 64px;
    z-index: 2;
`;

export const SidebarMainNav = ({isClipped}:SidebarProps) =>{
    const { selected } = useSidebarStore();

    return (
        <SidebarContainer>
            <SidebarItem id="explorer" to="/" label='탐색' icon={<IoRadioOutline size={24}/>} isClipped={isClipped} isSelected={selected == "explorer" ? true : false}/>
            <SidebarItem id="category" to="/category" label='카테 고리' icon={<IoGridOutline  size={24}/>} isClipped={isClipped} isSelected={selected == "category" ? true : false}/>
            <SidebarItem id="follow" to="/follow" label='팔로잉' icon={<IoHeartOutline size={24}/>} isClipped={isClipped} isSelected={selected == "follow" ? true : false}/>
            <SidebarItem id="pung" to="/pung" label='충전' icon={<img src={ selected == "pung" ? pung_primary : !isClipped ? pung : pung_gray} width={24}></img>} isClipped={isClipped} isSelected={selected == "pung" ? true : false}/>
        </SidebarContainer>
    )
}

export const Sidebar = () => {
    const { isClipped, setIsClipped } = useSidebarStore();
    return (
        <BaseSidebar>
            <HeaderLogoContainer>
                <PiList onClick={()=>{setIsClipped(!isClipped)}} style={{marginLeft:28}} size={24}/>
                <img 
                    width={130} 
                    src={logo} 

                    alt='Pang-Logo'
                />
            </HeaderLogoContainer>
            <SidebarMainNav isClipped={isClipped}/>
        </BaseSidebar>
    )
}