
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Mission, missions } from '../data/missions';

interface CompletedMission {
  missionId: number;
  childId: string;
  completedAt: string;
}

interface MissionContextType {
  missions: Mission[];
  completedMissions: CompletedMission[];
  toggleMissionCompletion: (missionId: number, childId: string) => void;
  isMissionCompleted: (missionId: number, childId: string) => boolean;
  filteredMissions: Mission[];
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string | null) => void;
  selectedCategory: string | null;
  searchTerm: string;
}

const MissionContext = createContext<MissionContextType | undefined>(undefined);

export const MissionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedMissions, setCompletedMissions] = useState<CompletedMission[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Load completed missions from localStorage on mount
  useEffect(() => {
    const savedMissions = localStorage.getItem('mlm-completed-missions');
    if (savedMissions) {
      setCompletedMissions(JSON.parse(savedMissions));
    }
  }, []);

  // Save completed missions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('mlm-completed-missions', JSON.stringify(completedMissions));
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
  const filteredMissions = missions.filter(mission => {
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
    <MissionContext.Provider
      value={{
        missions,
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
    </MissionContext.Provider>
  );
};

export const useMission = () => {
  const context = useContext(MissionContext);
  if (context === undefined) {
    throw new Error('useMission must be used within a MissionProvider');
  }
  return context;
};
