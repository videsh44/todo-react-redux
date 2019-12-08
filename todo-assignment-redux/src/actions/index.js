import { v4 } from "node-uuid";

export const addTodo = text => ({
  type: "ADD_TODO",
  id: v4(),
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id: id
  };
};

export const editTodo = (id, text) => {
  return {
    type: "EDIT_TODO",
    id: id,
    text: text
  };
};
