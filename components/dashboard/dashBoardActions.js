import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

export function DashboardAction({ action }) {
  return (
    <ListItemButton onClick={action}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  );
}

export function OrdersAction({ action }) {
  return (
    <ListItemButton onClick={action}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
  );
}
export function CustomersAction({ action }) {
  return (
    <ListItemButton onClick={action}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
  );
}
export function ReportsAction({ action }) {
  return (
    <ListItemButton onClick={action}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
  );
}
export function IntegrationsAction({ action }) {
  return (
    <ListItemButton onClick={action}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  );
}

export function CurrentMonthAction({ action }) {
  return (
    <ListItemButton onClick={action}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
  );
}

<ListSubheader component="div" inset>
  Saved reports
</ListSubheader>;
