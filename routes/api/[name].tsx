import { define } from "../../../utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    const iso = new Date().toISOString();
    return new Response(JSON.stringify({ now: iso }), {
      headers: { "Content-Type": "application/json" },
    });
  },
});

