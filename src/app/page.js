import CardTitle from "@/components/CardTitle";
import FormCheil from "@/components/FormCheil";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-6 pt-6 sm:pt-24 sm:p-24">
        <CardTitle />
        <div className="w-full p-4 bg-white border border-gray-200 rounded-b-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <FormCheil />
        </div>

      </main>
    </>
  );
}
