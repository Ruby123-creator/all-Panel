import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './utils/api-endpoints';
import { useParams } from 'react-router-dom';

// Function to fetch products
const fetchCardsFixture = async () => {
  const response = await axios.get(`/api/cards-table.json`);
  return response.data;
};

// React Query Hook
export const useTableCardsFixture = () => {
  return useQuery({
    queryKey: [`playing-cards`], // Query Key
    queryFn:()=>fetchCardsFixture(), // Query Function
    refetchInterval: 1000 * 10, // Cache for 5 minutes
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
  });
};