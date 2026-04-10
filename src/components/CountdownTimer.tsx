import { useState, useEffect } from "react";

// ─── Config ────────────────────────────────────────────────────────────────
const TARGET_DATE = new Date("2026-04-21T09:00:00");

// ─── Hook ──────────────────────────────────────────────────────────────────
const useCountdown = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
      setTime({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
};

// ─── Ring Unit ─────────────────────────────────────────────────────────────
interface RingUnitProps {
  value: number;
  label: string;
  max: number;
  accentColor?: string;
}

const RingUnit = ({ value, label, max, accentColor = "#000000" }: RingUnitProps) => {
  const SIZE       = 130;
  const STROKE     = 4;
  const GAP        = 6;                                   // gap between track and inner circle
  const radius     = (SIZE / 2) - STROKE / 2;
  const circumference = 2 * Math.PI * radius;
  const progress   = Math.max(0, Math.min(1, value / max));
  const offset     = circumference * (1 - progress);
  const innerSize  = SIZE - STROKE * 2 - GAP * 2;

  return (
    <div className="flex flex-col items-center gap-4 select-none">
      {/* Outer glow wrapper */}
      <div
        className="relative"
        style={{ width: SIZE, height: SIZE }}
      >
        {/* Glow behind the ring */}
        <div
          className="absolute inset-0 rounded-full opacity-20 blur-md pointer-events-none"
          style={{ background: accentColor }}
        />

        {/* SVG Ring */}
        <svg
          width={SIZE}
          height={SIZE}
          className="absolute inset-0 rotate-[-90deg]"
          style={{ filter: "drop-shadow(0 0 6px rgba(0,0,0,0.2))" }}
        >
          {/* Track */}
          <circle
            cx={SIZE / 2} cy={SIZE / 2} r={radius}
            fill="none"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth={STROKE}
          />
          {/* Progress arc */}
          <circle
            cx={SIZE / 2} cy={SIZE / 2} r={radius}
            fill="none"
            stroke={accentColor}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.75s cubic-bezier(0.4,0,0.2,1)" }}
          />
        </svg>

        {/* Inner light disc */}
        <div
          className="absolute rounded-full flex items-center justify-center bg-white"
          style={{
            top:    STROKE + GAP,
            left:   STROKE + GAP,
            width:  innerSize,
            height: innerSize,
            boxShadow: "inset 0 2px 8px rgba(0,0,0,0.05), border 1px solid rgba(0,0,0,0.05)",
          }}
        >
          {/* Number */}
          <span
            className="font-bold text-black leading-none"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "-0.02em",
            }}
          >
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Label */}
      <span
        className="text-[10px] sm:text-[11px] uppercase font-semibold tracking-[0.3em]"
        style={{ color: "rgba(27, 54, 93, 0.7)" }}
      >
        {label}
      </span>
    </div>
  );
};

// ─── Separator dot ─────────────────────────────────────────────────────────
const Separator = () => (
  <div className="flex flex-col items-center justify-center gap-2 pb-8 self-center">
    <span className="w-1 h-1 rounded-full bg-black/20" />
    <span className="w-1 h-1 rounded-full bg-black/20" />
  </div>
);

// ─── Main Component ────────────────────────────────────────────────────────
const CountdownTimer = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-white">
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="mb-12 sm:mb-16 w-full flex justify-center">
          <h2 className="section-title">
            Event Commences in
          </h2>
        </div>

        {/* Rings row */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <RingUnit value={days}    label="Days"    max={365} />
          <Separator />
          <RingUnit value={hours}   label="Hours"   max={24}  />
          <Separator />
          <RingUnit value={minutes} label="Minutes" max={60}  />
          <Separator />
          <RingUnit value={seconds} label="Seconds" max={60}  />
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
