import { homeIcon, customers, jobs } from "../../../../assets/images/index";
import { ROUTES } from "../../../../shared/constants";

export const salesItem = [
  {
    id: "home",
    title: "Home",
    icon: homeIcon,
    subTitle: "",
    path: ROUTES.dashboard,
  },
  {
    id: "customers",
    title: "Customers",
    icon: customers,
    subTitle: "Add, manage, import, and remove",
    path: ROUTES.customers,
  },
  {
    id: "jobs",
    title: "Jobs",
    icon: jobs,
    subTitle: "Add, manage, import, and remove",
    path: ROUTES.jobs,
  },
];
