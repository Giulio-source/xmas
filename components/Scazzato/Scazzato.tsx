import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import { useEffect, useRef } from "react";
import {
  scazzatoDefault,
  resetScazzato,
  scazzatoSingleClick,
} from "./scazzato.animations";
import { StyledScazzato } from "./Scazzato.style";

export const Scazzato = () => {
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
            setTimeout(() => {
              tl.current.resetAnim
                .invalidate()
                .restart()
                .then(() => {
                  tl.current.defaultAnim.invalidate().restart();
                });
            }, 500);
          });
      });
  }

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

    tl.current.defaultAnim = scazzatoDefault();
    tl.current.singleClickAnim = scazzatoSingleClick();
    tl.current.resetAnim = resetScazzato();
    tl.current.defaultAnim.play();
  }, []);

  return (
    <StyledScazzato>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        // viewBox="0 0 339.5 915.5"
        viewBox="0 0 340 600"
      >
        <path
          id="br"
          fill="#FFF"
          d="M427.8 594.8c0-73.7-120.6-133.4-269.5-133.4s-269.5 59.7-269.5 133.4c0 43.5 42.2 82.2 107.4 106.6v334.3h342.3V693.9c54.8-24.4 89.3-59.8 89.3-99.1z"
        />
        <ellipse
          id="ombra"
          cx="159.8"
          cy="511.3"
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
          <g id="gamba-dex" stroke="#002764" strokeMiterlimit="10">
            <path fill="none" strokeWidth="10" d="M127.4 443.1v49.2" />
            <path
              id="Scarpa_dex_1_"
              fill="#002764"
              strokeWidth="2"
              d="m131 492.6-7.9-.5s-1.2 10.4-6.1 11-7.4-1.4-8.7-5.5c-1.3-4-1-7.3-3.5-7.3-3 0-3.1 5.3-1.8 9.8 1.2 4.3 5.5 9.8 12.2 9.8s10.4-6.7 10.4-6.7l.5 6.7h5v-17.3h-.1z"
            />
          </g>
          <g id="gamba-six" stroke="#002764" strokeMiterlimit="10">
            <path fill="none" strokeWidth="10" d="M191 445.1v49.3" />
            <path
              id="Scarpa_six_1_"
              fill="#002764"
              strokeWidth="2"
              d="m187.7 493.8 7.9-.5s1.5 9.2 6.1 11c4 1.5 7.1-1.3 8.1-5.5 1.3-5.2 1-7.9 3.5-7.9 3 0 3.7 5.9 2.4 10.4-1.2 4.3-5.5 9.8-12.2 9.8s-10.4-6.7-10.4-6.7l-.5 6.7h-5l.1-17.3z"
            />
          </g>

          <g id="corpo">
            <path
              fill="#009488"
              d="M198.5 342s-2.1 108.3-2.1 102.7c0-.2-73.3 2.7-74.4 0-1.2-2.7-.7-76.4 0-84.4"
            />
            <path
              fill="#002764"
              stroke="#002764"
              strokeMiterlimit="10"
              d="M196.7 416.8v11l-74.8 2.1-.4-10.7z"
            />
            <path
              fill="#002764"
              d="M158.5 400.5c-4.5-1-6.7 4.1-6.3 5.3s.9 4.6 3.6 4.7 5.8-1.7 5.8-4.7-.2-4.7-3.1-5.3zM158.6 382.4c-4.5-1-6.7 4.1-6.3 5.3.4 1.3.9 4.6 3.6 4.7 2.8 0 5.8-1.7 5.8-4.7s-.3-4.7-3.1-5.3z"
            />
          </g>
          <g id="braccio-six-basso">
            <path
              className="braccio"
              fill="none"
              stroke="#002764"
              stroke-width="10"
              stroke-miterlimit="10"
              d="M198.1,363.7
		c38.6,0,36.9,89.9,36.9,89.9"
            />
          </g>
          <g id="braccio-dex-basso">
            <path
              className="braccio"
              fill="none"
              stroke="#002764"
              stroke-width="10"
              stroke-miterlimit="10"
              d="M88.3,455.3
		c0,0-5.2-86.8,33.4-86.8"
            />
            <path
              fill="#F8CEDE"
              d="M93.1 454.7h-9.6s-3.5 11.2-1.2 11.2 3.5-5.6 3.5-5.6-.8 8.9 1.6 8.7 2.4-8.2 2.4-8.2.6 5.1 3.4 4.8c2.7-.3-.1-10.9-.1-10.9z"
            />
          </g>
          <g id="cappello">
            <path
              fill="#002764"
              d="M274.5 254.1c-11.3-2.3-16.8 9.4-15.8 12.4s2.1 10.7 9.1 10.8c6.9.1 14.4-3.9 14.4-10.8 0-7-.5-11-7.7-12.4z"
            />
            <path
              fill="#009488"
              d="M100.4 275s4.4-74 35.2-92.3 46.3-22 64.4-22 49 17.6 59.7 32.7c10.7 15.1 12.7 57.9 10.7 60.5-2 2.5-13.4-50.4-35.6-51s-24.8 20.2-26.2 25.8-3.3 38.7-3.3 38.7L100.4 275z"
            />
            <path
              fill="#002764"
              d="M100 275s2-35.6 12.6-61.7c0 0 17.3 48.1 19.6 56.2 0 0 20.4-60.8 23.3-64.1 2.9-3.4 23.7 61.2 23.7 61.2s33.7-55.1 35.7-56.4c2-1.3-4 57-4 56.8S100 275 100 275z"
            />
          </g>
          <path
            fill="#F8CEDE"
            d="M100.7 275c-.3 22-7.3 73.8 26.6 90.7 27.3 10.1 54.2 6.8 70.4-12.5 17.3-22.3 15.6-65.9 13.9-86.2-.7-3.3-39.7.3-55.4 1-15.6.7-53.5 3.2-55.5 7z"
          />
          <g id="orecchio-six">
            <path
              fill="#F8CEDE"
              d="M210.6 318.1s2.4-26.8 12.3-40 15.3-17.6 17.3-18.9c0 0 2.7 18.3-9.3 37.2-11.9 18.9-20.3 21.7-20.3 21.7z"
            />
            <path
              fill="none"
              stroke="#DE8BB5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="m212 309.3 13.2-20.8"
            />
          </g>
          <g id="orecchio-dex">
            <path
              fill="#F8CEDE"
              d="M68.8 279.4s12.6 4.4 21.9 21.4 9.3 16.6 12.6 28.1c0 0-19.1-9.4-27.2-24.8-7.9-15.2-7.3-24.7-7.3-24.7z"
            />
            <path
              fill="none"
              stroke="#DE8BB5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="m99.2 319.5-18.4-17.2"
            />
          </g>
          <g id="faccia">
            <circle cx="122" cy="302.9" r="9.2" fill="#FFF" />
            <circle cx="186.7" cy="302.9" r="9.2" fill="#FFF" />
            <circle
              id="occhio-dex"
              cx="122.5"
              cy="301"
              r="2.5"
              fill="#11142A"
            />
            <circle
              id="occhio-six"
              cx="187.2"
              cy="301"
              r="2.5"
              fill="#11142A"
            />
            <path
              fill="#F8CEDE"
              d="M122.8 332.1c5 0 9-4.2 9-9.3 0-5.1-4-9.3-9-9.3s-9 4.2-9 9.3a9 9 0 0 0 9 9.3zM187.2 332.1c5 0 9-4.2 9-9.3 0-5.1-4-9.3-9-9.3s-9 4.2-9 9.3a9 9 0 0 0 9 9.3z"
            />
            <path
              id="Guancia_6_"
              fill="#F05"
              stroke="#F05"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M195.2 319.4c-6.3-1.4-9.3 5.6-8.7 7.4s1.2 6.4 5 6.5c3.9.1 8-2.3 8-6.5s-.3-6.5-4.3-7.4z"
            />
            <path
              id="Guancia_1_"
              fill="#F05"
              stroke="#F05"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M118.8 322.5c2.4.3 5.9 1 4.7 7.7-1.2 6.9-4.1 5.1-6.5 5.1s-4.1-3.7-4.4-6.3c-.3-2.6 3.3-6.9 6.2-6.5z"
            />
            <path
              id="Naso_2_"
              fill="none"
              stroke="#11142A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M150.1 311.1s.5 5.6 3 5.6 3-5.6 3-6.6"
            />
            <path
              id="bocca"
              fill="none"
              stroke="#11142A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M155.2 335.8s-4.8-1.4-7.5.9"
            />
            <path
              id="palpebre"
              fill="#F8CEDE"
              d="M108.4 292.9h28.9v6.6h-28.9v-6.6zm66.2 0h28.9v6.6h-28.9v-6.6z"
            />
            <path
              id="sopracciglia-six"
              fill="none"
              stroke="#11142A"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="
	M182,287.8c0,0,7.3-0.4,6.8,0"
            />
            <path
              id="sopracciglia-dex"
              fill="none"
              stroke="#11142A"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="
	M126.3,291c0,0-6.8,0-6.8,0.6"
            />
          </g>
          <g id="braccio-dex">
            <path
              id="mano-dex"
              fill="#F8CEDE"
              d="m185.2 391.8 2.6 9.3s11.7.4 11.1-1.8c-.6-2.2-6.3-1.8-6.3-1.8s8.8-1.6 7.9-3.8c-.9-2.2-8.6-.1-8.6-.1s4.7-1.9 3.7-4.6c-1-2.8-10.4 2.8-10.4 2.8z"
            />
            <path
              className="braccio"
              fill="none"
              stroke="#002764"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M187.2 396.7c-52.4 4.5-73.4 2.7-81-5.4a9.7 9.7 0 0 1-2.4-9.3c1.2-4 4.6-12.1 17.7-12.1"
            />
          </g>
          <g id="braccio-six">
            <path
              id="mano-six"
              fill="#F8CEDE"
              d="m132.8 388.8-2.6 9.3s-11.7.4-11.1-1.8c.6-2.2 6.3-1.8 6.3-1.8s-8.8-1.6-7.9-3.8c.9-2.2 8.6-.1 8.6-.1s-4.7-1.9-3.7-4.6 10.4 2.8 10.4 2.8z"
            />
            <path
              className="braccio"
              fill="none"
              stroke="#002764"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M130.8 393.7c52.4 4.5 73.4 2.7 81-5.4 2.3-2.5 3.4-6 2.4-9.3a16.4 16.4 0 0 0-15.7-11.6"
            />
          </g>

          <g id="braccio-six-alto">
            <path
              fill="none"
              stroke="#002764"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M220 312.6c27.9 14.8 26.4 32.2 21.6 42.2-3.2 6.7-7.2 11.9-18.2 15.5-6.2 2-14.9 1.5-25.1 1.5"
            />
          </g>
          <g id="braccio-dex-alto">
            <path
              className="braccio"
              fill="none"
              stroke="#002764"
              strokeMiterlimit="10"
              strokeWidth="10"
              d="M92.9 318.4c-27.9 14.8-26.4 32.2-21.6 42.2 3.2 6.7 7.2 11.9 18.2 15.5 6.2 2 21.9 1.5 32.1 1.5"
            />
          </g>
          <path
            id="occhi-chiusi"
            fill="none"
            stroke="#11142A"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M183.2 308.4s7.3 0 6.8.4m-62.7-.2s-6.8-.4-6.8.2"
          />
        </g>
        <g id="palla2">
          <path
            fill="#F8CEDE"
            d="M284.9 99.9c-10.2-5.2-9.9-11.5-9.9-11.5h-7.8s.4 6.3-10.5 11.5-18.2 9.7-17.8 19.4 10.5 13.8 19.5 17.2c9 3.4 12.7 13.2 12.7 13.2h.2s3.5-9.8 11.9-13.2 17.9-7.5 18.3-17.2c.4-9.7-6.4-14.2-16.6-19.4z"
          />
          <g id="fiore_x5F_1_00000021091107803182820460000012927906427322232239_">
            <path
              fill="#F05"
              d="m268.3 120-13 3.4c-3 .8-6-1.5-6-4.7a5 5 0 0 1 6.2-4.8l12.8 3.3v2.8zM272.2 120l13 3.4c3 .8 6-1.5 6-4.7a5 5 0 0 0-6.2-4.8l-12.8 3.3v2.8zM271.2 121l3.4 13c.8 3-1.5 6-4.7 6a5 5 0 0 1-4.8-6.2l3.3-12.8h2.8zM271.2 117.1l3.4-13c.8-3-1.5-6-4.7-6a5 5 0 0 0-4.8 6.2l3.3 12.8h2.8z"
            />
            <circle cx="270" cy="118.7" r="2.8" fill="#5347FF" />
            <path
              fill="none"
              stroke="#5347FF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="m284.2 131.1-28.4-24.9M255.8 131.1l28.4-24.9"
            />
          </g>
          <path
            fill="#FFF6C9"
            d="M274.3 85.8h-6.7c-1 0-1.9.9-1.9 2v.1c0 1.1.9 2 1.9 2h6.8c1 0 1.9-.9 1.9-2v-.1c-.1-1.1-.9-2-2-2z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="m270.5 85.8-.6-94.3"
          />
        </g>
        <g id="palla1">
          <path
            fill="#F05"
            d="M81.8 142.6c-8.3-6.8-8-15.1-8-15.1h-6.3s.3 8.3-8.5 15.1c-8.9 6.8-14.7 12.7-14.4 25.5.3 12.7 8.5 18.2 15.8 22.6 7.3 4.4 10.3 17.3 10.3 17.3h.2s2.8-12.9 9.6-17.3 14.5-9.8 14.8-22.6c.2-12.8-5.3-18.7-13.5-25.5z"
          />
          <path
            fill="#FFF6C9"
            d="M73.9 123.5h-6.7c-1 0-1.9.9-1.9 2v.1c0 1.1.9 2 1.9 2H74c1 0 1.9-.9 1.9-2v-.1c-.1-1.1-1-2-2-2z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="m70.5 123.5-.6-254.3"
          />
          <g id="fiore_x5F_1_00000155828554992203977990000017144912858424671114_">
            <path
              fill="#FFF6C9"
              d="m67.5 168-13 3.4c-3 .8-6-1.5-6-4.7a5 5 0 0 1 6.2-4.8l12.8 3.3v2.8zM71.5 168.1l13 3.4c3 .8 6-1.5 6-4.7a5 5 0 0 0-6.2-4.8l-12.8 3.3v2.8zM70.5 169.1l3.4 13c.8 3-1.5 6-4.7 6a5 5 0 0 1-4.8-6.2l3.3-12.8h2.8zM70.5 165.1l3.4-13c.8-3-1.5-6-4.7-6a5 5 0 0 0-4.8 6.2l3.3 12.8h2.8z"
            />
            <circle cx="69.3" cy="166.7" r="2.8" fill="#5347FF" />
            <path
              fill="none"
              stroke="#5347FF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="m83.5 179.2-28.4-24.9M55.1 179.2l28.4-24.9"
            />
          </g>
        </g>
        <g id="palla3">
          <path
            fill="#009488"
            d="M184 94.8c-8.3-5.5-8-12.3-8-12.3h-6.3s.3 6.8-8.5 12.3c-8.9 5.5-14.7 10.4-14.4 20.8s8.5 14.8 15.8 18.4c7.3 3.6 10.3 14.1 10.3 14.1h.2s2.8-10.5 9.6-14.1 14.5-8 14.8-18.4c.2-10.5-5.2-15.3-13.5-20.8z"
          />
          <path
            fill="#FFF6C9"
            d="M176.1 79.2h-6.7c-1 0-1.9.7-1.9 1.7v.1c0 .9.9 1.7 1.9 1.7h6.8c1 0 1.9-.7 1.9-1.7v-.1c-.1-1-.9-1.7-2-1.7z"
          />
          <path
            fill="none"
            stroke="#003580"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="m172.7 79.2-.6-101.4"
          />
          <g id="fiore_x5F_1_00000028327300002171135220000002181511580678460094_">
            <path
              fill="#FFF6C9"
              d="m169.8 115.5-13 2.7c-3 .6-6-1.2-6-3.8 0-2.6 3.1-4.6 6.2-3.9l12.8 2.7v2.3zM173.7 115.5l13 2.7c3 .6 6-1.2 6-3.8 0-2.6-3.1-4.6-6.2-3.9l-12.8 2.7v2.3zM172.7 116.3l3.4 10.6c.8 2.5-1.5 4.9-4.7 4.9s-5.6-2.5-4.8-5.1l3.3-10.4h2.8zM172.7 113.1l3.4-10.6c.8-2.5-1.5-4.9-4.7-4.9s-5.6 2.5-4.8 5.1l3.3 10.4h2.8z"
            />
            <ellipse cx="171.5" cy="114.4" fill="#5347FF" rx="2.8" ry="2.2" />
            <path
              fill="none"
              stroke="#5347FF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="m185.7 124.6-28.4-20.3M157.3 124.6l28.4-20.3"
            />
          </g>
        </g>
      </svg>
    </StyledScazzato>
  );
};
