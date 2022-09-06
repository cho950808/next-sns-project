module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // id가 기본적으로 들어감
      email: {
        type: DataTypes.STRING(30),
        allowNull: true, // 필수
        unique: true, // 고유한 값
      },
      nickname: {
        type: DataTypes.SPRING(30),
        allowNull: false, // 필수
      },
      password: {
        type: DataTypes.SPRING(100),
        allowNull: false, // 필수
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", // 한글 저장
    }
  );
  User.associate = (ab) => {};
  return User;
};
