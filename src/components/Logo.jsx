import React from 'react';
import { Box } from '@mui/material';

const Logo = ({ size = 48, showText = true, variant = 'default' }) => {
  const getLogoContent = () => {
    switch (variant) {
      case 'icon':
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#FF6B35"/>
            <path d="M14 12V36H18V26H30V36H34V12H30V22H18V12H14Z" fill="white"/>
            <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
          </svg>
        );
      
      case 'text':
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#FF6B35"/>
              <path d="M14 12V36H18V26H30V36H34V12H30V22H18V12H14Z" fill="white"/>
              <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
            </svg>
            {showText && (
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                lineHeight: 1
              }}>
                <span style={{ 
                  fontSize: `${size * 0.4}px`, 
                  fontWeight: 700, 
                  color: '#FF6B35',
                  letterSpacing: '-0.02em'
                }}>
                  HABITS
                </span>
                <span style={{ 
                  fontSize: `${size * 0.25}px`, 
                  fontWeight: 400, 
                  color: '#666',
                  letterSpacing: '0.05em'
                }}>
                  TRACKER
                </span>
              </Box>
            )}
          </Box>
        );
      
      default:
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#FF6B35"/>
              <path d="M14 12V36H18V26H30V36H34V12H30V22H18V12H14Z" fill="white"/>
              <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
            </svg>
            {showText && (
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                lineHeight: 1
              }}>
                <span style={{ 
                  fontSize: `${size * 0.4}px`, 
                  fontWeight: 700, 
                  color: '#FF6B35',
                  letterSpacing: '-0.02em'
                }}>
                  HABITS
                </span>
                <span style={{ 
                  fontSize: `${size * 0.25}px`, 
                  fontWeight: 400, 
                  color: '#666',
                  letterSpacing: '0.05em'
                }}>
                  TRACKER
                </span>
              </Box>
            )}
          </Box>
        );
    }
  };

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      {getLogoContent()}
    </Box>
  );
};

export default Logo;
