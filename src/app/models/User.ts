// export class User {
//   constructor(corpId: string, username: string, passHash: string) {}
// }
export class User {
  constructor(
    public corpId: string,
    public username: string,
    public passHash: string
  ) {}
}
