import ServiceContainer from "../Core/serviceContainer.js";
import { providers, models } from "./appConfig.js";
import Facade from "../Core/facade.js";
import Model from "./Facades/model.js";
import App from "./Facades/app.js";

const serviceContainer = new ServiceContainer()

Facade.serviceContainer = serviceContainer

providers.forEach(providerClass => {
    const provider = new providerClass(serviceContainer)

    provider.init()
})

const _models = []

models.forEach(modelClass => {
    const model = App.get('ModelFactory').create(modelClass, {})

    modelClass._tableName = model.tableName
    modelClass._fieldsName = model.fieldsName
    modelClass._alias = model.constructor.name

    _models[model.constructor.name] = modelClass;
})

Model._models = _models