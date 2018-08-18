import React from 'react';
export const Nav = () => (
  <ul className= "nav">
    <li className="nav-item">
      <a className="nav-link active" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Docs</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="/Try">Try It Live</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="/Faq">FAQ</a>
    </li>
  </ul>
);

export class Header extends React.Component {
    render() {
      return (
       <div className="container-fluid">
          <div className="row">
            <div className="backImg col-lg-6" style={{ height: '100vh' }}>
           </div>
            <div className="col-lg-6" style={{ height: '100vh' }}>
             <div className="row" id="head">
               <Nav />
               <div className="pos-abs">
                  <h2 className="display-4 text" style={{width: '70%', fontSize: '2.5rem', marginBottom: '30px'}}>
                    Quisque in velit id ante suscipit convallis in ac mauris. Aliquam
                    eget venenatis urna, quis facilisis libero. 
                  </h2>
                  <button type="button" class="btn btn-outline-dark round" style={{ borderRadius: '30px'}}>Read More</button>
               </div>
             </div>
           </div>
         </div>
       </div>
       );
   }

}
