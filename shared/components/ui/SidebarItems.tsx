import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  drawerToggle: () => void;
}

const SidebarItems = ({ drawerToggle }: Props) => {
  const router = useRouter();

  const items = [
    {
      name: 'Attendance',
      icon: <AssignmentTurnedInIcon />,
      link: '/dashboard',
    },
    {
      name: 'Add Attendance',
      icon: <AssignmentTurnedInIcon />,
      link: '/dashboard/add-attendance',
    },
  ];

  const onClick = (link: string) => {
    drawerToggle();
    router.push(link);
  };

  return (
    <div>
      <Toolbar />
      <div className=""></div>
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => onClick(item.link)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SidebarItems;
