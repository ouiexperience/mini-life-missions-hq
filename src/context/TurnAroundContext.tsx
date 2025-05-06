
import React, { createContext, useContext, useState, useEffect } from 'react';
import { TurnAroundMission, turnAroundMissions } from '../data/turnaround-missions';

interface CompletedTurnAroundMission {
  missionId: number;
  childId: string;
  completedAt: string;
}

interface TurnAroundContextType {
  missions: TurnAroundMission[];
  completedMissions: CompletedTurnAroundMission[];
  toggleMissionCompletion: (missionId: number, childId: string) => void;
  isMissionCompleted: (missionId: number, childId: string) => boolean;
  filteredMissions: TurnAroundMission[];
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string | null) => void;
  selectedCategory: string | null;
  searchTerm: string;
}

const TurnAroundContext = createContext<TurnAroundContextType | undefined>(undefined);

export const TurnAroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedMissions, setCompletedMissions] = useState<CompletedTurnAroundMission[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Load completed missions from localStorage on mount
  useEffect(() => {
    const savedMissions = localStorage.getItem('mlm-completed-turnaround-missions');
    if (savedMissions) {
      setCompletedMissions(JSON.parse(savedMissions));
    }
  }, []);

  // Save completed missions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('mlm-completed-turnaround-missions', JSON.stringify(completedMissions));
  }, [completedMissions]);

  const toggleMissionCompletion = (missionId: number, childId: string) => {
    setCompletedMissions(prev => {
      const existingEntry = prev.find(
        cm => cm.missionId === missionId && cm.childId === childId
      );

      if (existingEntry) {
        // Remove the entry if it exists (uncomplete the mission)
        return prev.filter(
          cm => !(cm.missionId === missionId && cm.childId === childId)
        );
      } else {
        // Add a new entry if it doesn't exist (complete the mission)
        return [
          ...prev,
          {
            missionId,
            childId,
            completedAt: new Date().toISOString()
          }
        ];
      }
    });
  };

  const isMissionCompleted = (missionId: number, childId: string) => {
    return completedMissions.some(
      cm => cm.missionId === missionId && cm.childId === childId
    );
  };

  // Filter missions based on search term and category
  const filteredMissions = turnAroundMissions.filter(mission => {
    const matchesSearch = 
      searchTerm === '' || 
      mission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mission.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === null || 
      mission.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <TurnAroundContext.Provider
      value={{
        missions: turnAroundMissions,
        completedMissions,
        toggleMissionCompletion,
        isMissionCompleted,
        filteredMissions,
        setSearchTerm,
        setSelectedCategory,
        selectedCategory,
        searchTerm
      }}
    >
      {children}
    </TurnAroundContext.Provider>
  );
};

export const useTurnAround = () => {
  const context = useContext(TurnAroundContext);
  if (context === undefined) {
    throw new Error('useTurnAround must be used within a TurnAroundProvider');
  }
  return context;
};
