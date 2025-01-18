import React from 'react'
import { Input } from '../ui/input'
import { BedType } from '@/types/medical'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

type Props = {
    handleSearch: (e: React.FormEvent) => void
    search: string
    setSearch: (search: string) => void
    selectedBedType: BedType | string,
    setSelectedBedType: (bedType: BedType ) => void,
    minAvailable: string,
    setMinAvailable: (minAvailable: string) => void
}

const SearchBar = ({handleSearch,search,setSearch,minAvailable,selectedBedType,setMinAvailable,setSelectedBedType}: Props) => {
  return (
    <form onSubmit={handleSearch} className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              placeholder="Search hospitals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-white/50 backdrop-blur-sm"
            />
            <select
              value={selectedBedType}
              onChange={(e) => setSelectedBedType(e.target.value as BedType)}
              className="h-10 rounded-md border border-input bg-white/50 px-3 text-base md:text-sm"
            >
              <option value="">Any Bed Type</option>
              <option value="ICU">ICU</option>
              <option value="General">General</option>
              <option value="Emergency">Emergency</option>
              <option value="Pediatric">Pediatric</option>
            </select>
            <Input
              type="number"
              placeholder="Min. beds available"
              value={minAvailable}
              onChange={(e) => setMinAvailable(e.target.value)}
              className="w-full md:w-48 bg-white/50 backdrop-blur-sm"
              min="0"
            />
          </div>
          <Button type="submit" className="w-full md:w-auto bg-medical-blue hover:bg-medical-blue/90">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>
  )
}

export default SearchBar