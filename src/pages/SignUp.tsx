import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center montserrat">
      <div className="w-[400px] h-[300px] bg-[#333333] rounded-lg p-5">
        <h1 className="text-center font-bold text-3xl text-white">SignUp</h1>
        <input
          type="text"
          placeholder="Username"
          className="h-12 w-full mt-5 p-3 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-12 w-full mt-5 p-3 rounded-md"
        />
        <button className="h-12 w-full mt-5 bg-[#1e1d1d] transition-all ease-in-out duration-300 hover:bg-[#000000] text-white rounded-md">
          SignUp
        </button>
        <Link to="/login">
          <h1 className="text-sm font-light text-white my-2 text-center cursor-pointer">
            Already have an account? Login!
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
