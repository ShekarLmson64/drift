import { blue, red } from '@mui/material/colors'
import { ThemeOptions } from '@mui/material/styles'

const themeOverrides: ThemeOptions = {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${blue[500]}`,
            padding: '30px',
            ':hover': {
              backgroundColor: 'red',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'secondary' },
          style: {
            border: `4px dashed ${red[500]}`,
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
