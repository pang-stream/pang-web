import { useState } from 'react'
import {customAxios} from "@repo/api"
import './App.css'
import { useAuthStore } from '@repo/store';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {setAccessToken} = useAuthStore.getState();
  const {setRefreshToken} = useAuthStore.getState();
  // 로그인 API 호출
  const handleLogin = async () => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await customAxios.post('/auth/login', { 
        username: username,
        password: password
      });
      // 로그인 성공
      setSuccess(true);
      console.log('로그인 성공:', response.data);
      setAccessToken(response.data.data.accessToken)
      setRefreshToken(response.data.data.refreshToken)
      console.log((await customAxios.get("/user")).data)
      
    } catch (err) {
      // 로그인 실패
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
      console.error('로그인 오류:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <h2>로그인</h2>
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
      <button onClick={handleLogin} disabled={loading}>
        {loading ? '로그인 중...' : '로그인'}
      </button>
      {success && <p>로그인 성공!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default App
