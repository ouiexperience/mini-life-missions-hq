
import React from 'react';
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-rounded">
      <Header />
      
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-6 md:px-6 md:py-8">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
          <WelcomeSection />
        </div>
      </main>
      
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        <div className="container mx-auto">
          <p>Mini Life Missions - Parent Dashboard</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
