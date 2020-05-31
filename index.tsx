import "./index.less";

async function main()
{
    console.log(await getExpData());
}

// get expedition data from data file
function getExpData():Promise<ExpeditionData[]>
{
    return new Promise((resolve)=>{
        var xhr=new XMLHttpRequest();
        xhr.open("GET","data/expeditiondata.csv");

        xhr.onreadystatechange=()=>{
            if (xhr.readyState==4)
            {
                resolve(fixRawExpeditionData(Papa.parse(xhr.response,{
                    header:true
                }).data));
            }
        };

        xhr.send();
    });
}

// given raw expedition data, fix strings to floats and calculate
// total field
function fixRawExpeditionData(data:RawExpeditionData[]):ExpeditionData[]
{
    return _.map(data,(x:RawExpeditionData):ExpeditionData=>{
        var expdata:ExpeditionData={
            name:x.name,
            gas:parseFloat(x.gas),
            ammo:parseFloat(x.ammo),
            mre:parseFloat(x.mre),
            parts:parseFloat(x.parts),
            doll:parseFloat(x.doll),
            equip:parseFloat(x.equip)
        };

        expdata.total=expdata.gas+expdata.ammo+expdata.mre
            +expdata.parts+expdata.doll+expdata.equip;

        return expdata;
    });
}

window.onload=main;