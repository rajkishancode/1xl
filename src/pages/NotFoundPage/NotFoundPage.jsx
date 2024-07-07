import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">Page not found.</p>
        <Link
          to="/"
          className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
