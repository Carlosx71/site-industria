import React from 'react';

import { Box, Modal } from '@mui/material';

import useStyles from './styles';

const boxPaper = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  background: 'primary.main',
  boxShadow: 24,
  p: 4,
  maxHeight: '650px',
  minWidth: '300px',
};

interface Props {
  handleModal: () => void;
  open: boolean;
  children: React.ReactNode;
  withBox: boolean;
}

const CustomModal = ({ handleModal, open, children, withBox }: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          bgcolor: 'primary.secondary',
          backdropFilter: 'blur(6px)',
        }}
      >
        <>
          {withBox && (
            <Box sx={boxPaper} style={{ overflowY: 'scroll' }}>
              {children}
            </Box>
          )}
          {!withBox && <Box className={classes.boxCenter}>{children}</Box>}
        </>
      </Modal>
    </div>
  );
};

export default CustomModal;
