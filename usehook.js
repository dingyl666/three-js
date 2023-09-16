

const myStates = [];
let stateCalls = -1;
function useStatus(defaultValue) {
    stateCalls += 1;
    const stateId = stateCalls;

    if (myStates[stateId]) {
        return myStates[stateId];
    }

    const setMyValue = (value) => {
        myStates[stateId][0] = value;
    };
    
    const tuple = [defaultValue, setMyValue];

    myStates[stateId] = tuple;

    return tuple ;
}

const [data,setData] = useStatus(111) ;

console.log(myStates,stateCalls) ;

setData(222) ;

console.log(myStates,stateCalls) ;

