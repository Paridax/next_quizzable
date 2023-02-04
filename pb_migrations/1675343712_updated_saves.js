migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgo8ztj7tb6mjd3")

  collection.createRule = "(\n  @request.data.flashcardsKnown.set.id = parentSet.id\n  ||\n  @request.data.flashcardsKnown:length = 0\n)\n&&\n(\n  @request.data.flashcardsUnknown.set.id = parentSet.id\n  ||\n  @request.data.flashcardsUnknown:length = 0\n)\n&&\n(\n  @request.data.learnCardsKnown.set.id = parentSet.id\n  ||\n  @request.data.learnCardsKnown:length = 0\n)\n&&\n(\n  @request.data.learnCardsUnknown.set.id = parentSet.id\n  ||\n  @request.data.learnCardsUnknown:length = 0\n)\n&&\n@request.data.user.id = @request.auth.id"
  collection.updateRule = "(\n  @request.data.flashcardsKnown.set.id = parentSet.id\n  ||\n  @request.data.flashcardsKnown:length = 0\n)\n&&\n(\n  @request.data.flashcardsUnknown.set.id = parentSet.id\n  ||\n  @request.data.flashcardsUnknown:length = 0\n)\n&&\n(\n  @request.data.learnCardsKnown.set.id = parentSet.id\n  ||\n  @request.data.learnCardsKnown:length = 0\n)\n&&\n(\n  @request.data.learnCardsUnknown.set.id = parentSet.id\n  ||\n  @request.data.learnCardsUnknown:length = 0\n)\n&&\nuser.id = @request.data.user.id\n&&\nparentSet.id = @request.data.parentSet.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgo8ztj7tb6mjd3")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
