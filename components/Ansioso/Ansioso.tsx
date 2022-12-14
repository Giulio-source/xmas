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
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 340 520"
        ref={svgRef}
      >
        <path
          className="base-bianca"
          fill="#FFFFFF"
          d="M427.9,595.8c0-73.7-120.6-133.4-269.5-133.4S-111,522.1-111,595.8c0,43.5,42.2,82.2,107.4,106.6
	v334.3h342.3V694.9C393.4,670.5,427.9,635.1,427.9,595.8L427.9,595.8z"
        />
        <ellipse
          id="ombra"
          opacity="0.5"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          enable-background="new    "
          cx="159.9"
          cy="512.3"
          rx="65.3"
          ry="3.4"
        />
        <g id="elfo-intero" onClick={handleOnClick}>
          <g id="gamba_x5F_dex_3_">
            <path
              fill="none"
              stroke="#5347FF"
              stroke-width="10"
              stroke-miterlimit="10"
              d="M127.7,444.3v49.3"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              stroke-width="10"
              stroke-miterlimit="10"
              stroke-dasharray="22"
              d="M127.6,444.1v49.2"
            />
            <path
              id="Scarpa_dex_2_"
              fill="#002764"
              stroke="#002764"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M131.1,493.6l-7.9-0.5
			c0,0-1.2,10.4-6.1,11s-7.4-1.4-8.7-5.5c-1.3-4-1-7.3-3.5-7.3c-3,0-3.1,5.3-1.8,9.8c1.2,4.3,5.5,9.8,12.2,9.8s10.4-6.7,10.4-6.7
			l0.5,6.7h5v-17.3H131.1z"
            />
          </g>
          <g id="braccio_x5F_six_x5F_1_4_">
            <path
              fill="none"
              stroke="#5347FF"
              stroke-width="10"
              stroke-miterlimit="10"
              d="M191,355.4c0,0,48.6,20.1,44.7,102.1"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              stroke-width="10"
              stroke-miterlimit="10"
              stroke-dasharray="22"
              d="M190.8,355.2
			c0,0,48.6,20.1,44.7,102.1"
            />
            <path
              id="mano_six_7_"
              fill="#F8CEDE"
              d="M230.4,456.6h9.6c0,0,3.5,11.2,1.2,11.2s-3.5-5.6-3.5-5.6s0.8,8.9-1.6,8.7
			s-2.4-8.2-2.4-8.2s-0.6,5.1-3.4,4.8C227.5,467.2,230.4,456.6,230.4,456.6L230.4,456.6z"
            />
          </g>
          <g id="braccio_x5F_dex_x5F_1_2_">
            <path
              fill="none"
              stroke="#5347FF"
              stroke-width="10"
              stroke-miterlimit="10"
              d="M88.5,453.4c0,0-4.3-73.8,37.8-89.6"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              stroke-width="10"
              stroke-miterlimit="10"
              stroke-dasharray="22"
              d="M88.4,453.2
			c0,0-4.3-73.8,37.8-89.6"
            />
            <path
              fill="#F8CEDE"
              d="M93.3,452.8h-9.6c0,0-3.5,11.2-1.2,11.2s3.5-5.6,3.5-5.6s-0.8,8.9,1.6,8.7s2.4-8.2,2.4-8.2
			s0.6,5.1,3.4,4.8C96.2,463.4,93.3,452.8,93.3,452.8z"
            />
          </g>
          <g id="gamba_x5F_six_3_">
            <path
              fill="none"
              stroke="#5347FF"
              stroke-width="10"
              stroke-miterlimit="10"
              d="M191.2,446.1v49.2"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              stroke-width="10"
              stroke-miterlimit="10"
              stroke-dasharray="22"
              d="M191,445.9v49.2"
            />
            <path
              id="Scarpa_six_2_"
              fill="#002764"
              stroke="#002764"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M187.8,494.8l7.9-0.5
			c0,0,1.5,9.2,6.1,11c4,1.5,7.1-1.3,8.1-5.5c1.3-5.2,1-7.9,3.5-7.9c3,0,3.7,5.9,2.4,10.4c-1.2,4.3-5.5,9.8-12.2,9.8
			s-10.4-6.7-10.4-6.7l-0.5,6.7h-5L187.8,494.8L187.8,494.8z"
            />
          </g>
          <g id="Corpo_3_">
            <path
              fill="#5347FF"
              d="M198.6,343c0,0-2.1,108.3-2.1,102.7c0-0.2-73.3,2.7-74.4,0c-1.2-2.7-0.7-76.4,0-84.4"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              d="M196.9,417.8v11l-74.9,2l-0.4-10.6L196.9,417.8z"
            />
            <path
              d="M158.6,401.4c-4.5-1-6.7,4.1-6.3,5.3c0.4,1.3,0.9,4.6,3.6,4.7c2.8,0,5.8-1.7,5.8-4.7S161.5,402.1,158.6,401.4z
			 M158.7,383.3c-4.5-1-6.7,4.1-6.3,5.3c0.4,1.3,0.9,4.6,3.6,4.7s5.8-1.7,5.8-4.7C161.8,385.7,161.6,384,158.7,383.3z"
            />
          </g>
          <g id="cappello_3_">
            <path
              fill="#5347FF"
              d="M100.5,276c0,0,4.4-74,35.2-92.3s46.3-22,64.4-22s49,17.6,59.7,32.7c10.7,15.1,12.7,57.9,10.7,60.5
			s-13.4-50.4-35.6-51c-22.1-0.6-24.8,20.2-26.2,25.8c-1.3,5.7-3.3,38.7-3.3,38.7L100.5,276z"
            />
            <path
              fill="#002764"
              d="M100.2,276c0,0,2-35.6,12.6-61.7c0,0,17.3,48.1,19.6,56.2c0,0,20.4-60.8,23.3-64.1
			c2.9-3.4,23.7,61.2,23.7,61.2s33.7-55.1,35.7-56.4c2-1.3-4,57-4,56.8S100.2,276,100.2,276z M274.6,255
			c-11.3-2.3-16.8,9.4-15.8,12.4s2.1,10.7,9.1,10.8c6.9,0.1,14.4-3.9,14.4-10.8S281.8,256.5,274.6,255z"
            />
          </g>
          <path
            id="viso"
            fill="#F8CEDE"
            d="M100.8,276c-0.3,22-7.3,73.8,26.6,90.7c27.3,10.1,54.2,6.8,70.4-12.5
		c17.3-22.3,15.6-65.9,13.9-86.2c-0.7-3.3-39.7,0.3-55.4,1C140.7,269.7,102.8,272.2,100.8,276L100.8,276z"
          />
          <path
            id="sopracciglio-six-2"
            fill="none"
            stroke="#111428"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="
		M182.5,282.1c0,0,1.8,1.9,6.8,0"
          />
          <path
            id="sopracciglio-dex-2"
            fill="none"
            stroke="#111428"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="
		M126.8,283.4c0,0-2.9,2.1-6.8,0.6"
          />

          <path
            id="sopracciglio-six-1"
            fill="none"
            stroke="#11142A"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="
		M182.2,277.8c0,0,2.6-3.5,6.8,0"
          />

          <path
            id="sopracciglio-dex-1"
            fill="none"
            stroke="#11142A"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="
		M126.4,279c0,0-3.8-3-6.8,0.6"
          />
          <g id="orecchio_dex_7_">
            <path
              fill="#F8CEDE"
              d="M210.7,319.1c0,0,2.4-26.8,12.3-40s15.3-17.6,17.3-18.9c0,0,2.7,18.3-9.3,37.2S210.7,319.1,210.7,319.1
			L210.7,319.1z"
            />
            <path
              fill="none"
              stroke="#DE8BB5"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="
			M212.1,310.3l13.2-20.8"
            />
          </g>
          <g id="orecchio_dex_6_">
            <path
              fill="#F8CEDE"
              d="M68.9,280.4c0,0,12.6,4.4,21.9,21.4s9.3,16.6,12.6,28.1c0,0-19.1-9.4-27.2-24.8
			C68.3,289.8,68.9,280.4,68.9,280.4z"
            />
            <path
              fill="none"
              stroke="#DE8BB5"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="
			M99.3,320.5l-18.4-17.2"
            />
          </g>
          <g id="facce_3_">
            <ellipse
              id="bianco-dex"
              transform="matrix(0.9951 -9.853766e-02 9.853766e-02 0.9951 -29.3514 13.5104)"
              fill="#FFFFFF"
              cx="122.1"
              cy="303.9"
              rx="9.2"
              ry="9.2"
            />
            <circle
              id="bianco-six"
              fill="#FFFFFF"
              cx="186.8"
              cy="303.9"
              r="9.2"
            />
            <circle
              id="occhio-dex"
              fill="#11142A"
              cx="122.6"
              cy="303.7"
              r="2.5"
            />
            <circle
              id="occhio-six"
              fill="#11142A"
              cx="187.3"
              cy="303.7"
              r="2.5"
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
              fill="#FF0055"
              stroke="#FF0055"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="
			M195.3,320.3c-6.3-1.4-9.3,5.6-8.7,7.4s1.2,6.4,5,6.5c3.9,0.1,8-2.3,8-6.5C199.6,323.6,199.3,321.2,195.3,320.3z"
            />

            <path
              id="Guancia_7_"
              fill="#FF0055"
              stroke="#FF0055"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="
			M118.9,323.5c2.4,0.3,5.9,1,4.7,7.7c-1.2,6.9-4.1,5.1-6.5,5.1s-4.1-3.7-4.4-6.3C112.4,327.4,116,323.1,118.9,323.5L118.9,323.5z"
            />

            <path
              id="Naso_3_"
              fill="none"
              stroke="#11142A"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="
			M150.2,312.1c0,0,0.5,5.6,3,5.6s3-5.6,3-6.6"
            />
          </g>

          <path
            id="bocca"
            fill="none"
            stroke="#11142A"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="
		M157,334.2h-4.7"
          />

          <ellipse
            id="bocca2"
            fill="none"
            stroke="#11142A"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            cx="155.3"
            cy="334.4"
            rx="3.8"
            ry="2.9"
          />
          <g id="braccio-six-conserto">
            <path
              fill="none"
              stroke="#5347FF"
              stroke-width="10"
              stroke-miterlimit="10"
              d="M130.8,404.4c52.4,4.5,73.4,2.7,81-5.4
			c2.3-2.5,3.4-6,2.4-9.3c-2.1-6.9-8.5-11.6-15.7-11.6"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              stroke-width="10"
              stroke-miterlimit="10"
              stroke-dasharray="22"
              d="M130.8,404.4
			c52.4,4.5,73.4,2.7,81-5.4c2.3-2.5,3.4-6,2.4-9.3c-2.1-6.9-8.5-11.6-15.7-11.6"
            />
            <path
              id="mano_six_00000133490671645723739620000009166666353727198337_"
              fill="#F8CEDE"
              d="M132.9,399.5l-2.6,9.3
			c0,0-11.7,0.4-11.1-1.8c0.6-2.2,6.3-1.8,6.3-1.8s-8.8-1.6-7.9-3.8c0.9-2.2,8.6-0.1,8.6-0.1s-4.7-1.9-3.7-4.6
			C123.4,393.9,132.9,399.5,132.9,399.5z"
            />
          </g>
          <g id="braccio-dex-conserto">
            <path
              fill="none"
              stroke="#5347FF"
              stroke-width="10"
              stroke-miterlimit="10"
              d="M187.3,407.3c-52.4,4.5-73.4,2.7-81-5.4
			c-2.4-2.5-3.3-6-2.4-9.3c1.2-4,4.6-12.1,17.7-12.1"
            />
            <path
              fill="none"
              stroke="#0C45CA"
              stroke-width="10"
              stroke-miterlimit="10"
              stroke-dasharray="22"
              d="M187.3,407.3
			c-52.4,4.5-73.4,2.7-81-5.4c-2.4-2.5-3.3-6-2.4-9.3c1.2-4,4.6-12.1,17.7-12.1"
            />
            <path
              id="mano_six_00000114062054388517870960000002922429533928407452_"
              fill="#F8CEDE"
              d="M185.2,402.5l2.6,9.3
			c0,0,11.7,0.4,11.1-1.8c-0.6-2.2-6.3-1.8-6.3-1.8s8.8-1.6,7.9-3.8c-0.9-2.2-8.6-0.1-8.6-0.1s4.7-1.9,3.7-4.6
			C194.6,396.9,185.2,402.5,185.2,402.5z"
            />
          </g>
        </g>
        <g id="palla3">
          <path
            fill="#F8CEDE"
            d="M274.8,110.5c-10.2-5.2-9.9-11.5-9.9-11.5h-7.8c0,0,0.4,6.3-10.5,11.5s-18.2,9.7-17.8,19.4
		s10.5,13.8,19.5,17.2c9,3.4,12.7,13.2,12.7,13.2h0.2c0,0,3.5-9.8,11.9-13.2s17.9-7.5,18.3-17.2S285,115.7,274.8,110.5z"
          />
          <g>
            <path
              fill="#FF0055"
              d="M258.1,130.6l-13,3.4c-3,0.8-6-1.5-6-4.7c0-2.8,2.3-5,5.1-4.9c0.4,0,0.8,0.1,1.1,0.1l12.8,3.3V130.6z
			 M262.1,130.6l13,3.4c3,0.8,6-1.5,6-4.7c0-2.8-2.3-5-5.1-4.9c-0.4,0-0.8,0.1-1.1,0.1l-12.8,3.3V130.6z M261.1,131.6l3.4,13
			c0.8,3-1.5,6-4.7,6c-2.8,0-5-2.3-4.9-5.1c0-0.4,0.1-0.8,0.1-1.1l3.3-12.8H261.1L261.1,131.6z M261.1,127.7l3.4-13
			c0.8-3-1.5-6-4.7-6c-2.8,0-5,2.3-4.9,5.1c0,0.4,0.1,0.8,0.1,1.1l3.3,12.8H261.1L261.1,127.7z"
            />
            <circle fill="#5347FF" cx="259.9" cy="129.3" r="2.8" />
            <path
              fill="none"
              stroke="#5347FF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M274.1,141.7
			l-28.4-24.9 M245.7,141.7l28.4-24.9"
            />
          </g>
          <path
            fill="#FFF6C9"
            d="M264.2,96.4h-6.7c-1,0-1.9,0.9-1.9,2v0.1c0,1.1,0.9,2,1.9,2h6.8c1,0,1.9-0.9,1.9-2v-0.1
		C266.1,97.3,265.3,96.4,264.2,96.4L264.2,96.4z"
          />
          <path
            fill="none"
            stroke="#003580"
            stroke-width="3"
            stroke-miterlimit="10"
            d="M260.5,96.4l-0.8-104"
          />
        </g>
        <g id="palla1">
          <path
            fill="#FF0055"
            d="M81.9,144.8c-8.3-6.8-8-15.1-8-15.1h-6.3c0,0,0.3,8.3-8.5,15.1c-8.9,6.8-14.7,12.7-14.4,25.5
		c0.3,12.7,8.5,18.2,15.8,22.6c7.3,4.4,10.3,17.3,10.3,17.3H71c0,0,2.8-12.9,9.6-17.3s14.5-9.8,14.8-22.6
		C95.6,157.6,90.2,151.6,81.9,144.8z"
          />
          <path
            fill="#FFF6C9"
            d="M74,125.7h-6.7c-1,0-1.9,0.9-1.9,2v0.1c0,1.1,0.9,2,1.9,2H74c1,0,1.9-0.9,1.9-2v-0.1
		C75.9,126.6,75,125.7,74,125.7z"
          />
          <path
            fill="none"
            stroke="#003580"
            stroke-width="3"
            stroke-miterlimit="10"
            d="M70.4,125.7L70-7.6"
          />
          <g>
            <path
              fill="#FFF6C9"
              d="M67.7,170.2l-13,3.4c-3,0.8-6-1.5-6-4.7c0-2.8,2.3-5,5.1-4.9c0.4,0,0.8,0.1,1.1,0.1l12.8,3.3V170.2z
			 M71.6,170.3l13,3.4c3,0.8,6-1.5,6-4.7c0-2.8-2.3-5-5.1-4.9c-0.4,0-0.8,0.1-1.1,0.1l-12.8,3.3V170.3z M70.6,171.3l3.4,13
			c0.8,3-1.5,6-4.7,6c-2.8,0-5-2.3-4.9-5.1c0-0.4,0.1-0.8,0.1-1.1l3.3-12.8C67.8,171.3,70.6,171.3,70.6,171.3z M70.6,167.3l3.4-13
			c0.8-3-1.5-6-4.7-6c-2.8,0-5,2.3-4.9,5.1c0,0.4,0.1,0.8,0.1,1.1l3.3,12.8C67.8,167.3,70.6,167.3,70.6,167.3z"
            />
            <circle fill="#5347FF" cx="69.4" cy="168.9" r="2.8" />
            <path
              fill="none"
              stroke="#5347FF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M83.6,181.4
			l-28.4-24.9 M55.2,181.4l28.4-24.9"
            />
          </g>
        </g>
        <g id="palla2">
          <path
            fill="#009488"
            d="M181.4,96.5c-8.3-5.5-8-12.3-8-12.3h-6.3c0,0,0.3,6.8-8.5,12.3c-8.9,5.5-14.7,10.4-14.4,20.8
		s8.5,14.8,15.8,18.4c7.3,3.6,10.3,14.1,10.3,14.1h0.2c0,0,2.8-10.5,9.6-14.1s14.5-8,14.8-18.4C195.1,106.9,189.6,102,181.4,96.5
		L181.4,96.5z"
          />
          <path
            fill="#FFF6C9"
            d="M173.5,80.9h-6.7c-1,0-1.9,0.7-1.9,1.7v0.1c0,0.9,0.9,1.7,1.9,1.7h6.8c1,0,1.9-0.7,1.9-1.7v-0.1
		C175.4,81.6,174.5,80.9,173.5,80.9z"
          />
          <path
            fill="none"
            stroke="#003580"
            stroke-width="3"
            stroke-miterlimit="10"
            d="M170.1,80.9l-0.6-88.5"
          />
          <g>
            <path
              fill="#FFF6C9"
              d="M167.1,117.2l-13,2.7c-3,0.6-6-1.2-6-3.8c0-2.6,3.1-4.6,6.2-3.9l12.8,2.7
			C167.1,114.9,167.1,117.2,167.1,117.2z M171.1,117.3l13,2.7c3,0.6,6-1.2,6-3.8c0-2.6-3.1-4.6-6.2-3.9l-12.8,2.7
			C171.1,115,171.1,117.3,171.1,117.3z M170.1,118.1l3.4,10.6c0.8,2.5-1.5,4.9-4.7,4.9s-5.6-2.5-4.8-5.1l3.3-10.4L170.1,118.1
			L170.1,118.1z M170.1,114.9l3.4-10.6c0.8-2.5-1.5-4.9-4.7-4.9s-5.6,2.5-4.8,5.1l3.3,10.4H170.1z"
            />
            <ellipse fill="#5347FF" cx="168.9" cy="116.2" rx="2.8" ry="2.2" />
            <path
              fill="none"
              stroke="#5347FF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M183.1,126.3
			L154.7,106 M154.7,126.3l28.4-20.3"
            />
          </g>
        </g>
      </svg>
    </StyledAnsioso>
  );
};
