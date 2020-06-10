import {} from './bootstrap.js'
import ComponentFactory from "./Factory/componentFactory.js";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import App from "./Facades/app.js";


const header = App.get('ComponentFactory').create(Header);
header.mount(document.body)

const main = App.get('ComponentFactory').create(Main);
main.mount(document.body)
