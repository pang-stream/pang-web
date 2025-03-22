import styled from "styled-components";

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