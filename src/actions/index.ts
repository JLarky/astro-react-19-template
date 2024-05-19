import { defineAction, z } from "astro:actions";

export const server = {
  updateName: defineAction({
    input: z.object({ name: z.string() }),
    accept: "form",
    handler: async ({ name }) => {
      return new Promise<string | null>((resolve) => {
        setTimeout(() => {
          if (name === "John") {
            resolve("Name already taken");
          } else {
            resolve(null);
          }
        }, 1000);
      });
    },
  }),
};
