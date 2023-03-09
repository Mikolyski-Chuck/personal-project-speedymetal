import ExternalServices from "./ExternalServices.mjs";
//import { loadHeaderFooter } from "./utils.mjs";

//loadHeaderFooter();
async function callApi() {
  const apiServices = new ExternalServices();
  let symbols = await apiServices.getSymbol();
  console.log(symbols);
}

callApi();
