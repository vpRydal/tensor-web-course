import {} from './bootstrap.js'
import ComponentFactory from "./Factory/componentFactory.js";
import Header from "./Components/header.js";
import Main from "./Components/main.js";
import App from "./Facades/app.js";


const header = App.get('ComponentFactory').create(Header);
header.mount(document.body)

const main = App.get('ComponentFactory').create(Main);
main.mount(document.body)
