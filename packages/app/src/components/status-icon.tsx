import React, { CSSProperties } from 'react';

interface StatusCircleProps {
  status: 'online' | 'offline';
}

const StatusCircle: React.FC<StatusCircleProps> = ({ status }) => {
  const isOnline = status === 'online';

  const pulseAnimation = `
    @keyframes pulse {
      0% {
        transform: scale(0.33);
      }
      80%, 100% {
        opacity: 0;
      }
    }
  `;

  const circleAnimation = `
    @keyframes circle {
      0% {
        transform: scale(0.8);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.8);
      }
    }
  `;

  const circleStyles: CSSProperties = {
    width: '16px',
    height: '16px',
    position: 'relative'
  };

  const beforeStyles: CSSProperties = {
    content: '""',
    position: 'absolute',
    display: 'block',
    width: '250%',
    height: '250%',
    boxSizing: 'border-box',
    marginLeft: '-75%',
    marginTop: '-75%',
    borderRadius: '45px',
    backgroundColor: isOnline ? '#75daad' : '#f87171',
    animation: 'pulse 2s cubic-bezier(0.215, 0.61, 0.355, 0.8) infinite'
  };

  const afterStyles: CSSProperties = {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '0',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: isOnline ? '#75daad' : '#f87171',
    borderRadius: '50px',
    animation: 'circle 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite'
  };

  return (
    <div style={circleStyles}>
      <style>{pulseAnimation}</style>
      <style>{circleAnimation}</style>
      <div style={beforeStyles}></div>
      <div style={afterStyles}></div>
    </div>
  );
};

export default StatusCircle;
