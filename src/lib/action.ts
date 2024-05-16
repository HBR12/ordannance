"use server";

export async function fetchData(data: any): Promise<any> {
  return fetch("https://apirequests.pythonanywhere.com/schedule", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
      throw error;
    });
}
