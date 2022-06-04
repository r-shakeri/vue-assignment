import { mutations } from "../../src/store"


const { setShops, setCitiesColorMap } = mutations

describe("mutations", () => {

  it("setShops mutation", () => {
    const state = { shops: [] }
    const shopsArray = [{
        "type":"StoreListRO",
        "uuid":"gmcKYx4X5HEAAAFIdhIYwKxK",
        "addressName":"Jumbo Aalsmeer Ophelialaan.",
        "street":"Ophelialaan",
        "street2":"124",
        "street3":"",
        "city":"",
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
    setShops(state, shopsArray)

    expect(state.shops.length).toEqual(1)
  })

  it("setCitiesColorMap mutation", () => {
    const state = { citiesColorMap: new Map() }
    const newMap = new Map()
    newMap.set("City1", "#FFFFFF")
    setCitiesColorMap(state, newMap)

    expect(state.citiesColorMap.size).toEqual(1)
    expect(state.citiesColorMap.get("City1")).toMatch(newMap.get("City1"))
  })

})