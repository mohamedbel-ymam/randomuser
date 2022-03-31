import "./card-item.style.css"

export const CardItem=({user})=>{
    return(
        <li className="card-container">
            <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user}/>
            <h2>{user.name}</h2>
            <span>{user.email}</span>
        </li>
    );
};