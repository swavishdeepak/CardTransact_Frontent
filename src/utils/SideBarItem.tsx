import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from '@mui/icons-material/Message';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReportIcon from '@mui/icons-material/Report';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CreateIcon from '@mui/icons-material/Create';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DetailsIcon from '@mui/icons-material/Details';
import AddBoxIcon from '@mui/icons-material/AddBox';


export const SidebarUserItems = [
  {
    text: "Users",
    icon: PersonIcon,
    link: "/users",
    subItems: [
      { text: "View Employees", link: "/viewEmployee", icon: DashboardIcon },
      { text: "View Agents", link: "/viewAgents", icon: DashboardIcon },
      { text: "Add Employees", link: "/addEmployee", icon: PersonAddAlt1Icon},
      { text: "Add Agents", link: "/addAgent", icon: PersonAddAlt1Icon},
    
    
    ],
  },
];

export const ApplicationItems = [
  {
    text: "Applications",
    icon: PersonIcon,
    link: "/applications",
    subItems: [
      { text: "Add Application", link: "/addApplication", icon: PersonAddAlt1Icon },
      {
        text: "View Applications",
        link: "/viewApplications",
        icon: PersonIcon,
      },
    ],
  },
];

export const Dashboard = [
  {
    text: "Dashboard",
    icon: DashboardIcon,
    link: "/dashboard",
  },
];

export const MerchantItem = [
  {
    text: "Merchants",
    icon: PersonIcon,
    link: "/merchants",
  },
];

export const Commission = [
  {
    text: "Commission",
    icon: PersonIcon,
    link: "/commission",
    subItems: [
      {
        text: "All Commission",
        icon: PersonIcon,
        link: "/allCommission",
      },
      {
        text: "Commission Structure",
        icon: PersonIcon,
        link: "/commissionStructure",
      },
      {
        text: "View Structure",
        icon: PersonIcon,
        link: "/viewStructure",
      },
      {
        text: "All Card rates",
        icon: PersonIcon,
        link: "/allCardRates",
      },
      {
        text: "View Card Rates",
        icon: PersonIcon,
        link: "/viewCardRates",
      },
    ],
  },
];

export const TransactionReport = [
  {
    text: "Transaction Report",
    icon: ReportRoundedIcon,
    link: "transactionReport",
    subItems: [
      {
        text: "Transaction Report",
        link: "/transactionReport",
        icon: DashboardIcon,
      },
      {
        text: "View Report",
        link: "/viewReport",
        icon: DashboardIcon,
      },
    ],
  },
];

export const Reports = [
  {
    text: "Reports",
    icon: ReportIcon,
    link: "/reports",
    subItems: [
      {
        text: "Overview",
        link: "/report/overview",
        icon: DashboardIcon,
      },
      {
        text: "Sales",
        icon: PersonIcon,
        link: "/report/overview/salesDetails",
      },
      {
        text: "Revenue",
        icon: PersonIcon,
        link: "/revenueDetails",
      },
      {
        text: "Commission Recieved",
        icon: PersonIcon,
        link: "/commissionReceivedDetails",
      },
      {
        text: "Commission Shared",
        icon: PersonIcon,
        link: "/commissionSharedDetails",
      },
      {
        text: "Residual Received",
        icon: PersonIcon,
        link: "/residualReceivedDetails",
      },
      {
        text: "Residual Shared",
        icon: PersonIcon,
        link: "/residualSharedDetails",
      },
      {
        text: "Clawbacks",
        icon: PersonIcon,
        link: "/clawbacks",
      },
      {
        text: "Applications",
        icon: PersonIcon,
        link: "/application",
      },
    ],
  },
];

export const Notification = [
  {
    text: "Notification",
    icon: NotificationsIcon,
    link: "/notification",
    subItems: [
      {
        text: "List",
        link: "/notificationList",
        icon: ListAltIcon,
      },
      {
        text: "Create",
        link: "/createNotication",
        icon: AddBoxIcon,
      },
      {
        text: "Recieved Notification",
        icon: PersonIcon,
        link: "/receivedNotification",
      },
    ],
  },
];

export const Messages = [
  {
    text: "Messages",
    icon: MessageIcon,
    link: "/messages",
  },
];
export const DeleteData = [
  {
    text: "Delete Data",
    icon: DeleteIcon,
    link: "/DeleteData",
  },
];










// export const sideBarList = [
//   {
//     text: "Dashboard",
//     icon: DashboardIcon,
//     link: "/dashboard",
//   },
//   {
//     text: "Users",
//     icon: PersonIcon,
//     link: "/users",
//     subItems: [
//       { text: "Add Employees", link: "/addEmployees", icon: PersonIcon },
//       { text: "Add Agents", link: "/addAgents", icon: PersonIcon },
//       { text: "View Agents", link: "/viewAgents", icon: PersonIcon },
//       { text: "View Employees", link: "/viewEmployees", icon: PersonIcon },
//     ],
//   },
//   {
//     text: "Applications",
//     icon: PersonIcon,
//     link: "/applications",
//     subItems: [
//       { text: "Add Application", link: "/addApplication", icon: PersonIcon },
//       {
//         text: "View Applications",
//         link: "/viewApplications",
//         icon: PersonIcon,
//       },
//     ],
//   },
//   {
//     text: "Merchants",
//     icon: PersonIcon,
//     link: "/merchants",
//   },
//   {
//     text: "Commission",
//     icon: PersonIcon,
//     link: "/commission",
//     subItems: [
//       {
//         text: "All Commission",
//         icon: PersonIcon,
//         link: "/allCommission",
//       },
//       {
//         text: "Commission Structure",
//         icon: PersonIcon,
//         link: "/commissionStructure",
//       },
//       {
//         text: "View Structure",
//         icon: PersonIcon,
//         link: "/viewStructure",
//       },
//       {
//         text: "All Card rates",
//         icon: PersonIcon,
//         link: "/allCardRates",
//       },
//       {
//         text: "View Card Rates",
//         icon: PersonIcon,
//         link: "/viewCardRates",
//       },
//     ],
//   },
//   {
//     text: "Transaction Report",
//     icon: PersonIcon,
//     link: "transactionReport",
//     subItems: [
//       {
//         text: "Transaction Report",
//         link: "/transactionReport",
//         icon: DashboardIcon,
//       },
//       {
//         text: "View Report",
//         link: "/viewReport",
//         icon: DashboardIcon,
//       },
//     ],
//   },
//   {
//     text: "Reports",
//     icon: PersonIcon,
//     link: "/reports",
//     subItems: [
//       {
//         text: "Overview",
//         link: "/overview",
//         icon: DashboardIcon,
//       },
//       {
//         text: "Sales",
//         icon: PersonIcon,
//         link: "/sales",
//       },
//       {
//         text: "Revenue",
//         icon: PersonIcon,
//         link: "/revenue",
//       },
//       {
//         text: "Commission Recieved",
//         icon: PersonIcon,
//         link: "/commissionReceived",
//       },
//       {
//         text: "Commission Shared",
//         icon: PersonIcon,
//         link: "/commissionShared",
//       },
//       {
//         text: "Residual Received",
//         icon: PersonIcon,
//         link: "/residualReceived",
//       },
//       {
//         text: "Residual Shared",
//         icon: PersonIcon,
//         link: "/residualShared",
//       },
//       {
//         text: "Clawbacks",
//         icon: PersonIcon,
//         link: "/clawbacks",
//       },
//       {
//         text: "Applications",
//         icon: PersonIcon,
//         link: "/application",
//       },
//     ],
//   },
//   {
//     text: "Notification",
//     icon: PersonIcon,
//     link: "/notification",
//     subItems: [
//       {
//         text: "List",
//         link: "/notificationList",
//         icon: DashboardIcon,
//       },
//       {
//         text: "Create",
//         link: "/createNotication",
//         icon: DashboardIcon,
//       },
//       {
//         text: "Recieved Notification",
//         icon: PersonIcon,
//         link: "/receivedNotification",
//       },
//     ],
//   },
//   {
//     text: "Messages",
//     icons: DashboardIcon,
//     link: "/messages",
//   },
//   {
//     text: "Delete Data",
//     icons: DashboardIcon,
//     link: "/DeleteData",
//   },
// ];
