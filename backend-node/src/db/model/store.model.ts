import {  DataTypes } from "sequelize";

const store = (sequelize:any) => {
    sequelize.define('store', {
        store_id:{
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name:{
            allowNull: false,
			type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.STRING,
        }
    },{
        tableName:'store'
    })
}

export default store;