const initialState = {
  array: [
    { id: 1, title: 'Task1', node: 'Prvi zadatak' },
    { id: 2, title: 'Task2', node: 'Drugi zadatak' },
  ],
  draftArray: [{ id: 0, title: 'Draft1', node: 'Prvi draft' }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW':
      return {
        ...state,
        array: [
          ...state.array,
          {
            id: state.array[state.array.length - 1].id + 1,
            title: action.title,
            node: action.node,
          },
        ],
      };

    case 'DRAFT':
      return {
        ...state,
        draftArray: [
          ...state.draftArray,
          {
            id: state.draftArray[state.draftArray.length - 1].id + 1,
            title: action.title,
            node: action.node,
          },
        ],
      };

    case 'DELETE_DRAFT':
      const idDraft = state.draftArray.filter(
        (el, i) => el.id !== action.ids
      );
      return {
        ...state,
        draftArray: idDraft,
      };

    case 'PASS_LIST':
      const ids = state.draftArray.filter(
        (el, i) => el.id !== action.index
      );
      return {
        ...state,
        draftArray: ids,
        array: [
          ...state.array,
          {
            id: state.array[state.array.length - 1].id + 1,
            title: action.titles,
            node: action.nodes,
          },
        ],
      };

    case 'DELETE_CONTAINER':
      const id = state.array.filter((el, i) => el.id !== action.ids);
      return {
        ...state,
        array: id,
      };
  }

  return state;
};

export default reducer;
