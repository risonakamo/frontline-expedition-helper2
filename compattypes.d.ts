declare const ReactDOM:any;

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