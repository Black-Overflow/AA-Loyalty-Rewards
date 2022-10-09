import { Link } from "react-router-dom";
export function Verification(){
  return <div className="Verif"> 
   <form>
          <label id = "2">
            Please Enter Phone Number for Verfication:&nbsp;
            <input type="text" name="name" length = "90px" />
          </label>
          {/* <input type="submit" value="Submit"  />&nbsp; */}
          <button><Link to = "/aaform">Submit!</Link></button>
          {/* <button onClick={()=>window.location.href="http://localhost:3000/aaform"}>Submit!</button> */}
        </form>
        </div>
}
