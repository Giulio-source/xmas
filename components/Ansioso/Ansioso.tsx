import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import { useEffect, useRef } from "react";
import {
  ansiosoDefault,
  ansiosoSingleClick,
  resetAnsioso,
} from "./ansioso.animations";
import { StyledAnsioso } from "./Ansioso.style";

export const Ansioso = () => {
  const svgRef = useRef(null);
  const tl = useRef<any>({});
  // const singleClick = useRef(true);

  function handleOnClick() {
    tl.current.defaultAnim.pause();
    tl.current.resetAnim
      .invalidate()
      .restart()
      .then(() => {
        tl.current.singleClickAnim
          .invalidate()
          .restart()
          .then(() => {
            tl.current.resetAnim
              .invalidate()
              .restart()
              .then(() => {
                tl.current.defaultAnim.invalidate().restart();
              });
          });
      });
  }

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

    tl.current.defaultAnim = ansiosoDefault();
    tl.current.singleClickAnim = ansiosoSingleClick();
    tl.current.resetAnim = resetAnsioso();
    tl.current.defaultAnim.play();
  }, []);

  return (
    <StyledAnsioso>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // viewBox="0 0 339.5 915.5"
        // viewBox="0 0 340 600"
        viewBox="0 0 340 520"
        ref={svgRef}
      >
        <path
          id="bg"
          fill="#FFF"
          d="M427.9 595.8c0-73.7-120.6-133.4-269.5-133.4S-111 522.1-111 595.8c0 43.5 42.2 82.2 107.4 106.6v334.3h342.3V694.9c54.7-24.4 89.2-59.8 89.2-99.1z"
        />
        <ellipse
          id="ombra"
          cx="159.9"
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
        <g id="elfo-intero" onClick={handleOnClick}>
          <g id="gamba_x5F_dex_3_" strokeMiterlimit="10">
            <path
              fill="none"
              stroke="#5347FF"
              strokeWidth="10"
              d="M127.7 444.3v49.3"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              strokeDasharray="22"
              strokeWidth="10"
              d="M127.6 444.1v49.2"
            />
            <path
              id="Scarpa_dex_2_"
              fill="#002764"
              stroke="#002764"
              strokeWidth="2"
              d="m131.1 493.6-7.9-.5s-1.2 10.4-6.1 11-7.4-1.4-8.7-5.5c-1.3-4-1-7.3-3.5-7.3-3 0-3.1 5.3-1.8 9.8 1.2 4.3 5.5 9.8 12.2 9.8s10.4-6.7 10.4-6.7l.5 6.7h5v-17.3h-.1z"
            />
          </g>
          <g id="braccio_x5F_six_x5F_1_4_">
            <path
              fill="none"
              stroke="#5347FF"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M191 355.4s48.6 20.1 44.7 102.1"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              strokeDasharray="22"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M190.8 355.2s48.6 20.1 44.7 102.1"
            />
            <path
              id="mano_six_7_"
              fill="#F8CEDE"
              d="M230.4 456.6h9.6s3.5 11.2 1.2 11.2-3.5-5.6-3.5-5.6.8 8.9-1.6 8.7-2.4-8.2-2.4-8.2-.6 5.1-3.4 4.8c-2.8-.3.1-10.9.1-10.9z"
            />
          </g>
          <g id="braccio_x5F_dex_x5F_1_2_">
            <path
              fill="none"
              stroke="#5347FF"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M88.5 453.4s-4.3-73.8 37.8-89.6"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              strokeDasharray="22"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M88.4 453.2s-4.3-73.8 37.8-89.6"
            />
            <path
              fill="#F8CEDE"
              d="M93.3 452.8h-9.6S80.2 464 82.5 464s3.5-5.6 3.5-5.6-.8 8.9 1.6 8.7 2.4-8.2 2.4-8.2.6 5.1 3.4 4.8c2.8-.3-.1-10.9-.1-10.9z"
            />
          </g>
          <g id="gamba_x5F_six_3_" strokeMiterlimit="10">
            <path
              fill="none"
              stroke="#5347FF"
              strokeWidth="10"
              d="M191.2 446.1v49.2"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              strokeDasharray="22"
              strokeWidth="10"
              d="M191 445.9v49.2"
            />
            <path
              id="Scarpa_six_2_"
              fill="#002764"
              stroke="#002764"
              strokeWidth="2"
              d="m187.8 494.8 7.9-.5s1.5 9.2 6.1 11c4 1.5 7.1-1.3 8.1-5.5 1.3-5.2 1-7.9 3.5-7.9 3 0 3.7 5.9 2.4 10.4-1.2 4.3-5.5 9.8-12.2 9.8s-10.4-6.7-10.4-6.7l-.5 6.7h-5l.1-17.3z"
            />
          </g>
          <g id="Corpo_3_">
            <path
              fill="#5347FF"
              d="M198.6 343s-2.1 108.3-2.1 102.7c0-.2-73.3 2.7-74.4 0-1.2-2.7-.7-76.4 0-84.4"
            />
            <path
              fill="#002764"
              stroke="#002764"
              strokeMiterlimit="10"
              d="M196.9 417.8v11l-74.9 2-.4-10.6z"
            />
            <path d="M158.6 401.4c-4.5-1-6.7 4.1-6.3 5.3.4 1.3.9 4.6 3.6 4.7 2.8 0 5.8-1.7 5.8-4.7s-.2-4.6-3.1-5.3zM158.7 383.3c-4.5-1-6.7 4.1-6.3 5.3.4 1.3.9 4.6 3.6 4.7s5.8-1.7 5.8-4.7c0-2.9-.2-4.6-3.1-5.3z" />
          </g>
          <g id="cappello_3_">
            <path
              fill="#5347FF"
              d="M100.5 276s4.4-74 35.2-92.3 46.3-22 64.4-22 49 17.6 59.7 32.7c10.7 15.1 12.7 57.9 10.7 60.5s-13.4-50.4-35.6-51c-22.1-.6-24.8 20.2-26.2 25.8-1.3 5.7-3.3 38.7-3.3 38.7L100.5 276z"
            />
            <path
              fill="#002764"
              d="M100.2 276s2-35.6 12.6-61.7c0 0 17.3 48.1 19.6 56.2 0 0 20.4-60.8 23.3-64.1 2.9-3.4 23.7 61.2 23.7 61.2s33.7-55.1 35.7-56.4c2-1.3-4 57-4 56.8 0-.2-110.9 8-110.9 8zM274.6 255c-11.3-2.3-16.8 9.4-15.8 12.4s2.1 10.7 9.1 10.8c6.9.1 14.4-3.9 14.4-10.8s-.5-10.9-7.7-12.4z"
            />
          </g>
          <path
            id="viso"
            fill="#F8CEDE"
            d="M100.8 276c-.3 22-7.3 73.8 26.6 90.7 27.3 10.1 54.2 6.8 70.4-12.5 17.3-22.3 15.6-65.9 13.9-86.2-.7-3.3-39.7.3-55.4 1-15.6.7-53.5 3.2-55.5 7z"
          />
          <path
            id="sopracciglio-six-2"
            fill="none"
            stroke="#111428"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="
	M182.5,282.1c0,0,1.8,1.9,6.8,0"
          />
          <path
            id="sopracciglio-dex-2"
            fill="none"
            stroke="#111428"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="
	M126.8,283.4c0,0-2.9,2.1-6.8,0.6"
          />
          <path
            id="sopracciglio-six-1"
            fill="none"
            stroke="#11142A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="
	M182.2,277.8c0,0,2.6-3.5,6.8,0"
          />
          <path
            id="sopracciglio-dex-1"
            fill="none"
            stroke="#11142A"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="
	M126.4,279c0,0-3.8-3-6.8,0.6"
          />
          <g id="orecchio_dex_7_">
            <path
              fill="#F8CEDE"
              d="M210.7 319.1s2.4-26.8 12.3-40 15.3-17.6 17.3-18.9c0 0 2.7 18.3-9.3 37.2s-20.3 21.7-20.3 21.7z"
            />
            <path
              fill="none"
              stroke="#DE8BB5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="m212.1 310.3 13.2-20.8"
            />
          </g>
          <g id="orecchio_dex_6_">
            <path
              fill="#F8CEDE"
              d="M68.9 280.4s12.6 4.4 21.9 21.4 9.3 16.6 12.6 28.1c0 0-19.1-9.4-27.2-24.8-7.9-15.3-7.3-24.7-7.3-24.7z"
            />
            <path
              fill="none"
              stroke="#DE8BB5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="m99.3 320.5-18.4-17.2"
            />
          </g>
          <g id="facce_3_">
            <circle id="bianco-dex" cx="122.1" cy="303.9" r="9.2" fill="#FFF" />
            <circle id="bianco-six" cx="186.8" cy="303.9" r="9.2" fill="#FFF" />
            <circle
              id="occhio-dex"
              cx="122.6"
              cy="303.7"
              r="2.5"
              fill="#11142A"
            />
            <circle
              id="occhio-six"
              cx="187.3"
              cy="303.7"
              r="2.5"
              fill="#11142A"
            />
            <ellipse
              id="guancia-dex"
              fill="#F8CEDE"
              cx="122.9"
              cy="323.8"
              rx="9"
              ry="9.3"
            />
            <ellipse
              id="guancia-six"
              fill="#F8CEDE"
              cx="187.3"
              cy="323.8"
              rx="9"
              ry="9.3"
            />
            <path
              id="Guancia_10_"
              fill="#F05"
              stroke="#F05"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M195.3 320.3c-6.3-1.4-9.3 5.6-8.7 7.4s1.2 6.4 5 6.5c3.9.1 8-2.3 8-6.5 0-4.1-.3-6.5-4.3-7.4z"
            />
            <path
              id="Guancia_7_"
              fill="#F05"
              stroke="#F05"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M118.9 323.5c2.4.3 5.9 1 4.7 7.7-1.2 6.9-4.1 5.1-6.5 5.1s-4.1-3.7-4.4-6.3c-.3-2.6 3.3-6.9 6.2-6.5z"
            />
            <path
              id="Naso_3_"
              fill="none"
              stroke="#11142A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M150.2 312.1s.5 5.6 3 5.6 3-5.6 3-6.6"
            />
          </g>
          <path
            id="bocca"
            fill="none"
            stroke="#11142A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M157 334.2h-4.7"
          />
          <ellipse
            id="bocca2"
            cx="155.3"
            cy="334.4"
            fill="none"
            stroke="#11142A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            rx="3.8"
            ry="2.9"
          />
          <g id="braccio-six-conserto">
            <path
              fill="none"
              stroke="#5347FF"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M130.8 404.4c52.4 4.5 73.4 2.7 81-5.4 2.3-2.5 3.4-6 2.4-9.3a16.4 16.4 0 0 0-15.7-11.6"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              strokeDasharray="22"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M130.8 404.4c52.4 4.5 73.4 2.7 81-5.4 2.3-2.5 3.4-6 2.4-9.3a16.4 16.4 0 0 0-15.7-11.6"
            />
            <path
              id="mano_six_00000133490671645723739620000009166666353727198337_"
              fill="#F8CEDE"
              d="m132.9 399.5-2.6 9.3s-11.7.4-11.1-1.8c.6-2.2 6.3-1.8 6.3-1.8s-8.8-1.6-7.9-3.8c.9-2.2 8.6-.1 8.6-.1s-4.7-1.9-3.7-4.6c.9-2.8 10.4 2.8 10.4 2.8z"
            />
          </g>
          <g id="braccio-dex-conserto">
            <path
              fill="none"
              stroke="#5347FF"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M187.3 407.3c-52.4 4.5-73.4 2.7-81-5.4a9.7 9.7 0 0 1-2.4-9.3c1.2-4 4.6-12.1 17.7-12.1"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              strokeDasharray="22"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M187.3 407.3c-52.4 4.5-73.4 2.7-81-5.4a9.7 9.7 0 0 1-2.4-9.3c1.2-4 4.6-12.1 17.7-12.1"
            />
            <path
              id="mano_six_00000114062054388517870960000002922429533928407452_"
              fill="#F8CEDE"
              d="m185.2 402.5 2.6 9.3s11.7.4 11.1-1.8c-.6-2.2-6.3-1.8-6.3-1.8s8.8-1.6 7.9-3.8c-.9-2.2-8.6-.1-8.6-.1s4.7-1.9 3.7-4.6c-1-2.8-10.4 2.8-10.4 2.8z"
            />
          </g>
        </g>
        <g id="palla3">
          <path
            fill="#F8CEDE"
            d="M274.8 110.5c-10.2-5.2-9.9-11.5-9.9-11.5h-7.8s.4 6.3-10.5 11.5-18.2 9.7-17.8 19.4 10.5 13.8 19.5 17.2c9 3.4 12.7 13.2 12.7 13.2h.2s3.5-9.8 11.9-13.2 17.9-7.5 18.3-17.2-6.4-14.2-16.6-19.4z"
          />
          <g>
            <path
              fill="#F05"
              d="m258.1 130.6-13 3.4c-3 .8-6-1.5-6-4.7a5 5 0 0 1 6.2-4.8l12.8 3.3v2.8zM262.1 130.6l13 3.4c3 .8 6-1.5 6-4.7a5 5 0 0 0-6.2-4.8l-12.8 3.3v2.8zM261.1 131.6l3.4 13c.8 3-1.5 6-4.7 6a5 5 0 0 1-4.8-6.2l3.3-12.8h2.8zM261.1 127.7l3.4-13c.8-3-1.5-6-4.7-6a5 5 0 0 0-4.8 6.2l3.3 12.8h2.8z"
            />
            <circle cx="259.9" cy="129.3" r="2.8" fill="#5347FF" />
            <path
              fill="none"
              stroke="#5347FF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="m274.1 141.7-28.4-24.9M245.7 141.7l28.4-24.9"
            />
          </g>
          <path
            fill="#FFF6C9"
            d="M264.2 96.4h-6.7c-1 0-1.9.9-1.9 2v.1c0 1.1.9 2 1.9 2h6.8c1 0 1.9-.9 1.9-2v-.1c-.1-1.1-.9-2-2-2z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="m260.4 96.4-.6-94.3"
          />
        </g>
        <g id="palla1">
          <path
            fill="#F05"
            d="M81.9 144.8c-8.3-6.8-8-15.1-8-15.1h-6.3s.3 8.3-8.5 15.1c-8.9 6.8-14.7 12.7-14.4 25.5.3 12.7 8.5 18.2 15.8 22.6 7.3 4.4 10.3 17.3 10.3 17.3h.2s2.8-12.9 9.6-17.3 14.5-9.8 14.8-22.6c.2-12.7-5.2-18.7-13.5-25.5z"
          />
          <path
            fill="#FFF6C9"
            d="M74 125.7h-6.7c-1 0-1.9.9-1.9 2v.1c0 1.1.9 2 1.9 2H74c1 0 1.9-.9 1.9-2v-.1c0-1.1-.9-2-1.9-2z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M70.6 125.7 70-128.6"
          />
          <g>
            <path
              fill="#FFF6C9"
              d="m67.7 170.2-13 3.4c-3 .8-6-1.5-6-4.7a5 5 0 0 1 6.2-4.8l12.8 3.3v2.8zM71.6 170.3l13 3.4c3 .8 6-1.5 6-4.7a5 5 0 0 0-6.2-4.8l-12.8 3.3v2.8zM70.6 171.3l3.4 13c.8 3-1.5 6-4.7 6a5 5 0 0 1-4.8-6.2l3.3-12.8h2.8zM70.6 167.3l3.4-13c.8-3-1.5-6-4.7-6a5 5 0 0 0-4.8 6.2l3.3 12.8h2.8z"
            />
            <circle cx="69.4" cy="168.9" r="2.8" fill="#5347FF" />
            <path
              fill="none"
              stroke="#5347FF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="m83.6 181.4-28.4-24.9M55.2 181.4l28.4-24.9"
            />
          </g>
        </g>
        <g id="palla2">
          <path
            fill="#009488"
            d="M181.4 96.5c-8.3-5.5-8-12.3-8-12.3h-6.3s.3 6.8-8.5 12.3c-8.9 5.5-14.7 10.4-14.4 20.8s8.5 14.8 15.8 18.4c7.3 3.6 10.3 14.1 10.3 14.1h.2s2.8-10.5 9.6-14.1 14.5-8 14.8-18.4c.2-10.4-5.3-15.3-13.5-20.8z"
          />
          <path
            fill="#FFF6C9"
            d="M173.5 80.9h-6.7c-1 0-1.9.7-1.9 1.7v.1c0 .9.9 1.7 1.9 1.7h6.8c1 0 1.9-.7 1.9-1.7v-.1c-.1-1-1-1.7-2-1.7z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="m170.1 80.9-.6-101.4"
          />
          <g>
            <path
              fill="#FFF6C9"
              d="m167.1 117.2-13 2.7c-3 .6-6-1.2-6-3.8 0-2.6 3.1-4.6 6.2-3.9l12.8 2.7v2.3zM171.1 117.3l13 2.7c3 .6 6-1.2 6-3.8 0-2.6-3.1-4.6-6.2-3.9l-12.8 2.7v2.3zM170.1 118.1l3.4 10.6c.8 2.5-1.5 4.9-4.7 4.9s-5.6-2.5-4.8-5.1l3.3-10.4h2.8zM170.1 114.9l3.4-10.6c.8-2.5-1.5-4.9-4.7-4.9s-5.6 2.5-4.8 5.1l3.3 10.4h2.8z"
            />
            <ellipse cx="168.9" cy="116.2" fill="#5347FF" rx="2.8" ry="2.2" />
            <path
              fill="none"
              stroke="#5347FF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M183.1 126.3 154.7 106M154.7 126.3l28.4-20.3"
            />
          </g>
        </g>
      </svg>
    </StyledAnsioso>
  );
};
