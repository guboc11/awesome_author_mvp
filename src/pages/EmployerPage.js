import '../App.css'

export default function EmployerPage() {
  return(
    <div className="w-[1024px] mx-auto">
      <section id="partnerSection" class="py-20 bg-indigo-700">
        <p className="text-4xl mb-2 text-center font-bold">나와 맞는 파트너 찾기</p>
        <p className="text-1xl mb-2 text-center font-bold">당신에게 적합한 업무와 프로젝트를 찾아보세요</p>
        <div class="flex items-center h-16 mt-10 bg-white rounded-full shadow-lg p-2 max-w-3xl mx-auto">
          <div class="flex items-center justify-between flex-1 px-4"> 
            <svg class="w-4 h-4 mr-3 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <input className="text-xs w-44" type='text' placeholder='제목 혹은 키워드를 입력해보세요'/>
          </div>

          <div class="h-6 pl-5 border-l border-gray-300"></div>

            <div class="ml-1 flex items-center justify-between flex-1">
              <div class="flex items-center flex-grow mr-4">
                <svg class="flex-shrink-0 stroke-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <p className="text-xs text-gray-800 truncate pl-3 flex-grow ">전체</p>
              </div>
            </div>

            <button>
              <svg class="fill-current h-4 w-4 flex-shrink-0 ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </button>

            <div class="h-6 border-l border-gray-300 mx-3"></div>

            <div class="ml-3 flex items-center justify-between flex-1">
              <div class="flex items-center flex-grow mr-4">
                <svg class="flex-shrink-0 stroke-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <p className="text-xs text-gray-800 truncate pl-3 flex-grow ">전체</p>
              </div>
            </div>

          <div class="flex items-center justify-between flex-1 w-full">
            <button>
              <svg class="flex-shrink-0 fill-current h-4 w-4 ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </button>
            
            <div class="w-20 h-10 px-6 bg-indigo-700 ml-8 mr-6 rounded-full focus:shadow-outline hover:bg-indigo-800"></div>
            
          </div>
        </div>
      </section>
      <section id="middleSection" class="flex">
        <div id="middleLeftSection" class="h-100 text-black flex-[2] p-4">
          <div id="leftContents" class="bg-red">
            <button class="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">팀 공고 등록하기</button>
          </div>
          <div class='border-2 mt-5 rounded-lg'>
            <div>
              <p className='text-xl mt-3 ml-2 font-bold'>모집 분류</p>
              <hr class="border-1 mt-2 rounded-full mx-auto max-w-[90%]"></hr>
              <div className='ml-4 mt-3 mb-3'>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4"/>
                  <span className='text-sm font-bold'>전체</span>
                </label>
              </div>
            </div>
            <div>
              <p className='text-xl mb-1 ml-2 font-bold'>프로젝트</p>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>사이드잡</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>단기 프로젝트</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>공모전</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>해커톤</span>
                </label>
              </div>
            </div>

            <div>
              <p className='text-xl mb-1 ml-2 mt-2 font-bold'>전문 분야</p>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>드라마/영화</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>시사/교육</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>예능</span>
                </label>
              </div>
            </div>
            <div>
              <p className='text-xl mb-1 ml-2 mt-2 font-bold'>소셜 미디어</p>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>드라마/영화</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>시사/교육</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>예능</span>
                </label>
              </div>
            </div>
            <div>
              <p className='text-xl mb-1 ml-2 mt-2 font-bold'>프리랜서</p>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>외주</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>협업</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>파트타임</span>
                </label>
              </div>
            </div>
            <div>
              <p className='text-xl mt-3 ml-2 font-bold'>근무형태</p>
              <hr class="border-1 mt-2 rounded-full mx-auto max-w-[90%]"></hr>

            </div>
            <div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3 mt-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>전체</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3 ">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>병행</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>오피스</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>원격</span>
                </label>
              </div>
            </div>
            <div>
              <p className='text-xl mt-3 ml-2 font-bold'>경력</p>
              <hr class="border-1 mt-2 rounded-full mx-auto max-w-[90%]"></hr>

            </div>
            <div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3 mt-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>전체</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3 ">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>경력무관</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>신입</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>1~3년</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>4~9년</span>
                </label>
              </div>
              <div className='p-1'>
                <label className="flex items-center space-x-2 ml-3">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600"/>
                  <span className='text-sm'>10년 이상</span>
                </label>
                <hr class="border-1 mt-4 mb-4 rounded-full mx-auto max-w-[90%]"></hr>
                <button class="w-full h-10 px-6 text-white transition-colors mb-2 duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-800">필터 적용</button>
              </div>
            </div>
          </div>
          
        </div>
        <div id="middleRightSection" class="flex flex-col bg-gray text-white flex-[4] p-4">
          <div class="h-20 mb-3 bg-white-700 border-2 border-indigo-700 rounded-lg">
            <p className='text-white text-ms'></p>
          </div>
  
          <div class="flex-grow overflow-auto bg-white">
          <div class="h-10 mb-1 bg-white flex  justify-between items-center w-full">
            <p className='ml-3 text-black text-xs'>
              <span className='font-bold'>5706</span>개의 팀이 검색 되었습니다.</p>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-white focus:outline-none font-small text-sm  text-center inline-flex items-center mr-5" type="button"><span className='font-bold'>최신순</span>
              <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
          </div>
          <div class="bg-white border-gray-200 border-2 rounded-lg">
            <div class="flex items-center p-4">
              <img src="/square.png" alt="iGaming Solution" class="w-20 h-20 rounded-xl mr-4"/>
              <div>
                <h2 class="text-lg font-semibold text-gray-800 font-bold">iGaming Solution</h2>
                <p class="text-xs text-gray-400">iGaming</p>
                <p class="text-xs text-gray-400">아이디어 구상단계</p>
              </div>
            </div>
            <hr class="border-1 mt-2 rounded-full mx-auto max-w-[90%]"></hr>
            <div class="flex justify-between items-center mt-5">
              <div class="space-x-2 ml-3">
                <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">컴퍼니빌딩</span>
                <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">임원</span>
              </div>
              <span class="text-gray-500 text-sm mr-3">16시간 전</span>
            </div>
            <p className='text-xl text-black mt-5 ml-3 font-bold'>8월 웹드라마 '너와나' 대본작가를 구합니다!</p>
            <div class="flex items-center mt-5 ml-3">
              <svg class="w-5 h-5 text-gray-500 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p class='text-ms text-black'>
              <span class="font-semibold">4~9년</span> | <span class='text-sm text-gray-600 ml-1'>드라마 작가/대본 작가</span>
              </p>
            </div>
            <p class='text-sm text-gray-600 mt-2 ml-3'>웹드라마, 드라마, 대본작가, 극본, 대본, 글 작가, 촬영, 편집 구성, 드라마 작가</p>

            <div class="flex justify-between items-center mt-5">
              <div class="space-x-2 ml-3">
                <span class="text-yellow-400 text-ms mr-3 font-bold">모집시 마감</span>
              </div>
              <svg class="w-6 h-5 text-gray-300 mr-2 mb-5 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </div>
          </div>
          
          <div class="bg-white border-gray-200 border-2 rounded-lg mt-7">
            <div class="flex items-center p-4">
              <img src="/square.png" alt="JTBC" class="w-20 h-20 rounded-xl mr-4"/>
              <div>
                <h2 class="text-lg font-semibold text-gray-800 font-bold">JTBC</h2>
                <p class="text-xs text-gray-400">플랫폼</p>
                <p class="text-xs text-gray-400">초기 개발단계</p>
              </div>
            </div>
            <hr class="border-1 mt-2 rounded-full mx-auto max-w-[90%]"></hr>
            <div class="flex justify-between items-center mt-5">
              <div class="space-x-2 ml-3">
                <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">기업채용</span>
                <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">직원</span>
              </div>
              <span class="text-gray-500 text-sm mr-3">14시간 전</span>
            </div>
            <p className='text-xl text-black mt-5 ml-3 font-bold'>시사/교양 JTBC '유영' 프로그램에 함께 하실 작가님을 구합니다</p>
            <div class="flex items-center mt-5 ml-3">
              <svg class="w-5 h-5 text-gray-500 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p class='text-ms text-black'>
              <span class="font-semibold">경력무관</span> | <span class='text-sm text-gray-600 ml-1'>방송작가</span>
              </p>
            </div>
            <p class='text-sm text-gray-600 mt-2 ml-3'>시사, 교양, 방송작가, 대본작가, 시사 프로그램, 글 작가, 프로그램 구성, 편집</p>

            <div class="flex justify-between items-center mt-5">
              <div class="space-x-2 ml-3">
                <span class="text-yellow-400 text-ms mr-3 font-bold">모집시 마감</span>
              </div>
              <svg class="w-6 h-5 text-gray-300 mr-2 mb-5 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </div>
          </div>

          <div class="bg-white border-gray-200 border-2 rounded-lg mt-7">
            <div class="flex items-center p-4">
              <img src="/square.png" alt="for parents" class="w-20 h-20 rounded-xl mr-4"/>
              <div>
                <h2 class="text-lg font-semibold text-gray-800">포페런츠(for parents)</h2>
                <p class="text-xs text-gray-400">시니어 여행</p>
                <p class="text-xs text-gray-400">제품 서비스 확장 단계</p>
              </div>
            </div>
            <hr class="border-1 mt-2 rounded-full mx-auto max-w-[90%]"></hr>
            <div class="flex justify-between items-center mt-5">
              <div class="space-x-2 ml-3">
                <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">기업채용</span>
                <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">직원</span>
              </div>
              <span class="text-gray-500 text-sm mr-3">2일 전</span>
            </div>
            <p className='text-xl text-black mt-5 ml-3 font-bold'>[방송작가 구인] 여행 상품, 콘텐츠, 웹</p>
            <div class="flex items-center mt-5 ml-3">
              <svg class="w-5 h-5 text-gray-500 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p class='text-ms text-black'>
              <span class="font-semibold">경력무관</span> | <span class='text-sm text-gray-600 ml-1'>방송작가</span>
              </p>
            </div>
            <p class='text-sm text-gray-600 mt-2 ml-3'>방송작가, 대본작가, 방송 및 예능, 편집, 팀프로젝트, 여행 상품 프로그램</p>

            <div class="flex justify-between items-center mt-5">
              <div class="space-x-2 ml-3">
                <span class="text-yellow-400 text-ms mr-3 font-bold">모집시 마감</span>
              </div>
              <svg class="w-6 h-5 text-gray-300 mr-2 mb-5 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </div>
          </div>

          </div>
    </div>
    </section>
    </div>

  )
}