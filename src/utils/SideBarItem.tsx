import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const SidebarUserItems = [
  {
    text: "Users",
    icon: PersonIcon,
    link: "/users",
    subItems: [
      { text: "Add Employees", link: "/addEmployees", icon: PersonIcon },
      { text: "Add Agents", link: "/addAgents", icon: PersonIcon },
      { text: "View Agents", link: "/viewAgents", icon: PersonIcon },
      { text: "View Employees", link: "/viewEmployees", icon: PersonIcon },
    ],
  },
];

export const ApplicationItems = [
  {
    text: "Applications",
    icon: PersonIcon,
    link: "/applications",
    subItems: [
      { text: "Add Application", link: "/addApplication", icon: PersonIcon },
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
  icon: PersonIcon,
  link: "transactionReport",
  subItems: [
    {
      text: "Trasaction Report",
      link: "/transactionReport",
      icon: DashboardIcon,
    },
    {
      text: "View Report",
      link: "/viewReport",
      icon: DashboardIcon,
    },
  ]
 }
];

export const Reports = [
  {
    text: "Reports",
    icon: PersonIcon,
    link: "/reports",
    subItems: [
      {
        text: "Overview",
        link: "/overview",
        icon: DashboardIcon,
      },
      {
        text: "Sales",
        icon: PersonIcon,
        link: "/sales",
      },
      {
        text: "Revenue",
        icon: PersonIcon,
        link: "/revenue",
      },
      {
        text: "Commission Recieved",
        icon: PersonIcon,
        link: "/commissionReceived",
      },
      {
        text: "Commission Shared",
        icon: PersonIcon,
        link: "/commissionShared",
      },
      {
        text: "Residual Received",
        icon: PersonIcon,
        link: "/residualReceived",
      },
      {
        text: "Residual Shared",
        icon: PersonIcon,
        link: "/residualShared",
      },
      {
        text: "Clawbacks",
        icon: PersonIcon,
        link: "/clawbacks",
      },
      {
        text: "Application",
        icon: PersonIcon,
        link: "/application",
      },
    ],
  },
];

export const Notification = [
  {
    text: "Notification",
    icon: PersonIcon,
    link: "/notification",
    subItems: [
      {
        text: "List",
        link: "/notificationList",
        icon: DashboardIcon,
      },
      {
        text: "Create",
        link: "/createNotication",
        icon: DashboardIcon,
      },
      {
        text: "Recieved Notification",
        icon: PersonIcon,
        link: "/receivedNotification",
      },
    ],
  },
];

export  const Messages = [
  {
    text: "Messages",
    icons: DashboardIcon,
    link: "/messages"
  }
]
export  const DeleteData = [
  {
    text: "Delete Data",
    icons: DashboardIcon,
    link: "/DeleteData"
  }
]
