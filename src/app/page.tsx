export default function Home() {
  return (
    <main>
      <pre>{JSON.stringify(process.env, null, 2)}</pre>
    </main>
  );
}
