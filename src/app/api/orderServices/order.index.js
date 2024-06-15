import { OrderRoutes } from "./order.route";
import { post, get, put,patch } from "../index";


const OrderServices = {
  getOrders: async () => {
    let result = get(OrderRoutes.getOrders );
    return result;
  },
  updateStatus: async (obj) => {
    console.log(obj)
    let result = patch(OrderRoutes.updateStatus,obj);
    return result;
  },

};

export default OrderServices;
