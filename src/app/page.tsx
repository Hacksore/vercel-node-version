import { execSync } from "child_process";

export default function Home() {
  const nodeVersion = execSync("node --version").toString().trim();
  return (
    <main>
      <pre>{JSON.stringify({ nodeVersion, env: process.env }, null, 2)}</pre>
    </main>
  );
}
