import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { API_ENDPOINTS } from './utils/api-endpoints';

// Function to fetch products
const fetchHorseRacingFixture = async (val:any) => {
  const response = await axios.get(`${API_ENDPOINTS.RACING}/${val}`);
  return response.data;
};

// React Query Hook
export const useHorseRacingFixture = (val:string) => {
  return useQuery({
    queryKey: ['horseRacingFixture',val], // Query Key
    queryFn: ()=>fetchHorseRacingFixture(val), // Query Function
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 3,                 // Retry 3 times on failure
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};
