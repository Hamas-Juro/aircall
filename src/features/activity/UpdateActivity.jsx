import { useFetcher } from "react-router-dom";
import { updateAllCalls } from "../../services/apiAirCall";

function UpdateActivity({ callItems }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <button
        onClick={() => fetcher.submit(null, { action: "updateAllCalls" })}
      >
        Update All Calls
      </button>
    </fetcher.Form>
  );
}

export default UpdateActivity;

export async function action({ request, params }) {
  if (request.action === "updateAllCalls") {
    const data = { is_archived: true };
    await updateAllCalls(data);
    return null;
  }
}
