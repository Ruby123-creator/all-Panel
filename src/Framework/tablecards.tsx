import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './utils/api-endpoints';
import { useParams } from 'react-router-dom';

// Function to fetch products
const fetchCardsFixture = async (val:string|undefined) => {
  const response = await axios.get(`/api/${val}.json`);
  return response.data;
};

// React Query Hook
export const useTableCardsFixture = (val:string|undefined) => {
  return useQuery({
    queryKey: [`playing-cards`,val], // Query Key
    queryFn:()=>fetchCardsFixture(val), // Query Function
    refetchInterval: 1000 * 10, // Cache for 5 minutes
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};