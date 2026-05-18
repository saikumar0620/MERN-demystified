import appwriteClient from ".";
import {  ID, TablesDB } from "appwrite";



class AppWriteTablesDb {
    constructor() {
        this.tablesDb = new TablesDB(appwriteClient);
    }
    async createTable(DbId,tableId,data) {
        const newRecord = await this.tablesDb.createRow({
              databaseId: DbId,
              tableId: tableId,
              rowId:ID.unique(),
              data: data
        });
        return newRecord;
    }

    async getAllRecords(DbId,TableId) {
        const allRecords = await this.tablesDb.listRows({
              databaseId: DbId,
              tableId: TableId
        });
        return allRecords?.rows;
    }

    async deleteRecord(DbId, tableId, rowId) {
        const deletedRecord = await this.tablesDb.deleteRow({
              databaseId: DbId,
              tableId: tableId,
              rowId: rowId
        });
        return deletedRecord;
    }
  }

  export default AppWriteTablesDb;