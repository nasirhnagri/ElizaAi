import ElizaChat from "@/components/ElizaChat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Talk to Eliza</h1>
      <ElizaChat />
    </main>
  );
}
