migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "htjh8wah",
    "name": "rib",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 16,
      "max": 34,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("htjh8wah")

  return dao.saveCollection(collection)
})
