export class product {
    constructor(
        public producto: string | undefined | null,
        public stock: string | undefined,
        public precio: string | undefined,
        public descripcion: string | undefined,
        public imagen: File
    ) {}
}