import { useEffect, useState } from "react";

export const Villaggio = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const isMobileMedia = window.matchMedia("(max-width: 1023px)");

    function handleOnResize() {
      setIsMobile(isMobileMedia.matches);
    }

    handleOnResize();

    isMobileMedia.addEventListener("change", handleOnResize);

    return () => isMobileMedia.removeEventListener("change", handleOnResize);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="villaggio-elfo"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 1683.8 841.9"
      height="100%"
      width="100%"
      preserveAspectRatio={`${isMobile ? "xMidYMin slice" : "xMidYMid meet"}`}
    >
      <path fill="#BEFCDF" d="M0 0h1683.8v841.9H0V0z" />
      <g
        id="righe"
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="12.7"
        strokeWidth="3.2"
      >
        <polyline id="q3-q7" points="599.5,528.8 559.4,552 415.3,469" />
        <polyline
          id="q12-q18"
          points="496.1,372.9 849.9,577.2 809.5,600.4 931,670.7"
        />
        <polyline
          id="q11-q18"
          points="337,723.5 486.9,810.1 757,654.2 875,722.3 944.1,682.2"
        />
        <polyline
          id="q11-q17"
          points="315,706.7 230.1,657.7 255.9,643 153.4,583.9"
        />
        <polyline id="q13-q18" points="1081.2,516.1 1140.7,550.4 941.5,665.3" />
        <polyline
          id="q13-q19"
          points="1081.2,516.1 1193.8,581 1219.3,566.4 1344.3,638.6"
        />
        <polyline
          id="q7-q13"
          points="429.6,468.7 666,605.2 755.4,553.6 877.6,624.3 1071.3,512.6"
        />
        <polyline id="q7-q12" points="429.6,455.9 533.9,395.8 491.9,371.6" />
        <polyline
          id="q6-q12"
          points="433.7,609.9 312.2,539.6 359.6,512.3 297.2,476.3 483.7,368.8"
        />
        <polyline
          id="q6-q11"
          points="433.7,622.7 372.3,658.3 388.9,667.8 321.4,706.7"
        />
        <polyline
          id="q3-q6"
          points="599.5,530.1 539.7,564.8 533.6,561.3 445.2,612.5"
        />
        <polyline id="q5-q10" points="1164.2,408.2 1211.3,381.2 1332.6,451.2" />
        <polyline
          id="q2-q5"
          points="984.2,338.5 1052.6,378 1068.8,368.4 1142.3,410.8"
        />
        <polyline
          id="q9-q16"
          points="1293.7,157.5 1419.1,229.7 1385.7,249.1 1511.7,322"
        />
        <polyline
          id="q9-q15"
          points="1293.7,143.2 1366.6,101.2 1415.3,129.2 1519.3,69"
        />
        <polyline
          id="q4-q9"
          points="1152.8,238 1208.8,205.9 1198.6,200.1 1274.3,155.9"
        />
        <polyline
          id="q8-q15"
          points="1016,143.2 1098.4,95.5 1285.8,203.6 1517.1,70"
        />
        <polyline
          id="q8-q14"
          points="994,143.2 931.7,107.2 897.9,126.6 795.5,67.5"
        />
        <polyline
          id="q4-q8"
          points="1130.8,238 1080.9,209.4 1089.5,204.6 1008.3,157.5"
        />
        <polyline
          id="q2-q4"
          points="983.8,324.5 1047.5,287.9 1061.5,295.9 1135.9,252.9"
        />
        <polyline
          id="q1-q3"
          points="789.4,435.9 727.4,471.5 707.7,460.1 607.1,518"
        />
        <polyline
          id="q1-q2"
          points="811.1,421.6 888.1,377 891.9,379.3 969.2,334.7"
        />
        <polyline
          id="q5-q11"
          points="1130.6,427.6 672.1,692 528.1,609.9 349.8,712.6"
        />
        <polyline id="q12-q17" points="461.7,386.9 167.8,555.5" />
        <polyline
          id="q10-q16"
          points="1506.9,343.2 1433.1,385.5 1451.5,396.4 1367.7,444.7"
        />
        <polyline
          id="q10-q17"
          points="1321.2,470.1 846,743.5 340.6,450.8 163.9,553.3"
        />
      </g>
      <g id="q1">
        <ellipse
          cx="796.8"
          cy="449.3"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="796.4" cy="422.5" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M802.2 423.8s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M802.2 423.5s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M808.5 439.7h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6l-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M777.7 426s7-1.6 14-.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M777.7 426s7-1.6 14-.3"
        />
        <path
          fill="#F8CEDE"
          d="m777.7 426.7-.3-1.6-1.9.3 1 .3-1.3.6c0 .3 1.3 0 1.3 0l-.6.6c.2.7 1.8-.2 1.8-.2z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M792 438.1v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M792 438.1v7.6"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M792.6 446.1h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6c1 0 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M802.2 438.4v7.6"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M802.2 438.4v7.6"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M801.5 446.1h1.3s.3 1.6 1 1.9 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6s-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m803.4 421.9-.3 16.5h-11.8V425" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M803.1 434v1.6l-12.1.3v-1.6l12.1-.3z"
        />
        <path d="M797.1 431.1c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zm0-2.8c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6-.6-1zM815.5 407.9c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6 1 0 2.2-.6 2.2-1.6s0-1.6-1.3-1.9zm-28 3.2s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5s8 2.9 9.5 5.1c1.6 2.5 1.9 9.2 1.6 9.5s-2.2-8-5.7-8.3c-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M787.5 411.1s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.6-.7 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M787.8 411.1c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.1-.3-8.1 0-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M805.3 418.1s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-1.9 3-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M782.8 412s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-1.3-2.3-.9-4.2-.9-4.2z"
        />
        <circle cx="791" cy="415.5" r="1.6" fill="#FFF" />
        <circle cx="801.5" cy="415.5" r="1.6" fill="#FFF" />
        <circle cx="791.3" cy="415.5" r=".3" fill="#11142A" />
        <circle cx="801.5" cy="415.5" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M791.3 420.3c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c.1 1 .7 1.6 1.6 1.6zm10.2 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c.4 1 1 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M802.8 418.4c-1-.3-1.6 1-1.3 1.3.3.3.3 1 1 1 .6 0 1.3-.3 1.3-1s-.4-1.3-1-1.3zm-12.1.3c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c-.3-.6.4-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M795.5 417.1s0 1 .6 1l.6-1m-.9 3.2s-.6-.3-.6 0l.6.6-.6.6h1"
        />
        <path
          fill="none"
          stroke="#092860"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M778 427.9s-3.8-7-8.6-11.1"
        />
        <path
          fill="none"
          stroke="#092860"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M771.6 422.2s2.2.3 3.8 1.6m-2.2-2.9c.3-1.9-.6-4.1-.6-4.1m2.5 1.6s-.3 1.9-1.9 2.5"
        />
        <path
          fill="#FF335A"
          stroke="#FF335A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M768.4 414.6c-1.3.3-1 1.6-1 1.9s.6 1 1.3.6c.6-.3 1.3-1 1-1.6s-.6-.9-1.3-.9zm4.2-.3c-1.3 0-1.6 1.3-1.6 1.6 0 .3.3 1.3 1 1 .6 0 1.3-.6 1.3-1.3.2-1 .2-1.3-.7-1.3h0zm3.2 2.2c-1-.3-1.6.6-1.6 1 0 .3 0 1 .6 1s1.3-.3 1.3-1c.3-.7.3-1-.3-1h0zm-5.1 4.1c-1.3 0-1.6 1.3-1.6 1.6s.3 1.3 1 1c.6 0 1.3-.6 1.3-1.3.2-.6.2-1.3-.7-1.3h0z"
        />
        <path
          fill="#009289"
          d="M771.9 419.7s-2.2-.3-2.9 1.3c0 0-1-1.6-2.5-1 0 0-.3-1.9-1.6-2.2 0 0 2.2.6 2.9-.6 0 0 1 1.6 1.9.3 0 .3 0 1.5 2.2 2.2zm3.9 4.4s.3-1.9-1.3-2.5c0 0 1.6-1 1-2.2 0 0 1.9-.6 1.9-1.6 0 0-.6 1.9.6 2.2 0 0-1.6 1-.3 1.9 0 .3-1.6.3-1.9 2.2z"
        />
        <path fill="none" d="M743.9 384h108.2v126.3H743.9V384z" />
      </g>
      <g id="q2">
        <ellipse
          cx="972.1"
          cy="354.1"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="971.8" cy="327.7" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M977.5 328.7s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M977.5 328.7s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M983.8 344.9h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6c-.7-.2-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M961.3 345.2s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M961.3 345.2s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M961.9 344.9h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6c.7-.2.1-1.5.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M967.3 343v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M967.3 343v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M967.9 350.9h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6.3.6 1 1.6 1.9 1.6 1 0 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M977.5 343.3v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M977.5 343.3v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M976.8 351.3h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6s-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m978.8 326.8-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M978.4 338.9v1.9l-12.1.3v-1.9l12.1-.3z"
        />
        <path d="M972.4 336.3c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zm0-2.9c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zM990.8 312.8c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6s2.2-.6 2.2-1.6 0-1.6-1.3-1.9z" />
        <path d="M963.2 316.3s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5 3.7.5 7.1 2.3 9.5 5.1 1.6 2.5 1.9 9.2 1.6 9.5s-2.2-8-5.7-8.3c-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M962.8 316.3s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M963.2 316.3c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.2-.3-8.2 0-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M980.7 323.3s.3-4.1 1.9-6.4 2.5-2.9 2.9-2.9c0 0 .3 2.9-1.6 6-2 2.6-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M958.1 316.9s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-1.2-2.3-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m976.8 317.5 1 .6m-11.8.1 1-.3m3.8 7.9 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="966.3" cy="320.7" r="1.6" fill="#FFF" />
        <circle cx="976.8" cy="320.7" r="1.6" fill="#FFF" />
        <circle cx="966.7" cy="320.7" r=".3" fill="#11142A" />
        <circle cx="976.8" cy="320.7" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M966.7 325.5c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.6 1.6 1.6 1.6zm10.1 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6 1 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M978.1 323.3c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1l-1-1.3zm-12.1.6c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c.1-.7.4-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M971.1 322s0 1 .6 1 .6-1 .6-1"
        />
        <path fill="none" d="M919.6 289.2h108.2v126.3H919.6V289.2z" />
      </g>
      <g id="q4">
        <ellipse
          cx="1141.3"
          cy="265.7"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="1141" cy="238.9" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1146.7 240.2s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#1A49C3"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1146.7 240.2s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M1153.1 256.4h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6c-.7-.2-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1130.5 256.4s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#1A49C3"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1130.5 256.4s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M1131.2 256.4h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6c.7-.2.1-1.5.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#002764"
            strokeWidth="1.6"
            d="M1136.6 254.5v8"
          />
          <path
            fill="none"
            stroke="#1A49C3"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1136.6 254.5v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1137.2 262.5h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#002764"
            strokeWidth="1.6"
            d="M1146.7 254.9v8"
          />
          <path
            fill="none"
            stroke="#1A49C3"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1146.7 254.9v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1146.1 262.5h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6-.9 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path fill="#1A49C3" d="m1148 238.3-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1147.7 250.4v1.6l-12.1.3v-1.6l12.1-.3z"
        />
        <path d="M1141.7 247.9c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zm0-3.2c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zM1160.1 224.3c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6s2.2-.6 2.2-1.6c0-.9 0-1.6-1.3-1.9z" />
        <path
          fill="#1A49C3"
          d="M1132.4 227.8s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5 3.7.5 7.1 2.3 9.5 5.1 1.6 2.5 1.9 9.2 1.6 9.5-.3.3-2.2-8-5.7-8.3-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z"
        />
        <path
          fill="#002764"
          d="M1132.1 227.8s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z"
        />
        <path
          fill="#F8CEDE"
          d="M1132.4 227.8c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.1-.6-8.2.1-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M1149.9 234.5s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-1.9 3-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M1127.3 228.4s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-1.2-2.6-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m1146.1 229.1 1 .6m-12.1-.3 1-.3m4.1 8.3 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="1135.6" cy="232.3" r="1.6" fill="#FFF" />
        <circle cx="1146.1" cy="232.3" r="1.6" fill="#FFF" />
        <circle cx="1135.9" cy="231.9" r=".3" fill="#11142A" />
        <circle cx="1146.1" cy="231.9" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M1135.9 236.7c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.7 1.6 1.6 1.6zm10.2 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6 1 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1147.4 234.8c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1-.1-.7-.4-1.3-1-1.3zm-12.1.3c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c0-.6.4-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M1140.1 233.5s0 1 .6 1l.6-1"
        />
        <path fill="none" d="M1088.5 200.4h108.2v126.3h-108.2V200.4z" />
      </g>
      <g id="q8">
        <ellipse
          cx="1002"
          cy="170.2"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="1001.7" cy="143.5" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1007.1 144.5s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1007.1 144.5s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M1013.4 160.7h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6c-.7-.2-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M990.8 161s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M990.8 161s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M991.5 161h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6c.7-.2.1-1.5.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M996.9 159.1v7.6"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M996.9 159.1v7.6"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M997.5 166.7h-1.2s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6.3.6 1 1.6 1.9 1.6s1.6-1 1.6-1v1h1l-.1-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1007.1 159.4v7.6"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1007.1 159.1v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1006.8 167h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6s-1.6-1-1.6-1v1h-1V167z"
          />
        </g>
        <path d="m1008.3 142.9-.3 16.5h-11.7V146" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1008 154.6v1.9l-11.8.3-.3-1.6 12.1-.6z"
        />
        <path d="M1002 152.1c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zm0-2.9c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zM1020.4 128.9c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6 1 0 2.2-.6 2.2-1.6s0-1.9-1.3-1.9zM992.8 132s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5 3.7.5 7.1 2.3 9.5 5.1 1.6 2.5 1.9 9.2 1.6 9.5-.3.3-2.2-8-5.7-8.3-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M992.8 132s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M992.8 132c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.5.4-8.2.1-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M1010.3 139s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-2 3.3-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M987.7 132.7s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-.9-2.6-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m1006.4 133.6 1 .6m-11.8-.2 1-.3m3.8 7.9 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="996.3" cy="136.5" r="1.6" fill="#FFF" />
        <circle cx="1006.4" cy="136.5" r="1.6" fill="#FFF" />
        <circle cx="996.3" cy="136.5" r=".3" fill="#11142A" />
        <circle cx="1006.4" cy="136.5" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M996.3 141.3c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c0 .9.6 1.6 1.6 1.6zm10.1 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c.4.9 1 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1007.7 139c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1s-.4-.9-1-1.3zm-12.1.7c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c.1-.7.4-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M1000.7 137.8s0 1 .6 1 .6-1 .6-1"
        />
        <path fill="none" d="M949.2 105h108.1v126.3H949.2V105z" />
      </g>
      <g id="q14">
        <ellipse
          cx="793.6"
          cy="81.1"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="793.3" cy="54.7" r="26.1" fill="#BEFCDF" />
        <path fill="none" d="M740.8 16.2H849v126.3H740.8V16.2z" />
        <path
          fill="none"
          stroke="#E21A4A"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M787.5 70v8.3m10.8-8v8.3"
        />
        <path
          stroke="#000"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M788.2 78.3h-1.3s-.3 1.6-1 1.9c-1 0-1.3-.3-1.6-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6c.9 0 1.6-1 1.6-1v1h1l.3-2.8zm9.5 0h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6s-1.6-1-1.6-1v1h-1v-2.8z"
        />
        <path fill="#E21A4A" d="M799.3 53.5v17.2h-12.4v-14" />
        <path fill="#E21A4A" d="m799.3 54.1-.3 16.5h-12.4V57.3" />
        <path fill="#FFF" d="M799.3 65.9v1.9l-12.4.3-.3-1.9 12.7-.3z" />
        <path
          fill="#024C45"
          stroke="#024C45"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M792.9 63.3c-.6-.3-1.3.6-1 1 .3.3 0 .6.6.6s1-.3 1-.6l-.6-1zm0-2.8c-.6-.3-1.3.6-1 1 0 .3 0 .6.6.6l1-.6-.6-1z"
        />
        <path
          fill="none"
          stroke="#E21A4A"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M798.7 55s1.3 9.2 4.5 8.6c2.9-.6.3-7 .3-10.8"
        />
        <path
          fill="none"
          stroke="#A01234"
          strokeDasharray="3.2 0"
          strokeMiterlimit="12.7"
          strokeWidth="1.6"
          d="M786.6 56.6s-4.5 4.8-3.5 7.6c1 3.5 19.4-7 19.4-11.1"
        />
        <path
          fill="none"
          stroke="#E21A4A"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M787.5 70v8.3m10.8-8v8.3"
        />
        <path
          fill="none"
          stroke="#A01234"
          strokeDasharray="3.2 0"
          strokeMiterlimit="12.7"
          strokeWidth="1.6"
          d="M798.7 55s1.3 9.2 4.5 8.6c2.9-.6.3-7 .3-10.8"
        />
        <path
          fill="none"
          stroke="#A01234"
          strokeDasharray="3.2 0"
          strokeMiterlimit="12.7"
          strokeWidth="1.6"
          d="M782.8 64.3c1 3.5 19.4-7 19.4-11.1"
        />
        <path
          fill="none"
          stroke="#A01234"
          strokeDasharray="3.2 9.5"
          strokeMiterlimit="12.7"
          strokeWidth="1.6"
          d="M787.5 70v8.3m10.8-8v8.3"
        />
        <path
          fill="#F2D1DE"
          d="m804.1 53.1-1.6-.3v-1.9l.3 1s0-1.6.3-1.3l.3 1.3s.3-1 .6-.6l.1 1.8z"
        />
        <path
          fill="#F2D1DE"
          d="m801.8 53.1 1.6-.3v-1.9l-.3 1s0-1.6-.3-1.3l-.3 1.3s-.3-1-.6-.6l-.1 1.8z"
        />
        <path
          fill="#E21A4A"
          d="M783.7 42.3s.6-12.4 5.7-15.3c5.1-3.2 7.3-3.5 10.5-3.5s8 2.9 9.5 5.4 1.9 9.5 1.6 10.2c-.3.3-2.2-8.3-5.7-8.6-3.5 0-4.1 3.2-4.1 4.1l-.6 6.4-16.9 1.3z"
        />
        <path
          fill="#FFF"
          d="M783.7 42.3s1-8 1.9-10.2l3.2 9.2s3.2-10.2 3.8-10.5c.3-.6 3.8 10.2 3.8 10.2l5.7-9.2-.6 9.5-17.8 1zm28-3.5c-1.9-.3-2.9 1.6-2.5 1.9.3.6.3 1.9 1.6 1.9s2.2-.6 2.2-1.9c0-1.2 0-1.6-1.3-1.9z"
        />
        <path
          fill="#F2D1DE"
          d="M783.7 42.3c0 3.5-1.3 12.1 4.1 15 4.5 1.6 8.6 1.3 11.5-2.2 2.9-3.8 2.5-10.8 2.2-14.3 0-.6-6.4 0-8.9.3s-8.6.6-8.9 1.2z"
        />
        <path
          fill="none"
          stroke="#111428"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="12.7"
          strokeWidth=".6"
          d="M791.7 48.4s0 1 .6 1 .6-1 .6-1"
        />
        <path
          fill="#F2D1DE"
          d="M799.9 50.3s2.2-3.8 4.8-4.8l3.8-1.6s-1 2.9-4.1 4.8c-2.9 1.9-4.5 1.6-4.5 1.6z"
        />
        <path
          fill="#F2D1DE"
          d="M777 45.2s2.2 0 4.5 1.9l3.5 3.5s-3.5-.3-5.4-2.2c-2.3-1.9-2.6-3.2-2.6-3.2z"
        />
        <path
          fill="#FFF"
          d="M787.2 48.7c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c0 .6.7 1.6 1.6 1.6zm10.5 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c0 .6.7 1.6 1.6 1.6z"
        />
        <path
          fill="#111428"
          d="m787.2 47.4.3-.3-.3-.3-.3.3.3.3zm10.5 0 .3-.3-.3-.3-.3.3.3.3z"
        />
        <path
          fill="#FFF"
          d="M787.2 48.7c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c0 .6.7 1.6 1.6 1.6z"
        />
        <path
          fill="#111428"
          d="M787.2 48c.6 0 1.3-.6 1.3-1.3 0-.6-.6-1.3-1.3-1.3-.6 0-1.3.6-1.3 1.3 0 1 .7 1.3 1.3 1.3z"
        />
        <path
          fill="#FFF"
          d="m786.6 47.1.3-.3-.3-.3-.3.3.3.3zm.6.6c.3 0 .3-.3 0 0 .3-.3 0-.3 0-.3v.3c0-.3 0 0 0 0zM797.7 48.7c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c0 .6.7 1.6 1.6 1.6z"
        />
        <path
          fill="#111428"
          d="M797.7 48c.6 0 1.3-.6 1.3-1.3 0-.6-.6-1.3-1.3-1.3-.6 0-1.3.6-1.3 1.3 0 1 .7 1.3 1.3 1.3z"
        />
        <path
          fill="#FFF"
          d="m798 47.1.3-.3-.3-.3-.3.3.3.3zm-.9.3c.3 0 .3 0 0 0 .3-.3 0-.3 0-.3v.3c-.3 0 0 0 0 0z"
        />
        <path
          fill="#F2D1DE"
          d="M787.2 50.9c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.7 1.6 1.6 1.6zm10.5 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.7 1.6 1.6 1.6z"
        />
        <path
          fill="#FF335A"
          stroke="#FF335A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="12.7"
          strokeWidth=".3"
          d="M799 49.3c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1s1.3-.3 1.3-1l-1-1.3h0zm-12.4.7c.3 0 1 .3.6 1.3-.3 1.3-.6 1-1 1l-.6-1c0-.7.7-1.7 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M788.8 50.9s1 1.6 3.2 1.6c3.2 0 4.5-2.9 4.5-2.9"
        />
        <path
          fill="none"
          stroke="#111428"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="12.7"
          strokeWidth=".6"
          d="M797.1 44.2s.6-.6 1.3.3m-10.9 0s-.6-.6-1.3.3"
        />
      </g>
      <g id="q9">
        <ellipse
          cx="1282"
          cy="169.3"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="1281.7" cy="142.5" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1287.1 143.8s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1287.1 143.8s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M1293.4 160h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6c-.7-.2-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1270.8 160s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1270.8 160s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M1271.5 160h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6c.7.1.1-1.5.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1276.9 158.1v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1276.9 158.1v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1277.5 166.1h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6.3.6 1 1.6 1.9 1.6 1 0 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1287.1 158.5v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1287.1 158.5v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1286.7 166.1h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6s-1 1.6-1.9 1.6c-1 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m1288.3 141.9-.3 16.5h-11.8V145" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1288 154v1.6l-11.8.3-.3-1.6 12.1-.3z"
        />
        <path d="M1282 151.5c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zm0-3.2c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6-.6-1zM1300.4 127.9c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6 1 0 2.2-.6 2.2-1.6 0-.9 0-1.6-1.3-1.9z" />
        <path d="M1272.7 131.4s.6-11.8 5.7-14.6 7.3-3.5 10.2-3.5c2.9 0 8 2.9 9.5 5.1 1.6 2.2 1.9 9.2 1.6 9.5-.3.3-2.2-8-5.7-8.3-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M1272.7 131.4s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M1272.7 131.4c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.4.4-8.1.1-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M1290.2 138.1s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-1.9 3.1-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M1267.7 132s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-.9-2.6-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m1286.7 132.7 1 .6m-12.1-.3 1-.3m3.8 8.3 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="1276.2" cy="135.9" r="1.6" fill="#FFF" />
        <circle cx="1286.4" cy="135.9" r="1.6" fill="#FFF" />
        <circle cx="1276.2" cy="135.5" r=".3" fill="#11142A" />
        <circle cx="1286.4" cy="135.5" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M1276.2 140.3c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c.1 1 1 1.6 1.6 1.6zm10.2 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c.4 1 1 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1287.7 138.4c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1-.4-1-.4-1.3-1-1.3zm-12.1.3c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M1280.7 137.1s0 1 .6 1l.6-1"
        />
        <path fill="none" d="M1229.2 104h108.1v126.3h-108.1V104z" />
      </g>
      <g id="q15">
        <ellipse
          cx="1519.3"
          cy="84.6"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="1519" cy="57.9" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1524.7 58.9s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1524.4 58.9s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M1530.8 75.1h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6c-.8-.2-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1508.2 75.4s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1508.2 75.4s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M1509.1 75.4h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6l.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1514.6 73.5v7.6"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1514.2 73.5v7.6"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1514.9 81.1h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6c1 0 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1524.4 73.8v7.6"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1524.4 73.8v7.6"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1524.1 81.5h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6-1 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m1525.7 57.3-.3 16.5h-11.8V60.5" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1525.4 69v2l-11.8.3-.3-1.6 12.1-.7z"
        />
        <path d="M1519.3 66.5c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6c.1-.7-.3-.7-.6-1zm0-2.9c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6c.1-.3.1-1-.6-1zM1537.8 43.3c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6s2.2-.6 2.2-1.6 0-1.6-1.3-1.9z" />
        <path d="M1510.1 46.5s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5s8 2.9 9.5 5.1c1.6 2.5 1.9 9.2 1.6 9.5-.3.3-2.2-8-5.7-8.3-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M1510.1 46.5s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M1510.1 46.5c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3s-8.2 0-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M1527.6 53.5s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-1.9 2.9-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M1505 47.1s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-.9-2.6-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m1524.1 48 1 .6m-12.1-.2 1-.3m3.7 7.9 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="1513.6" cy="50.9" r="1.6" fill="#FFF" />
        <circle cx="1523.8" cy="50.9" r="1.6" fill="#FFF" />
        <circle cx="1513.6" cy="50.9" r=".3" fill="#11142A" />
        <circle cx="1523.8" cy="50.9" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M1513.6 55.7c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6 1 1.6 1.6 1.6zm10.2 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.9 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1525.1 53.8c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1-.1-1-.4-1.3-1-1.3zm-12.1.3c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c0-.7.6-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M1518.1 52.2s0 1 .6 1l.6-1"
        />
        <path fill="none" d="M1466.5 19.4h108.2v126.3h-108.2V19.4z" />
      </g>
      <g id="q16">
        <ellipse
          cx="1524.4"
          cy="346.5"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="1524.1" cy="320.1" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1529.8 321s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1529.8 321s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M1536.2 337.3h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6c-.7-.3-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1513.3 337.6s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1513.3 337.6s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M1514.2 337.3h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6c.8-.3.1-1.5.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1519.6 335.4v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1519.6 335.4v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1520 343.3h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6.3.6 1 1.6 1.9 1.6.9 0 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1529.8 335.7v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1529.5 335.7v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1529.2 343.6h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6s-1 1.6-1.9 1.6c-1 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m1530.8 319.4-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1530.5 331.2v1.9l-11.8.3v-1.9l11.8-.3z"
        />
        <path d="M1524.4 328.7c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6c.1-.7.1-1-.6-1zm0-2.9c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6s1-.3 1-.6c.1-.7.1-1-.6-1zM1542.9 305.1c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6 1 0 2.2-.6 2.2-1.6s-.1-1.6-1.3-1.9z" />
        <path d="M1515.2 308.6s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5 3.7.5 7.1 2.3 9.5 5.1 1.6 2.5 1.9 9.2 1.6 9.5-.3.3-2.2-8-5.7-8.3-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M1515.2 308.6s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M1515.2 308.6c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.1-.2-8.2.1-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M1532.7 315.6s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-1.6 2.7-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M1510.1 309.3s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-.9-2.6-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m1529.2 309.9 1 .6m-12.1 0 1-.3m3.7 8 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="1518.7" cy="313.1" r="1.6" fill="#FFF" />
        <circle cx="1528.9" cy="313.1" r="1.6" fill="#FFF" />
        <circle cx="1518.7" cy="313.1" r=".3" fill="#11142A" />
        <circle cx="1529.2" cy="313.1" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M1518.7 317.9c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c.3.6 1 1.6 1.6 1.6zm10.5 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c0 .6.6 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1530.5 315.6c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1s-.4-1-1-1.3zm-12.4.7c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c0-.7.6-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M1523.1 314.4s0 1 .6 1 .6-1 .6-1"
        />
        <path fill="none" d="M1471.6 281.6h108.2v126.3h-108.2V281.6z" />
      </g>
      <g id="q5">
        <ellipse
          cx="1151.2"
          cy="437.8"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="1150.9" cy="411.1" r="26.1" fill="#BEFCDF" />
        <path fill="none" d="M1098.4 372.6h108.2v126.3h-108.2V372.6z" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1156.9 412.4s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1156.9 412s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M1163.3 428.3h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6c-.7.4-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1132.1 414.6s7-1.6 14-.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1132.1 414.6s7-1.6 14-.3"
        />
        <path
          fill="#F8CEDE"
          d="m1132.4 415.2-.3-1.6-1.9.3 1 .3-1.3.6c0 .3 1.3 0 1.3 0l-.6.6c.2.8 1.8-.2 1.8-.2z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1146.7 426.7v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1146.7 426.7v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1147.4 434.6h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1156.9 427v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1156.9 427v7.6"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1156.3 434.6h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6s-1 1.6-1.9 1.6-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m1158.2 410.4-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1157.9 422.5v1.6l-12.1.3v-1.6l12.1-.3z"
        />
        <path d="M1151.8 419.7c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zm0-2.9c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zM1170.3 396.4c-1.9-.3-2.5 1.6-2.5 1.9s.3 1.6 1.6 1.6c1 0 2.2-.6 2.2-1.6s-.4-1.5-1.3-1.9zm-28 3.2s.6-11.8 5.7-14.6c5.1-2.9 7.3-3.5 10.2-3.5 3.7.5 7.1 2.3 9.5 5.1 1.6 2.5 1.9 9.2 1.6 9.5s-2.2-8-5.7-8.3c-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M1142.3 399.6s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M1142.6 399.6c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.1-.2-8.2.4-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M1160.1 406.6s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-1.9 3-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M1137.5 400.6s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-1.2-2.9-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m1156.3 401.2 1 .6m-12.1-.3 1-.3m3.7 8 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="1145.8" cy="404.1" r="1.6" fill="#FFF" />
        <circle cx="1156.3" cy="404.1" r="1.6" fill="#FFF" />
        <circle cx="1145.8" cy="404.1" r=".3" fill="#11142A" />
        <circle cx="1156.3" cy="404.1" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M1146.1 408.9c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.7 1.6 1.6 1.6zm10.2 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.6 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1157.6 406.9c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1-.4-.9-.4-1.3-1-1.3zm-12.1.4c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c-.3-.7.3-1.3 1-1.3h0z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M1150.2 405.7s0 1 .6 1 .6-1 .6-1"
        />
        <path
          fill="none"
          stroke="#092860"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1132.7 416.5s-3.8-7-8.6-11.1"
        />
        <path
          fill="none"
          stroke="#092860"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1126.4 410.8s2.2.3 3.8 1.6m-2.2-2.9c.3-1.9-.6-4.1-.6-4.1m2.5 1.5s-.3 1.9-1.9 2.5"
        />
        <path
          fill="#FF335A"
          stroke="#FF335A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1123.2 403.1c-1.3.3-1 1.6-1 1.9.3.3.6 1 1.3.6.6-.3 1.3-1 1-1.6s-.7-.9-1.3-.9h0zm4.1-.3c-1.3 0-1.6 1.3-1.6 1.6 0 .3.3 1.3 1 1 .6 0 1.3-.6 1.3-1.3.3-1 0-1.3-.7-1.3h0zm3.2 2.2c-1-.3-1.6.6-1.6 1 0 .3 0 1 .6 1s1.3-.3 1.3-1c.4-.6.4-1-.3-1zm-5.1 4.2c-1.3 0-1.6 1.3-1.6 1.6s.3 1.3 1 1c.6 0 1.3-.6 1.3-1.3.3-.7.3-1.3-.7-1.3h0z"
        />
        <path
          fill="#009289"
          d="M1126.7 408.5s-2.2-.3-2.9 1.3c0 0-1-1.6-2.5-1 0 0-.3-1.9-1.6-2.2 0 0 2.2.6 2.9-.6 0 0 1 1.6 1.9.3 0 0 0 1.3 2.2 2.2zm3.5 4.2s.3-1.9-1.3-2.5c0 0 1.6-1 1-2.2 0 0 1.9-.6 1.9-1.6 0 0-.6 1.9.6 2.2 0 0-1.6 1-.3 1.9.3.3-1.3.3-1.9 2.2z"
        />
      </g>
      <g id="q10">
        <ellipse
          cx="1342.1"
          cy="474.7"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="1341.8" cy="448" r="26.1" fill="#BEFCDF" />
        <path fill="none" d="M1289.3 409.8h108.2v126.3h-108.2V409.8z" />
        <path
          fill="none"
          stroke="#E21A4A"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1336.7 463.6v8.3m10.5-8v8.3"
        />
        <path
          stroke="#000"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1337.3 471.9h-1.3s-.3 1.6-1 1.9c-1 0-1.3-.3-1.6-1l-.6-1.3c-.6 0-.6 1-.3 1.6.3.6 1 1.6 1.9 1.6.9 0 1.6-1 1.6-1v1h1v-2.9l.3.1zm9.3 0h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6-.9 0-1.6-1-1.6-1v1h-1v-2.8z"
        />
        <path fill="#E21A4A" d="M1348.2 446.7v17.2h-12.4v-14" />
        <path fill="#E21A4A" d="m1348.5 447.4-.3 16.5h-12.4v-13.4" />
        <path fill="#FFF" d="M1348.2 459.4v1.9l-12.4.3v-1.9l12.4-.3z" />
        <path
          fill="#024C45"
          stroke="#024C45"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1341.8 456.9c-.6-.3-1.3.6-1 1 0 .3 0 .6.6.6l1-.6c0-.7 0-1-.6-1zm0-2.9c-.6-.3-1.3.6-1 1 0 .3 0 .6.6.6l1-.6c0-.6 0-1-.6-1z"
        />
        <path
          fill="none"
          stroke="#E21A4A"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1347.8 448.6s1.3 9.2 4.5 8.6c2.9-.6.3-7 .3-10.8"
        />
        <path
          fill="none"
          stroke="#A01234"
          strokeDasharray="3.2 0"
          strokeMiterlimit="12.7"
          strokeWidth="1.6"
          d="M1335.7 449.9s-4.5 4.8-3.5 7.6c1 3.5 19.4-7 19.4-11.1"
        />
        <path
          fill="none"
          stroke="#E21A4A"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1336.7 463.6v8.3m10.5-8v8.3"
        />
        <path
          fill="none"
          stroke="#A01234"
          strokeDasharray="3.2 0"
          strokeMiterlimit="12.7"
          strokeWidth="1.6"
          d="M1347.8 448.6s1.3 9.2 4.5 8.6c2.9-.6.3-7 .3-10.8"
        />
        <path
          fill="none"
          stroke="#A01234"
          strokeDasharray="3.2 0"
          strokeMiterlimit="12.7"
          strokeWidth="1.6"
          d="M1331.9 457.5c1 3.5 19.4-7 19.4-11.1"
        />
        <path
          fill="none"
          stroke="#A01234"
          strokeDasharray="3.2 9.5"
          strokeMiterlimit="12.7"
          strokeWidth="1.6"
          d="M1336.7 463.6v8.3m10.5-8v8.3"
        />
        <path
          fill="#F2D1DE"
          d="m1352.9 446.7-1.6-.3v-1.9l.3 1s0-1.6.3-1.3l.3 1.3s.3-1 .6-.6c1.1.2.1 1.8.1 1.8z"
        />
        <path
          fill="#F2D1DE"
          d="m1350.7 446.7 1.6-.3v-1.9l-.3 1s0-1.6-.3-1.3l-.3 1.3s-.3-1-.6-.6c-.4.2-.1 1.8-.1 1.8z"
        />
        <path
          fill="#E21A4A"
          d="M1332.9 435.9s.6-12.4 5.7-15.3c5.1-3.2 7.3-3.5 10.5-3.5 2.9 0 8 2.9 9.5 5.4s1.9 9.5 1.6 10.2c-.3.3-2.2-8.3-5.7-8.6-3.5 0-4.1 3.2-4.1 4.1l-.6 6.4-16.9 1.3z"
        />
        <path
          fill="#FFF"
          d="M1332.6 435.9s1-8 1.9-10.2l3.2 9.2s3.2-10.2 3.8-10.5c.3-.6 3.8 10.2 3.8 10.2l5.7-9.2-.6 9.5-17.8 1zm28.3-3.5c-1.9-.3-2.9 1.6-2.5 1.9.3.6.3 1.9 1.6 1.9s2.2-.6 2.2-1.9c0-.9-.4-1.6-1.3-1.9z"
        />
        <path
          fill="#F2D1DE"
          d="M1332.9 435.9c0 3.5-1.3 12.1 4.1 15 4.5 1.6 8.6 1.3 11.5-2.2 2.9-3.8 2.5-10.8 2.2-14.3 0-.6-6.4 0-8.9.3-2.6.2-8.6.6-8.9 1.2z"
        />
        <path
          fill="none"
          stroke="#111428"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="12.7"
          strokeWidth=".6"
          d="M1340.8 441.9s0 1 .6 1 .6-1 .6-1"
        />
        <path
          fill="#F2D1DE"
          d="M1349.1 443.9s2.2-3.8 4.8-4.8l3.8-1.6s-1 2.9-4.1 4.8c-2.9 1.6-4.5 1.6-4.5 1.6z"
        />
        <path
          fill="#F2D1DE"
          d="M1326.2 438.4s2.2 0 4.5 1.9l3.5 3.5s-3.5-.3-5.4-2.2c-2.3-1.6-2.6-3.2-2.6-3.2z"
        />
        <path
          fill="#FFF"
          d="M1336.1 441.9c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.9 1.6 1.6 1.6zm10.5 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.9 1.6 1.6 1.6z"
        />
        <path
          fill="#111428"
          d="m1336.4 441 .3-.3-.3-.3-.3.3.3.3zm10.2 0 .3-.3-.3-.3-.3.3.3.3z"
        />
        <path
          fill="#FFF"
          d="M1336.1 441.9c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.9 1.6 1.6 1.6z"
        />
        <path
          fill="#111428"
          d="M1336.1 441.6c.6 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3-1.3.6-1.3 1.3c.3 1 .6 1.3 1.3 1.3z"
        />
        <path
          fill="#FFF"
          d="m1335.7 440.7.3-.3-.3-.3-.3.3.3.3zm.7.3c.3 0 .3 0 0 0 .3-.3 0-.3 0-.3s-.3 0 0 .3c-.3 0 0 0 0 0zM1346.6 441.9c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.9 1.6 1.6 1.6z"
        />
        <path
          fill="#111428"
          d="M1346.6 441.6c.6 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3-1.3.6-1.3 1.3c.3 1 .6 1.3 1.3 1.3z"
        />
        <path
          fill="#FFF"
          d="m1346.9 440.7.3-.3-.3-.3-.3.3.3.3zm-.7.3s.4 0 0 0c.3-.3 0-.3 0-.3s-.3 0 0 .3c-.3 0 0 0 0 0z"
        />
        <path
          fill="#F2D1DE"
          d="M1336.1 444.5c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c.3 1 .9 1.6 1.6 1.6zm10.8 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.6 1.6 1.6 1.6z"
        />
        <path
          fill="#FF335A"
          stroke="#FF335A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="12.7"
          strokeWidth=".3"
          d="M1348.2 442.9c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1-.4-1-.4-1.3-1-1.3h0zm-12.5.3c.3 0 1 .3.6 1.3-.3 1.3-.6 1-1 1l-.6-1c.1-.6.4-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M1338 444.5s1 1.6 3.2 1.6c3.2 0 4.5-2.9 4.5-2.9"
        />
        <path
          fill="none"
          stroke="#111428"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="12.7"
          strokeWidth=".6"
          d="M1346.2 437.5s.6-.6 1.3.3m-10.8.3s-.6-.6-1.3.3"
        />
      </g>
      <g id="q13">
        <ellipse
          cx="1066.6"
          cy="530.7"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="1066.3" cy="504.3" r="26.1" fill="#BEFCDF" />
        <path fill="none" d="M1014.1 465.8h108.2v126.3h-108.2V465.8z" />
        <path
          fill="none"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1070.7 505.3s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#1A49C3"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1070.7 505.3s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M1076.8 521.5h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6l-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1054.2 521.8s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#1A49C3"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1054.2 521.8s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M1055.1 521.5h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6l.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#002764"
            strokeWidth="1.6"
            d="M1060.5 519.6v8"
          />
          <path
            fill="none"
            stroke="#1A49C3"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1060.5 519.6v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1060.8 527.5h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6c1 0 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#002764"
            strokeWidth="1.6"
            d="M1070.4 519.9v8"
          />
          <path
            fill="none"
            stroke="#1A49C3"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1070.4 519.9v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1070.1 527.9h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6-1 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path fill="#1A49C3" d="m1071.7 503.4-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1071.3 515.4v1.9l-11.8.3v-1.9l11.8-.3z"
        />
        <path d="M1065.3 512.9c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6c0-.7 0-1-.6-1zm0-2.9c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6c0-.6 0-1-.6-1zM1083.8 489.4c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6 1 0 2.2-.6 2.2-1.6s-.1-1.6-1.3-1.9z" />
        <path
          fill="#1A49C3"
          d="M1056.1 492.9s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5 3.7.5 7.1 2.3 9.5 5.1 1.6 2.5 1.9 9.2 1.6 9.5-.3.3-2.2-8-5.7-8.3-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z"
        />
        <path
          fill="#002764"
          d="M1056.1 492.9s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z"
        />
        <path
          fill="#F8CEDE"
          d="M1056.1 492.9c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3s-8.2 0-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M1073.6 499.9s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-2 2.6-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M1051 493.5s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-1.2-2.3-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m1070.1 494.1 1 .6m-12.2.1 1-.3m3.8 7.9 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="1059.6" cy="497.3" r="1.6" fill="#FFF" />
        <circle cx="1069.8" cy="497.3" r="1.6" fill="#FFF" />
        <circle cx="1059.6" cy="497.3" r=".3" fill="#11142A" />
        <circle cx="1070.1" cy="497.3" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M1059.6 502.1c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c.3.6.9 1.6 1.6 1.6zm10.5 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c0 .6.6 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1071.3 499.9c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1s-.3-1-1-1.3zm-12.4.6c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c.1-.7.7-1.6 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M1064 498.6s0 1 .6 1 .6-1 .6-1"
        />
      </g>
      <g id="q18">
        <ellipse
          cx="936.1"
          cy="691.7"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="935.8" cy="665.3" r="26.1" fill="#BEFCDF" />
        <path fill="none" d="M883.3 626.8h108.2v126.3H883.3V626.8z" />
        <path
          fill="none"
          stroke="#009289"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M919.3 659.3s4.1 10.8 11.1 10.2"
        />
        <path
          fill="none"
          stroke="#92F4CA"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M919.3 659.3s4.1 10.8 11.1 10.2"
        />
        <path
          fill="#F2D1DE"
          d="m920.2 658.9-1.3.6s-1.3-1.3-1-1.6l1 .6-.3-1.3 1 1s-.3-.6.3-1l.3 1.7z"
        />
        <path
          fill="none"
          stroke="#009289"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M940.6 668.8s8.3.6 13.7-10.8"
        />
        <path
          fill="none"
          stroke="#92F4CA"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M940.6 668.8s8.3.6 13.7-10.8"
        />
        <path
          fill="#F2D1DE"
          d="m953.6 657.7 1.3.6s1.3-1.3 1-1.6-1 .6-1 .6l.3-1.3-1 1v-1l-.6 1.7z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009289"
            strokeWidth="1.6"
            d="M931.3 680.9v7.6"
          />
          <path
            fill="none"
            stroke="#92F4CA"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M931.3 680.9v7.6"
          />
          <path
            fill="#092860"
            stroke="#092860"
            strokeWidth=".3"
            d="M932 688.5h-1.3s-.3 1.6-1 1.6c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6.3.6 1 1.6 1.9 1.6s1.6-1 1.6-1v1h.6l.4-2.5z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009289"
            strokeWidth="1.6"
            d="M941.5 681.2v7.6"
          />
          <path
            fill="none"
            stroke="#92F4CA"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M941.5 681.2v7.6"
          />
          <path
            fill="#092860"
            stroke="#092860"
            strokeWidth=".3"
            d="M940.9 688.8h1.3s.3 1.6 1 1.6c.6.3 1-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6s-1 1.6-1.9 1.6c-.9 0-1.6-1-1.6-1v1h-.6l-.4-2.5z"
          />
        </g>
        <path d="m942.5 665-.3 16.2h-11.8v-13.4" />
        <path fill="#092860" d="M942.2 676.8v1.6l-11.5.3-.3-1.6 11.8-.3z" />
        <path d="M936.4 674.2c-.6 0-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zm0-2.9c-.6 0-1 .6-1 1s0 .6.6.6l1-.6-.6-1zM954.6 651c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.3 1.6s2.2-.6 2.2-1.6c.2-1-.1-1.6-1-1.9z" />
        <path d="M927.2 654.5s.6-11.8 5.4-14.6c4.8-2.9 7.3-3.5 10.2-3.5 2.9 0 7.6 2.9 9.2 5.1 1.6 2.2 1.9 9.2 1.6 9.5-.3.3-2.2-8-5.7-8s-3.8 3.2-4.1 4.1l-.6 6-16 1.4z" />
        <path d="M927.2 654.5s.3-5.7 1.9-9.5l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.5 3.8 9.5l5.7-8.9-.6 8.9-17.8 1.3z" />
        <path
          fill="#FF335A"
          d="M920.5 648.1c-1.3-1-1.3-2.2-1.3-2.2h-1.3s0 1.3-1.3 2.2-2.2 1.9-2.2 4.1c0 1.9 1.3 2.9 2.5 3.5 1.3.6 1.6 2.9 1.6 2.9s.3-1.9 1.6-2.9c1-.6 2.2-1.6 2.2-3.5.5-2.2-.5-3.1-1.8-4.1z"
        />
        <path
          fill="#FFF7CF"
          d="M919.3 644.9h-1l-.3.3.3.3h1l.3-.3-.3-.3zM918.3 651.9l-1.9.6c-.6 0-1-.3-1-.6 0-.6.6-1 1-.6l1.9.6zm.6 0 1.9.6c.6 0 1-.3 1-.6 0-.6-.6-1-1-.6l-1.9.6zm0 .4.6 1.9c0 .6-.3 1-.6 1-.6 0-1-.6-.6-1l.6-1.9zm0-.7.6-1.9c0-.6-.3-1-.6-1-.6 0-1 .6-.6 1l.6 1.9z"
        />
        <circle cx="918.6" cy="651.9" r=".3" fill="#4E50FF" />
        <path
          fill="#F2D1DE"
          d="M927.2 654.5c0 3.5-1.3 11.5 4.1 14.3 4.1 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.2 2.2-13.7 0-.6-6.4 0-8.6.3s-8.5.3-8.8 1z"
        />
        <path
          fill="#F2D1DE"
          d="M944.4 661.2s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 5.7-1.9 3.2-3.2 3.6-3.2 3.6z"
        />
        <path
          fill="#F2D1DE"
          d="M922.1 655.1s1.9.6 3.5 3.5c1.6 2.5 1.6 2.5 1.9 4.5 0 0-2.9-1.6-4.1-3.8-1.3-2.6-1.3-4.2-1.3-4.2z"
        />
        <path
          fill="none"
          stroke="#111428"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="m940.9 655.8 1 .6m-11.8-.3 1-.3m3.7 7.9s.3.6 1 .6c.6 0 .6-1 .6-1"
        />
        <path
          fill="#F2D1DE"
          d="M930.7 663.4c.6 0 1.3-.6 1.3-1.6s-.6-1.6-1.3-1.6c-.7 0-1.3.6-1.3 1.6s.7 1.6 1.3 1.6zm10.2 0c.6 0 1.3-.6 1.3-1.6s-.6-1.6-1.3-1.6c-.7 0-1.3.6-1.3 1.6s.3 1.6 1.3 1.6z"
        />
        <path
          fill="#FF335A"
          stroke="#FF335A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M942.2 661.5c-1-.3-1.6 1-1.3 1.3l.6 1c.3 0 1.3-.3 1.3-1s0-1.3-.6-1.3zm-12.1.3c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c0-.7.7-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#111428"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M934.8 660.2s0 1 .6 1 .6-1 .6-1m-6.2-.9s1-1 1.9 0m7.9 0s1-1 1.9 0"
        />
      </g>
      <g id="q19">
        <ellipse
          cx="1345.3"
          cy="663.4"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="1345" cy="637" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1350.7 637.9s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1350.7 637.9s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M1356.7 654.2h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6l-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1334.2 654.5s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M1334.2 654.5s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M1335.1 654.2h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6l.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1340.5 652.3v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1340.5 652.3v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1340.8 660.2h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6c1 0 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M1350.4 652.6v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M1350.4 652.6v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M1350.1 660.5h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6-1 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m1351.7 636-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1351.3 648.1v1.6l-11.8.6v-1.9l11.8-.3z"
        />
        <path d="M1345.3 645.6c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6c0-.7 0-1-.6-1zm0-2.9c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6c0-.7 0-1-.6-1zM1363.7 622c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6 1 0 2.2-.6 2.2-1.6s0-1.6-1.3-1.9z" />
        <path d="M1336.1 625.5s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5s8 2.9 9.5 5.1c1.6 2.5 1.9 9.2 1.6 9.5-.3.3-2.2-8-5.7-8.3-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M1336.1 625.5s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M1336.1 625.5c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.5.4-8.2.1-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M1353.6 632.2s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-2 3-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M1331 626.2s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-1.2-2.3-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m1350.1 626.8 1 .6m-12.2 0 1-.3m3.8 8 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="1339.6" cy="630" r="1.6" fill="#FFF" />
        <circle cx="1349.7" cy="630" r="1.6" fill="#FFF" />
        <circle cx="1339.6" cy="630" r=".3" fill="#11142A" />
        <circle cx="1350.1" cy="630" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M1339.6 634.4c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c.3 1 .9 1.6 1.6 1.6zm10.5 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.6 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M1351.3 632.5c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1l-1-1.3zm-12.4.7c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c.1-.7.7-1.7 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M1344 631.3s0 1 .6 1 .6-1 .6-1"
        />
        <path fill="none" d="M1292.5 598.5h108.2v126.3h-108.2V598.5z" />
      </g>
      <g id="q11">
        <ellipse
          cx="326.8"
          cy="735"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="326.5" cy="708.3" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M332.2 709.5s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M332.2 709.5s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M338.3 725.8h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6l-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M315.7 726.1s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M315.7 726.1s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M316.6 725.8H315l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6l.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M322 723.8v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M322 723.8v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M322.4 731.8h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6.3.6 1 1.6 1.9 1.6 1 0 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M331.9 724.2v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M331.9 724.2v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M331.6 732.1h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6s-1 1.6-1.9 1.6c-1 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m333.2 707.6-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M332.9 719.7v1.6l-11.8.3V720l11.8-.3z"
        />
        <path d="M326.8 717.2c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6c0-.4 0-1-.6-1zm0-2.9c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6c0-.7 0-1-.6-1zM345.3 693.6c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6s2.2-.6 2.2-1.6-.1-1.6-1.3-1.9z" />
        <path d="M317.6 697.1s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5 2.9 0 8 2.9 9.5 5.1 1.6 2.5 1.9 9.2 1.6 9.5s-2.2-8-5.7-8.3c-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M317.6 697.1s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M317.6 697.1c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3a25 25 0 0 0-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M335.1 703.8s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-1.9 3.1-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M312.5 697.8s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-.9-2.7-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m331.6 698.4 1 .6m-12.2 0 1-.3m3.8 8 1 .6.6-1"
        />
        <circle cx="321.1" cy="701.6" r="1.6" fill="#FFF" />
        <circle cx="331.3" cy="701.6" r="1.6" fill="#FFF" />
        <circle cx="321.1" cy="701.6" r=".3" fill="#11142A" />
        <circle cx="331.6" cy="701.6" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M321.1 706c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.9 1.6 1.6 1.6zm10.5 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.6 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M332.9 704.1c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1-.4-.6-.4-1.3-1-1.3zm-12.5.7c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c.1-.4.7-1.7 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M325.5 702.8s0 1 .6 1l.6-1"
        />
        <path fill="none" d="M274 670.1h108.2v126.3H274V670.1z" />
      </g>
      <g id="q6">
        <ellipse
          cx="443.9"
          cy="635.1"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="443.6" cy="608.3" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M449.3 609.6s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M449.3 609.6s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M455.7 625.8h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6l-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M433.1 625.8s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M433.1 625.8s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M433.7 625.8h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6c.8.1.1-1.5.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M439.1 623.9v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M439.1 623.9v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M439.8 631.9h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6c1 0 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M449.3 624.3v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M449.3 624.3v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M448.7 631.9h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6-1 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m450.6 607.7-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M450.3 619.8v1.6l-12.1.3v-1.6l12.1-.3z"
        />
        <path d="M444.2 617.3c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6-.6-1zm0-3.2c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6-.6-1zM462.7 593.7c-1.9-.3-2.5 1.6-2.5 1.9 0 .3.3 1.6 1.6 1.6 1 0 2.2-.6 2.2-1.6s-.4-1.6-1.3-1.9z" />
        <path d="M434.7 597.2s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5 2.9 0 8 2.9 9.5 5.1 1.6 2.5 1.9 9.2 1.6 9.5s-2.2-8-5.7-8.3c-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M434.7 597.2s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M435 597.2c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.1-.6-8.2.1-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M452.5 603.9s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-1.9 3-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M429.9 597.8s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-1.2-2.2-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m448.7 598.5 1 .6m-12.2-.3 1-.3m4.1 8.3 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="438.2" cy="601.7" r="1.6" fill="#FFF" />
        <circle cx="448.7" cy="601.7" r="1.6" fill="#FFF" />
        <circle cx="438.5" cy="601.3" r=".3" fill="#11142A" />
        <circle cx="448.7" cy="601.3" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M438.5 606.1c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.6 1.6 1.6 1.6zm10.2 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6c.3 1 .9 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M449.9 604.2c-1-.3-1.6 1-1.3 1.3.3.3.3 1 1 1s1.3-.3 1.3-1c-.3-1-.3-1.3-1-1.3zm-12 .3c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c-.3-.6.3-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M442.6 602.9s0 1 .6 1l.6-1"
        />
        <path fill="none" d="M391.1 569.9h108.2v126.3H391.1V569.9z" />
      </g>
      <g id="q17">
        <ellipse
          cx="145.1"
          cy="594.7"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="144.8" cy="567.9" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M150.5 569.2s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M150.5 569.2s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M156.9 585.4h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6c-.7.1-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M134 585.8s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M134 585.4s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M135 585.4h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6v-1.5h.1z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M140.4 583.5v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M140.4 583.5v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M141 591.5h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M150.5 583.9v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M150.5 583.9v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M149.9 591.8h1.3s.3 1.6 1 1.9 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6s-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m151.5 567.3-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M151.5 579.4v1.6l-12.1.3v-1.6l12.1-.3z"
        />
        <path d="M145.1 576.9c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6c.1-.4.1-1-.6-1zm0-2.9c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6c.1-.4.1-1-.6-1zM163.9 553.3c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6s2.2-.6 2.2-1.6-.3-1.6-1.3-1.9z" />
        <path d="M135.9 556.8s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5s8 2.9 9.5 5.1c1.6 2.5 1.9 9.2 1.6 9.5s-2.2-8-5.7-8.3c-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M135.9 556.8s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M135.9 556.8c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.1-.2-8.2.1-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M153.7 563.5s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-1.9 3.3-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M130.8 557.4s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-1.2-2.2-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m149.9 558.1 1 .6m-12.1 0 1-.3m3.7 8 1 .6.6-1"
        />
        <circle cx="139.4" cy="561.3" r="1.6" fill="#FFF" />
        <circle cx="149.9" cy="561.3" r="1.6" fill="#FFF" />
        <circle cx="139.4" cy="561.3" r=".3" fill="#11142A" />
        <circle cx="149.9" cy="561.3" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M139.4 565.7c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6 1 1.6 1.6 1.6zm10.5 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.7 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M151.2 563.8c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1s1.3-.3 1.3-1c-.4-.7-.4-1.3-1-1.3zm-12.4.6c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c0-.3.7-1.6 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M143.9 562.5s0 1 .6 1l.6-1"
        />
        <path fill="none" d="M92.3 529.8h108.2v126.3H92.3V529.8z" />
      </g>
      <g id="q3">
        <ellipse
          cx="610"
          cy="541.2"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="609.7" cy="514.5" r="26.1" fill="#BEFCDF" />
        <path fill="none" d="M557.2 476h108.2v126.3H557.2V476z" />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#4E50FF"
            strokeWidth="1.6"
            d="M604.3 529.4v8.3"
          />
          <path
            fill="none"
            stroke="#1A49C3"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M604.3 529.4v8"
          />
          <path
            fill="#092860"
            stroke="#092860"
            strokeWidth=".3"
            d="M604.9 537.7h-1.3s-.3 1.6-1 1.9c-.6.3-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6.3.6 1 1.6 1.9 1.6 1 0 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <path
          fill="none"
          stroke="#4E50FF"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M614.8 515.1s8 3.2 7.3 16.5"
        />
        <path
          fill="none"
          stroke="#1A49C3"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M614.8 515.1s8 3.2 7.3 16.5"
        />
        <path
          fill="#F2D1DE"
          d="M621.1 531.7h1.6l.3 1.9-.6-1s0 1.6-.3 1.3l-.3-1.3s0 1-.6.6c-.7.1-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#4E50FF"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M597.9 531s-.6-12.1 6-14.6"
        />
        <path
          fill="none"
          stroke="#1A49C3"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M597.9 531s-.6-12.1 6-14.6"
        />
        <path
          fill="#F2D1DE"
          d="M598.9 531h-1.6l-.3 1.9.6-1s0 1.6.3 1.3l.3-1.3s0 1 .6.6l.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#4E50FF"
            strokeWidth="1.6"
            d="M614.8 529.8v8.3"
          />
          <path
            fill="none"
            stroke="#1A49C3"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M614.8 529.8v8"
          />
          <path
            fill="#092860"
            stroke="#092860"
            strokeWidth=".3"
            d="M614.1 537.7h1.3s.3 1.6 1 1.9c.7.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6-1 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path fill="#4E50FF" d="m616 513.2-.3 16.9h-12.1v-13.7" />
        <path
          fill="#092860"
          stroke="#092860"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M615.7 525.3v1.6l-12.4.6v-1.9l12.4-.3z"
        />
        <path d="M609.4 522.4c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6c0-.3 0-.6-.6-1zm0-2.8c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6c0-.7 0-.7-.6-1z" />
        <path
          fill="#4E50FF"
          d="M599.8 502.1s.6-12.1 5.7-15c5.1-2.9 7.6-3.5 10.5-3.5 3.8.5 7.3 2.5 9.9 5.4 1.6 2.5 2.2 9.5 1.6 9.9-.3.3-2.2-8.3-5.7-8.3s-4.1 3.2-4.1 4.1l-.6 6.4-17.3 1z"
        />
        <path
          fill="#092860"
          d="M599.8 502.1s.3-5.7 1.9-10.2l3.2 9.2s3.2-9.9 3.8-10.5c.6-.6 3.8 9.9 3.8 9.9l5.7-9.2-.6 9.2c.3.3-17.8 1.6-17.8 1.6zm28.3-3.2c-1.9-.3-2.9 1.6-2.5 1.9.3.3.3 1.6 1.6 1.9 1.3 0 2.2-.6 2.2-1.9s0-1.9-1.3-1.9z"
        />
        <path
          fill="#F2D1DE"
          d="M599.8 502.1c0 3.5-1.3 12.1 4.5 14.6 4.5 1.6 8.9 1 11.5-1.9 2.9-3.5 2.5-10.8 2.2-14 0-.6-6.4 0-8.9.3-2.6 0-8.7.3-9.3 1z"
        />
        <path
          fill="#F2D1DE"
          d="M617.9 509.1s.3-4.5 1.9-6.4l2.9-3.2s.3 2.9-1.6 6c-1.9 3.3-3.2 3.6-3.2 3.6z"
        />
        <path
          fill="#F2D1DE"
          d="M594.7 503s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-4.1l-.9-3.9z"
        />
        <circle cx="603.3" cy="506.9" r="1.6" fill="#FFF" />
        <circle cx="613.8" cy="506.9" r="1.6" fill="#FFF" />
        <circle cx="603.6" cy="506.9" r=".3" fill="#111428" />
        <circle cx="614.1" cy="506.9" r=".3" fill="#111428" />
        <path
          fill="#F2D1DE"
          d="M603.6 511.6c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.7 1.6 1.6 1.6zm10.5 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.7 1.6 1.6 1.6z"
        />
        <path
          fill="#FF335A"
          stroke="#FF335A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M615.4 509.4c-1-.3-1.6 1-1.3 1.3s.3 1 1 1c.6 0 1.3-.3 1.3-1-.4-.7-.4-1.3-1-1.3zm-12.4.6c.3 0 1 0 .6 1.3-.3 1.3-.6 1-1 1l-.6-1c-.3-.6.4-1.6 1-1.3z"
        />
        <path
          fill="none"
          stroke="#111428"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M608.1 508.1s0 1 .6 1l.6-1M613.5 503.7s.6-.6 1.3 0m-10.9.3s-.6-.6-1.3 0"
        />
      </g>
      <g id="q7">
        <ellipse
          cx="417.2"
          cy="487.1"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="416.9" cy="460.7" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M422.6 461.7s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M422.6 461.7s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M428.9 477.9h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6c-.7.1-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M406.4 478.2s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M406.4 478.2s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M407 478.2h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6c.7.1.1-1.5.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M412.4 476.3v7.6"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M412.4 476v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M413 483.9h-1.3s-.3 1.6-1 1.9c-.6 0-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6 1.6-1 1.6-1v1h1v-2.8z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M422.6 476.3v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M422.6 476.3v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M421.9 484.3h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6-1 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m423.9 460.1-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M423.5 471.9v1.9l-12.1.3v-1.9l12.1-.3z"
        />
        <path d="M417.5 469.3c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6-.6-1zm0-2.9c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6s1-.3 1-.6l-.6-1zM435.9 446.1c-1.9-.3-2.5 1.6-2.5 1.9.3.3.3 1.6 1.6 1.6s2.2-.6 2.2-1.6-.3-1.9-1.3-1.9zm-28 3.2s.6-11.8 5.7-14.6c5.1-2.9 7.3-3.5 10.2-3.5s8 2.9 9.5 5.1c1.6 2.5 1.9 9.2 1.6 9.5-.3.3-2.2-8-5.7-8.3-3.5 0-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M407.9 449.3s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.3-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M408.3 449.3c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.2-.3-8.2 0-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M425.8 456.3s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-2 2.6-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M403.2 449.9s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-1.2-2.3-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m421.9 450.5 1 .6m-12.1.1 1-.3m4.1 7.9 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="411.4" cy="453.7" r="1.6" fill="#FFF" />
        <circle cx="421.9" cy="453.7" r="1.6" fill="#FFF" />
        <circle cx="411.8" cy="453.7" r=".3" fill="#11142A" />
        <circle cx="421.9" cy="453.7" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M411.8 458.5c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.6 1.6 1.6 1.6zm10.1 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6 1 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M423.2 456.3c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1l-1-1.3zm-12.1.6c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c-.2-.7.4-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M415.9 455s0 1 .6 1l.6-1"
        />
        <path fill="none" d="M364.4 422.2h108.2v126.3H364.4V422.2z" />
      </g>
      <g id="q12">
        <ellipse
          cx="482.7"
          cy="387.2"
          fill="#C1D1D6"
          stroke="#C1D1D6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          opacity=".5"
          rx="9.2"
          ry=".3"
        />
        <circle cx="482.4" cy="360.8" r="26.1" fill="#BEFCDF" />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M488.1 361.8s7.6 3.2 7 16.2"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M488.1 361.8s7.6 3.2 7 16.2"
        />
        <path
          fill="#F8CEDE"
          d="M494.5 378h1.6l.3 1.9-.6-1-.3 1.3-.3-1.3s0 1-.6.6c-.7-.2-.1-1.5-.1-1.5z"
        />
        <path
          fill="none"
          stroke="#009488"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M471.9 378.3s-.6-11.8 6-14.3"
        />
        <path
          fill="none"
          stroke="#6CF7C6"
          strokeDasharray="3.5"
          strokeMiterlimit="31.8"
          strokeWidth="1.6"
          d="M471.9 378.3s-.6-11.8 6-14.3"
        />
        <path
          fill="#F8CEDE"
          d="M472.5 378.3h-1.6l-.3 1.9.6-1 .3 1.3.3-1.3s0 1 .6.6c.8-.2.1-1.5.1-1.5z"
        />
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M477.9 376.1v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M477.9 376.1v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M478.6 384h-1.3s-.3 1.6-1 1.9c-.6.3-1.3-.3-1.3-1l-.6-1.3c-.6 0-.6 1-.3 1.6s1 1.6 1.9 1.6c1 0 1.6-1 1.6-1v1h1V384z"
          />
        </g>
        <g strokeMiterlimit="31.8">
          <path
            fill="none"
            stroke="#009488"
            strokeWidth="1.6"
            d="M488.1 376.4v8"
          />
          <path
            fill="none"
            stroke="#6CF7C6"
            strokeDasharray="3.5"
            strokeWidth="1.6"
            d="M488.1 376.4v8"
          />
          <path
            fill="#002764"
            stroke="#002764"
            strokeWidth=".3"
            d="M487.5 384.4h1.3s.3 1.6 1 1.9c.6.3 1.3-.3 1.3-1l.6-1.3c.6 0 .6 1 .3 1.6-.3.6-1 1.6-1.9 1.6-1 0-1.6-1-1.6-1v1h-1v-2.8z"
          />
        </g>
        <path d="m489.4 360.2-.3 16.5h-11.8v-13.4" />
        <path
          fill="#002764"
          stroke="#002764"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M489.1 371.9v1.9l-12.1.3v-1.9l12.1-.3z"
        />
        <path d="M482.7 369.4c-.6-.3-1 .6-1 1 0 .3 0 .6.6.6l1-.6c.1-.7.1-1-.6-1zm.3-2.9c-.6-.3-1 .6-1 1s0 .6.6.6l1-.6-.6-1zM501.5 345.9c-1.9-.3-2.5 1.6-2.5 1.9s.3 1.6 1.6 1.6c1 0 2.2-.6 2.2-1.6s-.4-1.6-1.3-1.9z" />
        <path d="M473.5 349.4s.6-11.8 5.7-14.6c4.8-2.9 7.3-3.5 10.2-3.5 2.9 0 8 2.9 9.5 5.1s1.9 9.2 1.6 9.5c-.3.3-2.2-8-5.7-8.3s-3.8 3.2-4.1 4.1l-.6 6-16.6 1.7z" />
        <path d="M473.5 349.4s.3-5.7 1.9-9.9l3.2 8.9s3.2-9.5 3.8-10.2c.6-.6 3.8 9.9 3.8 9.9l5.7-8.9-.6 9.2-17.8 1z" />
        <path
          fill="#F8CEDE"
          d="M473.5 349.4c0 3.5-1.3 11.8 4.1 14.6 4.5 1.6 8.6 1 11.1-1.9 2.9-3.5 2.5-10.5 2.2-13.7 0-.6-6.4 0-8.9.3-2.1-.3-8.2 0-8.5.7z"
        />
        <path
          fill="#F8CEDE"
          d="M491.3 356.4s.3-4.1 1.9-6.4c1.6-2.2 2.5-2.9 2.9-2.9 0 0 .3 2.9-1.6 6-1.9 2.6-3.2 3.3-3.2 3.3z"
        />
        <path
          fill="#F8CEDE"
          d="M468.4 350s1.9.6 3.5 3.5 1.6 2.5 1.9 4.5c0 0-3.2-1.6-4.5-3.8-.9-2.6-.9-4.2-.9-4.2z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="m487.5 350.6 1 .6m-12.1.1 1-.3m3.7 7.9 1 .6c.6 0 .6-1 .6-1"
        />
        <circle cx="477" cy="353.8" r="1.6" fill="#FFF" />
        <circle cx="487.5" cy="353.8" r="1.6" fill="#FFF" />
        <circle cx="477" cy="353.8" r=".3" fill="#11142A" />
        <circle cx="487.5" cy="353.8" r=".3" fill="#11142A" />
        <path
          fill="#F8CEDE"
          d="M477.3 358.6c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.7 1.6 1.6 1.6zm10.2 0c1 0 1.6-.6 1.6-1.6s-.6-1.6-1.6-1.6-1.6.6-1.6 1.6.6 1.6 1.6 1.6z"
        />
        <path
          fill="#F05"
          stroke="#F05"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".3"
          d="M488.8 356.4c-1-.3-1.6 1-1.3 1.3 0 .3.3 1 1 1 .6 0 1.3-.3 1.3-1s-.4-1-1-1.3zm-12.1.6c.3 0 1 0 .6 1.3-.3 1-.6 1-1 1l-.6-1c-.3-.7.3-1.3 1-1.3z"
        />
        <path
          fill="none"
          stroke="#11142A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="31.8"
          strokeWidth=".6"
          d="M481.4 355.1s0 1 .6 1l.6-1"
        />
        <path fill="none" d="M429.9 322.3h108.2v126.3H429.9V322.3z" />
      </g>
      <circle
        cx="609"
        cy="511.9"
        r=".6"
        fill="none"
        stroke="#111428"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="31.8"
        strokeWidth=".6"
      />
      <g fill="none" stroke="#009488" strokeMiterlimit="31.8" strokeWidth="3.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m578.5 212.2 9.9-16.9 8.9 16.5m-18.8 24.9 9.9-16.9 8.9 16.5m-18.8 23.3 9.9-16.9 8.9 16.5"
        />
        <path d="M588.4 195.4v96.7" />
      </g>
      <g fill="none" stroke="#009488" strokeMiterlimit="31.8" strokeWidth="3.2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m1509.8 448.3 12.4-15 11.8 15m-25.8 30.9 13.4-19.1 14 16.5"
        />
        <path d="M1522.2,433.4l-0.3,73.5" />
      </g>
      <path
        fill="none"
        stroke="#843A36"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="31.8"
        strokeWidth="1.9"
        d="M442 198.9v26.7m-12.7-13.4H456m-19.4-5.7 11.1 11.8m0-12.1L436.6 218"
      />
      <g fill="none" stroke="#009488" strokeMiterlimit="31.8" strokeWidth="3.2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m1557.8 474.1 10.2-14.6 8.9 14.3m-19.1 21.3 10.2-14.3 8.9 14m-19.1 20.3 10.2-14.6 8.9 14.3"
        />
        <path d="M1568 459.4v83.7" />
      </g>
      <g fill="none" stroke="#009488" strokeMiterlimit="31.8" strokeWidth="3.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m161.4 239.9 9.9-16.9 9.2 16.5m-19.1 24.9 9.9-16.9 9.2 16.5m-19.1 23.6 9.9-16.9 9.2 16.2"
        />
        <path d="M171.2 223v97" />
      </g>
      <g fill="none" stroke="#009488" strokeMiterlimit="31.8" strokeWidth="3.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m293.1 329 12.1-17.5L317 329m-25.8 35.6 13.7-22 14 19.1"
        />
        <path d="M305.2,311.5l-0.3,85.3" />
      </g>
      <path fill="#7BECBF" d="M311.5 152.1h1.9v12.7h-1.9v-12.7z" />
      <path
        fill="#A0EFCD"
        d="M316.3 170.5v36.3h-18.5l-1.6-34 9.9-15.6 2.2-1 8 14.3z"
      />
      <path fill="#8ADDB3" d="m284.8 171.8-1 32.8 14 2.5 1.3-38.8-14.3 3.5z" />
      <path fill="#1A49C3" d="M306.1 191.5h7.3v15.3h-7.3v-15.3z" />
      <path fill="#FDFDFD" d="M292.8 180.7v12.7h-4.1v-12.7h4.1z" />
      <path
        fill="#1A49C3"
        d="m308.4 156.2 10.8 18.1-1.3 1.3-10.2-17.2-9.2 18.8-17.2-1.2 5.1-21.6 22 1.8z"
      />
      <path
        fill="#F2D1DE"
        d="m265.1 256.8-1.3 62.7-33.4.6-6.7-57.9 22.3-29 19.1 23.6z"
      />
      <path fill="#FF335A" d="M243.5 297.8h12.1v22h-12.1v-22z" />
      <path
        fill="#E5C6D2"
        d="m202.7 262.2 4.8 52.2 22.9 5.7-4.8-62.4-22.9 4.5z"
      />
      <path
        fill="#FDFDFD"
        d="M212.3 283.8h5.4v-12.4l-6-.6.6 13zm.3 22 7.6 1.3v-13.4l-8.3-.6.7 12.7z"
      />
      <path
        fill="#FF335A"
        d="m268 258.7-1 1.3-21.3-23.5-19.4 29.5-25.8-2.5 11.8-29.9 33.7-.3 19.7 22.9 2.3 2.5z"
      />
      <path
        fill="#ACDBD5"
        d="M310.3 248.8v37.9l27.7 1.6 2.5-38.2-14.3-18.1-15.9 16.8z"
      />
      <path
        fill="#97D0C9"
        d="m367.5 248.8 3.5 4.5V280l-33.1 8.3v-47.4l29.6 7.9z"
      />
      <path
        fill="#1A49C3"
        d="m306.5 251.7 1.3 1.3 18.8-18.5 14.6 22 33.7-3.5-18.8-22.9-29.9 1.9-17.8 17.5-1.9 2.2z"
      />
      <path
        fill="#FDFDFD"
        d="M351.3 263.1v9.9l15.3-3.2v-9.2l-15.3 2.5zm-33.1-9.2v7.3h7l.6-7.3h-7.6z"
      />
      <path
        fill="#4E50FF"
        d="M315.4 287v-13.4s0-5.4 5.7-4.8c4.1.3 4.5 3.8 4.5 5.1.3 1-.3 13.7-.3 13.7l-9.9-.6z"
      />
      <path fill="#97D0C9" d="M347.2 235.1H344v-8l3.8-.6-.6 8.6z" />
      <path
        fill="#ACDBD5"
        d="M754.8 293v37.9l27.7 1.6 2.2-38.5-14.4-17.8-15.5 16.8z"
      />
      <path
        fill="#97D0C9"
        d="m811.7 293 3.5 4.5v26.4l-32.8 8.6v-47.4l29.3 7.9z"
      />
      <path
        fill="#1A49C3"
        d="m750.6 295.9 1.3 1.3 18.8-18.5 14.6 22 33.7-3.5-18.7-22.9-29.9 1.9-17.8 17.5-2 2.2z"
      />
      <path
        fill="#FDFDFD"
        d="M795.5 307v10.2l15.3-3.2v-9.2l-15.3 2.2zm-32.8-8.9v7.3h6.7l1-7.3h-7.7z"
      />
      <path
        fill="#4E50FF"
        d="M759.5 330.9v-13.4s0-5.4 5.7-4.8c4.1.3 4.5 3.8 4.5 5.1.3 1-.3 13.7-.3 13.7l-9.9-.6z"
      />
      <path fill="#97D0C9" d="M791.3 279.4h-3.2v-8l3.8-.6-.6 8.6z" />
      <g fill="none" stroke="#009488" strokeMiterlimit="31.8" strokeWidth="3.2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m1039.2 678.7 12.1-15 11.8 15m-25.8 30.8 13.7-19.1 14 16.5"
        />
        <path d="M1051.3,663.7l-0.3,73.5" />
      </g>
      <g fill="none" stroke="#009488" strokeMiterlimit="31.8" strokeWidth="3.2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m1087.3 704.4 9.9-14.3 9.2 14m-19.1 21.7 9.9-14.6 9.2 14.3m-19.1 20 9.9-14.3 9.2 14"
        />
        <path d="M1097.1 690.1v83.4" />
      </g>
    </svg>
  );
};
