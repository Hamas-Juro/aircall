import { Link, useLoaderData } from "react-router-dom";
import { getActivity } from "../../services/apiAirCall";
import Call from "../call/Call";
import UpdateArchiveCalls from "./UpdateArchiveCalls";

function Archived() {
  const activity = useLoaderData();

  const archivedCalls = activity.filter((call) => call.is_archived === true);
  console.log(archivedCalls);

  return (
    <div>
      <h1>Archived Calls</h1>
      <div>
        {archivedCalls.map((call) => (
          <Call key={call.id} callItem={call} />
        ))}
      </div>
      <button>Add to Archive</button>
      <Link to="/activity">
        <UpdateArchiveCalls />
      </Link>
    </div>
  );
}
export async function loader() {
  const activity = await getActivity();
  return activity;
}

export default Archived;
