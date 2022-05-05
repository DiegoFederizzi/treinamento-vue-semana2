class Ano {
	constructor({
		codigo = null,
		nome = null
	}) {
		this.codigo = codigo
		this.nome = `${nome} - (${codigo})`
	}
}

export { Ano }
