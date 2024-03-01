import { toast } from "react-toastify";

export async function apiRequest(
  setLoading,
  endpoint,
  data,
  postName,
  reset,
  method
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      reset();
      if (method === "PATCH" || "DELETE") {
        toast.success(`Done ${postName} Created Successfully`);
      } else {
        toast.success(`New ${postName} Created Successfully`);
      }
    } else {
      setLoading(false);
      toast.error(`Error: ${response.statusText}`);
      console.error("Response Error:", response);
    }
  } catch (error) {
    setLoading(false);
    console.error("Error in apiRequest:", error);
  }
}
