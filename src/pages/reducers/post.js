export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "choJaeYoung",
      },
      content: "첫 번째 게시글",
      Images: [
        {
          src: "https://photo.coolenjoy.co.kr/data/editor/1908/Bimg_fbeae84af08bbd7de189375fbdf82983_xmol.png",
        },
        {
          src: "https://photo.coolenjoy.co.kr/data/editor/1908/Bimg_fbeae84af08bbd7de189375fbdf82983_lczc.png",
        },
        {
          src: "https://photo.coolenjoy.co.kr/data/editor/1908/Bimg_fbeae84af08bbd7de189375fbdf82983_09l4.png",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "pack1",
          },
          content: "댓글임",
          User: {
            nickname: "pack2",
          },
          content: "댓글임2",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "nick1",
  },
  Image: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
