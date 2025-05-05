
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Plus, X } from 'lucide-react';
import { useChild } from '../context/ChildContext';

const ChildSelector: React.FC = () => {
  const [newChildName, setNewChildName] = useState('');
  const { children, addChild, removeChild, selectedChild, setSelectedChild } = useChild();
  
  const handleAddChild = () => {
    if (!newChildName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter a name for the child",
        variant: "destructive"
      });
      return;
    }
    
    addChild(newChildName);
    setNewChildName('');
    toast({
      title: "Child added",
      description: `${newChildName} has been added successfully!`
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddChild();
    }
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col items-start gap-2 mb-4">
        <h2 className="text-lg font-semibold">Child Management</h2>
        <div className="flex w-full gap-2 items-center">
          <Input
            value={newChildName}
            onChange={(e) => setNewChildName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter child name"
            className="max-w-xs"
          />
          <Button
            onClick={handleAddChild}
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <Plus className="h-4 w-4" />
            <span>Add</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {children.length === 0 && (
          <div className="text-muted-foreground italic">
            Add a child to get started
          </div>
        )}
        
        {children.map((child) => (
          <div 
            key={child.id}
            className="relative"
          >
            <Button
              variant={selectedChild?.id === child.id ? "default" : "outline"}
              onClick={() => setSelectedChild(child)}
              className={`child-button ${
                selectedChild?.id === child.id 
                  ? "bg-primary text-white" 
                  : "bg-white"
              } relative pr-8`}
            >
              {child.name}
            </Button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeChild(child.id);
                toast({
                  description: `${child.name} removed`
                });
              }}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <X className="h-3 w-3 text-gray-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildSelector;
