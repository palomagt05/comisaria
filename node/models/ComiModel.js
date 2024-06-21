//importamos la conexion a ls DB
import db from "..database/comisariaDB"

//importamos sequelize
import { DataTypes } from "sequelize";

const ComiModel = db.define('comisaria', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default ComiModel
