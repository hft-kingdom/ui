import { defineRoute } from "$fresh/server.ts";
import { getCookies, setCookie } from "$std/http/cookie.ts";

export default defineRoute((req, ctx) => {
  const cookies = getCookies(req.headers);

  console.log(cookies);

  if (cookies.auth) {
    return <h1>Welcome!</h1>;
  }

  const headers = new Headers();

  headers.append("location", "guest");
  setCookie(headers, {
    name: "auth",
    value: "welcome",
  });

  return new Response(null, { headers, status: 307 });
});
