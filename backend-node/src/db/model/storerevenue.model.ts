import {  DataTypes } from "sequelize";

const storerevenue = (sequelize:any) => {
    sequelize.define('storerevenue', {
        store_id:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        month:{
            allowNull: false,
			type: DataTypes.STRING,
        },
        year:{
            allowNull: false,
			type: DataTypes.STRING,
        },
        amount:{
            allowNull: false,
            type: DataTypes.INTEGER
        },
        rev_id:{
            primaryKey: true,
			type: DataTypes.STRING,
        },
        outlet_id:{
            allowNull: false,
			type: DataTypes.STRING,
        }
    },{
        tableName:'storerevenue'
    })
}

export default storerevenue;