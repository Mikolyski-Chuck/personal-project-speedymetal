
const baseURL = "https://metals-api.com/api/";
const access_key = "6h6kitx11nk5ch2m3zlyc7ikahowofpu8uv8tpl9rfbuv2p8bwd3vugimk6h";


async function convertToJson(res) {
  let resJ = await res.json();
  if (res.ok) {
    return resJ;
  } else {
    throw { name: 'servicesError', message: resJ };
  }
}

export default class ExternalServices {
  constructor() {
  }
  async getData(endPoint) {
    const response = await fetch(baseURL + endPoint + "?access_key=" + access_key);
    const metalData = convertToJson(response);
    return metalData;
}
  
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
    async getAll() {
    const product = this.getData;
    
    return product;
  }
  
  async postPayLoad(payload, command) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + command, options).then(convertToJson);
  }

}
