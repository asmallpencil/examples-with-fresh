import { define } from "../../../utils.ts";

export const handler = define.handlers({
  GET() {
    return new Response(
      JSON.stringify({ message: "Usage: /api/hello/{name}" }),
      { headers: { "Content-Type": "application/json" } },
    );
  },
});

