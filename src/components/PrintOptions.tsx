
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useMission } from '../context/MissionContext';
import { useChild } from '../context/ChildContext';
import { useToast } from '@/components/ui/use-toast';
import { Printer } from 'lucide-react';

const PrintOptions: React.FC = () => {
  const { missions, isMissionCompleted } = useMission();
  const { selectedChild } = useChild();
  const { toast } = useToast();
  const printFrameRef = useRef<HTMLIFrameElement>(null);
  
  const generatePrintContent = (filterType: 'all' | 'completed' | 'incomplete') => {
    if (!selectedChild) {
      toast({
        title: "No child selected",
        description: "Please select a child first",
        variant: "destructive"
      });
      return;
    }
    
    let filteredMissions = [...missions];
    
    if (filterType === 'completed') {
      filteredMissions = missions.filter(mission => 
        isMissionCompleted(mission.id, selectedChild.id)
      );
    } else if (filterType === 'incomplete') {
      filteredMissions = missions.filter(mission => 
        !isMissionCompleted(mission.id, selectedChild.id)
      );
    }
    
    // Generate HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Mini Life Missions - ${selectedChild.name}</title>
        <style>
          body {
            font-family: 'Nunito', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            text-align: center;
            color: #3EB489;
          }
          .mission {
            border: 1px solid #ddd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            page-break-inside: avoid;
          }
          .mission h3 {
            margin-top: 0;
            margin-bottom: 5px;
          }
          .mission-category {
            display: inline-block;
            font-size: 0.8em;
            padding: 3px 8px;
            border-radius: 12px;
            margin-bottom: 10px;
          }
          .mission-money {
            background-color: rgba(76, 175, 80, 0.1);
            color: #4CAF50;
          }
          .mission-health {
            background-color: rgba(33, 150, 243, 0.1);
            color: #2196F3;
          }
          .mission-communication {
            background-color: rgba(255, 152, 0, 0.1);
            color: #FF9800;
          }
          .checkbox {
            margin-right: 8px;
          }
          .why-matters {
            font-style: italic;
            color: #666;
            margin-top: 10px;
            border-left: 3px solid #ddd;
            padding-left: 10px;
          }
          .completed {
            background-color: rgba(76, 175, 80, 0.1);
          }
          @media print {
            body {
              font-size: 12pt;
            }
            .no-print {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <h1>Mini Life Missions for ${selectedChild.name}</h1>
        <p style="text-align: center;">Printed on ${new Date().toLocaleDateString()}</p>
        
        ${filteredMissions.map(mission => {
          const categoryClass = mission.category === 'Money Smart' 
            ? 'mission-money' 
            : mission.category === 'Healthy Habits' 
              ? 'mission-health' 
              : 'mission-communication';
          
          const isCompleted = isMissionCompleted(mission.id, selectedChild.id);
          
          return `
            <div class="mission ${isCompleted ? 'completed' : ''}">
              <h3>
                <input type="checkbox" class="checkbox" ${isCompleted ? 'checked' : ''}>
                ${mission.title}
              </h3>
              <span class="mission-category ${categoryClass}">${mission.category}</span>
              <p>${mission.description}</p>
              <div class="why-matters">
                <strong>Why this matters:</strong> ${mission.whyThisMatters}
              </div>
            </div>
          `;
        }).join('')}
      </body>
      </html>
    `;
    
    return htmlContent;
  };

  const handlePrint = (filterType: 'all' | 'completed' | 'incomplete') => {
    const htmlContent = generatePrintContent(filterType);
    
    if (!htmlContent) return;
    
    const iframe = printFrameRef.current;
    
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(htmlContent);
        iframeDoc.close();
        
        setTimeout(() => {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
          
          toast({
            title: "Print initiated",
            description: "Your missions are ready to print!"
          });
        }, 500);
      }
    }
  };

  return (
    <div className="mb-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            <span>Print Missions</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handlePrint('all')}>
            All Missions
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handlePrint('completed')}>
            Completed Missions
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handlePrint('incomplete')}>
            Incomplete Missions
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* Hidden iframe for printing */}
      <iframe
        ref={printFrameRef}
        style={{ display: 'none' }}
        title="Print Frame"
      />
    </div>
  );
};

export default PrintOptions;
