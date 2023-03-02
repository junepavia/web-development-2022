import { Link, Outlet } from "react-router-dom";

export const Navigation = () => {
  const studentID = window.location.href.split("/")[4];
  return (
    <>
      <nav className="py-3">
        <div className="flex justify-center">
          <div className="py-3 mx-3 ">
            <Link
              className="px-5 py-3 bg-purple-800 text-white font-medium text-sm
            leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg 
            focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
            active:shadow-lg transition duration-150 ease-in-out "
              to="/"
            >
              List Of Student
            </Link>
          </div>
          <div className="py-3">
            <Link
              className="px-5 py-3 bg-blue-800 text-white font-medium text-sm
            leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg 
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
            active:shadow-lg transition duration-150 ease-in-out  "
              to="/addstudent"
            >
              Add Student
            </Link>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </nav>
      <Outlet />
    </>
  );
};
