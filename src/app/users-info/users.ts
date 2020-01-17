export class User {
    /**
     *
     */
    constructor(data:any) {
        this.Gender = data.gender
        this.Name = `${data.name.title} ${data.name.first} ${data.name.last}`;
        this.Email = data.email;
        this.Login = data.login.username;
        this.Picture = data.picture.medium;
    }
//     results: [{
//         gender: string;
//         name: {
//             title: string;
//             first: string;
//             last: string;
//         }
//         email: string;
//         login: {
//             uuid: string;
//             username: string;

//         }
//         picture: any;
//     }
// ]
public Gender : string
public Name : string
public Email : string
public Login : string
public Picture: string


}

