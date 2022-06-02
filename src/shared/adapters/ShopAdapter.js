import Shop from "../models/Shop";
import Store from "../../store";

class ShopAdapter {
    adapt({ uuid, addressName, city }) {
        return new Shop(uuid, addressName, city, Store.getters["shops/cityColor"](city));
    }
}

export default new ShopAdapter();