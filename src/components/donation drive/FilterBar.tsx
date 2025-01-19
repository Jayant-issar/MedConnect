import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';

interface FilterBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterBar({ selectedFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="mb-8 flex gap-4">
      <div className="relative">
        <select
          className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          value={selectedFilter}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">All Drives</option>
          <option value="upcoming">Upcoming</option>
          <option value="urgent">Urgent Need</option>
          <option value="nearby">Nearby</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <Filter className="h-4 w-4 mr-2" />
        More Filters
      </button>
    </div>
  );
}

