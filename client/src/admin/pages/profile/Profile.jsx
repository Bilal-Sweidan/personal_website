const Profile = () => {

    return(
        <main className="bg-dark p-2 h-75 w-100 rounded">
            <h3 className="text-capitalize">profile</h3>
            <form action="" className="d-flex flex-wrap gap-5">
                <input type="text" name="email" placeholder="email" className="w-50 py-2 px-3" />
                <input type="text" name="email" placeholder="phone number" className="w-50 py-2 px-3" />
                <input type="text" name="email" placeholder="location" className="w-50 py-2 px-3" />
                
                <input type="text" name="email" placeholder="github account" className="w-50 py-2 px-3" />
                <input type="text" name="email" placeholder="linkedin" className="w-50 py-2 px-3" />
            </form>
        </main>
    )
}

export default Profile