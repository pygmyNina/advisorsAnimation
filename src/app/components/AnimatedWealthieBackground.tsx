import svgPaths from "../../imports/WealthieAdivsorsBackground/svg-vr8aao88ql";
import "./AnimatedWealthieBackground.css";

function GridLines() {
  const horizontalLines = Array.from({ length: 8 }, (_, i) => i);
  const verticalLines = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {horizontalLines.map((i) => (
        <div
          key={`h-grid-${i}`}
          className="absolute left-0 w-full h-[1px] bg-gray-600/30"
          style={{ top: `${(i + 1) * 11.11}%` }}
        />
      ))}
      {verticalLines.map((i) => (
        <div
          key={`v-grid-${i}`}
          className="absolute top-0 h-full w-[1px] bg-gray-600/30"
          style={{ left: `${(i + 1) * 7.69}%` }}
        />
      ))}
    </div>
  );
}

function LaserBeams() {
  return (
    <>
      {/* Horizontal laser beam 1 */}
      <div className="laser-beam-horizontal" style={{ top: '33.33%' }}>
        <div className="laser-glow-horizontal laser-animate-h1" />
      </div>

      {/* Horizontal laser beam 2 */}
      <div className="laser-beam-horizontal" style={{ top: '66.66%' }}>
        <div className="laser-glow-horizontal laser-animate-h2" />
      </div>

      {/* Vertical laser beam 1 */}
      <div className="laser-beam-vertical" style={{ left: '38.45%' }}>
        <div className="laser-glow-vertical laser-animate-v1" />
      </div>

      {/* Vertical laser beam 2 */}
      <div className="laser-beam-vertical" style={{ left: '69.21%' }}>
        <div className="laser-glow-vertical laser-animate-v2" />
      </div>
    </>
  );
}

function AnimatedWealthieSqr() {
  const paths = [
    svgPaths.pd5df580,
    svgPaths.pb2e6ef0,
    svgPaths.p35016900,
    svgPaths.p389a9400,
    svgPaths.pd576300,
    svgPaths.p3c2d4990,
    svgPaths.p398da800,
  ];

  return (
    <div className="absolute h-[933.989px] left-[-11px] top-[90.01px] w-[1464.48px]" data-name="WealthieSqr">
      <div className="absolute inset-[0_-0.27%_-0.86%_-0.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472.48 941.989">
          <g id="WealthieSqr">
            <g filter="url(#filter0_d_1_14)" id="Vector">
              {paths.map((pathData, index) => (
                <path
                  key={index}
                  d={pathData}
                  fill="var(--fill-0, #EDE9FE)"
                  fillOpacity="0.32"
                  shapeRendering="crispEdges"
                />
              ))}
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
        <GridLines />
        <LaserBeams />
      </div>
    </div>
  );
}

function WealthieBackdropLogo() {
  return (
    <div className="absolute h-[1024px] left-0 overflow-clip top-0 w-[1440px]" data-name="Wealthie Backdrop Logo">
      <AnimatedWealthieSqr />
    </div>
  );
}

export default function AnimatedWealthieBackground() {
  return (
    <div className="bg-[#1c242e] relative size-full overflow-hidden" data-name="Animated Wealthie Background">
      <WealthieBackdropLogo />
    </div>
  );
}
