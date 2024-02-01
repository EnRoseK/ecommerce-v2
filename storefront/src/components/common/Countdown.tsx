import React from 'react';
import CountdownExternal, { CountdownRenderProps, zeroPad } from 'react-countdown';

interface CountdownProps {
  date: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ date }) => {
  return <CountdownExternal date={date} renderer={rendererFunction} />;
};

const rendererFunction = ({
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps): React.ReactNode => {
  if (completed) {
    return <></>;
  }

  const counts = [hours, minutes, seconds];

  return (
    <span className='ml-2 flex items-center pr-6 font-semibold text-brand-light'>
      {counts.map((count, index, arr) => {
        const isLastElement = index === arr.length - 1;

        return (
          <React.Fragment key={index}>
            <span className='mx-1 flex min-h-[30px] min-w-[30px] items-center justify-center rounded bg-brand-light p-1 text-brand-dark md:mx-1.5 md:min-w-[37px]'>
              {zeroPad(count)}
            </span>
            {!isLastElement && <>:</>}
          </React.Fragment>
        );
      })}
    </span>
  );
};
