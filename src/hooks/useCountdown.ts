import { useEffect, useState } from "react";

const pad = (n: number) => (n < 10 ? "0" : "") + n;

export interface TimeLeft {
  d: string;
  h: string;
  m: string;
  s: string;
}

/** Live countdown to a target date. */
export function useCountdown(target: Date): TimeLeft {
  const calc = (): TimeLeft => {
    let diff = target.getTime() - Date.now();
    if (diff < 0) diff = 0;
    let s = Math.floor(diff / 1000);
    const d = Math.floor(s / 86400);
    s -= d * 86400;
    const h = Math.floor(s / 3600);
    s -= h * 3600;
    const m = Math.floor(s / 60);
    s -= m * 60;
    return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) };
  };

  const [time, setTime] = useState<TimeLeft>(calc);

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return time;
}
