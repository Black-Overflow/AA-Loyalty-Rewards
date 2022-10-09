import { Link } from "react-router-dom";
 export function AAForm(){
 return <div className="AAForm"> 
 <form>
     <label>AAdvantage Sign Up</label>
                          <br></br>
                         <br></br>
                         <br></br>


              <ul>
                <li>
              <label>
                     First Name:&nbsp;
                     <input type="text" name="John Doe" length = "90px" value = "John" />
                   </label>
                   &nbsp;
                   </li>


                  <li>     <label>
                         Last Name:&nbsp;
                         <input type="text" name="John Doe" length = "90px" value = "Doe" />
                       </label>
                       &nbsp;</li>
             

                                      <li><label>
                                             Email Address:&nbsp;
                                             <input type="text" name="John Doe" length = "90px" value= "johndoe@gmail.com" />
                                           </label>
                                           &nbsp;</li>
                                      

                                                                              <li> <label>
                                                                                     Zip Code:&nbsp;
                                                                                     <input type="text" name="John Doe" length = "90px" value = "70128"/>
                                                                                   </label>
                                                                                   &nbsp;</li>
                                                                             
                                                                                   </ul>

                                                                                 <label> Please Verify that Information is Correct</label>
                                                                                 &nbsp;&nbsp;
                                                                                 {/* <button> Submit </button> */}
                                                                                 <button><Link to = "/ConfirmationPage">Submit!</Link></button>

                                                                                 </form>
                                                                                 </div>

 }

