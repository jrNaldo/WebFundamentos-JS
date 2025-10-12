const calcRevealPatern = (function(){
    let n = 0
    
    function _checkNumber(n){
        if(typeof n !== "number"){
            throw TypeError("Precisa passar parametros do tipo number")
        }
    }

    function somar(_n){
        _checkNumber(_n)
        n += _n
        return this
    }
    function subtrair(_n){
        _checkNumber(_n)
        n -= _n
        return this
    }
    function log(){
        console.log(n)
        return this
    }

    return {
        somar,
        subtrair,
        log
    }
})();

calcRevealPatern.somar(5).somar(120).log().subtrair(150).somar(1234).subtrair(12).log()