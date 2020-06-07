export interface TheStore
{
    tableSelectEnabled:boolean
    currentExpSelectEnabled:boolean
}

// --- ACTIONS ---
type StoreAction=any;
// --- ACTIONS END ---

var store:TheStore;

// --- ACCESSORS ---

// --- ACCESSORS END ---

// --- REDUCERS ---
function tableSelectEnabledReduce(tableSelectionEnabled:boolean,act:StoreAction):boolean
{
    return tableSelectionEnabled;
}

function currentExpSelectEnabledReduce(currentExpSelectEnabled:boolean,act:StoreAction):boolean
{
    return currentExpSelectEnabled;
}
// --- REDUCERS END ---

// ---STORE DEFINITION ---
store=Redux.createStore((state:TheStore,act:StoreAction):TheStore=>{
    return {
        tableSelectEnabled:tableSelectEnabledReduce(state.tableSelectEnabled,act),
        currentExpSelectEnabled:currentExpSelectEnabledReduce(state.currentExpSelectEnabled,act)
    };
},{
    tableSelectEnabled:false,
    currentExpSelectEnabled:true
});

export default store;