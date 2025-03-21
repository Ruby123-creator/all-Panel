import { BiFootball, BiSolidCricketBall } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GiCardKingDiamonds, GiHorseHead, GiHound } from "react-icons/gi";
import { IoIosJet, IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { IoTennisball } from "react-icons/io5";
import { GiCirclingFish } from "react-icons/gi";
import { icons } from "antd/es/image/PreviewGroup";

export const bannerImages = [
  {
    imgPath: "assets/images/banner/banner-1-unicon-SCJtuYQ9.jpg",
    alt: "Banner Img 1",
  },

  {
    imgPath: "assets/images/banner/banner-2-unicon-_c1DIV87.jpg",
    alt: "Banner Img 2",
  },
  {
    imgPath: "assets/images/banner/banner-3-unicon-ggHzAQpn.jpg",
    alt: "Banner Img 3",
  },
  {
    imgPath: "assets/images/banner/banner-4-unicon-B1kiJQ_E.jpg",
    alt: "Banner Img 4",
  },
  {
    imgPath: "assets/images/banner/banner-5-unicon-DgIV6Wle.jpg",
    alt: "Banner Img 5",
  },
  {
    imgPath: "assets/images/banner/banner-6-unicon-CBpczhu1.jpg",
    alt: "Banner Img 5",
  },
];
export const siderbarDrawer = [
  {
    title: "Cricket",
    icon: <BiSolidCricketBall fill="#8B191B" size={20} />,
    routing: "/sports-page/cricket",
  },
  {
    title: "Football",
    icon: <BiFootball size={20} />,
    routing: "/sports-page/soccer",
  },
  {
    title: "Tennis",
    icon: <IoTennisball fill="#7FBA42" size={20} />,
    routing: "/sports-page/tennis",
  },
  {
    title: "Horse Racing",
    icon: <img alt="horse" src="/icons/horseicon.svg" width={20} height={20} />,
    routing: "/sports-page/Horse-racing",
  },
  {
    title: "Greyhound Racing",
    icon: <img alt="horse" src="/icons/greyhound.svg" width={20} height={20} />,
    routing: "/sports-page/Greyhound-Racing",
  },
  // {
  //   title: "Indian Card Games",
  //     icon: <img alt="horse" src="/icons/card.svg" width={20} height={20}/>,
  //     routing: "/sports-page/indian-card-games"
  // },
  {
    title: "Aviator",
    icon: <img alt="horse" src="/icons/aviator.svg" width={20} height={20} />,
    routing: "/aviator",
  },
  {
    title: "Live Casino",
    icon: <img alt="horse" src="/icons/casino.svg" width={20} height={20} />,
    routing: "/casino-lobby/casino",
  },

  {
    title: "Slot Games",
    icon: <img alt="slot-games" src="/icons/slot.svg" width={20} height={20} />,
    routing: "/casino-lobby/slot-games",
  },
  {
    title: "Crash Games",
    icon: <img src="/icons/aviator.svg" alt="My Icon" width={20} height={20} />,
    routing: "/casino-lobby/crash",
  },
  {
    title: "Fishing",
    icon: <GiCirclingFish size={20} fill="#c10931" />,
    routing: "/casino-lobby/shooting",
  },
  {
    title: "Lottery",
    icon: <img alt="horse" src="/icons/slot.svg" width={20} height={20} />,
    routing: "/casino-lobby/lottery",
  },
];
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

export const carousalImages = [
  {
    title1: "Evolution",
    bgUrl1: "assets/images/gaming/Evolution-1705911275808.jpeg",
    iconUrl1:
      "https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format",
    altText1: "Evolution-image",
    title2: "Sportsbook",
    bgUrl2: "assets/images/gaming/Sportsbook-1705911352020.jpeg",
    iconUrl2:
      "https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format",
    altText2: "Evolution-image",
    title3: "Live Casinos",
    bgUrl3: "assets/images/gaming/LiveCasinos-1705911704269.jpeg",
    iconUrl3:
      "https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format",
    altText3: "Evolution-image",
    title4: "E-Cricket",
    bgUrl4: "assets/images/gaming/e-Cricket-1705911799120.jpeg",
    iconUrl4:
      "https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format",
    altText4: "Evolution-image",
  },
  {
    title1: "Multiplayer Games",
    bgUrl1: "assets/images/gaming/MultiplayerGames-1705912077487.jpeg",
    iconUrl1:
      "https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format",
    altText1: "Evolution-image",
    title2: "Slot Games",
    bgUrl2: "assets/images/gaming/SlotGames-1705912015298.jpeg",
    iconUrl2:
      "https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format",
    altText2: "Evolution-image",
    title3: "Fishing Games",
    bgUrl3: "assets/images/gaming/Fishinggames-1705912252625.jpeg",
    iconUrl3:
      "https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format",
    altText3: "Evolution-image",
    title4: "Color Game",
    bgUrl4: "assets/images/gaming/SlotGames-1705912015298.jpeg",
    iconUrl4:
      "https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format",
    altText4: "Evolution-image",
  },
  // Add more button objects here
];

export const cardGames = [
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-31.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 1",
  },

  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-27.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 2",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indiangamesposters-04.webp?q=65&amp;amp; w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 3",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-02.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 4",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-25.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-26.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-23.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-15.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-24.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-09.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-12.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-11.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-13.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-29.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },

  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-22.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://Playfunexch.com/assets/images/casino/livecasino/Casino+Meter.webp",
    alt: "Banner Img 5",
  },

  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-07.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-20.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-01.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-05.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-08.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-10.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-06.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://Playfunexch.com/assets/images/casino/livecasino/The+Trap.webp",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-03.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-08.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-19.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://auraimgs.imgix.net/indian%20games%20posters-17.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
];

export const popularGames = [
  {
    imgPath:
      "https://luckmedia.link/aes_baccarat_classic/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 1",
  },

  {
    imgPath:
      "https://luckmedia.link/aes_dragontiger/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 2",
  },
  {
    imgPath:
      "https://luckmedia.link/aes_thai_hi_lo/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 3",
  },
  {
    imgPath:
      "https://luckmedia.link/spb_aviator/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 4",
  },
  {
    imgPath:
      "https://luckmedia.link/jil_royal_fishing/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://luckmedia.link/dwg_baccarat_evolution_pairs/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://luckmedia.link/evo_speed_baccarat_n/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://luckmedia.link/evo_deal_or_no_deal/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://luckmedia.link/rtg_aztec_spins/thumb_3_4_custom.webp?q=65&amp;amp;w=600&amp;amp;px=auto&amp;amp;auto=format",
    alt: "Banner Img 5",
  },
  {
    imgPath:
      "https://luckmedia.link/sms_jetx/thumb_3_4_custom.webp?q=65&amp;w=600&amp;px=auto&amp;auto=format",
    alt: "Banner Img 5",
  },
];

export const casinoProviders = [
  {
    imgPath: "assets/images/providers/casino-prov-1.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-2.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-3.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-4.svg",
    alt: "Banner Img 1",
  },

  {
    imgPath: "assets/images/providers/casino-prov-5.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-6.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-7.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-8.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-9.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-10.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-11.svg",
    alt: "Banner Img 1",
  },

  {
    imgPath: "assets/images/providers/casino-prov-12.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-13.svg",
    alt: "Banner Img 1",
  },

  {
    imgPath: "assets/images/providers/casino-prov-14.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-15.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-16.svg",
    alt: "Banner Img 1",
  },

  {
    imgPath: "assets/images/providers/casino-prov-17.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-18.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-19.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-20.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-21.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-22.svg",
    alt: "Banner Img 1",
  },

  {
    imgPath: "assets/images/providers/casino-prov-23.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-24.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-25.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-26.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-27.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-28.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-29.svg",
    alt: "Banner Img 1",
  },

  {
    imgPath: "assets/images/providers/casino-prov-30.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-31.svg",
    alt: "Banner Img 1",
  },

  {
    imgPath: "assets/images/providers/casino-prov-32.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-33.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-34.svg",
    alt: "Banner Img 1",
  },

  {
    imgPath: "assets/images/providers/casino-prov-35.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-36.svg",
    alt: "Banner Img 1",
  },
  {
    imgPath: "assets/images/providers/casino-prov-37.svg",
    alt: "Banner Img 1",
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
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-2.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-3.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-4.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-5.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-6.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-7.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-8.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-9.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-10.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-11.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-12.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-13.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-14.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-15.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-16.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-17.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-18.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-19.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-20.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-21.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-22.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-23.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-24.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-25.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-26.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-27.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-28.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-29.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-30.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-31.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-32.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-33.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-34.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-35.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-36.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-37.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-38.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-39.jpg",
    title:"Teenpatti"
  },
  {
    img: "/assets/images/casino/img-40.jpg",
    title:"Teenpatti"
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
