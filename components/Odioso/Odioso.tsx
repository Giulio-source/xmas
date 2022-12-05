import { StyledOdioso } from "./Odioso.style";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import {
  odiosoDefault,
  odiosoSingleClick,
  resetElfo,
} from "./odioso.animations";

export const Odioso = () => {
  const svgRef = useRef(null);
  const tl = useRef<any>({});
  // const singleClick = useRef(true);

  function handleOnClick() {
    tl.current.defaultAnim.pause();
    tl.current.singleClickAnim
      .invalidate()
      .restart()
      .then(() =>
        tl.current.resetAnim
          .invalidate()
          .restart()
          .then(() => {
            setTimeout(() => {
              tl.current.defaultAnim.invalidate().restart();
            }, 500);
          })
      );
  }

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

    tl.current.defaultAnim = odiosoDefault();
    // tl.current.pallineAnim = pallineDiNatale();
    tl.current.singleClickAnim = odiosoSingleClick();
    tl.current.resetAnim = resetElfo();

    tl.current.defaultAnim.play();
  }, []);

  return (
    <StyledOdioso>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        // viewBox="0 0 339.5 915.5"
        viewBox="0 0 340 600"
        xmlSpace="preserve"
      >
        <path
          fill="#FFFFFF"
          d="M428.8,595.6c0-73.7-120.6-133.4-269.5-133.4s-269.5,59.7-269.5,133.4c0,43.5,42.2,82.2,107.4,106.6v345.3
	h342.3V694.7C394.3,670.3,428.8,634.9,428.8,595.6L428.8,595.6z"
        />
        <ellipse
          opacity="0.5"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          enableBackground="new    "
          cx="157.5"
          cy="509.4"
          rx="65.3"
          ry="3.4"
        />
        <g id="elfo-intero" onClick={handleOnClick}>
          <g id="gamba-dex">
            <path
              fill="none"
              stroke="#021732"
              strokeWidth="10"
              strokeMiterlimit="10"
              d="M125.2,441.3v49.2"
            />

            <path
              id="Scarpa_dex_00000145050843037930707490000007793094744171910571_"
              fill="#021732"
              stroke="#021732"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="
		M129.7,490.7l-7.9-0.5c0,0-1.2,10.4-6.1,11s-7.4-1.4-8.7-5.5c-1.3-4-1-7.3-3.5-7.3c-3,0-3.1,5.3-1.8,9.8c1.2,4.3,5.5,9.8,12.2,9.8
		s10.4-6.7,10.4-6.7l0.5,6.7h5L129.7,490.7L129.7,490.7z"
            />
          </g>
          <path
            id="braccio-six-alto"
            fill="none"
            stroke="#021732"
            strokeWidth="10"
            strokeMiterlimit="10"
            d="M189.7,359.5c0,0,70.4-7.5,79.7,43.8"
          />
          <path
            id="braccio-dex-alto"
            fill="none"
            stroke="#021732"
            strokeWidth="10"
            strokeMiterlimit="10"
            d="M62.8,406.8c0,0,1.1-44.3,65.1-42.9"
          />
          <g id="gamba-six">
            <path
              fill="none"
              stroke="#021732"
              strokeWidth="10"
              strokeMiterlimit="10"
              d="M188.8,443.3v49.2"
            />

            <path
              id="Scarpa_six_00000148619417099307885650000012939927578238555546_"
              fill="#021732"
              stroke="#021732"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="
		M184.4,491.9l7.9-0.5c0,0,1.5,9.2,6.1,11c4,1.5,7.1-1.3,8.1-5.5c1.3-5.2,1-7.9,3.5-7.9c3,0,3.7,5.9,2.4,10.4
		c-1.2,4.3-5.5,9.8-12.2,9.8s-10.4-6.7-10.4-6.7l-0.5,6.7h-5L184.4,491.9L184.4,491.9z"
            />
          </g>
          <g id="braccio-six-basso">
            <path
              className="braccio"
              fill="none"
              stroke="#021732"
              strokeWidth="10"
              strokeMiterlimit="10"
              d="M188.4,350.4c0,0,48.6,20.1,44.7,102.1"
            />
            <path
              className="mano"
              fill="#F8CEDE"
              d="M227.9,451.6h9.6
		c0,0,3.5,11.2,1.2,11.2s-3.5-5.6-3.5-5.6s0.8,8.9-1.6,8.7s-2.4-8.2-2.4-8.2s-0.6,5.1-3.4,4.8C225,462.2,227.9,451.6,227.9,451.6
		L227.9,451.6z"
            />
          </g>
          <g id="braccio-dex-basso">
            <path
              className="braccio"
              fill="none"
              stroke="#021732"
              strokeWidth="10"
              strokeMiterlimit="10"
              d="M86,453.5c0,0-4.3-73.8,37.8-89.6"
            />
            <path
              className="mano"
              fill="#F8CEDE"
              d="M90.8,452.8h-9.6c0,0-3.5,11.2-1.2,11.2s3.5-5.6,3.5-5.6s-0.8,8.9,1.6,8.7s2.4-8.2,2.4-8.2s0.6,5.1,3.4,4.8
		C93.7,463.4,90.8,452.8,90.8,452.8z"
            />
          </g>
          <g id="Corpo_00000044856005998392278640000008266036666772470933_">
            <path
              fill="#0C45CA"
              d="M196.2,340.1c0,0-2.1,108.3-2.1,102.7c0-0.2-73.3,2.7-74.4,0c-1.2-2.7-0.7-76.4,0-84.4"
            />
            <path
              fill="#021732"
              stroke="#002764"
              strokeMiterlimit="10"
              d="M194.5,414.9v11l-74.9,2.1l-0.4-10.7L194.5,414.9z"
            />
            <path
              fill="#021732"
              d="M156.2,398.6c-4.5-1-6.7,4.1-6.3,5.3c0.4,1.3,0.9,4.6,3.6,4.7s5.8-1.7,5.8-4.7S159.1,399.2,156.2,398.6z
		 M156.3,380.5c-4.5-1-6.7,4.1-6.3,5.3c0.4,1.3,0.9,4.6,3.6,4.7c2.8,0,5.8-1.7,5.8-4.7S159.2,381.1,156.3,380.5z"
            />
          </g>
          <g id="testa">
            <path
              id="testa-shape"
              fill="#F8CEDE"
              d="M100,274.4c-0.3,22-7.3,73.8,26.6,90.7c27.3,10.1,54.2,6.8,70.4-12.5c17.3-22.3,15.6-65.9,13.9-86.2
	c-0.7-3.3-39.7,0.3-55.4,1S102,270.6,100,274.4L100,274.4z"
            />
            <g id="cappello_4_">
              <path
                fill="#021732"
                d="M100.4,275.8c0,0,4.4-74,35.2-92.3s46.3-22,64.4-22s49,17.6,59.7,32.7c10.7,15.1,12.7,57.9,10.7,60.5
		s-13.4-50.4-35.6-51s-24.8,20.2-26.2,25.8c-1.3,5.7-3.3,38.7-3.3,38.7L100.4,275.8L100.4,275.8z"
              />
              <path
                fill="#0C45CA"
                d="M100.1,275.8c0,0,2-35.6,12.6-61.7c0,0,17.3,48.1,19.6,56.2c0,0,20.4-60.8,23.3-64.1
		c2.9-3.4,23.7,61.2,23.7,61.2S213,212.3,215,211s-4,57-4,56.8S100.1,275.8,100.1,275.8z M274.5,254.8c-11.3-2.3-16.8,9.4-15.8,12.4
		c1.1,3,2.1,10.7,9.1,10.8c6.9,0.1,14.4-3.9,14.4-10.8S281.7,256.3,274.5,254.8L274.5,254.8z"
              />
            </g>
            <g id="facce_4_">
              <g id="occhio-dex-small">
                <circle
                  id="bianco-dex-small"
                  fill="#FFFFFF"
                  cx="122"
                  cy="303.7"
                  r="9.2"
                />
                <circle
                  id="pupilla-dex"
                  fill="#11142A"
                  cx="122.5"
                  cy="303.5"
                  r="2.5"
                />
              </g>
              <g id="occhio-six-small">
                <circle
                  id="bianco-six-small"
                  fill="#FFFFFF"
                  cx="186.7"
                  cy="303.7"
                  r="9.2"
                />
                <circle
                  id="pupilla-six"
                  fill="#11142A"
                  cx="187.2"
                  cy="303.5"
                  r="2.5"
                />
              </g>
              <path
                id="Naso_5_"
                fill="none"
                stroke="#11142A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
		M150.1,311.9c0,0,0.5,5.6,3,5.6s3-5.6,3-6.6"
              />
              <path
                id="bocca"
                fill="none"
                stroke="#11142A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
		M169.8,341.3c0,0-0.5-5.6-3-5.6s-3,5.6-3,6.6"
              />
              <path
                id="bocca2"
                fill="none"
                stroke="#11142A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
		M165.2,333.4c0,0-1.8-5.6-10.7-5.6s-10.7,5.6-10.7,6.6"
              />
              <path
                id="guancia-dex"
                fill="#FF0055"
                stroke="#FF0055"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
		M195.4,316.7c-6.3-1.4-9.3,5.6-8.7,7.4s1.2,6.4,5,6.5c3.9,0.1,8-2.3,8-6.5S199.4,317.6,195.4,316.7z"
              />
              <path
                id="guancia-six"
                fill="#FF0055"
                stroke="#FF0055"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
		M119,319.8c2.4,0.3,5.9,1,4.7,7.7c-1.2,6.9-4.1,5.1-6.5,5.1s-4.1-3.7-4.4-6.3C112.5,323.7,116.1,319.4,119,319.8L119,319.8z"
              />
              <circle
                id="bianco-dex-big"
                fill="#FFFFFF"
                cx="122.5"
                cy="303.4"
                r="10.5"
              />
              <circle
                id="bianco-six-big"
                fill="#FFFFFF"
                cx="187.3"
                cy="303.4"
                r="10.5"
              />
              {/* <circle
                id="Occhio_Dex_00000153699917376862847910000012354680460649255568_"
                fill="#11142A"
                cx="122.5"
                cy="303.4"
                r="2.5"
              />
              <circle
                id="Occhio_six_00000176000985351923514300000006350075730086649754_"
                fill="#11142A"
                cx="187.3"
                cy="303.4"
                r="2.5"
              /> */}
              <g id="vene-six">
                <g>
                  <defs>
                    <circle id="SVGID_1_" cx="187.3" cy="303.4" r="10.5" />
                  </defs>
                  <clipPath id="SVGID_00000156558678846448575270000004371280175611841199_">
                    <use xlinkHref="#SVGID_1_" overflow="visible" />
                  </clipPath>

                  <path
                    clipPath="url(#SVGID_00000156558678846448575270000004371280175611841199_)"
                    fill="none"
                    stroke="#FF0055"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    d="
				M177.9,298.7l2.6,1.6"
                  />
                </g>
                <g>
                  <defs>
                    <circle
                      id="SVGID_00000067935592127737965180000017555018973513592506_"
                      cx="187.3"
                      cy="303.4"
                      r="10.5"
                    />
                  </defs>
                  <clipPath id="SVGID_00000054245186886036625010000016108957567035233968_">
                    <use
                      xlinkHref="#SVGID_00000067935592127737965180000017555018973513592506_"
                      overflow="visible"
                    />
                  </clipPath>

                  <path
                    clipPath="url(#SVGID_00000054245186886036625010000016108957567035233968_)"
                    fill="none"
                    stroke="#FF0055"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    d="
				M177.8,308.7l1.9-2.3"
                  />
                </g>
                <g>
                  <defs>
                    <circle
                      id="SVGID_00000052094767790481257500000017843154763319838377_"
                      cx="187.3"
                      cy="303.4"
                      r="10.5"
                    />
                  </defs>
                  <clipPath id="SVGID_00000000926367833174322300000009987697439213622719_">
                    <use
                      xlinkHref="#SVGID_00000052094767790481257500000017843154763319838377_"
                      overflow="visible"
                    />
                  </clipPath>

                  <path
                    clipPath="url(#SVGID_00000000926367833174322300000009987697439213622719_)"
                    fill="none"
                    stroke="#FF0055"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    d="
				M194.8,310.9l-1.9-2.4"
                  />
                </g>
                <g>
                  <defs>
                    <circle
                      id="SVGID_00000167356454894974334320000005322123427507956619_"
                      cx="187.3"
                      cy="303.4"
                      r="10.5"
                    />
                  </defs>
                  <clipPath id="SVGID_00000049919753433452187980000016607810234616216236_">
                    <use
                      xlinkHref="#SVGID_00000167356454894974334320000005322123427507956619_"
                      overflow="visible"
                    />
                  </clipPath>

                  <path
                    clipPath="url(#SVGID_00000049919753433452187980000016607810234616216236_)"
                    fill="none"
                    stroke="#FF0055"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    d="
				M197.8,303.2l-3-0.1"
                  />
                </g>
                <g>
                  <defs>
                    <circle
                      id="SVGID_00000164491884400516946250000007715685518724323737_"
                      cx="187.3"
                      cy="303.4"
                      r="10.5"
                    />
                  </defs>
                  <clipPath id="SVGID_00000174593979548089215030000007922110076173608842_">
                    <use
                      xlinkHref="#SVGID_00000164491884400516946250000007715685518724323737_"
                      overflow="visible"
                    />
                  </clipPath>

                  <path
                    clipPath="url(#SVGID_00000174593979548089215030000007922110076173608842_)"
                    fill="none"
                    stroke="#FF0055"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    d="
				M183.7,293.4l1,2.8"
                  />
                </g>
              </g>
              <g id="vene-dex">
                <g>
                  <defs>
                    <circle
                      id="SVGID_00000084490004793553213740000012846571690050014852_"
                      cx="122.5"
                      cy="303.4"
                      r="10.5"
                    />
                  </defs>
                  <clipPath id="SVGID_00000091006327359806840180000000014931332570086784_">
                    <use
                      xlinkHref="#SVGID_00000084490004793553213740000012846571690050014852_"
                      overflow="visible"
                    />
                  </clipPath>

                  <path
                    clipPath="url(#SVGID_00000091006327359806840180000000014931332570086784_)"
                    fill="none"
                    stroke="#FF0055"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    d="
				M132.9,304.5l-3-0.5"
                  />
                </g>
                <g>
                  <defs>
                    <circle
                      id="SVGID_00000181786458881884061290000006394267130454196627_"
                      cx="122.5"
                      cy="303.4"
                      r="10.5"
                    />
                  </defs>
                  <clipPath id="SVGID_00000036931642960114709750000007738443153997869448_">
                    <use
                      xlinkHref="#SVGID_00000181786458881884061290000006394267130454196627_"
                      overflow="visible"
                    />
                  </clipPath>

                  <path
                    clipPath="url(#SVGID_00000036931642960114709750000007738443153997869448_)"
                    fill="none"
                    stroke="#FF0055"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    d="
				M129.6,295.1l-1,2.8"
                  />
                </g>
                <g>
                  <defs>
                    <circle
                      id="SVGID_00000081613485526850837270000015955021316480448669_"
                      cx="122.5"
                      cy="303.4"
                      r="10.5"
                    />
                  </defs>
                  <clipPath id="SVGID_00000055694740606503309510000005989569670243098256_">
                    <use
                      xlinkHref="#SVGID_00000081613485526850837270000015955021316480448669_"
                      overflow="visible"
                    />
                  </clipPath>

                  <path
                    clipPath="url(#SVGID_00000055694740606503309510000005989569670243098256_)"
                    fill="none"
                    stroke="#FF0055"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    d="
				M112.9,298.9l2.6,1.6"
                  />
                </g>
                <g>
                  <defs>
                    <circle
                      id="SVGID_00000111162639594576472900000017295880949801535135_"
                      cx="122.5"
                      cy="303.4"
                      r="10.5"
                    />
                  </defs>
                  <clipPath id="SVGID_00000132055172693832752560000011289951743377501327_">
                    <use
                      xlinkHref="#SVGID_00000111162639594576472900000017295880949801535135_"
                      overflow="visible"
                    />
                  </clipPath>

                  <path
                    clipPath="url(#SVGID_00000132055172693832752560000011289951743377501327_)"
                    fill="none"
                    stroke="#FF0055"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    d="
				M112.8,307.2l2.8-0.9"
                  />
                </g>
                <g>
                  <defs>
                    <circle
                      id="SVGID_00000124122250249230274540000010777658772953853827_"
                      cx="122.5"
                      cy="303.4"
                      r="10.5"
                    />
                  </defs>
                  <clipPath id="SVGID_00000128443782583096091050000005817899022689077653_">
                    <use
                      xlinkHref="#SVGID_00000124122250249230274540000010777658772953853827_"
                      overflow="visible"
                    />
                  </clipPath>

                  <path
                    clipPath="url(#SVGID_00000128443782583096091050000005817899022689077653_)"
                    fill="none"
                    stroke="#FF0055"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    d="
				M129.4,311.5l-2-2.3"
                  />
                </g>
              </g>
              <path
                id="sopracciglio-1"
                fill="none"
                stroke="#111428"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M131,293
            c-2.1,0.7-6.1-6.3-9.6-4.8"
              />
              <path
                id="sopracciglio-2"
                fill="none"
                stroke="#11142A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
		M178.7,296.5c2.2,1.3,5.5-3.3,6-4.2"
              />
            </g>

            <g id="orecchio-six">
              <path
                className="fuori"
                fill="#F8CEDE"
                d="M209.9,317.5c0,0,2.4-26.8,12.3-40s15.3-17.6,17.3-18.9c0,0,2.7,18.3-9.3,37.2
		C218.3,314.7,209.9,317.5,209.9,317.5L209.9,317.5z"
              />
              <path
                className="dentro"
                fill="none"
                stroke="#DE8BB5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
		M211.3,308.7l13.2-20.8"
              />
            </g>
            <g id="orecchio-dex">
              <path
                className="fuori"
                fill="#F8CEDE"
                d="M68.1,278.8c0,0,12.6,4.4,21.9,21.4s9.3,16.6,12.6,28.1c0,0-19.1-9.4-27.2-24.8
		C67.5,288.2,68.1,278.8,68.1,278.8z"
              />
              <path
                className="dentro"
                fill="none"
                stroke="#DE8BB5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="
		M98.5,318.9l-18.4-17.2"
              />
            </g>
          </g>
        </g>
        <g id="coriandoli">
          <path
            fill="none"
            stroke="#FF0055"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="
			M222.4,315c18.3,10.4,40.5,11.2,59.5,2.1c8-4.3,15.2-11.4,15.7-20.9c0.3-4.3-1-8.4-4-11.4c-2.7-2.8-6.4-4.3-10.2-3.9l-0.6,0.1
			l-0.6,0.2l-0.7,0.2l-0.3,0.1l-1,0.6l-0.6,0.4l-0.1,0.1c-1.5,1.3-2.3,2.3-3.1,4.1c-0.3,0.5,0-0.2-0.2,0.3l-0.2,0.7l-0.3,1.1
			l-0.2,0.7v1.5l0.1,1c0-0.4,0.1,0.1,0.1,0.2l0.3,1.2l0.2,0.4l0.2,0.3l0.3,0.6l0.2,0.3"
          />
          <path
            fill="none"
            stroke="#FF0055"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="
			M218.6,320.7L218.6,320.7c18.2,1.8,36,6.1,53,12.7c7.1,2.6,13.6,6.5,19.2,11.5c4.9,4.4,8.1,10.4,8.9,17c0.4,3.7,0.2,6.9-1,10.3
			c-1,2.9-3,5.9-5.3,7.7"
          />
          <path
            fill="none"
            stroke="#FF0055"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="
			M252,315.8L252,315.8c14.8,5.1,31-2.4,36.7-17"
          />
          <path
            fill="none"
            stroke="#FF0055"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="
			M87.1,315.1c-9.5,5.6-20.4,8.5-31.4,8.5c-9.7,0.1-19.5-1.9-28.1-6.4c-8-4.3-15.2-11.4-15.7-20.9c-0.2-4.3,1-8.4,4-11.4
			c2.7-2.7,6.4-4.3,10.2-3.9l0.6,0.1l0.6,0.2l0.7,0.2l0.3,0.1c0.3,0.2,0.7,0.3,1,0.6c0.2,0.2,0.5,0.2,0.6,0.4l0.1,0.1
			c1.5,1.3,2.3,2.3,3.1,4.1c0.2,0.5,0-0.2,0.2,0.3l0.2,0.7c0.2,0.3,0.2,0.7,0.3,1.1l0.2,0.7v1.5l-0.1,1c0-0.5-0.1,0.1-0.1,0.2
			l-0.3,1.2l-0.2,0.4l-0.2,0.3l-0.3,0.6l-0.2,0.3"
          />
          <path
            fill="none"
            stroke="#FF0055"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="
			M91.3,321.2L91.3,321.2c-18.2,1.8-36,6.1-53,12.7c-7.1,2.5-13.6,6.5-19.2,11.5c-4.9,4.4-8.1,10.4-8.9,17c-0.5,3.5-0.2,7,1,10.3
			c1,3,2.9,5.7,5.3,7.7"
          />
          <path
            fill="none"
            stroke="#FF0055"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="
			M57.7,316.1L57.7,316.1c-14.8,5.1-31-2.4-36.7-17"
          />
        </g>
      </svg>
    </StyledOdioso>
  );
};
