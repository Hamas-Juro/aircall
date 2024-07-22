const API_URL = "https://aircall-backend.onrender.com";

export async function getActivity() {
  const res = await fetch(`${API_URL}/activities`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed Getting Activity Data");

  const data = await res.json();
  return data;
}
export async function getCallLog(id) {
  const res = await fetch(`${API_URL}/activities/${id}`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed Getting Call Data");

  const data = await res.json();
  return data;
}
export async function updateCall(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/activities/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
export async function updateAllCalls(updateObj) {
  try {
    const res = await fetch(`${API_URL}/activities`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating all calls");
  }
}
