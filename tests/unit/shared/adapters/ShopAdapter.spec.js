import ShopAdapter from "../../../../src/shared/adapters/ShopAdapter";
import Utils from "../../../../src/shared/Utils"

describe("ShopAdapter", () => {
    it("adapt", () => {
        const shop = {
            "type":"StoreListRO",
            "uuid":"gmcKYx4X5HEAAAFIdhIYwKxK",
            "addressName":"Jumbo Aalsmeer Ophelialaan.",
            "street":"Ophelialaan",
            "street2":"124",
            "street3":"",
            "city":"Aalsmeer",
            "postalCode":"",
            "distance":0,
            "todayOpen":"08:00",
            "todayClose":"22:00",
            "latitude":"52.264417",
            "longitude":"4.762433",
            "locationType":"SupermarktPuP",
            "newStore":0,
            "collectionPoint":true,
            "complexNumber":"33010",
            "sapStoreID":"3629",
            "favourite":false,
            "isHomeStore":false,
            "showWarningMessage":true,
            "sundayOpen":true
        }
        Utils.removeFirstValueFrom = jest.fn(() => "Aalsmeer Ophelialaan.")
        expect(ShopAdapter.adapt(shop, "#FFF333")).toMatchObject({ 
            id: "gmcKYx4X5HEAAAFIdhIYwKxK", 
            addressName: "Aalsmeer Ophelialaan.", 
            city: "Aalsmeer", 
            cityColor: "#FFF333" 
        })
    })
})
