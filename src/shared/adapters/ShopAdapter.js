import Shop from "../models/Shop";
import Utils from "../Utils";

class ShopAdapter {
    adapt({ uuid, addressName, city }, cityColor) {
        return new Shop(uuid, Utils.removeFirstValueFrom("Jumbo ", addressName), city, cityColor);
    }
}

export default new ShopAdapter();