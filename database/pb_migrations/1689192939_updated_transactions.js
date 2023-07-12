migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jrrioea4ym0l5dv")

  collection.listRule = "receiver = @request.auth.id && emitter = @request.auth.id"
  collection.viewRule = "receiver = @request.auth.id && emitter = @request.auth.id"
  collection.createRule = "emitter = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jrrioea4ym0l5dv")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
