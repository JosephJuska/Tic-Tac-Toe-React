import '../styles/Square.css';

export function Square({style, ...props}: any){
    const mark = (style: string, x: number, o:number) => {
        if(!['classic', 'romantic', 'weird'].includes(style)){
            style = 'classic';
        }

        if(style === 'classic'){
            if(x){
                return(
                    <span style={{color: 'hsl(196, 100%, 25%)'}}>X</span>
                );
            }else if(o){
                return(
                    <span style={{color: 'hsl(17, 100%, 30%)'}}>O</span>
                );
            }else{
                return(
                    <span></span>
                );
            }
        }else if(style === 'romantic'){
            if(x){
                return(
                    <i style={{color : 'hsl(336, 100%, 55%)'}} className="fa-solid fa-heart"></i>
                );
            }else if(o){
                return(
                    <i style={{color: 'hsl(220, 100%, 55%)'}} className="fa-solid fa-diamond"></i>
                );
            }else{
                return(
                    <i></i>
                );
            }
        }else if(style === 'weird'){
            if(x){
                return(
                    <i style={{color : 'hsl(60, 100%, 55%)'}} className="fa-solid fa-sun"></i>
                );
            }else if(o){
                return(
                    <i style={{color : 'hsl(0, 0%, 55%)'}} className="fa-solid fa-moon"></i>
                );
            }else{
                return(
                    <i></i>
                );
            }
        }
    }
    return(
        <button className={`square ${props.winner ? 'winner-line' : ''} ${props.draw ? 'draw' : ''} ${style === 'classic' ? 'classic' : style === 'romantic' ? 'romantic' : style === 'weird' ? 'weird' : 'classic'}`} {...props}>{mark(style, props.x, props.o)}</button>
    );
}