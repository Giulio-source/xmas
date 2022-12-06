import { useEffect, useState } from "react";

export const Villaggio = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

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
      viewBox="0 0 595.28 297.64"
      height="100%"
      width="100%"
      preserveAspectRatio={`${isMobile ? "xMidYMin slice" : "xMidYMid meet"}`}
    >
      <path fill="#befcdf" d="M0 0h595.28v297.64H0V0Z" />
      <g
        id="righe"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.13"
      >
        <g id="q3-q7">
          <polyline points="211.94 186.95 197.77 195.15 146.82 165.81" />
          <polyline points="211.94 186.95 197.77 195.15 146.82 165.81" />
          <polyline points="211.94 186.95 197.77 195.15 146.82 165.81" />
        </g>
        <g id="q12-q18">
          <polyline points="175.39 131.83 300.47 204.06 286.18 212.26 329.14 237.11" />
          <polyline points="175.39 131.83 300.47 204.06 286.18 212.26 329.14 237.11" />
          <polyline points="175.39 131.83 300.47 204.06 286.18 212.26 329.14 237.11" />
        </g>
        <g id="q11-q18">
          <polyline points="119.14 255.78 172.13 286.4 267.62 231.28 309.34 255.36 333.77 241.18" />
          <polyline points="119.14 255.78 172.13 286.4 267.62 231.28 309.34 255.36 333.77 241.18" />
          <polyline points="119.14 255.78 172.13 286.4 267.62 231.28 309.34 255.36 333.77 241.18" />
        </g>
        <g id="q11-q17">
          <polyline points="111.36 249.84 81.35 232.52 90.47 227.32 54.23 206.43" />
          <polyline points="111.36 249.84 81.35 232.52 90.47 227.32 54.23 206.43" />
          <polyline points="111.36 249.84 81.35 232.52 90.47 227.32 54.23 206.43" />
        </g>
        <g id="q13-q18">
          <polyline points="382.24 182.46 403.27 194.58 332.85 235.2" />
          <polyline points="382.24 182.46 403.27 194.58 332.85 235.2" />
          <polyline points="382.24 182.46 403.27 194.58 332.85 235.2" />
        </g>
        <g id="q13-q19">
          <polyline points="382.24 182.46 422.05 205.4 431.06 200.24 475.25 225.76" />
          <polyline points="382.24 182.46 422.05 205.4 431.06 200.24 475.25 225.76" />
          <polyline points="382.24 182.46 422.05 205.4 431.06 200.24 475.25 225.76" />
        </g>
        <g id="q7-q13">
          <polyline points="151.88 165.7 235.45 213.96 267.06 195.71 310.26 220.71 378.74 181.22" />
          <polyline points="151.88 165.7 235.45 213.96 267.06 195.71 310.26 220.71 378.74 181.22" />
          <polyline points="151.88 165.7 235.45 213.96 267.06 195.71 310.26 220.71 378.74 181.22" />
        </g>
        <g id="q7-q12">
          <polyline points="151.88 161.17 188.75 139.93 173.9 131.37" />
          <polyline points="151.88 161.17 188.75 139.93 173.9 131.37" />
          <polyline points="151.88 161.17 188.75 139.93 173.9 131.37" />
        </g>
        <g id="q6-q12">
          <polyline points="153.33 215.62 110.37 190.77 127.13 181.11 105.07 168.39 171 130.38" />
          <polyline points="153.33 215.62 110.37 190.77 127.13 181.11 105.07 168.39 171 130.38" />
          <polyline points="153.33 215.62 110.37 190.77 127.13 181.11 105.07 168.39 171 130.38" />
        </g>
        <g id="q6-q11">
          <polyline points="153.33 220.14 131.62 232.73 137.49 236.09 113.62 249.84" />
          <polyline points="153.33 220.14 131.62 232.73 137.49 236.09 113.62 249.84" />
          <polyline points="153.33 220.14 131.62 232.73 137.49 236.09 113.62 249.84" />
        </g>
        <g id="q3-q6">
          <polyline points="211.94 187.41 190.8 199.67 188.64 198.44 157.39 216.54" />
          <polyline points="211.94 187.41 190.8 199.67 188.64 198.44 157.39 216.54" />
          <polyline points="211.94 187.41 190.8 199.67 188.64 198.44 157.39 216.54" />
        </g>
        <g id="q5-q10">
          <polyline points="411.58 144.31 428.23 134.77 471.12 159.51" />
          <polyline points="411.58 144.31 428.23 134.77 471.12 159.51" />
          <polyline points="411.58 144.31 428.23 134.77 471.12 159.51" />
        </g>
        <g id="q2-q5">
          <polyline points="347.95 119.67 372.13 133.63 377.85 130.24 403.84 145.23" />
          <polyline points="347.95 119.67 372.13 133.63 377.85 130.24 403.84 145.23" />
          <polyline points="347.95 119.67 372.13 133.63 377.85 130.24 403.84 145.23" />
        </g>
        <g id="q9-q16">
          <polyline points="457.36 55.68 501.7 81.21 489.89 88.06 534.43 113.84" />
          <polyline points="457.36 55.68 501.7 81.21 489.89 88.06 534.43 113.84" />
          <polyline points="457.36 55.68 501.7 81.21 489.89 88.06 534.43 113.84" />
        </g>
        <g id="q9-q15">
          <polyline points="457.36 50.63 483.14 35.78 500.35 45.68 537.12 24.39" />
          <polyline points="457.36 50.63 483.14 35.78 500.35 45.68 537.12 24.39" />
          <polyline points="457.36 50.63 483.14 35.78 500.35 45.68 537.12 24.39" />
        </g>
        <g id="q4-q9">
          <polyline points="407.55 84.14 427.35 72.79 423.74 70.74 450.5 55.12" />
          <polyline points="407.55 84.14 427.35 72.79 423.74 70.74 450.5 55.12" />
          <polyline points="407.55 84.14 427.35 72.79 423.74 70.74 450.5 55.12" />
        </g>
        <g id="q8-q15">
          <polyline points="359.19 50.63 388.32 33.76 454.57 71.98 536.34 24.75" />
          <polyline points="359.19 50.63 388.32 33.76 454.57 71.98 536.34 24.75" />
          <polyline points="359.19 50.63 388.32 33.76 454.57 71.98 536.34 24.75" />
        </g>
        <g id="q8-q14">
          <polyline points="351.41 50.63 329.38 37.9 317.44 44.76 281.23 23.86" />
          <polyline points="351.41 50.63 329.38 37.9 317.44 44.76 281.23 23.86" />
          <polyline points="351.41 50.63 329.38 37.9 317.44 44.76 281.23 23.86" />
        </g>
        <g id="q4-q8">
          <polyline points="399.77 84.14 382.13 74.03 385.17 72.33 356.47 55.68" />
          <polyline points="399.77 84.14 382.13 74.03 385.17 72.33 356.47 55.68" />
          <polyline points="399.77 84.14 382.13 74.03 385.17 72.33 356.47 55.68" />
        </g>
        <g id="q2-q4">
          <polyline points="347.8 114.72 370.32 101.78 375.27 104.61 401.58 89.41" />
          <polyline points="347.8 114.72 370.32 101.78 375.27 104.61 401.58 89.41" />
          <polyline points="347.8 114.72 370.32 101.78 375.27 104.61 401.58 89.41" />
        </g>
        <g id="q1-q3">
          <polyline points="279.08 154.1 257.16 166.69 250.19 162.66 214.63 183.13" />
          <polyline points="279.08 154.1 257.16 166.69 250.19 162.66 214.63 183.13" />
          <polyline points="279.08 154.1 257.16 166.69 250.19 162.66 214.63 183.13" />
        </g>
        <g id="q1-q2">
          <polyline points="286.75 149.05 313.97 133.28 315.31 134.09 342.64 118.33" />
          <polyline points="286.75 149.05 313.97 133.28 315.31 134.09 342.64 118.33" />
          <polyline points="286.75 149.05 313.97 133.28 315.31 134.09 342.64 118.33" />
        </g>
        <g id="q5-q11">
          <polyline points="399.7 151.17 237.61 244.64 186.7 215.62 123.67 251.93" />
          <polyline points="399.7 151.17 237.61 244.64 186.7 215.62 123.67 251.93" />
          <polyline points="399.7 151.17 237.61 244.64 186.7 215.62 123.67 251.93" />
        </g>
        <g id="q12-q17">
          <polyline points="163.23 136.78 59.32 196.39" />
          <polyline points="163.23 136.78 59.32 196.39" />
          <polyline points="163.23 136.78 59.32 196.39" />
        </g>
        <g id="q10-q16">
          <polyline points="532.74 121.33 506.65 136.29 513.15 140.14 483.52 157.22" />
          <polyline points="532.74 121.33 506.65 136.29 513.15 140.14 483.52 157.22" />
          <polyline points="532.74 121.33 506.65 136.29 513.15 140.14 483.52 157.22" />
        </g>
        <g id="q10-q17">
          <polyline points="467.09 166.19 299.09 262.85 120.41 159.37 57.94 195.61" />
          <polyline points="467.09 166.19 299.09 262.85 120.41 159.37 57.94 195.61" />
          <polyline points="467.09 166.19 299.09 262.85 120.41 159.37 57.94 195.61" />
        </g>
      </g>
      <g id="q1">
        <circle cx="281.55" cy="149.37" r="9.23" fill="#befcdf" />
        <path fill="none" d="M262.99 135.76h38.25v44.65h-38.25v-44.65Z" />
        <ellipse
          cx="281.61"
          cy="159.18"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".11"
          opacity=".5"
          rx="3.21"
          ry=".1"
        />
        <g id="braccio_six_1">
          <path
            fill="none"
            stroke="#009289"
            stroke-miterlimit="10"
            stroke-width=".58"
            d="M283.68 149.86s2.84 1.18 2.61 5.97"
          />
          <path
            fill="none"
            stroke="#92f4ca"
            stroke-dasharray="0 1.29"
            stroke-miterlimit="10"
            stroke-width=".58"
            d="M283.68 149.85s2.84 1.18 2.61 5.97"
          />
          <path
            id="mano_six"
            fill="#f2d1de"
            d="M285.99 155.77h.56s.21.65.07.65-.2-.33-.2-.33.05.52-.09.51-.14-.48-.14-.48-.03.3-.2.28 0-.63 0-.63Z"
          />
        </g>
        <g id="braccio_dex_2">
          <path
            fill="none"
            stroke="#009289"
            stroke-miterlimit="10"
            stroke-width=".58"
            d="M275.45 147.1s1.56 4.02 4.18 3.85"
          />
          <path
            fill="none"
            stroke="#92f4ca"
            stroke-dasharray="0 1.29"
            stroke-miterlimit="10"
            stroke-width=".58"
            d="M275.45 147.12s1.56 4.02 4.18 3.85"
          />
          <path
            fill="#f2d1de"
            d="m275.73 147.02-.51.23s-.46-.51-.34-.56.32.21.32.21-.26-.45-.13-.5.33.38.33.38-.09-.28.07-.34.26.58.26.58Z"
          />
        </g>
        <g id="gamba_dex" stroke-miterlimit="10">
          <line
            x1="279.96"
            x2="279.96"
            y1="155.14"
            y2="158.01"
            fill="none"
            stroke="#009289"
            stroke-width=".58"
          />
          <line
            x1="279.95"
            x2="279.95"
            y1="155.12"
            y2="158"
            fill="none"
            stroke="#92f4ca"
            stroke-dasharray="0 1.29"
            stroke-width=".58"
          />
          <path
            id="Scarpa_dex"
            fill="#092860"
            stroke="#092860"
            stroke-width=".12"
            d="m280.15 158.01-.46-.03s-.07.61-.36.64-.43-.08-.51-.32-.06-.43-.2-.43c-.18 0-.18.31-.11.57s.32.57.71.57.61-.39.61-.39l.03.39h.29v-1Z"
          />
        </g>
        <g id="gamba_six" stroke-miterlimit="10">
          <line
            x1="283.66"
            x2="283.66"
            y1="155.24"
            y2="158.12"
            fill="none"
            stroke="#009289"
            stroke-width=".58"
          />
          <line
            x1="283.66"
            x2="283.66"
            y1="155.23"
            y2="158.1"
            fill="none"
            stroke="#92f4ca"
            stroke-dasharray="0 1.29"
            stroke-width=".58"
          />
          <path
            id="Scarpa_six"
            fill="#092860"
            stroke="#092860"
            stroke-width=".12"
            d="m283.47 158.08.46-.03s.09.54.36.64c.23.09.41-.08.47-.32.08-.3.06-.46.2-.46.18 0 .22.34.14.61s-.32.57-.71.57-.61-.39-.61-.39l-.03.39h-.29v-1Z"
          />
        </g>
        <g id="Corpo">
          <path
            fill="#009289"
            d="M284.1 149.22s-.12 6.33-.12 6c0-.01-4.28.16-4.35 0s-.04-4.46 0-4.93"
          />
          <polygon
            fill="#092860"
            stroke="#092860"
            stroke-miterlimit="10"
            stroke-width=".06"
            points="284 153.59 284 154.23 279.62 154.35 279.6 153.73 284 153.59"
          />
          <path
            fill="#092860"
            d="M281.76 152.63c-.26-.06-.39.24-.37.31s.05.27.21.27.34-.1.34-.27-.01-.27-.18-.31ZM281.77 151.58c-.26-.06-.39.24-.37.31s.05.27.21.27.34-.1.34-.27-.01-.27-.18-.31Z"
          />
        </g>
        <g id="cappello">
          <path
            fill="#092860"
            d="M288.54 144.08c-.66-.14-.98.55-.92.72s.12.62.53.63.84-.23.84-.63-.03-.64-.45-.72Z"
          />
          <path
            fill="#009289"
            d="M278.37 145.3s.25-4.32 2.06-5.39 2.7-1.29 3.76-1.29 2.86 1.03 3.49 1.91.74 3.38.63 3.53-.78-2.94-2.08-2.98-1.45 1.18-1.53 1.51-.2 2.26-.2 2.26l-6.13.44Z"
          />
          <path
            fill="#092860"
            d="M278.35 145.3s.12-2.08.74-3.6c0 0 1.01 2.81 1.14 3.28 0 0 1.19-3.55 1.36-3.75s1.38 3.57 1.38 3.57 1.97-3.22 2.08-3.29-.23 3.33-.23 3.32-6.48.47-6.48.47Z"
          />
        </g>
        <path
          fill="#f2d1de"
          d="M278.39 145.3c-.02 1.29-.42 4.31 1.55 5.3 1.59.59 3.17.4 4.11-.73 1.01-1.3.91-3.85.81-5.04-.04-.19-2.32.02-3.23.06s-3.13.19-3.25.41Z"
        />
        <g id="orecchio_dex">
          <path
            fill="#f2d1de"
            d="M284.81 147.82s.14-1.56.72-2.34.89-1.03 1.01-1.1c0 0 .16 1.07-.54 2.17s-1.19 1.27-1.19 1.27Z"
          />
          <line
            x1="284.89"
            x2="285.66"
            y1="147.31"
            y2="146.09"
            fill="none"
            stroke="#d390b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
          />
        </g>
        <g id="orecchio_dex-2">
          <path
            fill="#f2d1de"
            d="M276.52 145.56s.74.26 1.28 1.25.54.97.74 1.64c0 0-1.12-.55-1.59-1.45s-.43-1.45-.43-1.45Z"
          />
          <line
            x1="278.3"
            x2="277.22"
            y1="147.91"
            y2="146.9"
            fill="none"
            stroke="#d390b4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
          />
        </g>
        <g id="facce">
          <path
            fill="none"
            stroke="#111428"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M283.46 145.82s.27.11.34.22M279.4 145.99s.26-.12.4-.1"
          />
          <path
            id="Bocca"
            fill="none"
            stroke="#111428"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M281.17 148.8s.18.24.38.23.2-.31.2-.31"
          />
          <circle cx="279.63" cy="146.93" r=".53" fill="#fff" />
          <circle cx="283.41" cy="146.93" r=".53" fill="#fff" />
          <circle
            id="Occhio_Dex"
            cx="279.66"
            cy="146.92"
            r=".15"
            fill="#111428"
          />
          <circle
            id="Occhio_six"
            cx="283.44"
            cy="146.92"
            r=".15"
            fill="#111428"
          />
          <path
            fill="#f2d1de"
            d="M279.68 148.64c.29 0 .53-.24.53-.54s-.24-.54-.53-.54-.53.24-.53.54.24.54.53.54ZM283.44 148.64c.29 0 .53-.24.53-.54s-.24-.54-.53-.54-.53.24-.53.54.24.54.53.54Z"
          />
          <path
            id="Guancia"
            fill="#ff335a"
            stroke="#ff335a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".12"
            d="M283.9 147.9c-.37-.08-.55.33-.51.43s.07.37.29.38.47-.13.47-.38-.02-.38-.25-.43Z"
          />
          <path
            id="Guancia-2"
            fill="#ff335a"
            stroke="#ff335a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".12"
            d="M279.44 148.08c.14.02.35.06.28.45s-.24.3-.38.3-.24-.22-.26-.37.19-.4.36-.38Z"
          />
          <path
            id="Naso"
            fill="none"
            stroke="#111428"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M281.27 147.41s.03.33.18.33.18-.33.18-.39"
          />
        </g>
      </g>
      <g id="q2">
        <circle cx="343.56" cy="115.85" r="9.23" fill="#befcdf" />
        <path fill="none" d="M325.11 102.24h38.25v44.65h-38.25v-44.65Z" />
        <ellipse
          cx="343.45"
          cy="125.68"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo">
          <g id="braccio-six-basso">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M347.99 122.19c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M347.99 122.19c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M347.99 122.19c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M347.99 122.19c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M347.68 122.13h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M341.6 116.93s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M341.6 116.93s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M341.6 116.93s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M341.6 116.93s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M339.63 122.2h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-2"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M341.62 121.5v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M341.61 121.48v2.89"
            />
          </g>
          <g
            id="gamba_six-2"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M345.34 121.6v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M345.34 121.59v2.89"
            />
          </g>
          <g id="Corpo-2">
            <path
              fill="#009488"
              d="M345.78 115.54s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M345.68 119.94v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M343.43 118.98c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="faccia-e-cappello">
            <g id="cappello-2">
              <path
                fill="#002764"
                d="M350.25 110.37c-.66-.14-.99.55-.93.73s.12.63.53.63c.41 0 .85-.23.85-.63s-.03-.64-.45-.73Z"
              />
              <path
                fill="#009488"
                d="M340.02 111.6s.26-4.35 2.07-5.42c1.81-1.08 2.72-1.29 3.78-1.29s2.88 1.03 3.51 1.92c.63.89.75 3.4.63 3.56s-.79-2.96-2.09-3c-1.3-.04-1.46 1.19-1.54 1.52-.08.33-.19 2.27-.19 2.27l-6.16.45Z"
              />
              <path
                fill="#002764"
                d="M340 111.6s.12-2.09.74-3.63c0 0 1.02 2.83 1.15 3.3 0 0 1.2-3.57 1.37-3.77.17-.2 1.39 3.6 1.39 3.6s1.98-3.24 2.1-3.31c.12-.08-.24 3.35-.24 3.34s-6.52.47-6.52.47Z"
              />
            </g>
            <path
              fill="#f8cede"
              d="M340.04 111.6c-.02 1.29-.43 4.34 1.56 5.33 1.6.59 3.19.4 4.14-.73 1.02-1.31.92-3.87.82-5.07-.04-.19-2.33.02-3.26.06-.92.04-3.14.19-3.26.41Z"
            />
            <g id="orecchio_dex-3">
              <path
                fill="#f8cede"
                d="M346.5 114.14s.14-1.57.72-2.35c.28-.42.62-.79 1.02-1.11 0 0 .16 1.08-.55 2.19s-1.19 1.28-1.19 1.28Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="m346.58 113.62.78-1.22"
              />
            </g>
            <g id="orecchio_dex-4">
              <path
                fill="#f8cede"
                d="M338.16 111.86s.74.26 1.29 1.26.55.98.74 1.65c0 0-1.12-.55-1.6-1.46-.46-.89-.43-1.45-.43-1.45Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="m339.95 114.22-1.08-1.01"
              />
            </g>
            <g id="facce-2">
              <g
                id="sopracciglia-2"
                fill="none"
                stroke="#111428"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
              >
                <path d="M341.06 112.3s.15-.22.4-.05M344.88 112.14s.24-.15.41.04" />
              </g>
              <path
                id="bocca_2"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="M343.06 114.83c-.21.04-.28.11-.28.19 0 .06.09.12.26.16-.26.08-.28.16-.27.23.02.06.08.07.33.05"
              />
              <path
                fill="#f8cede"
                d="M341.34 114.96c.29 0 .53-.25.53-.55s-.24-.55-.53-.55-.53.25-.53.55c-.01.29.22.53.51.55h.02Zm3.78 0c.29 0 .53-.25.53-.55s-.24-.55-.53-.55-.53.25-.53.55c-.01.29.22.53.51.55h.02Z"
              />
              <path
                id="Guancia-3"
                fill="#f05"
                stroke="#f05"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M345.59 114.21c-.37-.08-.55.33-.51.43s.07.38.29.38c.23 0 .47-.14.47-.38s-.02-.38-.25-.43Z"
              />
              <path
                id="Guancia-4"
                fill="#f05"
                stroke="#f05"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M341.1 114.39c.14.02.35.06.28.45-.07.41-.24.3-.38.3s-.24-.22-.26-.37c-.02-.15.19-.41.36-.38h0Z"
              />
              <path
                id="Naso-2"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="M342.94 113.72s.03.33.18.33.18-.33.18-.39"
              />
              <path
                id="occhio-dex-2"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="M340.97 113.38s.32-.35.72 0"
              />
              <path
                id="occhio-six-2"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="M344.73 113.4s.32-.35.72 0"
              />
            </g>
          </g>
        </g>
        <path
          id="Scarpa_dex-2"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m341.82 124.39-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-2"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m345.15 124.46.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39h-.29v-1.02Z"
        />
        <path
          id="cuore2"
          fill="#f05"
          d="m351.57 114.49.05-.08c.08-.11.19-.18.32-.19.16-.02.29.04.4.15.08.09.12.19.12.32 0 .15-.05.28-.13.41-.06.1-.14.19-.23.26-.18.16-.36.31-.55.45l-.46-.39c-.09-.08-.18-.16-.25-.26-.08-.11-.14-.23-.16-.36-.02-.12-.01-.25.05-.36.08-.14.21-.22.36-.23.16-.01.28.05.39.16.05.04.07.07.09.11Z"
        />
        <path
          id="cuore1"
          fill="#f05"
          d="m336.92 109.41.05-.08c.08-.11.19-.18.32-.19.16-.02.29.04.4.15.08.09.12.19.12.32 0 .15-.05.28-.13.41-.06.1-.14.19-.23.26-.18.16-.36.31-.55.45l-.46-.39c-.09-.08-.18-.16-.25-.26-.08-.11-.14-.23-.16-.36-.02-.12-.01-.25.05-.36.08-.14.21-.22.36-.23.16-.01.28.05.39.16.05.03.07.07.09.11Z"
        />
      </g>
      <g id="q4">
        <circle cx="403.38" cy="84.46" r="9.23" fill="#befcdf" />
        <path fill="none" d="M384.82 70.85h38.25v44.65h-38.25V70.85Z" />
        <g id="elfo-intero">
          <g id="gamba_dex-3" stroke-miterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              stroke-width=".57"
              d="M401.1 90.27v2.81"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.21"
              stroke-width=".55"
              d="M401.1 90.26v2.81"
            />
            <path
              id="Scarpa_dex-3"
              fill="#002764"
              stroke="#002764"
              stroke-width=".11"
              d="m401.3 93.09-.45-.03s-.07.59-.35.63-.42-.08-.5-.31c-.07-.23-.06-.42-.2-.42-.17 0-.18.3-.1.56.07.25.31.56.7.56s.59-.38.59-.38l.03.38h.29v-.99Z"
            />
          </g>
          <g id="braccio_six_1-2">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".57"
              d="M404.72 85.2s2.77 1.15 2.55 5.83"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.21"
              stroke-miterlimit="10"
              stroke-width=".55"
              d="M404.71 85.19s2.77 1.15 2.55 5.83"
            />
            <path
              id="mano_six-2"
              fill="#f8cede"
              d="M406.97 90.97h.55s.2.64.07.64-.2-.32-.2-.32.05.51-.09.5-.14-.47-.14-.47-.03.29-.19.27c-.16-.02 0-.62 0-.62Z"
            />
          </g>
          <g id="braccio_dex_1">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".57"
              d="M398.87 90.79s-.25-4.21 2.16-5.12"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.21"
              stroke-miterlimit="10"
              stroke-width=".55"
              d="M398.86 90.78s-.25-4.21 2.16-5.12"
            />
            <path
              fill="#f8cede"
              d="M399.14 90.76h-.55s-.2.64-.07.64.2-.32.2-.32-.05.51.09.5.14-.47.14-.47.03.29.19.27c.16-.02 0-.62 0-.62Z"
            />
          </g>
          <g id="gamba_six-3" stroke-miterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              stroke-width=".57"
              d="M404.73 90.38v2.81"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.21"
              stroke-width=".55"
              d="M404.72 90.36v2.81"
            />
            <path
              id="Scarpa_six-3"
              fill="#002764"
              stroke="#002764"
              stroke-width=".11"
              d="m404.54 93.16.45-.03s.09.53.35.63c.23.09.41-.07.46-.31.07-.3.06-.45.2-.45.17 0 .21.34.14.59-.07.25-.31.56-.7.56s-.59-.38-.59-.38l-.03.38h-.29v-.99Z"
            />
          </g>
          <g id="Corpo-3">
            <path
              fill="#009488"
              d="M405.15 84.49s-.12 6.18-.12 5.86c0-.01-4.19.15-4.25 0-.07-.15-.04-4.36 0-4.82"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M405.05 88.76v.63l-4.28.11-.02-.61 4.3-.14Z"
            />
            <path d="M402.87 87.82c-.26-.06-.38.23-.36.3.02.07.05.26.21.27.16 0 .33-.1.33-.27s-.01-.26-.18-.3Zm0-1.03c-.26-.06-.38.23-.36.3.02.07.05.26.21.27s.33-.1.33-.27-.01-.26-.18-.3Z" />
          </g>
          <g id="cappello-3">
            <path
              fill="#009488"
              d="M399.55 80.66s.25-4.23 2.01-5.27c1.76-1.04 2.64-1.26 3.68-1.26s2.8 1 3.41 1.87c.61.86.73 3.31.61 3.45s-.77-2.88-2.03-2.91c-1.26-.03-1.42 1.15-1.5 1.47-.07.33-.19 2.21-.19 2.21l-5.99.43Z"
            />
            <path
              fill="#002764"
              d="M399.53 80.66s.11-2.03.72-3.52c0 0 .99 2.75 1.12 3.21 0 0 1.16-3.47 1.33-3.66.17-.19 1.35 3.49 1.35 3.49s1.92-3.15 2.04-3.22c.11-.07-.23 3.25-.23 3.24s-6.33.46-6.33.46Zm9.96-1.2c-.65-.13-.96.54-.9.71s.12.61.52.62c.39 0 .82-.22.82-.62s-.03-.62-.44-.71Z"
            />
          </g>
          <path
            id="viso"
            fill="#f8cede"
            d="M399.57 80.66c-.02 1.26-.42 4.21 1.52 5.18 1.56.58 3.09.39 4.02-.71.99-1.27.89-3.76.79-4.92-.04-.19-2.27.02-3.16.06-.89.04-3.05.18-3.17.4Z"
          />
          <path
            id="sopracciglio-six-1"
            fill="none"
            stroke="#11142a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".17"
            d="M404.22 80.77s.15-.2.39 0"
          />
          <path
            id="sopracciglio-dex-1"
            fill="none"
            stroke="#11142a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".17"
            d="M401.03 80.83s-.22-.17-.39.03"
          />
          <g id="orecchio_dex-5">
            <path
              fill="#f8cede"
              d="M405.84 83.12s.14-1.53.7-2.28.87-1 .99-1.08c0 0 .15 1.04-.53 2.12s-1.16 1.24-1.16 1.24Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="m405.92 82.62.75-1.19"
            />
          </g>
          <g id="orecchio_dex-6">
            <path
              fill="#f8cede"
              d="M397.75 80.91s.72.25 1.25 1.22.53.95.72 1.6c0 0-1.09-.54-1.55-1.42-.45-.87-.42-1.41-.42-1.41Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="m399.48 83.2-1.05-.98"
            />
          </g>
          <g id="facce-3">
            <circle
              id="bianco-dex"
              cx="400.78"
              cy="82.26"
              r=".53"
              fill="#fff"
            />
            <circle
              id="bianco-six"
              cx="404.48"
              cy="82.26"
              r=".53"
              fill="#fff"
            />
            <circle
              id="occhio-dex"
              cx="400.81"
              cy="82.24"
              r=".14"
              fill="#11142a"
            />
            <circle
              id="occhio-six"
              cx="404.51"
              cy="82.24"
              r=".14"
              fill="#11142a"
            />
            <ellipse
              id="guancia-dex"
              cx="400.83"
              cy="83.39"
              fill="#f8cede"
              rx=".51"
              ry=".53"
            />
            <ellipse
              id="guancia-six"
              cx="404.51"
              cy="83.39"
              fill="#f8cede"
              rx=".51"
              ry=".53"
            />
            <path
              id="Guancia-5"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".11"
              d="M404.96 83.19c-.36-.08-.53.32-.5.42s.07.37.29.37c.22 0 .46-.13.46-.37s-.02-.37-.25-.42Z"
            />
            <path
              id="Guancia-6"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".11"
              d="M400.6 83.38c.14.02.34.06.27.44-.07.39-.23.29-.37.29s-.23-.21-.25-.36c-.02-.15.19-.39.35-.37h0Z"
            />
            <path
              id="Naso-3"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M402.39 82.72s.03.32.17.32.17-.32.17-.38"
            />
          </g>
          <path
            id="bocca"
            fill="none"
            stroke="#11142a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".17"
            d="M402.78 83.99h-.27"
          />
        </g>
      </g>
      <g id="q8">
        <circle
          cx="354.13"
          cy="50.73"
          r="9.23"
          fill="#befcdf"
          transform="rotate(-69.18 354.14953917 50.72529238)"
        />
        <path fill="none" d="M335.57 37.12h38.22v44.65h-38.22V37.12Z" />
        <ellipse
          cx="354.27"
          cy="60.8"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo-2">
          <g id="braccio-six-basso-2">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M358.82 57.31c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M358.82 57.31c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M358.82 57.31c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49M358.82 57.31c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M358.51 57.26h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso-2">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M352.42 52.06s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M352.42 52.06s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M352.42 52.06s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M352.42 52.06s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M350.46 57.33h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-4"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M352.44 56.63v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M352.43 56.61v2.89"
            />
          </g>
          <g
            id="gamba_six-4"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M356.17 56.73v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M356.16 56.71v2.89"
            />
          </g>
          <g id="Corpo-4">
            <path
              fill="#009488"
              d="M356.61 50.67s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M356.5 55.06v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M354.26 54.1c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="faccia_cliccabile">
            <g id="orecchio_dex-7">
              <path
                fill="#f8cede"
                d="M357.31 49.12s.14-1.56.72-2.33c.28-.41.62-.79 1.01-1.1 0 0 .16 1.07-.54 2.17-.7 1.1-1.18 1.27-1.18 1.27Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m357.39 48.61.77-1.21"
              />
            </g>
            <g id="orecchio_dex-8">
              <path
                fill="#f8cede"
                d="M349.04 46.86s.73.26 1.28 1.25c.54.99.54.97.73 1.64 0 0-1.11-.55-1.59-1.45-.47-.89-.43-1.44-.43-1.44Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m350.81 49.21-1.07-1"
              />
            </g>
            <g id="cappello-4">
              <path
                fill="#002764"
                d="M361.03 45.39c-.66-.13-.98.55-.92.72s.12.62.53.63.84-.23.84-.63c0-.41-.02-.64-.45-.72Z"
              />
              <path
                fill="#009488"
                d="M350.88 46.61s.26-4.31 2.05-5.38 2.7-1.28 3.75-1.28 2.86 1.03 3.48 1.91.74 3.38.62 3.53-.78-2.94-2.08-2.97-1.45 1.18-1.53 1.5c-.08.33-.19 2.26-.19 2.26l-6.12.44Z"
              />
              <path
                fill="#002764"
                d="M350.86 46.61s.12-2.08.73-3.6c0 0 1.01 2.8 1.14 3.28 0 0 1.19-3.54 1.36-3.74.17-.2 1.38 3.57 1.38 3.57s1.96-3.21 2.08-3.29-.23 3.32-.23 3.31-6.47.47-6.47.47Z"
              />
            </g>
            <path
              fill="#f8cede"
              d="M350.9 46.61c-.02 1.28-.43 4.3 1.55 5.29 1.59.59 3.16.4 4.1-.73 1.01-1.3.91-3.84.81-5.03-.04-.19-2.31.02-3.23.06s-3.12.19-3.24.41Z"
            />
            <g id="facce-4">
              <path
                fill="#f8cede"
                d="M352.19 49.94c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Zm3.75 0c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Z"
              />
              <path
                id="Naso-4"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M353.78 48.72s.03.33.17.33.17-.33.17-.38"
              />
              <path
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M351.82 48.37s.32-.35.72 0m3.01.01s.32-.35.72 0"
              />
              <path
                id="guancia"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M356.5 49.22c-.37-.08-.55.34-.52.44.03.1.07.38.3.38s.47-.14.47-.38-.02-.39-.25-.44h0Z"
              />
              <path
                id="guancia-2"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M351.95 49.4c.15.02.36.06.29.46-.07.41-.24.3-.39.3s-.24-.22-.26-.37c-.02-.16.2-.41.37-.39Z"
              />
              <path
                id="bocca-2"
                fill="none"
                stroke="#111428"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".23"
                d="M353.71 50.14s.18.24.39.23"
              />
              <circle cx="352.15" cy="48.24" r=".54" fill="#fff" />
              <circle cx="355.94" cy="48.24" r=".54" fill="#fff" />
              <circle
                id="occhio_dex"
                cx="351.92"
                cy="48.12"
                r=".15"
                fill="#111428"
              />
              <circle
                id="occhio_six"
                cx="355.71"
                cy="48.12"
                r=".15"
                fill="#111428"
              />
              <path
                id="palpebre"
                fill="#f8cede"
                d="M351.31 47.65h1.74v.4h-1.74v-.4Zm3.99 0h1.74v.4h-1.74v-.4Z"
              />
              <path
                id="sopracciglio_six"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M352.25 47.03s-.24-.24-.41.07"
              />
              <path
                id="sopracciglio_dex"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M355.74 47.34s.24-.23.41.07"
              />
            </g>
          </g>
        </g>
        <path
          id="Scarpa_dex-4"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m352.64 59.52-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-4"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m355.97 59.59.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39h-.29V59.6Z"
        />
      </g>
      <g id="q14">
        <circle cx="280.46" cy="19.34" r="9.23" fill="#befcdf" />
        <path fill="none" d="M261.9 5.73h38.25v44.65H261.9V5.73Z" />
        <ellipse
          id="ombra"
          cx="279.5"
          cy="29.26"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.97"
          ry=".21"
        />
        <g id="elfo-intero-2">
          <g id="gamba_dex-5" stroke-miterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              stroke-width=".61"
              d="M277.54 25.13v3"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-width=".59"
              d="M277.54 25.12v2.99"
            />
            <path
              id="Scarpa_dex-5"
              fill="#002764"
              stroke="#002764"
              stroke-width=".12"
              d="m277.75 28.13-.48-.03s-.07.63-.37.67-.45-.09-.53-.33c-.08-.24-.06-.44-.21-.44-.18 0-.19.32-.11.6.07.26.33.6.74.6s.63-.41.63-.41l.03.41h.3v-1.05Z"
            />
          </g>
          <g id="gamba_six-5" stroke-miterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              stroke-width=".61"
              d="M281.4 25.24v2.99"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-width=".59"
              d="M281.39 25.23v2.99"
            />
            <path
              id="Scarpa_six-5"
              fill="#002764"
              stroke="#002764"
              stroke-width=".12"
              d="m281.2 28.2.48-.03s.09.56.37.67c.24.09.43-.08.49-.33.08-.32.06-.48.21-.48.18 0 .22.36.15.63-.07.26-.33.6-.74.6s-.63-.41-.63-.41l-.03.41h-.3v-1.05Z"
            />
          </g>
          <g id="Corpo-5">
            <path
              fill="#009488"
              d="M281.85 18.97s-.13 6.58-.13 6.24c0-.01-4.46.16-4.52 0-.07-.16-.04-4.65 0-5.13"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M281.75 23.52v.67l-4.55.12-.02-.64 4.58-.15Z"
            />
            <path d="M279.42 22.52c-.27-.06-.41.25-.38.32.02.08.05.28.22.29.17 0 .35-.1.35-.29s-.01-.28-.19-.32Zm0-1.1c-.27-.06-.41.25-.38.32.02.08.05.28.22.29s.35-.1.35-.29-.01-.28-.19-.32Z" />
          </g>
          <g id="cappello-5">
            <path
              fill="#009488"
              d="M275.89 14.9s.27-4.5 2.14-5.61c1.87-1.11 2.82-1.34 3.92-1.34s2.98 1.07 3.63 1.99c.65.92.77 3.52.65 3.68s-.81-3.06-2.16-3.1c-1.34-.04-1.51 1.23-1.59 1.57-.08.35-.2 2.35-.2 2.35l-6.38.46Z"
            />
            <path
              fill="#002764"
              d="M275.87 14.9s.12-2.16.77-3.75c0 0 1.05 2.92 1.19 3.42 0 0 1.24-3.7 1.42-3.9.18-.21 1.44 3.72 1.44 3.72s2.05-3.35 2.17-3.43c.12-.08-.24 3.47-.24 3.45s-6.74.49-6.74.49Zm10.6-1.28c-.69-.14-1.02.57-.96.75s.13.65.55.66c.42 0 .88-.24.88-.66s-.03-.66-.47-.75Z"
            />
          </g>
          <path
            id="viso-2"
            fill="#f8cede"
            d="M275.91 14.9c-.02 1.34-.44 4.49 1.62 5.51 1.66.61 3.3.41 4.28-.76 1.05-1.36.95-4.01.85-5.24-.04-.2-2.41.02-3.37.06-.95.04-3.25.19-3.37.43Z"
          />
          <path
            id="sopracciglio-dex-2"
            fill="none"
            stroke="#111428"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M277.5 15.55s-.18.13-.41.04"
          />
          <path
            id="sopracciglio-six-1-2"
            fill="none"
            stroke="#11142a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M280.86 15.01s.16-.21.41 0"
          />
          <g id="orecchio_dex-9">
            <path
              fill="#f8cede"
              d="M282.59 17.52s.15-1.63.75-2.43.93-1.07 1.05-1.15c0 0 .16 1.11-.57 2.26s-1.23 1.32-1.23 1.32Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".18"
              d="m282.68 16.98.8-1.26"
            />
          </g>
          <g id="orecchio_dex-10">
            <path
              fill="#f8cede"
              d="M273.97 15.16s.77.27 1.33 1.3.57 1.01.77 1.71c0 0-1.16-.57-1.65-1.51-.48-.93-.44-1.5-.44-1.5Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".18"
              d="m275.82 17.6-1.12-1.05"
            />
          </g>
          <g id="facce-5">
            <circle
              id="bianco-dex-2"
              cx="277.2"
              cy="16.59"
              r=".56"
              fill="#fff"
            />
            <circle
              id="bianco-six-2"
              cx="281.14"
              cy="16.59"
              r=".56"
              fill="#fff"
            />
            <circle
              id="occhio-dex-2"
              cx="277.23"
              cy="16.58"
              r=".15"
              fill="#11142a"
            />
            <circle
              id="occhio-six-2"
              cx="281.17"
              cy="16.58"
              r=".15"
              fill="#11142a"
            />
            <ellipse
              id="guancia-dex-2"
              cx="277.25"
              cy="17.8"
              fill="#f8cede"
              rx=".55"
              ry=".57"
            />
            <ellipse
              id="guancia-six-2"
              cx="281.17"
              cy="17.8"
              fill="#f8cede"
              rx=".55"
              ry=".57"
            />
            <path
              id="Guancia-7"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M281.65 17.59c-.38-.09-.57.34-.53.45s.07.39.3.4c.24 0 .49-.14.49-.4s-.02-.4-.26-.45Z"
            />
            <path
              id="Guancia-8"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M277.01 17.79c.15.02.36.06.29.47-.07.42-.25.31-.4.31s-.25-.22-.27-.38c-.02-.16.2-.42.38-.4h0Z"
            />
            <path
              id="Naso-5"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".18"
              d="M278.91 17.09s.03.34.18.34.18-.34.18-.4"
            />
          </g>
          <path
            id="bocca-3"
            fill="none"
            stroke="#11142a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M279.33 18.44h-.29"
          />
          <g id="braccio-six-conserto">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".61"
              d="M277.73 22.7c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M277.73 22.7c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
            />
            <path
              id="mano_six-3"
              fill="#f8cede"
              d="m277.86 22.41-.16.57s-.71.02-.67-.11c.04-.13.38-.11.38-.11s-.54-.1-.48-.23c.05-.13.52 0 .52 0s-.29-.12-.22-.28c.05-.17.63.17.63.17Z"
            />
          </g>
          <g id="braccio-dex-conserto">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".61"
              d="M281.17 22.88c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M281.17 22.88c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
            />
            <path
              id="mano_six-4"
              fill="#f8cede"
              d="m281.04 22.59.16.57s.71.02.67-.11c-.04-.13-.38-.11-.38-.11s.54-.1.48-.23c-.05-.13-.52 0-.52 0s.29-.12.22-.28c-.06-.17-.63.17-.63.17Z"
            />
          </g>
        </g>
      </g>
      <g id="q9">
        <circle cx="453.12" cy="50.38" r="9.23" fill="#befcdf" />
        <path fill="none" d="M434.56 36.77h38.22v44.65h-38.22V36.77Z" />
        <ellipse
          id="ombra-2"
          cx="452.71"
          cy="60.93"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.97"
          ry=".21"
        />
        <g id="elfo-intero-3">
          <g id="gamba_dex-6" stroke-miterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              stroke-width=".61"
              d="M450.76 56.8v3"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-width=".59"
              d="M450.75 56.79v2.99"
            />
            <path
              id="Scarpa_dex-6"
              fill="#002764"
              stroke="#002764"
              stroke-width=".12"
              d="m450.96 59.8-.48-.03s-.07.63-.37.67-.45-.09-.53-.33c-.08-.24-.06-.44-.21-.44-.18 0-.19.32-.11.6.07.26.33.6.74.6s.63-.41.63-.41l.03.41h.3v-1.05Z"
            />
          </g>
          <g id="gamba_six-6" stroke-miterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              stroke-width=".61"
              d="M454.62 56.91v2.99"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-width=".59"
              d="M454.61 56.9v2.99"
            />
            <path
              id="Scarpa_six-6"
              fill="#002764"
              stroke="#002764"
              stroke-width=".12"
              d="m454.41 59.87.48-.03s.09.56.37.67c.24.09.43-.08.49-.33.08-.32.06-.48.21-.48.18 0 .22.36.15.63-.07.26-.33.6-.74.6s-.63-.41-.63-.41l-.03.41h-.3v-1.05Z"
            />
          </g>
          <g id="Corpo-6">
            <path
              fill="#009488"
              d="M455.07 50.64s-.13 6.58-.13 6.24c0-.01-4.46.16-4.52 0-.07-.16-.04-4.65 0-5.13"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M454.96 55.19v.67l-4.55.12-.02-.64 4.58-.15Z"
            />
            <path d="M452.64 54.19c-.27-.06-.41.25-.38.32.02.08.05.28.22.29.17 0 .35-.1.35-.29s-.01-.28-.19-.32Zm0-1.1c-.27-.06-.41.25-.38.32.02.08.05.28.22.29s.35-.1.35-.29-.01-.28-.19-.32Z" />
          </g>
          <g id="cappello-6">
            <path
              fill="#009488"
              d="M449.1 46.57s.27-4.5 2.14-5.61c1.87-1.11 2.82-1.34 3.92-1.34s2.98 1.07 3.63 1.99c.65.92.77 3.52.65 3.68s-.81-3.06-2.16-3.1c-1.34-.04-1.51 1.23-1.59 1.57-.08.35-.2 2.35-.2 2.35l-6.38.46Z"
            />
            <path
              fill="#002764"
              d="M449.08 46.57s.12-2.16.77-3.75c0 0 1.05 2.92 1.19 3.42 0 0 1.24-3.7 1.42-3.9.18-.21 1.44 3.72 1.44 3.72s2.05-3.35 2.17-3.43c.12-.08-.24 3.47-.24 3.45s-6.74.49-6.74.49Zm10.6-1.28c-.69-.14-1.02.57-.96.75s.13.65.55.66c.42 0 .88-.24.88-.66s-.03-.66-.47-.75Z"
            />
          </g>
          <path
            id="viso-3"
            fill="#f8cede"
            d="M449.12 46.57c-.02 1.34-.44 4.49 1.62 5.51 1.66.61 3.3.41 4.28-.76 1.05-1.36.95-4.01.85-5.24-.04-.2-2.41.02-3.37.06-.95.04-3.25.19-3.37.43Z"
          />
          <path
            id="sopracciglio-dex-2-2"
            fill="none"
            stroke="#111428"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M450.71 47.22s-.18.13-.41.04"
          />
          <path
            id="sopracciglio-six-1-3"
            fill="none"
            stroke="#11142a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M454.07 46.68s.16-.21.41 0"
          />
          <g id="orecchio_dex-11">
            <path
              fill="#f8cede"
              d="M455.8 49.19s.15-1.63.75-2.43.93-1.07 1.05-1.15c0 0 .16 1.11-.57 2.26s-1.23 1.32-1.23 1.32Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".18"
              d="m455.89 48.65.8-1.26"
            />
          </g>
          <g id="orecchio_dex-12">
            <path
              fill="#f8cede"
              d="M447.18 46.83s.77.27 1.33 1.3.57 1.01.77 1.71c0 0-1.16-.57-1.65-1.51-.48-.93-.44-1.5-.44-1.5Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".18"
              d="m449.03 49.27-1.12-1.05"
            />
          </g>
          <g id="facce-6">
            <circle
              id="bianco-dex-3"
              cx="450.42"
              cy="48.26"
              r=".56"
              fill="#fff"
            />
            <circle
              id="bianco-six-3"
              cx="454.35"
              cy="48.26"
              r=".56"
              fill="#fff"
            />
            <circle
              id="occhio-dex-3"
              cx="450.45"
              cy="48.25"
              r=".15"
              fill="#11142a"
            />
            <circle
              id="occhio-six-3"
              cx="454.38"
              cy="48.25"
              r=".15"
              fill="#11142a"
            />
            <ellipse
              id="guancia-dex-3"
              cx="450.46"
              cy="49.47"
              fill="#f8cede"
              rx=".55"
              ry=".57"
            />
            <ellipse
              id="guancia-six-3"
              cx="454.38"
              cy="49.47"
              fill="#f8cede"
              rx=".55"
              ry=".57"
            />
            <path
              id="Guancia-9"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M454.87 49.26c-.38-.09-.57.34-.53.45s.07.39.3.4c.24 0 .49-.14.49-.4s-.02-.4-.26-.45Z"
            />
            <path
              id="Guancia-10"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M450.22 49.45c.15.02.36.06.29.47-.07.42-.25.31-.4.31s-.25-.22-.27-.38c-.02-.16.2-.42.38-.4h0Z"
            />
            <path
              id="Naso-6"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".18"
              d="M452.12 48.76s.03.34.18.34.18-.34.18-.4"
            />
          </g>
          <path
            id="bocca-4"
            fill="none"
            stroke="#11142a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M452.54 50.1h-.29"
          />
          <g id="braccio-six-conserto-2">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".61"
              d="M450.95 54.37c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M450.95 54.37c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
            />
            <path
              id="mano_six-5"
              fill="#f8cede"
              d="m451.07 54.07-.16.57s-.71.02-.67-.11c.04-.13.38-.11.38-.11s-.54-.1-.48-.23c.05-.13.52 0 .52 0s-.29-.12-.22-.28c.05-.17.63.17.63.17Z"
            />
          </g>
          <g id="braccio-dex-conserto-2">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".61"
              d="M454.38 54.55c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M454.38 54.55c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
            />
            <path
              id="mano_six-6"
              fill="#f8cede"
              d="m454.25 54.26.16.57s.71.02.67-.11c-.04-.13-.38-.11-.38-.11s.54-.1.48-.23c-.05-.13-.52 0-.52 0s.29-.12.22-.28c-.06-.17-.63.17-.63.17Z"
            />
          </g>
        </g>
      </g>
      <g id="q15">
        <circle cx="537.01" cy="20.47" r="9.23" fill="#befcdf" />
        <path fill="none" d="M518.45 6.86h38.25v44.65h-38.25V6.86Z" />
        <g id="elfo-intero-4">
          <g id="gamba_dex-7" stroke-miterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              stroke-width=".61"
              d="M534.77 26.61v3"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-width=".59"
              d="M534.76 26.6v2.99"
            />
            <path
              id="Scarpa_dex-7"
              fill="#002764"
              stroke="#002764"
              stroke-width=".12"
              d="m534.97 29.61-.48-.03s-.07.63-.37.67-.45-.09-.53-.33c-.08-.24-.06-.44-.21-.44-.18 0-.19.32-.11.6.07.26.33.6.74.6s.63-.41.63-.41l.03.41h.3v-1.05Z"
            />
          </g>
          <g id="gamba_six-7" stroke-miterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              stroke-width=".61"
              d="M538.63 26.72v2.99"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-width=".59"
              d="M538.62 26.71v2.99"
            />
            <path
              id="Scarpa_six-7"
              fill="#002764"
              stroke="#002764"
              stroke-width=".12"
              d="m538.42 29.68.48-.03s.09.56.37.67c.24.09.43-.08.49-.33.08-.32.06-.48.21-.48.18 0 .22.36.15.63-.07.26-.33.6-.74.6s-.63-.41-.63-.41l-.03.41h-.3v-1.05Z"
            />
          </g>
          <g id="Corpo-7">
            <path
              fill="#009488"
              d="M539.08 20.45s-.13 6.58-.13 6.24c0-.01-4.46.16-4.52 0-.07-.16-.04-4.65 0-5.13"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M538.97 25v.67l-4.55.12-.02-.64 4.58-.15Z"
            />
            <path d="M536.65 24c-.27-.06-.41.25-.38.32.02.08.05.28.22.29.17 0 .35-.1.35-.29s-.01-.28-.19-.32Zm0-1.1c-.27-.06-.41.25-.38.32.02.08.05.28.22.29s.35-.1.35-.29-.01-.28-.19-.32Z" />
          </g>
          <g id="braccio-six-conserto-3">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".61"
              d="M534.96 24.18c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M534.96 24.18c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
            />
            <path
              id="mano_six-7"
              fill="#f8cede"
              d="m535.08 23.89-.16.57s-.71.02-.67-.11c.04-.13.38-.11.38-.11s-.54-.1-.48-.23c.05-.13.52 0 .52 0s-.29-.12-.22-.28c.05-.17.63.17.63.17Z"
            />
          </g>
          <g id="braccio-dex-conserto-3">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".61"
              d="M538.39 24.36c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M538.39 24.36c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
            />
            <path
              id="mano_six-8"
              fill="#f8cede"
              d="m538.26 24.07.16.57s.71.02.67-.11c-.04-.13-.38-.11-.38-.11s.54-.1.48-.23c-.05-.13-.52 0-.52 0s.29-.12.22-.28c-.06-.17-.63.17-.63.17Z"
            />
          </g>
          <g id="cappello-7">
            <path
              fill="#002764"
              d="M543.51 15.87c-.65-.13-.97.54-.91.71s.12.62.52.62.83-.22.83-.62-.03-.63-.44-.71Z"
            />
            <path
              fill="#009488"
              d="M533.49 17.07s.25-4.26 2.03-5.31 2.66-1.27 3.71-1.27 2.82 1.01 3.43 1.88c.62.87.73 3.33.62 3.48-.12.14-.77-2.9-2.05-2.93s-1.43 1.16-1.51 1.48-.19 2.23-.19 2.23l-6.04.44Z"
            />
            <path
              fill="#002764"
              d="M533.47 17.07s.12-2.05.72-3.55c0 0 1 2.77 1.13 3.23 0 0 1.17-3.5 1.34-3.69.17-.2 1.36 3.52 1.36 3.52s1.94-3.17 2.05-3.25c.12-.07-.23 3.28-.23 3.27s-6.38.46-6.38.46Z"
            />
          </g>
          <path
            fill="#f8cede"
            d="M533.51 17.07c-.02 1.27-.42 4.25 1.53 5.22 1.57.58 3.12.39 4.05-.72 1-1.28.9-3.79.8-4.96-.04-.19-2.28.02-3.19.06-.9.04-3.08.18-3.19.4Z"
          />
          <g id="orecchio-six">
            <path
              fill="#f8cede"
              d="M539.83 19.55s.14-1.54.71-2.3.88-1.01 1-1.09c0 0 .16 1.05-.54 2.14-.68 1.09-1.17 1.25-1.17 1.25Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="m539.91 19.04.76-1.2"
            />
          </g>
          <g id="orecchio-dex">
            <path
              fill="#f8cede"
              d="M531.67 17.32s.72.25 1.26 1.23.54.96.72 1.62c0 0-1.1-.54-1.57-1.43-.45-.87-.42-1.42-.42-1.42Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="m533.42 19.63-1.06-.99"
            />
          </g>
          <g id="faccia">
            <circle cx="534.73" cy="18.68" r=".53" fill="#fff" />
            <circle cx="538.45" cy="18.68" r=".53" fill="#fff" />
            <circle
              id="occhio-dex-4"
              cx="534.76"
              cy="18.57"
              r=".14"
              fill="#11142a"
            />
            <circle
              id="occhio-six-4"
              cx="538.48"
              cy="18.57"
              r=".14"
              fill="#11142a"
            />
            <path
              fill="#f8cede"
              d="M534.78 20.36c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c0 .29.21.53.5.53h.02Zm3.71 0c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c0 .29.21.53.5.53h.02Z"
            />
            <path
              id="Guancia-11"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M538.94 19.62c-.36-.08-.54.32-.5.43s.07.37.29.37c.22 0 .46-.13.46-.37s-.02-.37-.25-.43Z"
            />
            <path
              id="Guancia-12"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M534.55 19.8c.14.02.34.06.27.44-.07.4-.24.29-.37.29s-.24-.21-.25-.36c-.02-.15.19-.4.36-.37h0Z"
            />
            <path
              id="Naso-7"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M536.35 19.15s.03.32.17.32.17-.32.17-.38"
            />
            <path
              id="bocca-5"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M536.64 20.57s-.28-.08-.43.05"
            />
            <path
              id="palpebre-2"
              fill="#f8cede"
              d="M533.95 18.1h1.66v.38h-1.66v-.38Zm3.81 0h1.66v.38h-1.66v-.38Z"
            />
            <path
              id="sopracciglia-six"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M538.18 17.81s.42-.02.39 0"
            />
            <path
              id="sopracciglia-dex"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M534.98 17.99s-.39 0-.39.03"
            />
          </g>
        </g>
      </g>
      <g id="q16">
        <circle cx="538.82" cy="113.17" r="9.23" fill="#befcdf" />
        <path fill="none" d="M520.26 99.55h38.25v44.65h-38.25V99.55Z" />
        <ellipse
          cx="538.4"
          cy="123.5"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo-3">
          <g id="braccio-six-basso-3">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M542.94 120.01c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M542.94 120.01c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M542.94 120.01c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M542.94 120.01c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M542.63 119.95h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso-3">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M536.55 114.75s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M536.55 114.75s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M536.55 114.75s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M536.55 114.75s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M534.58 120.02h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-8"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M536.57 119.32v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M536.56 119.3v2.89"
            />
          </g>
          <g
            id="gamba_six-8"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M540.29 119.42v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M540.29 119.41v2.89"
            />
          </g>
          <g id="Corpo-8">
            <path
              fill="#009488"
              d="M540.73 113.36s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M540.63 117.75v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M538.38 116.8c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="faccia_cliccabile-2">
            <g id="orecchio_dex-13">
              <path
                fill="#f8cede"
                d="M541.43 111.82s.14-1.56.72-2.33c.28-.41.62-.79 1.01-1.1 0 0 .16 1.07-.54 2.17-.7 1.1-1.18 1.27-1.18 1.27Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m541.51 111.3.77-1.21"
              />
            </g>
            <g id="orecchio_dex-14">
              <path
                fill="#f8cede"
                d="M533.16 109.56s.73.26 1.28 1.25c.54.99.54.97.73 1.64 0 0-1.11-.55-1.59-1.45-.47-.89-.43-1.44-.43-1.44Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m534.93 111.9-1.07-1"
              />
            </g>
            <g id="cappello-8">
              <path
                fill="#002764"
                d="M545.15 108.08c-.66-.13-.98.55-.92.72s.12.62.53.63.84-.23.84-.63c0-.41-.02-.64-.45-.72Z"
              />
              <path
                fill="#009488"
                d="M535.01 109.3s.26-4.31 2.05-5.38 2.7-1.28 3.75-1.28 2.86 1.03 3.48 1.91.74 3.38.62 3.53-.78-2.94-2.08-2.97-1.45 1.18-1.53 1.5c-.08.33-.19 2.26-.19 2.26l-6.12.44Z"
              />
              <path
                fill="#002764"
                d="M534.98 109.3s.12-2.08.73-3.6c0 0 1.01 2.8 1.14 3.28 0 0 1.19-3.54 1.36-3.74.17-.2 1.38 3.57 1.38 3.57s1.96-3.21 2.08-3.29-.23 3.32-.23 3.31-6.47.47-6.47.47Z"
              />
            </g>
            <path
              fill="#f8cede"
              d="M535.02 109.3c-.02 1.28-.43 4.3 1.55 5.29 1.59.59 3.16.4 4.1-.73 1.01-1.3.91-3.84.81-5.03-.04-.19-2.31.02-3.23.06s-3.12.19-3.24.41Z"
            />
            <g id="facce-7">
              <path
                fill="#f8cede"
                d="M536.31 112.63c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Zm3.75 0c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Z"
              />
              <path
                id="Naso-8"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M537.9 111.41s.03.33.17.33.17-.33.17-.38"
              />
              <path
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M535.95 111.07s.32-.35.72 0m3.01.01s.32-.35.72 0"
              />
              <path
                id="guancia-2"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M540.63 111.92c-.37-.08-.55.34-.52.44.03.1.07.38.3.38s.47-.14.47-.38-.02-.39-.25-.44h0Z"
              />
              <path
                id="guancia-2-2"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M536.08 112.1c.15.02.36.06.29.46-.07.41-.24.3-.39.3s-.24-.22-.26-.37c-.02-.16.2-.41.37-.39Z"
              />
              <path
                id="bocca-6"
                fill="none"
                stroke="#111428"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".23"
                d="M537.83 112.83s.18.24.39.23"
              />
              <circle cx="536.27" cy="110.94" r=".54" fill="#fff" />
              <circle cx="540.06" cy="110.94" r=".54" fill="#fff" />
              <circle
                id="occhio_dex-2"
                cx="536.04"
                cy="110.81"
                r=".15"
                fill="#111428"
              />
              <circle
                id="occhio_six-2"
                cx="539.84"
                cy="110.81"
                r=".15"
                fill="#111428"
              />
              <path
                id="palpebre-3"
                fill="#f8cede"
                d="M535.44 110.34h1.74v.4h-1.74v-.4Zm3.99 0h1.74v.4h-1.74v-.4Z"
              />
              <path
                id="sopracciglio_six-2"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M536.37 109.72s-.24-.24-.41.07"
              />
              <path
                id="sopracciglio_dex-2"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M539.87 110.03s.24-.23.41.07"
              />
            </g>
          </g>
        </g>
        <path
          id="Scarpa_dex-8"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m536.77 122.21-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-8"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m540.1 122.28.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39h-.29v-1.02Z"
        />
      </g>
      <g id="q5">
        <circle cx="406.88" cy="145.34" r="9.23" fill="#befcdf" />
        <path fill="none" d="M388.32 131.73h38.25v44.65h-38.25v-44.65Z" />
        <ellipse
          cx="406.46"
          cy="155.1"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo-4">
          <g id="braccio-six-basso-4">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M411.01 151.61c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M411.01 151.61c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M411.01 151.61c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M411.01 151.61c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M410.69 151.55h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso-4">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M404.61 146.35s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M404.61 146.35s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M404.61 146.35s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M404.61 146.35s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M402.64 151.62h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-9"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M404.63 150.92v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M404.62 150.9v2.89"
            />
          </g>
          <g
            id="gamba_six-9"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M408.36 151.02v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M408.35 151.01v2.89"
            />
          </g>
          <g id="Corpo-9">
            <path
              fill="#009488"
              d="M408.8 144.96s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M408.69 149.36v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M406.45 148.4c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="faccia-e-cappello-2">
            <g id="cappello-9">
              <path
                fill="#002764"
                d="M413.26 139.79c-.66-.14-.99.55-.93.73s.12.63.53.63c.41 0 .85-.23.85-.63s-.03-.64-.45-.73Z"
              />
              <path
                fill="#009488"
                d="M403.03 141.02s.26-4.35 2.07-5.42c1.81-1.08 2.72-1.29 3.78-1.29s2.88 1.03 3.51 1.92c.63.89.75 3.4.63 3.56s-.79-2.96-2.09-3c-1.3-.04-1.46 1.19-1.54 1.52-.08.33-.19 2.27-.19 2.27l-6.16.45Z"
              />
              <path
                fill="#002764"
                d="M403.01 141.02s.12-2.09.74-3.63c0 0 1.02 2.83 1.15 3.3 0 0 1.2-3.57 1.37-3.77.17-.2 1.39 3.6 1.39 3.6s1.98-3.24 2.1-3.31c.12-.08-.24 3.35-.24 3.34s-6.52.47-6.52.47Z"
              />
            </g>
            <path
              fill="#f8cede"
              d="M403.05 141.02c-.02 1.29-.43 4.34 1.56 5.33 1.6.59 3.19.4 4.14-.73 1.02-1.31.92-3.87.82-5.07-.04-.19-2.33.02-3.26.06-.92.04-3.14.19-3.26.41Z"
            />
            <g id="orecchio_dex-15">
              <path
                fill="#f8cede"
                d="M409.51 143.56s.14-1.57.72-2.35c.28-.42.62-.79 1.02-1.11 0 0 .16 1.08-.55 2.19s-1.19 1.28-1.19 1.28Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="m409.59 143.04.78-1.22"
              />
            </g>
            <g id="orecchio_dex-16">
              <path
                fill="#f8cede"
                d="M401.17 141.28s.74.26 1.29 1.26.55.98.74 1.65c0 0-1.12-.55-1.6-1.46-.46-.89-.43-1.45-.43-1.45Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="m402.96 143.64-1.08-1.01"
              />
            </g>
            <g id="facce-8">
              <g
                id="sopracciglia-2-2"
                fill="none"
                stroke="#111428"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
              >
                <path d="M404.07 141.72s.15-.22.4-.05M407.89 141.56s.24-.15.41.04" />
              </g>
              <g
                id="sopracciglia"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
              >
                <path d="M408.16 141.55s.27.11.35.22M404.07 141.71s.26-.12.4-.11" />
              </g>
              <path
                id="bocca-7"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="M406.43 144.46s0 .29-.2.31-.38-.23-.38-.23"
              />
              <circle cx="404.3" cy="142.66" r=".54" fill="#fff" />
              <circle cx="408.1" cy="142.66" r=".54" fill="#fff" />
              <circle
                id="occhio-dex-5"
                cx="404.33"
                cy="142.65"
                r=".15"
                fill="#11142a"
              />
              <circle
                id="occhio-six-5"
                cx="408.13"
                cy="142.65"
                r=".15"
                fill="#11142a"
              />
              <path
                fill="#f8cede"
                d="M404.35 144.38c.29 0 .53-.25.53-.55s-.24-.55-.53-.55-.53.25-.53.55c-.01.29.22.53.51.55h.02Zm3.78 0c.29 0 .53-.25.53-.55s-.24-.55-.53-.55-.53.25-.53.55c-.01.29.22.53.51.55h.02Z"
              />
              <path
                id="Guancia-13"
                fill="#f05"
                stroke="#f05"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M408.6 143.63c-.37-.08-.55.33-.51.43s.07.38.29.38c.23 0 .47-.14.47-.38s-.02-.38-.25-.43Z"
              />
              <path
                id="Guancia-14"
                fill="#f05"
                stroke="#f05"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M404.11 143.81c.14.02.35.06.28.45-.07.41-.24.3-.38.3s-.24-.22-.26-.37c-.02-.15.19-.41.36-.38h0Z"
              />
              <path
                id="Naso-9"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="M405.95 143.14s.03.33.18.33.18-.33.18-.39"
              />
            </g>
          </g>
        </g>
        <path
          id="Scarpa_dex-9"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m404.83 153.81-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-9"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m408.16 153.88.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39h-.29v-1.02Z"
        />
      </g>
      <g id="q10">
        <circle cx="474.37" cy="158.38" r="9.23" fill="#befcdf" />
        <g id="gamba_dex-10" stroke-miterlimit="10">
          <path
            fill="none"
            stroke="#009488"
            stroke-width=".61"
            d="M472 164.54v3"
          />
          <path
            fill="none"
            stroke="#6cf7c6"
            stroke-dasharray="0 1.29"
            stroke-width=".59"
            d="M472 164.53v2.99"
          />
          <path
            id="Scarpa_dex-10"
            fill="#002764"
            stroke="#002764"
            stroke-width=".12"
            d="m472.21 167.54-.48-.03s-.07.63-.37.67-.45-.09-.53-.33c-.08-.24-.06-.44-.21-.44-.18 0-.19.32-.11.6.07.26.33.6.74.6s.63-.41.63-.41l.03.41h.3v-1.05Z"
          />
        </g>
        <g id="gamba_six-10" stroke-miterlimit="10">
          <path
            fill="none"
            stroke="#009488"
            stroke-width=".61"
            d="M475.86 164.65v2.99"
          />
          <path
            fill="none"
            stroke="#6cf7c6"
            stroke-dasharray="0 1.29"
            stroke-width=".59"
            d="M475.85 164.64v2.99"
          />
          <path
            id="Scarpa_six-10"
            fill="#002764"
            stroke="#002764"
            stroke-width=".12"
            d="m475.66 167.61.48-.03s.09.56.37.67c.24.09.43-.08.49-.33.08-.32.06-.48.21-.48.18 0 .22.36.15.63-.07.26-.33.6-.74.6s-.63-.41-.63-.41l-.03.41h-.3v-1.05Z"
          />
        </g>
        <g id="Corpo-10">
          <path
            fill="#009488"
            d="M476.31 158.38s-.13 6.58-.13 6.24c0-.01-4.46.16-4.52 0-.07-.16-.04-4.65 0-5.13"
          />
          <path
            fill="#002764"
            stroke="#002764"
            stroke-miterlimit="10"
            stroke-width=".06"
            d="M476.21 162.93v.67l-4.55.12-.02-.64 4.58-.15Z"
          />
          <path d="M473.88 161.93c-.27-.06-.41.25-.38.32.02.08.05.28.22.29.17 0 .35-.1.35-.29s-.01-.28-.19-.32Zm0-1.1c-.27-.06-.41.25-.38.32.02.08.05.28.22.29s.35-.1.35-.29-.01-.28-.19-.32Z" />
        </g>
        <g id="braccio-six-conserto-4">
          <path
            fill="none"
            stroke="#009488"
            stroke-miterlimit="10"
            stroke-width=".61"
            d="M472.19 162.12c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
          />
          <path
            fill="none"
            stroke="#6cf7c6"
            stroke-dasharray="0 1.29"
            stroke-miterlimit="10"
            stroke-width=".59"
            d="M472.19 162.12c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
          />
          <path
            id="mano_six-9"
            fill="#f8cede"
            d="m472.32 161.82-.16.57s-.71.02-.67-.11c.04-.13.38-.11.38-.11s-.54-.1-.48-.23c.05-.13.52 0 .52 0s-.29-.12-.22-.28c.05-.17.63.17.63.17Z"
          />
        </g>
        <g id="braccio-dex-conserto-4">
          <path
            fill="none"
            stroke="#009488"
            stroke-miterlimit="10"
            stroke-width=".61"
            d="M475.63 162.29c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
          />
          <path
            fill="none"
            stroke="#6cf7c6"
            stroke-dasharray="0 1.29"
            stroke-miterlimit="10"
            stroke-width=".59"
            d="M475.63 162.29c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
          />
          <path
            id="mano_six-10"
            fill="#f8cede"
            d="m475.5 162 .16.57s.71.02.67-.11c-.04-.13-.38-.11-.38-.11s.54-.1.48-.23c-.05-.13-.52 0-.52 0s.29-.12.22-.28c-.06-.17-.63.17-.63.17Z"
          />
        </g>
        <path fill="none" d="M455.81 144.88h38.25v44.65h-38.25v-44.65Z" />
        <g id="gruppo-5">
          <g id="faccia_cliccabile-3">
            <g id="orecchio_dex-17">
              <path
                fill="#f8cede"
                d="M476.98 157.03s.14-1.56.72-2.33c.28-.41.62-.79 1.01-1.1 0 0 .16 1.07-.54 2.17-.7 1.1-1.18 1.27-1.18 1.27Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m477.06 156.52.77-1.21"
              />
            </g>
            <g id="orecchio_dex-18">
              <path
                fill="#f8cede"
                d="M468.72 154.77s.73.26 1.28 1.25c.54.99.54.97.73 1.64 0 0-1.11-.55-1.59-1.45-.47-.89-.43-1.44-.43-1.44Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m470.48 157.12-1.07-1"
              />
            </g>
            <g id="cappello-10">
              <path
                fill="#002764"
                d="M480.7 153.3c-.66-.13-.98.55-.92.72s.12.62.53.63.84-.23.84-.63c0-.41-.02-.64-.45-.72Z"
              />
              <path
                fill="#009488"
                d="M470.56 154.52s.26-4.31 2.05-5.38 2.7-1.28 3.75-1.28 2.86 1.03 3.48 1.91.74 3.38.62 3.53-.78-2.94-2.08-2.97-1.45 1.18-1.53 1.5c-.08.33-.19 2.26-.19 2.26l-6.12.44Z"
              />
              <path
                fill="#002764"
                d="M470.53 154.52s.12-2.08.73-3.6c0 0 1.01 2.8 1.14 3.28 0 0 1.19-3.54 1.36-3.74.17-.2 1.38 3.57 1.38 3.57s1.96-3.21 2.08-3.29-.23 3.32-.23 3.31-6.47.47-6.47.47Z"
              />
            </g>
            <path
              fill="#f8cede"
              d="M470.58 154.52c-.02 1.28-.43 4.3 1.55 5.29 1.59.59 3.16.4 4.1-.73 1.01-1.3.91-3.84.81-5.03-.04-.19-2.31.02-3.23.06s-3.12.19-3.24.41Z"
            />
            <g id="facce-9">
              <path
                fill="#f8cede"
                d="M471.86 157.84c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Zm3.75 0c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Z"
              />
              <path
                id="Naso-10"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M473.46 156.63s.03.33.17.33.17-.33.17-.38"
              />
              <path
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M471.5 156.28s.32-.35.72 0m3.01.01s.32-.35.72 0"
              />
              <path
                id="guancia-3"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M476.18 157.13c-.37-.08-.55.34-.52.44.03.1.07.38.3.38s.47-.14.47-.38-.02-.39-.25-.44h0Z"
              />
              <path
                id="guancia-2-3"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M471.63 157.31c.15.02.36.06.29.46-.07.41-.24.3-.39.3s-.24-.22-.26-.37c-.02-.16.2-.41.37-.39Z"
              />
              <path
                id="bocca-8"
                fill="none"
                stroke="#111428"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".23"
                d="M473.39 158.05s.18.24.39.23"
              />
              <circle cx="471.82" cy="156.15" r=".54" fill="#fff" />
              <circle cx="475.61" cy="156.15" r=".54" fill="#fff" />
              <circle
                id="occhio_dex-3"
                cx="471.6"
                cy="156.03"
                r=".15"
                fill="#111428"
              />
              <circle
                id="occhio_six-3"
                cx="475.39"
                cy="156.03"
                r=".15"
                fill="#111428"
              />
              <path
                id="palpebre-4"
                fill="#f8cede"
                d="M470.99 155.56h1.74v.4h-1.74v-.4Zm3.99 0h1.74v.4h-1.74v-.4Z"
              />
              <path
                id="sopracciglio_six-3"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M471.92 154.94s-.24-.24-.41.07"
              />
              <path
                id="sopracciglio_dex-3"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M475.42 155.25s.24-.23.41.07"
              />
            </g>
          </g>
        </g>
      </g>
      <g id="q13">
        <circle cx="376.97" cy="178.29" r="9.23" fill="#befcdf" />
        <path fill="none" d="M358.52 164.67h38.25v44.65h-38.25v-44.65Z" />
        <ellipse
          cx="376.65"
          cy="187.99"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo-6">
          <g id="braccio-six-basso-5">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M381.2 184.5c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M381.2 184.5c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M381.2 184.5c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M381.2 184.5c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M380.89 184.45h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso-5">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M374.81 179.25s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M374.81 179.25s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M374.81 179.25s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M374.81 179.25s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M372.84 184.52h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-11"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M374.83 183.82v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M374.82 183.8v2.89"
            />
          </g>
          <g
            id="gamba_six-11"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M378.55 183.92v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M378.55 183.9v2.89"
            />
          </g>
          <g id="Corpo-11">
            <path
              fill="#009488"
              d="M378.99 177.86s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M378.89 182.25v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M376.64 181.3c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="cappello-11">
            <path
              fill="#009488"
              d="M373.44 173.89s.21-4.37 1.98-5.44c1.77-1.08 2.66-1.3 3.7-1.3s2.81 1.04 3.43 1.93c.61.89.73 3.42.61 3.57s-.77-2.98-2.04-3.01-1.42 1.19-1.5 1.52-.19 2.28-.19 2.28l-5.99.45Z"
            />
            <path
              fill="#002764"
              d="M373.44 173.89s-.03-1.14.67-3.64c0 0 .99 2.84 1.12 3.32 0 0 1.17-3.58 1.34-3.78.17-.2 1.36 3.61 1.36 3.61s1.93-3.25 2.05-3.32c.12-.07-.2 3.35-.19 3.35l-6.35.47Z"
            />
            <path
              id="pom-pom"
              fill="#002764"
              d="M383.39 172.65c-.65-.14-.97.55-.91.73.06.17.13.63.52.64.4 0 .83-.23.83-.64s-.02-.65-.44-.73Z"
            />
          </g>
          <g id="orecchio_dex-19">
            <path
              fill="#f8cede"
              d="M371.03 174.83s.77-.02 1.62.7c.85.74.84.72 1.26 1.28 0 0-1.22-.11-1.96-.78-.76-.67-.91-1.2-.91-1.2Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="m373.49 176.39-1.34-.55"
            />
          </g>
          <g id="orecchio_six">
            <path
              fill="#f8cede"
              d="M379.25 176.69s.83-1.34 1.69-1.75c.43-.24.89-.41 1.38-.51 0 0-.35 1.03-1.46 1.69-1.1.66-1.6.57-1.6.58Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="m379.56 176.27 1.22-.72"
            />
          </g>
          <path
            id="faccia_forma"
            fill="#f8cede"
            d="M373.42 173.89c-.02 1.3-.42 4.35 1.52 5.35 1.56.6 3.11.4 4.04-.74 1-1.31.89-3.88.8-5.09-.04-.19-2.28.02-3.18.06-.9.04-3.07.19-3.18.41Z"
          />
          <g id="faccia-2">
            <path
              id="naso"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M376.25 176.02s.03.33.17.33.17-.33.17-.39"
            />
            <path
              id="base_occhio"
              fill="#fff"
              d="M374.63 176.08c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
            />
            <path
              id="base_occhio-2"
              fill="#fff"
              d="M378.35 176.08c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
            />
            <path
              id="pupilla"
              fill="#11142a"
              d="M374.67 175.65c.08 0 .15-.06.15-.15s-.06-.15-.15-.15-.15.06-.15.15.06.15.15.15Z"
            />
            <path
              id="pupilla-2"
              fill="#11142a"
              d="M378.38 175.65c.08 0 .15-.06.15-.15s-.06-.15-.15-.15-.15.06-.15.15c0 .08.07.15.15.15Z"
            />
            <g id="occhio_3">
              <path
                id="base_occhio-2"
                fill="#fff"
                d="M374.63 176.08c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
              />
              <path
                fill="#11142a"
                d="M374.63 175.95c.23 0 .41-.18.41-.41s-.18-.41-.41-.41-.41.18-.41.41.18.41.41.41Z"
              />
              <path
                fill="#fff"
                d="M374.47 175.59c.07 0 .13-.06.13-.13s-.06-.13-.13-.13-.13.06-.13.13.06.13.13.13Zm.25.15s.09-.04.09-.09-.04-.09-.09-.09-.09.04-.09.09.04.09.09.09Z"
              />
            </g>
            <g id="occhio_4">
              <path
                id="base_occhio-2-2"
                fill="#fff"
                d="M378.35 176.08c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
              />
              <path
                fill="#11142a"
                d="M378.35 175.95c.23 0 .41-.18.41-.41s-.18-.41-.41-.41-.41.18-.41.41c0 .23.18.41.41.41Z"
              />
              <path
                fill="#fff"
                d="M378.46 175.55c.07 0 .13-.06.13-.13s-.06-.13-.13-.13-.13.06-.13.13.06.13.13.13Zm-.26.17s.09-.04.09-.09-.04-.09-.09-.09-.09.04-.09.09.04.09.09.09Z"
              />
            </g>
            <path
              id="guanciotte"
              fill="#f8cede"
              d="M374.65 176.97c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Zm3.74 0c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Z"
            />
            <path
              id="guancia_2"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M378.84 176.36c-.35-.08-.53.34-.49.44.03.1.07.38.28.38.23 0 .46-.14.46-.38s-.02-.38-.25-.44h0Z"
            />
            <path
              id="guancia_1"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M374.46 176.55c.13.02.34.06.27.46s-.24.3-.37.3-.24-.22-.26-.37c-.02-.15.18-.41.35-.38Z"
            />
            <path
              id="bocca-9"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M375.86 177s.32.45.68.42.68-.56.68-.56"
            />
            <path
              id="sopracciglio_2"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M378.2 174.51s.24-.24.4.07"
            />
            <path
              id="sopracciglio_1"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M374.83 174.66s-.24-.23-.4.07"
            />
          </g>
        </g>
        <path
          id="Scarpa_dex-11"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m375.03 186.71-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-11"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m378.36 186.78.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39h-.29v-1.02Z"
        />
      </g>
      <g id="q18">
        <circle cx="330.83" cy="235.2" r="9.23" fill="#befcdf" />
        <path fill="none" d="M312.27 221.59h38.25v44.65h-38.25v-44.65Z" />
        <ellipse
          cx="330.63"
          cy="245.36"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo-7">
          <g id="braccio-six-basso-6">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M335.18 241.87c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M335.18 241.87c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M335.18 241.87c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M335.18 241.87c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M334.87 241.82h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso-6">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M328.78 236.62s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M328.78 236.62s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M328.78 236.62s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M328.78 236.62s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M326.81 241.89h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-12"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M328.8 241.18v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M328.79 241.17v2.89"
            />
          </g>
          <g
            id="gamba_six-12"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M332.53 241.28v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M332.52 241.27v2.89"
            />
          </g>
          <g id="Corpo-12">
            <path
              fill="#009488"
              d="M332.97 235.23s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M332.86 239.62v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M330.62 238.66c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="cappello-12">
            <path
              fill="#009488"
              d="M327.41 231.26s.21-4.37 1.98-5.44c1.77-1.08 2.66-1.3 3.7-1.3s2.81 1.04 3.43 1.93c.61.89.73 3.42.61 3.57s-.77-2.98-2.04-3.01-1.42 1.19-1.5 1.52-.19 2.28-.19 2.28l-5.99.45Z"
            />
            <path
              fill="#002764"
              d="M327.41 231.26s-.03-1.14.67-3.64c0 0 .99 2.84 1.12 3.32 0 0 1.17-3.58 1.34-3.78.17-.2 1.36 3.61 1.36 3.61s1.93-3.25 2.05-3.32c.12-.07-.2 3.35-.19 3.35l-6.35.47Z"
            />
            <path
              id="pom-pom-2"
              fill="#002764"
              d="M337.36 230.02c-.65-.14-.97.55-.91.73.06.17.13.63.52.64.4 0 .83-.23.83-.64s-.02-.65-.44-.73Z"
            />
          </g>
          <g id="orecchio_dex-20">
            <path
              fill="#f8cede"
              d="M325 232.2s.77-.02 1.62.7c.85.74.84.72 1.26 1.28 0 0-1.22-.11-1.96-.78-.76-.67-.91-1.2-.91-1.2Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="m327.46 233.76-1.34-.55"
            />
          </g>
          <g id="orecchio_six-2">
            <path
              fill="#f8cede"
              d="M333.22 234.06s.83-1.34 1.69-1.75c.43-.24.89-.41 1.38-.51 0 0-.35 1.03-1.46 1.69-1.1.66-1.6.57-1.6.58Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="m333.53 233.64 1.22-.72"
            />
          </g>
          <path
            id="faccia_forma-2"
            fill="#f8cede"
            d="M327.39 231.26c-.02 1.3-.42 4.35 1.52 5.35 1.56.6 3.11.4 4.04-.74 1-1.31.89-3.88.8-5.09-.04-.19-2.28.02-3.18.06-.9.04-3.07.19-3.18.41Z"
          />
          <g id="faccia-3">
            <path
              id="naso-2"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M330.22 233.39s.03.33.17.33.17-.33.17-.39"
            />
            <path
              id="base_occhio-3"
              fill="#fff"
              d="M328.61 233.44c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
            />
            <path
              id="base_occhio-2-3"
              fill="#fff"
              d="M332.33 233.44c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
            />
            <path
              id="pupilla-2"
              fill="#11142a"
              d="M328.64 233.02c.08 0 .15-.06.15-.15s-.06-.15-.15-.15-.15.06-.15.15.06.15.15.15Z"
            />
            <path
              id="pupilla-2-2"
              fill="#11142a"
              d="M332.35 233.02c.08 0 .15-.06.15-.15s-.06-.15-.15-.15-.15.06-.15.15c0 .08.07.15.15.15Z"
            />
            <g id="occhio_3-2">
              <path
                id="base_occhio-4"
                fill="#fff"
                d="M328.61 233.44c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
              />
              <path
                fill="#11142a"
                d="M328.6 233.32c.23 0 .41-.18.41-.41s-.18-.41-.41-.41-.41.18-.41.41.18.41.41.41Z"
              />
              <path
                fill="#fff"
                d="M328.44 232.96c.07 0 .13-.06.13-.13s-.06-.13-.13-.13-.13.06-.13.13.06.13.13.13Zm.25.15s.09-.04.09-.09-.04-.09-.09-.09-.09.04-.09.09.04.09.09.09Z"
              />
            </g>
            <g id="occhio_4-2">
              <path
                id="base_occhio-2-4"
                fill="#fff"
                d="M332.33 233.44c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
              />
              <path
                fill="#11142a"
                d="M332.33 233.32c.23 0 .41-.18.41-.41s-.18-.41-.41-.41-.41.18-.41.41c0 .23.18.41.41.41Z"
              />
              <path
                fill="#fff"
                d="M332.44 232.92c.07 0 .13-.06.13-.13s-.06-.13-.13-.13-.13.06-.13.13.06.13.13.13Zm-.26.17s.09-.04.09-.09-.04-.09-.09-.09-.09.04-.09.09.04.09.09.09Z"
              />
            </g>
            <path
              id="guanciotte-2"
              fill="#f8cede"
              d="M328.66 234.18c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Zm3.74 0c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Z"
            />
            <path
              id="guancia_2-2"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M332.81 233.73c-.35-.08-.53.34-.49.44.03.1.07.38.28.38.23 0 .46-.14.46-.38s-.02-.38-.25-.44h0Z"
            />
            <path
              id="guancia_1-2"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M328.43 233.91c.13.02.34.06.27.46s-.24.3-.37.3-.24-.22-.26-.37c-.02-.15.18-.41.35-.38Z"
            />
            <path
              id="bocca-wide"
              fill="none"
              stroke="#11142c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M329.25 234.27s.4.58 1.13.56c1.1-.02 1.53-1 1.53-1"
            />
            <path
              id="sopracciglio_2-2"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M332.18 231.88s.24-.24.4.07"
            />
            <path
              id="sopracciglio_1-2"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M328.8 232.03s-.24-.23-.4.07"
            />
          </g>
        </g>
        <path
          id="Scarpa_dex-12"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m329 244.08-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-12"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m332.33 244.15.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39h-.29v-1.02Z"
        />
      </g>
      <g id="q19">
        <circle cx="475.5" cy="225.2" r="9.23" fill="#befcdf" />
        <path fill="none" d="M456.94 211.59h38.25v44.65h-38.25v-44.65Z" />
        <ellipse
          cx="475.29"
          cy="234.78"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo-8">
          <g id="braccio-six-basso-7">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M479.84 231.29c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M479.84 231.29c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M479.84 231.29c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M479.84 231.29c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M479.53 231.23h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso-7">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M473.45 226.03s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M473.45 226.03s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M473.45 226.03s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M473.45 226.03s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M471.48 231.3h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-13"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M473.47 230.6v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M473.45 230.58v2.89"
            />
          </g>
          <g
            id="gamba_six-13"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M477.19 230.7v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M477.19 230.69v2.89"
            />
          </g>
          <g id="Corpo-13">
            <path
              fill="#009488"
              d="M477.63 224.64s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M477.53 229.03v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M475.28 228.08c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="cappello-13">
            <path
              fill="#009488"
              d="M472.08 220.67s.21-4.37 1.98-5.44c1.77-1.08 2.66-1.3 3.7-1.3s2.81 1.04 3.43 1.93c.61.89.73 3.42.61 3.57s-.77-2.98-2.04-3.01-1.42 1.19-1.5 1.52-.19 2.28-.19 2.28l-5.99.45Z"
            />
            <path
              fill="#002764"
              d="M472.08 220.67s-.03-1.14.67-3.64c0 0 .99 2.84 1.12 3.32 0 0 1.17-3.58 1.34-3.78.17-.2 1.36 3.61 1.36 3.61s1.93-3.25 2.05-3.32c.12-.07-.2 3.35-.19 3.35l-6.35.47Z"
            />
            <path
              id="pom-pom-3"
              fill="#002764"
              d="M482.02 219.43c-.65-.14-.97.55-.91.73.06.17.13.63.52.64.4 0 .83-.23.83-.64s-.02-.65-.44-.73Z"
            />
          </g>
          <g id="orecchio_dex-21">
            <path
              fill="#f8cede"
              d="M469.67 221.61s.77-.02 1.62.7c.85.74.84.72 1.26 1.28 0 0-1.22-.11-1.96-.78-.76-.67-.91-1.2-.91-1.2Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="m472.13 223.17-1.34-.55"
            />
          </g>
          <g id="orecchio_six-3">
            <path
              fill="#f8cede"
              d="M477.89 223.47s.83-1.34 1.69-1.75c.43-.24.89-.41 1.38-.51 0 0-.35 1.03-1.46 1.69-1.1.66-1.6.57-1.6.58Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="m478.19 223.05 1.22-.72"
            />
          </g>
          <path
            id="faccia_forma-3"
            fill="#f8cede"
            d="M472.06 220.67c-.02 1.3-.42 4.35 1.52 5.35 1.56.6 3.11.4 4.04-.74 1-1.31.89-3.88.8-5.09-.04-.19-2.28.02-3.18.06-.9.04-3.07.19-3.18.41Z"
          />
          <g id="faccia-4">
            <path
              id="naso-3"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M474.89 222.81s.03.33.17.33.17-.33.17-.39"
            />
            <path
              id="base_occhio-5"
              fill="#fff"
              d="M473.27 222.86c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
            />
            <path
              id="base_occhio-2-5"
              fill="#fff"
              d="M476.99 222.86c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
            />
            <path
              id="pupilla-3"
              fill="#11142a"
              d="M473.31 222.43c.08 0 .15-.06.15-.15s-.06-.15-.15-.15-.15.06-.15.15.06.15.15.15Z"
            />
            <path
              id="pupilla-2-3"
              fill="#11142a"
              d="M477.02 222.43c.08 0 .15-.06.15-.15s-.06-.15-.15-.15-.15.06-.15.15c0 .08.07.15.15.15Z"
            />
            <g id="occhio_3-3">
              <path
                id="base_occhio-6"
                fill="#fff"
                d="M473.27 222.86c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
              />
              <path
                fill="#11142a"
                d="M473.27 222.73c.23 0 .41-.18.41-.41s-.18-.41-.41-.41-.41.18-.41.41.18.41.41.41Z"
              />
              <path
                fill="#fff"
                d="M473.11 222.38c.07 0 .13-.06.13-.13s-.06-.13-.13-.13-.13.06-.13.13.06.13.13.13Zm.25.15s.09-.04.09-.09-.04-.09-.09-.09-.09.04-.09.09.04.09.09.09Z"
              />
            </g>
            <g id="occhio_4-3">
              <path
                id="base_occhio-2-6"
                fill="#fff"
                d="M476.99 222.86c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54.23.54.52.54Z"
              />
              <path
                fill="#11142a"
                d="M476.99 222.74c.23 0 .41-.18.41-.41s-.18-.41-.41-.41-.41.18-.41.41c0 .23.18.41.41.41Z"
              />
              <path
                fill="#fff"
                d="M477.1 222.33c.07 0 .13-.06.13-.13s-.06-.13-.13-.13-.13.06-.13.13.06.13.13.13Zm-.26.17s.09-.04.09-.09-.04-.09-.09-.09-.09.04-.09.09.04.09.09.09Z"
              />
            </g>
            <path
              id="guanciotte-3"
              fill="#f8cede"
              d="M473.32 223.59c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Zm3.74 0c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Z"
            />
            <path
              id="guancia_2-3"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M477.47 223.14c-.35-.08-.53.34-.49.44.03.1.07.38.28.38.23 0 .46-.14.46-.38s-.02-.38-.25-.44h0Z"
            />
            <path
              id="guancia_1-3"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M473.1 223.33c.13.02.34.06.27.46s-.24.3-.37.3-.24-.22-.26-.37c-.02-.15.18-.41.35-.38Z"
            />
            <path
              id="bocca-wide-2"
              fill="none"
              stroke="#11142c"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M473.91 223.68s.4.58 1.13.56c1.1-.02 1.53-1 1.53-1"
            />
            <path
              id="sopracciglio_2-3"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M476.84 221.29s.24-.24.4.07"
            />
            <path
              id="sopracciglio_1-3"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".17"
              d="M473.46 221.45s-.24-.23-.4.07"
            />
          </g>
        </g>
        <path
          id="Scarpa_dex-13"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m473.67 233.49-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-13"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m477 233.56.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39H477v-1.02Z"
        />
      </g>
      <g id="q11">
        <circle cx="115.43" cy="250.41" r="9.23" fill="#befcdf" />
        <path fill="none" d="M96.87 236.9h38.25v44.65H96.87V236.9Z" />
        <ellipse
          cx="115.01"
          cy="259.81"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo-9">
          <g id="braccio-six-basso-8">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M119.56 256.32c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M119.56 256.32c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M119.56 256.32c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49M119.56 256.32c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M119.24 256.26h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso-8">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M113.16 251.06s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M113.16 251.06s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M113.16 251.06s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M113.16 251.06s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M111.19 256.33h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-14"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M113.18 255.63v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M113.17 255.61v2.89"
            />
          </g>
          <g
            id="gamba_six-14"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M116.9 255.73v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M116.9 255.72v2.89"
            />
          </g>
          <g id="Corpo-14">
            <path
              fill="#009488"
              d="M117.35 249.67s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M117.24 254.07v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M114.99 253.11c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="faccia_cliccabile-4">
            <g id="orecchio_dex-22">
              <path
                fill="#f8cede"
                d="M118.04 248.13s.14-1.56.72-2.33c.28-.41.62-.79 1.01-1.1 0 0 .16 1.07-.54 2.17-.7 1.1-1.18 1.27-1.18 1.27Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m118.12 247.61.77-1.21"
              />
            </g>
            <g id="orecchio_dex-23">
              <path
                fill="#f8cede"
                d="M109.78 245.87s.73.26 1.28 1.25c.54.99.54.97.73 1.64 0 0-1.11-.55-1.59-1.45-.47-.89-.43-1.44-.43-1.44Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m111.54 248.21-1.07-1"
              />
            </g>
            <g id="cappello-14">
              <path
                fill="#002764"
                d="M121.76 244.39c-.66-.13-.98.55-.92.72s.12.62.53.63.84-.23.84-.63c0-.41-.02-.64-.45-.72Z"
              />
              <path
                fill="#009488"
                d="M111.62 245.61s.26-4.31 2.05-5.38 2.7-1.28 3.75-1.28 2.86 1.03 3.48 1.91.74 3.38.62 3.53-.78-2.94-2.08-2.97-1.45 1.18-1.53 1.5c-.08.33-.19 2.26-.19 2.26l-6.12.44Z"
              />
              <path
                fill="#002764"
                d="M111.59 245.61s.12-2.08.73-3.6c0 0 1.01 2.8 1.14 3.28 0 0 1.19-3.54 1.36-3.74.17-.2 1.38 3.57 1.38 3.57s1.96-3.21 2.08-3.29-.23 3.32-.23 3.31-6.47.47-6.47.47Z"
              />
            </g>
            <path
              fill="#f8cede"
              d="M111.64 245.61c-.02 1.28-.43 4.3 1.55 5.29 1.59.59 3.16.4 4.1-.73 1.01-1.3.91-3.84.81-5.03-.04-.19-2.31.02-3.23.06s-3.12.19-3.24.41Z"
            />
            <g id="facce-10">
              <path
                fill="#f8cede"
                d="M112.92 248.94c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Zm3.75 0c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Z"
              />
              <path
                id="Naso-11"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M114.52 247.72s.03.33.17.33.17-.33.17-.38"
              />
              <path
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M112.56 247.38s.32-.35.72 0m3.01.01s.32-.35.72 0"
              />
              <path
                id="guancia-4"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M117.24 248.23c-.37-.08-.55.34-.52.44.03.1.07.38.3.38s.47-.14.47-.38-.02-.39-.25-.44h0Z"
              />
              <path
                id="guancia-2-4"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M112.69 248.41c.15.02.36.06.29.46-.07.41-.24.3-.39.3s-.24-.22-.26-.37c-.02-.16.2-.41.37-.39Z"
              />
              <path
                id="bocca-smile"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M114.69 249.13s.18.24.39.23c.21-.01.2-.31.2-.31"
              />
              <circle cx="112.88" cy="247.25" r=".54" fill="#fff" />
              <circle cx="116.67" cy="247.25" r=".54" fill="#fff" />
              <circle
                id="occhio_dex-4"
                cx="112.66"
                cy="247.13"
                r=".15"
                fill="#111428"
              />
              <circle
                id="occhio_six-4"
                cx="116.45"
                cy="247.13"
                r=".15"
                fill="#111428"
              />
              <path
                id="palpebre-5"
                fill="#f8cede"
                d="M112.05 246.65h1.74v.4h-1.74v-.4Zm3.99 0h1.74v.4h-1.74v-.4Z"
              />
              <path
                id="sopracciglio_six-4"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M112.98 246.03s-.24-.24-.41.07"
              />
              <path
                id="sopracciglio_dex-4"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M116.48 246.34s.24-.23.41.07"
              />
            </g>
          </g>
        </g>
        <path
          id="Scarpa_dex-14"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m113.38 258.52-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-14"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m116.71 258.59.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39h-.29v-1.02Z"
        />
      </g>
      <g id="q6">
        <circle cx="156.83" cy="215.05" r="9.23" fill="#befcdf" />
        <path fill="none" d="M138.27 201.48h38.25v44.65h-38.25v-44.65Z" />
        <ellipse
          id="ombra-3"
          cx="156.54"
          cy="225.57"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.97"
          ry=".21"
        />
        <g id="elfo-intero-5">
          <g id="gamba_dex-15" stroke-miterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              stroke-width=".61"
              d="M154.59 221.43v3"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-width=".59"
              d="M154.58 221.42v2.99"
            />
            <path
              id="Scarpa_dex-15"
              fill="#002764"
              stroke="#002764"
              stroke-width=".12"
              d="m154.79 224.43-.48-.03s-.07.63-.37.67-.45-.09-.53-.33c-.08-.24-.06-.44-.21-.44-.18 0-.19.32-.11.6.07.26.33.6.74.6s.63-.41.63-.41l.03.41h.3v-1.05Z"
            />
          </g>
          <g id="gamba_six-15" stroke-miterlimit="10">
            <path
              fill="none"
              stroke="#009488"
              stroke-width=".61"
              d="M158.45 221.54v2.99"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-width=".59"
              d="M158.44 221.53v2.99"
            />
            <path
              id="Scarpa_six-15"
              fill="#002764"
              stroke="#002764"
              stroke-width=".12"
              d="m158.24 224.5.48-.03s.09.56.37.67c.24.09.43-.08.49-.33.08-.32.06-.48.21-.48.18 0 .22.36.15.63-.07.26-.33.6-.74.6s-.63-.41-.63-.41l-.03.41h-.3v-1.05Z"
            />
          </g>
          <g id="Corpo-15">
            <path
              fill="#009488"
              d="M158.9 215.27s-.13 6.58-.13 6.24c0-.01-4.46.16-4.52 0-.07-.16-.04-4.65 0-5.13"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M158.79 219.82v.67l-4.55.12-.02-.64 4.58-.15Z"
            />
            <path d="M156.47 218.82c-.27-.06-.41.25-.38.32.02.08.05.28.22.29.17 0 .35-.1.35-.29s-.01-.28-.19-.32Zm0-1.1c-.27-.06-.41.25-.38.32.02.08.05.28.22.29s.35-.1.35-.29-.01-.28-.19-.32Z" />
          </g>
          <g id="cappello-15">
            <path
              fill="#009488"
              d="M153.05 211.66s.27-4.5 2.14-5.61c1.87-1.11 2.82-1.34 3.92-1.34s2.98 1.07 3.63 1.99c.65.92.77 3.52.65 3.68s-.81-3.06-2.16-3.1c-1.34-.04-1.51 1.23-1.59 1.57-.08.35-.2 2.35-.2 2.35l-6.38.46Z"
            />
            <path
              fill="#002764"
              d="M153.04 211.66s.12-2.16.77-3.75c0 0 1.05 2.92 1.19 3.42 0 0 1.24-3.7 1.42-3.9.18-.21 1.44 3.72 1.44 3.72s2.05-3.35 2.17-3.43c.12-.08-.24 3.47-.24 3.45s-6.74.49-6.74.49Zm10.6-1.28c-.69-.14-1.02.57-.96.75s.13.65.55.66c.42 0 .88-.24.88-.66s-.03-.66-.47-.75Z"
            />
          </g>
          <path
            id="viso-4"
            fill="#f8cede"
            d="M153.07 211.66c-.02 1.34-.44 4.49 1.62 5.51 1.66.61 3.3.41 4.28-.76 1.05-1.36.95-4.01.85-5.24-.04-.2-2.41.02-3.37.06-.95.04-3.25.19-3.37.43Z"
          />
          <path
            id="sopracciglio-six-1-4"
            fill="none"
            stroke="#11142a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M158.04 212.2s.16-.21.41 0"
          />
          <path
            id="sopracciglio-dex-1-2"
            fill="none"
            stroke="#11142a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M154.65 212.27s-.23-.18-.41.04"
          />
          <g id="orecchio_dex-24">
            <path
              fill="#f8cede"
              d="M159.76 214.28s.15-1.63.75-2.43.93-1.07 1.05-1.15c0 0 .16 1.11-.57 2.26s-1.23 1.32-1.23 1.32Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".18"
              d="m159.84 213.74.8-1.26"
            />
          </g>
          <g id="orecchio_dex-25">
            <path
              fill="#f8cede"
              d="M151.13 211.93s.77.27 1.33 1.3.57 1.01.77 1.71c0 0-1.16-.57-1.65-1.51-.48-.93-.44-1.5-.44-1.5Z"
            />
            <path
              fill="none"
              stroke="#de8bb5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".18"
              d="m152.98 214.36-1.12-1.05"
            />
          </g>
          <g id="facce-11">
            <circle
              id="bianco-dex-4"
              cx="154.37"
              cy="213.36"
              r=".56"
              fill="#fff"
            />
            <circle
              id="bianco-six-4"
              cx="158.3"
              cy="213.36"
              r=".56"
              fill="#fff"
            />
            <circle
              id="occhio-dex-6"
              cx="154.4"
              cy="213.34"
              r=".15"
              fill="#11142a"
            />
            <circle
              id="occhio-six-6"
              cx="158.33"
              cy="213.34"
              r=".15"
              fill="#11142a"
            />
            <ellipse
              id="guancia-dex-4"
              cx="154.42"
              cy="214.57"
              fill="#f8cede"
              rx=".55"
              ry=".57"
            />
            <ellipse
              id="guancia-six-4"
              cx="158.33"
              cy="214.57"
              fill="#f8cede"
              rx=".55"
              ry=".57"
            />
            <path
              id="Guancia-15"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M158.82 214.35c-.38-.09-.57.34-.53.45s.07.39.3.4c.24 0 .49-.14.49-.4s-.02-.4-.26-.45Z"
            />
            <path
              id="Guancia-16"
              fill="#f05"
              stroke="#f05"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".12"
              d="M154.17 214.55c.15.02.36.06.29.47-.07.42-.25.31-.4.31s-.25-.22-.27-.38c-.02-.16.2-.42.38-.4h0Z"
            />
            <path
              id="Naso-12"
              fill="none"
              stroke="#11142a"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width=".18"
              d="M156.08 213.85s.03.34.18.34.18-.34.18-.4"
            />
          </g>
          <g id="braccio-six-conserto-5">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".61"
              d="M154.78 219.01c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M154.78 219.01c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
            />
            <path
              id="mano_six-11"
              fill="#f8cede"
              d="m154.9 218.71-.16.57s-.71.02-.67-.11c.04-.13.38-.11.38-.11s-.54-.1-.48-.23c.05-.13.52 0 .52 0s-.29-.12-.22-.28c.05-.17.63.17.63.17Z"
            />
          </g>
          <g id="braccio-dex-conserto-5">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".61"
              d="M158.21 219.18c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M158.21 219.18c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
            />
            <path
              id="mano_six-12"
              fill="#f8cede"
              d="m158.08 218.89.16.57s.71.02.67-.11c-.04-.13-.38-.11-.38-.11s.54-.1.48-.23c-.05-.13-.52 0-.52 0s.29-.12.22-.28c-.06-.17-.63.17-.63.17Z"
            />
          </g>
          <path
            fill="none"
            stroke="#11142a"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".18"
            d="M156.2 215.24s.12.09.29 0"
          />
        </g>
      </g>
      <g id="q17">
        <ellipse
          cx="51.3"
          cy="210.24"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".11"
          opacity=".5"
          rx="3.25"
          ry=".11"
        />
        <circle
          cx="51.19"
          cy="200.77"
          r="9.23"
          fill="#befcdf"
          transform="rotate(-88.09 51.19748259 200.77263667)"
        />
        <path fill="none" d="M32.63 187.3h38.25v44.65H32.63V187.3Z" />
        <g id="gamba_dex-16" stroke-miterlimit="10">
          <path
            fill="none"
            stroke="#009488"
            stroke-width=".61"
            d="M49.23 206.1v3"
          />
          <path
            fill="none"
            stroke="#6cf7c6"
            stroke-dasharray="0 1.29"
            stroke-width=".59"
            d="M49.22 206.09v2.99"
          />
          <path
            id="Scarpa_dex-16"
            fill="#002764"
            stroke="#002764"
            stroke-width=".12"
            d="m49.44 209.1-.48-.03s-.07.63-.37.67-.45-.09-.53-.33c-.08-.24-.06-.44-.21-.44-.18 0-.19.32-.11.6.07.26.33.6.74.6s.63-.41.63-.41l.03.41h.3v-1.05Z"
          />
        </g>
        <g id="gamba_six-16" stroke-miterlimit="10">
          <path
            fill="none"
            stroke="#009488"
            stroke-width=".61"
            d="M53.09 206.21v2.99"
          />
          <path
            fill="none"
            stroke="#6cf7c6"
            stroke-dasharray="0 1.29"
            stroke-width=".59"
            d="M53.08 206.2v2.99"
          />
          <path
            id="Scarpa_six-16"
            fill="#002764"
            stroke="#002764"
            stroke-width=".12"
            d="m52.88 209.17.48-.03s.09.56.37.67c.24.09.43-.08.49-.33.08-.32.06-.48.21-.48.18 0 .22.36.15.63-.07.26-.33.6-.74.6s-.63-.41-.63-.41l-.03.41h-.3v-1.05Z"
          />
        </g>
        <g id="Corpo-16">
          <path
            fill="#009488"
            d="M53.54 199.94s-.13 6.58-.13 6.24c0-.01-4.46.16-4.52 0-.07-.16-.04-4.65 0-5.13"
          />
          <path
            fill="#002764"
            stroke="#002764"
            stroke-miterlimit="10"
            stroke-width=".06"
            d="M53.44 204.49v.67l-4.55.12-.02-.64 4.58-.15Z"
          />
          <path d="M51.11 203.49c-.27-.06-.41.25-.38.32.02.08.05.28.22.29.17 0 .35-.1.35-.29s-.01-.28-.19-.32Zm0-1.1c-.27-.06-.41.25-.38.32.02.08.05.28.22.29s.35-.1.35-.29-.01-.28-.19-.32Z" />
        </g>
        <g id="braccio-six-conserto-6">
          <path
            fill="none"
            stroke="#009488"
            stroke-miterlimit="10"
            stroke-width=".61"
            d="M49.42 203.67c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
          />
          <path
            fill="none"
            stroke="#6cf7c6"
            stroke-dasharray="0 1.29"
            stroke-miterlimit="10"
            stroke-width=".59"
            d="M49.42 203.67c3.19.27 4.46.16 4.92-.33.14-.15.21-.36.15-.57-.13-.42-.52-.71-.95-.71"
          />
          <path
            id="mano_six-13"
            fill="#f8cede"
            d="m49.54 203.37-.16.57s-.71.02-.67-.11c.04-.13.38-.11.38-.11s-.54-.1-.48-.23c.05-.13.52 0 .52 0s-.29-.12-.22-.28c.05-.17.63.17.63.17Z"
          />
        </g>
        <g id="braccio-dex-conserto-6">
          <path
            fill="none"
            stroke="#009488"
            stroke-miterlimit="10"
            stroke-width=".61"
            d="M52.85 203.85c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
          />
          <path
            fill="none"
            stroke="#6cf7c6"
            stroke-dasharray="0 1.29"
            stroke-miterlimit="10"
            stroke-width=".59"
            d="M52.85 203.85c-3.19.27-4.46.16-4.92-.33-.15-.15-.2-.36-.15-.57.07-.24.28-.74 1.08-.74"
          />
          <path
            id="mano_six-14"
            fill="#f8cede"
            d="m52.72 203.56.16.57s.71.02.67-.11c-.04-.13-.38-.11-.38-.11s.54-.1.48-.23c-.05-.13-.52 0-.52 0s.29-.12.22-.28c-.06-.17-.63.17-.63.17Z"
          />
        </g>
        <g id="gruppo-10">
          <g id="faccia_cliccabile-5">
            <g id="orecchio_dex-26">
              <path
                fill="#f8cede"
                d="M54.21 198.59s.14-1.56.72-2.33c.28-.41.62-.79 1.01-1.1 0 0 .16 1.07-.54 2.17-.7 1.1-1.18 1.27-1.18 1.27Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m54.29 198.08.77-1.21"
              />
            </g>
            <g id="orecchio_dex-27">
              <path
                fill="#f8cede"
                d="M45.94 196.33s.73.26 1.28 1.25c.54.99.54.97.73 1.64 0 0-1.11-.55-1.59-1.45-.47-.89-.43-1.44-.43-1.44Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m47.71 198.67-1.07-1"
              />
            </g>
            <g id="cappello-16">
              <path
                fill="#002764"
                d="M57.93 194.85c-.66-.13-.98.55-.92.72s.12.62.53.63.84-.23.84-.63c0-.41-.02-.64-.45-.72Z"
              />
              <path
                fill="#009488"
                d="M47.78 196.07s.26-4.31 2.05-5.38 2.7-1.28 3.75-1.28 2.86 1.03 3.48 1.91.74 3.38.62 3.53-.78-2.94-2.08-2.97-1.45 1.18-1.53 1.5c-.08.33-.19 2.26-.19 2.26l-6.12.44Z"
              />
              <path
                fill="#002764"
                d="M47.76 196.07s.12-2.08.73-3.6c0 0 1.01 2.8 1.14 3.28 0 0 1.19-3.54 1.36-3.74.17-.2 1.38 3.57 1.38 3.57s1.96-3.21 2.08-3.29-.23 3.32-.23 3.31-6.47.47-6.47.47Z"
              />
            </g>
            <path
              fill="#f8cede"
              d="M47.8 196.07c-.02 1.28-.43 4.3 1.55 5.29 1.59.59 3.16.4 4.1-.73 1.01-1.3.91-3.84.81-5.03-.04-.19-2.31.02-3.23.06s-3.12.19-3.24.41Z"
            />
            <g id="facce-12">
              <path
                fill="#f8cede"
                d="M49.09 199.4c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Zm3.75 0c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Z"
              />
              <path
                id="Naso-13"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M50.68 198.18s.03.33.17.33.17-.33.17-.38"
              />
              <path
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M48.72 197.84s.32-.35.72 0m3.01.01s.32-.35.72 0"
              />
              <path
                id="guancia-5"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M53.4 198.69c-.37-.08-.55.34-.52.44.03.1.07.38.3.38s.47-.14.47-.38-.02-.39-.25-.44h0Z"
              />
              <path
                id="guancia-2-5"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M48.86 198.87c.15.02.36.06.29.46-.07.41-.24.3-.39.3s-.24-.22-.26-.37c-.02-.16.2-.41.37-.39Z"
              />
              <path
                id="bocca-10"
                fill="none"
                stroke="#111428"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".23"
                d="M50.61 199.61s.18.24.39.23"
              />
              <circle cx="49.05" cy="197.71" r=".54" fill="#fff" />
              <circle cx="52.84" cy="197.71" r=".54" fill="#fff" />
              <circle
                id="occhio_dex-5"
                cx="48.82"
                cy="197.59"
                r=".15"
                fill="#111428"
              />
              <circle
                id="occhio_six-5"
                cx="52.62"
                cy="197.59"
                r=".15"
                fill="#111428"
              />
              <path
                id="palpebre-6"
                fill="#f8cede"
                d="M48.22 197.12h1.74v.4h-1.74v-.4Zm3.99 0h1.74v.4h-1.74v-.4Z"
              />
              <path
                id="sopracciglio_six-5"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M49.15 196.49s-.24-.24-.41.07"
              />
              <path
                id="sopracciglio_dex-5"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M52.65 196.81s.24-.23.41.07"
              />
            </g>
          </g>
        </g>
      </g>
      <g id="q3">
        <circle cx="215.55" cy="181.89" r="9.23" fill="#befcdf" />
        <path fill="none" d="M196.99 168.28h38.25v44.65h-38.25v-44.65Z" />
        <ellipse
          cx="215.59"
          cy="191.66"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo-11">
          <g id="braccio-six-basso-9">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M220.14 188.17c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M220.14 188.17c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M220.14 188.17c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M220.14 188.17c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M219.83 188.12h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso-9">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M213.74 182.92s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M213.74 182.92s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M213.74 182.92s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M213.74 182.92s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M211.77 188.19h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-17"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M213.76 187.49v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M213.75 187.47v2.89"
            />
          </g>
          <g
            id="gamba_six-17"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M217.49 187.59v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M217.48 187.57v2.89"
            />
          </g>
          <g id="Corpo-17">
            <path
              fill="#009488"
              d="M217.93 181.53s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M217.82 185.92v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M215.58 184.96c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="faccia-e-cappello-3">
            <g id="cappello-17">
              <path
                fill="#002764"
                d="M222.39 176.36c-.66-.14-.99.55-.93.73s.12.63.53.63c.41 0 .85-.23.85-.63s-.03-.64-.45-.73Z"
              />
              <path
                fill="#009488"
                d="M212.16 177.59s.26-4.35 2.07-5.42c1.81-1.08 2.72-1.29 3.78-1.29s2.88 1.03 3.51 1.92c.63.89.75 3.4.63 3.56s-.79-2.96-2.09-3c-1.3-.04-1.46 1.19-1.54 1.52-.08.33-.19 2.27-.19 2.27l-6.16.45Z"
              />
              <path
                fill="#002764"
                d="M212.14 177.59s.12-2.09.74-3.63c0 0 1.02 2.83 1.15 3.3 0 0 1.2-3.57 1.37-3.77.17-.2 1.39 3.6 1.39 3.6s1.98-3.24 2.1-3.31c.12-.08-.24 3.35-.24 3.34s-6.52.47-6.52.47Z"
              />
            </g>
            <path
              fill="#f8cede"
              d="M212.18 177.59c-.02 1.29-.43 4.34 1.56 5.33 1.6.59 3.19.4 4.14-.73 1.02-1.31.92-3.87.82-5.07-.04-.19-2.33.02-3.26.06-.92.04-3.14.19-3.26.41Z"
            />
            <g id="orecchio_dex-28">
              <path
                fill="#f8cede"
                d="M218.64 180.12s.14-1.57.72-2.35c.28-.42.62-.79 1.02-1.11 0 0 .16 1.08-.55 2.19s-1.19 1.28-1.19 1.28Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="m218.72 179.61.78-1.22"
              />
            </g>
            <g id="orecchio_dex-29">
              <path
                fill="#f8cede"
                d="M210.31 177.85s.74.26 1.29 1.26.55.98.74 1.65c0 0-1.12-.55-1.6-1.46-.46-.89-.43-1.45-.43-1.45Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="m212.09 180.2-1.08-1.01"
              />
            </g>
            <g id="facce-13">
              <g
                id="sopracciglia-2-3"
                fill="none"
                stroke="#111428"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
              >
                <path d="M213.2 178.28s.15-.22.4-.05M217.02 178.12s.24-.15.41.04" />
              </g>
              <g
                id="sopracciglia-2"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
              >
                <path d="M217.29 178.11s.27.11.35.22M213.2 178.28s.26-.12.4-.11" />
              </g>
              <path
                id="bocca-11"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="M215.56 181.03s0 .29-.2.31-.38-.23-.38-.23"
              />
              <circle cx="213.43" cy="179.23" r=".54" fill="#fff" />
              <circle cx="217.23" cy="179.23" r=".54" fill="#fff" />
              <circle
                id="occhio-dex-7"
                cx="213.46"
                cy="179.22"
                r=".15"
                fill="#11142a"
              />
              <circle
                id="occhio-six-7"
                cx="217.26"
                cy="179.22"
                r=".15"
                fill="#11142a"
              />
              <path
                fill="#f8cede"
                d="M213.48 180.95c.29 0 .53-.25.53-.55s-.24-.55-.53-.55-.53.25-.53.55c-.01.29.22.53.51.55h.02Zm3.78 0c.29 0 .53-.25.53-.55s-.24-.55-.53-.55-.53.25-.53.55c-.01.29.22.53.51.55h.02Z"
              />
              <path
                id="Guancia-17"
                fill="#f05"
                stroke="#f05"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M217.73 180.2c-.37-.08-.55.33-.51.43s.07.38.29.38c.23 0 .47-.14.47-.38s-.02-.38-.25-.43Z"
              />
              <path
                id="Guancia-18"
                fill="#f05"
                stroke="#f05"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M213.24 180.38c.14.02.35.06.28.45-.07.41-.24.3-.38.3s-.24-.22-.26-.37c-.02-.15.19-.41.36-.38h0Z"
              />
              <path
                id="Naso-14"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="M215.08 179.71s.03.33.18.33.18-.33.18-.39"
              />
            </g>
          </g>
        </g>
        <path
          id="Scarpa_dex-17"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m213.96 190.38-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-17"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m217.29 190.45.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39h-.29v-1.02Z"
        />
      </g>
      <g id="q7">
        <circle cx="147.39" cy="162.87" r="9.23" fill="#befcdf" />
        <path fill="none" d="M128.83 149.26h38.25v44.65h-38.25v-44.65Z" />
        <ellipse
          cx="146.97"
          cy="171.87"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo-12">
          <g id="braccio-six-basso-10">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M151.51 168.37c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M151.51 168.37c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M151.51 168.37c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M151.51 168.37c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M151.2 168.32h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso-10">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M145.12 163.12s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M145.12 163.12s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M145.12 163.12s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M145.12 163.12s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M143.15 168.39h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-18"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M145.14 167.69v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M145.13 167.67v2.89"
            />
          </g>
          <g
            id="gamba_six-18"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M148.86 167.79v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M148.86 167.78v2.89"
            />
          </g>
          <g id="Corpo-18">
            <path
              fill="#009488"
              d="M149.3 161.73s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M149.2 166.12v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M146.95 165.17c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="faccia-e-cappello-4">
            <g id="cappello-18">
              <path
                fill="#002764"
                d="M153.77 156.56c-.66-.14-.99.55-.93.73s.12.63.53.63c.41 0 .85-.23.85-.63s-.03-.64-.45-.73Z"
              />
              <path
                fill="#009488"
                d="M143.54 157.79s.26-4.35 2.07-5.42c1.81-1.08 2.72-1.29 3.78-1.29s2.88 1.03 3.51 1.92c.63.89.75 3.4.63 3.56s-.79-2.96-2.09-3c-1.3-.04-1.46 1.19-1.54 1.52-.08.33-.19 2.27-.19 2.27l-6.16.45Z"
              />
              <path
                fill="#002764"
                d="M143.52 157.79s.12-2.09.74-3.63c0 0 1.02 2.83 1.15 3.3 0 0 1.2-3.57 1.37-3.77.17-.2 1.39 3.6 1.39 3.6s1.98-3.24 2.1-3.31c.12-.08-.24 3.35-.24 3.34s-6.52.47-6.52.47Z"
              />
            </g>
            <path
              fill="#f8cede"
              d="M143.56 157.79c-.02 1.29-.43 4.34 1.56 5.33 1.6.59 3.19.4 4.14-.73 1.02-1.31.92-3.87.82-5.07-.04-.19-2.33.02-3.26.06-.92.04-3.14.19-3.26.41Z"
            />
            <g id="orecchio_dex-30">
              <path
                fill="#f8cede"
                d="M150.02 160.32s.14-1.57.72-2.35c.28-.42.62-.79 1.02-1.11 0 0 .16 1.08-.55 2.19s-1.19 1.28-1.19 1.28Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="m150.1 159.81.78-1.22"
              />
            </g>
            <g id="orecchio_dex-31">
              <path
                fill="#f8cede"
                d="M141.68 158.05s.74.26 1.29 1.26.55.98.74 1.65c0 0-1.12-.55-1.6-1.46-.46-.89-.43-1.45-.43-1.45Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="m143.47 160.41-1.08-1.01"
              />
            </g>
            <g id="facce-14">
              <g
                id="sopracciglia-2-4"
                fill="none"
                stroke="#111428"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
              >
                <path d="M144.58 158.48s.15-.22.4-.05M148.4 158.33s.24-.15.41.04" />
              </g>
              <g
                id="sopracciglia-3"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
              >
                <path d="M148.66 158.31s.27.11.35.22M144.58 158.48s.26-.12.4-.11" />
              </g>
              <path
                id="bocca-12"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="M146.94 161.23s0 .29-.2.31-.38-.23-.38-.23"
              />
              <circle cx="144.81" cy="159.43" r=".54" fill="#fff" />
              <circle cx="148.61" cy="159.43" r=".54" fill="#fff" />
              <circle
                id="occhio-dex-8"
                cx="144.84"
                cy="159.42"
                r=".15"
                fill="#11142a"
              />
              <circle
                id="occhio-six-8"
                cx="148.64"
                cy="159.42"
                r=".15"
                fill="#11142a"
              />
              <path
                fill="#f8cede"
                d="M144.86 161.15c.29 0 .53-.25.53-.55s-.24-.55-.53-.55-.53.25-.53.55c-.01.29.22.53.51.55h.02Zm3.78 0c.29 0 .53-.25.53-.55s-.24-.55-.53-.55-.53.25-.53.55c-.01.29.22.53.51.55h.02Z"
              />
              <path
                id="Guancia-19"
                fill="#f05"
                stroke="#f05"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M149.11 160.4c-.37-.08-.55.33-.51.43s.07.38.29.38c.23 0 .47-.14.47-.38s-.02-.38-.25-.43Z"
              />
              <path
                id="Guancia-20"
                fill="#f05"
                stroke="#f05"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M144.62 160.58c.14.02.35.06.28.45-.07.41-.24.3-.38.3s-.24-.22-.26-.37c-.02-.15.19-.41.36-.38h0Z"
              />
              <path
                id="Naso-15"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".18"
                d="M146.46 159.91s.03.33.18.33.18-.33.18-.39"
              />
            </g>
          </g>
        </g>
        <path
          id="Scarpa_dex-18"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m145.34 170.58-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-18"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m148.67 170.65.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39h-.29v-1.02Z"
        />
      </g>
      <g id="q12">
        <circle cx="170.54" cy="127.55" r="9.23" fill="#befcdf" />
        <path fill="none" d="M151.98 113.94h38.25v44.65h-38.25v-44.65Z" />
        <ellipse
          cx="170.12"
          cy="137.66"
          fill="#c1d1d6"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".18"
          opacity=".5"
          rx="3.84"
          ry=".2"
        />
        <g id="gruppo-13">
          <g id="braccio-six-basso-11">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M174.67 134.17c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M174.67 134.17c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M174.67 134.17c.08-.63.16-2.1-.58-3.7-.6-1.3-1.46-2.1-1.96-2.49"
            />
            <path
              fill="none"
              d="M174.67 134.17c-.12-.04-2.56-.92-3.03-3.29-.28-1.4.29-2.54.49-2.9"
            />
            <path
              fill="#f8cede"
              d="M174.36 134.12h.56s.21.66.07.66-.21-.33-.21-.33.05.52-.09.51-.14-.48-.14-.48-.04.3-.2.28c-.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g id="braccio-dex-basso-11">
            <path
              fill="none"
              stroke="#009488"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M168.28 128.92s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M168.28 128.92s-2.42.72-2.25 5.31" />
            <path
              fill="none"
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              stroke-miterlimit="10"
              stroke-width=".59"
              d="M168.28 128.92s-2.42.72-2.25 5.31"
            />
            <path fill="none" d="M168.28 128.92s1.89 2.79-2.27 5.31" />
            <path
              fill="#f8cede"
              d="M166.31 134.19h-.56s-.21.66-.07.66.21-.33.21-.33-.05.52.09.51.14-.48.14-.48.04.3.2.28c.16-.02 0-.64 0-.64Z"
            />
          </g>
          <g
            id="gamba_dex-19"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M168.29 133.48v2.89" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M168.28 133.47v2.89"
            />
          </g>
          <g
            id="gamba_six-19"
            fill="none"
            stroke-miterlimit="10"
            stroke-width=".59"
          >
            <path stroke="#009488" d="M172.02 133.58v2.9" />
            <path
              stroke="#6cf7c6"
              stroke-dasharray="0 1.29"
              d="M172.01 133.57v2.89"
            />
          </g>
          <g id="Corpo-19">
            <path
              fill="#009488"
              d="M172.46 127.52s-.12 6.36-.12 6.04c0-.01-4.31.16-4.37 0-.07-.16-.04-4.49 0-4.96"
            />
            <path
              fill="#002764"
              stroke="#002764"
              stroke-miterlimit="10"
              stroke-width=".06"
              d="M172.36 131.92v.65l-4.4.12-.02-.63 4.42-.14Z"
            />
            <path
              fill="#002764"
              d="M170.11 130.96c-.26-.06-.39.24-.37.31.02.08.05.27.21.28.16 0 .34-.1.34-.28s-.01-.28-.18-.31Zm0-1.06c-.26-.06-.39.24-.37.31.02.08.05.27.21.28s.34-.1.34-.28c0-.18-.02-.28-.18-.31Z"
            />
          </g>
          <g id="faccia_cliccabile-6">
            <g id="orecchio_dex-32">
              <path
                fill="#f8cede"
                d="M173.16 125.98s.14-1.56.72-2.33c.28-.41.62-.79 1.01-1.1 0 0 .16 1.07-.54 2.17-.7 1.1-1.18 1.27-1.18 1.27Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m173.24 125.47.77-1.21"
              />
            </g>
            <g id="orecchio_dex-33">
              <path
                fill="#f8cede"
                d="M164.89 123.72s.73.26 1.28 1.25c.54.99.54.97.73 1.64 0 0-1.11-.55-1.59-1.45-.47-.89-.43-1.44-.43-1.44Z"
              />
              <path
                fill="none"
                stroke="#de8bb5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="m166.66 126.07-1.07-1"
              />
            </g>
            <g id="cappello-19">
              <path
                fill="#002764"
                d="M176.88 122.25c-.66-.13-.98.55-.92.72s.12.62.53.63.84-.23.84-.63c0-.41-.02-.64-.45-.72Z"
              />
              <path
                fill="#009488"
                d="M166.73 123.46s.26-4.31 2.05-5.38 2.7-1.28 3.75-1.28 2.86 1.03 3.48 1.91.74 3.38.62 3.53-.78-2.94-2.08-2.97-1.45 1.18-1.53 1.5c-.08.33-.19 2.26-.19 2.26l-6.12.44Z"
              />
              <path
                fill="#002764"
                d="M166.71 123.46s.12-2.08.73-3.6c0 0 1.01 2.8 1.14 3.28 0 0 1.19-3.54 1.36-3.74.17-.2 1.38 3.57 1.38 3.57s1.96-3.21 2.08-3.29-.23 3.32-.23 3.31-6.47.47-6.47.47Z"
              />
            </g>
            <path
              fill="#f8cede"
              d="M166.75 123.46c-.02 1.28-.43 4.3 1.55 5.29 1.59.59 3.16.4 4.1-.73 1.01-1.3.91-3.84.81-5.03-.04-.19-2.31.02-3.23.06s-3.12.19-3.24.41Z"
            />
            <g id="facce-15">
              <path
                fill="#f8cede"
                d="M168.04 126.79c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Zm3.75 0c.29 0 .52-.24.52-.54s-.23-.54-.52-.54-.52.24-.52.54c-.01.29.22.53.51.54h.02Z"
              />
              <path
                id="Naso-16"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M169.63 125.58s.03.33.17.33.17-.33.17-.38"
              />
              <path
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M167.67 125.23s.32-.35.72 0m3.01.01s.32-.35.72 0"
              />
              <path
                id="guancia-6"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M172.35 126.08c-.37-.08-.55.34-.52.44.03.1.07.38.3.38s.47-.14.47-.38-.02-.39-.25-.44h0Z"
              />
              <path
                id="guancia-2-6"
                fill="#fd335a"
                stroke="#fd335a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".12"
                d="M167.81 126.26c.15.02.36.06.29.46-.07.41-.24.3-.39.3s-.24-.22-.26-.37c-.02-.16.2-.41.37-.39Z"
              />
              <path
                id="bocca-smile-2"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M169.81 126.99s.18.24.39.23c.21-.01.2-.31.2-.31"
              />
              <circle cx="168" cy="125.1" r=".54" fill="#fff" />
              <circle cx="171.79" cy="125.1" r=".54" fill="#fff" />
              <circle
                id="occhio_dex-6"
                cx="167.77"
                cy="124.98"
                r=".15"
                fill="#111428"
              />
              <circle
                id="occhio_six-6"
                cx="171.57"
                cy="124.98"
                r=".15"
                fill="#111428"
              />
              <path
                id="palpebre-7"
                fill="#f8cede"
                d="M167.16 124.51h1.74v.4h-1.74v-.4Zm3.99 0h1.74v.4h-1.74v-.4Z"
              />
              <path
                id="sopracciglio_six-6"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M168.1 123.88s-.24-.24-.41.07"
              />
              <path
                id="sopracciglio_dex-6"
                fill="none"
                stroke="#11142a"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width=".17"
                d="M171.6 124.2s.24-.23.41.07"
              />
            </g>
          </g>
        </g>
        <path
          id="Scarpa_dex-19"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m168.49 136.38-.46-.03s-.07.61-.36.65-.43-.08-.51-.32c-.08-.24-.06-.43-.21-.43-.18 0-.18.31-.11.58.07.25.32.58.72.58s.61-.39.61-.39l.03.39h.29v-1.02Z"
        />
        <path
          id="Scarpa_six-19"
          fill="#002764"
          stroke="#002764"
          stroke-width=".12"
          d="m171.83 136.45.46-.03s.09.54.36.65c.24.09.42-.08.48-.32.08-.31.06-.46.21-.46.18 0 .22.35.14.61-.07.25-.32.58-.72.58s-.61-.39-.61-.39l-.03.39h-.29v-1.02Z"
        />
      </g>
      <g fill="none" stroke="#009488" stroke-width="1.13">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m533.76 158.49 4.38-5.3 4.17 5.3m-9.12 10.92 4.74-6.75 4.95 5.83"
        />
        <path stroke-miterlimit="11.24" d="m538.14 153.22-.11 25.98" />
      </g>
      <g fill="none" stroke="#009488" stroke-width="1.13">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m550.73 167.61 3.61-5.16 3.15 5.06m-6.75 7.53 3.61-5.06 3.15 4.95m-6.75 7.18 3.61-5.16 3.15 5.06"
        />
        <path stroke-miterlimit="11.24" d="M554.34 162.41V192" />
      </g>
      <g fill="none" stroke="#009488" stroke-width="1.13">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m367.39 239.94 4.28-5.3 4.17 5.3m-9.12 10.89 4.84-6.75 4.95 5.83"
        />
        <path stroke-miterlimit="11.24" d="m371.67 234.64-.11 25.98" />
      </g>
      <g fill="none" stroke="#009488" stroke-width="1.13">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m384.39 249.03 3.5-5.06 3.25 4.95m-6.75 7.67 3.5-5.16 3.25 5.06m-6.75 7.07 3.5-5.06 3.25 4.95"
        />
        <path stroke-miterlimit="11.24" d="M387.86 243.97v29.48" />
      </g>
      <g fill="none" stroke="#009488" stroke-width="1.3">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m53.81 76.58 3.67-6.26 3.41 6.11m-7.07 9.22 3.67-6.26 3.41 6.11m-7.07 8.74 3.67-6.26 3.41 6"
        />
        <path stroke-miterlimit="31.82" d="M57.44 70.33v35.92" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M35.52 92.95 40 86.47l4.37 6.48m-9.55 13.18 5.07-8.15 5.18 7.07"
        />
        <path stroke-miterlimit="31.82" d="m40 86.47-.11 31.59" />
      </g>
      <g opacity=".48">
        <path
          fill="#c1d1d6"
          d="M113.67 87.53c14.48 0 26.18-.3 26.18-.63 0-.37-11.74-.63-26.18-.63s-26.18.3-26.18.63 11.7.63 26.18.63Z"
        />
        <path
          fill="none"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".27"
          d="M113.67 87.53c14.48 0 26.18-.3 26.18-.63 0-.37-11.74-.63-26.18-.63s-26.18.3-26.18.63 11.7.63 26.18.63Z"
        />
      </g>
      <path fill="#f2d1de" d="M106.08 39.2h-9.89v8.37h9.89V39.2Z" />
      <path
        fill="#f5feff"
        d="M101.67 38.05h-5.04c-.52 0-.93.41-.93.93v2.22c0 1.22.89 2.3 2.07 2.41h.26c1.59 0 2.67-1.67 3.96-1.67 1.41 0 2.07 1.15 3.11 1.15h.19c.7-.07 1.22-.74 1.22-1.44v-2.7c0-.52-.41-.93-.93-.93h-3.93v.04Z"
      />
      <path
        fill="#f2d1de"
        d="M137.11 86.53H90.67V65.09l23.48-21.03 22.96 21.03v21.44Z"
      />
      <path
        fill="#fffad8"
        d="M125.08 68.27c.44 0 .44-.7 0-.7s-.44.7 0 .7ZM123.12 82.3c.44 0 .44-.7 0-.7s-.44.7 0 .7ZM131.23 70.71c.44 0 .44-.7 0-.7s-.44.7 0 .7ZM102.86 68.27c.44 0 .44-.7 0-.7s-.44.7 0 .7ZM104.82 82.3c.44 0 .44-.7 0-.7s-.44.7 0 .7ZM96.71 70.71c.44 0 .44-.7 0-.7s-.44.7 0 .7Z"
      />
      <path fill="#ff335a" d="M93.97 67.2h-4.52v19.33h4.52V67.2Z" />
      <path
        fill="#f5feff"
        d="m93.97 71.56-4.52 1.04v1.59l4.52-1.04v-1.59ZM93.97 76.56l-4.52 1.04v1.59l4.52-1.04v-1.59ZM93.97 81.56l-4.52 1.04v1.56l4.52-1.04v-1.56Z"
      />
      <path fill="#ff335a" d="M134.34 86.53h4.52V67.2h-4.52v19.33Z" />
      <path
        fill="#f5feff"
        d="m134.34 71.56 4.52 1.04v1.59l-4.52-1.04v-1.59ZM134.34 76.56l4.52 1.04v1.59l-4.52-1.04v-1.59ZM134.34 81.56l4.52 1.04v1.56l-4.52-1.04v-1.56Z"
      />
      <path
        fill="#1a49c3"
        d="M113.97 65.05h26.44l-6.96-16.11-19.41-2.63-19.41 2.63-6.96 16.11h26.44"
      />
      <path
        fill="#f5feff"
        d="M110.04 46.31H93.82c-1.3 0-2.41.96-2.56 2.3-.19 1.74 0 3.41 1.04 3.85 1.15.48 4.18-2.18 4.18-2.18s.85 1.74 2.59 1.74 3.89-1.56 3.89-1.56 2.18 2.11 4 .96c1.7-1.11 3.07-5.11 3.07-5.11ZM118.3 46.31h16.22c1.3 0 2.41.96 2.56 2.3.19 1.74 0 3.41-1.04 3.85-1.15.48-4.18-2.18-4.18-2.18s-.85 1.74-2.59 1.74-3.89-1.56-3.89-1.56-2.18 2.11-4 .96c-1.74-1.11-3.07-5.11-3.07-5.11Z"
      />
      <path
        fill="#f5feff"
        d="M114.15 46.31c2.18 0 3.74 2.33 5.63 10.37 1.59 6.74 5.55 6.18 5.55 6.18s1.74 4.44 3.15 5.67 2.89-.89 2.89-.89 1.37 2.07 3.07 2.07c1.56 0 2.33-2.37 2.33-2.37s2.63 2.18 3.89 1.81c1.11-.33 1.04-2.56.81-4.15-.11-.96-.93-1.67-1.89-1.67h-7.41c-1.22 0-2.3-.63-2.89-1.7l-7.18-12.78c-5.26-9.33-7.89-8.41-7.89-8.41s-2.63-.93-7.89 8.41l-7.18 12.78c-.59 1.04-1.7 1.7-2.89 1.7h-7.41c-.96 0-1.78.7-1.89 1.67-.22 1.59-.3 3.81.81 4.15 1.26.37 3.89-1.81 3.89-1.81s.78 2.37 2.33 2.37c1.67 0 3.07-2.07 3.07-2.07s1.44 2.11 2.89.89c1.41-1.22 3.15-5.67 3.15-5.67s3.93.56 5.55-6.18c1.74-8.07 3.3-10.37 5.48-10.37Z"
      />
      <path
        fill="#3c5a3d"
        stroke="#3c5a3d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M102.6 77.27s-.48 4.7.41 7.37c0 0-1.33.33-2.67-.96-1.33 1.3-2.67.96-2.67.96.89-2.67.41-7.37.41-7.37h4.52Z"
      />
      <path
        fill="none"
        stroke="#fffad8"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M101.71 83.53c-.22-.11-.48-.26-.74-.52l-.67-.67-.67.67c-.26.26-.52.41-.74.52.3-1.85.26-3.52.19-6.26h2.44c-.07 2.78-.11 4.41.19 6.26h0Z"
      />
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M100.3 80.19c2.52 0 4.52-2.04 4.52-4.52s-2.04-4.52-4.52-4.52-4.52 2.04-4.52 4.52 2.04 4.52 4.52 4.52Z"
      />
      <path
        fill="#f5feff"
        d="M100.3 79.34c2.04 0 3.67-1.63 3.67-3.67S102.34 72 100.3 72s-3.67 1.63-3.67 3.67 1.63 3.67 3.67 3.67Z"
      />
      <path
        fill="none"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M100.3 72.01v7.33M96.64 75.68h7.37"
      />
      <path
        fill="#ff335a"
        d="M100.3 80.08s1.93.89 2.56.89.81-2.7.11-3.15c-.7-.41-2.67 1.07-2.67 1.07s-1.93-1.48-2.67-1.07-.52 3.15.11 3.15c.63.04 2.56-.89 2.56-.89Z"
      />
      <path
        fill="#3c5a3d"
        stroke="#3c5a3d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M125.74 77.27s.48 4.7-.41 7.37c0 0 1.33.33 2.67-.96 1.33 1.3 2.67.96 2.67.96-.89-2.67-.41-7.37-.41-7.37h-4.52Z"
      />
      <path
        fill="none"
        stroke="#fffad8"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M126.6 83.53c.22-.11.48-.26.74-.52l.67-.67.67.67c.26.26.52.41.74.52-.3-1.85-.26-3.52-.19-6.26h-2.44c.07 2.78.15 4.41-.19 6.26h0Z"
      />
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M128 80.19c2.52 0 4.52-2.04 4.52-4.52s-2.04-4.52-4.52-4.52-4.52 2.04-4.52 4.52 2.04 4.52 4.52 4.52Z"
      />
      <path
        fill="#f5feff"
        d="M128 79.34c2.04 0 3.67-1.63 3.67-3.67S130.04 72 128 72s-3.67 1.63-3.67 3.67 1.63 3.67 3.67 3.67Z"
      />
      <path
        fill="none"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M128 72.01v7.33M131.67 75.68h-7.37"
      />
      <path
        fill="#ff335a"
        d="M128 80.08s-1.93.89-2.56.89-.81-2.7-.11-3.15c.74-.41 2.67 1.07 2.67 1.07s1.93-1.48 2.67-1.07.52 3.15-.11 3.15c-.63.04-2.56-.89-2.56-.89Z"
      />
      <path
        fill="#3c5a3d"
        stroke="#3c5a3d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M121.19 86.53h-14.04V71.49c0-2 1.07-3.85 2.85-4.81l4.18-2.3 4.18 2.3c1.74.96 2.85 2.81 2.85 4.81l-.04 15.04h0Z"
      />
      <path
        fill="#f5feff"
        d="m121.38 73.56-7.22-8.7-7.22 8.7-2.78-2.3 8.59-10.37c.33-.41.85-.67 1.41-.67s1.04.26 1.41.67l8.59 10.37-2.78 2.3ZM114.08 77.6c.78-1.63-.15-3.26-.19-3.3-1.26.07-2.37.85-2.85 2-.04-.04 1.93-.19 3.04 1.3Z"
      />
      <path
        fill="#ff335a"
        d="M114.08 77.6c1.81-.07 2.81-1.7 2.81-1.74-.59-.96-1.63-1.59-2.81-1.59h-.19s.96 1.7.19 3.33ZM114.08 77.6c-1.11-1.44-3.04-1.33-3.04-1.33-.19.41-.26.85-.26 1.33 0 .7.22 1.37.59 1.89 0 0 .89-1.7 2.7-1.89Z"
      />
      <path
        fill="#f5feff"
        d="M116.89 75.86s-1 1.67-2.81 1.74c1 1.52 2.93 1.52 2.93 1.52.26-.44.37-.96.37-1.52 0-.63-.19-1.22-.48-1.74ZM114.08 77.6c-1.81.19-2.7 1.89-2.7 1.89.59.85 1.59 1.41 2.7 1.41h.22s-1-1.67-.22-3.3Z"
      />
      <path
        fill="#ff335a"
        d="M114.08 77.6c-.78 1.63.19 3.26.22 3.3 1.19-.07 2.18-.78 2.74-1.78-.07 0-1.96 0-2.96-1.52Z"
      />
      <path
        fill="#f5feff"
        d="M116.49 81.64c-.07-.11-.04-.22.07-.3.07-.07.22-.04.3.07.07.07.04.26-.07.3-.07.07-.22.04-.3-.07ZM118.15 79.97c-.11-.07-.15-.19-.07-.3.04-.11.19-.15.3-.07.11.04.15.19.11.3-.07.11-.22.15-.33.07ZM111.75 81.71c.07-.11.19-.15.3-.07.11.04.15.19.11.3-.04.11-.19.15-.3.11-.11-.07-.15-.22-.11-.33ZM114.04 82.3c0-.11.07-.22.22-.22.11 0 .22.07.22.22 0 .11-.07.22-.22.22-.11 0-.22-.11-.22-.22ZM109.34 77.68c.11 0 .22.07.22.22 0 .11-.07.22-.22.22-.11 0-.22-.07-.22-.22.04-.15.11-.22.22-.22ZM109.97 79.93c.11-.07.26-.04.3.07.07.11.04.22-.07.3s-.26.04-.3-.07c-.07-.11-.04-.26.07-.3ZM111.64 73.53c.07.11.04.22-.07.3-.07.07-.22.04-.3-.07-.07-.07-.04-.26.07-.3s.22 0 .3.07ZM110.01 75.19c.11.07.15.19.07.3-.04.11-.19.15-.3.07s-.15-.19-.11-.3c.07-.11.19-.15.33-.07ZM116.38 73.49c-.07.11-.19.15-.3.07-.11-.04-.15-.19-.11-.3.04-.11.19-.15.3-.11.11.07.15.19.11.33ZM114.12 72.86c0 .11-.07.22-.22.22-.11 0-.22-.07-.22-.22 0-.11.07-.22.22-.22.11.04.22.11.22.22ZM118.78 77.53c-.11 0-.22-.07-.22-.22 0-.11.07-.22.22-.22.11 0 .22.07.22.22 0 .11-.07.22-.22.22ZM118.19 75.27c-.11.07-.26.04-.3-.07-.07-.11-.04-.22.07-.3.11-.07.26-.04.3.07s.04.22-.07.3Z"
      />
      <g opacity=".48">
        <path
          fill="#c1d1d6"
          d="M180.35 62.77c14.48 0 26.18-.3 26.18-.63s-11.74-.63-26.18-.63-26.18.3-26.18.63 11.74.63 26.18.63Z"
        />
        <path
          fill="none"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".27"
          d="M180.35 62.77c14.48 0 26.18-.3 26.18-.63s-11.74-.63-26.18-.63-26.18.3-26.18.63 11.74.63 26.18.63Z"
        />
      </g>
      <path
        fill="#f2d1de"
        d="M199.2 61.92h-37.11V37.07l18.55-11.85 18.55 11.85v24.85Z"
      />
      <path
        fill="#fffad8"
        d="M164.61 43.92c.41 0 .41-.63 0-.63-.44 0-.44.63 0 .63ZM169.87 50.66c.41 0 .41-.63 0-.63s-.41.63 0 .63ZM170.17 59.4c.41 0 .41-.63 0-.63s-.41.63 0 .63ZM173.46 38.07c.41 0 .41-.63 0-.63s-.41.63 0 .63ZM176.79 34.37c.41 0 .41-.63 0-.63-.41-.04-.41.63 0 .63ZM196.68 43.92c.41 0 .41-.63 0-.63-.44 0-.44.63 0 .63ZM191.38 50.66c.41 0 .41-.63 0-.63s-.41.63 0 .63ZM191.09 59.4c.41 0 .41-.63 0-.63s-.41.63 0 .63ZM187.79 38.07c.41 0 .41-.63 0-.63s-.41.63 0 .63ZM184.42 34.37c.41 0 .41-.63 0-.63s-.41.63 0 .63Z"
      />
      <path
        fill="#ff335a"
        d="M162.43 39.88h-2.85v22.26h2.85V39.88ZM199.16 62.14h2.85V39.88h-2.85v22.26Z"
      />
      <path
        fill="#f5feff"
        d="M170.05 43.33c.74-1.48-.15-3-.19-3.04-1.19.07-2.15.78-2.59 1.81 0 0 1.74-.11 2.78 1.22Z"
      />
      <path
        fill="#ff335a"
        d="M170.05 43.33c1.67-.07 2.59-1.56 2.59-1.56-.52-.89-1.48-1.44-2.59-1.44h-.19s.89 1.48.19 3ZM170.05 43.33c-1-1.33-2.78-1.22-2.78-1.22-.15.37-.26.78-.26 1.22 0 .67.22 1.26.56 1.74 0 0 .81-1.56 2.48-1.74Z"
      />
      <path
        fill="#f5feff"
        d="M172.61 41.77s-.93 1.52-2.59 1.56c.93 1.41 2.67 1.41 2.7 1.41.22-.41.33-.89.33-1.41.04-.56-.15-1.11-.44-1.56Z"
      />
      <path
        fill="#f5feff"
        d="M170.05 43.33c-1.67.19-2.44 1.74-2.48 1.74.56.78 1.44 1.3 2.48 1.3h.22s-.96-1.52-.22-3.04Z"
      />
      <path
        fill="#ff335a"
        d="M170.05 43.33c-.7 1.52.19 3 .22 3.04 1.07-.07 2-.7 2.48-1.63-.04 0-1.81 0-2.7-1.41Z"
      />
      <path
        fill="#f5feff"
        d="M191.2 43.33c-.74-1.48.15-3 .19-3.04 1.19.07 2.15.78 2.59 1.81.04 0-1.74-.11-2.78 1.22Z"
      />
      <path
        fill="#ff335a"
        d="M191.2 43.33c-1.67-.07-2.59-1.56-2.59-1.56.52-.89 1.48-1.44 2.59-1.44h.19s-.89 1.48-.19 3ZM191.2 43.33c1-1.33 2.78-1.22 2.78-1.22.15.37.26.78.26 1.22 0 .67-.22 1.26-.56 1.74 0 0-.81-1.56-2.48-1.74Z"
      />
      <path
        fill="#f5feff"
        d="M188.61 41.77s.93 1.52 2.59 1.56c-.93 1.41-2.67 1.41-2.7 1.41-.22-.41-.33-.89-.33-1.41 0-.56.19-1.11.44-1.56Z"
      />
      <path
        fill="#f5feff"
        d="M191.2 43.33c1.67.19 2.44 1.74 2.48 1.74-.56.78-1.44 1.3-2.48 1.3h-.22c.07-.04.96-1.52.22-3.04Z"
      />
      <path
        fill="#ff335a"
        d="M191.2 43.33c.7 1.52-.19 3-.22 3.04-1.07-.07-2-.7-2.48-1.63.07 0 1.81 0 2.7-1.41Z"
      />
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".08"
        d="M185.39 37.29h-9.37v6.85h9.37v-6.85Z"
      />
      <path fill="#f5feff" d="M184.42 38.18h-7.44v5.07h7.44v-5.07Z" />
      <path
        fill="none"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".08"
        d="M180.79 38.18v5.07M177.02 40.74h7.44"
      />
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".08"
        d="M187.94 61.66c.3-.3.44-.7.44-1.15 0-.63-.37-1.22-.93-1.48.56-.26.93-.81.93-1.48s-.37-1.22-.93-1.48c.56-.26.93-.81.93-1.48s-.37-1.22-.93-1.48c.56-.26.93-.81.93-1.48 0-.74-.48-1.37-1.15-1.56.44-.3.74-.81.74-1.37 0-.89-.74-1.67-1.67-1.67-.48 0-.93.22-1.26.56-.22-.67-.85-1.19-1.59-1.19-.59 0-1.11.33-1.41.78-.3-.48-.81-.78-1.41-.78s-1.11.33-1.41.78c-.3-.48-.81-.78-1.41-.78-.74 0-1.37.48-1.59 1.19-.3-.33-.74-.56-1.26-.56-.93 0-1.67.74-1.67 1.67 0 .59.3 1.07.74 1.37-.67.22-1.15.85-1.15 1.56 0 .63.37 1.22.93 1.48-.56.26-.93.81-.93 1.48s.37 1.22.93 1.48c-.56.26-.93.81-.93 1.48s.37 1.22.93 1.48c-.56.26-.93.81-.93 1.48 0 .44.19.85.44 1.15h14.59Z"
      />
      <path
        fill="#f5feff"
        d="M175.42 48.7c0 .19-.15.33-.33.33s-.33-.15-.33-.33.15-.33.33-.33.33.15.33.33ZM177.87 48.62c.19 0 .33-.15.33-.33s-.15-.33-.33-.33-.33.15-.33.33.15.33.33.33ZM181.05 48.29c0 .19-.15.33-.33.33s-.33-.15-.33-.33.15-.33.33-.33.33.15.33.33ZM174.98 51.66c0 .19-.15.33-.33.33s-.33-.15-.33-.33.15-.33.33-.33.33.15.33.33ZM174.98 54.62c0 .19-.15.33-.33.33s-.33-.15-.33-.33.15-.33.33-.33.33.15.33.33ZM174.98 57.55c0 .19-.15.33-.33.33s-.33-.15-.33-.33.15-.33.33-.33.33.15.33.33ZM174.98 60.51c0 .19-.15.33-.33.33s-.33-.15-.33-.33.15-.33.33-.33.33.15.33.33ZM186.02 48.7c0 .19.15.33.33.33s.33-.15.33-.33-.15-.33-.33-.33-.33.15-.33.33ZM183.2 48.29c0 .19.15.33.33.33s.33-.15.33-.33-.15-.33-.33-.33-.33.15-.33.33ZM186.42 51.66c0 .19.15.33.33.33s.33-.15.33-.33-.15-.33-.33-.33-.33.15-.33.33ZM186.42 54.62c0 .19.15.33.33.33s.33-.15.33-.33-.15-.33-.33-.33-.33.15-.33.33ZM186.42 57.55c0 .19.15.33.33.33s.33-.15.33-.33-.15-.33-.33-.33-.33.15-.33.33ZM186.42 60.51c0 .19.15.33.33.33s.33-.15.33-.33-.15-.33-.33-.33-.33.15-.33.33Z"
      />
      <path fill="#009289" d="M185.35 49.7h-9.26v11.96h9.26V49.7Z" />
      <path
        fill="#f5feff"
        d="M180.61 25.96c1.41 0 1.3 3.11 3.18 4.56s3.18.22 3.18.22 1.7 4.33 3.33 5.04 2.93.07 2.93.07 1.37 3.22 3.18 4.44c2.15 1.44 4.04.3 4.04.3.56 1.59 1.48 2.22 2.3 2.33.44.07 1.33-.11 1.33-1.19v-.7c0-.96-.37-1.85-1.07-2.52-1.67-1.63-4.37-4.26-7.74-7.26-9.78-8.7-12.92-9.89-14.74-9.89s-4.96 1.19-14.74 9.89c-3.33 3-6.07 5.63-7.74 7.26-.67.67-1.07 1.56-1.07 2.52v.7c0 1.07.89 1.26 1.33 1.19.81-.11 1.74-.74 2.3-2.33 0 0 1.89 1.19 4.04-.3 1.81-1.22 3.18-4.44 3.18-4.44s1.3.63 2.93-.07c1.63-.7 3.33-5.04 3.33-5.04s1.33 1.22 3.18-.22c2.04-1.44 1.96-4.55 3.33-4.55Z"
      />
      <g opacity=".48">
        <path
          fill="#c1d1d6"
          d="M90.4 119.69c2.67 0 4.81-.07 4.81-.22 0-.11-2.15-.22-4.81-.22s-4.81.07-4.81.22c0 .11 2.15.22 4.81.22Z"
        />
        <path
          fill="none"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".07"
          d="M90.4 119.69c2.67 0 4.81-.07 4.81-.22 0-.11-2.15-.22-4.81-.22s-4.81.07-4.81.22c0 .11 2.15.22 4.81.22Z"
        />
      </g>
      <path
        fill="#f19e53"
        stroke="#f19e53"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".07"
        d="M93.62 118.69c-.26.04-1.26-.04-3.37-1.89-.67.96-1.89 2.56-2.81 2.67-.22.04-.44-.04-.59-.15-.81-.56-.78-3.59-.59-6.3-.81 0-1.96-.11-2.3-.78-.07-.15-.11-.37-.04-.63.19-.59 1.15-1.19 1.89-1.59-.59-.67-1-1.52-1.11-2.41-.3-2.41 1.41-4.59 3.81-4.89 2.41-.3 4.59 1.41 4.89 3.81.11.93-.07 1.81-.48 2.59.81.22 1.89.59 2.22 1.07.15.26.15.48.11.59-.15.74-1.22 1.11-2.04 1.3.85 2.56 1.63 5.52.96 6.26-.15.22-.37.3-.56.33h0Z"
      />
      <path
        fill="none"
        stroke="#fffad8"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".07"
        d="M92.88 112.95s-1.15-.89-1.52-.67c-.41.22-.41 1.63-.41 1.63s-.59-1.3-1.26-1.22-.93 1.52-.93 1.52-.37-1.37-.81-1.48c-.41-.11-1.3 1.04-1.3 1.04M86.66 116.39s.59-.52.89-.56c.3-.04.15 1.33.15 1.33s.78-1.19 1.07-1.07c.26.07.15 1.63.15 1.63M93.62 115.5s-.7-.37-1-.33.15 1.33.15 1.33-1.04-.93-1.3-.78.26 1.59.26 1.59M89.47 110.58s-.81.52-1.11.56-.52-1.19-.22-1.41c.3-.22 1.26.33 1.26.33s.81-.78 1.15-.63c.37.15.41 1.41.11 1.44-.26 0-1.19-.3-1.19-.3h0Z"
      />
      <path
        fill="#f19e53"
        stroke="#fffad8"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".07"
        d="M88.95 110.32c.04.26.26.44.56.41.26-.04.44-.26.41-.56-.04-.26-.26-.44-.56-.41-.26.04-.44.3-.41.56Z"
      />
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".03"
        d="M86.95 106.84c.04.11.11.19.22.19s.15-.07.15-.19c-.04-.11-.11-.19-.22-.19s-.19.07-.15.19ZM90.92 106.47c0 .07-.07.19-.15.19s-.19-.04-.19-.15c0-.07.07-.19.15-.19.11 0 .19.04.19.15Z"
      />
      <path
        fill="none"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".07"
        d="M89.92 107.5s-.22.81-.59.89c-.41.04-.81-.7-.81-.7"
      />
      <path
        fill="none"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".07"
        d="M90.14 115.99s3 2.78 3.63 2.07c.67-.74-1.26-6.3-1.26-6.3s2.07-.33 2.22-1.04-2.63-1.26-2.63-1.26h-.04c.63-.78.96-1.81.81-2.89-.26-2.11-2.18-3.63-4.3-3.37-2.11.26-3.63 2.18-3.37 4.3.15 1.07.7 2 1.52 2.59h-.04s-2.56 1.22-2.26 1.89c.3.63 2.41.44 2.41.44s-.52 5.85.3 6.41c.78.63 3-2.81 3-2.85h0Z"
        opacity=".31"
      />
      <g fill="none" stroke="#009488" stroke-width="1.3">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m110.64 115.51 4.48-6.48 4.37 6.48m-9.55 13.18 5.07-8.15 5.18 7.07"
        />
        <path stroke-miterlimit="31.82" d="m115.12 109.03-.11 31.59" />
      </g>
      <g opacity=".48">
        <path
          fill="#c1d1d6"
          d="M243.02 122.1c13.59 0 24.57-.32 24.57-.67 0-.4-11.02-.67-24.57-.67s-24.57.32-24.57.67 10.98.67 24.57.67Z"
        />
        <path
          fill="none"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".27"
          d="M243.02 122.1c13.59 0 24.57-.32 24.57-.67 0-.4-11.02-.67-24.57-.67s-24.57.32-24.57.67 10.98.67 24.57.67Z"
        />
      </g>
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M263.33 74.53h-10.98v15.76h10.98V74.53Z"
      />
      <path
        fill="#f5feff"
        d="M252.15 74.37c0 .47.04.99.16 1.42.28 1.19.91 2.81 2.25 2.73 1.5-.08 1.82-2.53 2.88-2.53 1.34 0 1.34 4.54 3.24 4.82 1.19.16 1.94-1.34 2.37-2.77.36-1.19.51-2.41.51-3.63v-.04c0-.24-.16-.4-.4-.4h-10.59c-.24 0-.4.2-.43.4Z"
      />
      <path
        fill="#009289"
        d="M259.07 120.87V91.71l-15.69-11.97-15.69 11.97v29.16h31.37Z"
      />
      <path
        fill="#f19e53"
        stroke="#f19e53"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M249.58 98.19c0 .36-.59.63-.67.99s.4.83.28 1.15-.79.4-.95.71c-.16.28.08.91-.12 1.19-.24.28-.87.12-1.15.32-.28.24-.24.87-.51 1.07-.28.16-.83-.2-1.19-.08-.32.12-.51.75-.83.83s-.71-.47-1.07-.47-.75.55-1.07.47c-.36-.08-.51-.71-.83-.83-.32-.12-.87.24-1.19.08-.28-.16-.28-.83-.51-1.07-.28-.24-.91-.08-1.15-.32-.24-.28.04-.87-.12-1.19-.16-.28-.83-.36-.95-.71-.12-.32.36-.79.28-1.15-.08-.32-.67-.63-.67-.99s.59-.63.67-.99-.4-.83-.28-1.15c.12-.32.79-.4.95-.71.16-.28-.08-.91.12-1.19.24-.28.87-.12 1.15-.32.28-.24.24-.87.51-1.07.28-.16.83.2 1.19.08.32-.12.51-.75.83-.83.32-.08.71.47 1.07.47s.75-.55 1.07-.47c.36.08.51.71.83.83s.87-.24 1.19-.08c.28.16.28.83.51 1.07.28.24.91.08 1.15.32.24.28-.04.87.12 1.19.16.28.83.36.95.71.12.32-.36.79-.28 1.15.08.32.67.63.67.99Z"
      />
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M249.58 98.19c0 .36-.59.63-.67.99s.4.83.28 1.15-.79.4-.95.71c-.16.28.08.91-.12 1.19-.24.28-.87.12-1.15.32-.28.24-.24.87-.51 1.07-.28.16-.83-.2-1.19-.08-.32.12-.51.75-.83.83s-.71-.47-1.07-.47-.75.55-1.07.47c-.36-.08-.51-.71-.83-.83-.32-.12-.87.24-1.19.08-.28-.16-.28-.83-.51-1.07-.28-.24-.91-.08-1.15-.32-.24-.28.04-.87-.12-1.19-.16-.28-.83-.36-.95-.71-.12-.32.36-.79.28-1.15-.08-.32-.67-.63-.67-.99s.59-.63.67-.99-.4-.83-.28-1.15c.12-.32.79-.4.95-.71.16-.28-.08-.91.12-1.19.24-.28.87-.12 1.15-.32.28-.24.24-.87.51-1.07.28-.16.83.2 1.19.08.32-.12.51-.75.83-.83.32-.08.71.47 1.07.47s.75-.55 1.07-.47c.36.08.51.71.83.83s.87-.24 1.19-.08c.28.16.28.83.51 1.07.28.24.91.08 1.15.32.24.28-.04.87.12 1.19.16.28.83.36.95.71.12.32-.36.79-.28 1.15.08.32.67.63.67.99Z"
      />
      <path
        fill="#f5feff"
        d="M243.38 102.62c2.45 0 4.43-1.98 4.43-4.43s-1.98-4.43-4.43-4.43-4.43 1.98-4.43 4.43 2.01 4.43 4.43 4.43Z"
      />
      <path
        fill="none"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".4"
        d="M243.38 93.71v8.96M238.95 98.19h8.81"
      />
      <path
        fill="#f2d1de"
        d="M235.64 120.83c-.55-.36-.91-.99-.91-1.66 0-.79.43-1.46 1.07-1.78-.47-.36-.79-.95-.79-1.62 0-.95.67-1.78 1.58-1.98-.32-.36-.51-.83-.51-1.34 0-1.11.91-2.01 2.01-2.01.08 0 .2 0 .28.04-.08-.24-.12-.47-.12-.71 0-1.11.91-2.01 2.05-2.01.43 0 .87.16 1.22.4.28-.75 1.03-1.3 1.9-1.3s1.58.51 1.9 1.26c.36-.24.75-.4 1.22-.4 1.11 0 2.05.91 2.05 2.01 0 .24-.04.47-.12.71.08 0 .2-.04.28-.04 1.11 0 2.05.91 2.05 2.01 0 .51-.2.99-.51 1.34.91.2 1.58 1.03 1.58 1.98 0 .67-.32 1.26-.79 1.62.63.36 1.07 1.03 1.07 1.78 0 .71-.4 1.34-.95 1.7h-15.57Z"
      />
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".09"
        d="M240.18 109.97c.24 0 .43-.2.43-.43s-.2-.43-.43-.43-.43.2-.43.43.2.43.43.43ZM246.19 109.57c0 .24.2.43.43.43s.43-.2.43-.43-.2-.43-.43-.43-.43.2-.43.43ZM238.4 112.34c0 .24-.2.43-.43.43s-.43-.2-.43-.43.2-.43.43-.43c.24.04.43.2.43.43ZM237.37 115.77c0 .24-.2.43-.43.43s-.43-.2-.43-.43.2-.43.43-.43c.24 0 .43.2.43.43ZM237.02 119.17c0 .24-.2.43-.43.43s-.43-.2-.43-.43.2-.43.43-.43.43.2.43.43ZM248.4 112.34c0 .24.2.43.43.43s.43-.2.43-.43-.2-.43-.43-.43c-.28.04-.43.2-.43.43ZM249.42 115.77c0 .24.2.43.43.43s.43-.2.43-.43-.2-.43-.43-.43c-.24 0-.43.2-.43.43ZM249.74 119.17c0 .24.2.43.43.43s.43-.2.43-.43-.2-.43-.43-.43-.43.2-.43.43ZM243.81 108.66c0 .24-.2.43-.43.43s-.43-.2-.43-.43.2-.43.43-.43c.24.04.43.2.43.43ZM248.4 120.87c.28-10.86-5.02-10.23-5.02-10.23s-5.29-.63-5.02 10.23h10.04Z"
      />
      <path fill="#f5feff" d="M225.17 120.87h5.1V96.1h-5.1v24.77Z" />
      <path
        fill="#ff335a"
        d="m225.17 104.08 5.1 1.15v1.78l-5.1-1.15v-1.78ZM225.17 109.73l5.1 1.15v1.78l-5.1-1.15v-1.78ZM225.17 115.34l5.1 1.15v1.78l-5.1-1.15v-1.78Z"
      />
      <path fill="#f5feff" d="M261.63 96.1h-5.1v24.77h5.1V96.1Z" />
      <path
        fill="#ff335a"
        d="m261.63 104.08-5.06 1.15v1.78l5.06-1.15v-1.78ZM261.63 109.73l-5.06 1.15v1.78l5.06-1.15v-1.78ZM261.63 115.34l-5.06 1.15v1.78l5.06-1.15v-1.78Z"
      />
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".08"
        d="M268.9 96.85c.75-.63.71-1.62-.04-2.21-1.86-1.46-5.29-4.15-9.01-6.84-11.22-8.22-14.1-8.89-16.48-8.89s-5.25.67-16.48 8.89c-3.71 2.73-7.15 5.41-9.01 6.84-.75.59-.79 1.62-.04 2.21l5.81 4.98c7.11-5.73 16.12-12.25 19.68-14.1 3.6 1.86 12.56 8.38 19.68 14.1l5.89-4.98h0Z"
      />
      <path
        fill="#f5feff"
        d="M217.74 96.85c-.95-.47-1.07-1.58-.28-2.21 1.9-1.5 5.37-4.19 9.13-6.95 11.46-8.38 14.42-9.09 16.83-9.09s5.37.67 16.83 9.09c3.75 2.73 7.19 5.41 9.13 6.95.79.63.67 1.7-.28 2.21-2.21 1.11-5.77 2.45-6.44-.08-.36-1.66.43-3.36-.71-3.99-1.22-.67-3 .95-4.94.08-1.94-.83-.59-4.66-2.25-5.81-1.46-1.03-4.62 1.58-6.44.63-1.82-.91-2.49-4.7-4.86-4.7s-3.04 3.79-4.86 4.7c-1.82.91-4.98-1.66-6.44-.63-1.7 1.15-.36 4.98-2.25 5.81-1.94.83-3.67-.79-4.94-.08-1.15.63-.4 2.33-.71 3.99-.67 2.53-4.23 1.19-6.44.08h-.08Z"
      />
      <g fill="none" stroke="#009488" stroke-width="1.38">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m285.5 92.19 3.91-6.68 3.52 6.52m-7.43 9.84 3.91-6.68 3.52 6.52m-7.43 9.21 3.91-6.68 3.52 6.52"
        />
        <path stroke-miterlimit="31.82" d="M289.41 85.55v38.21" />
      </g>
      <g opacity=".48">
        <path
          fill="#c1d1d6"
          d="M427.1 275.06c14.53 0 26.34-.28 26.34-.63s-11.81-.63-26.34-.63-26.34.28-26.34.63 11.81.63 26.34.63Z"
        />
        <path
          fill="none"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".27"
          d="M427.1 275.06c14.53 0 26.34-.28 26.34-.63s-11.81-.63-26.34-.63-26.34.28-26.34.63 11.81.63 26.34.63Z"
        />
      </g>
      <path
        fill="#f2d1de"
        d="M446.01 274.23h-37.32v-24.96l18.68-11.93 18.64 11.93v24.96Z"
      />
      <path
        fill="#fffad8"
        d="M411.26 256.11c.39 0 .39-.63 0-.63-.43 0-.43.63 0 .63ZM416.55 262.9c.39 0 .39-.63 0-.63-.39-.04-.39.63 0 .63ZM416.87 271.67c.39 0 .39-.63 0-.63s-.39.63 0 .63ZM420.15 250.23c.39 0 .39-.63 0-.63s-.39.63 0 .63ZM423.54 246.51c.39 0 .39-.63 0-.63s-.39.63 0 .63ZM443.48 256.11c.39 0 .39-.63 0-.63s-.39.63 0 .63ZM438.19 262.9c.39 0 .39-.63 0-.63s-.39.63 0 .63ZM437.88 271.67c.39 0 .39-.63 0-.63s-.39.63 0 .63ZM434.6 250.23c.39 0 .39-.63 0-.63s-.39.63 0 .63ZM431.2 246.51c.39 0 .39-.63 0-.63-.39-.04-.39.63 0 .63Z"
      />
      <path
        fill="#ff335a"
        d="M409.09 252.04h-2.88v22.39h2.88v-22.39ZM446.01 274.43h2.88v-22.39h-2.88v22.39Z"
      />
      <path
        fill="#f5feff"
        d="M416.71 255.52c.71-1.5-.16-3-.16-3.04-1.18.08-2.17.79-2.61 1.82 0 0 1.78-.12 2.76 1.22Z"
      />
      <path
        fill="#ff335a"
        d="M416.71 255.52c1.66-.08 2.57-1.54 2.61-1.58-.55-.87-1.5-1.46-2.61-1.46h-.16s.91 1.54.16 3.04Z"
      />
      <path
        fill="#ff335a"
        d="M416.71 255.52c-1.03-1.34-2.76-1.22-2.8-1.22-.16.36-.28.79-.28 1.22 0 .63.2 1.26.55 1.74.04 0 .87-1.58 2.53-1.74Z"
      />
      <path
        fill="#f5feff"
        d="M419.32 253.94s-.95 1.5-2.61 1.58c.91 1.42 2.69 1.38 2.72 1.38.24-.43.36-.91.36-1.38 0-.55-.16-1.11-.47-1.58ZM416.71 255.52c-1.66.16-2.49 1.74-2.49 1.74.55.79 1.46 1.3 2.49 1.3h.2s-.91-1.54-.2-3.04Z"
      />
      <path
        fill="#ff335a"
        d="M416.71 255.52c-.71 1.5.2 3 .2 3.04 1.11-.08 2.01-.71 2.49-1.62 0 0-1.74 0-2.69-1.42Z"
      />
      <path
        fill="#f5feff"
        d="M438 255.52c-.71-1.5.16-3 .16-3.04 1.18.08 2.17.79 2.61 1.82.04 0-1.74-.12-2.76 1.22Z"
      />
      <path
        fill="#ff335a"
        d="M438 255.52c-1.66-.08-2.57-1.54-2.61-1.58.55-.87 1.5-1.46 2.61-1.46h.16s-.87 1.54-.16 3.04Z"
      />
      <path
        fill="#ff335a"
        d="M438 255.52c1.03-1.34 2.76-1.22 2.8-1.22.16.36.28.79.28 1.22 0 .63-.2 1.26-.55 1.74-.04 0-.83-1.58-2.53-1.74Z"
      />
      <path
        fill="#f5feff"
        d="M435.43 253.94s.95 1.5 2.61 1.58c-.91 1.42-2.69 1.38-2.72 1.38-.24-.43-.36-.91-.36-1.38 0-.55.16-1.11.47-1.58Z"
      />
      <path
        fill="#f5feff"
        d="M438 255.52c1.66.16 2.49 1.74 2.49 1.74-.55.79-1.46 1.3-2.49 1.3h-.2s.91-1.54.2-3.04Z"
      />
      <path
        fill="#ff335a"
        d="M438 255.52c.71 1.5-.2 3-.2 3.04-1.11-.08-2.01-.71-2.49-1.62 0 0 1.78 0 2.69-1.42Z"
      />
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".08"
        d="M432.15 249.48h-9.4v6.87h9.4v-6.87Z"
      />
      <path fill="#f5feff" d="M431.2 250.34h-7.46v5.13h7.46v-5.13Z" />
      <path
        fill="none"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".08"
        d="M427.53 250.34v5.13M423.74 252.91h7.46"
      />
      <path
        fill="#462b0d"
        stroke="#462b0d"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".08"
        d="M434.76 273.96c.28-.28.47-.71.47-1.15 0-.63-.39-1.22-.91-1.5.55-.28.91-.83.91-1.5 0-.63-.39-1.22-.91-1.5.55-.28.91-.83.91-1.5 0-.63-.39-1.22-.91-1.5.55-.28.91-.83.91-1.5 0-.75-.47-1.38-1.15-1.58.43-.28.75-.79.75-1.38 0-.91-.75-1.66-1.66-1.66-.47 0-.95.24-1.22.55-.2-.67-.83-1.18-1.58-1.18-.59 0-1.15.32-1.42.79-.28-.47-.83-.79-1.42-.79s-1.15.32-1.42.79c-.28-.47-.83-.79-1.42-.79-.75 0-1.38.51-1.58 1.18-.32-.36-.75-.55-1.22-.55-.91 0-1.66.75-1.66 1.66 0 .59.28 1.11.75 1.38-.67.2-1.15.83-1.15 1.58 0 .63.39 1.22.91 1.5-.55.28-.91.83-.91 1.5 0 .63.39 1.22.91 1.5-.55.28-.91.83-.91 1.5 0 .63.39 1.22.91 1.5-.55.28-.91.83-.91 1.5 0 .43.16.87.47 1.15h14.45Z"
      />
      <path
        fill="#f5feff"
        d="M422.12 260.93c0 .2-.16.36-.36.36s-.36-.16-.36-.36.16-.36.36-.36c.2.04.36.16.36.36ZM424.61 260.85c.2 0 .36-.16.36-.36s-.16-.36-.36-.36-.36.16-.36.36c.04.2.16.36.36.36ZM427.81 260.49c0 .2-.16.36-.36.36s-.36-.16-.36-.36.16-.36.36-.36c.2.04.36.16.36.36ZM421.69 263.89c0 .2-.16.36-.36.36s-.36-.16-.36-.36.16-.36.36-.36c.2.04.36.16.36.36ZM421.69 266.85c0 .2-.16.36-.36.36s-.36-.16-.36-.36.16-.36.36-.36c.2.04.36.16.36.36ZM421.69 269.85c0 .2-.16.36-.36.36s-.36-.16-.36-.36.16-.36.36-.36.36.16.36.36ZM421.69 272.81c0 .2-.16.36-.36.36s-.36-.16-.36-.36.16-.36.36-.36.36.16.36.36ZM432.78 260.93c0 .2.16.36.36.36s.36-.16.36-.36-.16-.36-.36-.36c-.2.04-.36.16-.36.36ZM429.94 260.49c0 .2.16.36.36.36s.36-.16.36-.36-.16-.36-.36-.36c-.2.04-.36.16-.36.36ZM433.18 263.89c0 .2.16.36.36.36s.36-.16.36-.36-.16-.36-.36-.36c-.2.04-.36.16-.36.36ZM433.18 266.85c0 .2.16.36.36.36s.36-.16.36-.36-.16-.36-.36-.36c-.2.04-.36.16-.36.36ZM433.18 269.85c0 .2.16.36.36.36s.36-.16.36-.36-.16-.36-.36-.36-.36.16-.36.36ZM433.18 272.81c0 .2.16.36.36.36s.36-.16.36-.36-.16-.36-.36-.36-.36.16-.36.36Z"
      />
      <path fill="#009289" d="M432.11 261.95h-9.32v12.04h9.32v-12.04Z" />
      <path
        fill="#f5feff"
        d="M427.37 238.06c1.38 0 1.3 3.12 3.2 4.58 1.9 1.46 3.2.24 3.2.24s1.7 4.34 3.36 5.09c1.66.71 2.96.08 2.96.08s1.38 3.24 3.2 4.46c2.17 1.46 4.07.28 4.07.28.55 1.62 1.5 2.21 2.29 2.33.43.08 1.34-.12 1.34-1.18v-.71c0-.95-.39-1.86-1.07-2.53-1.66-1.66-4.38-4.3-7.78-7.31-9.83-8.77-12.99-9.95-14.81-9.95s-4.98 1.18-14.81 9.95c-3.36 3-6.12 5.65-7.78 7.31-.67.67-1.07 1.58-1.07 2.53v.71c0 1.11.91 1.26 1.34 1.18.83-.12 1.74-.75 2.29-2.33 0 0 1.9 1.18 4.07-.28 1.82-1.22 3.2-4.46 3.2-4.46s1.3.63 2.96-.08 3.36-5.09 3.36-5.09 1.34 1.22 3.2-.24c1.93-1.46 1.86-4.58 3.28-4.58Z"
      />
      <path
        fill="#f2d1de"
        d="M515.55 224.65h44.25c.76 0 1.43.63 1.43 1.43v24.51h-47.1v-24.54c0-.76.63-1.39 1.43-1.39Z"
      />
      <path
        fill="#d69252"
        d="M560.7 242.41c-1.56 0-1.36 3.68-3.09 3.68s-2.02-2.85-3.06-2.85-1.32 1.77-2.78 1.77c-1.98 0-2.02-2.71-3.37-2.71s-1.46 4.45-3.09 4.45-.83-4.07-2.26-4.07h-10.71c-1.43 0-1.36 4.31-2.99 4.31s-.83-4.73-2.68-4.73c-1.36 0-1.49 3.13-2.92 3.13s-1.63-1.81-2.68-1.81-1.08 2.47-2.82 2.47-.59-4.62-2.75-4.62c-.66 0-1.11.38-1.43.94v7.93h47.06v-7.79c-.1-.03-.24-.1-.45-.1Z"
        opacity=".6"
      />
      <path
        fill="#512515"
        d="M560.7 242.65c-1.56 0-1.36 3.68-3.09 3.68s-2.02-2.85-3.06-2.85-1.32 1.77-2.78 1.77c-1.98 0-2.02-2.71-3.37-2.71s-1.46 4.45-3.09 4.45-.83-4.07-2.26-4.07h-10.71c-1.43 0-1.36 4.31-2.99 4.31s-.83-4.73-2.68-4.73c-1.36 0-1.49 3.13-2.92 3.13s-1.63-1.81-2.68-1.81-1.08 2.47-2.82 2.47-.59-4.62-2.75-4.62c-.66 0-1.11.38-1.43.94v7.96h47.06v-7.79c-.1-.1-.24-.17-.45-.14Z"
      />
      <g fill="#512515" opacity=".4">
        <path d="M551.77 245.61c1.46 0 1.74-2.12 2.78-2.12-1.04 0-1.36 1.77-2.78 1.77-1.98 0-2.02-2.71-3.37-2.71 1.36 0 1.39 3.06 3.37 3.06Z" />
        <path d="M529.38 247.59c1.63 0 1.56-4.31 2.99-4.31h10.71c1.43 0 .59 4.07 2.26 4.07s1.77-4.8 3.09-4.8c-1.36 0-1.46 4.45-3.09 4.45s-.83-4.07-2.26-4.07h-10.71c-1.43 0-1.36 4.31-2.99 4.31s-.83-4.73-2.68-4.73c1.84.03 1.01 5.07 2.68 5.07ZM557.64 246.65c1.56 0 1.56-3.27 2.68-3.93-1.11.59-1.11 3.58-2.68 3.58-1.74 0-2.02-2.85-3.06-2.85 1.01 0 1.32 3.2 3.06 3.2ZM518.29 246.34c-1.22 0-1.01-2.33-1.56-3.68.56 1.46.35 4.03 1.56 4.03 1.74 0 1.77-2.82 2.82-2.82-1.04 0-1.08 2.47-2.82 2.47ZM523.79 246.03c1.46 0 1.6-3.48 2.92-3.48-1.36 0-1.49 3.13-2.92 3.13s-1.63-1.81-2.68-1.81c1.04 0 1.22 2.16 2.68 2.16Z" />
      </g>
      <path
        fill="#512515"
        d="M551.77 229.79c-2.64 0-4.8 2.16-4.8 4.8v5.49c0 .66.56 1.18 1.18 1.18h7.2c.66 0 1.18-.56 1.18-1.18v-5.49c.03-2.64-2.12-4.8-4.76-4.8Z"
      />
      <path
        fill="#f5feff"
        d="M551.77 229.41c-2.85 0-5.18 2.33-5.18 5.18v5.49c0 .87.7 1.6 1.6 1.6h7.2c.9 0 1.6-.7 1.6-1.6v-5.49c0-2.85-2.33-5.18-5.21-5.18Zm4.38 4.8h-4v-3.96c2.12.17 3.82 1.88 4 3.96Zm-4.76-3.96v3.96h-4c.21-2.09 1.88-3.79 4-3.96Zm-4 9.87v-5.11h4v5.91h-3.2c-.45 0-.8-.35-.8-.8Zm7.99.8h-3.2v-5.91h4v5.11c0 .45-.38.8-.8.8Z"
      />
      <path
        fill="#deeef1"
        d="M551.39 234.66h-4v.35h4v-.35ZM552.19 229.86v.35c1.98.17 3.58 1.67 3.93 3.62l.07.35c-.03-2.36-1.88-4.1-4-4.31ZM547.42 234.21l.07-.35c.35-1.95 1.95-3.44 3.93-3.62v-.35c-2.12.17-4 1.91-4 4.31ZM556.18 234.66h-4v.35h4v-.35Z"
        opacity=".5"
      />
      <path
        fill="#d69252"
        d="M550.48 242.38c.42 0 .66-.21.87-.45h-1.7c.17.24.38.45.83.45Z"
        opacity=".4"
      />
      <path
        fill="#a96c39"
        d="M556.56 239.8h-9.59c-.59 0-1.04.45-1.04 1.04s.45 1.04 1.04 1.04h9.59c.59 0 1.04-.45 1.04-1.04.03-.56-.45-1.04-1.04-1.04Z"
      />
      <path
        fill="#a96c39"
        d="M552.85 240.33c1.01 0 .94 1.53 2.09 1.53.66 0 .7-.8 2.19-.8.24 0 .42-.07.52-.21v-.1c0-.24-.1-.49-.28-.66-.07-.03-.17-.03-.24-.03h-10.6c-.1 0-.21.03-.28.07-.14.17-.24.38-.24.63v.21c0 .21.07.42.21.56.07.03.21.07.35.07 1.56 0 1.22-.8 2.09-.8s.94.66 1.18 1.11h1.53c.38-.59.59-1.56 1.49-1.56Z"
        opacity=".5"
      />
      <path
        fill="#deeef1"
        d="M556.67 239.53h-9.77c-.1 0-.21.03-.31.07v.63c.1-.03 10.29-.03 10.39 0v-.63c-.1-.03-.21-.07-.31-.07Z"
        opacity=".5"
      />
      <path
        fill="#f5feff"
        d="M557.09 239.8h-10.6c-.8 0-1.04 1.53 0 1.53 1.56 0 1.22-.56 2.09-.56 1.36 0 .8 1.36 1.95 1.36s1.01-1.81 2.33-1.81c1.01 0 .94 1.29 2.09 1.29.66 0 .7-.52 2.19-.52.83-.03.9-1.25-.03-1.29Z"
      />
      <g fill="#deeef1" opacity=".8">
        <path d="M550.52 241.85c-1.15 0-.59-1.04-1.95-1.04 1.36 0 .8 1.36 1.95 1.36s1.01-1.81 2.33-1.81c-1.29-.03-1.18 1.49-2.33 1.49ZM545.86 240.95c.07.24.28.38.63.38 1.56 0 1.22-.56 2.09-.56-.83 0-.52.38-2.09.38-.31 0-.52-.07-.63-.21ZM552.85 240.33c1.01 0 .94 1.29 2.09 1.29.66 0 .7-.52 2.19-.52-1.49 0-1.53.24-2.19.24-1.15 0-1.08-1.01-2.09-1.01Z" />
      </g>
      <path
        fill="#512515"
        d="M523.54 229.79c-2.64 0-4.8 2.16-4.8 4.8v5.49c0 .66.56 1.18 1.22 1.18h7.2c.66 0 1.22-.56 1.22-1.18v-5.49c-.03-2.64-2.19-4.8-4.83-4.8Z"
      />
      <path
        fill="#f5feff"
        d="M523.54 229.41c-2.85 0-5.18 2.33-5.18 5.18v5.49c0 .87.7 1.6 1.6 1.6h7.2c.9 0 1.6-.7 1.6-1.6v-5.49c0-2.85-2.33-5.18-5.21-5.18Zm4.38 4.8h-3.96v-3.96c2.09.17 3.79 1.88 3.96 3.96Zm-4.76-3.96v3.96h-3.96c.17-2.09 1.84-3.79 3.96-3.96Zm-4 9.87v-5.11h4v5.91h-3.2c-.45 0-.8-.35-.8-.8Zm7.99.8h-3.2v-5.91h4v5.11c0 .45-.38.8-.8.8Z"
      />
      <path
        fill="#deeef1"
        d="M523.16 234.66h-4v.35h4v-.35ZM523.96 229.86v.35c1.98.17 3.58 1.67 3.93 3.62l.07.35c-.03-2.36-1.88-4.1-4-4.31ZM519.2 234.21l.07-.35c.35-1.95 1.95-3.44 3.93-3.62v-.35c-2.12.17-4 1.91-4 4.31ZM527.96 234.66h-4v.35h4v-.35Z"
        opacity=".5"
      />
      <path
        fill="#a96c39"
        d="M528.34 239.8h-9.56c-.59 0-1.04.45-1.04 1.04s.45 1.04 1.04 1.04h9.56c.59 0 1.04-.45 1.04-1.04 0-.56-.45-1.04-1.04-1.04Z"
      />
      <path
        fill="#deeef1"
        d="M528.44 239.53h-9.77c-.1 0-.21.03-.31.07v.63c.1-.03 10.29-.03 10.39 0v-.63c-.1-.03-.21-.07-.31-.07Z"
        opacity=".5"
      />
      <path
        fill="#a96c39"
        d="M528.86 239.98h-10.6c-.8 0-1.04 1.53 0 1.53 1.46 0 1.56-1.04 2.4-1.04.73 0 .87 1.04 1.98 1.04s.87-.87 2.16-.87c1.01 0 1.22 1.11 2.36 1.11.66 0 .63-.59 1.7-.59.83 0 .9-1.18 0-1.18Z"
        opacity=".5"
      />
      <path
        fill="#f5feff"
        d="M528.86 239.8h-10.6c-.8 0-1.04 1.53 0 1.53 1.46 0 1.56-.9 2.4-.9.73 0 .87.87 1.98.87s.87-.7 2.16-.7c1.01 0 1.22.97 2.36.97.66 0 .63-.42 1.7-.42.83.03.9-1.32 0-1.36Z"
      />
      <path
        fill="#deeef1"
        d="M517.56 240.57c-.03.38.17.76.7.76 1.46 0 1.56-.9 2.4-.9-.83 0-.94.66-2.4.66-.45.03-.7-.21-.7-.52ZM520.66 240.46c.7 0 .87.87 1.98.87s.87-.7 2.16-.7c-1.32 0-.97.49-2.16.49-1.18 0-1.29-.66-1.98-.66Z"
      />
      <path
        fill="#deeef1"
        d="M524.79 240.64c1.01 0 1.22.97 2.36.97.66 0 .63-.42 1.7-.42-1.08 0-1.04.17-1.7.17-1.15 0-1.36-.73-2.36-.73Z"
      />
      <path
        fill="#fff"
        d="M530.6 244.6c0-1.11.66-2.05.66-3.41s-.66-2.29-.66-3.41.66-2.26.66-3.41-.9-2.85-.14-3.62l.03-.03c1.01-.87 1.95-.17 3.3-.17s2.09-.73 3.02-.73 1.67.73 3.02.73 2.4-.76 3.3.07c.97.87-.07 2.29-.07 3.79s.97 2.29.97 3.41-.97 1.49-.97 3.41.66 2.29.66 3.41-.7 1.81-.7 3.51 1.56 2.22.14 3.62l-.03.03c-1.01.87-2.99.17-3.3.17-.56 0-2.09.73-3.02.73s-2.47-.73-3.02-.73c-.42 0-2.4.76-3.3-.07-.97-.87.07-2.4.07-3.79s-.63-2.43-.63-3.51Z"
      />
      <path
        fill="#512515"
        d="M532.65 250.93c-.42 0-.73-.42-.59-.8.03-.07.03-.17.03-.31 0-.63-.38-.63-.38-1.22 0-.63.38-.63.38-1.22s-.38-.63-.38-1.22.38-.63.38-1.22c0-.63-.38-.63-.38-1.22s.38-.63.38-1.22-.38-.63-.38-1.22c0-.63.38-.63.38-1.22s-.38-.63-.38-1.22.38-.63.38-1.22c0-.63-.38-.63-.38-1.22s.38-.63.38-1.22-.38-.63-.38-1.22.38-.63.38-1.22c0-.1 0-.24-.03-.35-.07-.38.17-.76.59-.76h.38c.56 0 .56-.24 1.11-.24s.56.24 1.11.24.56-.24 1.11-.24.56.24 1.11.24.56-.24 1.11-.24.56.24 1.11.24.56-.24 1.11-.24.56.24 1.11.24h.38c.42 0 .73.42.59.8-.03.07-.03.17-.03.31 0 .63.38.63.38 1.22s-.38.63-.38 1.22.38.63.38 1.22-.38.63-.38 1.22c0 .63.38.63.38 1.22s-.38.63-.38 1.22.38.63.38 1.22c0 .63-.38.63-.38 1.22s.38.63.38 1.22-.38.63-.38 1.22c0 .63.38.63.38 1.22s-.38.63-.38 1.22.38.63.38 1.22c0 .63-.38.63-.38 1.22 0 .14.03.24.07.31.14.38-.14.8-.56.8h-.42c-.56 0-.56.24-1.11.24s-.56-.24-1.11-.24-.56.24-1.11.24-.56-.24-1.11-.24-.56.24-1.11.24-.56-.24-1.11-.24-.56.24-1.11.24-.56-.24-1.11-.24h-.42Z"
      />
      <g fill="#512515" opacity=".4">
        <path d="M532.06 232.3c.03.1.03.24.03.35 0 .63-.38.63-.38 1.22 0-.63.52-.63.52-1.22 0-.1-.14-.21-.17-.35ZM531.75 233.86c0 .63.38.63.38 1.22s-.38.63-.38 1.22c0-.63.63-.63.63-1.22s-.63-.59-.63-1.22ZM531.75 238.8c0 .63.38.63.38 1.22s-.38.63-.38 1.22c0-.63.63-.63.63-1.22s-.63-.59-.63-1.22ZM531.75 236.33c0 .63.38.63.38 1.22 0 .63-.38.63-.38 1.22 0-.63.63-.63.63-1.22-.03-.59-.63-.59-.63-1.22ZM538.63 231.32c-.56 0-.56.24-1.11.24s-.56-.24-1.11-.24c.56 0 .56.45 1.11.45s.56-.45 1.11-.45ZM542.59 232.64c0 .63.73.63.73 1.22 0-.63-.38-.63-.38-1.22 0-.14.03-.24.03-.31-.07.07-.38.17-.38.31ZM542.59 235.08c0 .63.73.63.73 1.22 0-.63-.38-.63-.38-1.22s.38-.63.38-1.22c-.03.63-.73.63-.73 1.22ZM540.85 231.32c-.56 0-.56.24-1.11.24s-.56-.24-1.11-.24c.56 0 .56.45 1.11.45.56 0 .56-.45 1.11-.45Z" />
        <path d="M531.75 241.23c0 .63.38.63.38 1.22s-.38.63-.38 1.22c0-.63.63-.63.63-1.22s-.63-.59-.63-1.22ZM536.4 231.32c-.56 0-.56.24-1.11.24s-.56-.24-1.11-.24c.56 0 .56.45 1.11.45s.56-.45 1.11-.45ZM542.59 240.01c0 .63.73.63.73 1.22 0-.63-.38-.63-.38-1.22s.38-.63.38-1.22c-.03.59-.73.59-.73 1.22ZM542.59 244.91c0 .63.73.63.73 1.22 0-.63-.38-.63-.38-1.22 0-.63.38-.63.38-1.22-.03.59-.73.59-.73 1.22ZM542.59 242.45c0 .63.73.63.73 1.22 0-.63-.38-.63-.38-1.22s.38-.63.38-1.22c-.03.63-.73.63-.73 1.22ZM542.59 237.54c0 .63.73.63.73 1.22 0-.63-.38-.63-.38-1.22 0-.63.38-.63.38-1.22-.03.59-.73.59-.73 1.22ZM542.59 247.35c0 .63.73.63.73 1.22 0-.63-.38-.63-.38-1.22s.38-.63.38-1.22c-.03.63-.73.63-.73 1.22ZM532.34 249.81c0-.63-.63-.63-.63-1.22 0 .63.38.63.38 1.22 0 .14-.03.24-.03.31.03-.07.28-.17.28-.31ZM531.75 246.13c0 .63.38.63.38 1.22s-.38.63-.38 1.22c0-.63.63-.63.63-1.22s-.63-.59-.63-1.22Z" />
        <path d="M531.75 243.7c0 .63.38.63.38 1.22 0 .63-.38.63-.38 1.22 0-.63.63-.63.63-1.22-.03-.59-.63-.59-.63-1.22ZM542.59 249.81c0 .14.35.24.38.31-.03-.07-.07-.17-.07-.31 0-.63.38-.63.38-1.22 0 .59-.73.59-.7 1.22Z" />
      </g>
      <g fill="#512515" opacity=".8">
        <path d="M534.7 233.89c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.24.52.52ZM538 233.89c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.24.52.52ZM534.7 237.58c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.21.52.52ZM538 237.58c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.21.52.52ZM534.7 241.26c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.21.52.52ZM538 241.26c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.21.52.52ZM534.7 244.95c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.24.52.52ZM538 244.95c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.24.52.52ZM534.7 248.63c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.21.52.52ZM538 248.63c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.21.52.52ZM541.31 233.89c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.24.52.52ZM541.31 237.58c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.21.52.52ZM541.31 241.26c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.21.52.52ZM541.31 244.95c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.24.52.52ZM541.31 248.63c0 .28-.24.52-.52.52s-.52-.24-.52-.52.24-.52.52-.52.52.21.52.52Z" />
      </g>
      <path
        fill="#ccc"
        d="M532.65 250.93c-.42 0-.73-.42-.59-.8.03-.07.03-.17.03-.31 0-.63-.38-.63-.38-1.22 0-.63.21-.63.21-1.22s-.21-.63-.21-1.22.21-.63.21-1.22c0-.63-.21-.63-.21-1.22s.21-.63.21-1.22-.21-.63-.21-1.22c0-.63.21-.63.21-1.22s-.21-.63-.21-1.22.21-.63.21-1.22c0-.63-.21-.63-.21-1.22s.21-.63.21-1.22-.21-.63-.21-1.22.38-.63.38-1.22c0-.1 0-.24-.03-.35-.07-.38.17-.76.59-.76h.38c.56 0 .56-.24 1.11-.24s.56.1 1.11.1.56-.1 1.11-.1.56.1 1.11.1.56-.1 1.11-.1.56.1 1.11.1.56-.1 1.11-.1.56.24 1.11.24h.38c.42 0 .73.42.59.8-.03.07-.03.17-.03.31 0 .63.38.63.38 1.22s-.38.63-.38 1.22.38.63.38 1.22-.38.63-.38 1.22c0 .63.38.63.38 1.22s-.38.63-.38 1.22.38.63.38 1.22c0 .63-.24.63-.24 1.22s.24.63.24 1.22-.24.63-.24 1.22c0 .63.24.63.24 1.22s-.24.63-.24 1.22.24.63.24 1.22c0 .63-.38.63-.38 1.22 0 .14.03.24.07.31.14.38-.14.8-.56.8h-.42c-.56 0-.56.24-1.11.24s-.56-.24-1.11-.24-.56.24-1.11.24-.56-.24-1.11-.24-.56.24-1.11.24-.56-.24-1.11-.24-.56.24-1.11.24-.56-.24-1.11-.24h-.42Z"
        opacity=".5"
      />
      <g fill="#deeef1" opacity=".8">
        <path d="M537.31 229.83c.07 0 .14-.03.21-.03-.07 0-.14 0-.21.03ZM537.52 229.79c.07 0 .14 0 .21.03-.07 0-.14-.03-.21-.03ZM537.73 252.63c-.07 0-.17.03-.24.03.1 0 .17 0 .24-.03ZM537.48 252.67c-.07 0-.14 0-.24-.03.1 0 .21.03.24.03ZM544.71 237.54c0 .07.03.17.03.24-.03-.1-.03-.17-.03-.24ZM530.6 238c.07 1.01.66 1.91.66 3.16s-.59 2.16-.66 3.16c.14-1.01.83-1.91.83-3.16.03-1.25-.7-2.16-.83-3.16ZM531.43 248.08c0-1.29-.7-2.26-.83-3.3.07 1.01.63 2.02.63 3.3 0 1.36-1.04 2.92-.07 3.79-.94-.87.31-2.4.28-3.79Z" />
        <path d="M531.16 251.87c.94.83 2.89.07 3.3.07.52 0 1.88.59 2.82.7-.94-.14-2.26-.97-2.82-.97-.42 0-2.4 1.04-3.3.21ZM531.12 230.77c-.76.76.14 2.5.14 3.62 0 1.04-.56 2.12-.66 3.16.14-1.04.87-2.12.87-3.16 0-1.15-1.11-2.85-.35-3.62ZM540.54 251.66c-.52 0-1.88.87-2.82.97.94-.1 2.26-.7 2.82-.7.35 0 2.29.7 3.3-.17-1.01.87-2.99-.1-3.3-.1ZM543.84 230.59c-.94-.83-1.95-.07-3.3-.07s-1.98-.59-2.82-.7c.83.14 1.56.94 2.82.94 1.39 0 2.4-.97 3.3-.17ZM544.43 244.57c0 1.11-.97 1.81-.97 3.51s1.84 2.22.42 3.62c1.43-1.39-.14-1.91-.14-3.62 0-1.7.7-2.4.7-3.51ZM544.43 244.57c0-1.11-.66-1.49-.66-3.41s.97-2.29.97-3.41c0 1.11-1.25 1.49-1.25 3.41s.94 2.29.94 3.41ZM534.49 230.77c1.25 0 1.98-.8 2.82-.94-.83.1-1.6.7-2.82.7-1.36 0-2.29-.7-3.3.17.97-.87 1.95.03 3.3.07ZM543.5 234.38c0 1.36 1.04 2.16 1.22 3.16-.1-1.01-.94-1.81-.94-3.16 0-1.46 1.04-2.92.07-3.79.97.87-.38 2.29-.35 3.79Z" />
      </g>
      <path
        fill="#f5feff"
        d="M562.2 252.25c-.73-.17-1.22-.94-1.01-1.67l4.21-17.38c.52-2.22 2.78-3.62 5.04-3.09 2.22.56 3.62 2.78 3.09 5.04l-.31 1.18c-.17.73-.94 1.22-1.67 1.01-.73-.17-1.22-.94-1.04-1.67l.31-1.18c.17-.73-.28-1.49-1.01-1.67s-1.49.28-1.67 1.01l-4.21 17.38c-.24.73-1.01 1.18-1.74 1.04Z"
      />
      <path
        fill="#df4356"
        d="M565.36 233.23v-.07c.24-.9.73-1.63 1.39-2.22.35.87 1.22 1.53 1.98 1.98-.24.14-.42.35-.56.59 0 .03-.03.03-.03.07s0 .03-.03.07 0 .03-.03.07 0 .03-.03.07l-.24 1.08c-.73-.24-1.74-.7-2.43-1.63ZM570.68 234.73c.9-.66 1.95-.83 2.89-.97.03.45 0 .9-.1 1.36l-.31 1.18c-.03.07-.03.14-.07.21-.76-.31-1.67-.56-2.61-.17 0-.03-.1-.31 0-.7l.21-.9ZM572.52 231.39c-.49.52-1.36 1.46-1.88 2.12-.17-.35-.49-.59-.87-.7-.59-.87-.35-2.85-.35-2.85.38 0 .97.07 1.63.35 1.01.42 1.46 1.04 1.46 1.08ZM564.73 235.77l-.59 2.5c.83.76 1.81 1.29 2.47 1.63l.59-2.5c-.7-.35-1.63-.83-2.47-1.63ZM561.71 248.25c.83.73 1.77 1.29 2.47 1.63l.59-2.5c-.73-.35-1.63-.87-2.47-1.63l-.59 2.5ZM563.55 240.74l-.59 2.5c.8.8 1.81 1.32 2.47 1.63l.59-2.47c-.7-.35-1.67-.83-2.47-1.67Z"
      />
      <path
        fill="#f5feff"
        d="M513.15 252.25c.73-.17 1.22-.94 1.01-1.67l-4.21-17.38c-.56-2.22-2.78-3.62-5.04-3.09-2.22.56-3.62 2.78-3.09 5.04l.31 1.18c.17.73.94 1.22 1.67 1.01.73-.17 1.22-.94 1.01-1.67l-.31-1.18c-.17-.73.28-1.49 1.04-1.67.73-.17 1.49.28 1.67 1.01l4.21 17.38c.21.73.97 1.18 1.74 1.04Z"
      />
      <path
        fill="#df4356"
        d="M509.99 233.23v-.07c-.21-.9-.73-1.63-1.36-2.22-.35.87-1.22 1.53-1.98 1.98.24.14.42.35.56.59 0 .03.03.03.03.07s0 .03.03.07 0 .03.03.07 0 .03.03.07l.24 1.08c.66-.24 1.67-.7 2.4-1.63ZM504.63 234.73c-.9-.66-1.95-.83-2.89-.97-.03.45 0 .9.1 1.36l.31 1.18c.03.07.03.14.07.21.76-.31 1.67-.56 2.61-.17 0-.03.1-.31 0-.7l-.21-.9ZM502.79 231.39c.49.52 1.36 1.46 1.88 2.12.17-.35.49-.59.87-.7.59-.87.35-2.85.35-2.85-.38 0-.97.07-1.63.35-1.01.42-1.46 1.04-1.46 1.08ZM510.58 235.77l.59 2.5c-.8.76-1.77 1.29-2.47 1.63l-.59-2.5c.73-.35 1.63-.83 2.47-1.63ZM513.6 248.25c-.8.73-1.77 1.29-2.47 1.63l-.59-2.5c.7-.35 1.63-.87 2.47-1.63l.59 2.5ZM511.79 240.74l.59 2.5c-.8.8-1.81 1.32-2.47 1.63l-.59-2.47c.7-.35 1.63-.83 2.47-1.67Z"
      />
      <path
        fill="#ff335a"
        d="M568.31 244.84c1.08 1.29 1.84 2.68 2.36 4.17.24.73-.24 1.49-1.01 1.6-1.56.14-3.13.14-4.69-.07-.76-.1-1.25-.9-.97-1.63.56-1.49 1.39-2.85 2.5-4.1.49-.52 1.36-.49 1.81.03Z"
      />
      <path
        fill="#df4356"
        d="M570.68 249.02c-.49-1.49-1.29-2.89-2.36-4.17-.31-.38-.8-.49-1.22-.38.24.07.45.1.59.28 1.08 1.29 1.53 2.75 2.05 4.28.24.73-.24 1.49-1.01 1.6-.63.07-.9.07-1.53.07.83.03 1.67 0 2.47-.07.76-.07 1.25-.83 1.01-1.6Z"
        opacity=".3"
      />
      <path
        fill="#ff335a"
        d="M508.94 244.84c1.08 1.29 1.84 2.68 2.36 4.17.24.73-.24 1.49-1.01 1.6-1.56.14-3.13.14-4.69-.07-.76-.1-1.25-.9-.97-1.63.56-1.49 1.39-2.85 2.5-4.1.49-.52 1.36-.49 1.81.03Z"
      />
      <path
        fill="#df4356"
        d="M511.31 249.02c-.49-1.49-1.29-2.89-2.36-4.17-.31-.35-.76-.49-1.15-.38.24.07.49.17.66.38 1.08 1.29 1.7 2.54 2.22 4.03.24.73-.24 1.49-1.01 1.6-.66.07-1.18.24-1.81.24.83.03 1.63 0 2.43-.07.73-.1 1.25-.87 1.01-1.63Z"
        opacity=".3"
      />
      <path
        fill="#d69252"
        d="M552.6 227.95c0 .45-.38.8-.8.8s-.8-.38-.8-.8c0-.45.35-.8.8-.8s.8.35.8.8Z"
        opacity=".5"
      />
      <path
        fill="#f5feff"
        d="M552.6 227.78c0 .45-.38.8-.8.8s-.8-.38-.8-.8c0-.45.35-.8.8-.8s.8.35.8.8Z"
      />
      <path
        fill="#deeef1"
        d="M551.77 228.4c-.42 0-.76-.31-.8-.73v.07c0 .45.38.8.8.8.45 0 .8-.38.8-.8v-.07c-.03.42-.38.73-.8.73Z"
      />
      <path
        fill="#d69252"
        d="M524.34 227.95c0 .45-.38.8-.8.8s-.8-.38-.8-.8c0-.45.38-.8.8-.8s.8.35.8.8Z"
        opacity=".5"
      />
      <path
        fill="#f5feff"
        d="M524.34 227.78c0 .45-.38.8-.8.8s-.8-.38-.8-.8c0-.45.38-.8.8-.8s.8.35.8.8Z"
      />
      <path
        fill="#deeef1"
        d="M523.54 228.4c-.42 0-.76-.31-.8-.73v.07c0 .45.38.8.8.8s.8-.38.8-.8v-.07c-.03.42-.38.73-.8.73Z"
      />
      <path
        fill="#d69252"
        d="M558.37 232.26c.28.07.56.28.76.52s.35.56.42.87c.17.63.1 1.29.03 1.88 0 0-.1 1.15-.14 1.67-.03.56-.1 1.11-.03 1.7-.38-.45-.66-1.04-.73-1.67s.03-1.25.1-1.81c0 0 .1-1.01.07-1.56-.03-.56-.07-1.18-.49-1.6Z"
        opacity=".6"
      />
      <path
        fill="#fff"
        d="M558.37 232.26c.28.07.56.28.76.52s.35.56.42.87c.17.63.1 1.29.03 1.88-.1.59-.24 1.15-.28 1.67-.03.56.03 1.11.1 1.7-.38-.45-.66-1.04-.73-1.67s.03-1.25.1-1.81c.1-.56.21-1.08.14-1.63-.03-.56-.14-1.08-.56-1.53Z"
      />
      <path
        fill="#deeef1"
        d="M559.07 233.76c-.07-.76-.31-1.04-.73-1.49.42.45.56.97.59 1.49.03.56-.07 1.04-.14 1.63.1-.59.35-1.08.28-1.63ZM559.59 235.53c-.1.59-.38 1.15-.42 1.67-.03.56.28 1.7.28 1.7-.07-.59-.17-1.15-.1-1.7 0-.56.14-1.08.24-1.67Z"
      />
      <path
        fill="#d69252"
        d="M516.97 232.26c-.28.07-.56.28-.76.52s-.35.56-.42.87c-.17.63-.1 1.29-.03 1.88 0 0 .1 1.15.14 1.67.03.56.1 1.11.03 1.7.38-.45.66-1.04.73-1.67s-.03-1.25-.1-1.81c0 0-.1-1.01-.07-1.56 0-.56.07-1.18.49-1.6Z"
        opacity=".6"
      />
      <path
        fill="#fff"
        d="M516.97 232.26c-.28.07-.56.28-.76.52s-.35.56-.42.87c-.17.63-.1 1.29-.03 1.88.1.59.24 1.15.28 1.67.03.56-.03 1.11-.1 1.7.38-.45.66-1.04.73-1.67s-.03-1.25-.1-1.81c-.1-.56-.21-1.08-.14-1.63 0-.56.14-1.08.56-1.53Z"
      />
      <path
        fill="#deeef1"
        d="M516.24 233.76c.07-.76.31-1.04.73-1.49-.42.45-.56.97-.59 1.49-.03.56.07 1.04.14 1.63-.07-.59-.31-1.08-.28-1.63ZM515.76 235.53c.1.59.38 1.15.42 1.67.03.56-.28 1.7-.28 1.7.07-.59.17-1.15.1-1.7-.03-.56-.17-1.08-.24-1.67Z"
      />
      <path
        fill="#512515"
        d="M558.27 207.37h-41.23c-.35 0-.7.24-.76.59l-4.45 16.58c-.14.52.24 1.01.76 1.01h50.09c.52 0 .9-.49.76-1.01l-4.45-16.58c-.03-.31-.35-.59-.73-.59Z"
      />
      <path
        fill="#512515"
        d="M514.37 221.17c3.06 0 2.57-1.67 5.74-1.67 1.81 0 1.77 2.71 4.34 2.71 3.41 0 2.33-1.77 6.85-1.77 3.09 0 3.16.45 6.74.45s3.2-1.43 6.29-1.43 2.12 1.88 4.87 1.88c1.7 0 1.7-1.29 4.24-1.29 2.29 0 2.26 2.16 4.87 2.16 2.33 0-.35-2.02 3.34-2.02.28 0 .45-.03.66-.07l-3.27-12.17c-.1-.35-.42-.59-.76-.59h-11.89c-5.6.07-11.12.07-16.89 0h-12.44c-.35 0-.7.24-.76.59l-3.41 12.72c.31.31.76.49 1.49.49Z"
        opacity=".3"
      />
      <path
        fill="#f5feff"
        d="M561.5 214.46c-.66-2.82-.76-6.43-.76-6.43-.28-1.98-2.68-1.63-3.06-1.63-13.59.52-26.1.49-40.63 0-.38 0-1.88-.21-2.43 1.56 0 0-.14 3.16-.59 5.25-.42 2.09-1.53 4.34-1.53 4.34s-1.01 2.92 1.81 2.92c3.06 0 2.57-1.67 5.74-1.67 1.81 0 1.77 2.71 4.34 2.71 3.41 0 2.33-1.77 6.85-1.77 3.09 0 3.44.73 7.06.73s2.92-1.7 6.01-1.7 2.12 1.88 4.87 1.88c1.7 0 1.7-1.29 4.24-1.29 2.29 0 2.26 2.16 4.87 2.16 2.33 0-.35-2.02 3.34-2.02 2.92.03.56-2.19-.1-5.04Z"
      />
      <path
        fill="#deeef1"
        d="M561.67 219.5c1.11 0 1.46-.35 1.39-.9-.07.56-.42.9-1.39.9Z"
      />
      <path
        fill="#deeef1"
        d="M546.66 209.98c.76 0 1.43-.56 1.49-1.32.03-.42-.17-1.08-.45-1.39l-.56-.59c-5.63.07-12.86.07-18.67 0l-.83.9c-.24.42-.45.7-.42 1.11.07.8.73 1.32 1.53 1.32h.8c.49 0-.14-.07.31-.24l.8 9.94h.63c3.09 0 3.44.73 7.06.73s2.92-1.7 6.01-1.7h.35l.8-8.97c.45.21.66.21 1.15.21Z"
        opacity=".8"
      />
      <path
        fill="#009289"
        d="m536.79 201.15-5.39 5.98c-.07.1-.14.21-.14.35v13.21c0 .28.24.52.52.52h11.75c.28 0 .52-.24.52-.52v-13.21c0-.14-.03-.24-.14-.35l-5.39-5.98c-.42-.52-1.25-.52-1.74 0Z"
      />
      <path
        fill="#a96c39"
        d="m543.91 207.13-5.35-5.98c-.49-.52-1.32-.52-1.77 0l-5.39 5.98c-.07.1-.14.21-.14.35v2.64c.66-.21 1.25-.59 1.7-1.15l4.69-5.25 4.69 5.25c.45.52 1.04.9 1.7 1.11v-2.61c0-.14-.07-.28-.14-.35Z"
        opacity=".5"
      />
      <path
        fill="#f5feff"
        d="m546.35 207.16-7.37-8.17c-.35-.38-.83-.59-1.32-.59-.52 0-.97.21-1.32.59l-7.37 8.17c-.28.28-.42.66-.38 1.04.07.73.7 1.29 1.36 1.29 1.15 0 2.22-.49 2.99-1.36l4.69-5.25 4.69 5.25c.76.87 1.84 1.32 2.99 1.32.7 0 1.32-.52 1.36-1.29.07-.38-.07-.73-.31-1.01Z"
      />
      <path
        fill="#512515"
        d="M537.59 210.88c-1.25 0-2.29 1.01-2.29 2.29v2.29c0 1.25 1.01 2.29 2.29 2.29s2.29-1.01 2.29-2.29v-2.29c0-1.29-1.04-2.29-2.29-2.29Z"
      />
      <path
        fill="#512515"
        d="M537.66 210.64c-1.46 0-2.68 1.22-2.68 2.68v2.29c0 1.46 1.22 2.68 2.68 2.68s2.68-1.22 2.68-2.68v-2.29c0-1.49-1.18-2.68-2.68-2.68Zm1.91 2.68v.73h-1.49v-2.57c.83.17 1.49.94 1.49 1.84Zm-2.29-1.84v2.57h-1.49v-.73c0-.9.63-1.67 1.49-1.84Zm-1.49 4.14v-.73h1.49v2.57c-.87-.21-1.49-.94-1.49-1.84Zm2.29 1.84v-2.57h1.49v.73c0 .9-.66 1.63-1.49 1.84Z"
        opacity=".4"
      />
      <path
        fill="#fff"
        d="M537.66 210.43c-1.46 0-2.68 1.22-2.68 2.68v2.29c0 1.46 1.22 2.68 2.68 2.68s2.68-1.22 2.68-2.68v-2.29c0-1.49-1.18-2.68-2.68-2.68Zm1.91 2.68v.73h-1.49v-2.57c.83.17 1.49.94 1.49 1.84Zm-2.29-1.84v2.57h-1.49v-.73c0-.9.63-1.67 1.49-1.84Zm-1.49 4.14v-.73h1.49v2.57c-.87-.21-1.49-.94-1.49-1.84Zm2.29 1.84v-2.57h1.49v.73c0 .9-.66 1.63-1.49 1.84Z"
      />
      <path
        fill="#deeef1"
        d="M537.27 213.84h-1.49v.28h1.49v-.28ZM535.78 215.4v.28c0 .9.63 1.67 1.49 1.84v-.28c-.87-.21-1.49-.94-1.49-1.84ZM539.57 213.84h-1.49v.28h1.49v-.28ZM537.66 210.43c-1.46 0-2.68 1.22-2.68 2.68v.28c0-1.46 1.22-2.68 2.68-2.68s2.68 1.22 2.68 2.68v-.28c0-1.49-1.18-2.68-2.68-2.68ZM538.07 217.24v.28c.87-.17 1.49-.94 1.49-1.84v-.28c0 .9-.66 1.63-1.49 1.84Z"
      />
      <rect width="73.75" height="2.82" x="501.14" y="250.73" fill="#befcdf" />
      <g opacity=".48">
        <path
          fill="#c1d1d6"
          d="M537.41 251.73c19.99 0 36.18-.28 36.18-.59 0-.35-16.2-.59-36.18-.59s-36.18.28-36.18.59c-.03.31 16.2.59 36.18.59Z"
        />
        <path
          fill="none"
          stroke="#c1d1d6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".31"
          d="M537.41 251.73c19.99 0 36.18-.28 36.18-.59 0-.35-16.2-.59-36.18-.59s-36.18.28-36.18.59c-.03.31 16.2.59 36.18.59Z"
        />
      </g>
    </svg>
  );
};
