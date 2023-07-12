import * as Scrivito from "scrivito";

export const Rocket = Scrivito.provideDataClass("Rocket", {
  connection: {
    get: async (id) => {
      const response = await fetch(
        `https://api.spacexdata.com/v4/rockets/${id}`
      );
      return response.json();
    },
    index: async () => {
      const response = await fetch("https://api.spacexdata.com/v4/rockets");
      const json = await response.json();
      const idsOnly = json.map((data) => data.id);
      return { results: idsOnly };
      // const results = json.map((data) => ({ id: data.id, data }));

      // return { results };
    },
  },
});

function isValidDataId(id) {
  return (
    typeof id === "string" &&
    (!!id.match(/^\d+(-\d+)*$/) ||
      !!id.match(/^[a-f0-9]{8,}(-[a-f0-9]{8,})*$/i))
  );
}
