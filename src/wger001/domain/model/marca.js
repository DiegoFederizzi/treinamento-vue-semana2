class Marca {
	constructor({
		codigo = null,
		nome = null
	}) {
		this.codigo = codigo
		this.nome = `${nome} - (${codigo})`
	}
}

export { Marca }
