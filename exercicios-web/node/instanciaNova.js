//Uma facory reorna um novo objeto

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}