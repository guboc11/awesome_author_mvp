import '../App.css'

export default function WriterPage() {
  return(
    <div className="w-[1024px] mx-auto">

      <hr className="border-4 my-3 border-indigo-600"></hr>

      <div className="border-4 border-red-500 p-10 flex">
        <div className="border-4 border-yellow-500 w-3/5">
          <div className="border-4 border-green-500">
            <div className="border-4 border-blue-500 h-16"></div>
            <div className="border-4 border-blue-500 h-32"></div>
            <div className="border-4 border-blue-500 h-20"></div>
            <div className="border-4 border-blue-500 h-20"></div>
            <div className="border-4 border-blue-500 h-20"></div>
          </div>
          <div className="border-4 border-green-500">
            <div className="border-4 border-blue-500 h-20"></div>
            <div className="border-4 border-blue-500 h-96"></div>
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