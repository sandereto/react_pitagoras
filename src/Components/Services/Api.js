import axios from 'axios'

const baseIBGE = "https://servicodados.ibge.gov.br/api/v1/localidades/"
const baseVIACEP = "https://viacep.com.br/ws/";

const ibge = axios.create({
    baseURL:baseIBGE
})

const viacep = axios.create({
    baseURL:baseVIACEP
})

export { ibge, viacep }