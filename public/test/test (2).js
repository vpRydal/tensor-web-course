import {} from './../js/App/bootstrap.js'
import App from "../js/App/Facades/app.js";
import ComponentFactory from "../js/App/Factory/componentFactory.js";
import ModelFactory from "../js/App/Factory/modelFactory.js";
import Component from "../js/Core/component.js";
import Main from "../js/App/Components/main.js";
import Header from "../js/App/Components/header.js";

describe("Test 'App' facade", function() {
   'use strict';
    it('If call "get" method with alias "ComponentFactory" mast return instance of ComponentFactory', function() {
        const componentFactory = App.get('ComponentFactory')

        assert.equal(componentFactory instanceof ComponentFactory, true);
    })
    it('If call "get" method with alias "ModelFactory" mast return instance of ModelFactory', function() {
        const modelFactory = App.get('ModelFactory')

        assert.equal(modelFactory instanceof ModelFactory, true);
    })
});

describe("Test creation of components on factory", function() {
    'use strict';
    it('Component "Main" mast be extends of class "Component"', function() {
        const componentFactory = App.get('ComponentFactory')

        assert.equal(componentFactory.create(Main) instanceof Component, true);
    })

    it('Component "Header" mast be extends of class "Component"', function() {
        const componentFactory = App.get('ComponentFactory')

        assert.equal(componentFactory.create(Header) instanceof Component, true);
    })
});

mocha.run();
