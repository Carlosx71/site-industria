import React, { useState } from 'react';
import { Button, Card, CardActions, SvgIconTypeMap } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import CustomModal from 'components/CustomModal';

interface Props {
  title: string;
  description: string;
  cardActions?: boolean;
  textModal?: React.ReactNode;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

const CardsOfExpertise = ({
  icon: Icon,
  description,
  title,
  cardActions,
  textModal = '',
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <Card sx={{ maxWidth: 345, height: 336 }} elevation={3}>
      <CustomModal handleModal={handleModal} open={open} withBox>
        {textModal}
      </CustomModal>
      <CardContent sx={{ height: 290 }}>
        <div style={{ textAlign: 'center' }}>
          <Icon color="primary" fontSize="large" />
        </div>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ height: 65 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {description}
        </Typography>
      </CardContent>
      {cardActions && (
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button
            size="small"
            endIcon={<ArrowForward />}
            onClick={() => {
              handleModal();
            }}
          >
            Saiba mais
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CardsOfExpertise;
