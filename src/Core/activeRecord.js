import QueryBuilder from "./queryBuilder.js";

class ActiveRecord {
    'use strict';
    static _tableName;
    static _fieldsName;
    static _alias;

    constructor() {
        this._tableName = this.tableName
        this._fieldsName = this.fieldsName
    }

    get() {
        return new QueryBuilder(this.constructor.name, {}).get()
    }

    select(fields) {
        return new QueryBuilder(this.constructor.name, {}).select(fields)
    }

    static get() {
        return new QueryBuilder(this._alias, {}).get()
    }

    static select(fields) {
        return new QueryBuilder(this._alias, {}).select(fields)
    }

    static where(options) {
        return new QueryBuilder(this._alias, {}).where(options)
    }

    /**
     * @abstract
     */
    get tableName (){
    }

    /**
     * @abstract
     */
    get fieldsName (){
    }

    /**
     * @static
     */
    static get tableName () {
        return this._tableName
    }

    /**
     * @static
     */
    static get fieldsName (){
        return this._fieldsName
    }

    fill(obj) {
        Object.keys(obj).forEach((propName) => {
            if (this.fieldsName.includes(propName)) {
                this[propName] = obj[propName];
            }
        })

        return this;
    }

    belongTo(relationModelAlias, foreignKey, localKey) {
        let whereArgs = {}

        whereArgs[localKey] = this[foreignKey];

        return new QueryBuilder(relationModelAlias).where(whereArgs).first();
    }

    hasMany(relationModelAlias, foreignKey, localKey) {
        let whereArgs = {}

        whereArgs[foreignKey] = this[localKey];

        return new QueryBuilder(relationModelAlias).where(whereArgs).get();
    }
}

export default ActiveRecord