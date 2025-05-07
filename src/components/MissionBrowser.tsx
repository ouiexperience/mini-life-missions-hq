import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from 'lucide-react';
import { useMission } from '../context/MissionContext';
import { getRandomMission } from '../data/missions';
import { useChild } from '../context/ChildContext';
import MissionCard from './MissionCard';
import { useToast } from '@/components/ui/use-toast';
const MissionBrowser: React.FC = () => {
  const {
    filteredMissions,
    setSearchTerm,
    searchTerm,
    setSelectedCategory,
    selectedCategory
  } = useMission();
  const {
    selectedChild
  } = useChild();
  const {
    toast
  } = useToast();
  const [showRandom, setShowRandom] = useState(false);
  const [randomMission, setRandomMission] = useState(getRandomMission());
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);
  };
  const handleRandomMission = () => {
    const mission = getRandomMission();
    setRandomMission(mission);
    setShowRandom(true);
    toast({
      description: "Random mission selected!"
    });

    // Scroll to the random mission section
    setTimeout(() => {
      document.getElementById('random-mission')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
  };
  return <div className="mb-8">
      <div className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search missions..." value={searchTerm} onChange={handleSearchChange} className="pl-10" />
        </div>
        
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-2 text-lime-500">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant={selectedCategory === null ? "default" : "outline"} size="sm" onClick={() => handleCategoryFilter(null)} className="bg-lime-500 hover:bg-lime-400">
              All
            </Button>
            <Button variant={selectedCategory === "Money Smart" ? "default" : "outline"} size="sm" className={selectedCategory === "Money Smart" ? "bg-mission-money text-white" : ""} onClick={() => handleCategoryFilter("Money Smart")}>
              Money Smart
            </Button>
            <Button variant={selectedCategory === "Healthy Habits" ? "default" : "outline"} size="sm" className={selectedCategory === "Healthy Habits" ? "bg-mission-health text-white" : ""} onClick={() => handleCategoryFilter("Healthy Habits")}>
              Healthy Habits
            </Button>
            <Button variant={selectedCategory === "Confidence & Connection" ? "default" : "outline"} size="sm" className={selectedCategory === "Confidence & Connection" ? "bg-mission-communication text-white" : ""} onClick={() => handleCategoryFilter("Confidence & Connection")}>
              Confidence & Connection
            </Button>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button variant="outline" onClick={handleRandomMission} className="text-inherit bg-lime-500 hover:bg-lime-400">
            <Plus className="mr-1 h-4 w-4" />
            Random Mission
          </Button>
        </div>
      </div>
      
      {showRandom && <div id="random-mission" className="mb-8 p-4 border-2 border-dashed border-secondary rounded-lg animate-bounce-soft">
          <h2 className="text-xl font-bold mb-4 text-center">Try This Mission!</h2>
          <MissionCard mission={randomMission} />
        </div>}

      {!selectedChild && <div className="bg-yellow-50 p-4 rounded-lg mb-4 text-center">
          <p className="text-yellow-700">Please add and select a child to track mission progress</p>
        </div>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMissions.length > 0 ? filteredMissions.map(mission => <MissionCard key={mission.id} mission={mission} />) : <div className="col-span-full text-center p-8 border rounded-lg">
            <p className="text-gray-500">No missions found matching your search criteria.</p>
          </div>}
      </div>
    </div>;
};
export default MissionBrowser;