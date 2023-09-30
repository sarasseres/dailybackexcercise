async function getData() {
  const res = await fetch('http://localhost:3000/api/v1/auth/headers', {
    headers: {
      Authorization: `Bearer sfsfsffshshshs`,
    },
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getData();
  // console.log(data);
  return <div className="">hey</div>;
}
