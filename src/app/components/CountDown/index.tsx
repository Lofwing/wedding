import React, {useEffect, useState} from 'react';

type CountdownProps = {
  targetDate: string | Date; // t.ex. "2026-01-31T18:00:00"
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (target: Date): TimeLeft | null => {
  const diff = target.getTime() - new Date().getTime();

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const Countdown: React.FC<CountdownProps> = ({targetDate}) => {
  const target = new Date(targetDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft(target)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  if (!timeLeft) {
    return <span>Tiden är ute 🎉</span>;
  }

  return (
    <div
      style={{display: 'flex', gap: '1rem'}}
      className='items-center justify-center'
    >
      <TimeBox label='Dagar' value={timeLeft.days} />
      <TimeBox label='Timmar' value={timeLeft.hours} />
      <TimeBox label='Minuter' value={timeLeft.minutes} />
      <TimeBox label='Sekunder' value={timeLeft.seconds} />
    </div>
  );
};

const TimeBox = ({label, value}: {label: string; value: number}) => (
  <div style={{textAlign: 'center'}}>
    <div style={{fontSize: '2rem', fontWeight: 'bold'}}>{value}</div>
    <div style={{fontSize: '0.8rem'}}>{label}</div>
  </div>
);
