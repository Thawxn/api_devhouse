//Metodos: index, show, update, store, destroy
/*
index: Listagem de sessões
strore: criar uma sessão
show: quando queremos listar uma UNICA sessão
update: quando queremos listar uma unica sessão 
destroy: quando queremos listr uma unica sessão
*/
import User from '../models/User';

class SessionController{

    async store(req, res){
        const { email } = req.body;

        let user = await User.create({ email });

        return res.json(user);
    };
};

export default new SessionController();