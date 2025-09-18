export default function Showusers({user}){
console.log(user)

// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"
const userStyle = {
    border : '2px solid red',
    padding: '10px',
    margin: '20px',
    borderRadius:'10px'
}
    return (
        <div style={userStyle}>
            <h4>name:{user.name}</h4>
            <p>phone: {user.phone}</p>
            <p>username: {user.username}</p>
            <p>website: {user.website}</p>
        </div>
    )
}