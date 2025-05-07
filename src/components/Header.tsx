import React from 'react';
import { Check } from 'lucide-react';
const Header: React.FC = () => {
  return <header className="py-4 px-4 md:px-6 shadow-md bg-green-600">
      <div className="container max-w-5xl mx-auto flex items-center justify-center md:justify-start">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full p-2">
            <Check className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            Mini Life Missions
          </h1>
        </div>
      </div>
    </header>;
};
export default Header;