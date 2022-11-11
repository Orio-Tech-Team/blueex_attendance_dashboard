import Drawer from '@mui/material/Drawer';
import SidebarItems from './SidebarItems';

const drawerWidth = 240;

interface Props {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDrawerToggle: () => void;
}

const Sidebar = ({ mobileOpen, setMobileOpen, handleDrawerToggle }: Props) => {
  let container: any = undefined;

  if (typeof window !== 'undefined') {
    container = window.document.body;
  }

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <SidebarItems />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <SidebarItems />
      </Drawer>
    </>
  );
};

export default Sidebar;
