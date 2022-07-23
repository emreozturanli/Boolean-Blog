import {createContext,useState,useEffect, useContext} from 'react'
import { db } from '../firebase/firebase';
import { set, ref, push, onValue,remove, update} from 'firebase/database';
import {AuthContext} from './AuthContext'
import toast  from 'react-hot-toast';

export const BlogContext = createContext()

const BlogContextProvider = ({children}) => {
    const {user} = useContext(AuthContext)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState('')
    const [newPostOpen, setNewPostOpen] = useState(false)
    const [editPostOpen, setEditPostOpen] = useState(false)
    const [posts,setPosts] = useState([])
    const [updateInfo, setUpdateInfo] = useState({});

    const writeToDatabase = () => {
        if(title && content){
        const blogRef = ref(db, 'Blog');
        console.log(blogRef);
        const newBlogRef = push(blogRef)
        // console.log(newBlogRef);
        set(newBlogRef, {
            title:title,
            content:content,
            image:image,
            author: user.displayName,
            userId: user.uid,
            favourite: '0'
        })
        // console.log(db);
        setTitle('')
        setContent('')
        setImage('')
        setNewPostOpen(false)
    }else{
        toast.error('Title and Content is required')
    }
    };

    useEffect(() => {
        const userRef = ref(db, "Blog");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const blogArr = [];
            for (let id in data) {
                blogArr.push({
                    id,
                    ...data[id]
                })
            }
            // console.log(noteArr);
            setPosts(blogArr);
        })
    }, [])

    const editBlogPost = () => {
        if(updateInfo.title && updateInfo.content){
            update(ref(db, 'Blog/' + updateInfo.id), {
                title:updateInfo.title,
                content:updateInfo.content,
                image:updateInfo.image,
                favourite:updateInfo.favourite,
                author: user.displayName,
                userId: user.uid
            })
            setEditPostOpen(false)
        }else{
            toast.error('Title and Content is required')
        }
    }

    const deletePost= (id) => {
        remove(ref(db, 'Blog/' + id))
    }

    const increaseFav = (post) =>{
        update(ref(db, 'Blog/' + post.id), {
            ...post,
            favourite: +post.favourite + 1
        })
    }

  return (
    <BlogContext.Provider value={{
        newPostOpen, 
        setNewPostOpen,
        writeToDatabase,
        title,
        content,
        image,
        setTitle,
        setImage,
        setContent,
        deletePost,
        posts,
        editPostOpen, 
        setEditPostOpen,
        editBlogPost,
        updateInfo, 
        setUpdateInfo,
        increaseFav
    }}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider