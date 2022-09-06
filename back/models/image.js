module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      // MySql에는 Images 테이블 생성
      // id가 기본적으로 들어감
      src: {
        type: DataTypes.STRING(200),
        allowNull: false, // 필수
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", // 한글 저장
    }
  );
  Image.associate = (ab) => {};
  return Image;
};
