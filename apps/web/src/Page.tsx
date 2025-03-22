import { Button, SmallButton } from '@repo/ui/buttons';
import styled from 'styled-components';
import logo from "./assets/logo.svg";
import { PiList } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { IoRadioOutline, IoTicketOutline } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

interface ClipedSidebar {
    isCliped?: boolean
}

const Container = styled.div<ClipedSidebar>`
    display: grid;
    
    grid-template-columns: ${({ isCliped }) => isCliped ? 80 : 240}px 1fr;
    grid-template-rows: 65px 1fr;
    height: 100vh;
    overflow: hidden;
    overscroll-behavior: none;
`;

const Sidebar = styled.div`
    grid-row: span 2;
    color: #fff;
    background-color: ${(props)=> props.theme.netural900};
    height: calc(100% - 64px);
    overscroll-behavior: none;
    position: relative;
    top: 64px;
    z-index: 2;
`;

const Header = styled.div`
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

const Content = styled.div`
    overflow: auto;
    display: flex;
`;

import { createGlobalStyle } from 'styled-components';
import { theme } from '@repo/ui/theme';
import { Fragment, ReactNode, useState } from 'react';

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
    overscroll-behavior: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${(props)=> props.theme.netural900};
  }
  ol, ul{
    list-style: none;
  }
`;

const HeaderLogoContainer = styled.div<ClipedSidebar>`
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

    ${({ isCliped }) => !isCliped && `
        border-bottom: 1px solid #1F2937ff;
    `}
`

const SearchView = styled.div`
    height: 40px;
    width: 30%;
    width: 450px;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    
    background-color: #262626;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:20px;
    padding: 15px;
    padding-top: 0;
    padding-bottom: 0;
`

const SearchInput = styled.input`
    width: 100%;
    height: 45px;
    background: none;
    outline: none;
    border: 0;
    color: white;    
    font-size: 14px;
`

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
`

interface SidebarExplorerItem {
    icon: ReactNode;
    isCliped?: boolean;
    label: string;
}

const SidebarItem = ({ icon, isCliped, label }: SidebarExplorerItem) => {
    const ItemIconAndText = styled.div`
        display: flex;
        margin-left: 13px;
        align-items: center;
        gap: 10px;
        font-size: 16px;
        border-radius: 10px;
        padding: 15px;
        margin-right: 25px;
        color: #ffffff;
        transition: 0.1s background-color;
        cursor: pointer;
        &:hover{
            background-color: ${(props)=>props.theme.gray800};
        }
    `
    const ItemIconAndTextCliped = styled.div`
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
        cursor: pointer;
    `
    
    let displayLabel = label.replace(" ", "\n")
    if (isCliped) {
        return <Fragment>
            <ItemIconAndTextCliped>
                {icon}
                <div>
                    {displayLabel}
                </div>
            </ItemIconAndTextCliped>
        </Fragment>
    }else{
        return <ItemIconAndText>
            {icon} {label.replace(" ", "")}
        </ItemIconAndText>
    }
}

const ClipedBackdrop = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
` 


export const Page = () => {
    const [isCliped, setCliped] = useState(true)
    const streams = [
        { id: 1, title: '[라이브 제목] 어쩌구저쩌구', streamer: '스트리머' },
        { id: 2, title: '[라이브 제목] 어쩌구저쩌구', streamer: '스트리머' },
        { id: 3, title: '[라이브 제목] 어쩌구저쩌구', streamer: '스트리머' },
        { id: 2, title: '[라이브 제목] 어쩌구저쩌구', streamer: '스트리머' },
        { id: 3, title: '[라이브 제목] 어쩌구저쩌구', streamer: '스트리머' }
      ];
    return (
        <>
            <GlobalStyle />
            <Container isCliped={isCliped}>
                <Sidebar>
                    <HeaderLogoContainer isCliped={isCliped}>
                        <PiList onClick={()=>{setCliped(!isCliped)}} style={{marginLeft:28}} size={24}/>
                        <img width={130} src={logo} alt='Pang-Logo'/>
                    </HeaderLogoContainer>
                    <SidebarContainer>
                        <SidebarItem label='탐색' icon={<IoRadioOutline color='white' size={24}/>} isCliped={isCliped}>

                        </SidebarItem>
                        <SidebarItem label='카테 고리' icon={<IoGridOutline color='white' size={24}/>} isCliped={isCliped}>

                        </SidebarItem>
                        <SidebarItem label='팔로잉' icon={<CiHeart color='white' size={24}/>} isCliped={isCliped}>

                        </SidebarItem>
                        <SidebarItem label='충전' icon={<IoTicketOutline color='white' size={24}/>} isCliped={isCliped}>

                        </SidebarItem>
                    </SidebarContainer>
                </Sidebar>
                { !isCliped && <ClipedBackdrop onClick={()=>setCliped(true)}/>}
                <Header>
                    <div></div>
                    <SearchView>
                        <SearchInput placeholder='검색어를 입력해주세요!'></SearchInput>
                        <IoIosSearch size={22} color={theme.primary500}></IoIosSearch>
                    </SearchView>
                    <SmallButton label='로그인'></SmallButton>
                </Header>
                <Content>
                  <GridContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                  </GridContainer>
                </Content>
            </Container>
        </>
    );
    
}


export const Card = () => {
    return (
        <CardContainer>
          <CardVideo />
            <CardInfo>
              <ProfileIcon />
              <InfoContainer>
                <Title>[라이브 제목] 어쩌구저쩌구</Title>
                <StreamerName>스트리머</StreamerName>
            </InfoContainer>
          </CardInfo>
        </CardContainer>
    );
};

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(365px, 1fr));
    gap: 12px; 
    justify-content: center;
    width: 100%;
    max-width: 100%;
    padding: 16px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(0, 1fr)); 
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;


const CardContainer = styled.div`
    width: 100%;
    height: 285px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
`

const CardVideo = styled.div`
    width: 100%;
    height: 225px;
    background-color: #27272A;
    border-radius: 12px;
`;

const CardInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;

const ProfileIcon = styled.div`
    width: 50px;
    height: 50px;
    background-color: #737373;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Title = styled.span`
    font-size: 20px;
    color: white;
`;

const StreamerName = styled.span`
    color: #555;
`;