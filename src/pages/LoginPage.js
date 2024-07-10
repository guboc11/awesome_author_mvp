import { useEffect, useState } from 'react'
import '../App.css'
import MyPageNav from '../components/MyPageNav'
import { useAuth } from '../shared/auth'
import {useNavigate} from 'react-router-dom'

export default function LoginPage() {
  const {isLoggedIn, setIsLoggedIn, setUser} = useAuth()
  const navigate = useNavigate()

  const [id, setId] = useState("")
  const [pw, setPw] = useState("")
  const [warningMessage, setWarningMessage] = useState("")

  const handleIdChange = (event) => {
    setId(event.target.value); // 입력된 값을 state 변수에 저장
    setWarningMessage("")
  };
  const handlePwChange = (event) => {
    setPw(event.target.value); // 입력된 값을 state 변수에 저장
    setWarningMessage("")
  };

  const handleLogin = () => {
    if (id == "writer_test" && pw == "writer") {
      setIsLoggedIn(true)
      setUser("writer")
      navigate('/mypage/writer');
    } else if (id == "employer_test" && pw == "employer") {
      setIsLoggedIn(true)
      setUser("employer")
      navigate('/mypage/employer');
    } else {
      setWarningMessage("ID, PW가 틀렸습니다.")
    }
  }
  
  useEffect(()=>{}, [])
  return(
    <div className="min-h-screen">
      <MyPageNav></MyPageNav>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
              ID
            </label>
            <input
              type="id"
              id="id"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              onChange={handleIdChange}
              value={id}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              onChange={handlePwChange}
              value={pw}
            />
          </div>
          <p className="text-sm text-red-600">{warningMessage}</p>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}