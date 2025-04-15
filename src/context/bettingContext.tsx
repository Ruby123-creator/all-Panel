import React, { createContext, useContext, useState, ReactNode } from "react";

interface CasinoOdds {
  odds: number | string;
  runnerName: string;
  type: string;
  className: string;
  size?:string;
  min?:number|undefined;
  max?:string|undefined;
  eventKey?:string;
}
interface BetOdds{
sizeKey?: any;
odds:any;
runnerName: string;
type: string;
key:string;
size?:string;
min?:number|undefined;
max?:any;
betType: any ;
time?:string;
}
interface BettingContextType {
  casinoOdds: CasinoOdds | null;
  setCasinoBetOdds: (odds: CasinoOdds | null) => void;
  betOdds: BetOdds | null;
  setMatchedBets: (odds: BetOdds | null) => void;
}

const BettingContext = createContext<BettingContextType | undefined>(undefined);

export const useBetting = () => {
  const context = useContext(BettingContext);
  if (!context) {
    throw new Error("useBetting must be used within a BettingProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const BettingProvider: React.FC<Props> = ({ children }) => {
  const [casinoOdds, setCasinoBetOdds] = useState<CasinoOdds | null>(null);
  const [betOdds,setMatchedBets] = useState<BetOdds | null>(null)
  return (
    <BettingContext.Provider value={{ casinoOdds, setCasinoBetOdds ,betOdds, setMatchedBets}}>
      {children}
    </BettingContext.Provider>
  );
};
