/**
 * @property {ActiveRecord} _model
 */
import Model from "../App/Facades/model.js";

class QueryBuilder {
    _select
    _where
    _order
    _limit
    _offset
    _model
    _tableName

    constructor(modelAlias, props) {
        this._modelAlias = modelAlias

        this._tableName = Model.getClassModel(modelAlias).tableName

        return this;
    }

    select(fields) {
        this._select = fields;

        return this;
    }

    get() {
        return fetch(this.renderQuery({}), {
            method: 'get',
        })
            .then(response => response.json())
            .then(data => {
                return data.reduce((acc, item) => {
                    let model = Model.getInstance(this._modelAlias)

                    model.fill(item)

                    acc.push(model)

                    return acc
                }, [])
            })
    }

    where(options) {
        this._where = options;

        return this
    }

    first() {
        return fetch(this.renderQuery({
            first: true
        }), {
            method: 'get',
        })
            .then(response => response.json())
            .then(data => {
                let model = Model.getInstance(this._modelAlias)

                model.fill(data[0])

                return model
            })
    }

    renderQuery({first}) {
        let query = `/${this._tableName}?`

        if(first) {
            this._limit = 1
        }

        if (this._where) {
            let wherePart = []

            Object.keys(this._where).forEach((propName => {
                wherePart.push(`${propName}=${this._where[propName]}`)
            }))

            query += wherePart.join(',')
        }

        if(this._limit) {
            query+= `&_limit=${this._limit}`
        }

        return query
    }
}

export default QueryBuilder