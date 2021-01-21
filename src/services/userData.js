
const USER_DATA_TEMP = {
  basic_info: {
    name: "Anuj Pancholi",
    pic_url: "https://avatars2.githubusercontent.com/u/25117330?v=4"
  },
  links: [{
    text: "Github",
    url: "https://github.com/AnujPancholi"
   },{
    text: "Stackoverflow",
    url: "https://stackoverflow.com/users/6718353/anuj-pancholi"
  }]
}



export const getUserData = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(USER_DATA_TEMP)
    
    },3000)
  })
    
}

const userDataService = {
    getUserData
}

export default userDataService;
