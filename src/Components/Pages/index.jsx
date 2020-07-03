import React, { Component } from 'react'
import NumberFormat from 'react-number-format'
import Input from '../Input/input'
import Form from '../Form/form'
import Select from '../Select/select'
import { getUFS, getCidades, getEnderecoCep } from '../Services/address'

export default class Index extends Component {
    state={cep:'', ufs:[], uf:'', cidades:[], bairro:'', logradouro:'', cidade:'', action:false}

    componentDidMount(){
        getUFS()
        .then(resp => {
            this.setState({ufs:resp.data.sort(this.ordenar)})
        })
    }

    mapUfs(){
        const ufs = this.state.ufs || [];
        return ufs.map(desc => (
            <option key={desc.id} value={desc.sigla}>{desc.sigla}</option>
        ))
    }

    ordenar = (a,b) => {
        return a.sigla < b.sigla ? -1 : a.sigla> b.sigla ? 1 : 0
    }

    changeUF = event => {
        const uf = event.target.value
        this.setState({uf:uf})

        this.getCity(uf)

    }

    getCity = uf => {
        getCidades(uf)
        .then(resp => {
            this.setState({cidades:resp.data})
        })
    }

    mapCidades(){
        const cidades = this.state.cidades || []
        return cidades.map(desc => (
            <option key={desc.id} value={desc.nome}>{desc.nome}</option>
        ))
    }

    changeCep = event => {
        const cep = event.target.value
        this.setState({cep:cep})
    }

    getAddressCep = () => {

        getEnderecoCep(this.state.cep)
        .then(resp => {
            this.setState({
                bairro:resp.data.bairro, 
                logradouro:resp.data.logradouro,
                uf:resp.data.uf,
                cidade:resp.data.localidade,
                action:true
            })
        })
        .then(resp => (this.getCity(this.state.uf)))
        
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <div className="row">
                        <div className="col-md-3">
                            <NumberFormat 
                                allowEmptyFormatting={false}
                                icon="street-view"
                                mask=""
                                placeholder="Digite um CEP"
                                label="CEP"
                                customInput={Input}
                                format={"#####-###"}
                                onChange={this.changeCep}
                                disabled={this.state.action === true ?(true):(false)}
                            />

                        </div>
                        <div className="col-md-1">
                            <div className="input-group mb-3" style={{paddingTop: '30px'}}>
                                <button type="button" className="btn btn-secondary" onClick={this.getAddressCep}>Buscar</button>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <Input 
                                type="text"
                                icon="street-view"
                                placeholder="Digite o logradouro"
                                label="Logradouro"
                                value={this.state.logradouro}
                                     
                            />
                        </div>
                        <div className="col-md-2">
                            <Input 
                                type="number"
                                icon="street-view"
                                placeholder="Digite o número"
                                label="Número"
                            
                            />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Select 
                                label="UF"
                                onChange={this.changeUF} 
                                value={this.state.uf}
                            >
                                <option value="">Selecione a UF</option>
                                {this.mapUfs()}
                            </Select>

                        </div>
                        <div className="col-md-3">
                            <Select 
                                label="CIDADES"
                                value={this.state.cidade} 
                            >
                                <option value="">Selecione a cidade</option>
                                {this.mapCidades()}
                            </Select>

                        </div>
                        <div className="col-md-3">
                            <Input 
                                type="text"
                                placeholder="Digite o bairro"
                                label="Bairro"
                                icon="street-view"
                                value={this.state.bairro}
                            
                            />

                        </div>
                        <div className="col-md-3">
                            <Input 
                                type="text"
                                placeholder="Digite o complemento"
                                label="Complemento"
                                icon="street-view"
                            
                            />

                        </div>
                    </div>

                </Form>
            </React.Fragment>
        )
    }
}
