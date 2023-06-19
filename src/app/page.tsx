import { ClientList } from "@/components";

export default async function Home() {
  return (
    <main className="w-full h-full overflow-x-hidden">
      <div className="wrapper h-full w-full">
        <ClientList />
      </div>
    </main>
  );
}
