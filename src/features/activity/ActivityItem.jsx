import { extractDate, extractTime } from "../../utils/helpers";

function ActivityItem({ callItem }) {
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
    <li className="flex  items-center justify-between border-2 rounded-xl py-2 hover:bg-blue-200 hover:border-blue-300 hover:text-blue-400">
      <br />
      <div className="flex-col text-center divide-y-2 divide-gray-300">
        <div>{extractDate(createdAt)}</div>
        <div className="flex gap-4 ">
          <p>To: {to}</p>
          <p>From: {from}</p>
          <p>Via: {via}</p>
        </div>
      </div>
      <p> {extractTime(createdAt)}</p>
    </li>
  );
}

export default ActivityItem;
