import { get, post, BASENAME } from "./api";
import {
  createPendingShop,
  createUser,
  uploadFile,
  placeCheckoutOrder,
  addProductToShop,
  fetchProducts,
  fetchProductById,
  fetchShops,
  passwordReset,
  userLogin,
  userLogout,
  updatePendingShop,
  db,
  auth,
  fetchDashboard,
  fetchDashboardProducts,
} from "./firebase";
import { validatePayment, initPayment, exchangeRate } from "./flw";

export {
  BASENAME,
  db,
  auth,
  get,
  post,
  uploadFile,
  placeCheckoutOrder,
  fetchProducts,
  fetchDashboardProducts,
  fetchShops,
  passwordReset,
  userLogin,
  userLogout,
  fetchProductById,
  initPayment,
  validatePayment,
  updatePendingShop,
  exchangeRate,
  addProductToShop,
  createPendingShop,
  createUser,
  fetchDashboard,
};
