'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Fermer la fenêtre après 5 secondes
    const timer = setTimeout(() => {
      window.close();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-blue-500 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-12 w-12 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Email vérifié avec succès !
        </h1>
        <p className="text-gray-600 mb-6">
          Vous pouvez maintenant retourner sur l'application Feedo AI et vous connecter.
        </p>
        <p className="text-sm text-gray-500">
          Cette fenêtre se fermera automatiquement dans quelques secondes...
        </p>
      </div>
    </div>
  );
}