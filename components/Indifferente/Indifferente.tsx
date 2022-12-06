import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import { useEffect, useRef } from "react";
import {
  indifferenteDefault,
  indifferenteSingleClick,
  initialStyles,
} from "./indifferente.animations";
import { StyledIndifferente } from "./Indifferente.style";

export const Indifferente = () => {
  const svgRef = useRef(null);
  const tl = useRef<any>({});

  function handleOnClick() {
    tl.current.defaultAnim.pause();
    tl.current.singleClickAnim
      .invalidate()
      .restart()
      .then(() => {
        tl.current.defaultAnim.invalidate().restart();
      });
  }

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);
    initialStyles();
    tl.current.defaultAnim = indifferenteDefault();
    tl.current.singleClickAnim = indifferenteSingleClick();
    tl.current.defaultAnim.play();
  }, []);

  return (
    <StyledIndifferente>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        x="0"
        y="0"
        version="1.1"
        // viewBox="0 0 340 600"
        viewBox="0 0 340 520"
      >
        <g id="braccio_dex">
          <path
            fill="none"
            stroke="#009488"
            strokeMiterlimit="10"
            strokeWidth="10"
            d="M185.6 461.5S63.8 435.8 75.2 347"
          />
          <path
            fill="none"
            stroke="#002764"
            strokeDasharray="22"
            strokeMiterlimit="10"
            strokeWidth="10"
            d="M185.6 461.5S63.8 435.8 75.2 347"
          />
          <path
            id="mano_six_5_"
            fill="#EEADC6"
            d="m80.5 347.5-9.5-1.8s-1.4-11.6.8-11.2c2.3.4 2.4 6.1 2.4 6.1s.8-8.9 3.2-8.2c2.3.7.8 8.5.8 8.5s1.5-4.9 4.3-4.1c2.7.8-2 10.7-2 10.7z"
          />
        </g>
        <g id="Corpo_1_">
          <path
            fill="#009488"
            d="M242.7 404.7s48.9 53.6 42 115.8c0 .2-97.9 15.6-98.2 12.7-8.2-72.8-7.2-62.5-9.3-78.9"
          />
          <path
            fill="#060D17"
            stroke="#060D17"
            strokeMiterlimit="10"
            d="m283.7 491.3 1.3 11-84 18.3-1.7-10.5z"
          />
          <path
            fill="#002764"
            d="M224.6 481.6c-4.9.1-6.1 5.5-5.4 6.7.7 1.2 1.9 4.3 4.8 3.7 2.9-.6 5.6-2.9 5-5.9s-1.3-4.5-4.4-4.5zM220.7 463.9c-4.9.1-6.1 5.5-5.4 6.7.7 1.2 1.9 4.3 4.8 3.7 2.9-.6 5.6-2.9 5-5.9s-1.2-4.5-4.4-4.5z"
          />
        </g>
        <path
          fill="#F8CEDE"
          d="M285.2 121c-10.2-5.2-9.9-11.5-9.9-11.5h-7.8s.4 6.3-10.5 11.5-18.2 9.7-17.8 19.4 10.5 13.8 19.5 17.2c9 3.4 12.7 13.2 12.7 13.2h.2s3.5-9.8 11.9-13.2 17.9-7.5 18.3-17.2-6.4-14.2-16.6-19.4z"
        />
        <g id="fiore_x5F_1_3_">
          <path
            fill="#F05"
            d="m268.5 141.1-13 3.4c-3 .8-6-1.5-6-4.7a5 5 0 0 1 6.2-4.8l12.8 3.3v2.8zM272.5 141.1l13 3.4c3 .8 6-1.5 6-4.7a5 5 0 0 0-6.2-4.8l-12.8 3.3v2.8zM271.5 142.1l3.4 13c.8 3-1.5 6-4.7 6a5 5 0 0 1-4.8-6.2l3.3-12.8h2.8zM271.5 138.2l3.4-13c.8-3-1.5-6-4.7-6a5 5 0 0 0-4.8 6.2l3.3 12.8h2.8z"
          />
          <circle cx="270.3" cy="139.8" r="2.8" fill="#5347FF" />
          <path
            fill="none"
            stroke="#5347FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="m284.5 152.2-28.4-24.9M256.1 152.2l28.4-24.9"
          />
        </g>
        <path
          fill="#FFF6C9"
          d="M274.6 106.9h-6.7c-1 0-1.9.9-1.9 2v.1c0 1.1.9 2 1.9 2h6.8c1 0 1.9-.9 1.9-2v-.1c-.1-1.1-.9-2-2-2z"
        />
        <path
          fill="none"
          stroke="#003580"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="m270.8 106.9-.6-108"
        />

        <path
          id="BG_x5F_2_1_"
          fill="#FFF"
          d="M427.6 605.2c0-73.7-120.6-133.4-269.5-133.4s-269.5 59.7-269.5 133.4c0 43.5 42.2 82.2 107.4 106.6v334.3h342.3V704.4c54.9-24.5 89.3-59.8 89.3-99.2z"
        />
        <ellipse
          cx="218.4"
          cy="512.9"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          opacity=".5"
          rx="25.2"
          ry="3.4"
        />
        <g id="palla1">
          <path
            fill="#F05"
            d="M89.9 267.9c-8.3-6.8-8-15.1-8-15.1h-6.3s.3 8.3-8.5 15.1c-8.9 6.8-14.7 12.7-14.4 25.5.3 12.7 8.5 18.2 15.8 22.6s10.3 17.3 10.3 17.3h.2s2.8-12.9 9.6-17.3 14.5-9.8 14.8-22.6c.3-12.7-5.2-18.7-13.5-25.5z"
          />
          <path
            fill="#FFF6C9"
            d="M82.1 248.8h-6.7c-1 0-1.9.9-1.9 2v.1c0 1.1.9 2 1.9 2h6.8c1 0 1.9-.9 1.9-2v-.1c-.1-1.1-1-2-2-2z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M78.7 248.8 78.1-5.5"
          />
          <g id="fiore_x5F_1_2_">
            <path
              fill="#FFF6C9"
              d="m75.7 293.4-13 3.4c-3 .8-6-1.5-6-4.7a5 5 0 0 1 6.2-4.8l12.8 3.3v2.8zM79.6 293.4l13 3.4c3 .8 6-1.5 6-4.7a5 5 0 0 0-6.2-4.8l-12.8 3.3v2.8zM78.6 294.4l3.4 13c.8 3-1.5 6-4.7 6a5 5 0 0 1-4.8-6.2l3.3-12.8h2.8zM78.7 290.5l3.4-13c.8-3-1.5-6-4.7-6a5 5 0 0 0-4.8 6.2l3.3 12.8h2.8z"
            />
            <circle cx="77.5" cy="292" r="2.8" fill="#5347FF" />
            <path
              fill="none"
              stroke="#5347FF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="m91.7 304.5-28.4-24.9M63.3 304.5l28.4-24.9"
            />
          </g>
        </g>
        <g id="palla2">
          <path
            fill="#009488"
            d="M160.7 115.9c-8.3-5.5-8-12.3-8-12.3h-6.3s.3 6.8-8.5 12.3c-8.9 5.5-14.7 10.4-14.4 20.8.3 10.4 8.5 14.8 15.8 18.4 7.3 3.6 10.3 14.1 10.3 14.1h.2s2.8-10.5 9.6-14.1 14.5-8 14.8-18.4-5.2-15.3-13.5-20.8z"
          />
          <path
            fill="#FFF6C9"
            d="M152.9 100.3h-6.7c-1 0-1.9.7-1.9 1.7v.1c0 .9.9 1.7 1.9 1.7h6.8c1 0 1.9-.7 1.9-1.7v-.1c-.1-1-1-1.7-2-1.7z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="m149.5 100.3-.6-101.4"
          />
          <g id="fiore_x5F_1_4_">
            <path
              fill="#FFF6C9"
              d="m146.5 136.6-13 2.7c-3 .6-6-1.2-6-3.8 0-2.6 3.1-4.6 6.2-3.9l12.8 2.7v2.3zM150.4 136.7l13 2.7c3 .6 6-1.2 6-3.8 0-2.6-3.1-4.6-6.2-3.9l-12.8 2.7v2.3zM149.4 137.5l3.4 10.6c.8 2.5-1.5 4.9-4.7 4.9s-5.6-2.5-4.8-5.1l3.3-10.4h2.8zM149.5 134.3l3.4-10.6c.8-2.5-1.5-4.9-4.7-4.9s-5.6 2.5-4.8 5.1l3.3 10.4h2.8z"
            />
            <ellipse cx="148.3" cy="135.5" fill="#5347FF" rx="2.8" ry="2.2" />
            <path
              fill="none"
              stroke="#5347FF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="m162.5 145.7-28.4-20.3M134.1 145.7l28.4-20.3"
            />
          </g>
        </g>
        <g id="faccia_cliccabile" onClick={handleOnClick}>
          <g id="orecchio_dex_3_">
            <path
              fill="#F8CEDE"
              d="M244.3 402.5s2.4-26.8 12.3-40a85.5 85.5 0 0 1 17.3-18.9s2.7 18.3-9.3 37.2c-12 18.8-20.3 21.7-20.3 21.7z"
            />
            <path
              fill="none"
              stroke="#DE8BB5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="m245.7 393.7 13.2-20.8"
            />
          </g>
          <g id="orecchio_dex_2_">
            <path
              fill="#F8CEDE"
              d="M102.5 363.7s12.6 4.4 21.9 21.4 9.3 16.6 12.6 28.1c0 0-19.1-9.4-27.2-24.8-8-15.2-7.3-24.7-7.3-24.7z"
            />
            <path
              fill="none"
              stroke="#DE8BB5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="m132.8 403.9-18.3-17.2"
            />
          </g>

          <g id="cappello_1_">
            <path
              fill="#002764"
              d="M308.1 338.4c-11.3-2.3-16.8 9.4-15.8 12.4s2.1 10.7 9.1 10.8 14.4-3.9 14.4-10.8c.1-7-.4-10.9-7.7-12.4z"
            />
            <path
              fill="#009488"
              d="M134.1 359.3s4.4-74 35.2-92.3 46.3-22 64.4-22 49 17.6 59.7 32.7 12.7 57.9 10.7 60.5-13.4-50.4-35.6-51-24.8 20.2-26.2 25.8c-1.3 5.7-3.3 38.7-3.3 38.7l-104.9 7.6z"
            />
            <path
              fill="#002764"
              d="M133.7 359.3s2-35.6 12.6-61.7c0 0 17.3 48.1 19.6 56.2 0 0 20.4-60.8 23.3-64.1 2.9-3.4 23.7 61.2 23.7 61.2s33.7-55.1 35.7-56.4-4 57-4 56.8-110.9 8-110.9 8z"
            />
          </g>
          <path
            fill="#F8CEDE"
            d="M134.4 359.3c-.3 22-7.3 73.8 26.6 90.7 27.3 10.1 54.2 6.8 70.4-12.5 17.3-22.3 15.6-65.9 13.9-86.2-.7-3.3-39.7.3-55.4 1s-53.5 3.3-55.5 7z"
          />

          <g id="facce_1_">
            <path
              fill="#F8CEDE"
              d="M156.5 416.4c5 0 9-4.2 9-9.3 0-5.1-4-9.3-9-9.3s-9 4.2-9 9.3a9 9 0 0 0 9 9.3zM220.9 416.4c5 0 9-4.2 9-9.3 0-5.1-4-9.3-9-9.3s-9 4.2-9 9.3a9 9 0 0 0 9 9.3z"
            />
            <path
              id="Naso_1_"
              fill="none"
              stroke="#11142A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M183.8 395.5s.5 5.6 3 5.6 3-5.6 3-6.6"
            />
            <path
              fill="none"
              stroke="#11142A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M150.2 389.6s5.5-6 12.3 0M214.2 389.8s5.5-6 12.3 0"
            />
            <path
              id="guancia"
              fill="#FD335A"
              stroke="#FD335A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M230.5 404.2c-6.4-1.4-9.5 5.8-9 7.6.6 1.8 1.2 6.5 5.2 6.6s8.1-2.4 8.1-6.6-.3-6.7-4.3-7.6h0z"
            />
            <path
              id="guancia-2"
              fill="#FD335A"
              stroke="#FD335A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M152.5 407.3c2.5.3 6.1 1 4.9 7.9-1.2 7-4.2 5.2-6.7 5.2-2.4 0-4.2-3.8-4.5-6.4-.3-2.7 3.4-7 6.3-6.7z"
            />
            <path
              id="bocca"
              fill="none"
              stroke="#111428"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M182.6 419.9s3.1 4.2 6.7 4"
            />
            <path
              id="bocca-neutra"
              fill="none"
              stroke="#111427"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="
		M184.1,422.1c0,0,4.8,2.2,7.8,0.2"
            />
            <path
              id="bocca-smile"
              fill="none"
              stroke="#11142A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M182.6 419.9s3.1 4.2 6.7 4c3.6-.2 3.5-5.3 3.5-5.3"
            />
            <circle cx="155.8" cy="387.4" r="9.3" fill="#FFF" />
            <circle cx="220.8" cy="387.4" r="9.3" fill="#FFF" />
            <circle
              id="occhio_dex"
              cx="151.9"
              cy="385.3"
              r="2.5"
              fill="#111428"
            />
            <circle
              id="occhio_six"
              cx="217"
              cy="385.3"
              r="2.5"
              fill="#111428"
            />
            <path
              id="palpebre"
              fill="#F8CEDE"
              d="M141.5 377.2h29.9v6.8h-29.9v-6.8zm68.4 0h29.9v6.8h-29.9v-6.8z"
            />
            <path
              id="sopracciglio_six"
              fill="none"
              stroke="#11142A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M157.5 366.5s-4.2-4.1-7 1.2"
            />
            <path
              id="sopracciglio_dex"
              fill="none"
              stroke="#11142A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M217.5 371.9s4.2-4 7 1.2"
            />
          </g>
        </g>
        <g id="braccio_six">
          <path
            className="spalla"
            fill="none"
            stroke="#009488"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="10"
            d="M211.5,451.8c-12,34.1-16.1,60.8,13.1,54c28.7-10.4,30.7-82.1,28.3-98.5"
          />
          <path
            id="mano_six_3_"
            fill="#EEADC6"
            d="m215.2 455.8-8.9-3.7s1-11.2 3.1-10.4c2.1.9 1.1 6.3 1.1 6.3s2.7-8.2 4.8-7.1-.9 8.2-.9 8.2 2.5-4.3 5-3c2.4 1.4-4.2 9.7-4.2 9.7z"
          />
          <path
            fill="none"
            stroke="#002764"
            strokeDashoffset="-10"
            strokeDasharray="20"
            strokeMiterlimit="10"
            strokeWidth="10"
            d="M211.5,451.8c-12,34.1-16.1,60.8,13.1,54c22.9-8.3,28.8-55.6,29-82.7"
          />
        </g>
      </svg>
    </StyledIndifferente>
  );
};
