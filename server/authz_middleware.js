const { CredentialsMethod, OpenFgaClient } = require('@openfga/sdk'); 


const fgaClient = new OpenFgaClient({
    apiScheme: process.env.FGA_API_SCHEME, // optional, defaults to "https"
    apiHost: process.env.FGA_API_HOST, // required, define without the scheme (e.g. api.fga.example instead of https://api.fga.example)
    storeId: process.env.FGA_STORE_ID, // not needed when calling `CreateStore` or `ListStores`
    authorizationModelId: process.env.FGA_AUTHORIZATION_MODEL_ID, // Optional, can be overridden per request
    credentials: {
      method: CredentialsMethod.ClientCredentials,
      config: {
        apiTokenIssuer: process.env.FGA_API_TOKEN_ISSUER,
        apiAudience: process.env.FGA_API_AUDIENCE,
        clientId: process.env.FGA_CLIENT_ID,
        clientSecret: process.env.FGA_CLIENT_SECRET,
      }
    }
  });


async function authorize(req, res) {
    console.log("authorize");
    const tuple = {
        user: req.subject,
        relation: req.relation,
        object: req.object    
    }
    console.log("tuple", tuple);
    const {allowed} = await fgaClient.check(tuple);

    if (!allowed) {
        console.log("Not Authorized")
        res.status(403).json({ message: "Not Authorized"}); 
    }
}


module.exports = {
    authorize,
};