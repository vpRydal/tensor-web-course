import ComponentFactory from "./Factory/componentFactory.js";
import Header from "./Components/header.js";
import Main from "./Components/main.js";

ComponentFactory.create(Header).mount(document.body);
ComponentFactory.create(Main).mount(document.body);



