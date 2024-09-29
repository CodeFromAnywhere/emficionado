import index from "./index.html";
import app from "./app.html";

export default {
  fetch: (request: Request) => {
    const url = new URL(request.url);
    return new Response(url.pathname === "/app.html" ? app : index, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
