
// useReducer
// store=>view
// reducer=>

const initialState={
    auth:false,
    data:null,
    error:null,
    loading:false
}

export const authReducer=(store=initialState,action)=>{
switch(action.type){
    case "process":{
        return (
            store={loading:true,...store}
            )
    }
    case "error":{
        return(store={loading:false,error:action.payload,...store})
    }
    case "login":{
        return(store={loading:false,auth:true,data:action.payload,error:null})
    }
    case "logout":{
        return (store={loading:false,auth:false,data:null,error:null})
    }
    default: return store;
}
}