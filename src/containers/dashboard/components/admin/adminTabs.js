import {
  discount,
  users,
  jobTemplate,
  products,
  items,
  companyProfile,
} from "../../../../assets/images/index";
import { ROUTES } from "../../../../shared/constants";

export const adminTabs = [
  {
    id: 1,
    title: "Company Profile",
    icon: companyProfile,
    subTitle: "Manage",
    path: ROUTES.companyProfile,
  },
  {
    id: 2,
    title: "Users",
    icon: users,
    subTitle: "Add, manage, import, and remove",
    path: ROUTES.users,
  },
  {
    id: 3,
    title: "Products",
    icon: products,
    subTitle: "Add, manage, import, and remove",
    path: ROUTES.products,
  },
  {
    id: 4,
    title: "Items",
    icon: items,
    subTitle: "Add, manage, import, and remove",
    path: ROUTES.items,
  },
  {
    id: 5,
    title: "Discounts",
    icon: discount,
    subTitle: "Add, manage, import, and remove",
    path: ROUTES.discounts,
  },
  {
    id: 6,
    title: "Estimate Templates",
    icon: jobTemplate,
    subTitle: "Add, manage, import, and remove",
    path: ROUTES.jobTemplates,
  },
];
