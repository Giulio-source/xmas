import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import { useEffect, useRef } from "react";
import {
  feliceDefault,
  feliceSingleClick,
  pallineDiNatale,
  resetElfo,
} from "./felice.animations";
import { StyledFelice } from "./Felice.style";

export const Felice = () => {
  const svgRef = useRef(null);
  const tl = useRef<any>({});
  const singleClick = useRef(true);

  function handleOnClick() {
    tl.current.defaultAnim.pause();
    tl.current.singleClickAnim
      .invalidate()
      .restart()
      .then(() => {
        tl.current.resetAnim
          .invalidate()
          .restart()
          .then(() => tl.current.defaultAnim.restart());
      });
  }

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

    tl.current.defaultAnim = feliceDefault();
    tl.current.pallineAnim = pallineDiNatale();
    tl.current.singleClickAnim = feliceSingleClick();
    tl.current.resetAnim = resetElfo();
    tl.current.defaultAnim.play();
  }, []);

  return (
    <StyledFelice>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        id="felice"
        x="0"
        y="0"
        version="1.1"
        // viewBox="0 0 340 580"
        viewBox="0 0 340 520"
      >
        <g id="palla2">
          <path
            fill="#F8CEDE"
            d="M284.9 121c-10.2-5.2-9.9-11.5-9.9-11.5h-7.8s.4 6.3-10.5 11.5-18.2 9.7-17.8 19.4c.4 9.7 10.5 13.8 19.5 17.2 9 3.4 12.7 13.2 12.7 13.2h.2s3.5-9.8 11.9-13.2c8.4-3.4 17.9-7.5 18.3-17.2.3-9.7-6.4-14.2-16.6-19.4z"
          />
          <g id="fiore_x5F_1_1_">
            <path
              fill="#F05"
              d="m268.2 141.1-13 3.4c-3 .8-6-1.5-6-4.7a5 5 0 0 1 6.2-4.8l12.8 3.3v2.8zM272.1 141.1l13 3.4c3 .8 6-1.5 6-4.7a5 5 0 0 0-6.2-4.8l-12.8 3.3v2.8zM271.1 142.1l3.4 13c.8 3-1.5 6-4.7 6a5 5 0 0 1-4.8-6.2l3.3-12.8h2.8zM271.2 138.2l3.4-13c.8-3-1.5-6-4.7-6a5 5 0 0 0-4.8 6.2l3.3 12.8h2.8z"
            />
            <circle cx="270" cy="139.8" r="2.8" fill="#5347FF" />
            <path
              fill="none"
              stroke="#5347FF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="m284.2 152.2-28.4-24.9M255.8 152.2l28.4-24.9"
            />
          </g>
          <path
            fill="#FFF6C9"
            d="M274.3 106.9h-6.7c-1 0-1.9.9-1.9 2v.1c0 1.1.9 2 1.9 2h6.8c1 0 1.9-.9 1.9-2v-.1c-.1-1.1-.9-2-2-2z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="m270.5 106.9-.6-150.3"
          />
        </g>
        <path
          id="BG_x5F_2"
          fill="#FFF"
          d="M427.3 605.2c0-73.7-120.6-133.4-269.5-133.4s-269.5 59.7-269.5 133.4c0 43.5 42.2 82.2 107.4 106.6v334.3H338V704.4c54.9-24.5 89.3-59.8 89.3-99.2z"
        />
        <ellipse
          cx="158.5"
          cy="512.3"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          opacity=".5"
          rx="65.3"
          ry="3.4"
        />
        <g id="gruppo" onClick={handleOnClick}>
          <g id="braccio-six-basso">
            <path
              fill="none"
              className="braccio green"
              stroke="#009488"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M235.9,452.9c1.3-10.8,2.7-35.7-9.9-63c-10.2-22.1-24.9-35.7-33.3-42.3"
            />
            <path
              fill="none"
              className="braccio mint"
              stroke="#6CF7C6"
              strokeDasharray="22"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M235.9,452.9c1.3-10.8,2.7-35.7-9.9-63 c-10.2-22.1-24.9-35.7-33.3-42.3"
            />
            <path
              fill="none"
              className="ref"
              stroke="none"
              d="M235.9,452.9c1.3-10.8,2.7-35.7-9.9-63 c-10.2-22.1-24.9-35.7-33.3-42.3"
            />
            <path
              fill="none"
              className="braccio-concavo"
              stroke="none"
              d="M235.9,452.9c-2-0.7-43.5-15.6-51.5-56c-4.7-23.9,4.9-43.2,8.3-49.3"
            />
            <path
              className="mano"
              fill="#F8CEDE"
              d="M230.6 452h9.6s3.5 11.2 1.2 11.2-3.5-5.6-3.5-5.6.8 8.9-1.6 8.7-2.4-8.2-2.4-8.2-.6 5.1-3.4 4.8c-2.7-.3.1-10.9.1-10.9z"
            />
          </g>
          <g id="braccio-dex-basso">
            <path
              fill="none"
              className="braccio green"
              stroke="#009488"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M127.1,363.5c0,0-41.2,12.3-38.3,90.4"
            />
            <path
              fill="none"
              className="ref"
              stroke="none"
              d="M127.1,363.5c0,0-41.2,12.3-38.3,90.4"
            />
            <path
              fill="none"
              className="braccio mint"
              stroke="#6CF7C6"
              strokeDasharray="22"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M127.1,363.5c0,0-41.2,12.3-38.3,90.4"
            />
            <path
              fill="none"
              className="braccio-concavo"
              stroke="none"
              d="M127.1,363.5c0,0,32.2,47.5-38.7,90.4"
            />
            <path
              fill="#F8CEDE"
              className="mano"
              d="M93.6 453.2H84s-3.5 11.2-1.2 11.2 3.5-5.6 3.5-5.6-.8 8.9 1.6 8.7 2.4-8.2 2.4-8.2.6 5.1 3.4 4.8c2.7-.3-.1-10.9-.1-10.9z"
            />
          </g>
          <g id="gamba_x5F_dex_1_" strokeMiterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              strokeWidth="10"
              d="M127.4 441.2v49.2"
            />
            <path
              fill="none"
              stroke="#6CF7C6"
              strokeDasharray="22"
              strokeWidth="10"
              d="M127.2 440.9v49.2"
            />
          </g>
          <g id="gamba_x5F_six_1_" strokeMiterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              strokeWidth="10"
              d="M190.8 442.9v49.3"
            />
            <path
              fill="none"
              stroke="#6CF7C6"
              strokeDasharray="22"
              strokeWidth="10"
              d="M190.7 442.7v49.2"
            />
          </g>
          <g id="Corpo_4_">
            <path
              fill="#009488"
              d="M198.3 339.8s-2.1 108.3-2.1 102.7c0-.2-73.3 2.7-74.4 0-1.2-2.7-.7-76.4 0-84.4"
            />
            <path
              fill="#002764"
              stroke="#002764"
              strokeMiterlimit="10"
              d="M196.5 414.6v11l-74.8 2.1-.4-10.7z"
            />
            <path
              fill="#002764"
              d="M158.3 398.3c-4.5-1-6.7 4.1-6.3 5.3.4 1.3.9 4.6 3.6 4.7 2.8 0 5.8-1.7 5.8-4.7s-.2-4.7-3.1-5.3zM158.4 380.2c-4.5-1-6.7 4.1-6.3 5.3.4 1.3.9 4.6 3.6 4.7s5.8-1.7 5.8-4.7c-.1-3-.3-4.7-3.1-5.3z"
            />
          </g>
          <g id="faccia-e-cappello">
            <g id="cappello">
              <path
                fill="#002764"
                d="M274.3 251.8c-11.3-2.3-16.8 9.4-15.8 12.4s2.1 10.7 9.1 10.8c6.9.1 14.4-3.9 14.4-10.8s-.5-10.9-7.7-12.4z"
              />
              <path
                fill="#009488"
                d="M100.2 272.8s4.4-74 35.2-92.3 46.3-22 64.4-22 49 17.6 59.7 32.7c10.7 15.1 12.7 57.9 10.7 60.5s-13.4-50.4-35.6-51c-22.1-.6-24.8 20.2-26.2 25.8-1.3 5.7-3.3 38.7-3.3 38.7l-104.9 7.6z"
              />

              <path
                fill="#002764"
                d="M99.8 272.8s2-35.6 12.6-61.7c0 0 17.3 48.1 19.6 56.2 0 0 20.4-60.8 23.3-64.1 2.9-3.4 23.7 61.2 23.7 61.2s33.7-55.1 35.7-56.4c2-1.3-4 57-4 56.8s-110.9 8-110.9 8z"
              />
            </g>
            <path
              fill="#F8CEDE"
              d="M100.5 272.8c-.3 22-7.3 73.8 26.6 90.7 27.3 10.1 54.2 6.8 70.4-12.5 17.3-22.3 15.6-65.9 13.9-86.2-.7-3.3-39.7.3-55.4 1-15.6.7-53.5 3.2-55.5 7z"
            />
            <g id="orecchio_dex">
              <path
                fill="#F8CEDE"
                d="M210.4 315.9s2.4-26.8 12.3-40A85.5 85.5 0 0 1 240 257s2.7 18.3-9.3 37.2-20.3 21.7-20.3 21.7z"
              />
              <path
                fill="none"
                stroke="#DE8BB5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="m211.8 307.1 13.2-20.8"
              />
            </g>
            <g id="orecchio_dex_1_">
              <path
                fill="#F8CEDE"
                d="M68.6 277.2s12.6 4.4 21.9 21.4c9.3 17 9.3 16.6 12.6 28.1 0 0-19.1-9.4-27.2-24.8-7.9-15.2-7.3-24.7-7.3-24.7z"
              />
              <path
                fill="none"
                stroke="#DE8BB5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="m99 317.3-18.4-17.2"
              />
            </g>
            <g id="facce">
              <g id="sopracciglia-2">
                <path
                  className="six"
                  fill="none"
                  stroke="#111428"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M117.9,284.6c0,0,2.6-3.7,6.8-0.8"
                />
                <path
                  className="dex"
                  fill="none"
                  stroke="#111428"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M182.9,281.9c0,0,4.1-2.5,7,0.6"
                />
              </g>
              <g id="sopracciglia">
                <path
                  className="dex"
                  fill="none"
                  stroke="#11142A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M187.4,281.7c0,0,4.6,1.9,5.9,3.8"
                />
                <path
                  className="six"
                  fill="none"
                  stroke="#11142A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M117.9,284.5c0,0,4.5-2.1,6.8-1.8"
                />
              </g>
              <path
                id="bocca_small"
                fill="none"
                stroke="#111428"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
			M151.2,332c0,0,0.5,0.2,2,0.2c1,0,1.5-0.2,1.5-0.2"
              />
              <path
                id="bocca"
                fill="none"
                stroke="#11142A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M158,331.3c0,0,0.1,5-3.4,5.2s-6.5-3.9-6.5-3.9"
              />
              <circle
                className="bianco-occhio"
                cx="121.8"
                cy="300.7"
                r="9.2"
                fill="#FFF"
              />
              <circle
                className="bianco-occhio"
                cx="186.5"
                cy="300.7"
                r="9.2"
                fill="#FFF"
              />
              <circle
                id="occhio-dex"
                cx="122.3"
                cy="300.5"
                r="2.5"
                fill="#11142A"
              />
              <circle
                id="occhio-six"
                cx="187"
                cy="300.5"
                r="2.5"
                fill="#11142A"
              />
              <path
                id="bocca_2"
                fill="none"
                stroke="#11142A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="
              M151.9,327.7c-3.5,0.6-4.7,1.9-4.7,3.2c0,1,1.6,2.1,4.5,2.8c-4.5,1.4-4.8,2.8-4.6,3.9c0.3,1,1.3,1.2,5.6,0.8"
              />
              <path
                fill="#F8CEDE"
                d="M122.6 329.9c5 0 9-4.2 9-9.3 0-5.1-4-9.3-9-9.3s-9 4.2-9 9.3a9 9 0 0 0 9 9.3zM187 329.9c5 0 9-4.2 9-9.3 0-5.1-4-9.3-9-9.3s-9 4.2-9 9.3a9 9 0 0 0 9 9.3z"
              />
              <path
                id="Guancia_9_"
                fill="#F05"
                stroke="#F05"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M195 317.2c-6.3-1.4-9.3 5.6-8.7 7.4.6 1.8 1.2 6.4 5 6.5 3.9.1 8-2.3 8-6.5s-.3-6.5-4.3-7.4z"
              />
              <path
                id="Guancia_8_"
                fill="#F05"
                stroke="#F05"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M118.6 320.3c2.4.3 5.9 1 4.7 7.7-1.2 6.9-4.1 5.1-6.5 5.1s-4.1-3.7-4.4-6.3c-.3-2.6 3.3-6.9 6.2-6.5z"
              />
              <path
                id="Naso_4_"
                fill="none"
                stroke="#11142A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M149.9 308.9s.5 5.6 3 5.6 3-5.6 3-6.6"
              />
              <path
                id="occhio-dex-2"
                fill="none"
                stroke="#11142A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
			M116.3,303c0,0,5.5-6,12.3,0"
              />

              <path
                id="occhio-six-2"
                fill="none"
                stroke="#11142A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
			M180.3,303.3c0,0,5.5-6,12.3,0"
              />
            </g>
          </g>
          <g id="bacio">
            <path
              fill="#F05"
              d="m161.4 321.6 37.8 11.1s-3.1-12.6-8.2-13.4c-5.1-.8-9.4 3.4-9.4 3.4s-1.6-6.6-5.4-7.5c-3.9-.9-14.8 6.4-14.8 6.4z"
            />
            <path
              fill="#FF003E"
              d="M161.4 321.6s4.3 13.8 14.9 17.1c10.6 3.3 22.8-6 22.8-6l-37.7-11.1z"
            />
          </g>
        </g>
        <path
          id="Scarpa_dex_4_"
          fill="#002764"
          stroke="#002764"
          strokeWidth="2"
          d="m130.8 490.4-7.9-.5s-1.2 10.4-6.1 11c-4.9.6-7.4-1.4-8.7-5.5-1.3-4-1-7.3-3.5-7.3-3 0-3.1 5.3-1.8 9.8 1.2 4.3 5.5 9.8 12.2 9.8 6.7 0 10.4-6.7 10.4-6.7l.5 6.7h5v-17.3z"
        />
        <path
          id="Scarpa_six_4_"
          fill="#002764"
          stroke="#002764"
          strokeWidth="2"
          d="m187.5 491.6 7.9-.5s1.5 9.2 6.1 11c4 1.5 7.1-1.3 8.1-5.5 1.3-5.2 1-7.9 3.5-7.9 3 0 3.7 5.9 2.4 10.4-1.2 4.3-5.5 9.8-12.2 9.8-6.7 0-10.4-6.7-10.4-6.7l-.5 6.7h-5v-17.3z"
        />
        <g id="palla1">
          <path
            fill="#F05"
            d="M76.8 146.8c-8.3-6.8-8-15.1-8-15.1h-6.3s.3 8.3-8.5 15.1c-8.9 6.8-14.7 12.7-14.4 25.5.3 12.7 8.5 18.2 15.8 22.6 7.3 4.4 10.3 17.3 10.3 17.3h.2s2.8-12.9 9.6-17.3 14.5-9.8 14.8-22.6c.2-12.8-5.2-18.7-13.5-25.5z"
          />
          <path
            fill="#FFF6C9"
            d="M68.9 127.7h-6.7c-1 0-1.9.9-1.9 2v.1c0 1.1.9 2 1.9 2H69c1 0 1.9-.9 1.9-2v-.1c-.1-1.1-1-2-2-2z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M65.5 127.7 64.9 3.4"
          />
          <g id="fiore_x5F_1">
            <path
              fill="#FFF6C9"
              d="m62.6 172.2-13 3.4c-3 .8-6-1.5-6-4.7a5 5 0 0 1 6.2-4.8l12.8 3.3v2.8zM66.5 172.3l13 3.4c3 .8 6-1.5 6-4.7a5 5 0 0 0-6.2-4.8l-12.8 3.3v2.8zM65.5 173.3l3.4 13c.8 3-1.5 6-4.7 6a5 5 0 0 1-4.8-6.2l3.3-12.8h2.8zM65.5 169.3l3.4-13c.8-3-1.5-6-4.7-6a5 5 0 0 0-4.8 6.2l3.3 12.8h2.8z"
            />
            <circle cx="64.3" cy="170.9" r="2.8" fill="#5347FF" />
            <path
              fill="none"
              stroke="#5347FF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="m78.5 183.4-28.4-25M50.1 183.4l28.4-25"
            />
          </g>
        </g>
        <g id="vischio">
          <path
            fill="none"
            stroke="#002764"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M119 78.4s43.6 20 80.9 24.4"
          />
          <path
            fill="none"
            stroke="#002764"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M170.4 84.6s-11.3 6.8-23.9 4.8M167.4 96a55.8 55.8 0 0 0 16.7 18.2M167.4 115s-5.9-10.4.2-18.5"
          />
          <path
            id="Guancia_2_"
            fill="#F05"
            stroke="#F05"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M213.3 109.6c4.7-5.5-.7-12.2-2.8-12.6-2.1-.3-7-2.2-9.1 1.6s-1.9 9.2 2.2 11.3c4.2 2.3 6.7 3.2 9.7-.3z"
          />
          <path
            id="Guancia_3_"
            fill="#F05"
            stroke="#F05"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M193.9 126.7c6.3-3.6 3.5-11.8 1.6-12.8-1.8-1-5.8-4.4-9.1-1.5s-4.9 8-1.7 11.4c3.2 3.5 5.2 5.2 9.2 2.9z"
          />
          <path
            id="Guancia_4_"
            fill="#F05"
            stroke="#F05"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M171 127.3c5.8-1.9 4.8-9.1 3.5-10.2-1.3-1.2-4.1-4.6-7.2-2.8-3.1 1.8-5.4 5.8-3.3 9.1s3.4 5.2 7 3.9z"
          />
          <path
            id="Guancia_5_"
            fill="#F05"
            stroke="#F05"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M180.3 88.7c6.3-3.6 3.5-11.8 1.6-12.8s-5.8-4.4-9.1-1.5c-3.2 2.9-4.9 8-1.7 11.4 3.1 3.4 5.2 5.2 9.2 2.9z"
          />
          <path
            fill="#009488"
            d="M177.3 97.1s12.2-6.8 10.3-16.2c0 0 9.9 5 15.1-3.9 0 0 9.3 8.4 15.5 4.7 0 0-13.6 4.7-11 12.7 0 0-11-4-11.7 4.9 0 0-4.6-7-18.2-2.2zM143.9 88.3s6.1 10.3 14.9 7.2c0 0-4.9 9.7 3.4 13.3 0 0-8 9.6-4.7 14.8 0 0-4.2-11.7-11.6-8.4 0 0 4-10.6-4.4-10 0 .1 6.7-5.1 2.4-16.9z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="m152.2 89.7-.6-109.1"
          />
        </g>

        <path
          id="cuore2"
          fill="#F05"
          d="m296.7 321.9.8-1.3c1.4-1.8 3.2-3 5.5-3.3 2.7-.3 5 .6 6.8 2.6 1.4 1.5 2 3.3 2 5.4 0 2.6-.9 4.8-2.2 7a21 21 0 0 1-3.9 4.5 92.8 92.8 0 0 1-9.4 7.7l-7.9-6.7c-1.5-1.4-3-2.8-4.2-4.4a15.4 15.4 0 0 1-2.8-6.1c-.4-2.1-.2-4.2.9-6.1a7.7 7.7 0 0 1 6.2-3.9c2.7-.2 4.8.8 6.6 2.8.8.6 1.2 1.2 1.6 1.8z"
        />
        <path
          id="cuore1"
          fill="#F05"
          d="m47.5 235.5.8-1.3c1.4-1.8 3.2-3 5.5-3.3 2.7-.3 5 .6 6.8 2.6 1.4 1.5 2 3.3 2 5.4 0 2.6-.9 4.8-2.2 7a21 21 0 0 1-3.9 4.5 92.8 92.8 0 0 1-9.4 7.7l-7.9-6.7c-1.5-1.4-3-2.8-4.2-4.4a15.4 15.4 0 0 1-2.8-6.1c-.4-2.1-.2-4.2.9-6.1a7.7 7.7 0 0 1 6.2-3.9c2.7-.2 4.8.8 6.6 2.8.8.5 1.2 1.2 1.6 1.8z"
        />
      </svg>
    </StyledFelice>
  );
};
