export class Account {

    constructor(
      public logged: boolean | null,
      public user: string,
    ) {}
}

export class regAccount {

  constructor(
      public nombre: string,
      public apellido: string,
      public email: string,
      public contraseña: string,
  ) {}
}
