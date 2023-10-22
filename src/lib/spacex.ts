import { type Doc, type ApiResponse } from "../types/api.ts";

export const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 30,
      },
    }),
  });

  const { docs: launches } = (await res.json()) as ApiResponse;
  return launches;
};

export const getLaunchBy = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

  const launchById = (await res.json()) as Doc;
  return launchById;
};
