
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import SponsorDashboard from "@/components/dashboard/SponsorDashboard";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SponsorDashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar userType="sponsor" />
      <main className="flex-1 p-8 bg-gray-50">
        <div className="flex justify-end mb-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" className="relative mr-4">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>You have 5 new notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white mr-3">
              TI
            </div>
            <div>
              <p className="text-sm font-medium">Tech Innovations</p>
              <p className="text-xs text-gray-500">contact@techinnovations.com</p>
            </div>
          </div>
        </div>
        <SponsorDashboard />
      </main>
    </div>
  );
};

export default SponsorDashboardPage;
