import { useFetcher } from "react-router-dom";
import { updateCall } from "../../services/apiAirCall";

function UpdateCall({ callItem }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH">
      <button>Add to Archive</button>
    </fetcher.Form>
  );
}

export default UpdateCall;

export async function action({ request, params }) {
  const data = { is_archived: true };
  await updateCall(params.id, data);
  return null;
}
