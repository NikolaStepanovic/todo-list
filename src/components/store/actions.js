export const addNewList = (titles, nodes) => {
  return {
    type: 'ADD_NEW',
    title: titles,
    node: nodes,
  };
};


export const deleteContainer = id => {
  return {
    type: 'DELETE_CONTAINER',
    ids: id,
  };
};

export const onClickDraft = (titles, nodes) => {
  return {
    type: 'DRAFT',
    title: titles,
    node: nodes,
  };
};

export const onDeleteDraft = id => {
  return {
    type: 'DELETE_DRAFT',
    ids: id,
  };
};

export const passDraftToList = (id, title, node) => {
  return {
    type: 'PASS_LIST',
    index: id,
    titles: title,
    nodes: node,
  };
};
