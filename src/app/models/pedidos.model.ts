export class pedidos{
  constructor(
    public _id: String,
    public producto:String,
    public cantidad:Number,
    public subTotal:Number,
    public alumno:String,
    public carnet:String,
    public tipo:String,
    public fechaPedido:String,
    public idAlumno:String,
    public idProducto:String,
  ){}
}
