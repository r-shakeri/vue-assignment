import ShopsService from "../../../src/services/ShopsService"
import axios from "../../../src/shared/plugins/axios";

describe('ShopsService', () => {
  it('getShops API resolve', async () => {
    const shops = [{
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
    }]
    axios.get = jest.fn(() => Promise.resolve({ data: shops }))
    const result = await ShopsService.getShops();

    expect(axios.get).toHaveBeenCalledWith("/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e/");
    expect(result).toEqual(shops)
  })

  it('getShops API reject', () => {
    axios.get = jest.fn(() => Promise.reject({ error: { response: { status: 404 } } }))
     ShopsService.getShops().catch((result) => {
        expect(result.error.response.status).toEqual(404)
        //console.log = jest.fn();
        //expect(console.log.mock.calls[0][0]).toBe(result);
    });

  })

})