export async function getBlogs() {
  const url = process.env.STRAPI_URL!;
  const token = process.env.STRAPI_TOKEN;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Network response was not ok");
    }

    const jsonRes = await res.json();
    const entries = jsonRes.data;
    console.log("Data retrieved:", entries);

    return jsonRes.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
