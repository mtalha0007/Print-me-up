import { OrderRoutes } from "./order.route";
import { post, get, put } from "../index";


const OrderServices = {
  getOrders: async () => {
    let result = get(OrderRoutes.getOrders );
    return result;
  },

};

export default OrderServices;
