import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
const WelcomeSection: React.FC = () => {
  return <section className="text-center py-8 px-4 mb-8 fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-orange-400">Welcome to Mini Life Missions!</h1>
      <p className="text-lg mb-8 text-foreground/80">Choose how you want to teach today:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="p-6 hover:shadow-md transition-shadow border-2 border-primary/20 hover:border-primary/40 bg-inherit">
          <Link to="/pick-and-learn" className="block h-full">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3 text-cyan-600">Pick &amp; Learn</h3>
              <p className="text-foreground/70 mb-4 flex-grow">Quick, fun missions to build life skills in minutes.</p>
              <Button variant="default" className="w-full text-inherit bg-cyan-600 hover:bg-cyan-500">
                Explore Missions
              </Button>
            </div>
          </Link>
        </Card>
        
        <Card className="p-6 hover:shadow-md transition-shadow border-2 border-secondary/20 hover:border-secondary/40 bg-inherit">
          <Link to="/turn-it-around" className="block h-full">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3 text-emerald-600">Turn It Around Moments</h3>
              <p className="text-foreground/70 mb-4 flex-grow">Got a real-life challenge? Let's turn it into a learning win.</p>
              <Button variant="secondary" className="w-full bg-emerald-600 hover:bg-emerald-500">
                Find Solutions
              </Button>
            </div>
          </Link>
        </Card>
      </div>
    </section>;
};
export default WelcomeSection;