import { define } from "../../utils.ts";

export const handler = define.handlers({
  GET() {
    return new Response(JSON.stringify({ now: new Date().toISOString() }), {
      headers: { "Content-Type": "application/json" },
    });
  },
});
