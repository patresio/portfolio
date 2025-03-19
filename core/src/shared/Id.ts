export default class Id {
  public static gerar(): string {
    return `${Math.random().toString(36).substring(2, 9)}-${Math.random()
      .toString(36)
      .substring(2, 9)}-${Math.random().toString(36).substring(2, 9)}`
  }
}
