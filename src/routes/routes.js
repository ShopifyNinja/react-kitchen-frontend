import LoginPage from "../containers/login";
import Dashboard from "../containers/dashboard";
import Jobs from "../containers/jobs";
import Users from "../containers/users";
import Products from "../containers/products";
import Customers from "../containers/customers";
import JobTemplates from "../containers/jobtemplates";
import Items from "../containers/items";
import CompanyProfile from "../containers/companyProfile";
import Discounts from "../containers/discounts";
import { ROUTES } from "../shared/constants";

const routes = [
  { path: ROUTES.login, exact: true, component: LoginPage },
  { path: ROUTES.dashboard, exact: true, component: Dashboard },
  { path: ROUTES.users, exact: true, component: Users },
  { path: ROUTES.menu, exact: true, component: Dashboard },
  { path: ROUTES.customers, exact: true, component: Customers },
  { path: ROUTES.jobs, exact: true, component: Jobs },
  { path: ROUTES.products, exact: true, component: Products },
  { path: ROUTES.jobTemplates, exact: true, component: JobTemplates },
  { path: ROUTES.items, exact: true, component: Items },
  { path: ROUTES.companyProfile, exact: true, component: CompanyProfile },
  { path: ROUTES.discounts, exact: true, component: Discounts },
];

export default routes;
