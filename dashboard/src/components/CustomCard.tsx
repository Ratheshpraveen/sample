import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  CardActions, 
  Button, 
  CardProps 
} from '@mui/material';

interface CustomCardProps extends CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  actionLabel?: string;
  onActionClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  imageUrl,
  actionLabel = 'Learn More',
  onActionClick,
  ...cardProps
}) => {
  return (
    <Card {...cardProps}>
      {imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
      {onActionClick && (
        <CardActions>
          <Button size="small" onClick={onActionClick}>
            {actionLabel}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default CustomCard;
