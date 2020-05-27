import QueryBuilder from "./queryBuilder.js";

class ActiveRecord {
    'use strict';
    _tableName;
    _queryString;
    _fieldsName

    constructor(tableName, fieldsName) {
        this._tableName = tableName
        this._fieldsName = fieldsName
    }

    get() {
        return new QueryBuilder(this, {}).get()
    }

    select(fields) {
        return new QueryBuilder(this, {}).select(fields)
    }

    get tableName (){
        return this._tableName
    }

    fill(obj) {
        Object.keys(obj).forEach((propName) => {
            if (this._fieldsName.includes(propName)) {
                this[propName] = obj[propName];
            }
        })

        return this;
    }
}

export default ActiveRecord