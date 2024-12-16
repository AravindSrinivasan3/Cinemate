import PageNotFoundImage from "../assets/pagenotfound.png" 
import { Link } from "react-router-dom"
import Button from "../components/Button"
import { useEffect } from "react"
const PageNotFound = () => { 
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  })
return (
   <main> 
    <section className="flex flex-col justify-center px-2"> 
      <div className="flex flex-col items-center my-4"> 
        <p className="text-7x1 text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p> 
        <div className="max-w-lg">
          <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found" />
          </div>
          </div>
          <div className="flex justify-center my-4">
            <Link to="/">
            <Button>Back to Cinemate</Button>
            {/* <button className="w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium"></button> */}
            </Link>
            </div>
            </section>
            </main>
)
}

export default PageNotFound