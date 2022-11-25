import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import { useEffect, useRef } from "react";
import { scazzatoDefault } from "./scazzato.animations";
import { StyledScazzato } from "./Scazzato.style";

export const Scazzato = () => {
  const svgRef = useRef(null);
  const tl = useRef<any>({});
  // const singleClick = useRef(true);

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

    tl.current.defaultAnim = scazzatoDefault();
    // tl.current.pallineAnim = pallineDiNatale();
    // tl.current.singleClickAnim = feliceSingleClick();
    // tl.current.resetAnim = resetElfo();
    tl.current.defaultAnim.play();
  }, []);

  return (
    <StyledScazzato>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        // viewBox="0 0 339.5 915.5"
        viewBox="0 0 339.5 600"
      >
        <path fill="#5347FF" d="M-.7-.9h340v1032.6H-.7z" />
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
        <g id="Neve_3_" fill="#FFF" opacity=".3">
          <path d="M270.3 142.9c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9c.1-1.9-.1-3-2-3.3zM320 163.6c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM38 184.4c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9 1.8 0 3.8-1 3.8-2.9s-.1-3-2-3.3zM96.4 138.2c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM323.1 294.1c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM284.4 377.5c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.2-2.9-2-3.3zM297.9 327.2c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM72.7 236.3c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM27.8 432.1c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM227.5 114.5c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4c-.1-1.5-.2-2.3-1.7-2.7zM277.3 95c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.1-2.4-1.7-2.7zM25 128.6c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.1-2.4-1.7-2.7zM176.7 123.4c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.2-2.3-1.7-2.7zM224.9 233.1c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.1-2.3-1.7-2.7zM256.2 344.7c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.1-2.4-1.7-2.7zM303.4 224.1c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4c-.1-1.5-.2-2.4-1.7-2.7zM65.7 191.1c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.2-2.4-1.7-2.7zM22.5 250c-2.4-.5-3.6 2.1-3.4 2.7.2.7.5 2.4 2 2.4s3.1-.8 3.1-2.4-.1-2.4-1.7-2.7zM291.4 276.2c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM75.8 416.3c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM38.4 304.6c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9 1.8 0 3.8-1 3.8-2.9s-.1-2.9-2-3.3zM130.2 94.4c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9 1.8 0 3.8-1 3.8-2.9s-.1-2.9-2-3.3zM259.9 429c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9 1.8 0 3.8-1 3.8-2.9s-.1-2.9-2-3.3zM320 412.7c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.1-2.9-2-3.3zM298.4 447.4c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.2-2.9-2-3.3zM71 359c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9s3.8-1 3.8-2.9-.2-2.9-2-3.3zM38.4 353.4c-3-.6-4.4 2.5-4.2 3.3.3.8.6 2.9 2.4 2.9 1.8 0 3.8-1 3.8-2.9s-.1-2.9-2-3.3z" />
        </g>
        <g id="gamba_x5F_dex_2_" stroke="#002764" strokeMiterlimit="10">
          <path fill="none" strokeWidth="10" d="M127.4 443.1v49.2" />
          <path
            id="Scarpa_dex_1_"
            fill="#002764"
            strokeWidth="2"
            d="m131 492.6-7.9-.5s-1.2 10.4-6.1 11-7.4-1.4-8.7-5.5c-1.3-4-1-7.3-3.5-7.3-3 0-3.1 5.3-1.8 9.8 1.2 4.3 5.5 9.8 12.2 9.8s10.4-6.7 10.4-6.7l.5 6.7h5v-17.3h-.1z"
          />
        </g>
        <g id="gamba_x5F_six_2_" stroke="#002764" strokeMiterlimit="10">
          <path fill="none" strokeWidth="10" d="M191 445.1v49.3" />
          <path
            id="Scarpa_six_1_"
            fill="#002764"
            strokeWidth="2"
            d="m187.7 493.8 7.9-.5s1.5 9.2 6.1 11c4 1.5 7.1-1.3 8.1-5.5 1.3-5.2 1-7.9 3.5-7.9 3 0 3.7 5.9 2.4 10.4-1.2 4.3-5.5 9.8-12.2 9.8s-10.4-6.7-10.4-6.7l-.5 6.7h-5l.1-17.3z"
          />
        </g>
        <g id="braccio-six-basso">
          <path
            fill="none"
            stroke="#002764"
            strokeMiterlimit="10"
            strokeWidth="10"
            d="M190.7 352.3s48.6 20.1 44.7 102.1"
          />
          <path
            id="mano_six_00000178903611617251645720000008606836962665526156_"
            fill="#F8CEDE"
            d="M230.1 453.5h9.6s3.5 11.2 1.2 11.2-3.5-5.6-3.5-5.6.8 8.9-1.6 8.7-2.4-8.2-2.4-8.2-.6 5.1-3.4 4.8.1-10.9.1-10.9z"
          />
        </g>
        <g id="braccio-dex-basso">
          <path
            fill="none"
            stroke="#002764"
            strokeMiterlimit="10"
            strokeWidth="10"
            d="M88.3 455.3s-4.3-73.8 37.8-89.6"
          />
          <path
            fill="#F8CEDE"
            d="M93.1 454.7h-9.6s-3.5 11.2-1.2 11.2 3.5-5.6 3.5-5.6-.8 8.9 1.6 8.7 2.4-8.2 2.4-8.2.6 5.1 3.4 4.8c2.7-.3-.1-10.9-.1-10.9z"
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
        <g id="orecchio_dex_5_">
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
        <g id="orecchio_dex_4_">
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
        <g id="facce_2_">
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
        </g>
        <g id="braccio_x5F_s_x5F_1_00000051386060057332615130000006354494082865645230_">
          <path
            fill="none"
            stroke="#002764"
            strokeMiterlimit="10"
            strokeWidth="10"
            d="M130.8 393.7c52.4 4.5 73.4 2.7 81-5.4 2.3-2.5 3.4-6 2.4-9.3a16.4 16.4 0 0 0-15.7-11.6"
          />
          <path
            id="mano_six_6_"
            fill="#F8CEDE"
            d="m132.8 388.8-2.6 9.3s-11.7.4-11.1-1.8c.6-2.2 6.3-1.8 6.3-1.8s-8.8-1.6-7.9-3.8c.9-2.2 8.6-.1 8.6-.1s-4.7-1.9-3.7-4.6 10.4 2.8 10.4 2.8z"
          />
        </g>
        <path
          id="bocca_1_"
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M155.2 335.8s-4.8-1.4-7.5.9"
        />
        <path
          id="palpebre_1_"
          fill="#F8CEDE"
          d="M108.4 292.9h28.9v6.6h-28.9v-6.6zm66.2 0h28.9v6.6h-28.9v-6.6z"
        />
        <path
          id="sopracciglia-six"
          fill="none"
          stroke="#11142A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="
	M182,287.8c0,0,7.3-0.4,6.8,0"
        />
        <path
          id="sopracciglia-dex"
          fill="none"
          stroke="#11142A"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="
	M126.3,291c0,0-6.8,0-6.8,0.6"
        />
        <g id="braccio_x5F_d_x5F_1_00000072265779343340727350000008197042640689560232_">
          <path
            fill="none"
            stroke="#002764"
            strokeMiterlimit="10"
            strokeWidth="10"
            d="M187.2 396.7c-52.4 4.5-73.4 2.7-81-5.4a9.7 9.7 0 0 1-2.4-9.3c1.2-4 4.6-12.1 17.7-12.1"
          />
          <path
            id="mano_six_8_"
            fill="#F8CEDE"
            d="m185.2 391.8 2.6 9.3s11.7.4 11.1-1.8c-.6-2.2-6.3-1.8-6.3-1.8s8.8-1.6 7.9-3.8c-.9-2.2-8.6-.1-8.6-.1s4.7-1.9 3.7-4.6c-1-2.8-10.4 2.8-10.4 2.8z"
          />
        </g>
        <g id="braccio-six-alto">
          <path
            id="mano_six_00000077290159741454909040000005599876907116039346_"
            fill="#EEADC6"
            d="m218.2 316.3 4.6-8.4s-8.1-8.5-9.2-6.5c-1.1 2 3.2 5.7 3.2 5.7s-7.4-5-8.4-2.8c-.9 2.2 6.1 6.1 6.1 6.1s-4.7-1.9-5.9.7c-1.1 2.6 9.6 5.2 9.6 5.2z"
          />
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
            id="mano_six_00000152247324343541456750000016230154497229277111_"
            fill="#EEADC6"
            d="m94.8 322.1-4.6-8.4s8.1-8.5 9.2-6.5-3.2 5.7-3.2 5.7 7.4-5 8.4-2.8-6.1 6.1-6.1 6.1 4.7-1.9 5.9.7c1 2.6-9.6 5.2-9.6 5.2z"
          />
          <path
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
        <g id="palla1_00000155107925035004466590000001990210046824334245_">
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
        <g
          id="rami2"
          fill="#009488"
          stroke="#009488"
          strokeMiterlimit="10"
          strokeWidth="3"
        >
          <path
            id="pino_x5F_1_8_"
            d="M163.8 48.9c5.3-2.5 11.1-3 16.9-3.3-3.3 3.8-6.5 7.7-9.5 11.8-1.1 1.5 1.3 3.2 2.4 1.7 2-2.7 4.1-5.4 6.3-8-.2 3.6-.9 7.1-2 10.5-.6 1.8 2.2 2.8 2.8 1 1.6-4.9 2.3-9.8 2.2-15v-.1a238 238 0 0 1 8.4-9.1 70.9 70.9 0 0 1-3.2 17c-.6 1.8 2.2 2.8 2.8 1a70.3 70.3 0 0 0 3.5-20.8v-.2l6.2-6c.2 7.6-1 15-3.6 22.1-.6 1.8 2.1 2.8 2.8 1a63 63 0 0 0 3.7-24.4c0-.4-.2-.8-.5-1l8.8-7.9a77 77 0 0 1-4.9 29.7c-.7 1.8 2.1 2.8 2.8 1a81.8 81.8 0 0 0 4.9-32.9l-.1-.3a80 80 0 0 0 3.2-2.8l6.5-5.6a80 80 0 0 1-4.3 29.1c-.6 1.8 2.1 2.8 2.8 1a81.2 81.2 0 0 0 4.4-32.1l-.1-.4c2.6-2.2 5.1-4.4 7.8-6.5-.7 10.5-2 20.9-3.7 31.3-.3 1.9 2.6 2.1 2.9.2 1.8-11.1 3.1-22.2 3.8-33.4l-.1-.6a97 97 0 0 1 6.4-4.8c2.3 4.8 2.5 9.2 2 14.6-.5 5.9-1.5 11.7-2.8 17.4-.4 1.8 2.3 2.9 2.8 1 2.6-11 5.8-24.2.4-34.8 6.5-4.5 13.3-8.5 20.6-11.6 1.8-.7.5-3.4-1.3-2.7-7.2 3-13.9 6.9-20.3 11.3-8.6-4.7-18.2-7-28-6.6-1.9.1-2.2 3-.2 2.9 8.9-.3 17.7 1.5 25.6 5.6l-6.6 5c-11-3.6-22.6-4.3-34.1-4.9-1.9-.1-2.2 2.9-.2 2.9 10.6.5 21.3 1.1 31.6 4.1l-9.3 7.8c-11-3-22.5-3.3-33.7-.7-1.8.4-1.3 3.3.5 2.9a66.4 66.4 0 0 1 30.4.1l-5.7 4.9-3 2.6a51 51 0 0 0-27.4.5c-1.8.5-1.3 3.5.5 2.9a47 47 0 0 1 24.1-1l-9.4 8.4c-8.3-2.5-16.8-3-25.4-1.5-1.9.3-1.3 3.2.5 2.9 7.5-1.3 15-1 22.3.9l-5.2 5h-.1a74 74 0 0 0-26.1 1.1c-1.9.4-1.3 3.3.5 2.9a70.6 70.6 0 0 1 22.9-1.3l-7.1 7.5-.6-.1c-6.9.2-13.9.6-20.2 3.6-1.3 1.4 0 4.1 1.7 3.2z"
          />
          <path
            id="pino_x5F_2_8_"
            d="M242.8 57.4a43.3 43.3 0 0 1 17.2-1c-3.8 3.3-7.5 6.8-11 10.5-1.3 1.4.8 3.4 2.2 2l7.3-7.1c-.7 3.5-1.8 6.9-3.4 10.2-.8 1.7 1.8 3.1 2.6 1.4 2.2-4.6 3.6-9.4 4.2-14.5v-.1l9.5-7.9a64.7 64.7 0 0 1-5.5 16.4c-.8 1.7 1.8 3.1 2.6 1.4a71.9 71.9 0 0 0 6.3-20.2v-.2l6.9-5.1c-.9 7.5-3 14.7-6.5 21.4-.9 1.7 1.7 3.1 2.6 1.4a65 65 0 0 0 7-23.6 2 2 0 0 0-.3-1.1 338 338 0 0 1 9.8-6.7c-1 10.1-4 19.8-8.8 28.8-.9 1.7 1.7 3.1 2.6 1.4a81 81 0 0 0 9.3-31.9v-.3l3.5-2.3 7.2-4.7a78.2 78.2 0 0 1-8.2 28.3c-.9 1.7 1.8 3.1 2.6 1.4 5-9.8 7.8-20.3 8.7-31.2v-.4c2.8-1.8 5.7-3.7 8.6-5.4a316.9 316.9 0 0 1-7.8 30.5c-.6 1.8 2.3 2.5 2.9.6 3.3-10.7 6.1-21.6 8.3-32.6v-.6l6.9-3.9c1.7 5 1.3 9.4.1 14.7-1.3 5.7-3 11.4-5.1 16.9-.7 1.8 1.9 3.2 2.6 1.4 4-10.6 9-23.2 5.1-34.4 7-3.6 14.3-6.7 22-8.7 1.8-.5.9-3.3-.9-2.8-7.5 2-14.7 5-21.6 8.5a54.5 54.5 0 0 0-26.9-10.3c-1.9-.2-2.5 2.7-.6 2.9 8.9.9 17.3 3.9 24.6 8.9l-7.2 4c-10.5-5-21.8-7.3-33.1-9.4-1.9-.3-2.5 2.5-.6 2.9 10.5 1.9 21 4 30.7 8.3l-10.3 6.5a70.2 70.2 0 0 0-33.3-5.2c-1.9.2-1.8 3.1.1 3 10.3-1 20.5.4 30.1 4.2l-6.3 4.1-3.3 2.1a50.6 50.6 0 0 0-27.2-3.2c-1.9.3-1.7 3.3.1 3 8.1-1.3 16.3-.6 24 2.2L282.7 39a55 55 0 0 0-24.9-4.9c-1.9.1-1.8 3 .1 3 7.6-.3 15 1 22 3.9l-5.8 4.2h-.1a76 76 0 0 0-26-2.4c-1.9.2-1.8 3.1.1 3 7.7-.6 15.4 0 22.9 1.8a461 461 0 0 0-8.1 6.5l-.6-.2a48.8 48.8 0 0 0-20.5.9c-1.7.4-.8 3.2 1 2.6z"
          />
          <path
            id="pino_x5F_5_8_"
            d="M318.9 145.5a43 43 0 0 1 8.9-14.8c.6 5 1.4 10 2.4 15 .4 1.9 3.3 1.2 2.9-.7-.7-3.3-1.3-6.7-1.8-10 2.5 2.6 4.7 5.4 6.5 8.5 1 1.6 3.6.3 2.6-1.4a47.3 47.3 0 0 0-9.7-11.7l-.1-.1c-.5-4.1-.9-8.2-1.1-12.3 4.1 4.1 7.6 8.7 10.5 13.7 1 1.6 3.6.3 2.6-1.4-3.6-6.2-8-11.7-13.2-16.5l-.2-.1-.3-8.6a62 62 0 0 1 14 17.4c.9 1.7 3.5.3 2.6-1.4a62.3 62.3 0 0 0-15.6-19c-.3-.3-.7-.4-1.1-.4V89.8a76.9 76.9 0 0 1 18.9 23.5c.9 1.7 3.5.3 2.6-1.4a79.5 79.5 0 0 0-21.2-25.6l-.3-.2.1-4.2.2-8.6c7.6 6.3 14 14 18.7 22.7.9 1.7 3.5.3 2.6-1.4a81.4 81.4 0 0 0-21.3-24.9l.3-10.1a312 312 0 0 1 20.8 23.7c1.2 1.5 3.3-.5 2.2-2a332 332 0 0 0-22.3-25.2c-.2-.2-.3-.3-.5-.3l.6-8c5.1 1.5 8.5 4.2 12.2 8.2 4 4.3 7.7 8.9 11.1 13.7 1.1 1.5 3.7.2 2.6-1.4-6.5-9.3-14.1-20.5-25.6-23.6 1-7.8 2.5-15.6 5.2-23.1.6-1.8-2.2-2.6-2.8-.8-2.6 7.4-4.2 15-5.2 22.7a54.9 54.9 0 0 0-23.6 16.4c-1.2 1.4.8 3.6 2 2.2a52.1 52.1 0 0 1 21.2-15.3l-.7 8.2c-10 5.8-18.3 13.9-26.4 22.1-1.3 1.3.7 3.5 2 2.2 7.5-7.6 15.1-15.1 24.2-20.7l-.4 12.1a68.7 68.7 0 0 0-23 24.6c-.9 1.7 1.6 3.2 2.5 1.5 5-9 11.9-16.7 20.4-22.5l-.1 7.6-.1 3.9a50.5 50.5 0 0 0-17.9 20.7c-.8 1.7 1.7 3.3 2.5 1.5a47.2 47.2 0 0 1 15.4-18.6V102a53.1 53.1 0 0 0-18 17.9c-1 1.6 1.5 3.2 2.5 1.5 4-6.4 9.3-11.8 15.6-16l.2 7.1h-.1a74.6 74.6 0 0 0-16.6 20.1c-.9 1.7 1.6 3.2 2.5 1.5a71.4 71.4 0 0 1 14.3-18l.8 10.3-.5.4a49.4 49.4 0 0 0-10.8 17.4c-.1 2.3 2.7 3.1 3.3 1.3z"
          />
          <path
            id="pino_x5F_3_8_"
            d="M118.8 3.9a43 43 0 0 1-15.6-7.3c4.9-1.1 9.8-2.4 14.7-3.9 1.8-.6.9-3.4-1-2.8l-9.8 2.8c2.3-2.8 4.9-5.2 7.8-7.4 1.5-1.1-.1-3.6-1.6-2.5-4.1 3-7.7 6.6-10.6 10.8l-.1.1c-4 .9-8.1 1.7-12.1 2.4 3.7-4.5 7.9-8.4 12.6-11.8 1.5-1.1-.1-3.6-1.6-2.5A68.9 68.9 0 0 0 86.3-3.4l-.1.2L77.7-2a59.4 59.4 0 0 1 15.9-15.7c1.6-1.1-.1-3.5-1.6-2.5A60.4 60.4 0 0 0 74.6-2.7c-.2.4-.3.8-.2 1.1-3.9.5-7.9.9-11.8 1.2A75.8 75.8 0 0 1 84-21.6c1.6-1.1-.1-3.5-1.6-2.5A81.3 81.3 0 0 0 59-.4l-.2.3-4.2.4L46 1a80.7 80.7 0 0 1 20.6-21c1.6-1.1-.1-3.5-1.6-2.5A83.2 83.2 0 0 0 42.5.8l-.2.4-10 .8c6.8-8 13.9-15.8 21.4-23.1 1.4-1.3-.9-3.3-2.2-1.9-8 7.7-15.6 16-22.8 24.6l-.3.5-8 .2c.9-5.2 3.4-8.9 6.9-13a133 133 0 0 1 12.5-12.4c1.4-1.2-.2-3.7-1.6-2.5-8.5 7.5-18.9 16.1-20.7 27.9A116 116 0 0 1-6-.5c-1.8-.5-2.4 2.4-.5 2.9C1.1 4.2 8.8 5 16.5 5.2A54.8 54.8 0 0 0 35.2 27c1.6 1.1 3.5-1.2 1.9-2.2A51.3 51.3 0 0 1 19.7 5.2l8.2-.1c6.8 9.4 15.7 16.8 24.7 24 1.5 1.2 3.4-1 1.9-2.2C46.4 20.2 38.1 13.4 31.6 5l12.1-.8a70.5 70.5 0 0 0 26.8 20.3c1.7.7 3-1.9 1.3-2.7a66.2 66.2 0 0 1-24.5-18l7.5-.6 3.9-.3c6 7.2 13.6 12.6 22.4 15.7 1.8.6 3.1-2 1.3-2.7A48.2 48.2 0 0 1 62.3 2.5l12.6-1.3a53.8 53.8 0 0 0 19.6 16.1c1.7.8 3-1.8 1.3-2.7C89 11.3 83.1 6.6 78.3.7l7.1-1 .1.1a77 77 0 0 0 21.7 14.5c1.7.8 3-1.9 1.3-2.7A72.4 72.4 0 0 1 89.2-.8l10.2-1.9.4.4a49 49 0 0 0 18.5 9c1.8.5 2.4-2.4.5-2.8z"
          />
          <path
            id="pino_x5F_4_13_"
            d="M37 103.9c-1.3-5.7-.6-11.5.4-17.2 3 4.1 6.2 8 9.5 11.9 1.3 1.4 3.4-.6 2.2-2l-6.5-7.9c3.4 1 6.7 2.4 9.9 4.2 1.6 1 3.2-1.5 1.6-2.5A44.8 44.8 0 0 0 40 85h-.1c-2.5-3.3-4.8-6.7-7.1-10.1a65.7 65.7 0 0 1 15.9 6.8c1.6 1 3.2-1.5 1.6-2.5a72.6 72.6 0 0 0-19.6-7.9h-.2L26 64a60.5 60.5 0 0 1 20.8 8.3c1.6 1 3.2-1.5 1.6-2.5a66 66 0 0 0-23-8.9c-.4-.1-.8 0-1.1.2l-5.9-10.3c10 1.8 19.5 5.6 28 11.1 1.6 1 3.2-1.5 1.6-2.5a82.6 82.6 0 0 0-31-11.9h-.3l-2-3.7-4.1-7.6a78 78 0 0 1 27.5 10.5c1.6 1 3.2-1.5 1.6-2.5A82.7 82.7 0 0 0 9.3 33h-.4l-4.7-9c10.1 3 20 6.4 29.8 10.3 1.8.7 2.6-2.1.9-2.8-10.4-4.2-21-7.8-31.8-10.9l-.6-.1a98.2 98.2 0 0 1-3.6-7.3c5.1-1.2 9.5-.5 14.7 1.1 5.6 1.8 11.1 4 16.4 6.5 1.7.8 3.3-1.7 1.6-2.5C21.3 13.4 9.2 7.4-2.3 10.4c-3-7.3-5.5-14.8-6.9-22.6-.3-1.9-3.2-1.2-2.9.7 1.4 7.7 3.7 15.1 6.7 22.3a55 55 0 0 0-12.5 26c-.3 1.9 2.5 2.7 2.8.9A52.4 52.4 0 0 1-4.2 13.9l3.4 7.5c-5.9 10-9 21.1-12 32.3-.5 1.8 2.3 2.7 2.8.9A135 135 0 0 1 .8 24.7l5.6 10.7A70.2 70.2 0 0 0-1.3 68c0 1.9 3 2 3 .1a64.5 64.5 0 0 1 6.6-29.7 407.4 407.4 0 0 1 5.5 10.2 50.2 50.2 0 0 0-5.4 26.7c.1 1.9 3.1 2 3 .1-.6-8.2.8-16.3 4.2-23.8l6.2 11A55 55 0 0 0 14.9 87c-.1 1.9 2.9 2 3 .1.3-7.6 2.2-14.9 5.7-21.6l3.7 6.1v.1c-3 8.3-4.5 16.9-4.5 25.7 0 1.9 3 2 3 .1 0-7.8 1.2-15.3 3.6-22.7l5.8 8.6-.2.5a49 49 0 0 0-.8 20.5c.3 2 3.2 1.3 2.8-.5z"
          />
        </g>
        <g
          id="rami"
          fill="#002764"
          stroke="#002764"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        >
          <path
            id="pino_x5F_1_6_"
            d="M178.1 14.7a43 43 0 0 0-16.2 6c4.8 1.5 9.6 3.2 14.3 5.2 1.8.7.6 3.4-1.2 2.7a184 184 0 0 0-9.5-3.6c2 2.9 4.4 5.6 7.2 8 1.4 1.2-.4 3.6-1.8 2.3a46.8 46.8 0 0 1-9.7-11.6l-.1-.1c-3.9-1.2-7.9-2.4-11.9-3.4 3.3 4.7 7.1 9 11.6 12.8 1.4 1.2-.4 3.6-1.8 2.3-5.4-4.6-10-10-13.8-16l-.1-.2-8.4-1.9a62.5 62.5 0 0 0 14.6 17c1.5 1.2-.4 3.5-1.8 2.3a62.6 62.6 0 0 1-15.8-18.9c-.2-.4-.2-.8-.2-1.1l-11.7-2.2a77 77 0 0 0 19.6 22.9c1.5 1.2-.3 3.5-1.8 2.3-8.8-7-16-15.6-21.3-25.5l-.1-.3-4.2-.7-8.5-1.4a78.8 78.8 0 0 0 18.8 22.6c1.5 1.2-.4 3.5-1.8 2.3a81.1 81.1 0 0 1-20.4-25.1l-.1-.4-10-1.5c6.1 8.6 12.6 16.9 19.4 24.8 1.2 1.4-1.2 3.2-2.4 1.7A348.3 348.3 0 0 1 88.4 9.5l-.2-.6L80 8c.5 5.3 2.6 9.2 5.8 13.5 3.5 4.7 7.3 9.2 11.5 13.4 1.3 1.3-.5 3.7-1.8 2.3-8-8-17.6-17.5-18.5-29.4-7.9-.5-15.8-.4-23.6.8-1.9.3-2.2-2.7-.3-2.9 7.7-1.2 15.5-1.3 23.2-.9 5-8.5 11.9-15.4 20.5-20.2 1.6-.9 3.4 1.5 1.7 2.4a53 53 0 0 0-19 18l8.2.8c7.6-8.8 17.1-15.4 26.6-21.9 1.6-1.1 3.3 1.3 1.7 2.4-8.8 6-17.6 12-24.8 19.9l12 1.8a68.8 68.8 0 0 1 28.4-18.1c1.8-.6 2.9 2.2 1 2.8a65 65 0 0 0-25.9 15.9l7.5 1.3 3.9.7a50.2 50.2 0 0 1 23.6-13.8c1.8-.5 2.9 2.3 1 2.8-8 2.1-15.2 6-21.1 11.7l12.4 2.3A56 56 0 0 1 155-.8c1.8-.7 2.8 2.1 1 2.8a52 52 0 0 0-18.6 12.4l7 1.6.1-.1a73.2 73.2 0 0 1 22.9-12.6c1.8-.6 2.9 2.2 1 2.8a72.1 72.1 0 0 0-20.3 10.8c3.4.8 6.7 1.7 10 2.7l.4-.4c6-3.4 12.1-6.7 19.1-7.4 2.1-.3 2.4 2.7.5 2.9z"
          />
          <path
            id="pino_x5F_2_6_"
            d="M95.9 67.4a43.3 43.3 0 0 0-17.2-1c3.8 3.3 7.5 6.8 11 10.5 1.3 1.4-.8 3.4-2.2 2l-7.3-7.1c.7 3.5 1.8 6.9 3.4 10.2.8 1.7-1.8 3.1-2.6 1.4a45.6 45.6 0 0 1-4.2-14.5v-.1l-9.5-7.9a64.7 64.7 0 0 0 5.5 16.4c.8 1.7-1.8 3.1-2.6 1.4a71.9 71.9 0 0 1-6.3-20.2v-.2L57 53.2c.9 7.5 3 14.7 6.5 21.4.9 1.7-1.7 3.1-2.6 1.4a65 65 0 0 1-7-23.6c0-.4.1-.8.3-1.1a338 338 0 0 0-9.8-6.7c1 10.1 4 19.8 8.8 28.8.9 1.7-1.7 3.1-2.6 1.4a81 81 0 0 1-9.3-31.9v-.3l-3.5-2.3-7.2-4.7c.9 9.9 3.7 19.4 8.2 28.3.9 1.7-1.8 3.1-2.6 1.4-5-9.8-7.8-20.3-8.7-31.2v-.4c-2.8-1.8-5.7-3.7-8.6-5.4 2.1 10.3 4.7 20.5 7.8 30.5.6 1.8-2.3 2.5-2.9.6a331.1 331.1 0 0 1-8.3-32.6v-.6l-6.9-3.9c-1.7 5-1.3 9.4-.1 14.7 1.3 5.7 3 11.4 5.1 16.9.7 1.8-1.9 3.2-2.6 1.4-4-10.6-9-23.2-5.1-34.4-7-3.6-14.3-6.7-22-8.7-1.8-.5-.9-3.3.9-2.8 7.5 2 14.7 5 21.6 8.5A54.5 54.5 0 0 1 33.3 7.6c1.9-.2 2.5 2.7.6 2.9-8.9.9-17.3 3.9-24.6 8.9l7.2 4c10.5-5 21.8-7.3 33.1-9.4 1.9-.3 2.5 2.5.6 2.9a134 134 0 0 0-30.7 8.3l10.3 6.5a70.2 70.2 0 0 1 33.3-5.2c1.9.2 1.8 3.1-.1 3-10.3-1-20.5.4-30.1 4.2a224.7 224.7 0 0 0 9.6 6.2 50.6 50.6 0 0 1 27.2-3.2c1.9.3 1.7 3.3-.1 3a47.8 47.8 0 0 0-24 2.2L56 49a55 55 0 0 1 24.9-4.9c1.9.1 1.8 3-.1 3-7.6-.3-15 1-22 3.9l5.8 4.2h.1a76 76 0 0 1 26-2.4c1.9.2 1.8 3.1-.1 3-7.7-.6-15.4 0-22.9 1.8a461 461 0 0 1 8.1 6.5l.6-.2c6.9-.7 13.8-1.3 20.5.9 1.8.4.9 3.2-1 2.6z"
          />
          <path
            id="pino_x5F_3_6_"
            d="M220 13.9a43 43 0 0 0 15.6-7.3c-4.9-1.1-9.8-2.4-14.7-3.9-1.8-.6-.9-3.4 1-2.8l9.8 2.8a45.6 45.6 0 0 0-7.8-7.4c-1.5-1.1.1-3.6 1.6-2.5a45.3 45.3 0 0 1 10.7 10.9c4 .9 8.1 1.7 12.1 2.4a67.1 67.1 0 0 0-12.6-11.8c-1.5-1.1.1-3.6 1.6-2.5a70.6 70.6 0 0 1 15.1 14.8l.1.2L261 8a59.4 59.4 0 0 0-15.9-15.7c-1.6-1.1.1-3.5 1.6-2.5a64.4 64.4 0 0 1 17.4 17.5c.2.4.3.8.2 1.1 3.9.5 7.9.9 11.8 1.2a78.5 78.5 0 0 0-21.4-21.2c-1.6-1.1.1-3.5 1.6-2.5a79.8 79.8 0 0 1 23.3 23.7l.2.3 4.2.4 8.6.7A80.7 80.7 0 0 0 272-10c-1.6-1.1.1-3.5 1.6-2.5 9 6.2 16.5 14.1 22.5 23.3l.2.4 10.1.7c-6.8-8-13.9-15.8-21.4-23.1-1.4-1.3.9-3.3 2.2-1.9 8 7.9 15.6 16.1 22.8 24.7l.3.5 8 .2c-.9-5.2-3.4-8.9-6.9-13a133 133 0 0 0-12.5-12.4c-1.4-1.2.2-3.7 1.6-2.5 8.6 7.4 18.9 16.1 20.8 27.8 7.9-.2 15.7-.9 23.5-2.8 1.9-.4 2.4 2.5.5 2.9-7.6 1.8-15.3 2.6-23.1 2.8a54.8 54.8 0 0 1-18.7 21.8c-1.6 1.1-3.5-1.2-1.9-2.2 7.4-5 13.4-11.6 17.4-19.6l-8.2-.1a127.7 127.7 0 0 1-24.7 24c-1.5 1.2-3.4-1-1.9-2.2a137 137 0 0 0 23.1-21.9l-12.1-.8a69.8 69.8 0 0 1-26.8 20.4c-1.7.7-3-1.9-1.3-2.7 9.5-4 17.8-10.2 24.5-18l-7.5-.6-3.9-.3a51.2 51.2 0 0 1-22.4 15.7c-1.8.6-3.1-2-1.3-2.7a48.2 48.2 0 0 0 20.1-13.4L264 11.2a53.8 53.8 0 0 1-19.6 16.1c-1.7.8-3-1.8-1.3-2.7 6.8-3.3 12.7-8 17.5-13.9a173 173 0 0 1-7.1-1l-.1.1a77 77 0 0 1-21.7 14.5c-1.7.8-3-1.9-1.3-2.7a72.4 72.4 0 0 0 19.3-12.4 365 365 0 0 1-10.2-1.9l-.4.4a49 49 0 0 1-18.5 9c-1.9.5-2.5-2.4-.6-2.8z"
          />
          <path
            id="pino_x5F_4_10_"
            d="M301.8 113.9c1.3-5.7.6-11.5-.4-17.2-3 4.1-6.2 8-9.5 11.9-1.3 1.4-3.4-.6-2.2-2l6.5-7.9c-3.4 1-6.7 2.4-9.9 4.2-1.6 1-3.2-1.5-1.6-2.5 4.4-2.6 9.1-4.4 14.1-5.4h.1c2.5-3.3 4.8-6.7 7.1-10.1a65.7 65.7 0 0 0-15.9 6.8c-1.6 1-3.2-1.5-1.6-2.5a72.6 72.6 0 0 1 19.6-7.9h.2l4.5-7.3a60.5 60.5 0 0 0-20.8 8.3c-1.6 1-3.2-1.5-1.6-2.5a66 66 0 0 1 23-8.9c.4-.1.8 0 1.1.2l5.9-10.3a76.5 76.5 0 0 0-28 11.1c-1.6 1-3.2-1.5-1.6-2.5 9.5-6.1 19.9-10 31-11.9h.3l2-3.7 4.1-7.6a78 78 0 0 0-27.5 10.5c-1.6 1-3.2-1.5-1.6-2.5A82.7 82.7 0 0 1 329.5 43h.4l4.7-9c-10.1 3-20 6.4-29.8 10.3-1.8.7-2.6-2.1-.9-2.8 10.4-4.2 21-7.8 31.8-10.9l.6-.1 3.4-7.2c-5.1-1.2-9.5-.5-14.7 1.1-5.6 1.8-11.1 4-16.4 6.5-1.7.8-3.3-1.7-1.6-2.5 10.2-4.9 22.4-10.9 33.9-7.9 3-7.3 5.5-14.8 6.9-22.6.3-1.9 3.2-1.2 2.9.7-1.4 7.7-3.7 15.1-6.7 22.3a55 55 0 0 1 12.5 26c.3 1.9-2.5 2.7-2.8.9A52.4 52.4 0 0 0 342.8 24l-3.4 7.5c5.9 10 9 21.1 12 32.3.5 1.8-2.3 2.7-2.8.9a135 135 0 0 0-10.8-29.9l-5.6 10.7a69 69 0 0 1 7.9 32.7c0 1.9-3 2-3 .1a66.4 66.4 0 0 0-6.6-29.7l-3.6 6.7-1.9 3.5a51 51 0 0 1 5.4 26.8c-.1 1.9-3.1 2-3 .1.6-8.2-.8-16.3-4.2-23.8l-6.2 11a55 55 0 0 1 6.9 24.4c.1 1.9-2.9 2-3 .1a50.7 50.7 0 0 0-5.7-21.6l-3.7 6.1v.1c3 8.3 4.5 16.9 4.5 25.7 0 1.9-3 2-3 .1 0-7.8-1.2-15.3-3.6-22.7l-5.8 8.6.2.5a49 49 0 0 1 .8 20.5c-.3 1.7-3.2 1-2.8-.8z"
          />
          <path
            id="pino_x5F_5_6_"
            d="M19.9 155.5a43 43 0 0 0-8.9-14.8c-.6 5-1.4 10-2.4 15-.4 1.9-3.3 1.2-2.9-.7.7-3.3 1.3-6.7 1.8-10a44.6 44.6 0 0 0-6.5 8.5c-1 1.6-3.6.3-2.6-1.4 2.6-4.4 5.8-8.3 9.7-11.7l.1-.1c.5-4.1.9-8.2 1.1-12.3a66.5 66.5 0 0 0-10.5 13.7c-1 1.6-3.6.3-2.6-1.4 3.6-6.2 8-11.7 13.2-16.5l.2-.1.3-8.6a62 62 0 0 0-14 17.4c-.9 1.7-3.5.3-2.6-1.4a62.3 62.3 0 0 1 15.6-19c.3-.3.7-.4 1.1-.4V99.8a78.5 78.5 0 0 0-19 23.6c-.9 1.7-3.5.3-2.6-1.4A79.5 79.5 0 0 1 9.6 96.4l.3-.2-.1-4.2-.2-8.6c-7.6 6.3-14 14-18.7 22.7-.9 1.7-3.5.3-2.6-1.4A81.1 81.1 0 0 1 9.5 79.8l-.3-10.1a335.4 335.4 0 0 0-20.9 23.6c-1.2 1.5-3.3-.5-2.2-2A332 332 0 0 1 8.4 66.1l.6-.3-.6-8A26.3 26.3 0 0 0-3.9 66c-4 4.3-7.7 8.9-11.1 13.7-1.1 1.5-3.7.2-2.6-1.4C-11.1 69.1-3.5 57.9 8 54.9 7 47 5.5 39.3 2.8 31.8 2.2 30 5 29.2 5.7 31c2.6 7.4 4.2 15 5.2 22.7A55 55 0 0 1 34.5 70c1.2 1.4-.8 3.6-2 2.2a52.1 52.1 0 0 0-21.2-15.3l.7 8.2C22 70.9 30.3 79 38.4 87.2c1.3 1.3-.7 3.5-2 2.2a132.5 132.5 0 0 0-24.2-20.7l.4 12.1a68.7 68.7 0 0 1 23 24.6c.9 1.7-1.6 3.2-2.5 1.5-5-9-11.9-16.7-20.4-22.5l.1 7.6.1 3.9a50.5 50.5 0 0 1 17.9 20.7c.8 1.7-1.7 3.3-2.5 1.5a47.2 47.2 0 0 0-15.4-18.6v12.6a53.1 53.1 0 0 1 18 17.9c1 1.6-1.5 3.2-2.5 1.5-4-6.4-9.3-11.8-15.6-16l-.2 7.1h.1a74.6 74.6 0 0 1 16.6 20.1c.9 1.7-1.6 3.2-2.5 1.5a71.4 71.4 0 0 0-14.3-18l-.8 10.3.5.4A49.4 49.4 0 0 1 23 154.3c.3 2.2-2.5 3-3.1 1.2z"
          />
          <path
            id="pino_x5F_4_9_"
            d="M352.1 204a43.5 43.5 0 0 0-8-15.2c-.9 5-1.9 9.9-3.2 14.9-.5 1.8-3.3 1-2.8-.8.9-3.3 1.6-6.6 2.3-9.9-2.6 2.4-5 5.1-7 8.1-1.1 1.6-3.6.1-2.5-1.5 2.8-4.3 6.2-8 10.3-11.1l.1-.1c.7-4.1 1.3-8.1 1.8-12.2a70 70 0 0 0-11.2 13.1c-1 1.6-3.6.1-2.5-1.5 3.9-6 8.6-11.2 14-15.8l.2-.1.8-8.5c-6 4.6-11 10.2-15 16.7-1 1.6-3.5.1-2.5-1.5a64 64 0 0 1 16.6-18.2c.4-.3.7-.3 1.1-.3.3-3.9.5-7.9.6-11.8a78.2 78.2 0 0 0-20.1 22.4c-1 1.6-3.5.1-2.5-1.5a80.8 80.8 0 0 1 22.5-24.4l.3-.2.1-4.2.3-8.6a77.3 77.3 0 0 0-19.9 21.6c-1 1.6-3.5.1-2.5-1.5a81.6 81.6 0 0 1 22.6-23.7l.2-10.1a360.6 360.6 0 0 0-22.1 22.5c-1.3 1.4-3.3-.7-2-2.1 7.5-8.4 15.3-16.3 23.6-23.9.2-.2.3-.3.5-.3l-.2-8a26 26 0 0 0-12.6 7.5 133 133 0 0 0-11.8 13.1c-1.2 1.5-3.7 0-2.5-1.5 7-8.9 15.2-19.7 26.8-22.1A108 108 0 0 0 342 80c-.5-1.8 2.3-2.5 2.9-.7 2.2 7.5 3.4 15.2 3.9 22.9 9 3.8 16.8 9.8 22.7 17.7 1.1 1.5-1 3.6-2.1 2a51.8 51.8 0 0 0-20.4-16.4l.2 8.2c9.7 6.4 17.5 14.9 25.2 23.5 1.3 1.4-.9 3.5-2.1 2-7.1-7.9-14.2-15.9-23-22l-.2 12.1a67.5 67.5 0 0 1 21.6 25.8c.8 1.7-1.8 3.1-2.6 1.4a65.7 65.7 0 0 0-19.2-23.6l-.3 7.6-.1 3.9a50.3 50.3 0 0 1 16.8 21.6c.7 1.7-1.9 3.2-2.6 1.4a47.5 47.5 0 0 0-14.3-19.4l-.7 12.6a55 55 0 0 1 17.1 18.8c.9 1.7-1.7 3.1-2.6 1.4a51.6 51.6 0 0 0-14.7-16.8l-.6 7.1h.1a74.3 74.3 0 0 1 15.5 21c.8 1.7-1.8 3.1-2.6 1.4-3.4-7-7.9-13.2-13.3-18.7-.4 3.4-.8 6.9-1.4 10.3l.4.4a48.7 48.7 0 0 1 9.8 18c0 1.6-2.9 2.3-3.3.5z"
          />
        </g>
      </svg>
    </StyledScazzato>
  );
};
