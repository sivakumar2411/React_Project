import axios from 'axios';

const Api_URL ='http://localhost:3410';

export const getAllDatas=()=> axios.get(`${Api_URL}/BookData`);

export const getAllUserDatasFP=()=> axios.get(`${Api_URL}/UserDatas`);

export const getAllgenres=()=> axios.get(`${Api_URL}/Genres`);

export const getAllUserDatas=()=> axios.get(`${Api_URL}/LogInData`);

export const getUserById = (id) => axios.get(`${Api_URL}/LogInData/${id}`);

export const getCurUser = () => axios.get(`${Api_URL}/CurrentUser/${1}`);

export const addNewUser = async (data) => {
    try {
        const { data: existingData } = await axios.get(`${Api_URL}/LogInData`);
        const newId = (Math.max(...existingData.map(user => user.id)) + 1,0);
    const newData = {
        ...data,
        id: newId
    };
    await axios.post(`${Api_URL}/LogInData`, newData);
    const AllDatas={
        id:newId,
        uname: newData.name,
      Name: newData.name,
      Gender:"...",
      Region:"...",
      Bio:"...",
      IntrestedTopics: {
        Fiction: false,
        Fantasy: false,
        Action: false,
        Horror: false,
        Comic: false,
        Romance: false,
        History: false
      }
    }
    await axios.post(`${Api_URL}/UserDatas`,AllDatas);
    alert("SignUp Successfully");
 } catch (error) {
        console.error('Error adding new user:', error);
    }
};

export const addBookReview = async (bookName,newReview) => {
    try {
        const { data: existingData } = await axios.get(`${Api_URL}/BookData`);
        const bookindex=existingData.findIndex(({name})=>name===bookName);
        const ExistingBookData=existingData[bookindex];
        if(bookindex!==-1)
        {const newReviewId = ExistingBookData.reviews.length + 1;
        const Review = {
            ...newReview,
            id: newReviewId
        };
        ExistingBookData.reviews.push(Review);
        await axios.put(`${Api_URL}/BookData/${bookindex+1}`,ExistingBookData);}
    }
    catch (error) {
        console.error('Error in adding new review:', error);
    }
};

export const updatecurUser =(data)=>axios.put(`${Api_URL}/CurrentUser/${1}`,data);