declare const ReactDOM:any;
declare const Papa:any;
declare const _:any;
declare const Redux:any;
declare const ReactRedux:any;

declare namespace React
{
    class Component
    {
        constructor(props:any)
        setState:Function
    }

    class PureComponent extends Component
    {

    }

    const createRef:Function
}

declare namespace JSX
{
    interface IntrinsicElements
    {
        [key:string]:any
    }
}