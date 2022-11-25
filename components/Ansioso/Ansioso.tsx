import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import { useEffect, useRef } from "react";
import { ansiosoDefault } from "./ansioso.animations";
import { StyledAnsioso } from "./Ansioso.style";

export const Ansioso = () => {
  const svgRef = useRef(null);
  const tl = useRef<any>({});
  // const singleClick = useRef(true);

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

    tl.current.defaultAnim = ansiosoDefault();
    // tl.current.pallineAnim = pallineDiNatale();
    // tl.current.singleClickAnim = feliceSingleClick();
    // tl.current.resetAnim = resetElfo();
    tl.current.defaultAnim.play();
  }, []);

  return (
    <StyledAnsioso>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // viewBox="0 0 339.5 915.5"
        viewBox="0 0 339.5 600"
        ref={svgRef}
      >
        <path fill="#43EFBB" d="M-.5.1h340v1032.6H-.5z" />
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
        <g id="Neve_5_" fill="#FFF" opacity=".5">
          <path d="M270.5 143.8c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM320.1 164.6c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM38.1 185.3c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9 1.8 0 3.8-1 3.8-2.9s-.1-2.9-2-3.3zM96.5 139.2c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM323.3 295c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.2-2.9-2-3.3zM284.5 378.5c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM298.1 328.2c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM72.9 237.3c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.2-2.9-2-3.3zM27.9 433.1c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM227.6 115.5c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4c0-1.5-.1-2.4-1.7-2.7zM277.5 96c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4c-.1-1.5-.2-2.4-1.7-2.7zM25.2 129.6c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.2-2.4-1.7-2.7zM176.8 124.4c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4c-.1-1.5-.2-2.4-1.7-2.7zM225.1 234.1c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.2-2.4-1.7-2.7zM256.3 345.7c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.1-2.4-1.7-2.7zM303.5 225c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.1-2.3-1.7-2.7zM65.8 192c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.2-2.3-1.7-2.7zM22.6 250.9c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.1-2.3-1.7-2.7zM291.5 277.1c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM76 417.3c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.2-2.9-2-3.3zM38.5 305.5c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9 1.8 0 3.8-1 3.8-2.9 0-1.8-.1-2.9-2-3.3zM130.3 95.4c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9 1.8 0 3.8-1 3.8-2.9s-.1-2.9-2-3.3zM260.1 429.9c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9 1.8 0 3.8-1 3.8-2.9s-.2-2.9-2-3.3zM320.1 413.7c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM298.5 448.4c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM71.1 360c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM38.5 354.4c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9 1.8 0 3.8-1 3.8-2.9s-.1-2.9-2-3.3z" />
        </g>
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
          id="sopracciglia_00000161604010669950067670000010984130064246410889_"
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M182.2 277.8s2.6-3.5 6.8 0m-62.6 1.2s-3.8-3-6.8.6"
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
        <g id="palla3_00000072247628281172191410000002514316008260975246_">
          <path
            fill="#F8CEDE"
            d="M274.8 110.5c-10.2-5.2-9.9-11.5-9.9-11.5h-7.8s.4 6.3-10.5 11.5-18.2 9.7-17.8 19.4 10.5 13.8 19.5 17.2c9 3.4 12.7 13.2 12.7 13.2h.2s3.5-9.8 11.9-13.2 17.9-7.5 18.3-17.2-6.4-14.2-16.6-19.4z"
          />
          <g id="fiore_x5F_1_00000008122654561130254000000007464364449878058158_">
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
        <g id="palla1_00000097480054335190640480000016587025789635407244_">
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
          <g id="fiore_x5F_1_00000170262435626706833100000007852553967236660376_">
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
        <g id="palla2_00000045599983772305653770000001294867625005027970_">
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
          <g id="fiore_x5F_1_00000131355601476782554000000005850773989523354786_">
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
        <g
          id="rami2"
          fill="#002764"
          stroke="#002764"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        >
          <path
            id="pino_x5F_1_5_"
            d="M178.2 15.6a43 43 0 0 0-16.2 6c4.8 1.5 9.6 3.2 14.3 5.2 1.8.7.6 3.4-1.2 2.7a184 184 0 0 0-9.5-3.6c2 2.9 4.4 5.6 7.2 8 1.4 1.2-.4 3.6-1.8 2.3a46.8 46.8 0 0 1-9.7-11.6l-.1-.1c-3.9-1.2-7.9-2.4-11.9-3.4 3.3 4.7 7.1 9 11.6 12.8 1.4 1.2-.4 3.6-1.8 2.3-5.4-4.6-10-10-13.8-16l-.1-.2-8.4-1.9a62.5 62.5 0 0 0 14.6 17c1.5 1.2-.4 3.5-1.8 2.3a62.6 62.6 0 0 1-15.8-18.9c-.2-.4-.2-.8-.2-1.1l-11.7-2.2a77 77 0 0 0 19.6 22.9c1.5 1.2-.3 3.5-1.8 2.3-8.8-7-16-15.6-21.3-25.5l-.1-.3-4.2-.7-8.5-1.4a78.8 78.8 0 0 0 18.8 22.6c1.5 1.2-.4 3.5-1.8 2.3a81.1 81.1 0 0 1-20.4-25.1l-.1-.4-10-1.5c6.1 8.6 12.6 16.9 19.4 24.8 1.2 1.4-1.2 3.2-2.4 1.7a348.3 348.3 0 0 1-20.6-26.5l-.2-.6-7.9-.8c.5 5.3 2.6 9.2 5.8 13.5 3.5 4.7 7.3 9.2 11.5 13.4 1.3 1.3-.5 3.7-1.8 2.3-8.3-8-17.9-17.6-18.8-29.4-7.9-.5-15.8-.4-23.6.8-1.9.3-2.2-2.7-.3-2.9 7.7-1.2 15.5-1.3 23.2-.9 5-8.5 11.9-15.4 20.5-20.2 1.6-.9 3.4 1.5 1.7 2.4a53 53 0 0 0-19 18l8.2.8C95.5-1.9 105-8.5 114.5-15c1.6-1.1 3.3 1.3 1.7 2.4-8.8 6-17.6 12-24.8 19.9l12 1.8A68.8 68.8 0 0 1 131.8-9c1.8-.6 2.9 2.2 1 2.8a65 65 0 0 0-25.9 15.9l7.5 1.3 3.9.7a50.2 50.2 0 0 1 23.6-13.8c1.8-.5 2.9 2.3 1 2.8-8 2.1-15.2 6-21.1 11.7l12.4 2.3A54.1 54.1 0 0 1 155.1.3c1.8-.7 2.8 2.1 1 2.8a52 52 0 0 0-18.6 12.4l7 1.6.1-.1a73.2 73.2 0 0 1 22.9-12.6c1.8-.6 2.9 2.2 1 2.8A72.1 72.1 0 0 0 148.2 18c3.4.8 6.7 1.7 10 2.7l.4-.4c6-3.4 12.1-6.7 19.1-7.4 2.1-.4 2.4 2.5.5 2.7z"
          />
          <path
            id="pino_x5F_2_5_"
            d="M96.1 68.4a43.3 43.3 0 0 0-17.2-1c3.8 3.3 7.5 6.8 11 10.5 1.3 1.4-.8 3.4-2.2 2l-7.3-7.1c.7 3.5 1.8 6.9 3.4 10.2.8 1.7-1.8 3.1-2.6 1.4A45.6 45.6 0 0 1 77 69.9v-.1l-9.5-7.9A64.7 64.7 0 0 0 73 78.3c.8 1.7-1.8 3.1-2.6 1.4a71.9 71.9 0 0 1-6.3-20.2v-.2l-6.9-5.1c.9 7.5 3 14.7 6.5 21.4.9 1.7-1.7 3.1-2.6 1.4a65 65 0 0 1-7-23.6c0-.4.1-.8.3-1.1a338 338 0 0 0-9.8-6.7c1 10.1 4 19.8 8.8 28.8.9 1.7-1.7 3.1-2.6 1.4a81 81 0 0 1-9.3-31.9v-.3L38 41.3l-7.2-4.7c.9 9.9 3.7 19.4 8.2 28.3.9 1.7-1.8 3.1-2.6 1.4-5-9.8-7.8-20.3-8.7-31.2v-.4c-2.8-1.8-5.7-3.7-8.6-5.4 2.1 10.3 4.7 20.5 7.8 30.5.6 1.8-2.3 2.5-2.9.6a331.1 331.1 0 0 1-8.3-32.6v-.6l-6.9-3.9c-1.7 5-1.3 9.4-.1 14.7 1.3 5.7 3 11.4 5.1 16.9.7 1.8-1.9 3.2-2.6 1.4-4-10.6-9-23.2-5.1-34.4-7-3.6-14.3-6.7-22-8.7-1.8-.5-.9-3.3.9-2.8 7.5 2 14.7 5 21.6 8.5A54.5 54.5 0 0 1 33.5 8.6c1.9-.2 2.5 2.7.6 2.9-8.9.9-17.3 3.9-24.6 8.9l7.2 4c10.5-5 21.8-7.3 33.1-9.4 1.9-.3 2.5 2.5.6 2.9a134 134 0 0 0-30.7 8.3L30 32.7a70.2 70.2 0 0 1 33.3-5.2c1.9.2 1.8 3.1-.1 3-10.3-1-20.5.4-30.1 4.2a224.7 224.7 0 0 0 9.6 6.2 50.6 50.6 0 0 1 27.2-3.2c1.9.3 1.7 3.3-.1 3a47.8 47.8 0 0 0-24 2.2L56.2 50a55 55 0 0 1 24.9-4.9c1.9.1 1.8 3-.1 3-7.6-.3-15 1-22 3.9l5.8 4.2h.1a76 76 0 0 1 26-2.4c1.9.2 1.8 3.1-.1 3-7.7-.6-15.4 0-22.9 1.8a461 461 0 0 1 8.1 6.5l.6-.2c6.9-.7 13.8-1.3 20.5.9 1.7.4.8 3.2-1 2.6z"
          />
          <path
            id="pino_x5F_3_5_"
            d="M220.1 14.9a43 43 0 0 0 15.6-7.3c-4.9-1.1-9.8-2.4-14.7-3.9-1.8-.6-.9-3.4 1-2.8l9.8 2.8a45.6 45.6 0 0 0-7.8-7.4c-1.5-1.1.1-3.6 1.6-2.5a45.3 45.3 0 0 1 10.7 10.9c4 .9 8.1 1.7 12.1 2.4a67.1 67.1 0 0 0-12.6-11.8c-1.5-1.1.1-3.6 1.6-2.5a70.6 70.6 0 0 1 15.1 14.8l.1.2 8.5 1.2a59.4 59.4 0 0 0-15.9-15.7c-1.6-1.1.1-3.5 1.6-2.5a64.4 64.4 0 0 1 17.4 17.5c.2.4.3.8.2 1.1 3.9.5 7.9.9 11.8 1.2a78.5 78.5 0 0 0-21.4-21.2c-1.6-1.1.1-3.5 1.6-2.5a79.8 79.8 0 0 1 23.3 23.7l.2.3 4.2.4 8.6.7a80.7 80.7 0 0 0-20.6-21c-1.6-1.1.1-3.5 1.6-2.5 9 6.2 16.5 14.1 22.5 23.3l.2.4 10.1.7c-6.8-8-13.9-15.8-21.4-23.1-1.4-1.3.9-3.3 2.2-1.9 8 7.9 15.6 16.1 22.8 24.7l.3.5 8 .2c-.9-5.2-3.4-8.9-6.9-13A133 133 0 0 0 299-12.1c-1.4-1.2.2-3.7 1.6-2.5 8.6 7.4 18.9 16.1 20.8 27.8 7.9-.2 15.7-.9 23.5-2.8 1.9-.4 2.4 2.5.5 2.9-7.6 1.8-15.3 2.6-23.1 2.8a54.8 54.8 0 0 1-18.7 21.8c-1.6 1.1-3.5-1.2-1.9-2.2 7.4-5 13.4-11.6 17.4-19.6l-8.2-.1a127.7 127.7 0 0 1-24.7 24c-1.5 1.2-3.4-1-1.9-2.2a137 137 0 0 0 23.1-21.9l-12.1-.8a70.9 70.9 0 0 1-26.9 20.4c-1.7.7-3-1.9-1.3-2.7 9.5-4 17.8-10.2 24.5-18l-7.5-.6-3.9-.3a51.2 51.2 0 0 1-22.4 15.7c-1.8.6-3.1-2-1.3-2.7a48.2 48.2 0 0 0 20.1-13.4L264 12.2a53.8 53.8 0 0 1-19.6 16.1c-1.7.8-3-1.8-1.3-2.7 6.8-3.3 12.7-8 17.5-13.9a173 173 0 0 1-7.1-1l-.1.1a77 77 0 0 1-21.7 14.5c-1.7.8-3-1.9-1.3-2.7a72.4 72.4 0 0 0 19.3-12.4 365 365 0 0 1-10.2-1.9l-.4.4a49 49 0 0 1-18.5 9c-1.8.4-2.4-2.5-.5-2.8z"
          />
          <path
            id="pino_x5F_4_8_"
            d="M301.9 114.8c1.3-5.7.6-11.5-.4-17.2-3 4.1-6.2 8-9.5 11.9-1.3 1.4-3.4-.6-2.2-2l6.5-7.9c-3.4 1-6.7 2.4-9.9 4.2-1.6 1-3.2-1.5-1.6-2.5 4.4-2.6 9.1-4.4 14.1-5.4h.1c2.5-3.3 4.8-6.7 7.1-10.1a65.7 65.7 0 0 0-15.9 6.8c-1.6 1-3.2-1.5-1.6-2.5a72.6 72.6 0 0 1 19.6-7.9h.2l4.5-7.3a60.5 60.5 0 0 0-20.8 8.3c-1.6 1-3.2-1.5-1.6-2.5a66 66 0 0 1 23-8.9c.4-.1.8 0 1.1.2l5.9-10.3a76.5 76.5 0 0 0-28 11.1c-1.6 1-3.2-1.5-1.6-2.5 9.5-6.1 19.9-10 31-11.9h.3l2-3.7 4.1-7.6a78 78 0 0 0-27.5 10.5c-1.6 1-3.2-1.5-1.6-2.5a82.7 82.7 0 0 1 30.4-11.2h.4l4.7-9c-10.1 3-20 6.4-29.8 10.3-1.8.7-2.6-2.1-.9-2.8 10.4-4.2 21-7.8 31.8-10.9l.6-.1 3.4-7.2c-5.1-1.2-9.5-.5-14.7 1.1-5.6 1.8-11.1 4-16.4 6.5-1.7.8-3.3-1.7-1.6-2.5 10.2-4.9 22.4-10.9 33.9-7.9 3-7.3 5.5-14.8 6.9-22.6.3-1.9 3.2-1.2 2.9.7-1.4 7.7-3.7 15.1-6.7 22.3a55 55 0 0 1 12.5 26c.3 1.9-2.5 2.7-2.8.9a52.4 52.4 0 0 0-10.9-23.8l-3.4 7.5c5.9 10 9 21.1 12 32.3.5 1.8-2.3 2.7-2.8.9a135 135 0 0 0-10.8-29.9l-5.6 10.7a69 69 0 0 1 7.9 32.7c0 1.9-3 2-3 .1a66.4 66.4 0 0 0-6.6-29.7l-3.6 6.7-1.9 3.5a51 51 0 0 1 5.4 26.8c-.1 1.9-3.1 2-3 .1.6-8.2-.8-16.3-4.2-23.8l-6.2 11a55 55 0 0 1 6.9 24.4c.1 1.9-2.9 2-3 .1a50.7 50.7 0 0 0-5.7-21.6l-3.7 6.1v.1c3 8.3 4.5 16.9 4.5 25.7 0 1.9-3 2-3 .1 0-7.8-1.2-15.3-3.6-22.7l-5.8 8.6.2.5a49 49 0 0 1 .8 20.5c-.3 1.8-3.2 1.1-2.8-.8z"
          />
          <path
            id="pino_x5F_5_5_"
            d="M20 156.4a43 43 0 0 0-8.9-14.8c-.6 5-1.4 10-2.4 15-.4 1.9-3.3 1.2-2.9-.7.7-3.3 1.3-6.7 1.8-10a44.6 44.6 0 0 0-6.5 8.5c-1 1.6-3.6.3-2.6-1.4 2.6-4.4 5.8-8.3 9.7-11.7l.1-.1c.5-4.1.9-8.2 1.1-12.3a66.5 66.5 0 0 0-10.5 13.7c-1 1.6-3.6.3-2.6-1.4 3.6-6.2 8-11.7 13.2-16.5l.2-.1.3-8.6a62 62 0 0 0-14 17.4c-.9 1.7-3.5.3-2.6-1.4A62.3 62.3 0 0 1 9 113c.3-.3.7-.4 1.1-.4v-11.9a76.9 76.9 0 0 0-18.9 23.5c-.9 1.7-3.5.3-2.6-1.4A79.5 79.5 0 0 1 9.8 97.2l.3-.2-.1-4.2-.2-8.6c-7.6 6.3-14 14-18.7 22.7-.9 1.7-3.5.3-2.6-1.4A80 80 0 0 1 9.7 80.8l-.4-10.2a332.6 332.6 0 0 0-20.8 23.7c-1.2 1.5-3.3-.5-2.2-2A332 332 0 0 1 8.6 67.1c.2-.2.3-.3.5-.3l-.6-8A26 26 0 0 0-3.8 67c-4 4.3-7.7 8.9-11.1 13.7-1.1 1.5-3.7.2-2.6-1.4C-11 70.1-3.4 58.9 8.1 55.8c-1-7.8-2.5-15.6-5.2-23.1-.6-1.8 2.2-2.6 2.8-.8 2.6 7.4 4.2 15 5.2 22.7A54.9 54.9 0 0 1 34.5 71c1.2 1.4-.8 3.6-2 2.2a52.1 52.1 0 0 0-21.2-15.3l.7 8.2C22 71.9 30.3 80 38.4 88.2c1.3 1.3-.7 3.5-2 2.2a132.5 132.5 0 0 0-24.2-20.7l.4 12.1a68.7 68.7 0 0 1 23 24.6c.9 1.7-1.6 3.2-2.5 1.5-5-9-11.9-16.7-20.4-22.5l.1 7.6.1 3.9a50.5 50.5 0 0 1 17.9 20.7c.8 1.7-1.7 3.3-2.5 1.5a47.2 47.2 0 0 0-15.4-18.6v12.6a53.1 53.1 0 0 1 18 17.9c1 1.6-1.5 3.2-2.5 1.5-4-6.4-9.3-11.8-15.6-16l-.2 7.1h.1a74.6 74.6 0 0 1 16.6 20.1c.9 1.7-1.6 3.2-2.5 1.5a71.4 71.4 0 0 0-14.3-18l-.8 10.3.5.4A49.4 49.4 0 0 1 23 155.3c.4 2.1-2.4 3-3 1.1z"
          />
          <path
            id="pino_x5F_4_7_"
            d="M352.2 204.9a43.5 43.5 0 0 0-8-15.2c-.9 5-1.9 9.9-3.2 14.9-.5 1.8-3.3 1-2.8-.8.9-3.3 1.6-6.6 2.3-9.9-2.6 2.4-5 5.1-7 8.1-1.1 1.6-3.6.1-2.5-1.5 2.8-4.3 6.2-8 10.3-11.1l.1-.1c.7-4.1 1.3-8.1 1.8-12.2a70 70 0 0 0-11.2 13.1c-1 1.6-3.6.1-2.5-1.5 3.9-6 8.6-11.2 14-15.8l.2-.1.8-8.5c-6 4.6-11 10.2-15 16.7-1 1.6-3.5.1-2.5-1.5a64 64 0 0 1 16.6-18.2c.4-.3.7-.3 1.1-.3.3-3.9.5-7.9.6-11.8a78.2 78.2 0 0 0-20.1 22.4c-1 1.6-3.5.1-2.5-1.5a80.8 80.8 0 0 1 22.5-24.4l.3-.2.1-4.2.3-8.6a77.3 77.3 0 0 0-19.9 21.6c-1 1.6-3.5.1-2.5-1.5a81.6 81.6 0 0 1 22.6-23.7l.2-10.1a360.6 360.6 0 0 0-22.1 22.5c-1.3 1.4-3.3-.7-2-2.1 7.5-8.4 15.3-16.3 23.6-23.9.2-.2.3-.3.5-.3l-.2-8a26 26 0 0 0-12.6 7.5 133 133 0 0 0-11.8 13.1c-1.2 1.5-3.7 0-2.5-1.5 7-8.9 15.2-19.7 26.8-22.1a108 108 0 0 0-3.9-23.3c-.5-1.8 2.3-2.5 2.9-.7 2.2 7.5 3.4 15.2 3.9 22.9 9 3.8 16.8 9.8 22.7 17.7 1.1 1.5-1 3.6-2.1 2a51.8 51.8 0 0 0-20.4-16.4l.2 8.2c9.7 6.4 17.5 14.9 25.2 23.5 1.3 1.4-.9 3.5-2.1 2-7.1-7.9-14.2-15.9-23-22l-.2 12.1a67.5 67.5 0 0 1 21.6 25.8c.8 1.7-1.8 3.1-2.6 1.4a65.7 65.7 0 0 0-19.2-23.6l-.3 7.6-.1 3.9a50.3 50.3 0 0 1 16.8 21.6c.7 1.7-1.9 3.2-2.6 1.4a47.5 47.5 0 0 0-14.3-19.4l-.7 12.6a55 55 0 0 1 17.1 18.8c.9 1.7-1.7 3.1-2.6 1.4a51.6 51.6 0 0 0-14.7-16.8l-.6 7.1h.1a74.3 74.3 0 0 1 15.5 21c.8 1.7-1.8 3.1-2.6 1.4-3.4-7-7.9-13.2-13.3-18.7-.4 3.4-.8 6.9-1.4 10.3l.4.4a48.7 48.7 0 0 1 9.8 18c0 1.7-2.9 2.4-3.3.5z"
          />
        </g>
        <g
          id="rami"
          fill="#009488"
          stroke="#009488"
          strokeMiterlimit="10"
          strokeWidth="3"
        >
          <path
            id="pino_x5F_1_4_"
            d="M164 49.9c5.3-2.5 11.1-3 16.9-3.3-3.3 3.8-6.5 7.7-9.5 11.8-1.1 1.5 1.3 3.2 2.4 1.7 2-2.7 4.1-5.4 6.3-8-.2 3.6-.9 7.1-2 10.5-.6 1.8 2.2 2.8 2.8 1 1.6-4.9 2.3-9.8 2.2-15v-.1a238 238 0 0 1 8.4-9.1 70.9 70.9 0 0 1-3.2 17c-.6 1.8 2.2 2.8 2.8 1a70.3 70.3 0 0 0 3.5-20.8v-.2l6.2-6c.2 7.6-1 15-3.6 22.1-.6 1.8 2.1 2.8 2.8 1a63 63 0 0 0 3.7-24.4c0-.4-.2-.8-.5-1l8.8-7.9a77 77 0 0 1-4.9 29.7c-.7 1.8 2.1 2.8 2.8 1a81.8 81.8 0 0 0 4.9-32.9l-.1-.3a80 80 0 0 0 3.2-2.8l6.5-5.6a80 80 0 0 1-4.3 29.1c-.6 1.8 2.1 2.8 2.8 1a81.2 81.2 0 0 0 4.4-32.1l-.1-.4c2.6-2.2 5.1-4.4 7.8-6.5-.7 10.5-2 20.9-3.7 31.3-.3 1.9 2.6 2.1 2.9.2 1.8-11.1 3.1-22.2 3.8-33.4l-.1-.6a97 97 0 0 1 6.4-4.8c2.3 4.8 2.5 9.2 2 14.6-.5 5.9-1.5 11.7-2.8 17.4-.4 1.8 2.3 2.9 2.8 1 2.6-11 5.8-24.2.4-34.8 6.5-4.5 13.3-8.5 20.6-11.6 1.8-.7.5-3.4-1.3-2.7-7.2 3-13.9 6.9-20.3 11.3-8.6-4.7-18.2-7-28-6.6-1.9.1-2.2 3-.2 2.9 8.9-.3 17.7 1.5 25.6 5.6l-6.6 5c-11-3.6-22.6-4.3-34.1-4.9-1.9-.1-2.2 2.9-.2 2.9 10.6.5 21.3 1.1 31.6 4.1l-9.3 7.8c-11-3-22.5-3.3-33.7-.7-1.8.4-1.3 3.3.5 2.9a66.4 66.4 0 0 1 30.4.1l-5.7 4.9-3 2.6a51 51 0 0 0-27.4.5c-1.8.5-1.3 3.5.5 2.9a47 47 0 0 1 24.1-1l-9.4 8.4c-8.3-2.5-16.8-3-25.4-1.5-1.9.3-1.3 3.2.5 2.9 7.5-1.3 15-1 22.3.9l-5.2 5h-.1a74 74 0 0 0-26.1 1.1c-1.9.4-1.3 3.3.5 2.9a70.6 70.6 0 0 1 22.9-1.3l-7.1 7.5-.6-.1c-6.9.2-13.9.6-20.2 3.6-1.3 1.4-.1 4 1.7 3.2z"
          />
          <path
            id="pino_x5F_2_4_"
            d="M243 58.4a43.3 43.3 0 0 1 17.2-1c-3.8 3.3-7.5 6.8-11 10.5-1.3 1.4.8 3.4 2.2 2l7.3-7.1c-.7 3.5-1.8 6.9-3.4 10.2-.8 1.7 1.8 3.1 2.6 1.4 2.2-4.6 3.6-9.4 4.2-14.5v-.1l9.5-7.9a64.7 64.7 0 0 1-5.5 16.4c-.8 1.7 1.8 3.1 2.6 1.4a71.9 71.9 0 0 0 6.3-20.2v-.2l6.9-5.1c-.9 7.5-3 14.7-6.5 21.4-.9 1.7 1.7 3.1 2.6 1.4a65 65 0 0 0 7-23.6 2 2 0 0 0-.3-1.1 338 338 0 0 1 9.8-6.7c-1 10.1-4 19.8-8.8 28.8-.9 1.7 1.7 3.1 2.6 1.4a81 81 0 0 0 9.3-31.9v-.3l3.5-2.3 7.2-4.7a78.2 78.2 0 0 1-8.2 28.3c-.9 1.7 1.8 3.1 2.6 1.4 5-9.8 7.8-20.3 8.7-31.2v-.4c2.8-1.8 5.7-3.7 8.6-5.4a316.9 316.9 0 0 1-7.8 30.5c-.6 1.8 2.3 2.5 2.9.6 3.3-10.7 6.1-21.6 8.3-32.6v-.6l6.9-3.9c1.7 5 1.3 9.4.1 14.7-1.3 5.7-3 11.4-5.1 16.9-.7 1.8 1.9 3.2 2.6 1.4 4-10.6 9-23.2 5.1-34.4 7-3.6 14.3-6.7 22-8.7 1.8-.5.9-3.3-.9-2.8-7.5 2-14.7 5-21.6 8.5a54.5 54.5 0 0 0-26.9-10.3c-1.9-.2-2.5 2.7-.6 2.9 8.9.9 17.3 3.9 24.6 8.9l-7.2 4c-10.5-5-21.8-7.3-33.1-9.4-1.9-.3-2.5 2.5-.6 2.9 10.5 1.9 21 4 30.7 8.3l-10.3 6.5a70.2 70.2 0 0 0-33.3-5.2c-1.9.2-1.8 3.1.1 3 10.3-1 20.5.4 30.1 4.2l-6.3 4.1-3.3 2.1a50.6 50.6 0 0 0-27.2-3.2c-1.9.3-1.7 3.3.1 3 8.1-1.3 16.3-.6 24 2.2L282.9 40a55 55 0 0 0-24.9-4.9c-1.9.1-1.8 3 .1 3 7.6-.3 15 1 22 3.9l-5.8 4.2h-.1a76 76 0 0 0-26-2.4c-1.9.2-1.8 3.1.1 3 7.7-.6 15.4 0 22.9 1.8a461 461 0 0 0-8.1 6.5l-.6-.2a48.8 48.8 0 0 0-20.5.9c-1.7.4-.9 3.2 1 2.6z"
          />
          <path
            id="pino_x5F_5_4_"
            d="M319 146.4a43 43 0 0 1 8.9-14.8c.6 5 1.4 10 2.4 15 .4 1.9 3.3 1.2 2.9-.7-.7-3.3-1.3-6.7-1.8-10 2.5 2.6 4.7 5.4 6.5 8.5 1 1.6 3.6.3 2.6-1.4a47.3 47.3 0 0 0-9.7-11.7l-.1-.1c-.5-4.1-.9-8.2-1.1-12.3 4.1 4.1 7.6 8.7 10.5 13.7 1 1.6 3.6.3 2.6-1.4-3.6-6.2-8-11.7-13.2-16.5l-.2-.1-.3-8.6a62 62 0 0 1 14 17.4c.9 1.7 3.5.3 2.6-1.4a62.3 62.3 0 0 0-15.6-19c-.3-.3-.7-.4-1.1-.4V90.7a76.9 76.9 0 0 1 18.9 23.5c.9 1.7 3.5.3 2.6-1.4a79.5 79.5 0 0 0-21.2-25.6l-.3-.2.1-4.2.2-8.6c7.6 6.3 14 14 18.7 22.7.9 1.7 3.5.3 2.6-1.4a81.4 81.4 0 0 0-21.3-24.9l.3-10.1a312 312 0 0 1 20.8 23.7c1.2 1.5 3.3-.5 2.2-2A332 332 0 0 0 330.2 57c-.2-.2-.3-.3-.5-.3l.6-8c5.1 1.5 8.5 4.2 12.2 8.2 4 4.3 7.7 8.9 11.1 13.7 1.1 1.5 3.7.2 2.6-1.4-6.5-9.3-14.1-20.5-25.6-23.6 1-7.8 2.5-15.6 5.2-23.1.6-1.8-2.2-2.6-2.8-.8-2.6 7.4-4.2 15-5.2 22.7a54.9 54.9 0 0 0-23.6 16.4c-1.2 1.4.8 3.6 2 2.2a52.1 52.1 0 0 1 21.2-15.3l-.7 8.2c-10 5.8-18.3 13.9-26.4 22.1-1.3 1.3.7 3.5 2 2.2 7.5-7.6 15.1-15.1 24.2-20.7l-.4 12.1a68.7 68.7 0 0 0-23 24.6c-.9 1.7 1.6 3.2 2.5 1.5 5-9 11.9-16.7 20.4-22.5l-.1 7.6-.1 3.9a50.5 50.5 0 0 0-17.9 20.7c-.8 1.7 1.7 3.3 2.5 1.5a47.2 47.2 0 0 1 15.4-18.6v12.6a53.1 53.1 0 0 0-18 17.9c-1 1.6 1.5 3.2 2.5 1.5 4-6.4 9.3-11.8 15.6-16l.2 7.1h-.1a74.6 74.6 0 0 0-16.6 20.1c-.9 1.7 1.6 3.2 2.5 1.5a71.4 71.4 0 0 1 14.3-18l.8 10.3-.5.4a49.4 49.4 0 0 0-10.8 17.4c-.1 2.3 2.8 3.2 3.3 1.3z"
          />
          <path
            id="pino_x5F_3_4_"
            d="M118.9 4.9a43 43 0 0 1-15.6-7.3c4.9-1.1 9.8-2.4 14.7-3.9 1.8-.6.9-3.4-1-2.8l-9.8 2.8c2.3-2.8 4.9-5.2 7.8-7.4 1.5-1.1-.1-3.6-1.6-2.5-4.1 3-7.7 6.6-10.6 10.8l-.1.1c-4 .9-8.1 1.7-12.1 2.4 3.7-4.5 7.9-8.4 12.6-11.8 1.5-1.1-.1-3.6-1.6-2.5A68.9 68.9 0 0 0 86.4-2.4l-.1.2L77.8-1a59.4 59.4 0 0 1 15.9-15.7c1.6-1.1-.1-3.5-1.6-2.5A62.7 62.7 0 0 0 74.7-1.8c-.2.4-.3.8-.2 1.1-3.9.5-7.9.9-11.8 1.2 5.7-8.4 13-15.6 21.4-21.2 1.6-1.1-.1-3.5-1.6-2.5A81.6 81.6 0 0 0 59.1.6l-.1.3-4.2.4-8.6.7a80.7 80.7 0 0 1 20.6-21c1.6-1.1-.1-3.5-1.6-2.5A83.2 83.2 0 0 0 42.7 1.8l-.2.4-10.1.7c6.8-8 13.9-15.8 21.4-23.1 1.4-1.3-.9-3.3-2.2-1.9C43.6-14.3 36-6 28.9 2.6l-.3.5-8 .2c.9-5.2 3.4-8.9 6.9-13A133 133 0 0 1 40-22.1c1.4-1.2-.2-3.7-1.6-2.5-8.6 7.4-18.9 16.1-20.8 27.8C9.7 3.1 1.8 2.3-5.9.5c-1.8-.5-2.4 2.4-.5 2.9C1.2 5.2 8.9 6 16.6 6.2A55 55 0 0 0 35.4 28c1.6 1.1 3.5-1.2 1.9-2.2A51.3 51.3 0 0 1 19.9 6.2l8.2-.1c6.8 9.4 15.7 16.8 24.7 24 1.5 1.2 3.4-1 1.9-2.2A137 137 0 0 1 31.6 6l12.1-.8a71.6 71.6 0 0 0 26.9 20.3c1.7.7 3-1.9 1.3-2.7a66.2 66.2 0 0 1-24.5-18l7.5-.6 3.9-.3c6 7.2 13.6 12.6 22.4 15.7 1.8.6 3.1-2 1.3-2.7A48.2 48.2 0 0 1 62.4 3.5L75 2.2a53.8 53.8 0 0 0 19.6 16.1c1.7.8 3-1.8 1.3-2.7-6.8-3.3-12.7-8-17.5-13.9l7.1-1 .1.1c6.4 6.2 13.7 11 21.7 14.6 1.7.8 3-1.9 1.3-2.7A72.4 72.4 0 0 1 89.3.3a365 365 0 0 0 10.2-1.9l.4.4a49 49 0 0 0 18.5 9c1.8.3 2.4-2.6.5-2.9z"
          />
          <path
            id="pino_x5F_4_6_"
            d="M37.1 104.8c-1.3-5.7-.6-11.5.4-17.2 3 4.1 6.2 8 9.5 11.9 1.3 1.4 3.4-.6 2.2-2l-6.5-7.9c3.4 1 6.7 2.4 9.9 4.2 1.6 1 3.2-1.5 1.6-2.5a44.8 44.8 0 0 0-14.1-5.4H40c-2.5-3.3-4.8-6.7-7.1-10.1a65.7 65.7 0 0 1 15.9 6.8c1.6 1 3.2-1.5 1.6-2.5a72.6 72.6 0 0 0-19.6-7.9h-.2l-4.5-7.3a60.5 60.5 0 0 1 20.8 8.3c1.6 1 3.2-1.5 1.6-2.5a66 66 0 0 0-23-8.9c-.4-.1-.8 0-1.1.2l-5.9-10.3c10 1.8 19.5 5.6 28 11.1 1.6 1 3.2-1.5 1.6-2.5a82.6 82.6 0 0 0-31-11.9h-.3l-2-3.7-4.1-7.6a78 78 0 0 1 27.5 10.5c1.6 1 3.2-1.5 1.6-2.5A82.7 82.7 0 0 0 9.4 33.9H9l-4.7-9c10.1 3 20 6.4 29.8 10.3 1.8.7 2.6-2.1.9-2.8-10.4-4.2-21-7.8-31.8-10.9l-.6-.1A80.5 80.5 0 0 1-1 14.2c5.1-1.2 9.5-.5 14.7 1.1 5.6 1.8 11.1 4 16.4 6.5 1.7.8 3.3-1.7 1.6-2.5C21.5 14.4 9.3 8.4-2.2 11.4A111 111 0 0 1-9-11.2c-.3-1.9-3.2-1.2-2.9.7 1.4 7.7 3.7 15.1 6.7 22.3a55 55 0 0 0-12.5 26c-.3 1.9 2.5 2.7 2.8.9A52.4 52.4 0 0 1-4 14.9l3.4 7.5c-5.9 10-9 21.1-12 32.3-.5 1.8 2.3 2.7 2.8.9A135 135 0 0 1 1 25.7l5.6 10.7a69 69 0 0 0-7.9 32.7c0 1.9 3 2 3 .1 0-10.5 2.2-20.6 6.7-29.8a407.4 407.4 0 0 1 5.5 10.2 50.2 50.2 0 0 0-5.4 26.7c.1 1.9 3.1 2 3 .1-.6-8.2.8-16.3 4.2-23.8l6.2 11A55 55 0 0 0 15 88c-.1 1.9 2.9 2 3 .1.3-7.6 2.2-14.9 5.7-21.6l3.7 6.1v.1c-3 8.3-4.5 16.9-4.5 25.7 0 1.9 3 2 3 .1 0-7.8 1.2-15.3 3.6-22.7l5.8 8.6-.3.6a49 49 0 0 0-.8 20.5c.4 1.9 3.3 1.2 2.9-.7z"
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
      </svg>
    </StyledAnsioso>
  );
};
