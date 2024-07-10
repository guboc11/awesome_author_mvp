import '../App.css'
import { Link, Outlet } from "react-router-dom";
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useAuth } from '../shared/auth';
import { useNavigate } from 'react-router-dom';


export default function MyPageNav() {
  const {profile, isLoggedIn, setIsLoggedIn} = useAuth()
  const navigate = useNavigate()

  const logoImagePath = "/penment_logo.jpeg"

  const onClick = () => {
    setIsLoggedIn(false)
    navigate("/")

  }
  return (
    <>
      <div className="w-[1024px] mx-auto">

        <nav className="flex justify-between">
          <div className="flex">
            <Link to="/">
              <img src={logoImagePath} className="h-24"/>
            </Link>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" 
              sx={{ mx: 2 , my: "auto"}}
            >
              <Menu />
            </IconButton>
          </div>
          <div className="flex items-center mr-10">
            <div className="w-full flex">
              
              {isLoggedIn ? <button className="bg-gray-800 py-1 px-2 text-lg text-white" onClick={onClick}>Log Out</button> : <Link className="bg-gray-800 py-1 px-2 text-lg text-white" to="/login">Login</Link>}
              {/* <Link className="bg-gray-800 py-1 px-2 text-lg text-white" to="/login">Login</Link> */}
              <div className="h-full my-auto ml-2">
                <select>
                  <option value="kr">KR</option>
                  <option value="en">EN</option>
                </select>
              </div>
            </div>
          </div>
        </nav>

      </div>

      <Outlet/>
    </>
  )
}