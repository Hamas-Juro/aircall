import { Link, useLoaderData } from "react-router-dom";
import { getActivity } from "../../services/apiAirCall";
import ActivityItem from "./ActivityItem";
import UpdateActivity from "./UpdateActivity";

function Activity() {
  const activity = useLoaderData();

  return (
    <div>
      <div className="flex items-center justify-center text-3xl font-bold border-2 px-4 py-3 bg-blue-300 text-blue-800">
        <Link to="/archived">
          <UpdateActivity />
        </Link>
      </div>
      <ul>
        {activity.map((callItem) => (
          <li key={callItem.id}>
            <Link to={`/activity/${callItem.id}`}>
              <ActivityItem callItem={callItem} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const activity = await getActivity();
  return activity;
}

export default Activity;
