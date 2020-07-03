import { ibge, viacep} from './Api'

const getUFS = async () => {
    return ibge.get("estados")
}

const getCidades = async (uf) => {
    return ibge.get(`estados/${uf}/municipios`)
}

const getEnderecoCep = async (cep) => {
    return viacep.get(`${cep}/json/`)
}

export { getUFS, getCidades, getEnderecoCep }