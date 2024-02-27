import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Auth/Login";
import { GoogleAuthentication } from "./pages/Auth/GoogleAuthentication";
import { ForgetPassword } from "./pages/Auth/ForgetPassword";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { AddAgents } from "./pages/Users/AddAgents";
import { AddEmployees } from "./pages/Users/AddEmployees";
import { MainLayout } from "./layouts/MainLayout";
import { ViewAgents } from "./pages/Users/ViewAgents";
import { ViewEmployees } from "./pages/Users/ViewEmployees";
import { Merchant } from "./pages/Merchant/Merchant";
import { ViewApplication } from "./pages/Applications/ViewApplication";
import { ApplicationDetails } from "./pages/Applications/ApplicationDetails";
import "./App.css";
import { Addapplication } from "./pages/Applications/Addapplication";
import { VerifyOtp } from "./pages/Auth/VerifyOtp";
import { ResetPassword } from "./pages/Auth/ResetPassword";
import { EmployeesDetails } from "./pages/Users/EmployeesDetails";

// Commission
import { AllCommission } from "./pages/Commission/AllCommission";
import { CommissionStructure } from "./pages/Commission/CommissionStructure";
import { ViewStructure } from "./pages/Commission/ViewStructure";

// Reports
import { Overview } from "./pages/Reports/Overview";
import { WorldPay } from "./pages/Reports/WorldPay";
import { Evo } from "./pages/Reports/Evo";
import { Fdms } from "./pages/Reports/Fdms";
import { Elavon } from "./pages/Reports/Elavon";
import { AgentDetails } from "./pages/Users/AgentDetails";
import { ReEvaluation } from "./pages/Applications/ReEvaluation";
import EditApplication from "./pages/Applications/EditApplication";
import { MerchantDetail } from "./pages/Merchant/MerchantDetails";
import CommissionDetails from "./pages/Commission/CommissionDetails";
import { AddCommissionStructure } from "./pages/Commission/AddCommissionStructure";
import { ViewCommissionStructure } from "./pages/Commission/ViewCommissionStructure";
import { AllCardRates } from "./pages/Commission/AllCardRates";
import { ViewCardRates } from "./pages/Commission/ViewCardRates";

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
      path: "/auth/verifyOtp",
      element: <VerifyOtp />,
    },
    {
      path: "/auth/resetPassword",
      element: <ResetPassword />,
    },

    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
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

        // for Employees
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

        // for Application
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
        // for merchant
        {
          path: "/merchants",
          element: <Merchant />,
        },
        {
          path: "/merchantDetail",
          element: <MerchantDetail />,
        },
        //for Commission
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
          element: <AllCardRates/>
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
          element: <ViewCardRates/>
        },

        
        {
          path: "/overView",
          element: <Overview />,
        },
        {
          path: "/worldPay",
          element: <WorldPay />,
        },
        {
          path: "/evo",
          element: <Evo />,
        },
        {
          path: "/fdms",
          element: <Fdms />,
        },
        {
          path: "/elavon",
          element: <Elavon />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
