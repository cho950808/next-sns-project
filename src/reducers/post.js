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
          content: "댓글임2111",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

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
    case ADD_POST_REQUEST:
      return {
        ...state,
        postAdded: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        postAdded: false,
      };
    default:
      return state;
  }
};

export default reducer;
