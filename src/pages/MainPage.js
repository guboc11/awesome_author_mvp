import '../App.css';
import { Link } from "react-router-dom";
import { useAuth } from '../shared/auth';

export default function MainPage() {
  const {user, isLoggedIn} = useAuth()

  const logoImagePath = "/penment_logo.jpeg"

  return (
    <div className="w-[1024px] mx-auto">

      <nav id="logo-navigation" className="flex" >
        <div className="w-1/2 flex items-center justify-center">
          <img src={logoImagePath} className="h-24"/>
        </div>
        <div className="w-1/2">
          <div className="flex items-center h-full">
            <div className="w-full flex justify-around">
              <Link className="text-2xl" to="/">Home</Link>
              {isLoggedIn 
              ? user == "writer" ? <Link className="text-2xl" to="/mypage/writer">MyPage</Link> : user == "employer" ? <Link className="text-2xl" to="/mypage/employer">MyPage</Link> : <Link className="text-2xl" to="/login">MyPage</Link>
              : <Link className="text-2xl" to="/login">MyPage</Link> }
              {/* <Link className="text-2xl" to="/">MyPage</Link> */}
              <Link className="text-2xl" to="/mypage/writer">Writer</Link>
              <Link className="text-2xl" to="/mypage/employer">Employer</Link>
            </div>
          </div>
        </div>
      </nav>

      <section id="vision" className=" py-10 bg-gray-200">
        <div className="flex items-center justify-center">
          <p className="text-7xl font-bold">Grow Your Vision</p>
        </div>
        <div className="py-10 flex flex-col justify-center">
          <p className="text-xl text-center">작가들을 위한 새로운 창작의 공간, 한 눈에 보는 작품 포트폴리오</p>
          <p className="text-xl text-center">장르별로 원하는 스타일의 작가 및 고용주와 연결해드립니다.</p>
          <p className="text-xl text-center">작가로서 나의 개성을 기록으로 남겨보세요!</p>
        </div>
        <div className="text-white flex items-center justify-around">
          {isLoggedIn 
          ? <Link className="border-2 bg-indigo-600 h-36 w-64 flex items-center justify-center" to="/mypage/writer"><p className="text-2xl">작가로 시작하기</p></Link> 
          : <Link className="border-2 bg-indigo-600 h-36 w-64 flex items-center justify-center" to="/login"><p className="text-2xl">작가로 시작하기</p></Link> }
          {/* <Link className="border-2 bg-indigo-600 h-36 w-64 flex items-center justify-center" to="/mypage/writer">
            <p className="text-2xl">작가로 시작하기</p>
          </Link> */}
          {isLoggedIn 
          ? <Link className="border-2 bg-indigo-600 h-36 w-64 flex items-center justify-center" to="/mypage/employer"><p className="text-2xl">의뢰인으로 시작하기</p></Link> 
          : <Link className="border-2 bg-indigo-600 h-36 w-64 flex items-center justify-center" to="/login"><p className="text-2xl">의뢰인으로 시작하기</p></Link> }
          {/* <Link className="border-2 bg-indigo-600 h-36 w-64 flex items-center justify-center" to="/mypage/employer">
            <p className="text-2xl">의뢰인으로 시작하기</p>
          </Link> */}
        </div>
      </section>

      <section id="inform" className="font-semibold">
        <div className='h-60'>
          <p className="text-5xl ml-20 mt-10">Inform</p>
          <p className="text-xl ml-20 mt-10">여기에 내용을 입력해 주세요.</p>
        </div>
      </section>

      <hr className="border-2 my-3 mx-5 rounded border-gray-400"></hr>

      <section id="team" className="font-semibold">
        <div className='h-60'>
          <p className="text-5xl ml-20 mt-10">Team</p>
          <p className="text-xl ml-20 mt-10">여기에 내용을 입력해 주세요.</p>
        </div>
      </section>

      <section id="contact" className="h-80 bg-black text-white flex justify-center items-center">
        <div className="w-1/2 mx-10">
          <div className="py-5">
            <p>Email</p>
            <p className="text-3xl">penment@gmail.com</p>
          </div>
          <div className="py-5">
            <p>Tel</p>
            <p className="text-3xl">010-0000-0000</p>
          </div>
        </div>
        <div className="w-1/2 mx-10">
          <div className='h-32 flex flex-col justify-around'>
            <p>Follow Us</p>
            <p className="text-3xl">Instagram</p>
          </div>
        </div>
      </section>

    </div>
  )
}
