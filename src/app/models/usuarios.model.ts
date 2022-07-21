export class usuarios{
  constructor(
    public _id: String,
    public nombres: String,
    public apellidos: String,
    public carnet:String,
    public usuario: String,
    public password: String,
    public correo:String,
    public rol: String,
    public cuentaAdmin:Number,
    public cuentaCafeteria:Number,
    public marbete:[{
        vehiculo:String,
        placas:String,
        modelo:String,
        fechaInicio:String,
        fechaFin:String,
    }]
  ){}
}
