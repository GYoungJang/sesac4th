const User = (Sequelize, DataTypes) => {
  // Sequelize는 model/index,js에서의 sequelize
  // DataTypes는 model/index.js에서의 Sequelize

  const model = Sequelize.define(
    'user',
    {
      // create ~~ (id int not null auto_increment primary key)
      id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      name: { // name varchar(10) not null
        type: DataTypes.STRING(10),
        allowNull: false
      },

      gender: {
        type: DataTypes.STRING(10),
        allowNull: false
      },

      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },

      age: { // comment mediumtext
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false, // true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.
      tableName: 'user',
      freezeTableName: true // table 이름을 바꾸지마..ㅜㅜ
    }
  );
  return model;
}




module.exports = User;