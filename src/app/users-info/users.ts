export class User {
    constructor(data:any) {
        this.Gender = data.gender
        this.Name = `${data.name.title} ${data.name.first} ${data.name.last}`;
        this.Email = data.email;
        this.Login = data.login.username;
        this.Picture = data.picture.medium;
        this.Latitude = data.location.coordinates.latitude;
        this.Longitude = data.location.coordinates.longitude;
    }

public Gender : string
public Name : string
public Email : string
public Login : string
public Picture: string
public Location: string
public Latitude: number
public Longitude: number


}

