"use client"
import "./sixth.css";
import Link from "next/link";
function Sixth() {
  function login() {
    const Lines = document.querySelectorAll('.line');
    Lines.forEach(e => {
      e.classList.toggle("glow")
    });
  }


  
  return (
    <div className="signup">
      <div className="circle circle-sm glow">
        <button onClick={login} >Sign up</button>
        <div className="line line-1 "></div>
      </div>

      <div className="circle-row" >
        <div className="circle circle-L line line-2  ">
          <input className="form-input" type="text" placeholder="Username"/>
        </div>
        <div className="circle circle-L1 line line-3  ">
          <input className="form-input" type="text" placeholder="Password"/>
        </div>
      </div>

      <div className="circle circle-m line line-4  other-line "><Link href={"#"} className="forgot-pass">Forgot Password?</Link></div>
      <div className="circle circle-s  other-line line noline line-5"><Link href={"#"}>Login</Link></div>

    </div>
  );
}

export default Sixth;
