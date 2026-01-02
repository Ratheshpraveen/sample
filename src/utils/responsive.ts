import { Theme } from '@mui/material/styles';

export const responsiveSpacing = (theme: Theme) => ({
  mobile: theme.spacing(2),
  tablet: theme.spacing(3),
  desktop: theme.spacing(4),
});

export const responsiveFontSizes = (theme: Theme) => ({
  mobile: {
    h1: theme.typography.pxToRem(24),
    h2: theme.typography.pxToRem(20),
    body1: theme.typography.pxToRem(14),
  },
  desktop: {
    h1: theme.typography.pxToRem(32),
    h2: theme.typography.pxToRem(26),
    body1: theme.typography.pxToRem(16),
  },
});

export const mobileFirstBreakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const createResponsiveStyles = (theme: Theme) => ({
  container: {
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4),
    },
  },
  flexColumn: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column' as const,
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row' as const,
    },
  },
});
