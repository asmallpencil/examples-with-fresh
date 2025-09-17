import { define } from "../../utils.ts";

export default define.page((ctx) => {
  const name = ctx.params.name;
  const title = `Hello, ${name}`;

  return (
    <div class="px-4 py-8 mx-auto max-w-screen-md">
      <h1 class="text-4xl font-bold capitalize">{title}</h1>
      <p class="mt-4 text-gray-600">
        This is a dynamic <b>page</b> route, not an API.
      </p>
      <a href="/" class="text-blue-600 underline">← Back home</a>
    </div>
  );
});
