const UserProfile = (props) => {
    
    return (
        <div style={{
            border: '1px solid #ccc', 
            padding: '25px',
            margin: '10px',
        }}>
            <h2>User Profile</h2>
            <p>
                <b>Name</b>: {props.name}
            </p>
            <p>
                <b>Email</b>: {props.name}@gmail.com
            </p>
        </div>
    );
};

export default UserProfile; 