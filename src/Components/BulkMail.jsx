import { useState, useRef } from "react"
import axios from "axios"
import * as XLSX from "xlsx"

function BulkMail(){

const [msg, setmsg] = useState("")
const [status, setstaus] = useState(false)
const [emaillist, setemaillist] = useState([])
const fileInputRef = useRef(null);
const [subject, setSubject] = useState("")

function handlemsg(evt){
    setmsg(evt.target.value)
}

function handleSubject(evt) {
    setSubject(evt.target.value)
}

function handlefile(event){
//console.log(event.target.files[0])

    const file = event.target.files[0]
    //console.log(file)
    
    //create file reader object, that is used to read the file.
    const reader = new FileReader();

    reader.onload = function (e) {
        //console.log(e.target.result)
        const data = e.target.result

        const workbook = XLSX.read(data, { type: 'binary' })
        //console.log(workbook)

        const sheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetName]
        //console.log(worksheet)
        const emaillist = XLSX.utils.sheet_to_json(worksheet,{header:'A'})
        //console.log(emaillist)
        const totalemail = emaillist.map(function(item){return item.A})
        //console.log(totalemail)
        setemaillist(totalemail)
    }

    //Excel files are binary format as default
    reader.readAsBinaryString(file);

}

function send(){
    if (status) return  

  if (!subject.trim()) {
    alert("Subject is required")
    return
  }

  if (!msg.trim()) {
    alert("Message required")
    return
  }
  if (emaillist.length === 0) {
    alert("Please upload an email file")
    return
  }

    setstaus(true)
    axios.post("https://bulk-mail-project-delta.vercel.app/sendemail",{subject:subject,msg:msg,emaillist:emaillist})
    .then(function(data){
        if (res.data === true) {
          alert("Email Sent Successfully")
        } else {
          alert("Failed. Try Again Later")
        }
      })
      .catch(function (error) {
        console.error(error)
        alert("Server error. Please try again.")
      })
      .finally(function () {
        setstaus(false)
        setemaillist([])
        fileInputRef.current.value = ""
        setmsg("")
        setSubject("")
      })
}

    return(
        <>
            <div className="bg-cyan-700 text-white text-2xl font-bold p-2 mt-6">
                BulkMail
            </div>
            <div className="bg-cyan-600 text-white text-lg p-2">We can help your business with sending multiple emails at once</div>
            <div className="bg-cyan-500 text-white p-2">Drag and Drop</div>
            <div className="bg-cyan-400 p-4">
                <input type="text" value={subject} onChange={handleSubject} className="w-2/3 border rounded border-black p-2 mb-3" placeholder="Enter email subject..." />
                <textarea onChange={handlemsg} value={msg} className="w-2/3 h-36 border rounded border-black p-1" placeholder="Enter the email text...."></textarea>
                <div>
                    <input onChange={handlefile} ref={fileInputRef} type="file" className="border p-3 rounded mt-2"></input>
                </div>
                <p className="text-lg font-semibold mt-4">Total Emails in the file : {emaillist.length}</p> 
                <button onClick={send} className="bg-cyan-800 text-white px-3 m-4 py-1 text-lg font-semibold rounded  hover:bg-cyan-300 hover:text-black">{status?"Sending...":"Send"}</button>
                 
            </div>
            <div className="bg-cyan-300 p-4"></div>
            <div className="bg-cyan-200 p-4"></div>
        </>
    )
}
export default BulkMail