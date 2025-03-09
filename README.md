# Next.js + Firebase Starter Template

A complete starter template for building web applications with Next.js and Firebase. This template includes authentication, database integration, and a responsive UI built with TailwindCSS.

## Features

- 🔥 **Firebase Integration**: Authentication and Firestore database
- 🔒 **Authentication**: Email/password and Google sign-in
- 📱 **Responsive Design**: Looks great on all devices
- 🚀 **Next.js App Router**: Modern routing with server and client components
- 🎨 **TailwindCSS**: Utility-first CSS framework
- 📝 **TypeScript**: Type-safe code
- 🔄 **Context API**: Global state management

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Firebase account

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/firebase-nextjs-app.git
   cd firebase-nextjs-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Set up Authentication (enable Email/Password and Google providers)
   - Create a Firestore database

4. Configure environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Firebase configuration values

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── app/             # App router pages
│   ├── components/      # React components
│   │   ├── auth/        # Authentication components
│   │   └── layout/      # Layout components
│   ├── context/         # React context providers
│   └── lib/             # Utility functions
│       └── firebase/    # Firebase configuration and utilities
├── .env.local.example   # Environment variables example
├── next.config.js       # Next.js configuration
└── tailwind.config.js   # TailwindCSS configuration
```

## Deployment

This template is ready to be deployed to Vercel with minimal configuration:

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Set up the environment variables in the Vercel dashboard
4. Deploy!

## Firebase Security Rules

Don't forget to set up proper security rules for your Firestore database. Here's a basic example:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Add more rules for your collections
  }
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
