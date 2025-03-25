import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoIosJet, IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { GiCirclingFish } from "react-icons/gi";


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
    title:"3 CARDS JUDGEMENT"
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
    title:"JACK TOP OPEN TEENPATTI"
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

export const baccarats = [
  {
    img: "https://client.qtlauncher.com/images/?id=EVO-always8baccarat_en_US&amp&type=logo-square&amp;version=1731473904011",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EVO-bacbo_en_US&amp&type=logo-square&amp;version=1678359207526",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=BTV-baccarat_en_US&amp&type=logo-square&amp;version=1662976207439",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EVO-baccarat_en_US&amp&type=logo-square&amp;version=1678359251397",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EZU-baccarat_en_US&amp&type=logo-square&amp;version=1716211287452",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=L88-baccarat1_en_US&amp&type=logo-square&amp;version=1727968121327",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=L88-baccarat3_en_US&amp&type=logo-square&amp;version=1727875420320",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=L88-baccarat5_en_US&amp&type=logo-square&amp;version=1727875500599",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EVO-baccarata_en_US&amp&type=logo-square&amp;version=1726028817311",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EZU-baccarata_en_US&amp&type=logo-square&amp;version=1717130391537",
  },
];

export const roulette = [
  {
    img: "https://client.qtlauncher.com/images/?id=VGL-americanautoroulette_en_US&amp&type=logo-square&amp;version=1701672928302",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EVO-americanroulette_en_US&amp&type=logo-square&amp;version=1678358704943",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EVO-autolightningroulette_en_US&amp&type=logo-square&amp;version=1701277574098",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=BTL-autoroulette_en_US&amp&type=logo-square&amp;version=1727274726306",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=BTL-autoroulette_en_US&amp&type=logo-square&amp;version=1727274726306",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EZU-automaticroulette_en_US&amp&type=logo-square&amp;version=1716210438504",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=L88-autoroulette1_en_US&amp&type=logo-square&amp;version=1727875079920",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EZU-autoroulette1_en_US&amp&type=logo-square&amp;version=1716214180331",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EVO-autoroulette_en_US&amp&type=logo-square&amp;version=1726028196831",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EVO-autoroulettelapartage_en_US&amp&type=logo-square&amp;version=1702450712159",
  },
];

export const andarbhar = [
  {
    img: "https://client.qtlauncher.com/images/?id=EZU-andarbahar_en_US&amp&type=logo-square&amp;version=1678476979546",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=L88-andarbahar1_en_US&amp&type=logo-square&amp;version=1727874820295",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EZU-casinomarinaandarbahar_en_US&amp&type=logo-square&amp;version=1685691014988",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=SAG-mandarbahar_en_US&amp&type=logo-square&amp;version=1702895346689",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EVO-superandarbahar_en_US&amp&type=logo-square&amp;version=1678388339595",
  },
  {
    img: "https://client.qtlauncher.com/images/?id=EZU-ultimateandarbahar_en_US&amp&type=logo-square&amp;version=1669146546695",
  },
];


export const casinoTypes ={
  "Teenpatti":[ {
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
    title:"JACK TOP OPEN TEENPATTI"
  },
  {
    img: "/assets/images/casino/img-38.jpg",
    title:"JOKER TEENPATTI"
  },{
    img: "/assets/images/casino/img-45.jpg",
    title:"2 CARDS TEENPATTI"
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
    img: "/assets/images/casino/img-63.jpg",
    title:"MUFLIS TEENPATTI"
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
],
  "Others":[{
    img: "/assets/images/casino/img-30.jpg",
    title:"SIC BO"
  },
  {
    img: "/assets/images/casino/img-31.jpg",
    title:"DOUBLE SICBO"
  },{
    img: "/assets/images/casino/img-42.jpg",
    title:"KAUN BANEGA CROREPATI"
  },{
    img: "/assets/images/casino/img-44.jpg",
    title:"NOTE NUMBER"
  },{
    img: "/assets/images/casino/img-53.jpg",
    title:"1 CARD ONE-DAY"
  }, {
    img: "/assets/images/casino/img-62.jpg",
    title:"1 CARD 20-20"
  }, {
    img: "/assets/images/casino/img-65.jpg",
   title:"THE TRAP"
  },
  {
    img: "/assets/images/casino/img-66.jpg",
     title:"TRIO"
  },],
  "Race":[  {
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
  },],
  "Queen":[ {
    img: "/assets/images/casino/img-26.jpg",
    title:"CASINO QUEEN"
  },],
  "Lottery":[ {
    img: "/assets/images/casino/img-20.jpg",
    title:"LOTTERY"
  },],
  "Bollywood":[ {
    img: "/assets/images/casino/img-2.jpg",
    title:"AMAR AKBAR ANTHONY"
  }, {
    img: "/assets/images/casino/img-9.jpg",
    title:"BOLLYWOOD"
  }, {
    img: "/assets/images/casino/img-10.jpg",
    title:"BOLLYWOOD CASINO 2"
  },{
    img: "/assets/images/casino/img-68.jpg",
    title:"AMAR AKBAR ANTHONY 2.0"
  },],
  "Sports":[{
    img: "/assets/images/casino/img-13.jpg",
    title:"CRICKET MATCH 20-20"
  }, {
    img: "/assets/images/casino/img-15.jpg",
    title:"5FIVE CRICKET"
  }, {
    img: "/assets/images/casino/img-19.jpg",
    title:"GOAL"
  },  {
    img: "/assets/images/casino/img-32.jpg",
    title:"SUPER OVER2"
  },
  {
    img: "/assets/images/casino/img-33.jpg",
    title:"MINI SUPER OVER"
  }, {
    img: "/assets/images/casino/img-52.jpg",
    title:"SUPER OVER"
  },
  {
    img: "/assets/images/casino/img-14.jpg",
    title:"CASINO METER"
  },
  {
    img: "/assets/images/casino/img-70.jpg",
    title:"1 CARD METER"
  },
],
  "Worli":[{
    img: "/assets/images/casino/img-40.jpg",
    title:"WORLI MATKA"
  },
  {
    img: "/assets/images/casino/img-67.jpg",
     title:"INSTANT WORLI"
  },],
  "Casino War":[
  {
    img: "/assets/images/casino/img-39.jpg",
    title:"CASINO WAR"
  },],
  "3 Card Judgement":[ {
    img: "/assets/images/casino/img-1.jpg",
    title:"3 CARDS JUDGEMENT"
  },],
  "Lucky 7":[  {
    img: "/assets/images/casino/img-21.jpg",
    title:"LUCKY 7-A"
  },
  {
    img: "/assets/images/casino/img-43.jpg",
    title:"LUCKY7-C CASINO"
  },
  {
    img: "/assets/images/casino/img-22.jpg",
    title:"LUCKY 7-B"
  },
  {
    img: "/assets/images/casino/img-23.jpg",
    title:"LUCKY 15"
  },],
  "Andar Bahar":[{
    img: "/assets/images/casino/img-3.jpg",
    title:"ANDAR BAHAR 150 CARDS"
  },
  {
    img: "/assets/images/casino/img-4.jpg",
    title:"ANDAR BAHAR"
  }, {
    img: "/assets/images/casino/img-5.jpg",
    title:"ANDAR BAHAR 2"
  }, {
    img: "/assets/images/casino/img-69.jpg",
    title:"ANDAR BAHAR 50 CARDS"

  },],
  "32 Cards":[ {
    img: "/assets/images/casino/img-11.jpg",
    title:"32 CARDS-A"
  }, {
    img: "/assets/images/casino/img-12.jpg",
    title:"32 CARDS-B"
  },],
  "Dragon Tiger":[{
    img: "/assets/images/casino/img-16.jpg",
    title:"20-20 DRAGON TIGER"
  }, {
    img: "/assets/images/casino/img-17.jpg",
    title:"20-20 DARGON TIGER 2"
  },{
    img: "/assets/images/casino/img-18.jpg",
    title:"20-20 DRAGON TIGER LION"
  }, {
    img: "/assets/images/casino/img-71.jpg",
    title:"1-DAY DRAGON METER"
  },],
  "Baccarat":[  {
    img: "/assets/images/casino/img-6.jpg",
    title:"BACCARAT"
  }, {
    img: "/assets/images/casino/img-7.jpg",
    title:"ONLINE BACCARAT"
  }, {
    img: "/assets/images/casino/img-64.jpg",
    title:"29 BACCARAT"
  },],
  "Poker":[{
    img: "/assets/images/casino/img-25.jpg",
    title:"POKER 1-DAY"
  },{
    img: "/assets/images/casino/img-46.jpg",
    title:"POKER 6 PLAYER"
  },
  {
    img: "/assets/images/casino/img-47.jpg",
    title:"POKER 20-20"
  },],
 "Roulette":[ {
  img: "/assets/images/casino/img-24.jpg",
  title:"UNIQUE ROULETTE"
}, {
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
}, {
  img: "/assets/images/casino/img-51.jpg",
  title:"ROULETTE"
},],
}
