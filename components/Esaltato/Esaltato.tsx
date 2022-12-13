import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import { useEffect, useRef } from "react";
import {
  esaltatoDefault,
  esaltatoDoubleClick,
  esaltatoResetFace,
} from "./esaltato.animations";
import { StyledEsaltato } from "./Esaltato.style";

export const Esaltato = () => {
  const svgRef = useRef(null);
  const tl = useRef<any>({});

  function handleOnClick() {
    tl.current.defaultAnim.pause();
    tl.current.doubleClickAnim.pause();
    tl.current.doubleClickAnim
      .invalidate()
      .restart()
      .then(() => {
        setTimeout(() => {
          tl.current.resetFaceAnim
            .invalidate()
            .restart()
            .then(() => {
              tl.current.defaultAnim.invalidate().restart();
            });
        }, 600);
      });
  }

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

    tl.current.defaultAnim = esaltatoDefault();
    tl.current.doubleClickAnim = esaltatoDoubleClick();
    tl.current.resetFaceAnim = esaltatoResetFace();
    tl.current.defaultAnim.play();
  }, []);

  return (
    <StyledEsaltato>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        id="esaltato"
        // viewBox="0 0 340 580"
        viewBox="0 0 340 520"
      >
        <path
          id="bg-2"
          fill="#FFF"
          d="M427.8 605.7c0-73.7-120.6-133.4-269.5-133.4S-111.1 532-111.1 605.7c0 43.5 42.2 82.2 107.4 106.6v334.3h342.3V704.8c54.7-24.4 89.2-59.8 89.2-99.1z"
        />
        <ellipse
          cx="162"
          cy="512.7"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          opacity=".5"
          rx="65.3"
          ry="3.4"
        />
        <g id="folletto-full" onClick={handleOnClick}>
          <path
            id="gamba_dex"
            fill="none"
            stroke="#F50045"
            stroke-miterlimit="10"
            stroke-width="10"
            d="M127.7 442v49.9"
          />
          <path
            id="gamba_six"
            fill="none"
            stroke="#F50045"
            stroke-miterlimit="10"
            stroke-width="10"
            d="M192.9 443.1V493"
          />
          <g id="Corpo_00000151518495307528605450000005617032206153169549_">
            <path
              fill="#F50045"
              d="M197.7 343.5s-.4 105.2-.4 99.6c0-.2-73.3 2.7-74.4 0-1.2-2.7-1.2-89.9-.5-97.9"
            />
            <polygon points="198.2 414.7 198.2 426.7 197.7 426.7 122.2 429 121.9 417.1" />
            <path d="M159.5 391.7c-4.5-1-6.7 4.1-6.3 5.3.4 1.3.9 4.6 3.6 4.7 2.8 0 5.8-1.7 5.8-4.7s-.2-4.8-3.1-5.3zm.1-18.1c-4.5-1-6.7 4.1-6.3 5.3.4 1.3.9 4.6 3.6 4.7 2.7.1 5.8-1.7 5.8-4.7s-.2-4.7-3.1-5.3z" />
          </g>
          <path
            fill="#FFDB2C"
            d="M154.6 430.9c-1 0-1.8-.4-2.5-1-.7-.8-1.1-1.9-1-3.1-.1-4.3.2-8.9.4-11.9 0-.9.8-1.7 1.8-1.8 3.6-.3 7.4-.4 10.5-.5 1.2-.2 2.3.2 3.2 1 .8.8 1.1 1.8 1 2.9-.1.5-.2 1.3-.4 2.1l-.2.9c-.5 3.1-1.2 6.6-1.9 9.9-.1.8-1 1.5-1.9 1.4-2.9-.1-5.9-.1-8.9.1h-.1zm8-2.2v.1-.1zm-8.1-12.6c-.2 3-.4 7-.3 10.8v.2c0 .4.1.7.2.8 0 0 .1.1.3.1 2.7-.2 5.5-.2 8.2-.1.6-3 1.2-6 1.7-8.8l.2-.9c.1-.7.3-1.5.3-2 0-.2 0-.3-.1-.3-.1-.1-.4-.2-.7-.2h-.2c-2.9 0-6.3.1-9.6.4zm9.3 11.7zm-10.2-11.7c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zm.9-1z"
          />
          <path
            id="scarpa2"
            stroke="#000"
            stroke-miterlimit="10"
            d="m131.5 491.9-8-.5s-1.2 10.5-6.2 11.1-7.5-1.4-8.9-5.6c-1.4-4-1.1-7.4-3.5-7.4-3.1 0-3.2 5.4-1.9 9.9 1.2 4.3 5.6 9.9 12.4 9.9s10.5-6.8 10.5-6.8l.5 6.8h5.1v-17.4z"
          />
          <path
            id="scarpa1"
            stroke="#000"
            stroke-miterlimit="10"
            d="m189.1 493.2 8-.5s1.5 9.3 6.2 11.1c4 1.5 7.2-1.4 8.2-5.6 1.4-5.3 1.1-8 3.5-8 3.1 0 3.8 6 2.5 10.5-1.2 4.3-5.6 9.9-12.4 9.9s-10.5-6.8-10.5-6.8l-.5 6.8H189v-17.4h.1z"
          />
          <g id="braccio-six">
            <path
              fill="none"
              stroke="#F50045"
              stroke-miterlimit="10"
              stroke-width="10"
              d="M195.3 355.7s49.4 20.4 45.4 103.5"
            />
            <path
              fill="#F8CEDE"
              d="M236 458.4h9.8s3.6 11.3 1.2 11.3-3.5-5.6-3.5-5.6.8 9-1.6 8.8-2.4-8.3-2.4-8.3-.6 5.2-3.5 4.8c-2.8-.3 0-11 0-11z"
            />
          </g>
          <g id="braccio-dex">
            <path
              fill="#F8CEDE"
              d="M91.8 453.3H82s-3.6 11.3-1.2 11.3 3.5-5.6 3.5-5.6-.8 9 1.6 8.8 2.4-8.3 2.4-8.3.6 5.2 3.5 4.8c2.8-.1 0-11 0-11z"
            />
            <path
              fill="none"
              stroke="#F50045"
              stroke-miterlimit="10"
              stroke-width="10"
              d="M86.8 454s-4.3-74.8 38.3-90.8"
            />
          </g>
          <g id="braccio-six-2">
            <path
              id="braccio_s_3"
              fill="none"
              stroke="#F50045"
              stroke-miterlimit="10"
              stroke-width="10"
              d="M195.7 350.7s8.2 56.1 26.6 52.6 1.4-42 1.2-66.8"
            />
            <path
              id="mano_six"
              fill="#F8CEDE"
              d="m228.2 338.5-9.7-1.4s-1.9-11.7.4-11.4c2.3.3 2.6 6.1 2.6 6.1s.6-9.1 2.9-8.5 1.2 8.6 1.2 8.6 1.4-5 4.2-4.3c2.9.7-1.6 10.9-1.6 10.9z"
            />
          </g>
          <g id="braccio-dex-2">
            <path
              id="braccio_d_3"
              fill="none"
              stroke="#F50045"
              stroke-miterlimit="10"
              stroke-width="10"
              d="M121.4 358.9s-27.3 28.8-22.3 46.9c6.2 22.1 119.3-43.8 119.4-68.7"
            />
            <path
              id="mano_dex"
              fill="#F8CEDE"
              d="m214.6 338.3 9.7-1.1s2.2-11.7-.1-11.4-2.8 6-2.8 6-.3-9.1-2.6-8.6c-2.4.5-1.4 8.6-1.4 8.6s-1.2-5.1-4-4.5 1.2 11 1.2 11z"
            />
          </g>
          <g id="cappello">
            <path
              fill="#F50045"
              d="M104.3 272.5s3.6-75.2 34.1-93.6c30.5-18.6 45.7-22.4 63.6-22.4s48.3 17.9 59 33.2c10.5 15.3 12.5 58.8 10.5 61.4s-13.2-51.2-35.1-51.8-24.5 20.4-25.8 26.2-3.3 39.2-3.3 39.2l-103 7.8z"
            />
            <path
              fill="#FFF"
              d="M104.3 272.5s-.5-19.6 11.5-62.7c0 0 17 48.9 19.3 57.1 0 0 20.2-61.6 23.1-65.1 2.9-3.4 23.4 62.1 23.4 62.1s33.2-55.9 35.2-57.2c2-1.2-3.4 57.7-3.3 57.7l-109.2 8.1z"
            />
            <path
              id="pom-pom"
              fill="#FFF"
              d="M275.5 251.2c-11.2-2.4-16.7 9.5-15.7 12.6 1.1 3 2.2 10.8 9 11 6.9.1 14.2-3.9 14.2-11s-.4-11.1-7.5-12.6z"
            />
          </g>
          <g id="orecchio_dex">
            <path
              fill="#F8CEDE"
              d="M62.9 288.7s13.2-.4 27.8 12.1c14.7 12.8 14.5 12.4 21.7 22 0 0-21-1.9-33.8-13.4-13-11.5-15.7-20.7-15.7-20.7z"
            />
            <path
              fill="none"
              stroke="#DE8BB5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="m105.2 315.5-23-9.5"
            />
          </g>
          <g id="orecchio_six">
            <path
              fill="#F8CEDE"
              d="M204.3 320.7s14.3-23 29.1-30.1c7.4-4.2 15.4-7.1 23.7-8.8 0 0-6 17.7-25.2 29-19 11.3-27.6 9.8-27.6 9.9z"
            />
            <path
              fill="none"
              stroke="#DE8BB5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="m209.6 313.4 21-12.4"
            />
          </g>
          <path
            id="faccia_forma"
            fill="#F8CEDE"
            d="M104 272.5c-.4 22.3-7.2 74.9 26.2 92 26.9 10.3 53.5 6.9 69.5-12.7 17.2-22.6 15.4-66.8 13.8-87.5-.7-3.3-39.2.3-54.7 1.1-15.5.7-52.9 3.3-54.8 7.1z"
          />
          <g id="faccia">
            <path
              id="naso"
              fill="none"
              stroke="#11142A"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M152.7 309.2s.5 5.7 3 5.7 3-5.7 3-6.7"
            />
            <path
              id="base_occhio"
              fill="#FFF"
              d="M124.9 310.1c5 0 9-4.2 9-9.3s-4-9.3-9-9.3-9 4.2-9 9.3 4 9.3 9 9.3z"
            />
            <path
              id="base_occhio-2"
              fill="#FFF"
              d="M188.9 310.1c5 0 9-4.2 9-9.3s-4-9.3-9-9.3-9 4.2-9 9.3 4 9.3 9 9.3z"
            />
            <path
              id="pupilla"
              fill="#11142A"
              d="M125.5 302.8c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z"
            />
            <path
              id="pupilla-2"
              fill="#11142A"
              d="M189.3 302.8c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5c.1 1.4 1.2 2.5 2.5 2.5z"
            />
            <g id="occhio_3">
              <path
                id="base_occhio_00000078018839852720341780000012572260945197225356_"
                fill="#FFF"
                d="M124.9 310.1c5 0 9-4.2 9-9.3s-4-9.3-9-9.3-9 4.2-9 9.3 4 9.3 9 9.3z"
              />
              <path
                fill="#11142A"
                d="M124.8 307.9c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7z"
              />
              <path
                fill="#FFF"
                d="M122.1 301.8c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2-2.2 1-2.2 2.2 1 2.2 2.2 2.2zm4.3 2.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z"
              />
            </g>
            <g id="occhio_4">
              <path
                id="base_occhio-2_00000085245680873196279010000011681905511314056125_"
                fill="#FFF"
                d="M188.9 310.1c5 0 9-4.2 9-9.3s-4-9.3-9-9.3-9 4.2-9 9.3 4 9.3 9 9.3z"
              />
              <path
                fill="#11142A"
                d="M188.9 308c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7c-.1 3.9 3.1 7 7 7z"
              />
              <path
                fill="#FFF"
                d="M190.8 301.1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2-2.2 1-2.2 2.2 1 2.2 2.2 2.2zm-4.5 2.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z"
              />
            </g>
            <path
              id="guanciotte"
              fill="#F8CEDE"
              d="M125.1 325.5c5 0 9-4.2 9-9.3s-4-9.3-9-9.3-9 4.2-9 9.3c-.2 5 3.7 9.1 8.7 9.3h.3zm64.4 0c5 0 9-4.2 9-9.3s-4-9.3-9-9.3-9 4.2-9 9.3c-.2 5 3.7 9.1 8.7 9.3h.3z"
            />
            <path
              id="guancia_2"
              fill="#F05"
              stroke="#F05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M197.2 315c-6.1-1.4-9.2 5.8-8.5 7.6.6 1.8 1.2 6.5 4.9 6.6 3.9 0 7.9-2.4 7.9-6.6s-.3-6.6-4.3-7.6h0z"
            />
            <path
              id="guancia_1"
              fill="#F05"
              stroke="#F05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M121.9 318.2c2.3.3 5.8 1 4.7 7.9-1.2 6.9-4.1 5.1-6.4 5.1s-4.1-3.8-4.4-6.4c-.4-2.6 3.1-7 6.1-6.6z"
            />
            <path
              id="bocca-wide"
              fill="none"
              stroke="#11142C"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M135.9 324.3s6.8 9.9 19.5 9.7c19-.3 26.3-17.2 26.3-17.2"
            />
            <path
              id="bocca"
              fill="none"
              stroke="#11142A"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M146 326s5.5 7.7 11.7 7.2 11.7-9.7 11.7-9.7"
            />
            <path
              id="bocca_small"
              fill="none"
              stroke="#11142A"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M154.6 336.2h2.2"
            />
            <path
              id="sopracciglio_2"
              fill="none"
              stroke="#11142A"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M186.3 283.2s4.1-4.1 6.9 1.2"
            />
            <path
              id="sopracciglio_1"
              fill="none"
              stroke="#11142A"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M128.2 285.8s-4.1-4-6.9 1.2"
            />
          </g>
          <polygon
            fill="#FFF"
            points="134.1 492.9 121.7 492.7 122.2 486.2 134.5 487.1"
          />
          <polygon
            fill="#FFF"
            points="187 492.9 199.4 492.7 198.9 486.2 186.6 487.1"
          />
        </g>
        <g id="luci_2">
          <path
            className="luce-bianca"
            d="M99.4 3.6C99.4 0 97.5-3 95.3-3s-4.2 3-4.2 6.6 1.8 6.5 4.1 6.5 4.2-2.9 4.2-6.5Z"
          />
          <path
            className="luce-gialla"
            d="M134.3 17.7c0-3.6-2-6.5-4.4-6.5s-4.4 2.9-4.4 6.5 2 6.5 4.4 6.5 4.4-2.9 4.4-6.5Z"
          />
          <path
            className="luce-bianca"
            d="M166.3 29.1c0-3.6-2-6.5-4.4-6.5s-4.4 2.9-4.4 6.5 2 6.5 4.4 6.5 4.4-2.9 4.4-6.5Z"
          />
          <path
            className="luce-gialla"
            d="M275.3 54.7c0-3.6-1.8-6.5-4.1-6.5s-4.1 2.9-4.1 6.5 1.8 6.5 4.1 6.5c2.3.1 4.1-2.8 4.1-6.5Z"
          />
          <path
            className="luce-bianca"
            d="M311.3 59.3c0-3.6-1.8-6.5-4-6.5s-4 2.9-4 6.5 1.8 6.5 4 6.5 4-2.8 4-6.5Z"
          />
          <path
            className="luce-gialla"
            d="M343.3 63.8c0-3.6-1.7-6.5-3.8-6.5s-3.8 2.9-3.8 6.5 1.7 6.5 3.8 6.5 3.8-2.9 3.8-6.5ZM202.5 38.4c0-3.6-1.9-6.5-4.2-6.5s-4.2 2.9-4.2 6.5 1.9 6.5 4.2 6.5 4.2-2.9 4.2-6.5Z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M91.1-4.9S232.6 64 456 60.8"
          />
          <path
            className="luce-bianca"
            d="M240.1 48c0-3.6-1.9-6.5-4.2-6.5s-4.2 2.9-4.2 6.5 1.9 6.5 4.2 6.5 4.2-2.9 4.2-6.5Z"
          />
        </g>
        <g id="luci_1">
          <path
            className="luce-bianca"
            d="M297.2 3.6c0-3.6 1.8-6.5 4.1-6.5s4.1 2.9 4.1 6.5-1.8 6.5-4.1 6.5-4.1-2.9-4.1-6.5Z"
          />
          <path
            className="luce-gialla"
            d="M266.4 17c0-3.6 1.6-6.5 3.5-6.5s3.5 2.9 3.5 6.5-1.6 6.5-3.5 6.5c-2 0-3.5-2.9-3.5-6.5Z"
          />
          <path
            className="luce-bianca"
            d="M231.6 28.2c0-3.6 1.7-6.5 3.9-6.5s3.9 2.9 3.9 6.5-1.7 6.5-3.9 6.5-3.9-2.9-3.9-6.5Z"
          />
          <path
            className="luce-gialla"
            d="M123.8 52.7c0-3.6 2-6.5 4.4-6.5s4.4 2.9 4.4 6.5-2 6.5-4.4 6.5-4.4-2.9-4.4-6.5Z"
          />
          <path
            className="luce-bianca"
            d="M87.3 59.2c0-3.6 2-6.5 4.5-6.5s4.5 2.9 4.5 6.5-2 6.5-4.5 6.5-4.5-2.9-4.5-6.5Z"
          />
          <path
            className="luce-gialla"
            d="M56.6 62.3c0-3.6 1.9-6.5 4.2-6.5s4.2 2.9 4.2 6.5-1.9 6.5-4.2 6.5-4.2-2.9-4.2-6.5Z"
          />
          <path
            className="luce-bianca"
            d="M17.2 66.3c0-3.6 1.8-6.5 4-6.5s4 2.9 4 6.5-1.8 6.5-4 6.5-4-2.9-4-6.5Z"
          />
          <path
            className="luce-gialla"
            d="M194.6 38.4c0-3.6 1.9-6.5 4.3-6.5s4.3 2.9 4.3 6.5-1.9 6.5-4.3 6.5-4.3-2.9-4.3-6.5Z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M306.2-5S164.7 63.9-58.7 60.7"
          />
          <path
            className="luce-bianca"
            d="M161.1 46.9c0-3.6 2.1-6.5 4.6-6.5s4.6 2.9 4.6 6.5-2.1 6.5-4.6 6.5-4.6-2.9-4.6-6.5Z"
          />
        </g>
        <g id="coriandoli">
          <path
            className="stella"
            fill="#FFF6C9"
            d="M298.4 162.6s-3.7 13.2-12.7 14.1c0 0 11.6 5 10 16.7 0 0 3.7-15.2 12-14.6-.1 0-8.4-2.9-9.3-16.2z"
          />
          <path
            className="stella"
            fill="#F4DE3A"
            d="M62.2 178.8c14.9 1.7 14 17.1 14 17.1-1.1-14.1 11.4-19.5 11.4-19.5-10.4-1.1-14.7-16.3-14.7-16.3-1.1 15.4-10.6 18.8-10.7 18.7z"
          />
          <path
            className="stella"
            fill="#6BF5C4"
            d="M56.1 253s-3.2 11.5-11 12.2c0 0 10.1 4.4 8.6 14.5 0 0 3.2-13.2 10.4-12.7 0 0-7.2-2.5-8-14z"
          />
          <path
            className="stella"
            fill="#F4DE3A"
            d="M247.1 122.3c14.9 1.7 14 17.1 14 17.1-1.1-14.1 11.4-19.5 11.4-19.5-10.4-1.1-14.7-16.3-14.7-16.3-1.1 15.4-10.6 18.8-10.7 18.7z"
          />
          <path
            className="linea"
            fill="none"
            stroke="#FFF6C9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M226.4 305c18.3 10.4 40.5 11.2 59.5 2.1 8-4.3 15.2-11.4 15.7-20.9.3-4.3-1-8.4-4-11.4-2.7-2.8-6.4-4.3-10.2-3.9l-.6.1-.6.2-.7.2-.3.1-1 .6-.6.4-.1.1c-1.5 1.3-2.3 2.3-3.1 4.1-.3.5 0-.2-.2.3l-.2.7-.3 1.1-.2.7v1.5l.1 1c0-.4.1.1.1.2l.3 1.2.2.4.2.3.3.6.2.3"
          />
          <path
            className="linea"
            fill="none"
            stroke="#6BF5C4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M222.6 310.7h0c18.2 1.8 36 6.1 53 12.7 7.1 2.6 13.6 6.5 19.2 11.5 4.9 4.4 8.1 10.4 8.9 17 .4 3.7.2 6.9-1 10.3-1 2.9-3 5.9-5.3 7.7"
          />
          <path
            className="linea"
            fill="none"
            stroke="#009488"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M256.1 305.8h0c14.8 5.1 31-2.4 36.7-17"
          />
          <path
            className="linea"
            fill="none"
            stroke="#FFF6C9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M91.1 305.1c-9.5 5.6-20.4 8.5-31.4 8.5-9.7.1-19.5-1.9-28.1-6.4-8-4.3-15.2-11.4-15.7-20.9-.2-4.3 1-8.4 4-11.4 2.7-2.7 6.4-4.3 10.2-3.9l.6.1.6.2.7.2.3.1c.3.2.7.3 1 .6.2.2.5.2.6.4l.1.1c1.5 1.3 2.3 2.3 3.1 4.1.2.5 0-.2.2.3l.2.7c.2.3.2.7.3 1.1l.2.7v1.5l-.1 1c0-.5-.1.1-.1.2l-.3 1.2-.2.4-.2.3-.3.6-.2.3"
          />
          <path
            className="linea"
            fill="none"
            stroke="#6BF5C4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M95.3 311.2h0c-18.2 1.8-36 6.1-53 12.7-7.1 2.5-13.6 6.5-19.2 11.5-4.9 4.4-8.1 10.4-8.9 17-.5 3.5-.2 7 1 10.3 1 3 2.9 5.7 5.3 7.7"
          />
          <path
            className="linea"
            fill="none"
            stroke="#009488"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M61.7 306.1h0c-14.8 5.1-31-2.4-36.7-17"
          />
        </g>
      </svg>
    </StyledEsaltato>
  );
};
