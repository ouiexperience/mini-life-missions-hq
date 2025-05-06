
import React from 'react';
import Header from '@/components/Header';
import ChildSelector from '@/components/ChildSelector';
import MissionBrowser from '@/components/MissionBrowser';
import PrintOptions from '@/components/PrintOptions';
import { ChildProvider } from '@/context/ChildContext';
import { MissionProvider } from '@/context/MissionContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PickAndLearn: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-rounded">
      <ChildProvider>
        <MissionProvider>
          <Header />
          
          <main className="flex-1 container max-w-5xl mx-auto px-4 py-6 md:px-6 md:py-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Link to="/">
                  <Button variant="ghost" size="sm" className="mb-4">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <h2 className="text-2xl font-bold text-primary">Pick &amp; Learn Missions</h2>
                <p className="text-muted-foreground">Choose a mission to complete with your child</p>
              </div>
              
              <ChildSelector />
              
              <div className="flex justify-between items-center mb-4 mt-6">
                <h3 className="text-xl font-semibold">Available Missions</h3>
                <PrintOptions />
              </div>
              
              <MissionBrowser />
            </div>
          </main>
          
          <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
            <div className="container mx-auto">
              <p>Mini Life Missions - Parent Dashboard</p>
            </div>
          </footer>
        </MissionProvider>
      </ChildProvider>
    </div>
  );
};

export default PickAndLearn;
