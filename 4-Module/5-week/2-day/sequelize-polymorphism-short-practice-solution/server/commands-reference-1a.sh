# Phase 1 - before edits

# NOTE: Will fail if model already exists
#       and if model doesn't exist then edits need to be made after this is run
dotenv npx sequelize model:generate --name Image --attributes url:string,imageableId:integer,imageableType:string
