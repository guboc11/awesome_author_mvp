import '../App.css'
import CodeIcon from '@mui/icons-material/Code';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { grey } from '@mui/material/colors';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function WriterPage() {
  return(
    <div className="w-[1024px] mx-auto">

      <hr className="border-4 my-3 border-indigo-600"></hr>

      <div className="p-10 flex">

        <div className="w-3/5 pr-10">
          <div className="">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <CodeIcon sx={{backgroundColor: grey[200], borderRadius: 2, fontSize: 30, my: "auto", p: "4px"}}/>
                <p className="my-auto">개발</p>
                <AccessTimeIcon sx={{backgroundColor: grey[200], borderRadius: 2, fontSize: 30, my: "auto", p: "4px"}}/>
                <p className="my-auto">2년</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">3일전</p>
              </div>
            </div>
            <div className="my-10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img className="w-24 h-auto rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                <div>
                  <p className="text-4xl font-bold">Kenoz</p>
                  <div className="flex">
                    <LocationOnIcon />
                    <p>대한민국</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button>
                  <ShareIcon sx={{border: 1, borderRadius: 10, fontSize: 40, p: "10px"}}/>
                </button>
                <button>
                  <BookmarkIcon sx={{border: 1, borderRadius: 10, fontSize: 40, p: "10px"}}/>
                </button>
              </div>
            </div>
            <div className="h-20">
              <p className="text-xl font-bold">CJ 엔터테인먼트 드라마 작가 3년차, 웹드라마 '너와나' 대본 작가. 네이버 웹소설 공모전 우수상. 경희대 문예창작학과 졸업</p>
            </div>
            <div className="flex flex-wrap gap-2 ">
              <p className="py-1 px-3 bg-gray-100 rounded-full">#scenarist</p>
              <p className="py-1 px-3 bg-gray-100 rounded-full">#scriptwriter</p>
              <p className="py-1 px-3 bg-gray-100 rounded-full">#CJ</p>
              <p className="py-1 px-3 bg-gray-100 rounded-full">#creative</p>
              <p className="py-1 px-3 bg-gray-100 rounded-full">#writing</p>
              <p className="py-1 px-3 bg-gray-100 rounded-full">#KHU</p>
              <p className="py-1 px-3 bg-gray-100 rounded-full">#teamwork</p>
              <p className="py-1 px-3 bg-gray-100 rounded-full">#creativity</p>
              <p className="py-1 px-3 bg-gray-100 rounded-full">#responsibility</p>
            </div>
            <div className="flex my-5 items-center gap-3">
              <button className="py-2 px-3 bg-blue-500 text-white rounded-full flex gap-3">
                <EmailOutlinedIcon />
                <p>매일</p>
              </button>
              <button className="py-2 px-3 bg-blue-500 text-white rounded-full flex gap-3">
                <ChatBubbleOutlineIcon />
                <p>메세지 </p>
              </button>
            </div>
          </div>
          <div className="">
            <div className="py-10 -mb-2">
              <p className="text-3xl font-bold">경력</p>
            </div>
            <div className="">
              <div className="flex gap-5">
                <div className='px-3 py-2'>
                  <div className="bg-blue-600 w-3 h-3 rounded-full"></div>
                  <div className="border-2 border-blue-500 w-0 h-full m-auto my-1"></div>
                </div>
                <div className="pb-5">
                  <div className="text-sm bg-blue-600 text-white py-1 px-3 rounded-full">2023.04.05-2023.09.07</div>
                  <div className="text-lg font-bold">SBS 방송국 | 대한민국</div>
                  <div className="font-bold text-gray-300">방송작가 | 연출</div>
                  <div className="font-bold">시사/교양 프로그램 ‘유영’ 연출 대본 작가</div>
                </div>
              </div>
              <div className="flex gap-5 my-1">
                <div className='px-3 py-2'>
                  <div className="bg-blue-600 w-3 h-3 rounded-full"></div>
                  <div className="border-2 border-blue-500 w-0 h-full m-auto my-1"></div>
                </div>
                <div className="pb-5">
                  <div className="text-sm bg-blue-600 text-white py-1 px-3 rounded-full">2023.11.08-2024.01.30</div>
                  <div className="text-lg font-bold">JTBC 드라마 '영혼' | 대한민국</div>
                  <div className="font-bold text-gray-300">방송작가 | 대본 | 드라마</div>
                  <div className="font-bold">JTBC 드라마 ‘영혼’ 극본</div>
                </div>
              </div>
              <div className="flex gap-5 my-1">
                <div className='px-3 py-2'>
                  <div className="bg-blue-600 w-3 h-3 rounded-full"></div>
                </div>
                <div className="pb-5">
                  <div className="text-sm bg-blue-600 text-white py-1 px-3 rounded-full">2024.03.01-2024.07.01</div>
                  <div className="text-lg font-bold">CJ 엔터 | 대한민국</div>
                  <div className="font-bold text-gray-300">방송작가 | 편집</div>
                  <div className="font-bold">CJ 엔터테인먼트 미디어팀 메인작가</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 h-fit bg-gray-100 rounded-xl">
          <div className="">
            <div className="">
              <div className="flex items-center gap-3 p-5">
                <img className="w-20 h-auto" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                <div>
                  <p className="text-xl font-bold">Kenoz</p>
                  <p>프로필 보기</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-400 font-bold">연락처</p>
              <p className="font-bold">개인정보 비공개</p>
            </div>
            <div className="p-5">
              <p className="text-gray-400 font-bold">메일</p>
              <p className="font-bold">nicksohn@naver.com</p>
            </div>
            <div className="p-5">
              <p className="text-gray-400 font-bold">한 줄 소개</p>
            </div>
            <div className="p-5">
              <p className="text-gray-400 font-bold">구직 상태</p>
              <p className="font-bold">무직</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="h-32 flex gap-5">
                <div className='p-3 h-full'>
                  <div className="bg-gray-600 w-3 h-3"></div>
                  <div className="border-2 border-gray-500 border-dashed w-0 h-4/6 m-auto my-1"></div>
                  <div className="bg-gray-600 w-3 h-3"></div>
                </div>
                <div className="flex flex-col justify-between py-2">
                  <div className="text-sm bg-blue-600 text-white py-1 px-2 rounded-full">기본 정보</div>
                  <div className="text-sm bg-blue-600 text-white py-1 px-2 rounded-full">경력</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="">
            <div className="py-10">
              <div className="flex">
                <p className="text-3xl font-bold">포트폴리오</p>
                <EditOutlinedIcon sx={{my: "auto", fontSize: 30}}/>
              </div>
              <hr className="border-2 my-3"></hr>
            </div>
        </div>
        <div className="">
          <div className="border-4 border-black h-96"></div>
        </div>
      </div>
      
    </div>
  )
}