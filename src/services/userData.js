
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
    },{
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/anuj-pancholi-830056104/"
    },{
        text: "Dev.to",
        url: "https://dev.to/anujpancholi"
    },{
        text: "Medium",
        url: "https://medium.com/@anuj.pancholi.1"
    }]
}



export const getUserData = () => {
  return new Promise((resolve,reject) => {
    // making this a promise as this may be an API call
      resolve(USER_DATA_TEMP)
  })
    
}

const userDataService = {
    getUserData
}

export default userDataService;
