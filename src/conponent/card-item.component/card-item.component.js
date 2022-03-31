import "./card-item.style.css"

export const CardItem=({user})=>{
    return(
        <li className="card-container">
            <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user}/>
            <h1>{user.name}</h1>
            <span>{user.email}</span>
        </li>
    );
};