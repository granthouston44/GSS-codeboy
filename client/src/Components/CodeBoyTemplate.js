import React from 'react'

const Template = (props) => {

return(
  <div className="gameboy">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 588.3 959.7"
      xmlSpace="preserve"
      height="94vh"
      id='template'
    >
      <path d="M38.2 17.7h512c11.3 0 20.4 9.1 20.4 20.4v826.7c-7.6 18.3-15.6 27.1-27.5 36.7-20.3 16.3-46 25.6-71.1 32.2-29.1 7.7-60 5.5-89.9 8.2H38.2c-11.3 0-20.4-9.1-20.4-20.4V38.2c-.1-11.4 9-20.5 20.4-20.5z"></path>
      <path
        fill="#2E3436"
        d="M38.2 17.7h512c11.3 0 20.4 9.1 20.4 20.4v826.7c-7.6 18.3-15.6 27.1-27.5 36.7-20.3 16.3-46 25.6-71.1 32.2-29.1 7.7-60 5.5-89.9 8.2H38.2c-11.3 0-20.4-9.1-20.4-20.4V38.2c-.1-11.4 9-20.5 20.4-20.5z"
      ></path>
      <linearGradient
        id="a"
        x1="-467.661"
        x2="-450.489"
        y1="-145.746"
        y2="761.753"
        gradientTransform="translate(745.44 166.506)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#BABDB6"></stop>
        <stop offset="1" stopColor="#AAAEA6"></stop>
      </linearGradient>
      <path
        fill="url(#a)"
        d="M30.2 3.7h512c11.3 0 20.4 9.1 20.4 20.4v826.7c-7.6 18.3-15.6 27.1-27.5 36.7-20.3 16.3-46 25.6-71.1 32.2-29.1 7.7-60 5.5-89.9 8.2H30.2c-11.3 0-20.4-9.1-20.4-20.4V24.2c-.1-11.4 9-20.5 20.4-20.5z"
      ></path>
      <path
        fill="#888A85"
        d="M73.7 77.2c-11.2 0-20.3 9-20.3 20.2v323.8c0 11.2 9 20.3 20.3 20.3H464.1c37.2 0 67.2-29.9 67.2-67.2v-21.8c.3-1.2.5-2.5.5-3.9V93.2c0-8.9-7.1-16-16-16H73.7z"
      ></path>
      <path
        fill="#73D216"
        d="M87.9 120.5h407.2c7.3 0 13.2 4.1 13.2 9.2v258.4c0 5.1-5.9 9.2-13.2 9.2H87.9c-7.3 0-13.2-4.1-13.2-9.2V129.7c0-5.1 5.9-9.2 13.2-9.2z"


        ></path>

      <path
        fill="#482A50"
        d="M444.4 648.8c0 19-15.4 34.3-34.3 34.3-19 0-34.3-15.4-34.3-34.3 0-19 15.4-34.3 34.3-34.3s34.3 15.3 34.3 34.3z"
      ></path>
      <radialGradient
        id="b"
        cx="-336.637"
        cy="508.009"
        r="30.81"
        gradientTransform="translate(785.225 84.751) scale(1.1148)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#5C3566"></stop>
        <stop offset="1" stopColor="#5C3566" stopOpacity="0"></stop>
      </radialGradient>
      <path
        fill="url(#b)"
        d="M440.4 646.8c0 19-15.4 34.3-34.3 34.3-19 0-34.3-15.4-34.3-34.3 0-19 15.4-34.3 34.3-34.3s34.3 15.3 34.3 34.3z"
        onClick={props.bButton}
      ></path>
      <path
        fill="#482A50"
        d="M538.3 606.4c0 19-15.4 34.3-34.3 34.3-19 0-34.3-15.4-34.3-34.3S485 572 504 572c18.9 0 34.3 15.4 34.3 34.4z"
        onClick={props.aButton}
      ></path>

      <path
        fill="#555753"
        d="M106 567c-1.7 0-3.1 1.4-3.1 3.1v41.2H61.7c-1.7 0-3.1 1.4-3.1 3.1V660c0 1.7 1.4 3.1 3.1 3.1h41.2v41.2c0 1.7 1.4 3.1 3.1 3.1h45.6c1.7 0 3.1-1.4 3.1-3.1v-41.2h41.2c1.7 0 3.1-1.4 3.1-3.1v-45.6c0-1.7-1.4-3.1-3.1-3.1h-41.2v-41.2c0-1.7-1.4-3.1-3.1-3.1H106z"
      ></path>
      <radialGradient
        id="c"
        cx="-537.307"
        cy="-116.588"
        r="70.209"
        gradientTransform="matrix(.2086 0 0 .223 236.882 661.2)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#2E3436"></stop>
        <stop offset="1" stopColor="#25292B"></stop>
      </radialGradient>
      <path
        fill="url(#c)"
        d="M102 565c-1.7 0-3.1 1.4-3.1 3.1v41.2H57.7c-1.7 0-3.1 1.4-3.1 3.1V658c0 1.7 1.4 3.1 3.1 3.1h41.2v41.2c0 1.7 1.4 3.1 3.1 3.1h45.6c1.7 0 3.1-1.4 3.1-3.1v-41.2h41.2c1.7 0 3.1-1.4 3.1-3.1v-45.6c0-1.7-1.4-3.1-3.1-3.1h-41.2v-41.2c0-1.7-1.4-3.1-3.1-3.1H102z"
      ></path>
      <radialGradient
        id="d"
        cx="411.453"
        cy="-62.84"
        r="46.276"
        gradientTransform="matrix(.5077 .8615 -.1149 .0677 171.935 517.088)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#555753"></stop>
        <stop offset="1" stopColor="#3C3D3B"></stop>
      </radialGradient>
      <path
        fill="url(#d)"
        d="M373 829.7l40.7 69c1.7 2.9.8 6.7-2.2 8.4-2.9 1.7-6.7.8-8.4-2.2l-40.7-69c-1.7-2.9-.8-6.7 2.2-8.4 2.9-1.7 6.7-.7 8.4 2.2z"
      ></path>
      <g transform="translate(-28.284 15.152)">
        <g transform="translate(-27.78 15.657)">
          <g transform="translate(-27.274 15.657)">
            <g transform="translate(139.906 -77.277)">
              <radialGradient
                id="e"
                cx="351.504"
                cy="710.969"
                r="46.23"
                gradientTransform="matrix(.5077 .8615 -.1149 .0677 260.764 532.926)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#555753"></stop>
                <stop offset="1" stopColor="#3C3D3B"></stop>
              </radialGradient>
              <path
                fill="url(#e)"
                d="M342.5 846.3l40.7 69c1.7 2.9.8 6.7-2.2 8.4-2.9 1.7-6.7.8-8.4-2.2l-40.7-69c-1.7-2.9-.8-6.7 2.2-8.4 2.9-1.7 6.7-.8 8.4 2.2z"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g transform="translate(-28.79 14.142)">
        <g transform="translate(-28.284 15.152)">
          <g transform="translate(-27.78 15.657)">
            <g transform="translate(-27.274 15.657)">
              <g transform="translate(139.906 -77.277)">
                <radialGradient
                  id="f"
                  cx="385.933"
                  cy="-1.229"
                  r="46.251"
                  gradientTransform="matrix(.5077 .8615 -.1149 .0677 215.733 523.223)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#555753"></stop>
                  <stop offset="1" stopColor="#3C3D3B"></stop>
                </radialGradient>
                <path
                  fill="url(#f)"
                  d="M396.8 818l40.7 69c1.7 2.9.8 6.7-2.2 8.4-2.9 1.7-6.7.8-8.4-2.2l-40.7-69c-1.7-2.9-.8-6.7 2.2-8.4 2.9-1.7 6.7-.7 8.4 2.2z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
      <path
        fill="none"
        stroke="#555753"
        strokeWidth="6"
        d="M9.7 49.4h552.9"
      ></path>
      <path
        fill="none"
        stroke="#555753"
        strokeWidth="6"
        d="M528.3 3.8v45.4"
      ></path>
      <path
        fill="none"
        stroke="#555753"
        strokeWidth="6"
        d="M56.9 4.4v44.9"
      ></path>
      <path
        fill="none"
        stroke="#204A87"
        strokeWidth="3"
        d="M77.6 104.4h123.6"
      ></path>
      <path
        fill="none"
        stroke="#5C3566"
        strokeWidth="3"
        d="M77.6 93.7h123.6"
      ></path>
      <path
        fill="none"
        stroke="#204A87"
        strokeWidth="3"
        d="M456.2 104.4h52.1"
      ></path>
      <path
        fill="none"
        stroke="#5C3566"
        strokeWidth="3"
        d="M456.2 93.7h52.1"
      ></path>
      <g transform="matrix(.98932 -.5094 .4114 .79897 0 0)">
        <path
          fill="#204A87"
          d="M49.4 912.4h9.5c1.6 0 2.8.4 3.6 1.2.8.8 1.3 1.8 1.3 2.9 0 1-.3 1.8-.9 2.5-.4.5-1 .8-1.8 1.1 1.2.3 2 .8 2.6 1.5s.8 1.6.8 2.6c0 .8-.2 1.6-.6 2.3-.4.7-.9 1.2-1.6 1.6-.4.2-1.1.4-1.9.5-1.1.1-1.9.2-2.3.2h-8.7v-16.4zm5.1 6.5h2.2c.8 0 1.3-.1 1.6-.4s.5-.7.5-1.2-.2-.8-.5-1.1-.8-.4-1.6-.4h-2.2v3.1zm0 6.4h2.6c.9 0 1.5-.2 1.8-.5.4-.3.5-.7.5-1.2s-.2-.9-.5-1.2c-.4-.3-1-.4-1.9-.4h-2.6l.1 3.3z"
        ></path>
      </g>
      <g transform="matrix(.98932 -.5094 .4114 .79897 0 0)">
        <path
          fill="#204A87"
          d="M151.4 931h-5.8l-.8 2.7h-5.2l6.2-16.4h5.5l6.2 16.4h-5.3l-.8-2.7zm-1.1-3.5l-1.8-5.9-1.8 5.9h3.6z"
        ></path>
      </g>
      <g
        fill="#00006A"
        transform="matrix(1.33003 -.6343 .29213 .61255 2.525 -4.04)"
      >
        <path d="M-56.6 1264.8l1.3-.1c.1.5.2 1 .4 1.3s.6.6 1.1.8c.5.2 1 .3 1.6.3.5 0 1-.1 1.4-.2s.7-.4.9-.6c.2-.3.3-.6.3-.9s-.1-.6-.3-.9c-.2-.2-.5-.5-.9-.6-.3-.1-.9-.3-1.9-.5s-1.6-.5-2-.7c-.5-.3-.9-.6-1.1-1-.2-.4-.4-.8-.4-1.3s.2-1 .5-1.5.7-.8 1.3-1.1c.6-.2 1.2-.4 1.9-.4.8 0 1.5.1 2.1.4s1.1.6 1.4 1.1c.3.5.5 1 .5 1.7l-1.3.1c-.1-.7-.3-1.2-.7-1.5s-1-.5-1.8-.5-1.5.2-1.8.5-.6.7-.6 1.1.1.7.4.9c.3.2 1 .5 2.1.8s1.9.5 2.3.7c.6.3 1.1.6 1.4 1.1.3.4.4.9.4 1.5s-.2 1.1-.5 1.6-.8.9-1.4 1.2c-.6.3-1.3.4-2 .4-1 0-1.8-.1-2.4-.4-.6-.3-1.1-.7-1.5-1.3-.5-.7-.7-1.3-.7-2z"></path>
        <path d="M-43.6 1268.1v-9.3h-3.5v-1.2h8.3v1.2h-3.5v9.3h-1.3z"></path>
        <path d="M-38.5 1268.1l4-10.5h1.5l4.3 10.5h-1.6l-1.2-3.2h-4.4l-1.2 3.2h-1.4zm3.1-4.3h3.6l-1.1-2.9c-.3-.9-.6-1.6-.7-2.2-.1.7-.3 1.3-.6 2l-1.2 3.1z"></path>
        <path d="M-27.5 1268.1v-10.5h4.7c.9 0 1.7.1 2.1.3.4.2.9.5 1.2 1 .3.5.4 1 .4 1.6 0 .7-.2 1.4-.7 1.9s-1.2.8-2.2 1c.4.2.6.4.8.5.4.4.8.8 1.2 1.4l1.8 2.9H-20l-1.4-2.2c-.4-.6-.7-1.1-1-1.5-.3-.3-.5-.6-.7-.7l-.6-.3c-.2 0-.4-.1-.8-.1h-1.6v4.7h-1.4zm1.4-5.8h3c.6 0 1.1-.1 1.5-.2s.6-.3.8-.6.3-.6.3-.9c0-.5-.2-.9-.5-1.2-.4-.3-.9-.5-1.7-.5H-26l-.1 3.4z"></path>
        <path d="M-14.2 1268.1v-9.3h-3.5v-1.2h8.3v1.2h-3.5v9.3h-1.3z"></path>
      </g>
      <g fill="#EEEEEC" transform="scale(.98466 1.01558)">
        <path d="M217.6 102.8V93h3.4c.8 0 1.3 0 1.8.1.6.1 1 .4 1.4.7.5.4.9 1 1.2 1.7s.4 1.5.4 2.3c0 .7-.1 1.4-.3 2s-.4 1.1-.7 1.4c-.3.4-.6.7-.9.9-.3.2-.7.4-1.2.5s-1 .2-1.6.2h-3.5zm1.3-1.2h2.1c.6 0 1.2-.1 1.5-.2.4-.1.7-.3.9-.5.3-.3.5-.7.7-1.2s.3-1.2.3-1.9c0-1-.2-1.8-.5-2.4s-.7-.9-1.2-1.1c-.3-.1-.9-.2-1.7-.2h-2.1v7.5z"></path>
        <path d="M227.1 98c0-1.6.4-2.9 1.3-3.8.9-.9 2-1.4 3.4-1.4.9 0 1.7.2 2.5.7.7.4 1.3 1 1.7 1.8s.6 1.7.6 2.6c0 1-.2 1.9-.6 2.7-.4.8-1 1.4-1.7 1.8s-1.5.6-2.4.6-1.8-.2-2.5-.7c-.7-.4-1.3-1.1-1.7-1.8s-.6-1.6-.6-2.5zm1.4 0c0 1.2.3 2.1 1 2.8.6.7 1.4 1 2.4 1s1.8-.3 2.4-1 .9-1.7.9-2.9c0-.8-.1-1.5-.4-2.1-.3-.6-.7-1.1-1.2-1.4s-1.1-.5-1.8-.5c-.9 0-1.7.3-2.4.9-.6.7-.9 1.7-.9 3.2z"></path>
        <path d="M240.7 102.8v-8.7h-3.2V93h7.8v1.2H242v8.7l-1.3-.1z"></path>
        <path d="M250.4 102.8V93h2l2.3 7c.2.6.4 1.1.5 1.5.1-.4.3-.9.5-1.6L258 93h1.8v9.8h-1.3v-8.2l-2.9 8.2h-1.2l-2.8-8.4v8.4h-1.2z"></path>
        <path d="M260.8 102.8l3.8-9.8h1.4l4 9.8h-1.5l-1.1-3h-4.1l-1.1 3h-1.4zm2.8-4h3.3l-1-2.7c-.3-.8-.5-1.5-.7-2-.1.6-.3 1.3-.5 1.9l-1.1 2.8z"></path>
        <path d="M273.6 102.8v-8.7h-3.2V93h7.8v1.2h-3.3v8.7l-1.3-.1z"></path>
        <path d="M279.5 102.8V93h4.4c.9 0 1.5.1 2 .3.5.2.8.5 1.1.9.3.4.4.9.4 1.5 0 .7-.2 1.3-.7 1.8s-1.2.8-2.1.9c.3.2.6.3.8.5.4.3.7.8 1.1 1.3l1.7 2.7h-1.6l-1.3-2c-.4-.6-.7-1-.9-1.4s-.5-.5-.7-.7l-.6-.3h-2.2v4.4l-1.4-.1zm1.3-5.5h2.8c.6 0 1.1-.1 1.4-.2s.6-.3.8-.6c.2-.3.3-.6.3-.9 0-.5-.2-.8-.5-1.1-.3-.3-.9-.4-1.6-.4h-3.1l-.1 3.2z"></path>
        <path d="M289.6 102.8V93h1.3v9.8h-1.3z"></path>
        <path d="M292.2 102.8l3.8-5.1-3.4-4.7h1.6l1.8 2.5c.4.5.6.9.8 1.2.2-.4.5-.7.8-1.1l2-2.6h1.4l-3.5 4.6 3.7 5.2h-1.6l-2.5-3.5c-.1-.2-.3-.4-.4-.7-.2.4-.4.6-.5.7l-2.5 3.4-1.5.1z"></path>
        <path d="M307.9 102.8l-2.6-9.8h1.3l1.5 6.5c.2.7.3 1.3.4 2 .3-1.1.4-1.7.4-1.8l1.9-6.6h1.6l1.4 5c.4 1.2.6 2.4.8 3.5.1-.6.3-1.3.5-2.1l1.5-6.3h1.3l-2.7 9.8H314l-2.1-7.5c-.2-.6-.3-1-.3-1.2-.1.5-.2.8-.3 1.2l-2.1 7.5-1.3-.2z"></path>
        <path d="M319.4 102.8V93h1.3v9.8h-1.3z"></path>
        <path d="M325.5 102.8v-8.7h-3.2V93h7.8v1.2h-3.3v8.7l-1.3-.1z"></path>
        <path d="M331.5 102.8V93h1.3v4h5.1v-4h1.3v9.8h-1.3v-4.6h-5.1v4.6h-1.3z"></path>
        <path d="M344.7 99.6l1.2-.1c.1.5.2.9.4 1.2.2.3.5.6 1 .8.4.2 1 .3 1.5.3s.9-.1 1.3-.2.7-.4.8-.6c.2-.3.3-.5.3-.8s-.1-.6-.3-.8c-.2-.2-.5-.4-.9-.6-.3-.1-.8-.3-1.8-.5-.9-.2-1.5-.4-1.9-.6-.5-.2-.8-.6-1.1-.9-.2-.4-.3-.8-.3-1.2 0-.5.1-1 .4-1.4s.7-.8 1.2-1 1.1-.3 1.8-.3 1.4.1 1.9.4c.6.2 1 .6 1.3 1 .3.5.5 1 .5 1.6l-1.2.1c-.1-.6-.3-1.1-.7-1.4-.4-.3-1-.5-1.7-.5-.8 0-1.4.1-1.7.4-.4.3-.5.6-.5 1s.1.6.4.9c.3.2.9.5 2 .7s1.8.4 2.2.6c.6.3 1 .6 1.3 1s.4.9.4 1.4-.1 1-.4 1.5-.7.8-1.3 1.1c-.6.3-1.2.4-1.9.4-.9 0-1.6-.1-2.2-.4s-1.1-.7-1.4-1.2c-.4-.6-.6-1.2-.6-1.9z"></path>
        <path d="M356.9 102.8v-8.7h-3.2V93h7.8v1.2h-3.3v8.7l-1.3-.1z"></path>
        <path d="M362.8 102.8V93h7.1v1.2h-5.8v3h5.4v1.2h-5.4v3.4h6v1.2l-7.3-.2z"></path>
        <path d="M372 102.8V93h4.4c.9 0 1.5.1 2 .3.5.2.8.5 1.1.9.3.4.4.9.4 1.5 0 .7-.2 1.3-.7 1.8s-1.2.8-2.1.9c.3.2.6.3.8.5.4.3.7.8 1.1 1.3l1.7 2.7H379l-1.3-2c-.4-.6-.7-1-.9-1.4s-.5-.5-.7-.7l-.6-.3h-2.2v4.4l-1.3-.1zm1.3-5.5h2.8c.6 0 1.1-.1 1.4-.2s.6-.3.8-.6c.2-.3.3-.6.3-.9 0-.5-.2-.8-.5-1.1-.3-.3-.9-.4-1.6-.4h-3.1l-.1 3.2z"></path>
        <path d="M381.9 102.8V93h7.1v1.2h-5.8v3h5.4v1.2h-5.4v3.4h6v1.2l-7.3-.2z"></path>
        <path d="M390.7 98c0-1.6.4-2.9 1.3-3.8s2-1.4 3.4-1.4c.9 0 1.7.2 2.5.7.7.4 1.3 1 1.7 1.8.4.8.6 1.7.6 2.6 0 1-.2 1.9-.6 2.7-.4.8-1 1.4-1.7 1.8s-1.5.6-2.4.6-1.8-.2-2.5-.7c-.7-.4-1.3-1.1-1.7-1.8-.5-.8-.6-1.6-.6-2.5zm1.3 0c0 1.2.3 2.1 1 2.8.6.7 1.4 1 2.4 1s1.8-.3 2.4-1 .9-1.7.9-2.9c0-.8-.1-1.5-.4-2.1s-.7-1.1-1.2-1.4-1.1-.5-1.8-.5c-.9 0-1.7.3-2.4.9-.6.7-.9 1.7-.9 3.2z"></path>
        <path d="M405.1 99.6l1.2-.1c.1.5.2.9.4 1.2.2.3.5.6 1 .8.4.2 1 .3 1.5.3s.9-.1 1.3-.2.7-.4.8-.6c.2-.3.3-.5.3-.8s-.1-.6-.3-.8c-.2-.2-.5-.4-.9-.6-.3-.1-.8-.3-1.8-.5-.9-.2-1.5-.4-1.9-.6-.5-.2-.8-.6-1.1-.9-.2-.4-.3-.8-.3-1.2 0-.5.1-1 .4-1.4s.7-.8 1.2-1 1.1-.3 1.8-.3 1.4.1 1.9.4c.6.2 1 .6 1.3 1 .3.5.5 1 .5 1.6l-1.2.1c-.1-.6-.3-1.1-.7-1.4-.4-.3-1-.5-1.7-.5-.8 0-1.4.1-1.7.4-.4.3-.5.6-.5 1s.1.6.4.9c.3.2.9.5 2 .7s1.8.4 2.2.6c.6.3 1 .6 1.3 1s.4.9.4 1.4-.1 1-.4 1.5-.7.8-1.3 1.1c-.6.3-1.2.4-1.9.4-.9 0-1.6-.1-2.2-.4s-1.1-.7-1.4-1.2c-.4-.6-.6-1.2-.6-1.9z"></path>
        <path d="M414.3 98c0-1.6.4-2.9 1.3-3.8s2-1.4 3.4-1.4c.9 0 1.7.2 2.5.7.7.4 1.3 1 1.7 1.8.4.8.6 1.7.6 2.6 0 1-.2 1.9-.6 2.7-.4.8-1 1.4-1.7 1.8s-1.5.6-2.4.6-1.8-.2-2.5-.7c-.7-.4-1.3-1.1-1.7-1.8-.4-.8-.6-1.6-.6-2.5zm1.4 0c0 1.2.3 2.1 1 2.8.6.7 1.4 1 2.4 1s1.8-.3 2.4-1 .9-1.7.9-2.9c0-.8-.1-1.5-.4-2.1s-.7-1.1-1.2-1.4-1.1-.5-1.8-.5c-.9 0-1.7.3-2.4.9-.6.7-.9 1.7-.9 3.2z"></path>
        <path d="M431.9 93h1.3v5.7c0 1-.1 1.8-.3 2.4s-.6 1.1-1.2 1.4c-.6.4-1.4.5-2.3.5s-1.7-.2-2.3-.5c-.6-.3-1-.8-1.3-1.4s-.4-1.4-.4-2.5V93h1.3v5.7c0 .9.1 1.5.2 1.9.2.4.4.7.8.9.4.2.9.3 1.4.3 1 0 1.6-.2 2-.7.4-.4.6-1.3.6-2.5l.2-5.6z"></path>
        <path d="M435.4 102.8V93h1.3l5.2 7.7V93h1.2v9.8h-1.3l-5.2-7.7v7.7h-1.2z"></path>
        <path d="M445.3 102.8V93h3.4c.8 0 1.3 0 1.8.1.6.1 1 .4 1.4.7.5.4.9 1 1.2 1.7.3.7.4 1.5.4 2.3 0 .7-.1 1.4-.3 2-.2.6-.4 1.1-.7 1.4-.3.4-.6.7-.9.9s-.7.4-1.2.5-1 .2-1.6.2h-3.5zm1.3-1.2h2.1c.6 0 1.2-.1 1.5-.2.4-.1.7-.3.9-.5.3-.3.5-.7.7-1.2s.3-1.2.3-1.9c0-1-.2-1.8-.5-2.4s-.7-.9-1.2-1.1c-.3-.1-.9-.2-1.7-.2h-2.1v7.5z"></path>
      </g>
      <path d="M152.3 481.3c-1 .4-3.1 1-5.6 1-2.7 0-5-.7-6.8-2.3-1.6-1.5-2.5-3.8-2.5-6.5 0-5.2 3.7-9 9.8-9 2.1 0 3.7.4 4.5.8l-.6 1.8c-1-.4-2.2-.8-4-.8-4.4 0-7.3 2.6-7.3 7s2.8 7 7 7c1.5 0 2.6-.2 3.1-.5v-5.2h-3.7v-1.8h6v8.5zM155.5 479.3c1 .6 2.6 1.1 4.2 1.1 2.4 0 3.8-1.2 3.8-3 0-1.6-1-2.6-3.4-3.5-3-1-4.8-2.5-4.8-4.9 0-2.7 2.3-4.7 5.9-4.7 1.9 0 3.2.4 4 .9l-.6 1.8c-.6-.3-1.8-.8-3.4-.8-2.5 0-3.4 1.4-3.4 2.6 0 1.6 1.1 2.4 3.6 3.4 3.1 1.1 4.6 2.6 4.6 5.1 0 2.7-2.1 5-6.4 5-1.7 0-3.7-.5-4.6-1.1l.5-1.9zM168.8 479.3c1 .6 2.6 1.1 4.2 1.1 2.4 0 3.8-1.2 3.8-3 0-1.6-1-2.6-3.4-3.5-3-1-4.8-2.5-4.8-4.9 0-2.7 2.3-4.7 5.9-4.7 1.9 0 3.2.4 4 .9l-.6 1.8c-.6-.3-1.8-.8-3.4-.8-2.5 0-3.4 1.4-3.4 2.6 0 1.6 1.1 2.4 3.6 3.4 3.1 1.1 4.6 2.6 4.6 5.1 0 2.7-2.1 5-6.4 5-1.7 0-3.7-.5-4.6-1.1l.5-1.9z"></path>
      <g fill="#204A87">
        <path d="M360.9 485.2v-9.9h-3.7V474h8.9v1.3h-3.7v9.9h-1.5z"></path>
        <path d="M367.6 485.2V474h2.2l2.7 7.9c.2.7.4 1.3.5 1.7.1-.4.3-1 .6-1.8l2.7-7.8h2v11.2h-1.4v-9.4l-3.3 9.4h-1.3l-3.2-9.5v9.5h-1.5z"></path>
      </g>
      <g transform="translate(-28.284 15.152)">
        <g transform="translate(-27.78 15.657)">
          <g transform="translate(-27.274 15.657)">
            <g transform="translate(139.906 -77.277)">
              <radialGradient
                id="i"
                cx="354.207"
                cy="252.902"
                r="46.23"
                gradientTransform="matrix(.5077 .8615 -.1149 .0677 260.764 532.926)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#555753"></stop>
                <stop offset="1" stopColor="#3C3D3B"></stop>
              </radialGradient>
              <path
                fill="url(#i)"
                d="M396.5 817.6l40.7 69c1.7 2.9.8 6.7-2.2 8.4-2.9 1.7-6.7.8-8.4-2.2l-40.7-69c-1.7-2.9-.8-6.7 2.2-8.4 2.9-1.7 6.7-.8 8.4 2.2z"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g transform="translate(-28.284 15.152)">
        <g transform="translate(-27.78 15.657)">
          <g transform="translate(-27.274 15.657)">
            <g transform="translate(139.906 -77.277)">
              <radialGradient
                id="j"
                cx="355.03"
                cy="34.589"
                r="46.23"
                gradientTransform="matrix(.5077 .8615 -.1149 .0677 260.764 532.926)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#555753"></stop>
                <stop offset="1" stopColor="#3C3D3B"></stop>
              </radialGradient>
              <path
                fill="url(#j)"
                d="M422 803.5l40.7 69c1.7 2.9.8 6.7-2.2 8.4-2.9 1.7-6.7.8-8.4-2.2l-40.7-69c-1.7-2.9-.8-6.7 2.2-8.4 2.9-1.7 6.7-.8 8.4 2.2z"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g fill="#00006A">
        <path d="M202.1 473.8l4.9.9c-1 3.3-2.4 5.8-4.3 7.4-1.9 1.6-4.1 2.5-6.6 2.5-2.8 0-5-1-6.7-3.1s-2.5-5.1-2.5-9.2c0-3.5.6-6.6 1.8-9.3s2.7-4.7 4.6-6c1.9-1.3 3.9-2 6-2 2.4 0 4.5.8 6.1 2.4s2.6 3.9 2.9 6.9l-4.6.5c-.3-1.7-.8-2.9-1.5-3.7-.7-.7-1.7-1.1-2.9-1.1s-2.4.4-3.5 1.3-2.1 2.3-2.9 4.4-1.2 4.3-1.2 6.8c0 2.3.5 4.1 1.4 5.3s2 1.8 3.3 1.8c1.2 0 2.4-.5 3.4-1.5 1-.9 1.8-2.3 2.3-4.3zM210.3 472.9c0-2.5.4-5 1.2-7.6 1.1-3.3 2.6-5.9 4.7-7.6s4.5-2.6 7.2-2.6c2.8 0 5.1 1.1 7 3.2 1.8 2.1 2.7 5.1 2.7 8.8 0 3.4-.7 6.4-2 9.3s-2.9 4.9-4.9 6.3c-1.9 1.4-4.1 2-6.4 2-2.8 0-5-1-6.6-2.9-1.9-2.5-2.9-5.4-2.9-8.9zm4.8-.2c0 2.1.5 3.8 1.5 5 1 1.3 2.3 1.9 3.8 1.9 1.2 0 2.4-.5 3.5-1.4s2.2-2.5 3.1-4.6c.9-2.1 1.3-4.3 1.3-6.5 0-2.3-.5-4.1-1.6-5.5-.9-1.2-2.2-1.8-3.7-1.8-1.2 0-2.4.5-3.6 1.4-1.2.9-2.2 2.5-3.1 4.6-.8 2.2-1.2 4.5-1.2 6.9zM234.4 484.1l4.9-28.6h6.3c2.2 0 3.7.1 4.5.3 1.3.3 2.5 1 3.5 1.9s1.8 2.2 2.3 3.8c.6 1.6.9 3.5.9 5.8 0 2.4-.3 4.6-.9 6.6-.6 2-1.4 3.8-2.5 5.3s-2.2 2.6-3.3 3.3c-1.1.7-2.3 1.1-3.5 1.4-.8.2-2.1.3-3.9.3h-8.3zm5.6-4.6h2.4c1.8 0 3-.1 3.7-.4.9-.3 1.8-1 2.6-1.9.8-1 1.5-2.3 2.1-4 .6-1.7.9-3.7.9-6 0-1.9-.2-3.3-.7-4.4-.5-1.1-1.1-1.8-2-2.2-.6-.3-1.6-.4-3.1-.4h-2.8l-3.1 19.3zM258 484.1l4.9-28.6h17.4l-.8 4.8H267l-1.1 6.5H278l-.8 4.8h-12.1l-1.3 7.8h13.5l-.8 4.8H258zM288.9 484.1l4.9-28.6h8c2.1 0 3.7.1 4.6.4 1.4.4 2.5 1.2 3.3 2.3.8 1.1 1.2 2.5 1.2 4.2 0 1.7-.4 3.1-1.1 4.2-.7 1.1-1.9 2-3.3 2.6 1.2.4 2.1 1.1 2.8 2.1.7 1 1 2.2 1 3.5 0 1.8-.4 3.5-1.3 5-.8 1.5-1.9 2.6-3.3 3.2-1.3.7-3.3 1-5.7 1h-11.1zm5.6-4.6h4.6c1.8 0 3.1-.1 3.7-.4.7-.3 1.2-.7 1.7-1.4s.7-1.5.7-2.3c0-1-.3-1.8-.9-2.4s-1.5-.9-2.8-.9h-5.8l-1.2 7.4zm2.2-12.5h3.7c1.6 0 2.8-.1 3.5-.4.7-.3 1.3-.7 1.7-1.3.4-.6.6-1.4.6-2.2 0-.7-.1-1.2-.4-1.7-.3-.5-.7-.8-1.1-.9-.5-.2-1.4-.2-2.9-.2h-3.7l-1.4 6.7zM314 472.9c0-2.5.4-5 1.2-7.6 1.1-3.3 2.6-5.9 4.7-7.6 2.1-1.7 4.5-2.6 7.2-2.6 2.8 0 5.1 1.1 7 3.2 1.8 2.1 2.7 5.1 2.7 8.8 0 3.4-.7 6.4-2 9.3s-2.9 4.9-4.9 6.3c-1.9 1.4-4.1 2-6.4 2-2.8 0-5-1-6.6-2.9-2-2.5-2.9-5.4-2.9-8.9zm4.7-.2c0 2.1.5 3.8 1.5 5 1 1.3 2.3 1.9 3.8 1.9 1.2 0 2.4-.5 3.5-1.4 1.2-.9 2.2-2.5 3-4.6s1.3-4.3 1.3-6.5c0-2.3-.5-4.1-1.6-5.5-.9-1.2-2.2-1.8-3.7-1.8-1.2 0-2.4.5-3.6 1.4s-2.2 2.5-3 4.6-1.2 4.5-1.2 6.9zM349.7 484.1h-4.8l2-11.1-6.5-17.4h5.1l2.9 8.1c.7 1.9 1.2 3.3 1.4 4.2.4-.9.9-1.8 1.4-2.7l2.2-3.7 3.4-5.8h5.6l-10.8 18-1.9 10.4z"></path>
      </g>
      <g fill="#00006A">
        <path d="M193 811.6l-3.1-6.3 11.3-5.5.4.7-9.2 4.5.9 1.9 8.6-4.2.4.7-8.6 4.2 1.1 2.2 9.6-4.7.4.7-11.8 5.8zM205.8 803.1l1.8-1c.3.5.7.7 1.2.7s1.1-.2 1.8-.5c.5-.2.9-.5 1.2-.8.3-.3.5-.5.6-.7.1-.3 0-.6-.1-1l-2.1-4.4 2.1-1 2.1 4.3c.4.8.3 1.5-.3 2.2-.6.7-1.6 1.4-3 2.1-1.4.7-2.4 1-3.3 1.1-1.1 0-1.7-.3-2-1zM219 798.9l-3.1-6.3 11.3-5.5.4.7-9.2 4.5.9 1.9 8.6-4.2.4.7-8.6 4.2 1 2.2 9.6-4.7.4.7-11.7 5.8zM243.7 784.1l2.2-.8c-.1.9-.7 1.9-1.6 2.8-1 .9-2.3 1.8-3.9 2.6-1.4.7-2.7 1.2-3.9 1.5s-2.2.3-3.1.1c-.9-.2-1.5-.7-1.9-1.4-.3-.7-.3-1.4.1-2.2.4-.8 1.1-1.6 2.1-2.4s2.2-1.5 3.6-2.2c1.5-.7 2.9-1.2 4.1-1.4s2.2-.1 2.9.3l-1.9 1.2c-1.1-.5-2.7-.3-4.8.7-1 .5-1.9 1-2.6 1.6s-1.2 1.1-1.4 1.7c-.3.6-.3 1.2 0 1.8.4.9 1.2 1.3 2.3 1.3 1.1 0 2.5-.4 4-1.1 1.1-.5 2-1.2 2.7-1.8s1.1-1.7 1.1-2.3zM253.7 781.9l-2.7-5.6-5.1 2.5-.4-.7 12.4-6 .4.7-5.2 2.5 2.7 5.6-2.1 1z"></path>
      </g>
    </svg>
    </div>
  )
}
export default Template
