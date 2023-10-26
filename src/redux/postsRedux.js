//selectors

//actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');

export const removePost = payload => ({ type: REMOVE_POST, payload });

export const addPost = payload => ({ type: ADD_POST, payload });

//action creators

const postsReducer = (statePart = [], action) => {
	switch (action.type) {
		case REMOVE_POST:
			return statePart.filter(post => post.id !== action.payload);
		case ADD_POST:
			return [...statePart, { ...action.payload }];
		default:
			return statePart;
	}
};

export default postsReducer;
