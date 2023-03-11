import ExternalServices from "./ExternalServices.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
async function callApi() {
  const apiServices = new ExternalServices();
  let metal = await apiServices.getData("latest");
  console.log(metal);
}

//callApi();
