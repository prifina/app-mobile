export const checkUsername = `query checkUsername($userName: String!) {
  checkUsername(userName: $userName)
}
`;
/*
export const getSchemaTypes = `query listTypesBySchema($schemaId: ID!, $nextToken: String) {
  listTypesBySchema(schemaId: $schemaId, nextToken: $nextToken) {
    items {
      id
      name
      alternateName
      description
      alternateDescription
      type
      lockName
      fields
    }
    nextToken
  }
}
`;

export const getAllDataModels = `query listDataModels($filter:TableDataModelsFilterInput) {
    listDataModels(filter:$filter) {
      items {
        uuid
        name
        description
        creator
        owner
        created
        modified
        status
        versions
        imported
      }
    }
  }
  `;

export const getDataModel = `query getDataModels($uuid: String!) {
    getDataModels(uuid: $uuid) {
        uuid
        name
        description
        creator
        owner
        created
        modified
        status
        major
        minor
        organization
        draftTypes
        versions
        imported
    }
  }
  `;
export const getDraftDataModel = `query getDataModels($uuid: String!) {
    getDataModels(uuid: $uuid) {
        uuid
        draftTypes
    }
  }
  `;
 */
/*
query getDataModels {
  getDataModels(uuid:"unique-id") {
      uuid
      name
      description
      creator
      owner
      created
      modified
      status
      organization
  }
}    
*/
/*
export const getAlbum = `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      name
      photos {
        items {
          id
          albumId
          bucket
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
*/
/*
const modelfilter={
    "filter":{
      "owner":{"eq":"TERO"}
    }
  }
*/
