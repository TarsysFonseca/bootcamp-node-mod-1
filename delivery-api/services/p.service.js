import pRepository from '../repositories/p.repository.js'

const getTotalCliente = async (clientName) => {
    const pedidos = await pRepository.getPedidos();
    return pedidos
        .filter(pedido => pedido.cliente?.toUpperCase() === clientName?.toUpperCase() && pedido.entregue)
        .map(pedido => pedido.valor)
        .reduce((prev, curr) => prev + curr, 0);
}

export {
    getTotalCliente,
};