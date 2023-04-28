const data = { user: null , videos : null , store : null }

const reducer = ( state = data , action )=>
{
    switch( action.type )
    {
        case "user_data" : return { ...state , user : action.payload}
        case "video_data" : return{ ...state , videos : action.payload }
        case "dummy_data" : return{ ...state , store : action.payload }
        default : return state 
    }
}

export default reducer