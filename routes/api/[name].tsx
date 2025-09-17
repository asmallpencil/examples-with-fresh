import { define } from "../../../utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    const max = Number(ctx.params.max);
    if (!Number.isInteger(max) || max <= 0) {
      return new Response(JSON.stringify({ error: "max must be a positive integer" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    const n = Math.floor(Math.random() * max);
    return new Response(JSON.stringify({ max, random: n }), {
      headers: { "Content-Type": "application/json" },
    });
  },
});
