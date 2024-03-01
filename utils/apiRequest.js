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

    // console.log(response);

    if (response.ok) {
      setLoading(false);
      reset();
      if (method === "PUT") {
        toast.success(`Update ${postName} Created Successfully`);
      } else {
        toast.success(`New ${postName} Created Successfully`);
      }
    } else {
      setLoading(false);
      toast.error(
        `It seems you have Link network error, please try again Data`
      );
      console.log(error);
    }
  } catch (error) {
    setLoading(false);
    console.error("Error in makePostRequest:", error);
  }
}
