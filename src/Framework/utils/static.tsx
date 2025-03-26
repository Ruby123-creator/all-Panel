import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoIosJet, IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { GiCirclingFish } from "react-icons/gi";
import TeenJoker from "../../component/pages/LiveCasino/casinoTables/teenjoker";
import Teen from "../../component/pages/LiveCasino/casinoTables/teen";
import Teenmuf from "../../component/pages/LiveCasino/casinoTables/teenmuf";
import Teen41 from "../../component/pages/LiveCasino/casinoTables/teen41";

import Teen20C from "../../component/pages/LiveCasino/casinoTables/teen20c";
import Teen9 from "../../component/pages/LiveCasino/casinoTables/teen9";
import Teen8 from "../../component/pages/LiveCasino/casinoTables/teen8";
import Poker6 from "../../component/pages/LiveCasino/casinoTables/poker6";
import Poker from "../../component/pages/LiveCasino/casinoTables/poker";
import Patti2 from "../../component/pages/LiveCasino/casinoTables/patti2";
import OurRoullete from "../../component/pages/LiveCasino/casinoTables/ourRoullete";
import Baccarat from "../../component/pages/LiveCasino/casinoTables/baccarat";
import Baccarat9 from "../../component/pages/LiveCasino/casinoTables/baccarat9";
import Teen3 from "../../component/pages/LiveCasino/casinoTables/teen3";
import Teen32 from "../../component/pages/LiveCasino/casinoTables/teen32";
import Teen20b from "../../component/pages/LiveCasino/casinoTables/teen20b";
import Poker20 from "../../component/pages/LiveCasino/casinoTables/poker20";
import Dragontiger20 from "../../component/pages/LiveCasino/casinoTables/dragontiger20";
import Dragontiger202 from "../../component/pages/LiveCasino/casinoTables/dragontiger202";
import OnedayDragonTiger from "../../component/pages/LiveCasino/casinoTables/onedayDragonTiger";
import DragonTigerLion20 from "../../component/pages/LiveCasino/casinoTables/dragonTigerLion20";
import Card32 from "../../component/pages/LiveCasino/casinoTables/card32";
import Card32eu from "../../component/pages/LiveCasino/casinoTables/card32eu";
import AndarBahar150 from "../../component/pages/LiveCasino/casinoTables/andarBahar150";
import AndarBahar2 from "../../component/pages/LiveCasino/casinoTables/AndarBahar2";
import Lucky15 from "../../component/pages/LiveCasino/casinoTables/lucky15";
import Lucky7 from "../../component/pages/LiveCasino/casinoTables/lucky7";
import Lucky7B from "../../component/pages/LiveCasino/casinoTables/lucky7B";
import Lucky7C from "../../component/pages/LiveCasino/casinoTables/lucky7C";
import Cardjudgement from "../../component/pages/LiveCasino/casinoTables/cardjudgement";
import Casinowar from "../../component/pages/LiveCasino/casinoTables/casinowar";
import Worlimatka from "../../component/pages/LiveCasino/casinoTables/worlimatka";
import Instantworli from "../../component/pages/LiveCasino/casinoTables/instantworli";
import Goal from "../../component/pages/LiveCasino/casinoTables/goal";
import SuperOver from "../../component/pages/LiveCasino/casinoTables/superOver";
import CasinoMeter from "../../component/pages/LiveCasino/casinoTables/casinoMeter";
import MatchTable from "../../component/pages/LiveCasino/casinoTables/matchTable";
import BollywoodTable from "../../component/pages/LiveCasino/casinoTables/bollywoodTable";
import Casibo2 from "../../component/pages/LiveCasino/casinoTables/casibo2";
import Teensin from "../../component/pages/LiveCasino/casinoTables/teensin";
import { title } from "process";
import Kbc from "../../component/pages/LiveCasino/casinoTables/kbc";
import { table } from "console";
import NoteNumber from "../../component/pages/LiveCasino/casinoTables/noteNumber";
import Teen1 from "../../component/pages/LiveCasino/casinoTables/teen1";
import Teen120 from "../../component/pages/LiveCasino/casinoTables/teen120";
import Trap from "../../component/pages/LiveCasino/casinoTables/trap";
import Trio from "../../component/pages/LiveCasino/casinoTables/trio";
import Race2 from "../../component/pages/LiveCasino/casinoTables/race2";
import Race17 from "../../component/pages/LiveCasino/casinoTables/race17";
import Race20 from "../../component/pages/LiveCasino/casinoTables/race20";
import CasinoQueen from "../../component/pages/LiveCasino/casinoTables/casinoQueen";
import Lotterycard from "../../component/pages/LiveCasino/casinoTables/lotterycard";

const renderCards = (players: string[], images: string, div: number) => {
  // Convert the image string into an array
  const imageArray = images?.split(",") || [];

  return (
    <div className="casino-video-cards">
      {players.map((player, index) => {
        // Get the subset of images for this player
        const playerImages = imageArray.slice(index * div, (index + 1) * div);

        return (
          <div key={index} className="mt-1">
            <h5>{player}</h5>
            <div className="flip-card-container">
              {playerImages.map((card, idx) => (
                <div key={idx} className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={`/assets/images/playingCards/${card}.jpg`}
                        alt={card}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const renderTable = (val:string | undefined,data?:any) => {
  switch (val) {
    case "teenjoker":
      return {
        title: "JOKER TEENPATTI",
        table: <TeenJoker />,
      };
    case "teen":
      return {
        title:"TEENPATTI 1-DAY",
        table: <Teen data={data}/>,
        cardRenders : renderCards(["PLAYER A","PLAYER B"], data?.img , 3)

      };
    case "teenmuf":
      return {
        title:"MUFLIS TEENPATTI",
        table: <Teenmuf data={data}/>,
        cardRenders : renderCards(["",""], data?.img , 3)

      };
    case "tee41":
      return {
        title: "Teen 41",
        table: <Teen41 />,
      };
    case "teen33":
      return {
        title:"INSTANT TEENPATTI3.0",
        table: <Teen32 data={data}/>,
          cardRenders : renderCards(["PLAYER A","PLAYER B"], data?.img , 3)
      };
    case "teen20c":
      return {
        title:"20-20 TEENPATTIC C",
        table: <Teen20C data={data}/>,
        
          cardRenders : renderCards(["PLAYER A","PLAYER B"], data?.img , 3)
      };
    case "teen9":
      return {
        title:"TEENPATTI TEST",
        table: <Teen9 data={data}/>,
        cardRenders : renderCards(["TIGER","LION","DRAGON"], data?.img , 3)
      };
      case "teen20":
        return {
          title:"TEENPATTI 20-20",
          table: <Teen9 />,
        };
    case "teen8":
      return {
        title:"OPEN TEENPATTI",
        table: <Teen8 />,
      };
    case "poker6":
      return {
        title:"POKER 20-20",
        table: <Poker6 />,
      };
    case "poker":
      return {
        title:"POKER 1-DAY",
        table: <Poker />,
      };
    case "patti2":
      return {
        title: "2 CARDS TEENPATTI",
        table: <Patti2 />,
      };
    case "ourroullete":
      return {
        title:"UNIQUE ROULETTE",
        table: <OurRoullete />,
      };
    case "baccarat":
      return {
        title:"BACCARAT",
        table: <Baccarat />,
      };
    case "baccarat9":
      return {
        title:"ONLINE BACCARAT",
        table: <Baccarat9 />,
      };
    case "teen6":
      return {
        title:"TEENPATTI 2.0",
        table: <Teen3 />,
      };
    case "teen3":
      return {
        title: "INSTANT TEENPATTI",
        table: <Teen3 />,
      };
    case "teen32":
      return {
        title:"INSTANT TEENPATTI 2.0",
        table: <Teen32 data={data}/>,
          cardRenders : renderCards(["PLAYER A","PLAYER B"], data?.img , 3)
      }
      case "teen42":
        return {
          title:"JACK TOP OPEN TEENPATTI",
          table: <Teen32 data={data}/>,
          cardRenders : renderCards(["PLAYER","DEALER"], data?.img , 3)

        };
        case "teen41":
        return {
          title:"QUEEN TOP OPEN TEENPATTI",
          table: <Teen32 data={data}/>,
          cardRenders : renderCards(["PLAYER A","PLAYER B"], data?.img , 3)

        };
    case "teen20b":
      return {
        title:"20-20 TEENPATTI B",
        table: <Teen20C data={data}/>,
        
        cardRenders : renderCards(["PLAYER A","PLAYER B"], data?.img , 3)
      };
    case "poker20":
      return {
        title:"POKER 6 PLAYER",
        table: <Poker20 />,
      };
    case "dt20":
      return {
        title:"20-20 DRAGON TIGER",
        table: <Dragontiger20 />,
      };
    case "dt202":
      return {
        title:"20-20 DARGON TIGER 2",
        table: <Dragontiger202 />,
      };
    case "dt6":
      return {
        title:"1-DAY DRAGON TIGER",
        table: <OnedayDragonTiger />,
      };
    case "dtl20":
      return {
        title:"20-20 DRAGON TIGER LION",
        table: <DragonTigerLion20 />,
      };
    case "card32":
      return {
        title:"32 CARDS-A",
        table: <Card32 />,
      };
    case "card32eu":
      return {
        title:"32 CARDS-B",
        table: <Card32eu />,
      };
    case "ab4":
      return {
        title:"ANDAR BAHAR 150 CARDS",
        table: <AndarBahar150 />,
      };
    case "ab3":
      return {
        title:"ANDAR BAHAR 50 CARDS",
        table: <AndarBahar150 />,
      };
    case "ab20":
      return {
        title:"ANDAR BAHAR",
        table: <AndarBahar150 />,
      };
    case "abj":
      return {
        title:"ANDAR BAHAR 2",
        table: <AndarBahar2 />,
      };
    case "lucky15":
      return {
        title:"LUCKY 15",
        table: <Lucky15 />,
      };
    case "lucky7":
      return {
        title:"LUCKY 7-A",
        table: <Lucky7 />,
      };
    case "lucky7eu":
      return {
        title:"LUCKY 7-B",
        table: <Lucky7B />,
      };
    case "lucky7eu2":
      return {
        title:"LUCKY7-C CASINO",
        table: <Lucky7C />,
      };
    case "3cardj":
      return {
        title:"3 CARDS JUDGEMENT",
        table: <Cardjudgement />,
      };
    case "war":
      return {
        title:"CASINO WAR",
        table: <Casinowar />,
      };
    case "worli":
      return {
        title:"WORLI MATKA",
        table: <Worlimatka />,
      };
    case "worli2":
      return {
        title:"INSTANT WORLI",
        table: <Instantworli />,
      };
    case "goal":
      return {
        title:"GOAL",
        table: <Goal />,
      };
    case "superover":
      return {
        title:"SUPER OVER",
        table: <SuperOver />,
      };
    case "superover2":
      return {
        title:"SUPER OVER2",
        table: <SuperOver />,
      };
    case "superover3":
      return {
        title:"MINI SUPER OVER",
        table: <SuperOver />,
      };
      case "cricketv3":
        return {
          title:"5FIVE CRICKET",
          table: <SuperOver />,
        };
    case "cricketv3":
      return {
        title:"5FIVE CRICKET",
        table: <SuperOver />,
      };
    case "cmeter1":
      return {
        title:"1 CARD METER",
        table: <CasinoMeter />,
      };
    case "cmeter":
      return {
        title:"CASINO METER",
        table: <CasinoMeter />,
      };
    case "cmatch20":
      return {
        title:"CRICKET MATCH 20-20",
        table: <MatchTable />,
      };
    case "btable2":
      return {
        title:"BOLLYWOOD CASINO 2",
        table: <BollywoodTable />,
      };
    case "btable":
      return {
        title:"BOLLYWOOD",
        table: <BollywoodTable />,
      };
    case "aaa":
      return {
        title:"AMAR AKBAR ANTHONY",
        table: <BollywoodTable />,
      };
    case "aaa2":
      return {
        title:"AMAR AKBAR ANTHONY 2.0",
        table: <BollywoodTable />,
      };
      case "teen1":
        return {
          title:"1 CARD ONE-DAY",

          table: <Teen1 data={data}/>,
          cardRenders : renderCards(["PLAYER","DEALER"], data?.img , 1)

        };
        case "teen120":
          return {
            title:"1 CARD 20-20",
  
            table: <Teen120 data={data}/>,
          cardRenders : renderCards(["PLAYER","DEALER"], data?.img , 1)

          };
    case "sicbo":
      return {
        title:"SIC BO",

        table: <Casibo2 />,
      };
      case "trio":
        return {
          title:"TRIO",

  
          table: <Trio />,
        };
      case "trap":
        return {
          title:"THE TRAP",

  
          table: <Trap />,
        };
    case "notenum":
      return{
    title:"NOTE NUMBER",
table : <NoteNumber/>
      }
    case "kbc":
      return{
        title:"KAUN BANEGA CROREPATI",
        table: <Kbc/>
      }
    case "sicbo2":
      return {
        title:"DOUBLE SICBO",

        table: <Casibo2 />,
      };
      case "race2":
        return {
          title:"RACE TO 2ND",
  
          table: <Race2 />,
        };
        case "race17":
        return {
          title:"RACE TO 17",

  
          table: <Race17 />,
        };
        case "race20":
        return {
          title:"RACE 20",

  
          table: <Race20 />,
        }; 
        case "queen":
        return {
          title:"CASINO QUEEN",

  
          table: <CasinoQueen />,
        };
        case "lottcard":
        return {
          title:"LOTTERY",

  
          table: <Lotterycard />,
        };
    case "teensin":
      return {
        title:"29 BACCARAT",
        table: <Teensin data={data}/>,
        cardRenders : renderCards(["PLAYER A","PLAYER B"], data?.img , 3)

      };
    default:
      return {
        title: "Not Found",
        table: null,
      };
  }
};
export const socialLinks = [
  {
    title: "",
    icon: <FaTelegramPlane size={25} fill="var(--color-quaternary)" />,
  },
  {
    title: "",
    icon: <IoLogoWhatsapp size={25} fill="var(--color-quaternary)" />,
  },
  {
    title: "",
    icon: <IoIosMail size={30} fill="var(--color-quaternary)" />,
  },
  {
    title: "",
    icon: <FaFacebook size={25} fill="var(--color-quaternary)" />,
  },
  {
    title: "",
    icon: <BsInstagram size={25} fill="var(--color-quaternary)" />,
  },
];



export const headerMenu = [
  { title: "Home", routing: "/home" },
  { title: "Lottery", routing: "/casino-lobby/lottery" },
  { title: "Cricket", routing: "/sports-page/cricket" },
  { title: "Football", routing: "/sports-page/soccer" },  
  { title: "Tennis", routing: "/sports-page/tennis" },
  { title: "Table Tennis", routing: "/sports-page/table-tennis" },
  { title: "Baccarat", routing: "/casino-lobby/tableGames" },
  { title: "32 Cards", routing: "/casino-lobby/tableGames" },

  { title: "Teenpatti", routing: "/casino-lobby/tableGames" },

  { title: "Poker", routing: "/casino-lobby/tableGames" },
  { title: "Lucky 7", routing: "/casino-lobby/tableGames" },


  
];


export const navMenu = [
  
 
  { title: "Cricket", val: "cricket" },
  { title: "Football", val: "soccer" },
  { title: "Tennis", val: "tennis" },
  { title: "Esoccer", val: "soccer" },
  { title: "Horse Racing", val: "horse_race" },
  { title: "Greyhound Racing", val: "greyhound/greyhond_race" },
  { title: "Table Tennis", val: "table-tennis" },
  
  { title: "Basketball", val: "/sports-page/basketball" },
  { title: "Volleyball", val: "/sports-page/volleyball" },
  { title: "Badminton", val: "/sports-page/badminton" },
  { title: "Snooker", val: "/sports-page/snooker" },
 

  { title: "Poker", val: "/poker" },
  { title: "Lucky 7", val: "/lucky" },


  
];
const playingCards = {
  "ACC":'/assets/images/playingCards/ACC.jpg',
  "KCC":'/assets/images/playingCards/KCC.jpg',
  "QCC":'/assets/images/playingCards/QCC.jpg',
  "JCC":'/assets/images/playingCards/JCC.jpg',
  "1CC":'/assets/images/playingCards/1CC.jpg',
  "2CC":'/assets/images/playingCards/2CC.jpg',
  "3CC":'/assets/images/playingCards/3CC.jpg',
  "4CC":'/assets/images/playingCards/4CC.jpg',
  "5CC":'/assets/images/playingCards/5CC.jpg',
  "6CC":'/assets/images/playingCards/6CC.jpg',
  "7CC":'/assets/images/playingCards/7CC.jpg',
  "8CC":'/assets/images/playingCards/8CC.jpg',
  "9CC":'/assets/images/playingCards/9CC.jpg',
  "10CC":'/assets/images/playingCards/10CC.jpg',
"ASS":'/assets/images/playingCards/ASS.jpg',
  "KSS":'/assets/images/playingCards/KSS.jpg',
  "QSS":'/assets/images/playingCards/QSS.jpg',
  "JSS":'/assets/images/playingCards/JSS.jpg',
  "1SS":'/assets/images/playingCards/1SS.jpg',
  "2SS":'/assets/images/playingCards/2SS.jpg',
  "3SS":'/assets/images/playingCards/3SS.jpg',
  "4SS":'/assets/images/playingCards/4SS.jpg',
  "5SS":'/assets/images/playingCards/5SS.jpg',
  "6SS":'/assets/images/playingCards/6SS.jpg',
  "7SS":'/assets/images/playingCards/7SS.jpg',
  "8SS":'/assets/images/playingCards/8SS.jpg',
  "9SS":'/assets/images/playingCards/9SS.jpg',
  "10SS":'/assets/images/playingCards/10SS.jpg',
"AHH":'/assets/images/playingCards/AHH.jpg',
  "KHH":'/assets/images/playingCards/KHH.jpg',
  "QHH":'/assets/images/playingCards/QHH.jpg',
  "JHH":'/assets/images/playingCards/JHH.jpg',
  "1HH":'/assets/images/playingCards/1HH.jpg',
  "2HH":'/assets/images/playingCards/2HH.jpg',
  "3HH":'/assets/images/playingCards/3HH.jpg',
  "4HH":'/assets/images/playingCards/4HH.jpg',
  "5HH":'/assets/images/playingCards/5HH.jpg',
  "6HH":'/assets/images/playingCards/6HH.jpg',
  "7HH":'/assets/images/playingCards/7HH.jpg',
  "8HH":'/assets/images/playingCards/8HH.jpg',
  "9HH":'/assets/images/playingCards/9HH.jpg',
  "10HH":'/assets/images/playingCards/10HH.jpg',
  "ADD":'/assets/images/playingCards/ADD.jpg',
  "KDD":'/assets/images/playingCards/KDD.jpg',
  "QDD":'/assets/images/playingCards/QDD.jpg',
  "JDD":'/assets/images/playingCards/JDD.jpg',
  "1DD":'/assets/images/playingCards/1DD.jpg',
  "2DD":'/assets/images/playingCards/2DD.jpg',
  "3DD":'/assets/images/playingCards/3DD.jpg',
  "4DD":'/assets/images/playingCards/4DD.jpg',
  "5DD":'/assets/images/playingCards/5DD.jpg',
  "6DD":'/assets/images/playingCards/6DD.jpg',
  "7DD":'/assets/images/playingCards/7DD.jpg',
  "8DD":'/assets/images/playingCards/8DD.jpg',
  "9DD":'/assets/images/playingCards/9DD.jpg',
  "10DD":'/assets/images/playingCards/10DD.jpg',
  "unrevealed":'/assets/images/playingCards/1.jpg'
}
export const mobileHeaderMenu = [
  {
    title: "Aviator",
    routing: "/aviator",
    icon: <img src="/icons/aviator.svg" alt="My Icon" width={20} height={20} />,
  },
  {
    title: "Live Casino",
    routing: "/casino-lobby/casino",
    icon: <img src="/icons/casino.svg" alt="My Icon" width={20} height={20} />,
  },
  {
    title: "Slots",
    routing: "/casino-lobby/slot-games",
    icon: <img src="/icons/slot.svg" alt="My Icon" width={20} height={20} />,
  },
  {
    title: "Crash Games",
    routing: "/casino-lobby/slot-games/Crash",
    icon: <img src="/icons/aviator.svg" alt="My Icon" width={20} height={20} />,
  },
  {
    title: "Fishing Games",
    routing: "/casino-lobby/slot-games/Shooting",
    icon: <GiCirclingFish size={20} fill="#c10931" />,
  },
];
export const casinoCards = [
  {
    img: "/assets/images/casino/img-1.jpg",
    title:"3 CARDS JUDGEMENT",
   
  },
  {
    img: "/assets/images/casino/img-2.jpg",
    title:"AMAR AKBAR ANTHONY"
  },
  {
    img: "/assets/images/casino/img-3.jpg",
    title:"ANDAR BAHAR 150 CARDS"
  },
  {
    img: "/assets/images/casino/img-4.jpg",
    title:"ANDAR BAHAR"
  },
  {
    img: "/assets/images/casino/img-5.jpg",
    title:"ANDAR BAHAR 2"
  },
  {
    img: "/assets/images/casino/img-6.jpg",
    title:"BACCARAT"
  },
  {
    img: "/assets/images/casino/img-7.jpg",
    title:"ONLINE BACCARAT"
  },
  {
    img: "/assets/images/casino/img-8.jpg",
    title:"BALL BY BALL"
  },
  {
    img: "/assets/images/casino/img-9.jpg",
    title:"BOLLYWOOD"
  },
  {
    img: "/assets/images/casino/img-10.jpg",
    title:"BOLLYWOOD CASINO 2"
  },
  {
    img: "/assets/images/casino/img-11.jpg",
    title:"32 CARDS-A"
  },
  {
    img: "/assets/images/casino/img-12.jpg",
    title:"32 CARDS-B"
  },
  {
    img: "/assets/images/casino/img-13.jpg",
    title:"CRICKET MATCH 20-20"
  },
  {
    img: "/assets/images/casino/img-14.jpg",
    title:"CASINO METER"
  },
  {
    img: "/assets/images/casino/img-15.jpg",
    title:"5FIVE CRICKET"
  },
  {
    img: "/assets/images/casino/img-16.jpg",
    title:"20-20 DRAGON TIGER"
  },
  {
    img: "/assets/images/casino/img-17.jpg",
    title:"20-20 DARGON TIGER 2"
  },
  {
    img: "/assets/images/casino/img-18.jpg",
    title:"20-20 DRAGON TIGER LION"
  },
  {
    img: "/assets/images/casino/img-19.jpg",
    title:"GOAL"
  },
  {
    img: "/assets/images/casino/img-20.jpg",
    title:"LOTTERY"
  },
  {
    img: "/assets/images/casino/img-21.jpg",
    title:"LUCKY 7-A"
  },
  {
    img: "/assets/images/casino/img-22.jpg",
    title:"LUCKY 7-B"
  },
  {
    img: "/assets/images/casino/img-23.jpg",
    title:"LUCKY 15"
  },
  {
    img: "/assets/images/casino/img-24.jpg",
    title:"UNIQUE ROULETTE"
  },
  {
    img: "/assets/images/casino/img-25.jpg",
    title:"POKER 1-DAY"
  },
  {
    img: "/assets/images/casino/img-26.jpg",
    title:"CASINO QUEEN"
  },
  {
    img: "/assets/images/casino/img-27.jpg",
    title:"ROULETTE BL"
  },
  {
    img: "/assets/images/casino/img-28.jpg",
    title:"GOLDEN ROULETTE"
  },
  {
    img: "/assets/images/casino/img-29.jpg",
    title:"BEACH ROULETTE"
  },
  {
    img: "/assets/images/casino/img-30.jpg",
    title:"SIC BO"
  },
  {
    img: "/assets/images/casino/img-31.jpg",
    title:"DOUBLE SICBO"
  },
  {
    img: "/assets/images/casino/img-32.jpg",
    title:"SUPER OVER2"
  },
  {
    img: "/assets/images/casino/img-33.jpg",
    title:"MINI SUPER OVER"
  },
  {
    img: "/assets/images/casino/img-34.jpg",
    title:"TEENPATTI 1-DAY"
  },
  {
    img: "/assets/images/casino/img-35.jpg",
    title:"20-20 TEENPATTIC C"
  },
  {
    img: "/assets/images/casino/img-36.jpg",
    title:"INSTANT TEENPATTI3.0"
  },
  {
    img: "/assets/images/casino/img-37.jpg",
    title:"QUEEN TOP OPEN TEENPATTI"
  },
  {
    img: "/assets/images/casino/img-38.jpg",
    title:"JOKER TEENPATTI"
  },
  {
    img: "/assets/images/casino/img-39.jpg",
    title:"CASINO WAR"
  },
  {
    img: "/assets/images/casino/img-40.jpg",
    title:"WORLI MATKA"
  },

  {
    img: "/assets/images/casino/img-42.jpg",
    title:"KAUN BANEGA CROREPATI"
  },
  {
    img: "/assets/images/casino/img-43.jpg",
    title:"LUCKY7-C CASINO"
  },
  {
    img: "/assets/images/casino/img-44.jpg",
    title:"NOTE NUMBER"
  },
  {
    img: "/assets/images/casino/img-45.jpg",
    title:"2 CARDS TEENPATTI"
  },
  {
    img: "/assets/images/casino/img-46.jpg",
    title:"POKER 6 PLAYER"
  },
  {
    img: "/assets/images/casino/img-47.jpg",
    title:"POKER 20-20"
  },
  {
    img: "/assets/images/casino/img-48.jpg",
    title:"RACE TO 2ND"
  },
  {
    img: "/assets/images/casino/img-49.jpg",
    title:"RACE TO 17"
  },
  {
    img: "/assets/images/casino/img-50.jpg",
    title:"RACE 20"
  },
  {
    img: "/assets/images/casino/img-51.jpg",
    title:"ROULETTE"
  },
  {
    img: "/assets/images/casino/img-52.jpg",
    title:"SUPER OVER"
  },
  {
    img: "/assets/images/casino/img-53.jpg",
    title:"1 CARD ONE-DAY"
  },
  {
    img: "/assets/images/casino/img-54.jpg",
    title:"INSTANT TEENPATTI"
  },
  {
    img: "/assets/images/casino/img-55.jpg",
    title:"TEENPATTI 2.0"
  },
  {
    img: "/assets/images/casino/img-56.jpg",
    title:"OPEN TEENPATTI"
  },
  {
    img: "/assets/images/casino/img-57.jpg",
    title:"TEENPATTI TEST"
  },
  {
    img: "/assets/images/casino/img-58.jpg",
    title:"TEENPATTI 20-20"
  },
  {
    img: "/assets/images/casino/img-59.jpg",
    title:"20-20 TEENPATTI B"
  },
  {
    img: "/assets/images/casino/img-60.jpg",
    title:"INSTANT TEENPATTI 2.0"
  },
  {
    img: "/assets/images/casino/img-61.jpg",
    title:"JACK TOP OPEN TEENPATTI"
  },
  {
    img: "/assets/images/casino/img-62.jpg",
    title:"1 CARD 20-20"
  },
  {
    img: "/assets/images/casino/img-63.jpg",
    title:"MUFLIS TEENPATTI"
  },
  {
    img: "/assets/images/casino/img-64.jpg",
    title:"29 BACCARAT"
  },
  {
    img: "/assets/images/casino/img-65.jpg",
   title:"THE TRAP"
  },
  {
    img: "/assets/images/casino/img-66.jpg",
     title:"TRIO"
  },
  {
    img: "/assets/images/casino/img-67.jpg",
     title:"INSTANT WORLI"
  },
  {
    img: "/assets/images/casino/img-68.jpg",
    title:"AMAR AKBAR ANTHONY 2.0"
  },
  {
    img: "/assets/images/casino/img-69.jpg",
    title:"ANDAR BAHAR 50 CARDS"

  },
  {
    img: "/assets/images/casino/img-70.jpg",
    title:"1 CARD METER"
  },
  {
    img: "/assets/images/casino/img-71.jpg",
    title:"1-DAY DRAGON METER"
  },
];




export const casinoTypes ={
  "Teenpatti":[ {
    img: "/assets/images/casino/img-34.jpg",
    title:"TEENPATTI 1-DAY",
    path:"/casino/teen"
  },
  {
    img: "/assets/images/casino/img-35.jpg",
    title:"20-20 TEENPATTIC C",
    path:"/casino/teen20c"

  },
  {
    img: "/assets/images/casino/img-36.jpg",
    title:"INSTANT TEENPATTI3.0",
    path:"/casino/teen33"

  },
  {
    img: "/assets/images/casino/img-37.jpg",
    title:"QUEEN TOP OPEN TEENPATTI",
    path:"/casino/teen41"

  },
  {
    img: "/assets/images/casino/img-38.jpg",
    title:"JOKER TEENPATTI",
    path:"/casino/teenjoker"

  },{
    img: "/assets/images/casino/img-45.jpg",
    title:"2 CARDS TEENPATTI",
    path:"/casino/patti2"

  },
  {
    img: "/assets/images/casino/img-54.jpg",
    title:"INSTANT TEENPATTI",
    path:"/casino/teen3"

  },
  {
    img: "/assets/images/casino/img-55.jpg",
    title:"TEENPATTI 2.0",
    path:"/casino/teen6"

  },
  {
    img: "/assets/images/casino/img-63.jpg",
    title:"MUFLIS TEENPATTI",
    path:"/casino/teenmuf"

  },
  {
    img: "/assets/images/casino/img-56.jpg",
    title:"OPEN TEENPATTI",
    path:"/casino/teen8"

  },
  {
    img: "/assets/images/casino/img-57.jpg",
    title:"TEENPATTI TEST",
    path:"/casino/teen9"

  },
  {
    img: "/assets/images/casino/img-58.jpg",
    title:"TEENPATTI 20-20",
    path:"/casino/teen20"

  },
  {
    img: "/assets/images/casino/img-59.jpg",
    title:"20-20 TEENPATTI B",
    path:"/casino/teen20b"

  },
  {
    img: "/assets/images/casino/img-60.jpg",
    title:"INSTANT TEENPATTI 2.0",
    path:"/casino/teen32"

  },
  {
    img: "/assets/images/casino/img-61.jpg",
    title:"JACK TOP OPEN TEENPATTI",
    path:"/casino/teen42"

  },
],
  "Others":[{
    img: "/assets/images/casino/img-30.jpg",
    title:"SIC BO",
    path:"/casino/sicbo"

  },
  {
    img: "/assets/images/casino/img-31.jpg",
    title:"DOUBLE SICBO",
    path:"/casino/sicbo2"

  },{
    img: "/assets/images/casino/img-42.jpg",
    title:"KAUN BANEGA CROREPATI",
    path:"/casino/kbc"

  },{
    img: "/assets/images/casino/img-44.jpg",
    title:"NOTE NUMBER",
    path:"/casino/notenum"

  },{
    img: "/assets/images/casino/img-53.jpg",
    title:"1 CARD ONE-DAY",
    path:"/casino/teen1"

  }, {
    img: "/assets/images/casino/img-62.jpg",
    title:"1 CARD 20-20",
    path:"/casino/teen120"

  }, {
    img: "/assets/images/casino/img-65.jpg",
   title:"THE TRAP",
   path:"/casino/trap"

  },
  {
    img: "/assets/images/casino/img-66.jpg",
     title:"TRIO",
    path:"/casino/trio"

  },],
  "Race":[  {
    img: "/assets/images/casino/img-48.jpg",
    title:"RACE TO 2ND",
    path:"/casino/race2"

  },
  {
    img: "/assets/images/casino/img-49.jpg",
    title:"RACE TO 17",
    path:"/casino/race17"

  },
  {
    img: "/assets/images/casino/img-50.jpg",
    title:"RACE 20",
    path:"/casino/race20"

  },],
  "Queen":[ {
    img: "/assets/images/casino/img-26.jpg",
    title:"CASINO QUEEN",
    path:"/casino/queen"

  },],
  "Lottery":[ {
    img: "/assets/images/casino/img-20.jpg",
    title:"LOTTERY",
    path:"/casino/lottcard"

  },],
  "Bollywood":[ {
    img: "/assets/images/casino/img-2.jpg",
    title:"AMAR AKBAR ANTHONY",
    path:"/casino/aaa"

  }, {
    img: "/assets/images/casino/img-9.jpg",
    title:"BOLLYWOOD",
    path:"/casino/btable"

  }, {
    img: "/assets/images/casino/img-10.jpg",
    title:"BOLLYWOOD CASINO 2",
    path:"/casino/btable2"

  },{
    img: "/assets/images/casino/img-68.jpg",
    title:"AMAR AKBAR ANTHONY 2.0",
    path:"/casino/aaa2"

  },],
  "Sports":[{
    img: "/assets/images/casino/img-13.jpg",
    title:"CRICKET MATCH 20-20",
    path:"/casino/cmatch20"

  }, {
    img: "/assets/images/casino/img-15.jpg",
    title:"5FIVE CRICKET",
    path:"/casino/cricketv3"

  }, {
    img: "/assets/images/casino/img-19.jpg",
    title:"GOAL",
    path:"/casino/goal"

  },  {
    img: "/assets/images/casino/img-32.jpg",
    title:"SUPER OVER2",
    path:"/casino/superover2"

  },
  {
    img: "/assets/images/casino/img-33.jpg",
    title:"MINI SUPER OVER",
    path:"/casino/superover3"

  }, {
    img: "/assets/images/casino/img-52.jpg",
    title:"SUPER OVER",
    path:"/casino/superover"

  },
  {
    img: "/assets/images/casino/img-14.jpg",
    title:"CASINO METER",
    path:"/casino/cmeter"

  },
  {
    img: "/assets/images/casino/img-70.jpg",
    title:"1 CARD METER",
    path:"/casino/cmeter1"

  },
],
  "Worli":[{
    img: "/assets/images/casino/img-40.jpg",
    title:"WORLI MATKA",
    path:"/casino/worli"

  },
  {
    img: "/assets/images/casino/img-67.jpg",
     title:"INSTANT WORLI",
    path:"/casino/worli2"

  },],
  "Casino War":[
  {
    img: "/assets/images/casino/img-39.jpg",
    title:"CASINO WAR",
    path:"/casino/war"

  },],
  "3 Card Judgement":[ {
    img: "/assets/images/casino/img-1.jpg",
    title:"3 CARDS JUDGEMENT",
    path:"/casino/3cardj"

  },],
  "Lucky 7":[  {
    img: "/assets/images/casino/img-21.jpg",
    title:"LUCKY 7-A",
    path:"/casino/lucky7"

  },
  {
    img: "/assets/images/casino/img-43.jpg",
    title:"LUCKY7-C CASINO",
    path:"/casino/lucky7eu2"

  },
  {
    img: "/assets/images/casino/img-22.jpg",
    title:"LUCKY 7-B",
    path:"/casino/lucky7eu"

  },
  {
    img: "/assets/images/casino/img-23.jpg",
    title:"LUCKY 15",
    path:"/casino/lucky15"

  },],
  "Andar Bahar":[{
    img: "/assets/images/casino/img-3.jpg",
    title:"ANDAR BAHAR 150 CARDS",
    path:"/casino/ab4"

  },
  {
    img: "/assets/images/casino/img-4.jpg",
    title:"ANDAR BAHAR",
    path:"/casino/ab20"

  }, {
    img: "/assets/images/casino/img-5.jpg",
    title:"ANDAR BAHAR 2",
    path:"/casino/abj"

  }, {
    img: "/assets/images/casino/img-69.jpg",
    title:"ANDAR BAHAR 50 CARDS",
    path:"/casino/ab3"


  },],
  "32 Cards":[ {
    img: "/assets/images/casino/img-11.jpg",
    title:"32 CARDS-A",
    path:"/casino/card32"

  }, {
    img: "/assets/images/casino/img-12.jpg",
    title:"32 CARDS-B",
    path:"/casino/card32eu"

  },],
  "Dragon Tiger":[{
    img: "/assets/images/casino/img-16.jpg",
    title:"20-20 DRAGON TIGER",
    path:"/casino/dt20"

  }, {
    img: "/assets/images/casino/img-17.jpg",
    title:"20-20 DARGON TIGER 2",
    path:"/casino/dt202"

  },{
    img: "/assets/images/casino/img-18.jpg",
    title:"20-20 DRAGON TIGER LION",
    path:"/casino/dtl20"

  }, {
    img: "/assets/images/casino/img-71.jpg",
    title:"1-DAY DRAGON TIGER",
    path:"/casino/dt6"

  },],
  "Baccarat":[  {
    img: "/assets/images/casino/img-6.jpg",
    title:"BACCARAT",
    path:"/casino/baccarat"

  }, {
    img: "/assets/images/casino/img-7.jpg",
    title:"ONLINE BACCARAT",
    path:"/casino/baccarat2"

  }, {
    img: "/assets/images/casino/img-64.jpg",
    title:"29 BACCARAT",
    path:"/casino/teensin"

  },],
  "Poker":[{
    img: "/assets/images/casino/img-25.jpg",
    title:"POKER 1-DAY",
    path:"/casino/poker"

  },{
    img: "/assets/images/casino/img-46.jpg",
    title:"POKER 6 PLAYER",
    path:"/casino/poker20"

  },
  {
    img: "/assets/images/casino/img-47.jpg",
    title:"POKER 20-20",
    path:"/casino/poker6"

  },],
 "Roulette":[ {
  img: "/assets/images/casino/img-24.jpg",
  title:"UNIQUE ROULETTE",
  path:"/casino/ourroullete"

}, {
  img: "/assets/images/casino/img-27.jpg",
  title:"ROULETTE BL",
  path:"/casino/teenjoker"

},
{
  img: "/assets/images/casino/img-28.jpg",
  title:"GOLDEN ROULETTE",
  path:"/casino/teenjoker"

},
{
  img: "/assets/images/casino/img-29.jpg",
  title:"BEACH ROULETTE",
  path:"/casino/teenjoker"

}, {
  img: "/assets/images/casino/img-51.jpg",
  title:"ROULETTE",
  path:"/casino/teenjoker"

},],
}
