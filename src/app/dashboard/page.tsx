'use client';

import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Welcome to your dashboard!</h2>
          <p className="text-gray-600">
            This is a protected page that can only be accessed by authenticated users.
            You can add your application-specific content here.
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
} 