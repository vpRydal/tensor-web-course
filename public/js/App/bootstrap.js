import ServiceContainer from "../Core/serviceContainer.js";
import { providers } from "./appConfig.js";
import Facade from "../Core/facade.js";

const serviceContainer = new ServiceContainer()

Facade.serviceContainer = serviceContainer

providers.forEach(providerClass => {
    const provider = new providerClass(serviceContainer)

    provider.init()
})