import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-3xl text-center my-8 p-4">
      <span className="font-bold ">The Best Calling Service</span>
      <br />
      <Link to="/activity" className="text-blue-400 uppercase underline ">
        Lets navigate to Activities Tab
      </Link>
    </div>
  );
}

export default Home;
