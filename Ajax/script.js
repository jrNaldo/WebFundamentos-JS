const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const bairroInput = document.getElementById("bairro")
const cidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")
const contError = document.getElementById("erro-dialog")
const btnError = document.getElementById("fechar-dialog")

function formatarCep(){
    return cepInput.value.replace("-","").trim()
}

function showEndereco(logradouro,bairro,localidade, uf){
    logradouroInput.value = logradouro || ""
    bairroInput.value = bairro || ""
    cidadeInput.value = localidade || ""
    ufInput.value = uf || ""
}

function limparDados(){
    logradouroInput.value = ""
    bairroInput.value = ""
    cidadeInput.value = ""
    ufInput.value = ""
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
        }else{
            throw Error("O cep deve conter 8 digitos")
        }
    }catch(e){
        limparDados()
        contError.showModal()
        console.log(e)
        document.getElementById("erro-msg").textContent = e
    }
}

btnError.addEventListener("click", () => contError.close())
cepInput.addEventListener("blur", buscarDados)