import { Typewriter } from 'react-simple-typewriter'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { colors } from '../assets/colors';
export default function Introbox() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 8,                 // margin-top: theme.spacing(8)
      }}
    >
      <Typography
        component="h1"
        sx={{ fontWeight: 'bold', mb: 2 , fontSize:"2rem"}}
      >
        Hi! I'm Sudha Sushma
      </Typography>

      <Typography
        variant="h6"
        component="h3"
        sx={{ color: "gray"}}
      >
        <Typewriter
          words={['A Data Scientist', 'An Agentic AI Engineer', 'A Machine Learning Engineer']}
          loop={0}            // 0 = infinite loop
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </Typography>
    </Box>
  )
}
