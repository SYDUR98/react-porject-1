import { use } from "react";
import Showusers from "./Showusers";


export default function Users({fetchUsers}){

const users = use(fetchUsers);
console.log(users)

    return(
        <div className="cards">
            <h3>All Users:</h3>
            {
                users.map(user=><Showusers user={user}></Showusers>)
            }
        </div>
    )
}