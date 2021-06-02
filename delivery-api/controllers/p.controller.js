const totalCliente = async (req, res, next) => {
    const clientName = req.body.cliente;
    if (!clientName) {
        res.status(400);
        return;
    }

    
}

export default {
    totalCliente
};