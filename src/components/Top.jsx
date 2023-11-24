import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




function Top() {
  return (

    <>
    <div className="nav">
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
           <div className='d-flex align-items-center'>
                <img
                  src="https://previews.123rf.com/images/dragomirescu/dragomirescu2103/dragomirescu210300341/168173318-p-creative-blue-gradient-alphabet-letter-logo-for-branding-and-business-design-for-lettering-and.jpg"
                  width="210"
                  height="110"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />

               <div style={{marginTop:'-70px'}}> 
               <button className='btnxyz' style={{}}> <span><img  height={'15px'} width={'25px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mog4s3fqgsHlk313q8DwvunAXVoeVIGddw&usqp=CAU" alt="" /></span>  XYZ Enterprises Pvt. Ltd</button>
               
               <button className='btnarw'>⮟</button>
               
               </div>
           </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  </>
    
  )
}

export default Top