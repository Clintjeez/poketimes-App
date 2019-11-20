const initState = {
  posts: [
    { id: '1', title: 'dolorem eum', body: 'Lorem20, Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est sequi quod, distinctio quia deleniti aut animi harum itaque fugit.' },
    { id: '2', title: 'aut animi harum', body: 'Lorem20, Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est sequi quod, distinctio quia deleniti aut animi harum itaque fugit.' },
    { id: '3', title: 'harum itaque fugi', body: 'Lorem20, Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est sequi quod, distinctio quia deleniti aut animi harum itaque fugit.' }
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;