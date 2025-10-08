import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FlightIcon from '@mui/icons-material/Flight';

const EXPERIENCES = [
  {
    title: 'Sr ML Engineer',
    company: 'EPAM',
    period: '2023–Present',
    desc:
      'Working to build scalable ML solutions, LLMs, and RAG architectures.',
    skills: ['ml', 'mlops', 'python', 'azure', 'llm', 'automl'],
    icon: <RocketLaunchIcon />,
  },
  {
    title: 'Sr Data Scientist',
    company: 'Globant',
    period: '2021–2023',
    desc:
      'Build AutoML models and make them available to non-technical users via a UI.',
    skills: ['ml', 'automl', 'python', 'docker', 'redshift', 'superset'],
    icon: <WhatshotIcon />,
  },
  {
    title: 'BI Manager',
    company: 'Rappi',
    period: '2019–2021',
    desc:
      'Led analytics & data science projects: ETLs, data lakes/warehouses, ML.',
    skills: ['ml', 'airflow', 'python', 'docker', 'snowflake', 'postgres', 'azure'],
    icon: <PhoneIphoneIcon />,
  },
  {
    title: 'CRM Analytics Coordinator',
    company: 'Avianca',
    period: '2018–2019',
    desc:
      'Forecast models, data warehouse and Power BI dashboards.',
    skills: ['ml', 'mssql', 'python', 'docker', 'pbi', 'azure'],
    icon: <FlightIcon />,
  },
];

function ExpCard({ item }) {
  return (
    <Card elevation={3} sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.7, mb: 1 }}>
          {item.company}
        </Typography>
        <Typography variant="body2">{item.desc}</Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
          {item.skills.map((s) => (
            <Chip key={s} label={s} size="small" variant="outlined" sx={{ mr: 0.5, mb: 0.5 }} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function ExperienceTimeline() {
  return (
    <Box sx={{ position: 'relative', maxWidth: 1100, mx: 'auto', mt: 8, px: 2 }}>
      {/* Vertical center line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: 2,
          bgcolor: 'rgba(0,0,0,0.2)',
          transform: 'translateX(-50%)',
        }}
      />

      <Stack spacing={8}>
        {EXPERIENCES.map((item, i) => {
          const isLeft = i % 2 !== 0; // even index = right card, odd index = left card
          return (
            <Grid container spacing={2} key={i} alignItems="center">
              {/* LEFT SIDE */}
              <Grid item xs={12} md={5} order={{ xs: 2, md: isLeft ? 1 : 3 }}>
                {isLeft && <ExpCard item={item} />}
              </Grid>

              {/* CENTER ICON & DATE */}
              <Grid
                item
                xs={12}
                md={2}
                order={2}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: '#263238',
                    border: '3px solid white',
                    boxShadow: 3,
                    mb: 1,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.6, mt: 1, textAlign: 'center' }}
                >
                  {item.period}
                </Typography>
              </Grid>

              {/* RIGHT SIDE */}
              <Grid item xs={12} md={5} order={{ xs: 3, md: isLeft ? 3 : 1 }}>
                {!isLeft && <ExpCard item={item} />}
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </Box>
  );
}
