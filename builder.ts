// class User {

//     constructor(
//         public email: string,
//         public username: string,
//         public age: number,
//     ) {}
// }

// const user1: User = new User("email@gmail.com", "lel", 42);

class User {
    email: string = "";
    firstname: string = "";
    lastname: string = "";
    age: number = 0;

    constructor() {}
}

class UserBuilder {

    private _user: User;

    constructor() {
        this._user = new User();
    }

    setEmail(email: string): UserBuilder {
        this._user.email = email;
        return this;
    }
    setFirstname(firstname: string): UserBuilder {
        this._user.firstname = firstname;
        return this;
    }
    setLastname(lastname: string): UserBuilder {
        this._user.lastname = lastname;
        return this;
    }
    setAge(age: number): UserBuilder {
        this._user.age = age;
        return this;
    }
    
    build(): User {
        return this._user;
    }
}

const user1: User = new UserBuilder()
                        .setEmail("email@gmail.com")
                        .setFirstname("seguin")
                        .setLastname("Lachèvr")
                        .setAge(1000)
                        .build();
