
import { AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";

const NoPropertySelected = () => {
  return (
    <div className="min-h-screen bg-nordic-dark">
      <Navbar />
      <main className="container px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <AlertTriangle className="h-16 w-16 text-nordic-blue mb-4" />
          <h1 className="text-3xl font-bold text-white">Ingen eiendom valgt</h1>
          <p className="text-nordic-light max-w-md">
            Vennligst søk etter en eiendom for å se analysen.
          </p>
        </div>
      </main>
    </div>
  );
};

export default NoPropertySelected;
