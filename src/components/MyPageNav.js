import '../App.css'
import { Link, Outlet } from "react-router-dom";
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';


export default function MyPageNav() {
  const logoImagePath = "data:image/png;base64,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"
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
              <Link className="bg-gray-800 py-1 px-2 text-lg text-white" to="/login">Login</Link>
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