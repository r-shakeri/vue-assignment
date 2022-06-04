import { actions } from "../../src/store"
import ShopsService from "../../src/services/ShopsService"
import Utils from "../../src/shared/Utils"

const { getShopsInfo, makeCitiesColorMap } = actions
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

describe('actions', () => {

  it('getShopsInfo action with full shops', async () => {
    const state = {
      shops: []
    }
    const commit = jest.fn()
    const dispatch = jest.fn()
    ShopsService.getShops = jest.fn(() => Promise.resolve(shops))

    await getShopsInfo({ commit, dispatch, state })

    expect(commit).toHaveBeenCalledWith("setShops", shops)
    expect(dispatch).toHaveBeenCalledWith("makeCitiesColorMap")
  })

  it('getShopsInfo action with empty shops', async () => {
    const state = {
      shops: shops
    }
    const commit = jest.fn()
    const dispatch = jest.fn()
    
    await getShopsInfo({ commit, dispatch, state })

    expect(commit).not.toHaveBeenCalledWith("setShops", [])
    expect(dispatch).not.toHaveBeenCalledWith("makeCitiesColorMap")
  })

  it('makeCitiesColorMap action', () => {
    const newMap = new Map()
          .set("Aalsmeer", "#FFFF33")
          .set("", "#FFFFFF")
    const state = {
      shops: shops
    }
    const commit = jest.fn()
    Utils.generateRandomHexColor = jest.fn(() => "#FFFF33")

    makeCitiesColorMap({ commit, state })

    expect(commit).toHaveBeenCalledWith("setCitiesColorMap", newMap)
  })

})