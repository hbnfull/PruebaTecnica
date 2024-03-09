export class Login {
    constructor(public username: string, public password: string) {}
}

export class Register {
    constructor(
        public nombre: string,
        public apellido: string,
        public email: string,
        public password: string,
        public rpassword: string
    ) {}
}
