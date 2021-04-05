import estimate from "../../assets/images/estimate.png";
import { newfolder, kitchen, cover } from "../../assets/images/index";

const data = [
  {
    name: "Demo Cabinets & Countertops",
    description: "$3077.00 — 20LF",
    details: {
      units: {
        label: "Units",
        value: "Linear Feet",
      },
      quantity: {
        label: "Quantity",
        value: "20",
      },
      cost: {
        label: "Cost per unit",
        value: "0.00",
      },
      total: {
        label: "Total",
        value: "0.00",
      },
    },
  },
  {
    name: "Demo Countertop Only",
    description: "$0.00 — 0LF",
    details: {
      units: {
        label: "Units",
        value: "Linear Feet",
      },
      quantity: {
        label: "Quantity",
        value: "0",
      },
      cost: {
        label: "Cost per unit",
        value: "0.00",
      },
      total: {
        label: "Total",
        value: "0.00",
      },
    },
  },
  {
    name: "Demo Backsplash Only",
    description: "$0.00 — 0LF",
    details: {
      units: {
        label: "Units",
        value: "Linear Feet",
      },
      quantity: {
        label: "Quantity",
        value: "0",
      },
      cost: {
        label: "Cost per unit",
        value: "0.00",
      },
      total: {
        label: "Total",
        value: "0.00",
      },
    },
  },
  {
    name: "Demo Pony Wall",
    description: "$0.00 — 0LF",
    details: {
      units: {
        label: "Units",
        value: "Linear Feet",
      },
      quantity: {
        label: "Quantity",
        value: "20",
      },
      cost: {
        label: "Cost per unit",
        value: "0.00",
      },
      total: {
        label: "Total",
        value: "0.00",
      },
    },
  },
  {
    name: "Haul Away Existing Appliance",
    description: "$0.00 — 0LF",
    details: {
      units: {
        label: "Units",
        value: "Linear Feet",
      },
      quantity: {
        label: "Quantity",
        value: "0",
      },
      cost: {
        label: "Cost per unit",
        value: "0.00",
      },
      total: {
        label: "Total",
        value: "0.00",
      },
    },
  },
  {
    name: "Flooring",
    description: "$0.00 — 0LF",
    details: {
      units: {
        label: "Units",
        value: "Linear Feet",
      },
      quantity: {
        label: "Quantity",
        value: "0",
      },
      cost: {
        label: "Cost per unit",
        value: "0.00",
      },
      total: {
        label: "Total",
        value: "0.00",
      },
    },
  },
];

const items = [
  {
    id: "item0",
    name: "Demolition",
    icon: newfolder,
    data: data,
    amount: "3077.00",
  },
  {
    id: "item1",
    name: "Construction",
    icon: newfolder,
    data: data,
    amount: "0.00",
  },
  {
    id: "item2",
    name: "Electrical",
    icon: newfolder,
    data: data,
    amount: "2577.00",
  },
  {
    id: "item3",
    name: "Plumbing",
    icon: newfolder,
    data: data,
    amount: "3767.00",
  },
  {
    id: "item4",
    name: "Gas",
    icon: newfolder,
    data: data,
    amount: "1277.00",
  },
  {
    id: "item5",
    name: "HVAC",
    icon: newfolder,
    data: data,
    amount: "77.00",
  },
];

const images = {
  cover: {
    file: cover,
    name: "Something.jpeg",
    label: "Cover Photo",
  },
  otherPhotos: [
    {
      id: 1,
      file: kitchen,
      name: "anotherphoto.jpeg",
    },
    {
      id: 2,
      file: kitchen,
      name: "photo.png",
    },
    {
      id: 3,
      file: kitchen,
      name: "thing.jpeg",
    },
    {
      id: 4,
      file: kitchen,
      name: "thing.jpeg",
    },
    {
      id: 5,
      file: kitchen,
      name: "anotherphoto.jpeg",
    },
  ],
};

const progressInvoices = [
  {
    id: 1,
    name: "Progress Payment Phase 1 (Progress Payment Phase 1)",
    value: "20%",
  },
  {
    id: 2,
    name: "Progress Payment Phase 2 (Progress Payment Phase 1)",
    value: "5%",
  },
  {
    id: 3,
    name: "Progress Payment Phase 3 (Progress Payment Phase 1)",
    value: "5%",
  },
  {
    id: 4,
    name: "Progress Payment Phase 4 (Progress Payment Phase 1)",
    value: "20%",
  },
];

export const JobList = [
  {
    id: 1,
    name: "Adams Remodel",
    Estimate: "$89,961.62",
    data: {
      name: "Adams Remodel",
      info: {
        name: "Allison Billings",
        address: "123 Street E Citytown, CA 55555",
      },
      Estimates: [
        {
          title: "Estimate1",
          amount: "$120,000.89",
          url: estimate,
          bill: {
            subTotal: "120,000.89",
            discount: "0.0",
            total: "120,000.89",
          },
          signatures: {
            customerSignature: {
              label: "Customer Signature",
              name: "Allison Billings",
              signature: "Allison Billings",
              date: new Date(),
            },
            employeeSignature: {
              label: "Employee Signature",
              name: "John",
              signature: "",
              date: "",
            },
          },
          data: {
            info: {
              expiry: {
                label: "Issue Date & Expiration Period",
                value: "8/21/20 — 30 Days",
              },
              description: {
                label: "Description",
                value: "",
              },
              terms: {
                label: "Terms",
                value: "Home Improvement Contract",
              },
              privateNotes: {
                label: "Private Notes",
                value: "",
              },
            },
            photos: {
              label: "PHOTOS",
              value: images.otherPhotos.length,
              images: images,
            },
            drawSchedule: {
              label: "Draw Schedule",
              value: "8 items",
              progressInvoices,
            },
            discount: {
              label: "DISCOUNT",
              value: "No discount selected",
            },
            products: [
              {
                id: "product1",
                name: "Kitchen",
                amount: "120,000.89",
                items: items,
              },
            ],
          },
        },
        {
          title: "Estimate2",
          amount: "$3,500.99",
          url: "",
          bill: {
            subTotal: "3,500.99",
            discount: "0.0",
            total: "3,500.99",
          },
          signatures: {
            customerSignature: {
              label: "Customer Signature",
              name: "Allison Billings",
              signature: "Allison Billings",
              date: new Date(),
            },
            employeeSignature: {
              label: "Employee Signature",
              name: "John",
              signature: "",
              date: "",
            },
          },
          data: {
            info: {
              expiry: {
                label: "Issue Date & Expiration Period",
                value: "8/21/20 — 30 Days",
              },
              description: {
                label: "Description",
                value: "",
              },
              terms: {
                label: "Terms",
                value: "Home Improvement Contract",
              },
              privateNotes: {
                label: "Private Notes",
                value: "",
              },
            },
            photos: {
              label: "PHOTOS",
              value: images.otherPhotos.length,
              images: images,
            },
            drawSchedule: {
              label: "Draw Schedule",
              value: "8 items",
              progressInvoices,
            },
            discount: {
              label: "DISCOUNT",
              value: "No discount selected",
            },
            products: [
              {
                id: "product1",
                name: "Kitchen",
                amount: "120,000.89",
                items: items,
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: 2,
    name: "Balboa Cabinet Reface",
    Estimate: "$10,599.90",
    data: {
      name: "Balboa Cabinet Reface",
      info: {
        name: "Allison Billings",
        address: "123 Street E Citytown, CA 55555",
      },
      Estimates: [
        {
          title: "Estimate1",
          amount: "$10,599.90",
          url: estimate,
          bill: {
            subTotal: "10,599.90",
            discount: "0.0",
            total: "10, 599.90",
          },
          signatures: {
            customerSignature: {
              label: "Customer Signature",
              name: "Allison Billings",
              signature: "Allison Billings",
              date: new Date(),
            },
            employeeSignature: {
              label: "Employee Signature",
              name: "John",
              signature: "",
              date: "",
            },
          },
          data: {
            info: {
              expiry: {
                label: "Issue Date & Expiration Period",
                value: "8/21/20 — 30 Days",
              },
              description: {
                label: "Description",
                value: "",
              },
              terms: {
                label: "Terms",
                value: "Home Improvement Contract",
              },
              privateNotes: {
                label: "Private Notes",
                value: "",
              },
            },
            photos: {
              label: "PHOTOS",
              value: images.otherPhotos.length,
              images: images,
            },
            drawSchedule: {
              label: "Draw Schedule",
              value: "8 items",
              progressInvoices,
            },
            discount: {
              label: "DISCOUNT",
              value: "No discount selected",
            },
            products: [
              {
                id: "product1",
                name: "Kitchen",
                amount: "10, 599.90",
                items: items,
              },
            ],
          },
        },
        {
          title: "Estimate2",
          amount: "$3,500.99",
          url: "",
          bill: {
            subTotal: "3,500.99",
            discount: "0.0",
            total: "3,500.99",
          },
          signatures: {
            customerSignature: {
              label: "Customer Signature",
              name: "Allison Billings",
              signature: "Allison Billings",
              date: new Date(),
            },
            employeeSignature: {
              label: "Employee Signature",
              name: "John",
              signature: "",
              date: "",
            },
          },
          data: {
            info: {
              expiry: {
                label: "Issue Date & Expiration Period",
                value: "8/21/20 — 30 Days",
              },
              description: {
                label: "Description",
                value: "",
              },
              terms: {
                label: "Terms",
                value: "Home Improvement Contract",
              },
              privateNotes: {
                label: "Private Notes",
                value: "",
              },
            },
            photos: {
              label: "PHOTOS",
              value: images.otherPhotos.length,
              images: images,
            },
            drawSchedule: {
              label: "Draw Schedule",
              value: "8 items",
              progressInvoices,
            },
            discount: {
              label: "DISCOUNT",
              value: "No discount selected",
            },
            products: [
              {
                id: "product1",
                name: "Kitchen",
                amount: "3,500.99",
                items: items,
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: 3,
    name: "Billings Kitchen Remodel",
    Estimate: "$89,961.62",
    data: {
      name: "Billings Kitchen Remodel",
      info: {
        name: "Allison Billings",
        address: "123 Street E Citytown, CA 55555",
      },
      Estimates: [
        {
          title: "Estimate1",
          amount: "$120,000.89",
          url: estimate,
          bill: {
            subTotal: "120,000.89",
            discount: "0.0",
            total: "120,000.89",
          },
          signatures: {
            customerSignature: {
              label: "Customer Signature",
              name: "Allison Billings",
              signature: "Allison Billings",
              date: new Date(),
            },
            employeeSignature: {
              label: "Employee Signature",
              name: "John",
              signature: "",
              date: "",
            },
          },
          data: {
            info: {
              expiry: {
                label: "Issue Date & Expiration Period",
                value: "8/21/20 — 30 Days",
              },
              description: {
                label: "Description",
                value: "",
              },
              terms: {
                label: "Terms",
                value: "Home Improvement Contract",
              },
              privateNotes: {
                label: "Private Notes",
                value: "",
              },
            },
            photos: {
              label: "PHOTOS",
              value: images.otherPhotos.length,
              images: images,
            },
            drawSchedule: {
              label: "Draw Schedule",
              value: "8 items",
              progressInvoices,
            },
            discount: {
              label: "DISCOUNT",
              value: "No discount selected",
            },
            products: [
              {
                id: "product1",
                name: "Kitchen",
                amount: "120,000.89",
                items: items,
              },
            ],
          },
        },
        {
          title: "Estimate2",
          amount: "$3,500.99",
          url: "",
          bill: {
            subTotal: "3,500.99",
            discount: "0.0",
            total: "3,500.99",
          },
          signatures: {
            customerSignature: {
              label: "Customer Signature",
              name: "Allison Billings",
              signature: "Allison Billings",
              date: new Date(),
            },
            employeeSignature: {
              label: "Employee Signature",
              name: "John",
              signature: "",
              date: "",
            },
          },
          data: {
            info: {
              expiry: {
                label: "Issue Date & Expiration Period",
                value: "8/21/20 — 30 Days",
              },
              description: {
                label: "Description",
                value: "",
              },
              terms: {
                label: "Terms",
                value: "Home Improvement Contract",
              },
              privateNotes: {
                label: "Private Notes",
                value: "",
              },
            },
            photos: {
              label: "PHOTOS",
              value: images.otherPhotos.length,
              images: images,
            },
            drawSchedule: {
              label: "Draw Schedule",
              value: "8 items",
              progressInvoices,
            },
            discount: {
              label: "DISCOUNT",
              value: "No discount selected",
            },
            products: [
              {
                id: "product1",
                name: "Kitchen",
                amount: "3,500.99",
                items: items,
              },
            ],
          },
        },
      ],
    },
  },
];
