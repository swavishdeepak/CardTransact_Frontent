import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";

 export const SidebarUserItems = [
    {
      text: "Users",
      icon: PersonIcon,
      link: "/users",
      subItems: [
        { text: "Add Employees", link: "/addEmployees", icon: PersonIcon, },
        { text: "Add Agents", link: "/addAgents", icon: PersonIcon, },
        { text: "View Agents", link: "/viewAgents", icon: PersonIcon, },
        { text: "View Employees", link: "/viewEmployees", icon: PersonIcon, },
      ],
    },
  ];

  export const ApplicationItems = [
     {
      text: "Applications",
      icon: PersonIcon,
      link: "/applications",
      subItems: [
        { text: "Add Application", link: "/addApplication",icon: PersonIcon},
        { text: "View Applications", link: "/viewApplications",icon: PersonIcon},
      ],
    },
  ]


  export const Dashboard = [
    {
      text: "Dashboard",
      icon: DashboardIcon,
      link: "/dashboard",
    },
  ]

  export const MerchantCommissionItem = [
    {
      text: "Merchants",
      icon: PersonIcon,
      link: "/merchants",
    },
    {
      text: "Commission",
      icon: PersonIcon,
      link: "/commission",
    },
  ]

  // export const Commission = [
  //    {
  //     text: "All Commission"
  //     icon: PersonIcon,
  //     link: "/All Commission"
  //    },
  //    {
  //     text: "commission Structure"
  //     icon: PersonIcon,
  //     link: "/Commission Structure"
  //    },
  //    {
  //     text: "View Structure"
  //     icon: PersonIcon,
  //     link: "/View Structure"
  //    },
  // ]