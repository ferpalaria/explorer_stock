import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from './admin.routes';
import { CustomerRoutes } from './customer.routes';
import { SaleRoutes } from './sale.routes';
import { AuthRoutes } from './auth.routes';
import { USER_ROLES } from '../utils/roles';

export function Routes() {
  const { user } = useAuth();

  function AcessRoute() {
    switch(user.role){
      case USER_ROLES.ADMIN:
        return <AdminRoutes />;
      case USER_ROLES.CUSTOMER:
        return <CustomerRoutes />
      case USER_ROLES.SALE:
        return <SaleRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}