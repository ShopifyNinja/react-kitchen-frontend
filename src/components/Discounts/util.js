import {
  veterans,
  responders,
  discountJob,
} from "../../assets/images/index.js";

export const availableDiscounts = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 5,
  },
  {
    id: 3,
    value: 10,
  },
  {
    id: 4,
    value: 20,
  },
  {
    id: 5,
    value: 30,
  },
];

export const frequentlyUsedDiscounts = [
  {
    id: 1,
    name: "First Responders",
    value: "10%",
    icon: responders,
  },
  {
    id: 2,
    name: "Veterans",
    value: "20%",
    icon: veterans,
  },
  {
    id: 3,
    name: "Holiday Discount",
    value: "5%",
    icon: discountJob,
  },
];
