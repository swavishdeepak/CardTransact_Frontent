import React, { useEffect } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter,useRouteError } from "react-router-dom";
import { Box } from "@mui/material";
/* auth */
import { Login } from "./pages/Auth/Login";
import { GoogleAuthentication } from "./pages/Auth/GoogleAuthentication";
import { ForgetPassword } from "./pages/Auth/ForgetPassword";
import { ResetPassword } from "./pages/Auth/ResetPassword";
import { UserProfile } from "./pages/Auth/UserProfile";
/* main */
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { MainLayout } from "./layouts/MainLayout";
/* Users */
import { AddAgents } from "./pages/Users/AddAgents";
import { AddEmployees } from "./pages/Users/AddEmployees";
import { ViewAgents } from "./pages/Users/ViewAgents";
import { AgentDetails } from "./pages/Users/AgentDetails";
import { ViewEmployees } from "./pages/Users/ViewEmployees";
import { EmployeesDetails } from "./pages/Users/EmployeesDetails";

/* applications */
import { ApplicationDetails } from "./pages/Applications/ApplicationDetails";
import { Addapplication } from "./pages/Applications/Addapplication";
import { ViewApplication } from "./pages/Applications/ViewApplication";
import EditApplication from "./pages/Applications/EditApplication";
/* Transaction Report */
import { TransactionReport } from "./pages/TransactionReport/TransactionReport";
import { ViewReport } from "./pages/TransactionReport/ViewReport";
/* reports */
import { Overview } from "./pages/Reports/Overview";
import { CommissionShared } from "./pages/Reports/CommissionShared";
import { Sales } from "./pages/Reports/Sales";
import { CommissionReceived } from "./pages/Reports/CommissionReceived";
import { Revenue } from "./pages/Reports/Revenue";
import { ResidualReceived } from "./pages/Reports/ResidualReceived";
import { ResidualShared } from "./pages/Reports/ResidualShared";
import { Clawbacks } from "./pages/Reports/Clawbacks";
import { SalesDetails } from "./pages/Reports/SalesDetails";
import { ReEvaluation } from "./pages/Applications/ReEvaluation";
import { Applications } from "./pages/Reports/Applications";
/* merchants */
import { Merchant } from "./pages/Merchant/Merchant";
import { MerchantDetail } from "./pages/Merchant/MerchantDetails";
/* commissions */
import { AllCommission } from "./pages/Commission/AllCommission";
import { CommissionStructure } from "./pages/Commission/CommissionStructure";
import { ViewStructure } from "./pages/Commission/ViewStructure";
import CommissionDetails from "./pages/Commission/CommissionDetails";
import { AddCommissionStructure } from "./pages/Commission/AddCommissionStructure";
import { ViewCommissionStructure } from "./pages/Commission/ViewCommissionStructure";
import { AllCardRates } from "./pages/Commission/AllCardRates";
import { ViewCardRates } from "./pages/Commission/ViewCardRates";
/* notifications */
import { AllNotification } from "./pages/Notifications/AllNotification";
import { CreateNotification } from "./pages/Notifications/CreateNotication";
import { ReceivedNotification } from "./pages/Notifications/ReceivedNotification";
import { NotificationDetails } from "./pages/Notifications/NotificationDetails";
/* Message */
import { Message } from "./pages/Messages/Message";
import { DeleteData } from "./pages/DeleteData/DeleteData";
import { DeleteDataDetails } from "./pages/DeleteData/DeleteDataDetails";
import { CommissionReceivedDetails } from "./pages/Reports/CommissionReceivedDetails";
import { ViewDetails } from "./pages/Notifications/ViewDetails";
//import { useNavigation } from "react-router-dom";





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
          element: <UserProfile/>
        },
        /*User SideBar List***************************/
        {
          path: "/addAgents",
          element: <AddAgents />,
        },
        {
          path: "/viewAgents",
          element: <ViewAgents />,
        },
        {
          path: "/agentDetails/:id",
          element: <AgentDetails />,
        },
        /*Employees SideBar List************************/
        {
          path: "/addEmployees",
          element: <AddEmployees />,
        },
        {
          path: "/viewEmployees",
          element: <ViewEmployees />,
        },
        {
          path: "/employeesDetails/:id",
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
          path: "/commission/addCommissionStructure",
          element: <AddCommissionStructure />,
        },
        {
          path: "/commission/addCommissionStructure/viewCommission",
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
          element: <TransactionReport/>

        },
        {
          path: "/viewReport",
          element: <ViewReport/>

        },

        /*Reports SideBar List************************/
        {
          path: "/overView",
          element: <Overview />,
        },
        {
          path: "/sales",
          element: <Sales />,
        },
        {
          path: "/revenue",
          element: <Revenue />,
        },
        {
          path: "/commissionReceived",
          element: <CommissionReceived />,
        },
        {
          path: "/commissionShared",
          element: <CommissionShared />,
        },
        {
          path: "/residualReceived",
          element: <ResidualReceived />,
        },
        {
          path: "/residualShared",
          element: <ResidualShared />,
        },
        {
          path: "/clawbacks",
          element: <Clawbacks />,
        },
        {
          path: "/salesDetails",
          element: <SalesDetails/>

        },
        {
          path: "/commissionReceivedDetails",
          element: <CommissionReceivedDetails/>
        },
        {
          path: "/application",
          element: <Applications/>

        },
        /*Notification SideBar List************************/
        {
          path: "/notificationList",
          element: <AllNotification />,
        },
        {
          path: "/notificationList/notificationDetails",
          element: <NotificationDetails/>
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
          element: <ViewDetails/>
        },
         /*Notification SideBar List************************/
         {
          path: "/messages",
          element: <Message/>
         },
         /* Delete Data SideBar List**************************/
         {
          path: "/deleteData",
          element: <DeleteData/>
         },{
          path: "/deleteDataDetails",
          element: <DeleteDataDetails/>
         }
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
