class Usuario {
    constructor (pNome, pEndereco){
        this.Nome = pNome;
        this.Endereco = pEndereco;
    }
    get Nome (){
        return this.nome;
    }
    set Nome (pNome) {
        this.nome = pNome;
    }
    get Endereco (){
        return this.endereco;
    }
    set Endereco (pEndereco){
        this.endereco = pEndereco;
    }
    imprimir (){ 
        return "Nome: " + this.nome +
            "\nEndereço: " + this.endereco;
    }
    }
class PessoaFisica extends Usuario {
    constructor (pNome, pEndereco, pCPF, pNascimento){
        super (pNome, pEndereco);
        this.Cpf = pCPF;
        this.Nascimento = pNascimento;
    }
get Cpf (){
    return this.cpf;
}
set Cpf (pCPF) {
    this.cpf = pCPF;
}
get Nascimento (){
    return this.Nascimento;
}
set Nascimento(pNascimento) {
    this.datadenascimento = pNascimento;
}
    imprimir(){
        return super.imprimir() + "\nCPF: " + this.cpf + "\nNascimento: " + this.datadenascimento;
 }
}
class PessoaJuridica extends Usuario {
    constructor (pNome, pEndereco, pCNPJ, pRazaoSocial){
        super (pNome, pEndereco);
        this.Cnpj = pCNPJ;
        this.RazaoSocial = pRazaoSocial;
    }
get Cnpj (){
    return this.cnpj;
}
set Cnpj (pCNPJ) {
    this.cnpj = pCNPJ;
}
get RazaoSocial (){
    return this.razaosocial;
}
set RazaoSocial (pRazaoSocial) {
    this.razaosocial = pRazaoSocial;
}
    imprimir(){
        return super.imprimir() + "\nCNPJ: " + this.cnpj + "\nRazão Social: " + this.razaosocial;
    }
}
var objeto_PessoaFisica = new PessoaFisica ("Monkey D. Luffy", "East Blue s/n (Cabana dos Ladrões)", "787.778.888-66", "25/02/1997");
console.log(objeto_PessoaFisica.imprimir());
console.log("\n");
var objeto_PessoaJuridica = new PessoaJuridica ("Gol D. Roger", "East Blue s/n (Laugh Tale)", "02.555.123/0002-2", "Rei dos Piratas");
console.log(objeto_PessoaJuridica.imprimir());