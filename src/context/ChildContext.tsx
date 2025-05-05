
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Child {
  id: string;
  name: string;
}

interface ChildContextType {
  children: Child[];
  addChild: (name: string) => void;
  removeChild: (id: string) => void;
  selectedChild: Child | null;
  setSelectedChild: (child: Child | null) => void;
}

const ChildContext = createContext<ChildContextType | undefined>(undefined);

export const ChildProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [childList, setChildList] = useState<Child[]>([]);
  const [selectedChild, setSelectedChild] = useState<Child | null>(null);

  // Load children from localStorage on mount
  useEffect(() => {
    const savedChildren = localStorage.getItem('mlm-children');
    if (savedChildren) {
      const parsedChildren = JSON.parse(savedChildren);
      setChildList(parsedChildren);
      
      // Select the first child if there's no selection yet
      if (parsedChildren.length > 0 && !selectedChild) {
        setSelectedChild(parsedChildren[0]);
      }
    }
  }, []);

  // Save children to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem('mlm-children', JSON.stringify(childList));
  }, [childList]);

  const addChild = (name: string) => {
    if (!name.trim()) return;
    
    const newChild = {
      id: Date.now().toString(),
      name: name.trim()
    };
    
    setChildList(prev => [...prev, newChild]);
    
    // If this is the first child, select it automatically
    if (childList.length === 0) {
      setSelectedChild(newChild);
    }
  };

  const removeChild = (id: string) => {
    setChildList(prev => prev.filter(child => child.id !== id));
    
    // If the removed child was selected, select the first remaining child or null
    if (selectedChild && selectedChild.id === id) {
      const remaining = childList.filter(child => child.id !== id);
      setSelectedChild(remaining.length > 0 ? remaining[0] : null);
    }
  };

  return (
    <ChildContext.Provider
      value={{
        children: childList,
        addChild,
        removeChild,
        selectedChild,
        setSelectedChild
      }}
    >
      {children}
    </ChildContext.Provider>
  );
};

export const useChild = () => {
  const context = useContext(ChildContext);
  if (context === undefined) {
    throw new Error('useChild must be used within a ChildProvider');
  }
  return context;
};
