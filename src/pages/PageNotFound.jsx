import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Elements/Button";

const PageNotFound = () => {

    useEffect(() => {
        document.title = "Page Not Found"; // Set the desired title
    }, []);

  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        className="absolute h-full w-full object-cover"
      />
    <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto my-36 px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight">You are all alone here😱</h1>
          <p className="font-extrabold text-8xl text-center my-10 text-white animate-bounce">404 <span className="text-xl block text-center">Not Found😐</span></p>
          <Button classname='rounded-full bg-white px-5 py-2 font-semibold block mx-auto'><Link to='/dashboard'>Back To Home Page</Link></Button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;