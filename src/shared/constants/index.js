/**
 * @constant ROUTES : To define app routes.
 */
export const ROUTES = {
  login: "/login",
  dashboard: "/dashboard",
  users: "/users",
  menu: "/menu",
  customers: "/customers",
  jobs: "/jobs",
  products: "/products",
  jobTemplates: "/estimateTemplates",
  items: "/items",
  companyProfile: "/companyProfile",
  discounts: "/discounts",
};

/**
 * @constant ALPHABETS : To define all uppercase alphabets.
 */
export const ALPHABETS = [];
for (var i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
  if (i) {
    ALPHABETS.push(String.fromCharCode(i));
  }
}
ALPHABETS.splice(0, 0, "0");
