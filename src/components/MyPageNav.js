import '../App.css'
import { Link, Outlet } from "react-router-dom";

export default function MyPageNav() {
  return (
    <>
      <div>
        <p>mypage nav</p>
      </div>

      <Outlet/>
    </>
  )
}