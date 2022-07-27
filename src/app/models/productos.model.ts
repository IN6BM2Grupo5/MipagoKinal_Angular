export class productos{
  constructor(
    public _id: String,
    public producto:String,
    public descripcion:String,
    public precio:Number,
    public stock:Number,
    public estado:String,
    public tipo:String,
    public subTipo:String
  ){}
}
