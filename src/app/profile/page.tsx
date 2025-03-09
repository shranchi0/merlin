'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function ProfilePage() {
  const { currentUser } = useAuth();
  
  return (
    <ProtectedRoute>
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">User Profile</h1>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Account Information</h2>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-lg">{currentUser?.email}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500">User ID</p>
                <p className="text-lg break-all">{currentUser?.uid}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500">Account Created</p>
                <p className="text-lg">
                  {currentUser?.metadata.creationTime 
                    ? new Date(currentUser.metadata.creationTime).toLocaleDateString() 
                    : 'N/A'}
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-semibold">Account Settings</h2>
              <div className="mb-4">
                <button
                  className="px-4 py-2 mr-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 