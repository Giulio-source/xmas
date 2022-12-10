import gsap from "gsap";
import { useEffect } from "react";
import { StyledIllustrazioneElfo } from "../Modals/MappaModal/Modal.style";

export const IllustrazioneElfo = () => {

  useEffect(() => {
    const mainTL = gsap
    .timeline({ repeat: -1, yoyo: true, defaults: { duration: 0.3 } })
    .add("start")
    .to(
      "#elfo-modale #braccio-six",
      {
        rotate: -10,
        transformOrigin: "left bottom",
      },
      "start"
    )
    .to(
      "#elfo-modale #braccio-dex",
      {
        rotate: 10,
        transformOrigin: "right bottom",
      },
      "start"
    )
    .to(
      "#elfo-modale #braccio-dex",
      {
        rotate: 10,
        transformOrigin: "right bottom",
      },
      "start"
    );

  const boccaTL = gsap
    .timeline({ repeat: -1, yoyo: true, repeatDelay: 1.5 })
    .add("start")
    .to(
      "#elfo-modale #bocca-small",
      {
        morphSVG: "#elfo-modale #bocca-wide",
        duration: 0.2,
      },
      "start"
    );

    return () => {
      mainTL.kill();
      boccaTL.kill();
    }
  }, [])

  return (
    <StyledIllustrazioneElfo>
     <svg id="elfo-modale" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 281.6 250.7">
      <g id="braccio-dex" fill="none" strokeMiterlimit="10" strokeWidth="13">
        <path stroke="#009289" d="M31.6 146.9s9.7 83 75.4 71.2"/>
        <path stroke="#00FAC2" strokeDasharray="23.46" d="M31.6 147.2s10.1 82.6 75.4 70.9"/>
        <path fill="#F2D1DE" d="M26.2 134.7c3.6-1.3 4.2 1.6 4.2 1.6s-.7-3.6 3.2-4.3c2.7-.1 2.3 4.6 2.3 4.6s-.8-13.7 2.9-13.5c4 .2-.8 23.3-.8 23.3l-12.7 2.7c.1-.1-3.5-12.8.9-14.4z"/>
      </g>
      <g id="braccio-six" fill="none" strokeMiterlimit="10" strokeWidth="13">
        <path stroke="#009687" d="M176.9 213.3s57.7 15.3 71.8-64.9"/>elfo-modale-omg
        <path stroke="#00FAC2" strokeDasharray="22" d="M176.7 213.5s61.1 15.2 72.8-70.9"/>
        <path fill="#F2D1DE" d="m255.2 149.2-12.9-1.8s-6.9-22.5-2.9-23.1c3.6-.5 4.1 13.2 4.1 13.2s-.8-4.3 1.9-4.8c4 .2 3.6 3.9 3.6 3.9s.3-3 4-2c4.6 1.3 2.2 14.6 2.2 14.6z"/>
      </g>
      <rect width="74.9" height="31.5" x="104.8" y="200.5" fill="#009289"/>
      <path fill="#002764" d="M253.9 92.2c-11.3-2.3-16.8 9.4-15.8 12.4 1.1 3 2.1 10.7 9.1 10.8 6.9.1 14.4-3.9 14.4-10.8s-.5-10.9-7.7-12.4z"/>
      <path fill="#009289" d="M82.3 125.9s4.4-74 35.2-92.3 46.3-22 64.4-22 49 17.6 59.7 32.7c10.8 15.1 10.2 45 8.2 47.5s-10.8-37.4-33-38c-22.1-.6-24.8 20.2-26.2 25.8-1.3 5.7-3.3 38.7-3.3 38.7l-105 7.6z"/>
      <path fill="#002764" d="M82 125.9s2-35.6 12.6-61.7c0 0 17.3 48.1 19.6 56.2 0 0 20.4-60.8 23.3-64.1 2.9-3.4 23.7 61.2 23.7 61.2s33.7-55.1 35.7-56.4c2-1.3-4 57-4 56.8s-110.9 8-110.9 8z"/>
      <path fill="#F2D1DE" d="M82.6 125.9c-.3 22-7.3 73.8 26.6 90.7 27.3 10.1 54.2 6.8 70.4-12.5 17.3-22.3 15.6-65.9 13.9-86.2-.7-3.3-39.7.3-55.4 1-15.6.7-53.5 3.2-55.5 7z"/>
      <path fill="#F2D1DE" d="M192.5 169s2.4-26.8 12.3-40 15.3-17.6 17.3-18.9c0 0 2.7 18.3-9.3 37.2-11.9 18.9-20.3 21.7-20.3 21.7zM50.7 130.3s12.6 4.4 21.9 21.4 9.3 16.6 12.6 28.1c0 0-19.1-9.4-27.2-24.8-7.9-15.3-7.3-24.7-7.3-24.7z"/>
      <path fill="none" stroke="#10142C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M169.7 135.2s4.6 1.9 5.9 3.8M100.2 138s4.5-2.1 6.8-1.8"/>
      <path id="bocca-small" fill="none" stroke="#10142C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M130.5 186.1s3 4.1 6.5 3.9 3.4-5.2 3.4-5.2"/>
      <path id="bocca-wide" fill="none" stroke="none" d="M115.3,181.3c0,0,6.8,9.9,19.5,9.7c19-0.3,26.3-17.2,26.3-17.2"/>
      <circle cx="104.1" cy="154.2" r="9.2" fill="#FFF"/>
      <circle cx="168.8" cy="154.2" r="9.2" fill="#FFF"/>
      <circle cx="104.6" cy="154" r="2.5" fill="#10142C"/>
      <circle cx="169.3" cy="154" r="2.5" fill="#10142C"/>
      <path fill="#FF0050" stroke="#FF0050" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M177.3 170.6c-6.3-1.4-9.3 5.6-8.7 7.4s1.2 6.4 5 6.5c3.9.1 8-2.3 8-6.5 0-4.1-.3-6.5-4.3-7.4zM101 173.8c2.4.3 5.9 1 4.7 7.7-1.2 6.9-4.1 5.1-6.5 5.1s-4.1-3.7-4.4-6.3c-.4-2.6 3.2-6.9 6.2-6.5z"/>
      <path fill="none" stroke="#10142C" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M132.3 162.4s.5 5.6 3 5.6 3-5.6 3-6.6"/>
      <path fill="none" stroke="#DE8BB5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="m194.5 160.4 13.2-20.8M82.3 171.1l-18.4-17.2"/>
    </svg>
    </StyledIllustrazioneElfo>
  );
};
