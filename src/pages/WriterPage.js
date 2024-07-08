import '../App.css'

export default function WriterPage() {
  return(
    <div className="w-[1024px] mx-auto">

      <hr className="border-4 my-3 border-indigo-600"></hr>

      <div className="border-4 border-red-500 p-10 flex">
        <div className="border-4 border-yellow-500 w-3/5">
          <div className="border-4 border-green-500">
            <div className="border-4 border-blue-500 flex justify-between">
              <div className="ml-5 flex gap-1">
                <p>아이콘</p>
                <p>개발</p>
                <p>아이콘</p>
                <p>2년</p>
              </div>
              <div>
                <p>3일전</p>
              </div>
            </div>
            <div className="border-4 border-blue-500 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img className="w-20 h-auto rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                <div>
                  <p className="text-4xl font-bold">Kenoz</p>
                  <p>대한민국</p>
                </div>
              </div>
              <div className="flex gap-3">
                <p className="text-2xl">공유</p>
                <p className="text-2xl">저장</p>
              </div>
            </div>
            <div className="border-4 border-blue-500 h-20">
              <p className="text-xl font-bold">CJ 엔터테인먼트 드라마 작가 3년차, 웹드라마 '너와나' 대본 작가. 네이버 웹소설 공모전 우수상. 경희대 문예창작학과 졸업</p>
            </div>
            <div className="border-4 border-blue-500 flex flex-wrap gap-2 ">
              <p className="p-1 bg-gray-100 rounded-full">#DataScience</p>
              <p className="p-1 bg-gray-100 rounded-full">#Flutter</p>
              <p className="p-1 bg-gray-100 rounded-full">#FastApi</p>
              <p className="p-1 bg-gray-100 rounded-full">#Python</p>
              <p className="p-1 bg-gray-100 rounded-full">#C/C++</p>
              <p className="p-1 bg-gray-100 rounded-full">#DeepLearning</p>
              <p className="p-1 bg-gray-100 rounded-full">#AI</p>
              <p className="p-1 bg-gray-100 rounded-full">#ComputerVision</p>
            </div>
            <div className="border-4 border-blue-500 flex py-3 items-center gap-3">
              <button className="p-5 bg-blue-500 text-white rounded-full flex gap-3">
                <p>매일 아이콘</p>
                <p>매일</p>
              </button>
              <button className="p-5 bg-blue-500 text-white rounded-full flex gap-3">
                <p>메세지 아이콘</p>
                <p>메세지 </p>
              </button>
            </div>
          </div>
          <div className="border-4 border-green-500">
            <div className="border-4 border-blue-500 py-10">
              <p className="text-3xl font-bold">경력</p>
            </div>
            <div className="border-4 border-blue-500">
              <div className="bottom-4 border-violet-500 flex gap-5">
                <div className='p-3'>
                  <div className="bg-blue-600 w-3 h-3 rounded-full"></div>
                  <div className="border-2 border-blue-500 w-0 h-full m-auto my-1"></div>
                </div>
                <div>
                  <div className="text-sm bg-blue-600 text-white py-1 px-2 rounded-full">2023.04.05-2023.09.07</div>
                  <div className="text-lg font-bold">SBS 방송국 | 대한민국</div>
                  <div className="text-lg font-bold text-gray-300">R&D | CTO</div>
                  <div>개발 총괄</div>
                </div>
              </div>
              <div className="bottom-4 border-violet-500 flex gap-5">
                <div className='p-3'>
                  <div className="bg-blue-600 w-3 h-3 rounded-full"></div>
                  <div className="border-2 border-blue-500 w-0 h-full m-auto my-1"></div>
                </div>
                <div>
                  <div className="text-sm bg-blue-600 text-white py-1 px-2 rounded-full">2023.11.08-2024.01.30</div>
                  <div className="text-lg font-bold">JTBC 드라마 '영혼' | 대한민국</div>
                  <div className="text-lg font-bold text-gray-300">개발 | 데이터사이언티스트</div>
                  <div>데이터 분석</div>
                </div>
              </div>
              <div className="bottom-4 border-violet-500 flex gap-5">
                <div className='p-3'>
                  <div className="bg-blue-600 w-3 h-3 rounded-full"></div>
                  {/* <div className="border-2 border-blue-500 w-0 h-full m-auto my-1"></div> */}
                </div>
                <div>
                  <div className="text-sm bg-blue-600 text-white py-1 px-2 rounded-full">2024.03.01-2024.07.01</div>
                  <div className="text-lg font-bold">CJ 엔터 | 대한민국</div>
                  <div className="text-lg font-bold text-gray-300">개발자 | 개발</div>
                  <div>개발 총괄</div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="border-4 border-yellow-500 w-2/5 h-fit">
          <div className="border-4 border-green-500">
            <div className="border-4 border-blue-500 h-32"></div>
            <div className="border-4 border-blue-500 h-20"></div>
            <div className="border-4 border-blue-500 h-20"></div>
            <div className="border-4 border-blue-500 h-20"></div>
            <div className="border-4 border-blue-500 h-20"></div>
          </div>
          <div className="border-4 border-green-500">
            <div className="border-4 border-blue-500 h-48"></div>
          </div>
        </div>
      </div>

      <div className="border-4 border-red-500 p-10">
        <div className="border-4 border-yellow-500 h-20">
        </div>
        <div className="border-4 border-yellow-500 h-96">
        </div>
      </div>
      
    </div>
  )
}