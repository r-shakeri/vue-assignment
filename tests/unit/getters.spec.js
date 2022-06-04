import { getters } from "../../src/store"
import ShopAdapter from "../../src/shared/adapters/ShopAdapter"

const { lightShops, filteredShops, cities, cityColor } = getters

describe("getters", () => {

  it("lightShops getter", () => {
    const state = { 
      shops: [{
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
    }
    const adaptedShopsArray = { id: "gmcKYx4X5HEAAAFIdhIYwKxK", addressName: "Aalsmeer Ophelialaan.", city: "Aalsmeer", cityColor: "#FFFF33" }
    ShopAdapter.adapt = jest.fn(() => { return adaptedShopsArray })
    const result = lightShops(state)

    expect(result.at(0)).toMatchObject(adaptedShopsArray)
  })

  it("filteredShops getter", () => {
    const getters = {
      lightShops: [
        { id: "gmcKYx4X5HEAAAFIdhIYwKxK", addressName: "Aalsmeer Ophelialaan.", city: "", cityColor: "#FFFFFF" },
        { id: "zkIKYx4XXxcAAAFI7CMYwKxK", addressName: "Aalst Aalst-Waalre", city: "", cityColor: "#FFFFFF" }
      ]
    }
    const searchedValue = "elia"
    const result = filteredShops({}, getters)(searchedValue)
    expect(result).toEqual([
      { id: "gmcKYx4X5HEAAAFIdhIYwKxK", addressName: "Aalsmeer Ophelialaan.", city: "", cityColor: "#FFFFFF" }
    ])
  })

  it("cities getter", () => {
    const newMap = new Map()
    newMap.set("City1", "#FFFFFF")

    const state = {
      citiesColorMap: newMap
    }
    const result = cities(state)
    expect(result).toEqual(["City1"])
  })

  it("cityColor getter", () => {
    const newMap = new Map()
    newMap.set("City1", "#FFFFFF")

    const state = {
      citiesColorMap: newMap
    }
    const key = "City1"
    const result = cityColor(state)(key)
    expect(result).toMatch("#FFFFFF")
  })

})