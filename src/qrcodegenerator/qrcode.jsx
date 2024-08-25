import { useState } from "react";
export const QRcode = () => {
    const [image,setImage]=useState("");
    const [loading,setLoading]=useState(false);
    const [qrdata,setqrdata]=useState();
    const [qrsize,setqrsize]=useState();
    const GenerateQRcode=async()=>{
        // if (!qrdata || !qrsize) {
        //     alert("Please enter both data and size for the QR code.");
        //     return; // Exit the function if validation fails
        // }
        setLoading(true);
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
            setImage(url)
        }
        catch(error){
            console.error("Error generating QR code",error);
        }
        finally{
            setLoading(false)
        }
    }
    const DownloadQRcode=()=>{
        // if (!image) {
        //     alert("Please generate the QR code before downloading.");
        //     return; // Exit if no QR code has been generated
        // }
       fetch(image).then((response)=>response.blob()).then((blob)=>{
        const link=document.createElement('a');
        link.href=URL.createObjectURL(blob)
        link.download="QRcode.png"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
       })
       .catch((error)=>{
        console.error("Error downloading QR code",error);
       })
    }
    return (
        <div className="app-container">  
                <h1>QR GENERATOR</h1>
                <div className="inputclass">
                    <label htmlFor="dataInput" className="inputlabel">Data for QR code:</label>
                    <input type="text" id="dataInput" value={qrdata} placeholder="Enter data for QR code" onChange={(e)=>setqrdata(e.target.value)}/>  
                    <label htmlFor="sizeInput" className="input-label" >Image size (e.g.,200):</label>
                    <input type="number" id="sizeInput" value={qrsize} onChange={(e)=>setqrsize(e.target.value)} placeholder="Enter image size"/>    
                    <button className="gbutton" onClick={GenerateQRcode} disabled={loading || !qrdata || !qrsize}>Generate QR Code</button>
                    <button className="cbutton" onClick={()=>{
                        setImage();
                        setLoading(false);
                        setqrdata("");
                        setqrsize("");
                    }}>Clear</button><br/>
                    {loading&&<p>Please wait...</p>}
                    {image&&<img src={image} alt="" className="qrcodeimg"/>}
                    {image&&<br/>}
                    {image&&<button className="dbutton" onClick={DownloadQRcode} disabled={!image}>Download QR Code</button>}
                </div>  
        </div>
    )
}