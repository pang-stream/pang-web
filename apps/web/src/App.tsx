import { useState } from 'react'
import { customAxios } from "@repo/api"
import { useAuthStore } from '@repo/store';
import {Button, SmallButton} from "@repo/ui/buttons"
import {Chip} from "@repo/ui/chips"
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState('');
  const {setTokenData} = useAuthStore();

  const loadUserInfo = async () => {
    const response = await customAxios.get("/user");
    setUserData(String(JSON.stringify(response.data.data)))
  }

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await customAxios.post('/auth/login', { 
        username: username,
        password: password
      });
      setSuccess(true);
      console.log('로그인 성공:', response.data);
      setTokenData({
        accessToken:response.data.data.accessToken,
        refreshToken:response.data.data.refreshToken
      })
      console.log((await customAxios.get("/user")).data)
      
    } catch (err) {
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
      console.error('로그인 오류:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <h2>로그인</h2>
      <Chip textColor='#ffffff'  bgColor='#761AFF' label='안녕'/>
      <Chip textColor='#761AFF'  bgColor='#E7D6FF' label='반가워'/>
      <SmallButton label='버튼 레이블' onClick={loadUserInfo}/>
      <div>
        <label htmlFor="username">사용자명</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="사용자명을 입력하세요"
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      
      <Button label='로그인' onClick={handleLogin}></Button>
      {success && <p>로그인 성공!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Button label='유저정보 가져오기' onClick={loadUserInfo}></Button>
      <div>
        {userData}
      </div>

    </div>
  )
}

export default App