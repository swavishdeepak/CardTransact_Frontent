


import React from "react";
import { lazy } from "react";
import { Box } from "@mui/material";
import { RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom";
import Loadable from "./components/Loadable";
import { MainLayout } from "./layouts/MainLayout";
import AddTransactionStructure from "./pages/TransactionReport/AddTransactionStructure";


/* auth */
const Login = Loadable(lazy(() => import("./pages/Auth/Login")));
const GoogleAuthentication = Loadable(lazy(() => import("./pages/Auth/GoogleAuthentication")));
const ForgetPassword = Loadable(lazy(() => import("./pages/Auth/ForgetPassword")));
const ResetPassword = Loadable(lazy(() => import("./pages/Auth/ResetPassword")));
const UserProfile = Loadable(lazy(() => import("./pages/Auth/UserProfile")));

/* main */
const Dashboard = Loadable(lazy(() => import("./pages/Dashboard/Dashboard")));
const ViewAgents = Loadable(lazy(() => import("./pages/Users/ViewAgents")));
const AgentDetails = Loadable(lazy(() => import("./pages/Users/AgentDetails")));
const ViewEmployees = Loadable(lazy(() => import("./pages/Users/ViewEmployees")));
const EmployeesDetails = Loadable(lazy(() => import("./pages/Users/EmployeesDetails")));
const ApplicationDetails = Loadable(lazy(() => import("./pages/Applications/ApplicationDetails")));
const AddEmployees = Loadable(lazy(()=> import("./pages/Users/AddEmployees")))
const AddAgents = Loadable(lazy(()=> import("./pages/Users/AddAgents")))

/* applications */
const Addapplication = Loadable(lazy(() => import("./pages/Applications/Addapplication")));
const ViewApplication = Loadable(lazy(() => import("./pages/Applications/ViewApplication")));
const EditApplication = Loadable(lazy(() => import("./pages/Applications/EditApplication")));
const ReEvaluation = Loadable(lazy(() => import("./pages/Applications/ReEvaluation")));

/* Transaction Report */
const TransactionReport = Loadable(lazy(() => import("./pages/TransactionReport/TransactionReport")));
const ViewReport = Loadable(lazy(() => import("./pages/TransactionReport/ViewReport")));

/* reports */
const Overview = Loadable(lazy(() => import("./pages/Reports/Overview")));
const CommissionShared = Loadable(lazy(() => import("./pages/Reports/CommissionShared")));
const Sales = Loadable(lazy(() => import("./pages/Reports/Sales")));
const CommissionReceived = Loadable(lazy(() => import("./pages/Reports/CommissionReceived")));
const Revenue = Loadable(lazy(() => import("./pages/Reports/Revenue")));
const ResidualReceived = Loadable(lazy(() => import("./pages/Reports/ResidualReceived")));
const ResidualShared = Loadable(lazy(() => import("./pages/Reports/ResidualShared")));
const Clawbacks = Loadable(lazy(() => import("./pages/Reports/Clawbacks")));
const Applications = Loadable(lazy(() => import("./pages/Reports/Applications")));

/* merchants */
const Merchant = Loadable(lazy(() => import("./pages/Merchant/Merchant")));
const MerchantDetail = Loadable(lazy(() => import("./pages/Merchant/MerchantDetails")));

/* commissions */
const AllCommission = Loadable(lazy(() => import("./pages/Commission/AllCommission")));
const CommissionStructure = Loadable(lazy(() => import("./pages/Commission/CommissionStructure")));
const ViewStructure = Loadable(lazy(() => import("./pages/Commission/ViewStructure")));
const CommissionDetails = Loadable(lazy(() => import("./pages/Commission/CommissionDetails")));
const AddCommissionStructure = Loadable(lazy(() => import("./pages/Commission/AddCommissionStructure")));

const AddCardRateStructure = Loadable(lazy(() => import("./pages/Commission/AddCardRateStructure")));
const ViewCommissionStructure = Loadable(lazy(() => import("./pages/Commission/ViewCommissionStructure")));
const AllCardRates = Loadable(lazy(() => import("./pages/Commission/AllCardRates")));
const ViewCardRates = Loadable(lazy(() => import("./pages/Commission/ViewCardRates")));

/* notifications */
const AllNotification = Loadable(lazy(() => import("./pages/Notifications/AllNotification")));
const CreateNotification = Loadable(lazy(() => import("./pages/Notifications/CreateNotication")));
const ReceivedNotification = Loadable(lazy(() => import("./pages/Notifications/ReceivedNotification")));
const NotificationDetails = Loadable(lazy(() => import("./pages/Notifications/NotificationDetails")));
const ViewDetails = Loadable(lazy(() => import("./pages/Notifications/ViewDetails")));

/* Message */
const Message = Loadable(lazy(() => import("./pages/Messages/Message")));
const DeleteData = Loadable(lazy(() => import("./pages/DeleteData/DeleteData")));
const DeleteDataDetails = Loadable(lazy(() => import("./pages/DeleteData/DeleteDataDetails")));

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/auth/googleAuthentication",
      element: <GoogleAuthentication />,
    },
    {
      path: "/auth/ForgetPassword",
      element: <ForgetPassword />,
    },
    {
      path: "/resetPassword",
      element: <ResetPassword />,
    },
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        /* User Profile */
        {
          path: "/userProfile",
          element: <UserProfile />,
        },
        /*User SideBar List***************************/
        {
          path: "/addAgent",
          element: <AddAgents />,
        },
        {
          path: "/viewAgents",
          element: <ViewAgents />,
        },
        {
          path: "viewAgents/viewDetails/:id",
          element: <AgentDetails />,
        },
        /*Employees SideBar List************************/
        {
          path: "/addEmployee",
          element: <AddEmployees />,
        },
        {
          path: "/viewEmployee",
          element: <ViewEmployees />,
        },
        {
          path: "/viewEmployee/viewDetails/:id",
          element: <EmployeesDetails />,
        },
        /*Application SideBar List************************/
        {
          path: "/addApplication",
          element: <Addapplication />,
        },
        {
          path: "/viewApplications",
          element: <ViewApplication />,
        },
        {
          path: "/viewApplications/editApplication/:id",
          element: <EditApplication />,
        },
        {
          path: "/appicationDetails/:id",
          element: <ApplicationDetails />,
        },
        {
          path: "/Re-evaluation",
          element: <ReEvaluation />,
        },
        /*Merchant SideBar List************************/
        {
          path: "/merchants",
          element: <Merchant />,
        },
        {
          path: "/merchantDetail",
          element: <MerchantDetail />,
        },
        /*Commission SideBar List************************/
        {
          path: "/commissionStructure/addCommissionStructure",
          element: <AddCommissionStructure />,
        },
        {
          path: "/commissionStructure/addCommissionStructure/viewCommission",
          element: <ViewCommissionStructure />,
        },
        {
          path: "/allCommission",
          element: <AllCommission />,
        },
        {
          path: "/allCardRates",
          element: <AllCardRates />,
        },
        {
          path: "/allCardRates/AddCardRateStructure",
          element: <AddCardRateStructure/>
        },
        {
          path: "/commissionStructure",
          element: <CommissionStructure />,
        },
        {
          path: "/commissionDetails/:id",
          element: <CommissionDetails />,
        },
        {
          path: "/viewStructure",
          element: <ViewStructure />,
        },
        {
          path: "/viewCardRates",
          element: <ViewCardRates />,
        },
        /* Transaction Report ********************/
        {
          path: "/transactionReport",
          element: <TransactionReport />,
        },
        {
          path: "/transactionReport/addTransactionReport",
          element: <AddTransactionStructure/>

        },
        {
          path: "/transactionReport/addTransactionReport/viewReport",
          element: <ViewReport />,
        },
        /*Reports SideBar List************************/
        {
          path: "/report/overView",
          element: <Overview />,
        },
        {
          path: "/report/overview/salesDetails",
          element: <Sales />,
        },
        {
          path: "/revenueDetails",
          element: <Revenue />,
        },
        {
          path: "/commissionReceivedDetails",
          element: <CommissionReceived />,
        },
        {
          path: "/commissionSharedDetails",
          element: <CommissionShared />,
        },
        {
          path: "/residualReceivedDetails",
          element: <ResidualReceived />,
        },
        {
          path: "/residualSharedDetails",
          element: <ResidualShared />,
        },
        {
          path: "/clawbacks",
          element: <Clawbacks />,
        },
        {
          path: "/application",
          element: <Applications />,
        },
        /*Notification SideBar List************************/
        {
          path: "/notificationList",
          element: <AllNotification />,
        },
        {
          path: "/notificationList/notificationDetails",
          element: <NotificationDetails />,
        },
        {
          path: "/createNotication",
          element: <CreateNotification />,
        },
        {
          path: "/receivedNotification",
          element: <ReceivedNotification />,
        },
        {
          path: "/notificationList/viewDetails",
          element: <ViewDetails />,
        },
        /*Notification SideBar List************************/
        {
          path: "/messages",
          element: <Message />,
        },
        /* Delete Data SideBar List**************************/
        {
          path: "/deleteData",
          element: <DeleteData />,
        },
        {
          path: "/deleteDataDetails",
          element: <DeleteDataDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1>An error occurred</h1>
      <p>Sorry, something went wrong.</p>
    </Box>
  );
}
export default App;
