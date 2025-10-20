const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const bairroInput = document.getElementById("bairro")
const cidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")
const contError = document.getElementById("erro-dialog")
const btnError = document.getElementById("fechar-dialog")

function formatarCep(){
    return cepInput.value.replace(/\D/g, "")
}

function showEndereco(logradouro,bairro,localidade, uf){
    logradouroInput.value = logradouro
    bairroInput.value = bairro
    cidadeInput.value = localidade
    ufInput.value = uf
}

async function buscarDados() {
    try{
        const cepValue = formatarCep()
        if(cepValue.length === 8){
            const requisicao = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
            const dados = await requisicao.json()
            const {logradouro,bairro,localidade, uf} = dados
            showEndereco(logradouro,bairro,localidade, uf)

            if(dados.erro){
                throw Error("Erro de Consulta")
            }
        }
    }catch(e){
        contError.showModal()
        console.log(e)
    }
}

btnError.addEventListener("click", () => contError.close())
cepInput.addEventListener("blur", buscarDados)