import { useLoaderData } from "react-router-dom";
import { getCallLog } from "../../services/apiAirCall";
import { extractDate, extractTime } from "../../utils/helpers";
import UpdateCall from "./UpdateCall";

function Call() {
  const callItem = useLoaderData();
  const {
    id,
    to,
    from,
    via,
    created_at: createdAt,
    call_type: callType,
    duration,
    direction,
    is_archived: isArchived,
  } = callItem;
  return (
    <div>
      <div>
        <h2>Call Status</h2>
      </div>

      <div>
        <p>to: {to}</p>
        <p>from : {from}</p>
        <p>via: {via}</p>
        <p>Date : {extractDate(createdAt)}</p>
        <p>Time: {extractTime(createdAt)}</p>
        <p>Duration: {duration}</p>
        <p>Call Type : {callType}</p>
        <p>direction: {direction}</p>
        <p>Archived : {isArchived}</p>
      </div>
      <div>{!isArchived && <UpdateCall />}</div>
    </div>
  );
}

export async function loader({ params }) {
  const call = await getCallLog(params.id);
  return call;
}

export default Call;
