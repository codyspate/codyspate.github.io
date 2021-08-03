import { ButtonHTMLAttributes, MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import { PauseSvg } from './pause';
import { PlaySvg } from './play';
import styles from './play-pause.module.css';

const PlayPauseButton = styled.button`
  background: none;
  border: none;
  &:hover {
    background: none;
    border: none;
  }
  height: 34px;
  width: 34px;
  svg {
    fill: #a3b2ca;
  }
`;

interface PlayPauseProps {
  onPlay(): void;
  isPlaying: boolean;
}

export const PlayPause = ({ onPlay = () => {}, isPlaying }: PlayPauseProps) => {
  const onClick = (e: any) => {
    onPlay();
  };
  return (
    <div>
      <PlayPauseButton
        onClick={onClick}
        className={isPlaying ? 'pause' : 'play'}
      >
        {!isPlaying ? <PlaySvg /> : <PauseSvg />}
      </PlayPauseButton>
    </div>
  );
};
