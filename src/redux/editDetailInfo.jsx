export function editDetailinfo(info) {
    return {
      type: "EDIT_DETAIL_INFO",
      payload: info,
    };
  }
  
  const editOrDEtailInfo = [];
  
  export default function editDetailinfoReducer(state = editOrDEtailInfo, action) {
    switch (action.type) {
      case "EDIT_DETAIL_INFO":
        return (state = action.payload);
      default:
        return state;
    }
  }
  