import { useEffect, useState } from 'react';
import styled from 'styled-components';

const getWaveParams = (length: number): { viewBox: string; d: string } => {
  const viewBox = `0 0 ${length * 100} 100`;
  const d = `M 0 50${new Array(length + 2)
    .fill(0)
    .map(
      (x, index) =>
        ` Q ${index * 100 + 50} ${index % 2 === 0 ? 0 : 100}, ${
          (index + 1) * 100
        } 50`
    )
    .join('')}`;
  return { viewBox, d };
};

type WavyProps = {
  isWaving: boolean;
};

const WavyLine = styled.div`
  overflow: hidden;
  max-width: 50px;
  margin: auto;
  visibility: hidden;
  &.wave {
    visibility: visible;
  }
  svg {
    stroke: #a3b2ca;
    fill: transparent;
    stroke-width: 4px;
    width: 400px;
    animation: wave 4s linear infinite;
  }
  .wave svg {
  }

  @keyframes wave {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-200px);
    }
  }
`;

export const Wavy = ({ isWaving }: WavyProps) => {
  const [waveParams, setWaveParams] = useState({
    viewBox: '0 0 600 100',
    d: 'M 0 50 Q 50 0, 100 50 Q 150 100, 200 50 Q 250 0, 300 50 Q 350 100, 400 50 Q 450 0, 500 50 Q 550 100, 600 50',
  });
  useEffect(() => {
    setWaveParams(getWaveParams(36));
  }, []);
  return (
    <WavyLine className={isWaving ? 'wave' : ''}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={waveParams.viewBox}>
        <path d={waveParams.d} />
      </svg>
    </WavyLine>
  );
};
