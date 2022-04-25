export const loadLocalStorage = () => {
  try {
    const state = localStorage.getItem("todo-project");
    if (state === null) return undefined;
    return JSON.parse(state);
  } catch (error) {
    return undefined;
  }
};

export const saveToLocalStorage = (state: any) => {
  try {
    const todoProject = JSON.stringify(state);
    localStorage.setItem("todo-project", todoProject)
  } catch (error) {
  }
}