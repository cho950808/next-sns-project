module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      // MySql에는 Hashtags 테이블 생성
      // id가 기본적으로 들어감
      name: {
        type: DataTypes.STRING(20),
        allowNull: false, // 필수
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글 저장
    }
  );
  Hashtag.associate = (ab) => {};
  return Hashtag;
};
