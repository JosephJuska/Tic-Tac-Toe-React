import '../styles/Board.css';

export function Board({children, ...props}: any){
    return(
        <div {...props}>
            {children}
        </div>
    );
}