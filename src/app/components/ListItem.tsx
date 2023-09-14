import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ReportIcon from '@mui/icons-material/Report';
import Link from 'next/link';
import { usePathname  } from 'next/navigation';

export const AdminListItems = () => {
  const pathname = usePathname();
  
  const sideBarLink = [
    {
      name:'Dashboard',
      link: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      name:'Teachers',
      link: '/dashboard/teacher',
      icon: <PersonIcon />
    },
    {
      name:'Student',
      link: '/dashboard/student',
      icon: <GroupIcon /> 
    },
  ]

 return <React.Fragment>
    {
      sideBarLink.map(({link, name, icon}) => 
      <Link href={link} key={name} className={`${pathname === link ? 'active' : ''}`}>
        <ListItemButton>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
     </Link>)
    }
  </React.Fragment>
};

export const StudentListItems = () => {
  const pathname = usePathname();
  
  const sideBarLink = [
    {
      name:'Home',
      link: '/dashboard',
      icon: <HomeIcon />
    },
    {
      name:'Exam Schedules',
      link: '/dashboard/teacher',
      icon:  <EventNoteIcon />
    },
    {
      name:'Reports',
      link: '/dashboard/student',
      icon:  <ReportIcon />
    },
  ]

  return <React.Fragment>
      {
        sideBarLink.map(({link, name, icon}) => 
        <Link href={link} key={name} className={`${pathname === link ? 'active' : ''}`}>
          <ListItemButton>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItemButton>
      </Link>)
      }
  </React.Fragment>
}