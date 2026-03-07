import {Builder} from 'xml2js';


export const buildSoapResponse = (users : any, operationType: string) => {
    const build = new Builder({headless: true})
    const soap = {
        "soap:Envelope": {
            $: {"xmlns:soap": "https://schemas.xmlsoap.org/soap/envelope/"},
            "soap:Body": {
                [operationType]: {
                    user: users
                }
            }
        }
    }
   return build.buildObject(soap)
}