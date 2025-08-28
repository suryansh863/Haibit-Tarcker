import React, { useState, useEffect } from 'react';
import { Button, Snackbar, Alert, Box, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import InfoIcon from '@mui/icons-material/Info';

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isInstalled = window.matchMedia('(display-mode: standalone)').matches || 
                       window.navigator.standalone === true;
    
    if (isInstalled) {
      setShowInstallButton(false);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      console.log('Install prompt available');
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      console.log('App installed successfully');
      setShowInstallButton(false);
      setSnackbarMessage('App installed successfully! 🎉 You can now access it from your home screen.');
      setSnackbarSeverity('success');
      setShowSnackbar(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Show manual instructions if install prompt doesn't appear after 3 seconds
    const timer = setTimeout(() => {
      if (!showInstallButton) {
        setShowInstructions(true);
      }
    }, 3000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      clearTimeout(timer);
    };
  }, [showInstallButton]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      setSnackbarMessage('Installation not available. Please use your browser\'s menu to install.');
      setSnackbarSeverity('warning');
      setShowSnackbar(true);
      setShowInstructions(true);
      return;
    }

    try {
      // Show the install prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        setSnackbarMessage('Installation started! 📱 Check your home screen.');
        setSnackbarSeverity('success');
      } else {
        setSnackbarMessage('Installation cancelled. You can try again later.');
        setSnackbarSeverity('info');
      }
    } catch (error) {
      console.error('Installation error:', error);
      setSnackbarMessage('Installation failed. Please try using your browser\'s menu.');
      setSnackbarSeverity('error');
      setShowInstructions(true);
    }

    setShowSnackbar(true);
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const handleInstructionsClose = () => {
    setShowInstructions(false);
  };

  if (!showInstallButton && !showInstructions) {
    return null;
  }

  return (
    <>
      {showInstallButton && (
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={handleInstallClick}
          sx={{
            position: 'fixed',
            top: 24,
            right: 24,
            bgcolor: '#10b981',
            color: 'white',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
            zIndex: 1000,
            '&:hover': {
              bgcolor: '#059669',
              transform: 'translateY(-1px)',
              boxShadow: '0 6px 16px rgba(16, 185, 129, 0.4)',
            }
          }}
        >
          Install App
        </Button>
      )}

      {showInstructions && (
        <Box
          sx={{
            position: 'fixed',
            top: 24,
            right: 24,
            bgcolor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: 3,
            p: 3,
            maxWidth: 300,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            zIndex: 1000,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <InfoIcon sx={{ color: '#6366f1', mr: 1 }} />
            <Typography variant="h6" sx={{ color: '#1e293b', fontWeight: 600 }}>
              Install App
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
            To install this app on your phone:
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b', mb: 1 }}>
            <strong>Android (Chrome):</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b', mb: 2, fontSize: '0.875rem' }}>
            • Tap ⋮ menu → "Add to Home screen"
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b', mb: 1 }}>
            <strong>iPhone (Safari):</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b', mb: 2, fontSize: '0.875rem' }}>
            • Tap 📤 share → "Add to Home Screen"
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={handleInstructionsClose}
            sx={{ color: '#6366f1', borderColor: '#6366f1' }}
          >
            Got it
          </Button>
        </Box>
      )}

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default InstallButton;
