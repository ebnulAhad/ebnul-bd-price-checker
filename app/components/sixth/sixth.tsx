"use client"
import "./sixth.css";
import Link from "next/link";
function Sixth() {
  function login() {
    const firstLine = document.querySelectorAll('.line-1,.line-2, .line-3, .line-4, .circle-s');
    firstLine.forEach(e => {
      if (e.classList.contains('inactive')) {
        e.classList.remove('inactive');
        e.classList.add('active');
        e.classList.add('glow');
      } 
      else if(e.classList.contains('glow')){
        e.classList.remove('glow');
        e.classList.add('inactive');
        e.classList.remove('active');
      }      

    });
  }

  function pop() {
    const glow = document.querySelector('.circle-sm');
    glow.classList.toggle('glow');
  }
  
  return (
    <div className="signup">
      <div onClick={pop} className="circle circle-sm">
        <button onClick={login} >Sign up</button>
        <div className="line line-1 inactive"></div>
      </div>

      <div className="circle-row" >
        <div className="circle circle-L line line-2 inactive">
          <input className="form-input" type="text" placeholder="Username"/>
        </div>
        <div className="circle circle-L1 line line-3 inactive">
          <input className="form-input" type="text" placeholder="Password"/>
        </div>
      </div>

      <div className="circle circle-m line line-4 inactive other-line"><Link href={"#"} className="forgot-pass">Forgot Password?</Link></div>
      <div className="circle circle-s inactive other-line"><Link href={"#"}>Login</Link></div>

    </div>
  );
}

export default Sixth;
