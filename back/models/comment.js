module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      // MySql에는 Comments 테이블 생성
      // id가 기본적으로 들어감
      content: {
        type: DataTypes.TEXT,
        allowNull: false, // 필수
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글 저장
    }
  );
  Comment.associate = (ab) => {};
  return Comment;
};
