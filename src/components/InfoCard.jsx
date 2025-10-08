import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function InfoCard() {
  return (
    <Card
      sx={{
        maxWidth: 700,
        mx: 'auto',         // center horizontally
        mt: 6,
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden'
      }}
    >
      {/* Top bar with dots */}
      <Box
        sx={{
          backgroundColor: 'rgb(38,50,56)', // your secondary_background color
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          px: 2,
          py: 1
        }}
      >
        {/* three dots */}
        <Box sx={{ width: 12, height: 12, bgcolor: 'red', borderRadius: '50%' }} />
        <Box sx={{ width: 12, height: 12, bgcolor: 'orange', borderRadius: '50%' }} />
        <Box sx={{ width: 12, height: 12, bgcolor: 'green', borderRadius: '50%' }} />
      </Box>

      {/* Content */}
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography
          variant="body1"
          sx={{ mb: 2, fontSize: '1.15rem', color: 'gray' }}
        >
          I am a passionate <strong>data-driven problem solver</strong> who loves turning 
          complex information into clear insights and impactful solutions. Over the past few 
          years I’ve worked on projects that improved decision-making, streamlined workflows 
          and made technology easier to use for teams and customers.
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: '1.15rem', color: 'gray' }}
        >
          My journey has been shaped by curiosity and a strong desire to learn. I enjoy 
          collaborating with people from different backgrounds, adapting to new challenges, 
          and bringing fresh ideas to life. I’m excited to grow as a <strong>data scientist </strong> 
          and help organizations unlock the power of data to create real business impact.
        </Typography>
      </CardContent>
    </Card>
  )
}
