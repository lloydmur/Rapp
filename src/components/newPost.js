const newPost = () => {
    return ( 
        <div className="newPost">
            <h2>Create a new Post!</h2>
            <form>
                <label>Title</label>
                <input 
                    type="text"
                    required     
                />
                <label>Content (max 30 characters)</label>
                <textarea name="" id="" cols="30" rows="10" required>

                </textarea>
            </form>
        </div>
     );
}
 
export default newPost;