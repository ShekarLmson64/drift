import { ThemeOptions } from '@mui/material/styles'

const themeOverrides: ThemeOptions = {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            padding: '10px',
            borderRadius: '30px',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid #E6E6E6',
            borderRadius: '30px',
          },
        },
      ],
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
}

export default themeOverrides
