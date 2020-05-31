interface ExpeditionData
{
    name:string
    gas:number
    ammo:number
    mre:number
    parts:number
    doll:number
    equip:number
    total?:number
}

// expedition data after data read, still strings
interface RawExpeditionData
{
    name:string
    gas:string
    ammo:string
    mre:string
    parts:string
    doll:string
    equip:string
}