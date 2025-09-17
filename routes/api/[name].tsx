import { define } from "../../../utils.ts";

// 1. API 部分：返回当前时间 JSON
export const handler = define.handlers({
  GET(ctx) {
    const name = ctx.params.name; // 可忽略，仅做示例
    const iso = new Date().toISOString();

    // 如果客户端明确要 JSON，就返回 JSON
    if (ctx.url.searchParams.has("json")) {
      return new Response(JSON.stringify({ now: iso }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // 否则把数据传给页面组件
    return ctx.render({ iso, name });
  },
});

// 2. 页面部分：渲染 HTML
export default define.page((_, ctx) => {
  const { iso, name } = ctx.data as { iso: string; name: string };
  return (
    <div class="px-4 py-8 mx-auto max-w-screen-md">
      <h1 class="text-3xl font-bold mb-2">Hi, {name}!</h1>
      <p class="text-gray-700">Server time: <code class="bg-gray-100 px-2 py-1 rounded">{iso}</code></p>
      <a href="/" class="text-blue-600 underline mt-4 inline-block">← Back</a>
    </div>
  );
});
