export interface TheStore
{
    tableSelectEnabled:boolean
    currentExpSelectEnabled:boolean

    dispatch:(action:StoreAction)=>void
}

// --- ACTIONS ---
interface ToggleTableSelectEnabledAction
{
    type:"ToggleTableSelectEnabled"
}

interface ToggleCurrentExpSelectEnabledAction
{
    type:"ToggleCurrentExpSelectEnabled"
}

type StoreAction=ToggleTableSelectEnabledAction|ToggleCurrentExpSelectEnabledAction;
// --- ACTIONS END ---

var store:TheStore;

// --- ACCESSORS ---
export function toggleTableSelectEnabled():void
{
    store.dispatch({
        type:"ToggleTableSelectEnabled"
    });
}

export function toggleCurrentExpSelect():void
{
    store.dispatch({
        type:"ToggleCurrentExpSelectEnabled"
    });
}
// --- ACCESSORS END ---

// --- REDUCERS ---
function tableSelectEnabledReduce(tableSelectionEnabled:boolean,act:StoreAction):boolean
{
    if (act.type=="ToggleTableSelectEnabled")
    {
        return !tableSelectionEnabled;
    }

    return tableSelectionEnabled;
}

function currentExpSelectEnabledReduce(currentExpSelectEnabled:boolean,act:StoreAction):boolean
{
    if (act.type=="ToggleCurrentExpSelectEnabled")
    {
        return !currentExpSelectEnabled;
    }

    return currentExpSelectEnabled;
}
// --- REDUCERS END ---

// ---STORE DEFINITION ---
store=Redux.createStore((state:TheStore,act:StoreAction)=>{
    return {
        tableSelectEnabled:tableSelectEnabledReduce(state.tableSelectEnabled,act),
        currentExpSelectEnabled:currentExpSelectEnabledReduce(state.currentExpSelectEnabled,act)
    };
},{
    tableSelectEnabled:false,
    currentExpSelectEnabled:true
});

export default store;