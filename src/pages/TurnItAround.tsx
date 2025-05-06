
import React from 'react';
import Header from '@/components/Header';
import ChildSelector from '@/components/ChildSelector';
import TurnAroundMissionBrowser from '@/components/TurnAroundMissionBrowser';
import TurnAroundPrintOptions from '@/components/TurnAroundPrintOptions';
import { ChildProvider } from '@/context/ChildContext';
import { TurnAroundProvider } from '@/context/TurnAroundContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TurnItAround: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-rounded">
      <ChildProvider>
        <TurnAroundProvider>
          <Header />
          
          <main className="flex-1 container max-w-5xl mx-auto px-4 py-6 md:px-6 md:py-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <Link to="/" className="inline-flex mb-4">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              
              <h1 className="text-3xl font-bold text-secondary mb-6">Turn It Around Moments</h1>
              
              <ChildSelector />
              
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-secondary">Categories</h2>
                <TurnAroundPrintOptions />
              </div>
              
              <TurnAroundMissionBrowser />
            </div>
          </main>
          
          <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
            <div className="container mx-auto">
              <p>Mini Life Missions - Parent Dashboard</p>
            </div>
          </footer>
        </TurnAroundProvider>
      </ChildProvider>
    </div>
  );
};

export default TurnItAround;
