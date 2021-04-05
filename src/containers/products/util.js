export const UserList = [
  {
    id: 1,
    name: "Amy Smith",
    role: "Sales",
    data: {
      name: "Amy Smith",
      info: {
        mobile: "925-555-5555",
        email: "amy.b@gmail.com",
        manage: "Password",
      },
      roles: ["sales", "admin"],
      directories: [
        {
          id: "0",
          key: "Demolition",
          childrenElements: [
            {
              id: "flooring",
              key: "Flooring",
              childrenElements: [
                {
                  id: "flooring1",
                  key: "Remove Flooring",
                  childrenElements: [
                    { key: "Remove Flooring 11", id: "remove_Flooring_1" },
                  ],
                },
                {
                  id: "flooring2",
                  key: "Dispose of Flooring",
                },
              ],
            },
            {
              id: "construction",
              key: "Construction",
              childrenElements: [
                {
                  id: "construction1",
                  key: "Remove Construction",
                  childrenElements: [
                    {
                      key: "Remove Construction 11",
                      id: "remove_Construction_1",
                    },
                  ],
                },
                {
                  id: "construction2",
                  key: "Dispose of Construction",
                },
              ],
            },
            {
              key: "Electrical",
              id: "Electrical",
            },
            {
              key: "Dispose of Construction",
              id: "construction3",
            },
          ],
        },
        {
          key: "Sub Group",
          id: "1",
          childrenElements: [
            {
              id: "Sub flooring111",
              key: "Sub Flooring1",
              childrenElements: [
                {
                  id: "Sub_flooring11",
                  key: "Sub Group Remove Flooring1",
                  childrenElements: [
                    {
                      key: "Sub Group Remove Construction 11",
                      id: "Sub_remove_Construction_1",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    name: "Andy Appleseed",
    role: "Sales",
    data: {
      name: "Amy Smith",
      info: {
        mobile: "925-555-5555",
        email: "andy.b@gmail.com",
        manage: "Password",
      },
      roles: ["sales", "admin"],

      directories: [
        {
          id: "0",
          key: "Demolition 1",
          childrenElements: [
            {
              id: "flooring",
              key: "Flooring",
              childrenElements: [
                {
                  id: "flooring1",
                  key: "Remove Flooring",
                  childrenElements: [
                    { key: "Remove Flooring 11", id: "remove_Flooring_1" },
                  ],
                },
                {
                  id: "flooring2",
                  key: "Dispose of Flooring",
                },
              ],
            },
            {
              id: "construction",
              key: "Construction",
              childrenElements: [
                {
                  id: "construction1",
                  key: "Remove Construction",
                  childrenElements: [
                    {
                      key: "Remove Construction 11",
                      id: "remove_Construction_1",
                    },
                  ],
                },
                {
                  id: "construction2",
                  key: "Dispose of Construction",
                },
              ],
            },
            {
              key: "Electrical",
              id: "Electrical",
            },
            {
              key: "Dispose of Construction",
              id: "construction3",
            },
          ],
        },
        {
          key: "Sub Group",
          id: "1",
          childrenElements: [
            {
              id: "Sub flooring111",
              key: "Sub Flooring1",
              childrenElements: [
                {
                  id: "Sub_flooring11",
                  key: "Sub Group Remove Flooring1",
                  childrenElements: [
                    {
                      key: "Sub Group Remove Construction 11",
                      id: "Sub_remove_Construction_1",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    name: "Timoty Madeupname",
    role: "Sales",
    data: {
      name: "Timoty Madeupname",
      info: {
        mobile: "925-555-5555",
        email: "timoty.b@gmail.com",
        manage: "Password",
      },
      roles: ["sales", "admin"],

      directories: [
        {
          id: "0",
          key: "Demolition 2",
          childrenElements: [
            {
              id: "flooring",
              key: "Flooring",
              childrenElements: [
                {
                  id: "flooring1",
                  key: "Remove Flooring",
                  childrenElements: [
                    { key: "Remove Flooring 11", id: "remove_Flooring_1" },
                  ],
                },
                {
                  id: "flooring2",
                  key: "Dispose of Flooring",
                },
              ],
            },
            {
              id: "construction",
              key: "Construction",
              childrenElements: [
                {
                  id: "construction1",
                  key: "Remove Construction",
                  childrenElements: [
                    {
                      key: "Remove Construction 11",
                      id: "remove_Construction_1",
                    },
                  ],
                },
                {
                  id: "construction2",
                  key: "Dispose of Construction",
                },
              ],
            },
            {
              key: "Electrical",
              id: "Electrical",
            },
            {
              key: "Dispose of Construction",
              id: "construction3",
            },
          ],
        },
        {
          key: "Sub Group",
          id: "1",
          childrenElements: [
            {
              id: "Sub flooring111",
              key: "Sub Flooring1",
              childrenElements: [
                {
                  id: "Sub_flooring11",
                  key: "Sub Group Remove Flooring1",
                  childrenElements: [
                    {
                      key: "Sub Group Remove Construction 11",
                      id: "Sub_remove_Construction_1",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

export const SelectedUser = {
  name: "Andy Appleseed",
  info: {
    mobile: "925-555-5555",
    email: "allison.b@gmail.com",
    manage: "Password",
  },
  roles: ["sales", "admin"],
};
