import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-64 text-center flex flex-col justify-center place-content-center items-center font-urbanist text-white">
      <h1 className="text-5xl font-bold p-2">404! Page Not Found!</h1>
      <p className="text-xl p-2">
        You are wandering where you are not supposed to be!
      </p>
      <p className="text-2xl p-2">
        Go back to{" "}
        <Link to="/" className="text-blue-400 underline">
          Home
        </Link>
      </p>
    </div>
  );
}
