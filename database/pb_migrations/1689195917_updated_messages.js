migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rgemndl8uga445v")

  collection.createRule = "creator = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rgemndl8uga445v")

  collection.createRule = null

  return dao.saveCollection(collection)
})
