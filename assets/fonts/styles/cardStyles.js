

export const Card = {
    // The styles all Cards have in common
    baseStyle: {
      display: 'flex',
      flexDirection: 'column',
      background: 'transparent',
      alignItems: 'start',
      gap:2,
      marginBottom: 3,
      width: '300px'
    },
    // Two variants: rounded and smooth
    variants: {
      rounded: {
        padding: 8,
        borderRadius: 'xl',
        boxShadow: 'xl',
      },
      smooth: {
        padding: 6,
        borderRadius: 'base',
      },
    },
    // The default variant value
    defaultProps: {
      variant: 'smooth',
    },
  }