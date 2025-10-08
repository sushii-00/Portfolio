import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CodeIcon from '@mui/icons-material/Code';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../assets/colors';

export default function Appbar() {
  const { pathname } = useLocation();

  const navItems = [
    { label: 'Home', icon: <HomeIcon sx={{ fontSize: 32 }} />, path: '/' },
    { label: 'Projects', icon: <GitHubIcon sx={{ fontSize: 32 }} />, path: '/projects' },
    { label: 'Blogs', icon: <RssFeedIcon sx={{ fontSize: 32 }} />, path: '/research' },
    { label: 'Skills', icon: <CodeIcon sx={{ fontSize: 32 }} />, path: '/skills' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: colors.secondary_background }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: 4, p: 0 }}>
        {navItems.map(item => (
          <Button
            key={item.path}
            component={Link}
            to={item.path}
            color="inherit"
            startIcon={item.icon}
            sx={{
              textTransform: 'none',
              fontSize: '1rem',
              minHeight: '64px',               // match default AppBar height
              borderBottom: pathname === item.path ? '4px solid white' : '4px solid transparent',
              borderRadius: 0,
              padding: '0 16px',               // horizontal padding only
              '&:hover': { borderBottom: '4px solid white' }
            }}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
