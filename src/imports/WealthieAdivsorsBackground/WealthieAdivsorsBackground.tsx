import svgPaths from "./svg-vr8aao88ql";

function WealthieSqr() {
  return (
    <div className="absolute h-[933.989px] left-[-11px] top-[90.01px] w-[1464.48px]" data-name="WealthieSqr">
      <div className="absolute inset-[0_-0.27%_-0.86%_-0.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472.48 941.989">
          <g id="WealthieSqr">
            <g filter="url(#filter0_d_1_14)" id="Vector">
              <path d={svgPaths.pd5df580} fill="var(--fill-0, #EDE9FE)" fillOpacity="0.32" shapeRendering="crispEdges" />
              <path d={svgPaths.pb2e6ef0} fill="var(--fill-0, #EDE9FE)" fillOpacity="0.32" shapeRendering="crispEdges" />
              <path d={svgPaths.p35016900} fill="var(--fill-0, #EDE9FE)" fillOpacity="0.32" shapeRendering="crispEdges" />
              <path d={svgPaths.p389a9400} fill="var(--fill-0, #EDE9FE)" fillOpacity="0.32" shapeRendering="crispEdges" />
              <path d={svgPaths.pd576300} fill="var(--fill-0, #EDE9FE)" fillOpacity="0.32" shapeRendering="crispEdges" />
              <path d={svgPaths.p3c2d4990} fill="var(--fill-0, #EDE9FE)" fillOpacity="0.32" shapeRendering="crispEdges" />
              <path d={svgPaths.p398da800} fill="var(--fill-0, #EDE9FE)" fillOpacity="0.32" shapeRendering="crispEdges" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="941.989" id="filter0_d_1_14" width="1472.48" x="-9.93023e-08" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_14" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_14" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WealthieBackdropLogo() {
  return (
    <div className="absolute h-[1024px] left-0 overflow-clip top-0 w-[1440px]" data-name="Wealthie Backdrop Logo">
      <WealthieSqr />
    </div>
  );
}

export default function WealthieAdivsorsBackground() {
  return (
    <div className="bg-[#1c242e] relative size-full" data-name="Wealthie Adivsors Background">
      <WealthieBackdropLogo />
    </div>
  );
}