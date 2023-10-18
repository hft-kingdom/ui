export default async function Home() {
  const headers = new Headers();

  await Promise.resolve(); // TODO rm

  headers.append("location", "four-hundreds-forty-four");

  return new Response(null, { headers, status: 307 });
}
